# 逐光 / LightBearing · 技术架构与 API26 实施规格

> Xuzuo Studio · API 26 only · v0.1 草案，等待用户审核；不代表编译验证。

**应用**：逐光 / LightBearing · **Bundle**：`com.hhyxx.LightBearing` · **代码仓库**：https://github.com/hhyxx1/LightBearing。

## 1. 技术基线与工程边界

- Stage + ArkTS + ArkUI、API 26 only；不能偷偷兼容 Android SDK/旧版视频编辑 SDK。
- 先使用 DevEco Studio + 官方 SDK26 核实 import、since、SystemCapability、ACL、编译行为。
- `entry/` 存 UIAbility 和页面，`model/`、`domain/`、`repository/`、`services/`、`platform/`、`components/` 分层。
- `assets` 仅由本仓库审阅后复制；签名/证书/用户数据不入 Git。

**现状例外**：保留已有 ArkTS 工程，不重新生成 `AppScope`；先对比现有分支，保持签名包名、已测核心代码和 RDB schema。UI-1B-R2 只有 HTML 原型，下一步应从现有 `ObservationPanel` 与 `HomePage` 迭代。

## 2. API 与子系统设计（必须探测真实性）

- 现有 `SolarCalc.ets` + `TimeUtil.ets` + `LocalTimeResolver.ets`，严禁无测试重写
- `ObservationPanel.ets`、`Charts.ets`、`HomePage.ets` 实际现存；R2 为设计原型，需映射到 ArkUI
- 已有 `ArkData RDB`、Localization Kit i18n 时区、Location Kit、Sensor Service Kit、Core File Kit
- 离线地图由 Canvas 作方位图；Map Kit 需要 AGC 配置才启用
- 现存 `fix/core-quality-audit` 分支领先 main；先审查 diff 后在新分支实施

## 3. 数据模型（领域接口；字段为草案）

```text
Place{id,name,latWgs84,lonWgs84,tzId,note,tags,createdAt}
SolarResult{instantUtc,azimuthDeg,altitudeDeg,phase,sourceMethod}
ShootWindow{startUtc,endUtc,phase,errorAz,errorAlt}
ShootPlan{id,placeId,selectedUtc,targetAzimuth,targetAltitude,note,checklist}
Job{id,kind,progress,status,cancelled,errorCode}
FileAsset{id,pathOrUri,mime,size,checksum}
AppSettings{theme,units,twilightThresholds,reduceMotion}
```

**持久化规则**：对象 ID 稳定、创建修改时间由单一时钟源生成；写入有事务；schema 迁移保留旧数据；大型二进制素材放沙箱并记录路径/校验和。任务完成与文件持久化须保持一致，取消不标记成功。

## 4. 主流程执行边界

1. 首次打开→跳过/完成引导→选择已有机位或通过表单新建机位→按机位时区显示当地今天。
2. 首页移动选中时刻→同一 selectedUtc 更新数值、曲线标记、UTC 偏移与光线阶段→点击“下一窗口”跳到窗口开始。
3. 反向寻找目标方向→输入角度/容差与日期范围→进度可取消→查看候选误差→加入拍摄计划。
4. 在回拨日选择两次相同本地时间→界面明确显示两种 UTC 偏移→用户手动选择→保存后原 UTC 不可漂移。
5. 选择导出→系统保存选择器→生成真实 PNG/CSV→返回 URI/错误/取消状态→外部打开验证。

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

- 时间轴基于真实当地日 `[startUtc,endUtc)`，不是固定 `86400000` 毫秒。生成日光分段时严格裁剪到日界。
- 角度环形差：`min(abs(a-b),360-abs(a-b))`；搜索输出必须重新代回太阳算法。
- 时区转换使用 Localization Kit 的 IANA 规则；`GAP / OVERLAP / UNAVAILABLE` 显式处理，不能静默选错 UTC。
- 观测组件对 `selectedUtc` 只保留单一事实源，不让读数、曲线、分段带和日历分别算“今天”。
- `ObservationBands`、`Timeline`、`TimeSelection` 已有代码，移植 R2 仅重构显示与纯函数适配；先读测试。
- Map Kit 尚未有完整配置时保留离线方位图，不将无地图显示为核心失败。

## 7. 权限、审计、错误恢复

- 前台定位：`APPROXIMATELY_LOCATION` / `LOCATION`，仅用户点击时申请
- 无后台定位；无相机和麦克风；完全离线主流程无需 INTERNET
- Map Kit 条件接入需真实服务资格，未配置时不强制索取

**阻断因素**：

- 原型的曲线/色带按近似采样生成，生产不能把 5min fixture 当真值
- R2 纯 HTML 当前没有直接更新真实 HAP；必须逐项迁移
- 不改变 `com.hhyxx.LightBearing` 大小写、签名配置与老用户 RDB
- 极短目标时窗可能被粗采样跳过；搜索策略需完成短窗口/合并/分布回归
- 高纬极昼极夜及无本地日期时必须呈现明确状态

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
