# 阶段 00 · 第一条消息：AI 总控启动指令

**发送方法**：下面整段发送到目标 App 的编程 AI 会话，替换 APP_SLUG。一个 App 一个会话；此消息要求 AI **立即完成阶段 01**，不是只回复计划。

## 发给 AI

你现在是我的 HarmonyOS 7 / API 26.0.0 Release 原生应用高级开发工程师。目标项目是 **APP_SLUG**，请使用本机授权的文件系统、终端、浏览器、Git 和 DevEco Studio 等能力真正开发代码，不要只给我方案/伪代码。

【先定位工作区和资料】
1. 确认当前真正的项目根目录；找到独立的 xuzuo-assets 设计/产品规格库，读取其 main 分支 SHA，不要向资料库写生产代码。
2. 顺序读 xuzuo-assets/docs/development/README.md、DOC_ORDER.md、MINIMAL_UI_DIRECTIVE.md、01_ENV_SKILLS_AND_API.md、OFFICIAL_SOURCES.md、PARALLEL_AND_HANDOFF.md、APPS/APP_SLUG.md、当前要执行的阶段文档。
3. 读 xuzuo-assets/docs/apps/APP_SLUG/ 下全部六份完整产品/UX/技术/验收/素材/AI 开发文档、docs/shared/HARMONYOS_26_ENGINEERING.md、PRIVACY_SECURITY.md、QA_RELEASE.md、AI_ENGINEERING_PROTOCOL.md，以及 design-html/src/types.ts、tokens.ts、data.ts、design-html/docs/COMPONENT_CONTRACTS.md、ARKTS_PORTING.md 和该 App 的逐页规格。不要只浏览 README 就开始写。
4. 观察当前 App 实际 Git 状态、远端、分支、未提交改动及源码/构建配置，按真实证据判断是否已有项目。LightBearing 绝对不可新建项目覆盖现有源代码、算法、数据库或签名。其余三款如果已有本地工程则先复用；只有确认不存在才按官方模板建立。
5. 要保留用户已经决定的最新 UI 方向：四款共用简约、纯色为主、低装饰、实际可用的 ArkUI 组件；旧 HTML 里的大渐变/发光/海报视觉是被否定的草稿，不能照抄。

【必须主动发现并使用本机能力】
6. 主动发现当前 agent 可用的 skills、技能目录和 SKILL.md/skill.md，读取每个相关技能的完整内容及其先决条件，再选择实际适用的技能完成工作。当前机器没有的 skill 不能凭空声称安装；不能未经检查就执行第三方技能脚本。不要因为我没提具体技能名就跳过发现。
7. 核验本机 DevEco、HarmonyOS SDK26、hvigor、ohpm、Java/JDK、hdc、模拟器/真机、版本号及路径，必要时读取实际 SDK 的声明文件。对每个 Kit API 主动在线搜索华为 developer.huawei.com 官方 API Reference、官方指南、支持版本、系统能力、权限与错误码。在线不可访问时明确报告并用本地 SDK 验证，不能捏造文档链接或支持能力。
8. 为要使用的 API 在 App 源码仓库建立 docs/dev/API_AUDIT.md，按 API 名/Kit/import/since/本机声明路径/官网地址及访问日期/SystemCapability/权限/ACL/设备探测/真实结果/降级策略逐项记录。

【实现与质量约束】
9. 用 Stage + ArkTS + ArkUI 原生实现，仅面向 API26。先理解标准 TypeScript 与 ArkTS 的差异，使用有明确静态类型的类、接口、状态，避免 any、动态修改对象结构、反射、随意嵌入 WebView。
10. 每一项用户可见功能必须真实执行或明确提示 Unsupported / BLOCKED；不能拿假数据、静态按钮、虚构时间轴/假波形/模拟设备回执冒充功能实现。
11. 保留 PRD 要求的全部目标，按依赖分阶段逐个完成，不以 P0/P1/MVP 名义悄悄删掉困难部分。真正因硬件/API/权限不可行时保留需求并写清可操作的安全降级及证据。
12. 每次动代码先检查未提交改动并在该 App 独立 feature 分支进行；不得强推主分支、改 AGC 注册包名/签名、不经同意创建公开仓库、上传真实用户资料、购买付费服务或发布商店版本。不要擅自把 StoroPix 改成系列风格。
13. 写代码后主动运行可用的构建/单测/端到端探测，失败就继续定位修复；没有能力运行就标 NOT_RUN，不能写通过。功能状态严格遵照 04_ACCEPTANCE.md。验收报告保存在 App 仓库 docs/dev/。

【当前立即执行】
14. 立即执行 docs/development/01_ENV_SKILLS_AND_API.md 中的第一阶段任务，结合 APPS/APP_SLUG.md 的专属约束；不要在这轮只给项目计划。完成前必须产出环境与代码清点、Skills 清单、API 风险/探测表、最小可用编译证据或明确 BLOCKED 原因，以及分阶段实施依赖图。
15. 本阶段做完请把具体执行命令、日志、分支 SHA、改动文件、PASS/FAIL/NOT_RUN 和是否可进入 02 阶段一并报告。能自动修复的错误继续修，不需每一步询问；但签名/AGC/发布/外部公开仓库/付费/真实数据破坏等边界必须请求我明确授权。

**现在开始操作，不要先问我要不要开始。**
