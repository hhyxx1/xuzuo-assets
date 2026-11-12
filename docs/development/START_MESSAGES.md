# 四款 App 开发 AI 的最短启动消息（直接复制即可）

前提：编程 AI 已能访问 xuzuo-assets 本地 main 分支（或其连接 GitHub 的读取工具），以及该 App 的源码工作区。AI 不支持读取文件时，应先安装/连接其合法文件访问工具，或把本目录 Markdown 作为附件；不能让它假装读到了文件。

## ① LightBearing · 逐光（已有仓库）

请在当前授权工作区里实际开发 LightBearing（逐光，已有仓库 hhyxx1/LightBearing），并且首先读取 xuzuo-assets/main 的 docs/development/00_MASTER_PROMPT.md 与 APPS/lightbearing.md。将 00_MASTER_PROMPT 中 APP_SLUG 设为 lightbearing，**完整执行**其中的阶段 01 环境与 Skills、官方 API26 核验任务。先审计现有 main / fix/core-quality-audit 与未提交更改；不重建、不改 com.hhyxx.LightBearing 包名、不照搬旧 R2 UI，新 UI 必须简约实用。请真实编辑/测试/记录，不要只写一份计划。

## ② FrameMori · 帧间（新/既有项目先查）

请在当前授权工作区里实际开发 FrameMori（帧间），首先读取 xuzuo-assets/main 的 docs/development/00_MASTER_PROMPT.md 与 APPS/framemori.md，把 APP_SLUG 设为 framemori，**完整执行**阶段 01：本机 Skills、DevEco/SDK26/Camera Kit/编码器等官方 API 核验、已有工程搜索与真实最小构建。按既定简约 UI 规范，目标是原生真实拍摄/帧时间轴/可验证 MP4。已有工程先复用；没有则创建独立本地工程，**不要未经我授权公开创建远端 GitHub 仓库**。请实际操作，不要只给规划。

## ③ VoxCarve · 声剪（新/既有项目先查）

请在当前授权工作区里实际开发 VoxCarve（声剪），首先读取 xuzuo-assets/main 的 docs/development/00_MASTER_PROMPT.md 与 APPS/voxcarve.md，把 APP_SLUG 设为 voxcarve，**完整执行**阶段 01：主动发现 Skills、SDK26、媒体解码/编码、Speech 能力、官方 API Reference、时间戳粒度与安全隐私边界；检测已有本地工程后再选择官方 Stage 模板。界面是简约实用的原生 ArkUI，不使用演示假波形/伪造转写。请实际检查工具、执行代码与测试；不擅自创建公开仓库。

## ④ MacroLoom · 键阵（双端产品）

请在当前授权工作区里实际开发 MacroLoom（键阵），首先读取 xuzuo-assets/main 的 docs/development/00_MASTER_PROMPT.md 与 APPS/macroloom.md，把 APP_SLUG 设为 macroloom，**完整执行**阶段 01：主动发现 Skills、HarmonyOS API26 Network Kit / TLS 等官方 API、Windows .NET 环境与 Agent 安全边界，检测已有工程。此项目必须有 HarmonyOS 原生客户端 + Windows Agent + 协议测试；简约实用 UI，不接受任意远端 shell/UAC 绕过，不擅自创建公开仓库。请真实操作、记录证据、准备最小真实配对执行闭环。

## 第一阶段完成后，接下来怎么发

按 README.md 的发送顺序，**不要重复第一条**：

1. “请执行 xuzuo-assets/docs/development/02_ARCHITECTURE_AND_DESIGN.md，并参照 APPS/本应用.md 继续实际写代码。”
2. “请执行 xuzuo-assets/docs/development/03_CORE_WORKFLOW.md，在本应用实现真实业务闭环并运行测试。”
3. “请执行 xuzuo-assets/docs/development/04_ALL_PAGES.md，补全本应用所有页面、复用组件与状态。”
4. “请执行 xuzuo-assets/docs/development/05_ADVANCED_INTEGRATION.md，完成高风险能力和实际导出/设备回执。”
5. “请执行 xuzuo-assets/docs/development/06_QA_RELEASE.md，运行全面测试和可复验发布前审计。”
6. 工作中断/忘记上下文或质量审查时：“请执行 xuzuo-assets/docs/development/07_REVIEW_AND_CONTINUE.md，检查真实 Git 和测试证据后继续实现剩余任务。”

**别一次给 AI 发送 00～07 所有阶段并要求马上做完**，容易导致先写大量不可编译代码。推荐一阶段一条消息，AI 每阶段按可验证结果完成后再发下一条；若阶段未过就让它继续该阶段，不推进假完成。
