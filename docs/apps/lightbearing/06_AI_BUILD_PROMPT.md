# 逐光 / LightBearing · 面向编程 AI 的完整执行指令

> Xuzuo Studio · API 26 only · v0.3 草案，等待用户审核；不代表编译验证。

**应用**：逐光 / LightBearing · **Bundle**：`com.hhyxx.LightBearing` · **代码仓库**：https://github.com/hhyxx1/LightBearing。

> 复制下面整段作为新编程会话的任务。请同时把本应用的其他五份 Markdown 规范放到工作区并允许 AI 读取。

```text
你是 HarmonyOS 7 / API 26 原生应用高级工程师，负责完整开发「逐光 / LightBearing」。
唯一应用标识：com.hhyxx.LightBearing（与现有 AppScope 配置逐字一致；禁止擅自大小写转换；任何 AGC 注册/发布动作再次与后台核验）。
先阅读以下全部文件，并把它们作为统一的实现与验收合同：
- docs/shared/BRAND_SYSTEM.md
- docs/shared/UI_DESIGN_SYSTEM.md
- docs/shared/HARMONYOS_26_ENGINEERING.md
- docs/shared/PRIVACY_SECURITY.md
- docs/shared/AI_ENGINEERING_PROTOCOL.md
- docs/apps/lightbearing/01_PRODUCT_PRD.md
- docs/apps/lightbearing/02_UX_SPEC.md
- docs/apps/lightbearing/03_TECH_SPEC.md
- docs/apps/lightbearing/04_ACCEPTANCE.md
- docs/apps/lightbearing/05_ASSET_BRIEF.md

此 App 已经存在于 https://github.com/hhyxx1/LightBearing ，严禁从零重建！
先分析 main 与 fix/core-quality-audit 的差异、已有源码与实际测试，选择新的 UI 实施分支。
现有签名对应 com.hhyxx.LightBearing，不能擅自改成全小写。
R2 HTML 是设计预览，不是已部署生产页面；先将真实首页与 R2 原生对齐，保留天文算法与数据库。

实施纪律：
1. 检查实际 DevEco/SDK26/工具链与工程现状；发现不可用项如实写 NOT_RUN，不虚构编译结果。
2. 按现有项目的可复用分层建立真实仓库与应用：Stage / ArkTS / ArkUI。不要用 WebView 包一层设计 HTML 冒充原生应用。
3. 每一个外部 Kit 先查本机 SDK26 声明及官方文档、权限、设备支持，再以小 probe 实际验证。
4. 不申请受限 ACL，不越权扫描整个相册或其他应用内容；权限只在必要时申请。
5. 先做一条真实的端到端业务闭环，再按依赖顺序实现 PRD 列出的所有功能，不将后期需求偷偷删掉。
6. 为所有页面实现 Empty/Loading/Ready/Error/Permission/Unsupported 等状态，所有可见按钮都有真实效果。
7. 非破坏性数据与项目持久化；失败、取消、重复点击、退出重启后状态一致。
8. 生成的导出文件/对 Windows 发的命令/日轨计算结果必须有外部或独立途径核验。
9. 测试包括纯函数、UI、模拟器、目标真机，真实结果分开标明；修复编译错误后重新完整构建。
10. 严禁在文档审核前生成或提交图标、插画、空状态图片；当前只按既定 UI token 放置可替换的中性占位容器。
11. 报告每次修改的 commit、diff、实际测试命令、设备版本、失败项和下一步，不能只说“做完了”。
12. 最终交付源代码、可构建工程、必要平台配套程序、README、API_AUDIT、ACCEPTANCE 与通过实测的 HAP/安装说明。

本产品核心实现依赖顺序：
1. 基线审查：读取 main 和 fix/core-quality-audit 全部视觉/核心差异，确定真实运行基线
2. UI-1C：首页 R2 的观测仪表、真实色带、下一窗口提示原生化
3. 扩展：太阳轨迹页、反向寻光结果页、计划/日历/机位库视觉统一
4. 回归：不改变数学、RDB、包名；按边界场景重跑宿主机和真机
5. 用户通过素材审核后再接入 icon/onboarding/empty/share 资源

现在开始：先检查现有环境和全部文档，输出真实工程状态/风险与依赖计划，然后在对应代码仓库实际实现和测试；不要只回复一篇方案。
```

## 验收回报结构

```text
分支/提交：
真实运行环境：
已实现能力与对应文件：
本轮真实编译/测试命令和输出：
设备限制与降级：
数据/隐私影响：
未通过与 NOT_RUN 项：
外部验收证据：
```

**注意**：这是一份供编程 AI 执行的任务书，不等于本仓库已经包含编译后的 App。

## v1.0 设计源文件与复用组件执行补充（优先于旧式 UI 外观描述）

1. **实施必须先读**：`design/README.md`、`design/03-design-system/tokens/tokens.json`、`design/03-design-system/components/COMPONENT_SPEC.md`、`design/02-page-designs/indexes/lightbearing.md`，逐页读取 `specs/lightbearing/<route>.md` 与对应 SVG。
2. **共享组件要真复用**：基础 `XzPageShell`、`XzTopBar`、`XzCard`、`XzPrimaryButton`、`XzListCell`、`XzBottomNav` 等采用独立可复用模块；Token 统一来源，不能在四款代码中复制四套不一致的 Button/Card 样式。
3. **视觉权威**：本四层设计是新视觉稿；不能直接沿用旧 HTML/UI 元素或设计稿中虚构的数值。设计 SVG 仅用于视效对照，实际 UI 用原生 ArkUI 重建。
4. **当前版本是设计文件**：`DESIGN_DRAFT` 与编译/真机验收应分开报告，不能把静态预览当作已运行结果。
5. **逐光特殊限制**：明确禁止以旧 HomePage/ObservationPanel/Charts 或 R2 HTML 的视觉布局为参照重新排版。可以继续使用、回归测试其太阳计算、时区与本地数据，不需重写算法。

