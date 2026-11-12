# 02 · 逐页 UI 设计

按此前已经审核的 PRD 覆盖 **42 个业务页面**：LightBearing 12；FrameMori / VoxCarve / MacroLoom 各 10。每页都有独立 `screens/<app>/<route>.svg` 及 `specs/<app>/<route>.md`，且由唯一 token 系统绘制。

- SVG：可编辑、可查看的高保真结构布局示例，文字及数字为模拟数据。
- MD：组件构成、手势/导航、实时数据/持久化、异常状态、响应式布局和 ArkUI 开发注意事项。
- [交互式页面画廊](preview/index.html)：浏览器离线打开，从 App/页面切换；**不含真实业务 API**。

**重要**：页面 SVG 是设计基准，非动态交互页面。动态数值/地图/波形/太阳曲线必须由运行时业务组件绘制。
