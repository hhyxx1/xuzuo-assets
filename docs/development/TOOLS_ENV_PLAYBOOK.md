# 编程 AI 的工具/Skills/SDK 探测操作示例

这页是**可选命令参考**，不是假定用户一定安装了某个 AI 技能或 SDK。编程 AI 需要选择实际系统适用的命令，并在执行前解释可能的权限和数据范围；不要使用清理或破坏性命令做“探测”。

## 1. 先看 AI 当前暴露的真实技能入口

- 如果工具面板提供 Skills/Plugins/Extensions 的列举或搜索工具，**先调用实际工具**，并读取与项目相关技能的 SKILL.md/skill.md。不要凭空调用叫做 skills.list 的命令；只有当前环境真的提供时才能调用。
- 常见候选路径是当前仓库的 .agents/skills、.codex/skills、.claude/skills、skills 文件夹，以及 IDE 或 agent 用户配置下的 Skills。不存在就跳过；**优先以工具实际支持的路径为准**。
- 只加载本任务需要的 SDK/ArkTS、工程构建、UI、代码审查、Git、测试、安全/官方文档研究类技能，并实际执行它们认可的流程。未知技能文件先审阅来源/依赖，不擅自安装。
- 技能日志记入 docs/dev/SKILLS_INVENTORY.md：Name / URI or Path / Read? / Applicable? / Invoked? / Result / Why Not.

## 2. Windows PowerShell 非破坏性探测示例

下面命令是**参考**，agent 需要按实际目录调整，不可声称未经执行就有结果。

    Get-Location
    git status --short
    git remote -v
    git branch -avv
    git log -5 --oneline
    Get-Command hdc, ohpm, hvigor, java, git -ErrorAction SilentlyContinue
    java -version
    Get-ChildItem -Path . -Filter SKILL.md -File -Recurse -ErrorAction SilentlyContinue | Select-Object -First 30 -ExpandProperty FullName

注意：仓库很大时递归扫描也会耗时，应优先检查已知技能入口目录；不要扫描用户整个磁盘或输出凭据。

在 DevEco Studio 使用 **Help → About DevEco Studio** 和 **Help → About HarmonyOS SDK** 获取真实版本；按实际 SDK 安装路径寻找声明，不从网页复制猜测的包路径。用 hdc list targets 或 IDE 设备管理确认真机，**设备没有连接时不要制造成功日志**。

## 3. Linux / macOS 非破坏性探测示例

    pwd
    git status --short
    git remote -v
    git branch -avv
    command -v hdc || true
    command -v ohpm || true
    command -v hvigor || true
    java -version
    find . -name SKILL.md -type f 2>/dev/null | head -30

不要盲目执行从论坛复制的安装脚本。若 SDK/系统 API 未安装，做可用范围内的纯函数/协议测试并明确记录 NOT_RUN。

## 4. 在线官方 API 检索（必须实际访问）

搜索入口：https://developer.huawei.com/consumer/cn/doc/doccenter

建议关键词：HarmonyOS API 26.0.0 Release + Kit 名称 + 目标方法/类名 + API Reference；定位真正的 API Reference 之后，核查 since、SystemCapability、permission、device support、错误码和调用范例。

与本机实际 SDK26 声明对照。如果 IDE 提示方法在 SDK 声明缺失或名称不同，以**编译期签名与官方文档**双重核实，不能靠重试拼凑一个看似正确的 API 名称；无法使用时明确列出替代策略与限制。

## 5. 技能或工具不可用时

必须告诉用户：发现/调用了哪些工具、失败原因，自己仍完成了哪些本机/离线验证和下一步需要哪项权限。**不能用“我做不到联网”作为忽略代码、跳过本地 SDK/单测的理由**，也不能虚构任何 API 的兼容性结果。
