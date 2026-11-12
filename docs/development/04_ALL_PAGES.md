# 阶段 04 · 全页面原生 ArkUI 实现与组件复用

## 发给 AI

继续当前 App 的阶段 04：在已通过真实核心闭环的架构上，逐页实现 PRD 规定的全部操作页面及其状态。读 xuzuo-assets/design-html/src/data.ts、docs/PAGE_MATRIX.md、docs/pages/<slug>/ 全部逐页清单和 docs/development/MINIMAL_UI_DIRECTIVE.md，以及本 App 01_PRODUCT_PRD、02_UX_SPEC、04_ACCEPTANCE。

**强制任务**
1. 建立“页面矩阵”：页面 ID / 产品任务 / 共享组件 / 专属组件 / 真业务调用 / 页面状态 / 返回/深链路径 / 验收 ID。把每一页映射至实际 ArkUI page/route，不允许仅列名称就当作已实现。
2. 按功能群分批实现，每次完成一组就编译、运行预览/真机、修复；不要 10 或 12 页一起铺空壳。所有可点击控件必须有真实动作或有说明原因的 Unsupported/PermissionGate；**禁止只弹 Toast “成功”却未执行**。
3. **共享而非重复的组件**：统一 AppBar、NavigationShell、BottomNavigation/Sidebar、Button、IconButton、TextFieldRow、DateSelector、StatusChip、ListRow、EmptyState、ErrorState、TaskProgress、ConfirmSheet、PermissionGate。给组件明确静态 typed props、默认值、事件和状态；不复制四份略有差别的按钮 CSS/ETS。
4. **专业页面独立实现**：LightBearing 真正的太阳高度/方位/曙暮光图；FrameMori 的实机预览、洋葱皮和帧时间轴；VoxCarve 的真实波形、转写文本/字幕对齐；MacroLoom 的授权控制面板、连接/回执/危险动作确认。所有复杂曲线和时间轴实时或基于正确数据绘制，不用静态 AI 图片代替。
5. 统一简约风格：纯色、清晰排版、低装饰、信息层级优先、适当圆角、少渐变和动画；不沿用旧 R2、旧 HTML 花哨视觉。四款各自使用经确认主/辅强调色。没有 AI 正式图标时用符合规范的简单中性占位，不从概念板裁剪图标冒充正式素材。
6. 每个页面必须处理 Normal、Empty、Loading、Error、PermissionDenied、DeviceUnsupported（如适用）；对于当前不支持的 Kit 显示真实原因与恢复操作，不把按钮隐藏后不说明。编辑型页面要覆盖修改中、未保存离开确认、撤销/重做/取消/失败恢复。
7. 真正移动端可用：检查 360、390、430vp 以及至少一种 ≥600vp 断点，浅/深主题、系统字号、长中文、横屏、安全区、手势返回、键盘、屏幕阅读器、无障碍提示和 48vp 热区。能截图则用实际截图证据，不能就标未验证。
8. 准备一份 PAGE_WALKTHROUGH.md：逐页记录真实数据来源、导航路径、按钮点击的服务行为、异常场景、差异清单和截图证据。发现设计规格不合理可按业务使用性优化，但写清偏离原因并同步到设计库“待修建议”。
9. 每实现一组页面自动复查 shared component 测试、页面路由、状态切换；不能用网页 UI 演示代替原生 ArkUI 真机验证。

**完成定义**：本 App 的所有 PRD 页面有真实 ArkUI 实现，对每一项功能标注 PASS / DEVICE_CONDITIONAL / BLOCKED / NOT_RUN 的真实证据；页面不是静态图片；基本可用、视觉一致且主题/尺寸验收可复查。没做到的继续修复，不要假报“全页完成”。
