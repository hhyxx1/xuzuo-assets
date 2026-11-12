# 文档优先级与冲突决策

开发 AI 先定位实际 Git 根目录、工作区、分支状态，再读文件。**文档代表目标和假设，真实源码与 API 能力以实证为准。**

## 每次必须读取
1. 本目录：README、00_MASTER_PROMPT、MINIMAL_UI_DIRECTIVE、APPS/<slug>.md 和当前阶段。
2. docs/03_PACKAGE_AND_RELEASE_REGISTRY.md。
3. docs/shared/HARMONYOS_26_ENGINEERING.md、PRIVACY_SECURITY.md、QA_RELEASE.md、AI_ENGINEERING_PROTOCOL.md、BRAND_SYSTEM.md、UI_DESIGN_SYSTEM.md。
4. docs/apps/<slug>/01_PRODUCT_PRD.md、02_UX_SPEC.md、03_TECH_SPEC.md、04_ACCEPTANCE.md、05_ASSET_BRIEF.md、06_AI_BUILD_PROMPT.md。
5. design-html/README.md、src/types.ts、tokens.ts、data.ts、docs/PAGE_MATRIX.md、COMPONENT_CONTRACTS.md、ARKTS_PORTING.md、docs/pages/<slug>/ 逐页规格。
6. App 自身现有源码及 README、用户尚未提交的工作区改动、本机 SDK26 声明、华为官方文档。

## 冲突与优先级
- 用户最新明确的需求、隐私安全与已注册 App 身份 > 本手册 > PRD 目标/验收 > 实际官方 SDK26 可用能力 > 设计结构参考 > 旧 R2/旧方案。
- **LightBearing UI 完全重新设计**。不能把旧 R2 HTML 的页面构图、旧 HomePage 风格当视觉蓝本；已验证的太阳计算、时区、本地数据结构必须经审计保留。
- **旧 HTML 是页面结构演示，不是最终视觉定稿**。不要复制旧的大幅渐变、玻璃拟态、发光卡片或不真实的 demo 数值。按 MINIMAL_UI_DIRECTIVE 重构原生 ArkUI 风格。
- 旧 docs/apps/lightbearing/06_AI_BUILD_PROMPT.md 中“把 R2 落地”等旧语句以此处新决策为准，不能反向覆盖。
- StoroPix 已上架、视觉独立，本套四款统一 UI 不涉及它。
- LightBearing 真包名 com.hhyxx.LightBearing 保留大小写；FrameMori、VoxCarve、MacroLoom 的包名仅为待验证候选，注册前核对 AGC。
- API Reference 文档显示存在 ≠ 在 API26 当前设备可用；SDK Kit、SystemCapability、ACL、用户权限、设备探测和真实调用一起验证。

## 内容一致性规则
- 产品范围以 01_PRODUCT_PRD 与 04_ACCEPTANCE 的可观察验收为合同；UI 页面和底栏数量以专业使用场景合理安排，不要机械假设每个页面都是一级 Tab。
- 统一 ThemeTokens 与基础导航/组件；专业太阳计算、摄像头取景、波形剪辑、远程控制各自单独实现。
- 真实业务数据不得从 HTML Demo、照片或 AI 图片获取。
- 不可用能力使用明确的 Unsupported/DeviceConditional、原因、替代路径；不可把 PRD 功能静默删除。
- 文档陈旧时先记录 DOC_CONFLICTS.md 和提议，不要不加审计地覆盖共同规范。
