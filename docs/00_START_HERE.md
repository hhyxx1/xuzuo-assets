# 序作 Studio · 文档审阅入口

> **草案日期：2026-11-12｜版本：v0.2｜状态：DRAFT_FOR_REVIEW（待用户确认，尚未定稿）**
>
> 当前分支仅包含产品与技术文档。**尚未开始新素材制作、素材上传、正式应用开发或修改 LightBearing 生产代码。**

## 审阅顺序

1. [总产品地图：五款 App 各自解决的问题](01_PORTFOLIO_MAP.md)
2. [系列品牌规范](shared/BRAND_SYSTEM.md) 与 [ArkUI 设计系统](shared/UI_DESIGN_SYSTEM.md)
3. 各应用 [产品 PRD 与页面规范](02_DOCUMENT_INDEX.md)，确认页面数量、交互和完整功能范围
4. 各应用技术规格与验收矩阵，参考 [HarmonyOS API 26 工程基线](shared/HARMONYOS_26_ENGINEERING.md)
5. 各应用素材需求清单，参考 [素材制作与入库规范](shared/ASSET_PIPELINE.md)
6. 审阅通过后才进入独立的素材提案与制作流程

## 五款 App 的六类文档

| 产品 | PRD | UI/UX | 技术 | 验收 | 素材计划 | AI 开发任务 |
| --- | --- | --- | --- | --- | --- | --- |
| 逐光 LightBearing | [PRD](apps/lightbearing/01_PRODUCT_PRD.md) | [页面](apps/lightbearing/02_UX_SPEC.md) | [架构](apps/lightbearing/03_TECH_SPEC.md) | [测试](apps/lightbearing/04_ACCEPTANCE.md) | [清单](apps/lightbearing/05_ASSET_BRIEF.md) | [执行](apps/lightbearing/06_AI_BUILD_PROMPT.md) |
| 帧间 FrameMori | [PRD](apps/framemori/01_PRODUCT_PRD.md) | [页面](apps/framemori/02_UX_SPEC.md) | [架构](apps/framemori/03_TECH_SPEC.md) | [测试](apps/framemori/04_ACCEPTANCE.md) | [清单](apps/framemori/05_ASSET_BRIEF.md) | [执行](apps/framemori/06_AI_BUILD_PROMPT.md) |
| 声剪 VoxCarve | [PRD](apps/voxcarve/01_PRODUCT_PRD.md) | [页面](apps/voxcarve/02_UX_SPEC.md) | [架构](apps/voxcarve/03_TECH_SPEC.md) | [测试](apps/voxcarve/04_ACCEPTANCE.md) | [清单](apps/voxcarve/05_ASSET_BRIEF.md) | [执行](apps/voxcarve/06_AI_BUILD_PROMPT.md) |
| 键阵 MacroLoom | [PRD](apps/macroloom/01_PRODUCT_PRD.md) | [页面](apps/macroloom/02_UX_SPEC.md) | [架构](apps/macroloom/03_TECH_SPEC.md) | [测试](apps/macroloom/04_ACCEPTANCE.md) | [清单](apps/macroloom/05_ASSET_BRIEF.md) | [执行](apps/macroloom/06_AI_BUILD_PROMPT.md) |
| 店图匠 StoroPix | [PRD](apps/storopix/01_PRODUCT_PRD.md) | [页面](apps/storopix/02_UX_SPEC.md) | [架构](apps/storopix/03_TECH_SPEC.md) | [测试](apps/storopix/04_ACCEPTANCE.md) | [清单](apps/storopix/05_ASSET_BRIEF.md) | [执行](apps/storopix/06_AI_BUILD_PROMPT.md) |

## 待你审核的关键决策

| 项目 | 目前方案 | 是否通过 |
| --- | --- | --- |
| 系列名称 | 暂定「序作 Studio / Xuzuo Studio」；尚未做商标核验 | 待确认 |
| 应用范围 | 五款独立应用，代码仓库分别维护 | 待确认 |
| 设计语言 | 深海军蓝 / 日光琥珀 / 青色仪表强调，各应用差异化主色 | 待确认 |
| HarmonyOS 版本 | API 26 only，Stage + ArkTS + ArkUI；高风险 Kit 另行实测 | 待确认 |
| LightBearing 工程 | 基于现有 `LightBearing` 仓库改进，不从零重做、不改注册包名 | 待确认 |
| 素材范围 | 先制作图标、引导、空状态、分享背景；图表等由原生代码实时绘制 | 待确认 |
| 素材许可证 | 暂未决定；后续另外审核 | 待确认 |

## 不是本轮完成的工作

- 没有新增图标、插画、图片、视频、字体文件或批量图资源。
- 没有修改或编译任何原生 HarmonyOS App，也没有进行新的真机测试。
- PRD 只代表**计划和开发约束**；“可实现”“已验证”须由后续 SDK 核验、编译及测试记录独立证明。

需要修改时，请在本预览分支继续修文档；只有用户确认后才将文档作为正式规范合入 main。
