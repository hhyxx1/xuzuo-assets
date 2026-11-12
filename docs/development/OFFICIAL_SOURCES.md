# 官方 SDK 26 来源与 API 证据登记标准

此文件只提供**经过核验的华为官方入口**和研究规则；没有在这里列出的具体 Kit API，不代表不允许使用，而是由开发 AI 在线到官方 API Reference 逐项查找并验证。

## 官方来源起点（2026-11-12 复核）

- **API26/DevEco/SDK 正式配套关系**：https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-2600/ —— API 26.0.0 Release；DevEco Studio 26.0.0 Patch 的兼容版本；要看实际设备支持 API 范围。
- **全部版本总览**：https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-allversion/ —— 与独立概览的发布日有一天差异，勿因此修改 SDK 基线。
- **官方开发文档总入口**：https://developer.huawei.com/consumer/cn/doc/doccenter 。
- **ArkTS 语言概览**：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-overview 。
- **API 26 OS 新增功能**：https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-2600/ 。
- **API 26 行为变化**：https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-overview-2600/ 。
- **相机 Camera Kit 概览**：https://developer.huawei.com/consumer/cn/doc/HarmonyOS-Guides/camera-overview/ 。
- **媒体开发综述（摄像头、播放、编码等 API 参考导航）**：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multimedia-development-overview/ 。

注意：上面“概览/综述”**不能代替真正调用到的单个方法对应 API Reference**。要在页面内跟随“API参考”链接进入具体类和函数，并在本机 SDK26 声明再验证。若网页重定向或路径迁移，保留原访问 URL、真实最终 URL 与时间，不杜撰路径。

## 每一类 API 的研究查询

- ArkTS / ArkUI：声明式组件、@State / UI 状态管理、Navigation、List/Grid、Canvas、异步任务、键盘/无障碍。
- Ability / AppScope：Stage、UIAbility、生命周期、后台行为、跳转、安全区、bundleName 与 AGC。
- 本地数据：ArkData RDB、Preferences、文件沙箱、File Picker/PhotoPicker、权限声明和生命周期。
- LightBearing：Localization Kit / IANA 时区处理、Location Kit、Sensor Service Kit、Canvas（以及可选 Map Kit 的 AGC/网络要求）。
- FrameMori：Camera Kit、Image Kit、VideoEncoder、AVMuxer、媒体源帧率/PTS、File Picker、真实音轨支持。
- VoxCarve：FilePicker、Audio/AVDemuxer、AudioDecoder/PCM、AudioRenderer、AudioEncoder、AVMuxer、Core Speech Kit 设备与离线/在线权限及时间戳粒度。
- MacroLoom：Network Kit WebSocket/WSS/TLS、Scan Kit（如使用）、密钥安全存储，Windows .NET/WinUI/WPF/SendInput 另需 Microsoft Learn 官方文档。

## API_AUDIT.md 必须包含的列

| 字段 | 证据 |
|---|---|
| 需求 ID / 调用场景 | PRD 功能编号、页面与用户操作 |
| Kit + import + 方法签名 | 实际源码将使用的完全限定符 |
| 本机 SDK 声明路径/位置 | 真实文件路径和相关声明片段/行 |
| 官方 API Reference URL / 访问日期 | 真正打开过的具体方法页，而不是搜索关键词 |
| 适用 API / since | 对 API 26 直接可用？旧版升级差异？ |
| SystemCapability/权限/ACL | 普通第三方 App 是否有权限？ |
| 机型/模拟器条件 | 最低能力与检测方法 |
| Probe 代码 / 命令 / 日志 | 可复现测试与真实返回码 |
| 当前状态 | VERIFIED_DEVICE / PASS_HOST / DEVICE_CONDITIONAL / BLOCKED / NOT_RUN |
| 降级与用户提示 | 不支持时还能完成哪些核心操作 |

**不得把“本地有 SDK 声明”标成真机 VERIFIED，不得把“模拟器有 UI 截图”标成设备能力通过。**
