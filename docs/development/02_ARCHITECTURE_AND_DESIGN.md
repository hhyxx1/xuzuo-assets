# 阶段 02 · 领域架构、原生 ArkUI 基座和简约设计系统

**发送时机**：阶段 01 已完成真实环境/SDK/Skills/API 初审，已有工程可构建或明确记录环境阻塞。复制“发给 AI”全文。

## 发给 AI

现在继续当前 App 的阶段 02。先再次读取 xuzuo-assets/docs/development/DOC_ORDER.md、MINIMAL_UI_DIRECTIVE.md、APPS/<slug>.md、当前 PRD 和 03_TECH_SPEC，并检查上轮 docs/dev 的 ENVIRONMENT、API_AUDIT、SKILLS_INVENTORY、CURRENT_STATE。不要只交方案；实际编辑 ArkTS 工程并尝试编译。

1. 建立真实原生工程架构。已有 LightBearing 必须就地重构，不能新建覆盖；新项目采用本机 SDK26 官方 Stage 模板。建议按当前源码合理分层 models / domain / repository / services / platform / viewmodel / components / pages / utils / tests。仅提出真正需要的目录，不机械创建空文件夹。
2. 为每项核心功能确定领域模型、业务操作、Repository 接口、不可变/可恢复数据、迁移机制、任务状态机与错误码。类型对 API26 ArkTS 的编译要求负责；明确端侧/网络/文件边界，不把持久层、UI 状态和媒体编码耦合进同一个页面。
3. 落地共享 ThemeTokens 与基础组件（本 App 仓库内采用同一语义接口）：
   - XuzuoTheme / AppAccent（四款相同中性色 + 每 App 一对主辅色）；
   - XuzuoAppBar、NavigationShell、BottomNavigation/Sidebar、ActionButton、TextFieldRow、SegmentedControl、DataRow、StatusChip、ErrorPanel、EmptyPanel、PermissionGate、TaskProgress、ConfirmDialog；
   - 设计所有关键状态 Normal/Pressed/Disabled/Loading/Error/Unsupported、危险操作确认、深/浅主题、触控热区、无障碍标签。
   如果四款仓库各自拷贝一份初始组件，则保持同名接口与版本标记；不擅自建立一个未批准的发布依赖包。
4. 完全按 docs/development/MINIMAL_UI_DIRECTIVE.md 的简约工具原则实施：纯色表面、极少渐变、不做玻璃拟态/泛光；主操作明确、真实列表信息优先。**绝不把 design-html 旧 CSS 的大渐变照搬**。不使用 emoji 作为正式图标；设计规范和资源引入必须可审计。四款一致不等于都用相同的主页布局。
5. 结合 design-html/src/data.ts + docs/pages/<slug>/ 和 PRD，先实现原生路由、顶栏、底栏/侧栏、首屏、至少一个真实状态组件和一个空/错误状态入口。注意 42 页是跨四 App 总数；本 App 的具体页面数量由专项文件指明，页面内业务操作将在后续阶段逐步接入。禁止使用 WebView 假装 ArkUI。
6. 将 HTML/TS 的状态对象迁成明确的 ArkTS typed view models；浏览器 DOM、CSS/HTML 字符串、SVG demo 和浏览器事件不直接搬到 .ets。检查 @Component、@State 或实际 API26 支持的新状态管理写法；以本机 SDK + 官方教程为准。
7. LightBearing 的 UI 视觉是完全新作品，不参考旧 R2 页面结构。保留现有 SolarCalc、LocalTimeResolver、ReverseSearch、数据库 schema 的已验证代码与契约，先编测试保护核心再替换显示层。
8. 真实编译和验收：适配至少 360/390/430vp 设计目标（如本机预览工具可用就真实截图比较）、显示主题/切换路由/触摸区域/返回键/权限拒绝/大字体；每次功能编写后运行 hvigor 或项目已有命令并记录输出。若不能编译/预览明确报告。
9. 在 App 仓库 docs/dev/ 中保存 ARCHITECTURE.md（模块依赖图与接口）、UI_COMPONENTS.md（组件 API/设计 token/版本）、NAVIGATION.md（完整页面与路径）、CURRENT_STATE/TEST_REPORT 更新。新增或修改文件都要具体列出。

**阶段 02 完成定义**：项目能真实构建（或有可复现环境 BLOCKED）、原生路由+至少一个页面和状态组件实际存在、代码拥有可复用主题/组件架构、没有破坏现有数据或身份。未达到就继续修复而非编造“已完成”。
