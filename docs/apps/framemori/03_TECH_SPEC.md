# 帧间 / FrameMori · 技术架构与 API26 实施规格

> Xuzuo Studio · API 26 only · v0.1 草案，等待用户审核；不代表编译验证。

**应用**：帧间 / FrameMori · **Bundle**：`com.hhyxx.framemori` · **代码仓库**：（待创建独立仓库）。

## 1. 技术基线与工程边界

- Stage + ArkTS + ArkUI、API 26 only；不能偷偷兼容 Android SDK/旧版视频编辑 SDK。
- 先使用 DevEco Studio + 官方 SDK26 核实 import、since、SystemCapability、ACL、编译行为。
- `entry/` 存 UIAbility 和页面，`model/`、`domain/`、`repository/`、`services/`、`platform/`、`components/` 分层。
- `assets` 仅由本仓库审阅后复制；签名/证书/用户数据不入 Git。

## 2. API 与子系统设计（必须探测真实性）

- Camera Kit：PhotoSession、PhotoOutput、预览显示；先在 API26 实机探测 AE/AF/AWB 支持
- Image Kit：图片解码、缩略图、PixelMap、编码器输入格式转换
- AVCodec Kit：逐帧 VideoEncoder + AVMuxer，需要逐帧 PTS 与音轨 PTS
- Media/Audio Kit：音频播放器、录音（仅用户操作）、音轨混合或编码
- Core File Kit/Picker：选择用户照片和音频、DocumentSaveOptions 保存
- ArkData RDB：索引/命令历史；实际原帧存沙箱，不能只在 RDB 里存 blob

## 3. 数据模型（领域接口；字段为草案）

```text
AnimationProject{id,name,fps,aspectRatio,width,height,createdAt,updatedAt}
Frame{id,projectId,index,sourcePath,rotation,crop,durationMs,brightness,createdAt}
CameraPreset{id,projectId,aeMode,afMode,awbMode,opacity,grid,timerMs}
AudioTrack{id,projectId,path,offsetUs,gain,trimFromUs,trimToUs}
EditCommand{id,projectId,type,payload,at}
ExportJob{id,projectId,format,resolution,progress,state,errorCode}
```

**持久化规则**：对象 ID 稳定、创建修改时间由单一时钟源生成；写入有事务；schema 迁移保留旧数据；大型二进制素材放沙箱并记录路径/校验和。任务完成与文件持久化须保持一致，取消不标记成功。

## 4. 主流程执行边界

1. 创建项目→选画幅/FPS→拍摄前权限说明→预览与能力探测→真实拍帧→缩略图入库→逐帧播放。
2. 启用洋葱皮→调整透明度→移动对象→按实际快门拍摄→选择上一帧叠加检查位置。
3. 时间轴长按选择帧→移动/复制/删除→撤销→调整局部时长→试听配音。
4. 导出界面选择尺寸/帧率→检查设备编码器→异步逐帧写入真实视频轨→音频可用时封装→外部播放器验证。

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

- 拍摄会话对象通常不可跨 Worker 随意传递；相机生命周期跟随前台页面，Frame 文件写入完成后再入 RDB。
- 编码序列：逐帧读取图片 → 转成编码器接受的像素格式 → 按每帧持续时长建立单调 PTS → VideoEncoder → AVMuxer；音轨需按输出时基重新编码并同步。
- AE/AF/AWB 锁定是设备能力字段，任何不可用项禁用并提供说明，不可简单在 UI 上模拟“锁定”。
- 原帧不可被编辑覆盖；每次单帧编辑只写变换 Recipe，最终导出统一渲染。
- 断电恢复时根据文件校验和与索引重建未提交的最后一帧，不丢整个项目。

## 7. 权限、审计、错误恢复

- CAMERA：拍摄工作台首次使用时询问 user_grant
- MICROPHONE：仅“录制配音”时申请
- 照片/音乐：走用户系统 Picker，避免整个图库权限
- 导出目标：由用户选择系统保存路径

**阻断因素**：

- Camera Kit 的手动对焦、白平衡、曝光固定由设备支持，不保证逐个都能锁定
- MP4 从照片序列编码不是 AVTranscoder 的简单转码，必须真实逐帧 VideoEncoder + Muxer
- HEVC/H.264、AAC 能力与分辨率/帧率受机型 codec 限制，需按能力矩阵选择
- 大帧数 PixelMap 的内存与释放必须监控；编码前不要一次性载入 500 帧
- 间隔拍摄只保证应用在前台且可控，不作后台定时/保活承诺

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
