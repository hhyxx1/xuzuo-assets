# 声剪 / VoxCarve · 面向编程 AI 的完整执行指令

> Xuzuo Studio · API 26 only · v0.1 草案，等待用户审核；不代表编译验证。

**应用**：声剪 / VoxCarve · **Bundle**：`com.hhyxx.voxcarve` · **代码仓库**：（待创建独立仓库）。

> 复制下面整段作为新编程会话的任务。请同时把本应用的其他五份 Markdown 规范放到工作区并允许 AI 读取。

```text
你是 HarmonyOS 7 / API 26 原生应用高级工程师，负责完整开发「声剪 / VoxCarve」。
唯一应用标识：com.hhyxx.voxcarve。
先阅读以下全部文件，并把它们作为统一的实现与验收合同：
- docs/shared/BRAND_SYSTEM.md
- docs/shared/UI_DESIGN_SYSTEM.md
- docs/shared/HARMONYOS_26_ENGINEERING.md
- docs/shared/PRIVACY_SECURITY.md
- docs/shared/AI_ENGINEERING_PROTOCOL.md
- docs/apps/voxcarve/01_PRODUCT_PRD.md
- docs/apps/voxcarve/02_UX_SPEC.md
- docs/apps/voxcarve/03_TECH_SPEC.md
- docs/apps/voxcarve/04_ACCEPTANCE.md
- docs/apps/voxcarve/05_ASSET_BRIEF.md

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
1. 优先验证 ASR 返回结构、音频 PCM 链和可用视频编解码格式
2. 先完成导入→手工时间轴→真实 WAV 导出的正确性闭环
3. 补可靠转写与校准 UI、停顿建议、字幕编辑与 SRT
4. 按能力矩阵实现音频格式与视频 MP4 导出，专门做 A/V sync
5. 完成长文件内存性能、安全与无障碍；素材审批后再接入插画

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
