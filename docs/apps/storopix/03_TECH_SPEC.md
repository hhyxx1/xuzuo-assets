# 店图匠 / StoroPix · 技术架构与 API26 实施规格

> Xuzuo Studio · API 26 only · v0.1 草案，等待用户审核；不代表编译验证。

**应用**：店图匠 / StoroPix · **Bundle**：`com.hhyxx1.storopix` · **代码仓库**：（待创建独立仓库）。

## 1. 技术基线与工程边界

- Stage + ArkTS + ArkUI、API 26 only；不能偷偷兼容 Android SDK/旧版视频编辑 SDK。
- 先使用 DevEco Studio + 官方 SDK26 核实 import、since、SystemCapability、ACL、编译行为。
- `entry/` 存 UIAbility 和页面，`model/`、`domain/`、`repository/`、`services/`、`platform/`、`components/` 分层。
- `assets` 仅由本仓库审阅后复制；签名/证书/用户数据不入 Git。

## 2. API 与子系统设计（必须探测真实性）

- 系统 PhotoPicker 或 Core File Kit：用户主动选择照片，复制源文件到沙箱
- Image Kit：ImageSource/PixelMap/ImagePacker，真实 JPEG/PNG 解码与编码
- Core Vision Kit 的主体分割仅条件增强：需 SDK26/设备实测确认
- ArkData RDB：批次/店铺/图片资产/非破坏性配方/质检/导出记录
- 系统 DocumentSaveOptions / 目标保存路径：原图不覆写，安全命名冲突策略
- 性能：分辨率分层缩略图缓存、Worker/TaskPool 和资源及时 release

## 3. 数据模型（领域接口；字段为草案）

```text
StoreProfile{id,name,brandColor,defaultPresetId,createdAt}
PhotoBatch{id,storeId,title,status,createdAt,updatedAt}
PhotoAsset{id,batchId,sourcePath,checksum,width,height,orientation,mime}
EditRecipe{id,photoId,rotate,crop,scale,brightness,contrast,background,watermark}
StylePreset{id,storeId,name,aspectRatio,backgroundColor,padding,exportSize}
QualityFlag{id,photoId,kind,severity,score,status}
ExportJob{id,batchId,total,completed,outputUri,status,errorCode}
```

**持久化规则**：对象 ID 稳定、创建修改时间由单一时钟源生成；写入有事务；schema 迁移保留旧数据；大型二进制素材放沙箱并记录路径/校验和。任务完成与文件持久化须保持一致，取消不标记成功。

## 4. 主流程执行边界

1. 创建店铺档案→选店铺风格→选 1–20 张商品图→显示导入缩略图与检查结果。
2. 套用统一画幅/背景/留白→处理队列→逐张打开编辑器对比前后→标记质检。
3. 设备支持主体分割→显示可视化遮罩→用户放大边缘复核；设备不支持→正常裁剪/纯色板。
4. 批次导出→按命名模板生成文件→校验输出数量、尺寸与格式→外部文件管理器检查。

## 5. 异步任务状态机

```text
NEW → VALIDATING → QUEUED → RUNNING → VERIFYING → SUCCESS
             └→ UNSUPPORTED       ├→ CANCELLING → CANCELLED
                                  └→ FAILED → RETRY_QUEUED
```

- 所有长任务记录 `taskId`, `status`, `progress`, `errorCode`, `startedAt`, `finishedAt`。
- UI 不得根据按钮点击直接设置 SUCCESS；必须等文件校验/Agent ACK/计算结果验证结束。
- 任务多次点击或重试需防重复执行；退出页面释放相机/音视频 decoder/网络会话与资源。

## 6. App 特有的高风险实现细节

- ImageSource/Packer 的原始 EXIF 方向需正确应用，编辑参数按比例缩放避免预览与原图坐标漂移。
- 批量任务以队列处理、逐张低内存工作流，必须在必要时释放 PixelMap，避免大量大图 OOM。
- Core Vision 主体分割必须先做 SDK26 和真机 probe；无支持时 UI 仍能完成手动裁剪和纯色背景。
- 色彩/亮度/锐化的转换参数必须可重现；保存配方不覆盖源文件，导出时统一按全尺寸渲染。
- JPEG/PNG 质量参数和透明度、EXIF/隐私字段需外部查看验证；对于透明玻璃等素材提示人工检查边缘。

## 7. 权限、审计、错误恢复

- 图片选择使用 PhotoPicker 用户选择授权；不申请整个相册权限
- 保存到系统文件选择器授权，不静默写入任意用户目录
- 不需要 CAMERA 和 MICROPHONE；若未来拍商品照应另行定义权限
- 不使用受限 ACL；离线主流程不声明 INTERNET

**阻断因素**：

- 透明玻璃、毛发、复杂背景的分割误差明显；文案只承诺“辅助抠图”
- Color profile、JPEG 色域、元数据和色温会影响实拍颜色一致性
- 巨型照片批次可能导致 OOM；必须分批/分辨率分级处理
- 商家的风格差异较大，预设应可复用但不硬锁唯一风格
- 输入图库 URI 可能过期，必须在有效期内保存沙箱副本

## 8. 文件结构提议（不是已存在的代码证明）

```text
AppScope/
entry/src/main/ets/entryability/
entry/src/main/ets/pages/
entry/src/main/ets/components/
entry/src/main/ets/domain/
entry/src/main/ets/model/
entry/src/main/ets/repository/
entry/src/main/ets/services/
entry/src/main/ets/platform/
entry/src/main/resources/{base,dark}/
entry/src/ohosTest/
docs/{API_AUDIT,ACCEPTANCE,README}.md
```

## 9. 真机与构建质量门槛

- `API_AUDIT.md` 按接口列 Kit、SDK 文件/版本、since、权限、设备限制、测试结论。
- `README.md` 列本机 DevEco SDK 和构建命令、签名配置说明、最小测试步骤。
- `ACCEPTANCE.md` 记录真实测试命令、设备系统版本、结果、未验证项。
- 对运行环境不可访问的测试，报告 `NOT_RUN`，不能声称已测试通过。
