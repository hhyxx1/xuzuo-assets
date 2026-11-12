# 序作 Studio · Bundle 与发布版本事实登记

> **文档版 v0.3 草案** · 审计日期 2026-11-12 · `DRAFT_FOR_REVIEW`。这张表记录已经核实的仓库事实，以及尚待开发者/AGC 核实的发布状态。**不是 AGC 后台截图或发布 HAP 的哈希证明。**

## 1. 应用身份：不能根据 GitHub 账号猜包名

| 应用 | 当前正式 / 拟定 Bundle | 身份与证据 | 开发动作 |
| --- | --- | --- | --- |
| 逐光 LightBearing | `com.hhyxx.LightBearing` | [main 的 AppScope/app.json5](https://github.com/hhyxx1/LightBearing/blob/main/AppScope/app.json5) 与 [fix 分支同一配置](https://github.com/hhyxx1/LightBearing/blob/fix/core-quality-audit/AppScope/app.json5) 均如此；[README](https://github.com/hhyxx1/LightBearing/blob/main/README.md) 记载与 AGC 注册/调试签名一致 | **保持原样（含大写 L、B）**，不要为系列规范重新注册或重命名 |
| 帧间 FrameMori | `com.hhyxx.framemori` | 产品草案拟定，尚未用 AGC 验证唯一性 | 创建应用时由开发者核实，注册后冻结 |
| 声剪 VoxCarve | `com.hhyxx.voxcarve` | 产品草案拟定，尚未用 AGC 验证唯一性 | 同上 |
| 键阵 MacroLoom | `com.hhyxx.macroloom` | 产品草案拟定，尚未用 AGC 验证唯一性 | 同上 |
| 店图匠 StoroPix | `com.hhyxx.storopix` | [main 的 AppScope/app.json5](https://github.com/hhyxx1/storopix/blob/main/AppScope/app.json5)、[README](https://github.com/hhyxx1/storopix/blob/main/README.md)、[应用市场地址](https://appgallery.huawei.com/app/detail?id=com.hhyxx.storopix) 三处一致 | **保持原样**；旧稿 `com.hhyxx1.storopix` 是错误记载，已修正 |

**原则**：`hhyxx1` 是 GitHub 账号，不是必须用于 `bundleName` 的开发者号段。`com.hhyxx` 是已用项目的反向域名命名选择，**不是一个可以推导所有未来包名的 AGC 账号 ID**。

华为 [AGC 新建应用官方说明](https://developer.huawei.com/consumer/cn/doc/App/agc-help-create-app-0000002247955506/) 明确指出“应用包名必须与 DevEco Studio 工程的 Bundle name 一致，设置后不支持修改”。当前未找到可用于断言 AGC **大小写是否折叠**的明确规范，因此**不做大小写不敏感/敏感的未经证实结论**，所有既有应用一律按配置文件和 AGC 注册记录逐字保留。

## 2. StoroPix 的“已上架 0.2.0”与公开源码 0.1.0

| 项目 | 当前状态 | 来源 |
| --- | --- | --- |
| AppGallery 上架 | 已发布 **0.2.0**：**开发者在 2026-11-12 明确告知**；本轮没有访问 AGC 控制台，不冒充平台后台验证 | 开发者陈述 |
| 公开 GitHub `main` | `67410d98ff6f4294b750de6a2b579b026431c2f6`（核查时） | [main 分支](https://github.com/hhyxx1/storopix/tree/main) |
| 仓库内应用版本 | `versionName: 0.1.0`、`versionCode: 1000000`（核查时） | [AppScope/app.json5](https://github.com/hhyxx1/storopix/blob/main/AppScope/app.json5) |
| 已有功能与历史验证 | 已有原生商品图片批量处理、项目存储、图像裁剪与编辑、设备条件下的主体分割、导出/分享以及多设备相关工作；但不同功能的实测范围不等同于全部通过 | [README](https://github.com/hhyxx1/storopix/blob/main/README.md)、[验收记录](https://github.com/hhyxx1/storopix/blob/main/documents/FOREGROUND_DEVICE_ACCEPTANCE_20261106.md) |
| 尚待验证 | 0.2.0 在架 HAP 对应的源码 commit/tag、AGC versionCode 与差异清单。不能以旧 main 配置否认开发者已上架声明，也不能把 main 当作 0.2.0 发布源码 | `PENDING_AGC_VERIFICATION` |

**实施要求**：StoroPix 的系列文档是后续迭代与统一品牌的提案。任何新 UI、素材或架构变更都要先建立现有功能与建议差距矩阵，保留用户项目数据和原有包名；不得根据本资产仓库文档直接重建工程。

## 3. LightBearing 现有代码与历史测试

- `main` 当前核查快照：`5468b4d9b34a4be97da8320285297bf9fadfabc5`。
- `fix/core-quality-audit` 当前核查快照：`e89b0262cb6d27cb6b22bf9502336d4f97e951c0`，相对 main **领先 43 次提交、落后 0 次**（本轮通过 GitHub compare 接口核查），**仅对该快照有效**。
- 生产文件 `entry/src/main/ets/components/ObservationPanel.ets`、`entry/src/main/ets/components/Charts.ets`、`entry/src/main/ets/pages/HomePage.ets` 与设计预览 `design/ui1b-r2/final-home.html` 均存在于上述 fix 分支。
- 历史 [UI 与时区审计记录](https://github.com/hhyxx1/LightBearing/blob/fix/core-quality-audit/docs/audit/02B3C_TIME_INTERACTION.md) 包含“99/99 宿主机”和真机时区测试的当时结果；它们是**历史执行记录**，不是本轮新设计的测试结果。任何新代码合入前须重新跑测试并记录新 SHA、SDK、设备与日期。
- R2 设计 [最终视觉方案](https://github.com/hhyxx1/LightBearing/blob/fix/core-quality-audit/docs/design/UI1B_R2_FINAL_DESIGN.md) 明确说明当轮仅改 HTML 预览，没有把新设计全部移植到生产 ArkTS；不能视作完整 UI 已完成。

## 4. HarmonyOS API 26 发行日期核对

- [华为 26.0.0 详细版本概览](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-2600/) 的表格：**2026-08-29**，API 26.0.0 Release 与 SDK 26.0.0 Release（OpenHarmony `Ohos_sdk_public 26.0.0.105`）。
- [华为“所有版本”汇总](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-allversion/) 标 **2026-08-28**。两份官方页面存在一天差异；建议对外文档使用“2026 年 8 月正式发布”，如需精确引用同时给出两页。
- 截至本次核查 [26.0.1](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-2601/) 为 **Beta1（2026-11-10）**，本系列继续使用 **API 26.0.0 Release only**。一项 Kit 的 SDK 声明、权限、SystemCapability 与实际机型支持仍需逐项验证。

## 5. 文档版本与审阅门槛

- 当前本资产仓库文档版本为 **v0.3 草案**，与 StoroPix **应用市场版本 0.2.0** 无关。
- 5 款应用每款 **6 份核心规格 + 1 份导航 README = 7 个文件**。因此“六类文档”与“七个文件”并不矛盾。
- v0.2 时仓库 **47 个 Markdown 文件 = 1 个根 README + docs/ 下 46 个文件**；本次新加本登记表以后应为 **48 个文件 = 1 + 47**。
- **任何设计/素材生产仍为 `AWAITING_APPROVAL`；GitHub PR 保持 Draft，不自动合入 main。**
