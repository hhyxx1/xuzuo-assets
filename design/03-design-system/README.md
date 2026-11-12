# 03 · 四款共享设计系统（StoroPix 视觉独立）

唯一 token 来源：[tokens.json](tokens/tokens.json)；浏览器/概念原型的 CSS 参考：[tokens.css](tokens/tokens.css)。

- [共享组件合同](components/COMPONENT_SPEC.md)：20 类基础组件的 Props、事件、状态、原生实现建议
- [组件状态与无障碍](components/STATES_AND_ACCESSIBILITY.md)
- [可点击组件状态画廊](components/gallery.html)（下载仓库后离线打开）
- **[组件图谱 SVG](components/component-atlas.svg)**：GitHub 可直接预览的基础控件板
- [四款专属色与 Bundle 识别元数据](tokens/app-metadata.json)
- [HarmonyOS ArkUI 设计实施映射](ARKUI_IMPLEMENTATION_MAPPING.md)

## 共享原则
所有页面复用 XzPageShell、XzTopBar、XzPrimaryButton、XzCard、XzListCell、XzSegmented、XzBottomNav 等组件合同。App 的主要差异由 `accent` / `accent2` Token 注入，不复制四份核心组件。太阳轨迹、相机预览、波形编辑、宏控制等独有模块**必须由业务专用组件实现**，不可硬套静态插画。

- 背景 `#0B1622`，Surface `#152836`，Raised `#1C3546`，文字 `#F9FAF3`。
- 深浅主题的颜色、对比度、字体和安全区跟随语义 Token，项目构建还需真实 SDK26 校验。
- 此处提供设计合同与可交互 HTML 状态演示；**不是已经编译验证的 ArkTS 组件库**。
