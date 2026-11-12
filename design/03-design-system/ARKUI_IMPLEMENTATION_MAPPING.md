# XzUIKit → HarmonyOS ArkUI 的实现映射（设计手册，不是假编译结果）

设计核心以 [tokens.json](tokens/tokens.json) 为唯一来源；在工程中建议建立单独 `theme/` 资源生成层，将颜色语义与组件样式映射到 ArkUI。

| 设计层 | 推荐原生构造 | 开发注意 |
| --- | --- | --- |
| XzPageShell / TopBar | Navigation + NavDestination + Row/Column | 使用系统安全区；避免绘制假的状态栏 |
| XzPrimaryButton / IconButton | Button + Image / SymbolGlyph（按 SDK 支持核实） | ≥48vp 点击区，loading/disabled 与业务态绑定 |
| XzCard / MetricTile | Column/Row/Stack + background/radius/border | 日照、延迟、音频时长、帧数来源真实模型 |
| XzSegmented / BottomNav | Row / Tabs 或 Navigation 分组 | 保留当前路由及焦点，避免跳转双重动画 |
| XzTextField / Switch / Slider | TextInput / Toggle / Slider | 读屏含语义标签、当前值、单位和错误 |
| XzDialog / ProgressSheet | CustomDialog / Sheet + Progress | 只在持久化/输出/ACK 校验成功后结束任务 |
| Empty / Permission / Error | 条件 builder + 明确 CTA | 失败与不支持信息必须可理解、可重试 |
| 业务独有图表 | Canvas/Custom/系统 Kit | 不使用静态 SVG 假数据；传感器能力需 probe |

**复用模块建议**：独立 `XzUIKit`（组件、设计 token、交互状态）；各 App 维护自己的 `domain/`、`services/` 与业务画布。不要把此 GitHub 资产仓库当作可编译 ArkTS 依赖；先在单个工程落地/测试再提取公共 package。

**渲染素材建议**：在交付 App HAP 前根据 SDK26 真实支持情况，将 SVG 源图转换为 PNG/WebP，执行不同 DPR 实机检查，不把 SVG 源码直接塞进所有 Image 控件假设无兼容问题。

**版本与兼容**：现有 LightBearing Bundle `com.hhyxx.LightBearing` 保持不动；新 App 包名在 AGC 注册前核对；StoroPix 不参与此视觉包。

**验收**：必须执行工程编译、真机页面截图/手势流程、无障碍/字号、权限与失败恢复测试；本层 `NOT_RUN`。
