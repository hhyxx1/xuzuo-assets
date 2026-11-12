# 序作 Studio · 品牌、设计与应用开发资料库

> **版本：v0.3 审阅草案｜日期：2026-11-12｜状态：待用户确认（DRAFT_FOR_REVIEW）**
>
> **本仓库定位：** Xuzuo Studio 系列应用的跨项目产品文档、设计规范及未来品牌素材库。不是将五款 App 源码混合在一起的工程。当前**只提交文档，不含新素材、应用代码或真实用户数据**。


## 已启动的四层 UI 与素材交付（设计分支）

**[Xuzuo Studio · 四层设计交付入口](design/README.md)** → [42 个页面设计与离线预览](design/02-page-designs/README.md) → [共享设计系统与交互组件](design/03-design-system/README.md) → [94 个独立 SVG 素材](design/04-assets/README.md)。

**范围**：LightBearing、FrameMori、VoxCarve、MacroLoom 共享视觉设计，**StoroPix 保留已定型的独立视觉**。设计稿仅是可审核的 SVG / Markdown / HTML 源文件，尚未编译成 ArkUI 或投入生产。

## 从这里开始

- **[已注册包名与版本来源登记](docs/03_PACKAGE_AND_RELEASE_REGISTRY.md)**：已上线产品与未注册候选的身份对照；严禁按 GitHub 用户名猜包名。

- **[审阅入口：按顺序查看与记录待决事项](docs/00_START_HERE.md)**
- [五款产品定位与依赖地图](docs/01_PORTFOLIO_MAP.md)
- [全部文档索引](docs/02_DOCUMENT_INDEX.md)
- [变更记录](docs/CHANGELOG.md)

## 系列通用规范

| 规范 | 内容 |
| --- | --- |
| [品牌系统](docs/shared/BRAND_SYSTEM.md) | 系列命名、形象定位、品牌视觉语言 |
| [ArkUI 设计系统](docs/shared/UI_DESIGN_SYSTEM.md) | 色板、字体、布局、图标、响应式、动效 |
| [HarmonyOS API 26 工程规范](docs/shared/HARMONYOS_26_ENGINEERING.md) | SDK、权限、兼容性和真实设备验证 |
| [编程 AI 执行协议](docs/shared/AI_ENGINEERING_PROTOCOL.md) | 对 Codex/Claude Code/DevEco Code 的交付约束 |
| [QA 与发布标准](docs/shared/QA_RELEASE.md) | 功能、稳定性、适配和安全验收 |
| [隐私与安全](docs/shared/PRIVACY_SECURITY.md) | 本地数据、媒体、权限和用户隐私 |
| [素材计划与入库](docs/shared/ASSET_PIPELINE.md) | 素材需求、生成边界、版权与审计流程 |

## 品牌与视觉关系（已确认）

**四款采用同一套视觉设计系统**：逐光 LightBearing、帧间 FrameMori、声剪 VoxCarve、键阵 MacroLoom。共享几何语言、基础色板、插画画风、主题组件与动效原则，各自采用专属强调色和工作台交互。

**店图匠 StoroPix 视觉独立**：已上架并定型，不强制改图标、配色、页面结构或宣传素材；只在 `xuzuo-assets` 中共管文档、开发规范、审核记录及未来可选素材。详见 [品牌适用范围](docs/shared/BRAND_SYSTEM.md)。

## 五款独立产品

| App | 主要用途 | 完整开发文档 |
| --- | --- | --- |
| **逐光 LightBearing** | 太阳方位、光线窗口与拍摄计划，**已有原生代码仓库** | [七篇文档](docs/apps/lightbearing/README.md) |
| **帧间 FrameMori** | 定格动画拍摄、逐帧编辑与视频导出 | [七篇文档](docs/apps/framemori/README.md) |
| **声剪 VoxCarve** | 语音转写与文字驱动的音频剪辑 | [七篇文档](docs/apps/voxcarve/README.md) |
| **键阵 MacroLoom** | HarmonyOS 控制 Windows 快捷操作 | [七篇文档](docs/apps/macroloom/README.md) |
| **店图匠 StoroPix** | **已上架 0.2.0（开发者确认）**；独立视觉，不纳入四款同风格改造；现有商品图批量处理应用 | [七篇文档](docs/apps/storopix/README.md) |

每款均含：**六类核心规格**（产品 PRD、页面与交互规范、技术架构、验收矩阵、素材需求清单、AI 开发任务书）**加一份导航 README，共七个文件**。v0.3 草案仓库合计 **48 个 Markdown 文件**（根 README 1 个 + `docs/` 下 47 个）。

## 重要约束

- **现有 StoroPix 源码包名是 `com.hhyxx.storopix`，并非 `com.hhyxx1.storopix`**；[源码](https://github.com/hhyxx1/storopix) `AppScope/app.json5` 与其 README 已核对，后续不得修改已注册应用身份。

- **LightBearing 现有 AGC 注册 Bundle Name：`com.hhyxx.LightBearing`**。不得按早期 PRD 擅自改成全小写。已有 [源码仓库](https://github.com/hhyxx1/LightBearing) 与 `fix/core-quality-audit` 质量审计分支；本库只管理该应用的设计开发文档，不覆盖业务代码。
- 目标基线 **HarmonyOS 7 / API 26（26.0.0 Release）**；华为官方[详细版本表](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-2600/)将正式发布日期列为 2026-08-29，而[版本汇总页](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-allversion/)列为 2026-08-28；两处日期差异已标明，均确认 26.0.0 为 Release。每项高风险接口、编解码与设备能力仍需单独核验。
- **所有 PRD、设计稿与测试矩阵都是待审核的开发规格**，不能视作已编译、已实现或已在真机验证。
- **审核同意前不生成或上传任何新增图片素材**。今后的 AI 生成原图、正式优化资源、授权来源与版本信息分开管理。
- 原创品牌名称、图标与内容未来是否公开授权，尚未决定；请勿默认开源可商用。

**主要语言：简体中文；应用英文名、代码标识、Kit 名称和技术术语保留英文。**
