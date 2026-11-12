# 阶段 01 · 环境、Skills 发现、工程审计、官方 API 证据

**触发方式**：此阶段由 00_MASTER_PROMPT 自动启动；需要独立重新执行时，发送下面的“发给 AI”正文。**不要先只回复计划，必须真正检查本机、源码和在线文档。**

## 发给 AI

继续为我开发目标 App，按本仓 docs/development/APPS/<slug>.md 执行以下阶段 01。所有结论必须来自实际命令、文件或公开官方文档，不要依据记忆推断。

**步骤 A：保护工作区**
1. 执行当前路径、Git status、log、branch -avv、remote -v、submodule/LFS 检查，确认用户未提交改动及不允许覆盖的配置。记录设计库 main SHA 与项目 SHA；必要时在独立 feature 分支启动，绝不擅自 reset --hard、clean -fd、rebase --onto 或强制覆盖。
2. 检查是否已有 HarmonyOS 工程：AppScope/app.json5、build-profile.json5、oh-package.json5、hvigorfile.ts、entry/src/main 等；扫描真实源码树/Tests/数据库迁移/资源和 README。已有 LightBearing 必须比较 main 与 fix/core-quality-audit，按文件分类：生产算法、数据库、UI、历史测试、未合并修复；先写差异报告再改代码。
3. 如果没有工程，先确认当前本地其他文件夹或 GitHub 连接范围中是否已有同名项目；再采用本机真正可用的 DevEco Studio API26 原生 Stage 模板（不要复制不兼容版本）。是否创建远端及公开可见性由用户决定。

**步骤 B：主动发现本机 Skills，按需调用**
4. 识别当前 Agent 支持的 skill/connector/插件入口及权限：列出其**可用的技能目录和搜索结果**，检查每个候选 SKILL.md/skill.md 与完整使用说明。候选目录可以包含仓库 .agents/skills、.codex/skills、.claude/skills、项目 skills、用户 home 下工具自身的 Skills 路径，以及 IDE 内置技能入口；以上仅为搜索候选，不能假设它们必然存在。
5. 如果 agent 提供技能搜索/列举/读取工具，直接调用真实工具，不用手动伪造工具名称。优先选与 ArkTS、HarmonyOS、UI design-to-code、native testing、GitHub、code-review、security、official docs research 直接相关的技能；记下技能名、真实文件路径/URI、适用任务、先决条件、是否真正调用、输出证据。
6. 检查技能中要求执行的任何脚本/外部安装：先读源码或明确说明与安全性，未知来源和不必要的脚本不执行；不因某个 skill 不存在就卡死，应使用本机工具和官方资料继续工作。

**步骤 C：SDK 和设备真实清点**
7. 用实际系统命令检查操作系统、DevEco Studio 完整版本、HarmonyOS SDK 26.0.0 Release 路径及版本、ohpm、hvigor、Java/JDK、git、hdc、可用模拟器/真机、设备系统 API 版本、构建缓存等，记录 COMMAND / OUTPUT / EXIT CODE。不要套用猜测路径。Windows PowerShell 或 Bash 命令按实际系统分别使用。
8. 读取本机 API26 SDK 的完整声明，确认 Kit import 的真实名称、函数签名、API level、SystemCapability、权限注解、线程要求与限制。对于第三方普通开发者应用，严格排除 system-only / ACL / root / Android-only 能力。模拟器和真机可用性要分开写。
9. 探测现有测试工具/单测框架以及 build-profile、debug profile。先尝试官方/项目已有的 build/test 命令：先 --help 再执行；若命令报错，主动收集最小错误和修复，禁止“命令未执行却记录 PASS”。

**步骤 D：必须在线核对官方资料**
10. 主动使用允许的浏览器/搜索/网络工具，在 https://developer.huawei.com/consumer/cn/doc/ 官方文档中心定位每个本轮准备调用的具体 Kit/类/方法。起点见 docs/development/OFFICIAL_SOURCES.md。优先 API26 Release 适配文档，不把旧版 OpenHarmony 或 Android 示例当作已验证的华为 26.0.0 Kit。
11. 每个高风险接口完成五重证据链：
    (a) 官方具体 API Reference 的原始 URL 与查阅时间；
    (b) 官方指南/示例和适用版本；
    (c) 本机 SDK26 .d.ts / .ets 声明、import、since、SystemCapability、权限/ACL；
    (d) 最小独立 probe，实际编译并在可用设备运行，记录返回/错误码；
    (e) 决策：VERIFIED_HOST、VERIFIED_DEVICE、DEVICE_CONDITIONAL、BLOCKED、NOT_RUN，附安全降级。
12. 遇到官方网页无法访问，记录 URL / 具体失败模式 / 网络限制，用本地 SDK 声明进行候选核对并标为未完成官方网络核验；不得捏造已阅读官方文档。也不要因为文档旧链接 404 就自行发明同名 API。
13. 对应用专项风险（见 APPS/<slug>.md）优先 probe：LightBearing 的定位、传感器、时区与保存；FrameMori 的 Camera Kit、相机输出/编码器；VoxCarve 的解码、Speech 能力及时间戳粒度；MacroLoom 的网络/TLS/本地密钥和 Windows Agent 。

**步骤 E：产生真实文件，而不是只做总结**
14. 在 App 源码仓库 docs/dev/ 中建立或更新：
    - ENVIRONMENT.md：OS/DevEco/SDK/依赖/设备与可复现命令；
    - SKILLS_INVENTORY.md：发现、读取、实际使用、缺失/权限原因；
    - API_AUDIT.md：每个接口的证据表；
    - CURRENT_STATE.md：已有功能、旧分支差异、待办；
    - IMPLEMENTATION_MATRIX.md：PRD 功能 ID → 页面 → 代码目录 → 质量门槛 → 当前状态；
    - RISKS.md：设备、权限、成本、安全及备选路线。
15. 如已有工程先验证其当前基线可构建/测试。没有工程则按 API26 官方模板建立并至少跑一次真实编译；若本机根本不能构建，写 NOT_RUN/BLOCKED 及需要的工具信息，不要编造日志。

**本阶段验收**：每一份上述文档可实际打开；Skill 候选清单和官方 API 引用有真实来源；一份可复现编译日志或明确阻塞；方案不破坏现有工程；下一阶段关键依赖已确定。完成后直接报告，不要以“后续我会研究”代替本阶段真实工作。
