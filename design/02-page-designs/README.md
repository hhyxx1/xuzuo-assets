# 02 · 42 个业务页面设计与交互规格
> 四款应用按照现有 v0.3 PRD 的业务路由逐个覆盖，每页一份 **390×844 独立 SVG + 独立 Markdown 实施规格**。

## 入口
- **[浏览器离线页面预览](preview/index.html)**：选择应用、切换 42 个页面，可演示通用 empty/loading/error/unsupported 状态，支持键盘左右切页。GitHub 不直接运行 HTML，建议下载分支 ZIP 后在浏览器打开此文件。
- [LightBearing / 逐光 · 12 页](indexes/lightbearing.md)
- [FrameMori / 帧间 · 10 页](indexes/framemori.md)
- [VoxCarve / 声剪 · 10 页](indexes/voxcarve.md)
- [MacroLoom / 键阵 · 10 页](indexes/macroloom.md)
- [机器可读页面清单](page-manifest.json)
- [共享组件预览](../03-design-system/components/gallery.html)

- [浅色与宽屏的 8 张设计示例](ADAPTIVE_PREVIEWS.md)：同一 Token 机制，最终业务适配仍需在真机验证。

## 每个页面包含
独立的布局 SVG、主 CTA、列表/仪表、底部导航、明确的视觉层级；对应的 MD 规格覆盖页面目标、组件属性、点击事件、导航、异常与空态、加载、权限、响应式、无障碍、真实数据映射。

**设计状态不是生产状态**：静态矢量画布出现的时间、坐标、云端/电脑在线状态、图表曲线和数值皆为演示数据。实时业务组件由相应 App 的领域模型、SDK26 或 Windows Agent 驱动，不允许把 SVG 直接当业务结果。

**LightBearing 特殊说明**：本次页面设计不参考任何既有 UI/R2 HTML 设计；既有太阳计算与时区内核仍应在代码层保留并回归测试。详见 [从零设计边界](LIGHTBEARING_FRESH_REDESIGN.md)。
