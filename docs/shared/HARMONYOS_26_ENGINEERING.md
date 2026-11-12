# HarmonyOS API 26 工程与 SDK 准入规范

## 版本/工程基线

- **包名纪律**：`bundleName` 是应用唯一标识，AGC 创建应用时要求与 DevEco `AppScope/app.json5` **完全一致**，注册后不支持修改。新 App 推荐 `com.hhyxx.<app>`（待注册）；既有 LightBearing 保留 `com.hhyxx.LightBearing`，StoroPix 保留 `com.hhyxx.storopix`。不要将 GitHub 账号 `hhyxx1` 当作包名账号段推导依据；也不要未经核实宣称 AGC 一定区分或忽略大小写，**按原注册字符串逐字匹配**。详见 [包名登记](../03_PACKAGE_AND_RELEASE_REGISTRY.md) 与 [华为官方 AGC 新建应用规范](https://developer.huawei.com/consumer/cn/doc/App/agc-help-create-app-0000002247955506/)。

- Target：HarmonyOS 7，API 26 only；Stage 模型、ArkTS、ArkUI。
- 新建工程以 本地 DevEco Studio 和 API26 工程模板为准：逐项核实 `compileSdkVersion`、`compatibleSdkVersion`、`targetSdkVersion` 的 schema 与 HAP 产出位置。
- 普通个人开发者签名为前提，不勾受限 ACL，不依赖系统签名、root、隐藏 API 或 Android-only SDK。
- 对多机型不保证的能力，产品页面要能检测设备并展示明确受限状态。

## API 核验五步（每个外部 Kit 都必须执行）

1. SDK26 本地 `.d.ts`、Kit 导入路径、`since`、SystemCapability、权限与调用线程检查。
2. 官方对应版本指南与 API Reference 二次核对，链接记录入 `API_AUDIT.md`。
3. 建最小 probe 页面/服务，实际调用并记录返回值与错误码。
4. IDE/命令行构建 HAP，在可用的真机与模拟器实际操作。
5. 根据实测将状态标为 `VERIFIED / DEVICE_CONDITIONAL / BLOCKED / NOT_TESTED`，禁止使用“查到文档=已完成”。

## 权限与系统互操作

- `PhotoPicker`/文件选择器优先，用户挑选数据，不申请整个相册或全盘的特殊权限。
- 定位权限仅在明确请求前台一次定位时申请；关闭定位仍允许手动经纬度。
- 相机/麦克风只在明确拍摄/录音时申请；拒绝授权后解释原因并可导入已有素材（如适用）。
- 网络只为有真实网络需求的应用声明；局域网 Windows 控制仍需安全配对与端口限制。
- 永不将用户拒绝权限视为“用户出错”，不得在未说明时反复弹系统授权。

## 持久化/业务架构

- UIAbility/ArkUI -> ViewModel/Controller -> UseCase -> Repository/Adapter -> ArkData RDB / System Kit。
- 业务核心应有纯函数层，便于宿主机测试；跨页面共享主题、设置、任务和选中项目状态。
- RDB schema 加版本和升级迁移；大媒体文件以沙箱路径/校验和管理，不将所有二进制存 RDB。
- 异步任务带任务 ID、进度、取消、重试、失败码；取消后不可报已成功。
- 无隐蔽云同步和后台采集；日志不得包含完整录音、私人照片、定位历史或配对密钥。

## 构建/测试可信度

- 有 SDK26 和 DevEco 的环境才可以宣称 HAP BUILD SUCCESSFUL；没有则记录 `NOT_RUN`。
- CLI 以本地工程模板为准：先 `hvigorw -h`，再选对应 `assembleHap` 选项。
- 使用 HDC 或 DevEco Run 安装，验证启动、二级导航、返回、异常状态、冷启动和前后台切换。
- 真机/模拟器结果必须分开；模拟器不等于相机真实曝光或语音硬件测试。
- 拒绝“假成功”：生成的视频/音频/PNG 必须被外部工具打开；宏执行需要 Windows Agent 回执。

## 每款 App 的技术门槛摘要

| App | 核心 Kit/实现 | 设备/环境限制 |
| --- | --- | --- |
| LightBearing | `@kit.ArkData`, `@kit.LocationKit`, `@kit.SensorServiceKit`, `@kit.LocalizationKit`, ArkUI Canvas, Core File Kit | 太阳算法自研；Map Kit 需另行配置、可离线降级 |
| FrameMori | Camera Kit, Image Kit, 音视频编解码/封装，ArkData | AE/AF/AWB 锁定设备相关；图片序列 MP4 需真正编码器 |
| VoxCarve | 系统文件选择、Core Speech、Audio/AVCodec、ArkData | ASR 时间精度与离线能力未核实，必须可人工校正 |
| MacroLoom | Network Kit/WebSocket、ArkData；Windows Agent .NET | 所有 Windows 指令只能由本地授权 Agent 执行 |
| StoroPix | Picker/Image Kit/Core Vision（条件）、ArkData、文件导出 | 主体分割与 ML 运行机型相关；原生编辑必须独立可用 |

## 相关参考

- [华为开发者文档入口](https://developer.huawei.com/consumer/cn/doc/)
- [现有 LightBearing API26 审计](https://github.com/hhyxx1/LightBearing/blob/main/API_AUDIT.md)
- [现有 LightBearing 验收记录](https://github.com/hhyxx1/LightBearing/blob/main/ACCEPTANCE.md)

这是开发质量控制文件，不代表其中尚未实现的功能在所有 API26 设备上已验证通过。

## API 26 公开版本核实（2026-11-12）

华为 [26.0.0 开发套件版本总览](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-2600/) 明确列出：API 26.0.0 Release 于 **2026-08-29** 发布；配套 HarmonyOS SDK 26.0.0 Release（基于 OpenHarmony `Ohos_sdk_public 26.0.0.105`）同日发布。DevEco Studio 的 26.0.0 Release 与后续补丁版本也已公开。华为的 [开发套件兼容性说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features-2600/) 说明 `compileSdkVersion=26.0.0` 支持使用，但兼容/目标 SDK 的合法区间应依本机 IDE 配置核实。

**日期口径**：华为 26.0.0 详细版本概览的正式发布表列 **2026-08-29**，但其[所有版本汇总页](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-allversion/) 列 **2026-08-28**；在官方页面并存差异未解释前，以“2026 年 8 月正式 Release”作为跨文档简述，详细引用两份官方页面，不把 1 天差异当作 SDK 行为差异。截止本次核查，26.0.1 为 Beta1，系列仍锁定 26.0.0 Release。

**解释边界：**“API 26 已正式发布”≠“每个官方 Kit、HMS 服务、设备编解码器、AI 能力都对普通第三方应用开放”。新增代码必须记录接口来源、SDK 声明、`since`、`SystemCapability`、权限/ACL、真机验证证据及失败降级路径；未验证项不得称为可用。
