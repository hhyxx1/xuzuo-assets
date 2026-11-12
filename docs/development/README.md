# 序作 Studio · 四款原生 HarmonyOS 应用 AI 开发手册

本目录是交给 Codex / Claude Code / DevEco Code 等**真正动手开发**的分阶段提示词。适用：LightBearing、FrameMori、VoxCarve、MacroLoom；**不包括已定型的 StoroPix**。

**工程基线：HarmonyOS 7 / API 26.0.0 Release / Stage / ArkTS / ArkUI。** 共享文档仓库 https://github.com/hhyxx1/xuzuo-assets ，四款应用分别使用自己的代码仓库。此目录文件属于开发指令，不代表编译、真机、发布已经通过。

## 发给 AI 的顺序

每款应用开一个独立编程 AI 会话，并让 AI 同时能读取 xuzuo-assets 和该 App 的源码目录。不要四个 AI 共写一个源代码工作区。

1. **第一条**：复制 [00_MASTER_PROMPT.md](00_MASTER_PROMPT.md) 内“发给 AI”的正文，并将 APP_SLUG 改成应用代号（lightbearing、framemori、voxcarve、macroloom）。它会要求 AI 先执行阶段 01 环境审计。
2. **第二条**：阶段 01 已完成后发 [02_ARCHITECTURE_AND_DESIGN.md](02_ARCHITECTURE_AND_DESIGN.md)。
3. **第三条**：发 [03_CORE_WORKFLOW.md](03_CORE_WORKFLOW.md)。
4. **第四条**：发 [04_ALL_PAGES.md](04_ALL_PAGES.md)。
5. **第五条**：发 [05_ADVANCED_INTEGRATION.md](05_ADVANCED_INTEGRATION.md)。
6. **第六条**：发 [06_QA_RELEASE.md](06_QA_RELEASE.md)。
7. **需要审计/续做时**：发 [07_REVIEW_AND_CONTINUE.md](07_REVIEW_AND_CONTINUE.md)。

**每一步都让编程 AI 实际读文件、编辑代码、编译和测试，不是只让它写计划。** 在发送首条消息前让 AI 查看 [APPS](APPS/) 对应专项要求。一个阶段的结果没有达到验收时，先用 [07_REVIEW_AND_CONTINUE.md](07_REVIEW_AND_CONTINUE.md) 让它修复，再进入下一阶段。

## 重要资料和约束

- [DOC_ORDER.md](DOC_ORDER.md)：旧 PRD / HTML 草稿 / R2 等内容冲突时的优先级。
- [MINIMAL_UI_DIRECTIVE.md](MINIMAL_UI_DIRECTIVE.md)：用户最新确定的简约工具类视觉，不采用旧 HTML 的大面积渐变。
- [01_ENV_SKILLS_AND_API.md](01_ENV_SKILLS_AND_API.md)：技能发现、本机 SDK、官方 API Reference 的强制查证流程。
- [PARALLEL_AND_HANDOFF.md](PARALLEL_AND_HANDOFF.md)：多 AI 并行时如何隔离工作区、同步共享组件契约、交接。
- [OFFICIAL_SOURCES.md](OFFICIAL_SOURCES.md)：华为官方参考起点和 API 核验证据模板。
- [TOOLS_ENV_PLAYBOOK.md](TOOLS_ENV_PLAYBOOK.md)：Windows/Linux 本机 Skills/DevEco/hdc 探测命令示例（因安装环境不同需先核对）。
- 原产品文件在 docs/apps/<slug>/；设计模型在 design-html/src/；ArkTS 移植说明在 design-html/docs/ARKTS_PORTING.md。

## 仓库角色

- **xuzuo-assets/main**：规格、设计、审计模板及素材版本，不混放应用生产代码。
- **hhyxx1/LightBearing**：既有原生 ArkTS 工程，必须先核对 main 与 fix/core-quality-audit，绝对不能重建项目覆盖。
- **FrameMori / VoxCarve / MacroLoom**：目前没有确认的公开同名工程仓库。AI 应先检查用户本机和已授权账号；若没有，创建独立本地工程。远端公开/私有可见性由用户决定，不要擅自公开。
- **StoroPix**：只共用工程/测试/安全治理，视觉不参与四款统一重设计。

## 阶段回报标准

每次 AI 必须报告：应用名 / 包名 / 源码路径、仓库分支和 SHA、实际发现的 Skills 及使用情况、DevEco/SDK26/hdc/ohpm/hvigor/Java 版本、查证的华为官方文档 URL、具体代码差异、真实 build/测试命令与结果、API 审计表、已完成闭环、失败项和 NOT_RUN、下一阶段是否已就绪。禁止虚构编译和截图。

**真正的目标：最终可在 API 26 真机安装运行的原生应用与可验证业务结果，而不是“看起来能点”的演示。**