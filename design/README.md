# 序作 Studio · 四层设计交付（四款同视觉系列）
> 版本：design-kit v1.0 草案 · 2026-11-12 · 新分支 `design/four-app-full-kit-v1`

**适用**：LightBearing / 逐光、FrameMori / 帧间、VoxCarve / 声剪、MacroLoom / 键阵。**不包括 StoroPix 的视觉改造**；它保留已定型、已发布的独立品牌。共享仓库不代表强制套用风格。

## 四层独立交付
1. [01-concepts/](01-concepts/README.md)：定位、视觉概念、四 App 风格总览。概念图仅是方向参考，**不是编码所需的完整布局约束**。
2. [02-page-designs/](02-page-designs/README.md)：**42 个 PRD 页面**逐页矢量设计、组件注释、状态清单与可浏览的页面画廊。每个页面一份独立 SVG，允许编辑；画廊为静态交互演示，不连接真实 API。
3. [03-design-system/](03-design-system/README.md)：唯一共享 token、组件注册表、状态/交互/无障碍规范，以及每个 App 的可选色彩变体。**同一组件只维护一个基础规范**。
4. [04-assets/](04-assets/README.md)：独立 SVG 图标、引导页插画、空态、背景等源素材和资产清单，优先矢量以便直接编辑。导出到 ArkUI 前必须用 SDK26 验证格式及内存/体积。

## 重要约束
- LightBearing **全面重新设计 UI**：不复制现有 UI、R2 HTML 或既有样式。只沿用业务定义、已验证的太阳计算与时区逻辑接口；示例数值不是实时太阳数据。
- 本分支只更改 `xuzuo-assets` 的**设计与资源**，不覆盖原 App 源码、现存图标或 AGC Bundle Name。
- `com.hhyxx.LightBearing` 需要原样保留；其他应用包名依 [包名登记](../docs/03_PACKAGE_AND_RELEASE_REGISTRY.md)。
- 输出的 SVG 为可编辑源资源；**每页设计是交互规格+版式参考，不是已编译 ArkUI 页面**。图像中可能有示例日期，真正 App 必须替换为计算/持久化真实数据。
- 本套组件在 ArkTS 实现时按项目技术基线使用原生 ArkUI，不采用 WebView 冒充原生。
- 验收入口：[DESIGN_QA.md](DESIGN_QA.md)。本分支素材为待用户审稿状态，不自动合并 main。

## 阅读路线
先 [组件与 Token](03-design-system/README.md) → [页面索引](02-page-designs/README.md) → 查看每个页面 SVG → [资源清单](04-assets/README.md) → 独立进行 ArkUI 实现和 SDK26 / 设备验收。
