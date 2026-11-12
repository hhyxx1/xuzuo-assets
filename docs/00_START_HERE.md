# 序作 Studio · 文档审阅入口

> **草案日期：2026-11-12｜版本：v0.3｜状态：DRAFT_FOR_REVIEW（待用户确认，尚未定稿）**
>
> **分支说明**：原 `docs/preview-v1` 只包含产品与技术文档；当前 `design/four-app-full-kit-v1` 已根据用户的新授权新增 [四层 UI/素材设计资料](../design/README.md)（42 页 UI、共享设计系统、SVG/PNG 预览资源），但**尚未修改任何生产 App 代码或执行 ArkUI/HAP 真机验收**。

## 已确定的设计范围

**已确认**：逐光 LightBearing、帧间 FrameMori、声剪 VoxCarve、键阵 MacroLoom **四款同风格**；店图匠 StoroPix **保持独立、已经定型的视觉**，不强制换肤或改图标。共享的是五款项目的工程/文档/素材治理，不等于强行让五款同一视觉。相关约束见 [品牌系统](shared/BRAND_SYSTEM.md) 与 [ArkUI 设计规范](shared/UI_DESIGN_SYSTEM.md)。

**已批准**：四款同风格的设计素材制作与入库。**尚未批准**：正式视觉终稿、PR 合并、生产 App 代码修改、StoroPix 换肤与商店上架资源替换。

## 审阅顺序

> **先核对 [包名与发布版本事实登记](03_PACKAGE_AND_RELEASE_REGISTRY.md)**。LightBearing 与 StoroPix 均为既有应用；前三款新项目的包名为待注册候选。

1. [总产品地图：五款 App 各自解决的问题](01_PORTFOLIO_MAP.md)
2. [系列品牌规范](shared/BRAND_SYSTEM.md) 与 [ArkUI 设计系统](shared/UI_DESIGN_SYSTEM.md)
3. 各应用 [产品 PRD 与页面规范](02_DOCUMENT_INDEX.md)，确认页面数量、交互和完整功能范围
4. 各应用技术规格与验收矩阵，参考 [HarmonyOS API 26 工程基线](shared/HARMONYOS_26_ENGINEERING.md)
5. 各应用素材需求清单，参考 [素材制作与入库规范](shared/ASSET_PIPELINE.md)
6. [查看已经制作的四层 UI/素材草案](../design/README.md)，逐页审阅；通过后再进入 ArkUI 生产实现及正式资产导出

## 五款 App 的六类核心规格

**计数口径**：每款“六类”指六份核心规格，外加应用级 README 导航，所以每款是七个 Markdown 文件；全仓 v0.3 总计 48 个（根 README 1 个、`docs/` 下 47 个，含新增包名事实表）。

| 产品 | PRD | UI/UX | 技术 | 验收 | 素材计划 | AI 开发任务 |
| --- | --- | --- | --- | --- | --- | --- |
| 逐光 LightBearing | [PRD](apps/lightbearing/01_PRODUCT_PRD.md) | [页面](apps/lightbearing/02_UX_SPEC.md) | [架构](apps/lightbearing/03_TECH_SPEC.md) | [测试](apps/lightbearing/04_ACCEPTANCE.md) | [清单](apps/lightbearing/05_ASSET_BRIEF.md) | [执行](apps/lightbearing/06_AI_BUILD_PROMPT.md) |
| 帧间 FrameMori | [PRD](apps/framemori/01_PRODUCT_PRD.md) | [页面](apps/framemori/02_UX_SPEC.md) | [架构](apps/framemori/03_TECH_SPEC.md) | [测试](apps/framemori/04_ACCEPTANCE.md) | [清单](apps/framemori/05_ASSET_BRIEF.md) | [执行](apps/framemori/06_AI_BUILD_PROMPT.md) |
| 声剪 VoxCarve | [PRD](apps/voxcarve/01_PRODUCT_PRD.md) | [页面](apps/voxcarve/02_UX_SPEC.md) | [架构](apps/voxcarve/03_TECH_SPEC.md) | [测试](apps/voxcarve/04_ACCEPTANCE.md) | [清单](apps/voxcarve/05_ASSET_BRIEF.md) | [执行](apps/voxcarve/06_AI_BUILD_PROMPT.md) |
| 键阵 MacroLoom | [PRD](apps/macroloom/01_PRODUCT_PRD.md) | [页面](apps/macroloom/02_UX_SPEC.md) | [架构](apps/macroloom/03_TECH_SPEC.md) | [测试](apps/macroloom/04_ACCEPTANCE.md) | [清单](apps/macroloom/05_ASSET_BRIEF.md) | [执行](apps/macroloom/06_AI_BUILD_PROMPT.md) |
| 店图匠 StoroPix | [PRD](apps/storopix/01_PRODUCT_PRD.md) | [页面](apps/storopix/02_UX_SPEC.md) | [架构](apps/storopix/03_TECH_SPEC.md) | [测试](apps/storopix/04_ACCEPTANCE.md) | [清单](apps/storopix/05_ASSET_BRIEF.md) | [执行](apps/storopix/06_AI_BUILD_PROMPT.md) |

## 待你审核的关键决策

- StoroPix 开发者确认已上架 0.2.0；公开代码 `main` 仍为 0.1.0，下一次迭代需先核对上架 HAP 与源码的对应提交。

| 项目 | 目前方案 | 是否通过 |
| --- | --- | --- |
| 系列名称 | 暂定「序作 Studio / Xuzuo Studio」；尚未做商标核验 | 待确认 |
| 应用范围 | 五款独立应用，代码仓库分别维护 | 待确认 |
| 设计语言 | **四款**统一设计语言、每款独立强调色；**StoroPix 沿用已定型视觉** | **范围已确认，具体设计稿仍待审** |
| HarmonyOS 版本 | API 26 only，Stage + ArkTS + ArkUI；高风险 Kit 另行实测 | 待确认 |
| LightBearing 工程 | 基于现有 `LightBearing` 仓库改进，不从零重做、不改注册包名 | 待确认 |
| 素材范围 | 四款的初版图标、引导、空态、分享背景及通用图标已以 SVG/PNG 预览入库；图表等由原生代码实时绘制 | **制作范围已获授权，终稿待审** |
| 素材许可证 | 暂未决定；后续另外审核 | 待确认 |

## 不是本轮完成的工作

- 现设计分支**已新增** SVG 设计稿、素材与 PNG 图标预览；**没有**视频、字体文件、真实用户媒体和生产 App 资源替换。
- 没有修改或编译任何原生 HarmonyOS App，也没有进行新的真机测试。
- PRD 只代表**计划和开发约束**；“可实现”“已验证”须由后续 SDK 核验、编译及测试记录独立证明。

需要修改时，请在本预览分支继续修文档；只有用户确认后才将文档作为正式规范合入 main。
