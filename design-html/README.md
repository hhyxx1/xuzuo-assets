# 序作 Studio · 四款 HTML + TypeScript 高保真设计预览

> **状态：设计预览 v0.1 / DRAFT_FOR_REVIEW。** 所有页面为视觉与交互说明，不宣称原生 HarmonyOS 已实现或通过真机测试。

## 预览与运行

在 `design-html/` 目录：

```bash
npm install
npm run build
python3 -m http.server 8123
```

然后打开 **http://localhost:8123/design-html/**（从仓库根目录运行 HTTP server 时），或者如果进入 `design-html` 后启动服务则打开 **http://localhost:8123/**。

本分支附带 `dist/*.js` 浏览器预编译产物。直接下载源码后，只需要本地 HTTP 静态服务即可预览；更新 `src/*.ts` 后请重新运行 `npm run build`。

## 范围

| 应用 | 页面数 | 强调色 | 设计方向 |
|---|---:|---|---|
| 逐光 LightBearing | 12 | `#FFBC6B` / `#73D9D5` | 摄影光线、仪表与计划 |
| 帧间 FrameMori | 10 | `#FF9471` / `#75DDC4` | 定格动画与逐帧剪辑 |
| 声剪 VoxCarve | 10 | `#AF9DFF` / `#FDBF92` | 文字转写与声音编辑 |
| 键阵 MacroLoom | 10 | `#B3F07C` / `#7FC8FF` | 手机控制 Windows 的快捷动作 |
| **总计** | **42** | 四款共享设计系统 | StoroPix 不在此次视觉改造内 |

**LightBearing 完全重新组织界面视觉**，只借鉴功能要求与真实技术约束，不沿用之前不满意的 ArkUI/R2 页面构图。所有真实计算算法仍留在原应用内。

## 设计层与源码目录

- `index.html`：预览外壳（不是 ArkUI 页面）。
- `styles.css`：视觉令牌与共享组件外观，手机三档宽度响应式。
- `src/types.ts`：ArkTS 友好的静态页面数据模型。
- `src/tokens.ts`：四款强调色、间距、圆角与功能安全参数。
- `src/data.ts`：**42 页唯一结构化内容源**。
- `src/render.ts`：21 类可复用视觉组件的浏览器 HTML 适配。
- `src/main.ts`：应用切换、页面切换、主题、设备宽度及四态交互。
- `dist/`：可由 TypeScript 编译器重新生成的浏览器 JS。
- `docs/pages/`：42 份一页一文件的开发验收规格。
- `docs/ASSET_PROMPTS.md`：后续需要 AI 生图的独立素材与精准提示词。
- `docs/COMPONENT_CONTRACTS.md`：TS 设计接口 ↔ ArkUI 组件映射。
- `docs/ARKTS_PORTING.md`：迁移限制与真实能力边界。
- `tools/verify.mjs`：页面计数/唯一性/模块结构静态验证。

## 操作说明

点击左侧应用名称切换四款主题；选择页面浏览全部 42 页；右上角切换 360/390/430vp、正常/空/加载/错误状态、深/浅色主题；页面内按钮可触发交互预览说明，但不会调用真实传感器/媒体/定位或电脑控制。

## 素材状态

此轮先交付**真实结构化 HTML/TS 设计稿**。需要 AI 生图的部分在 `docs/ASSET_PROMPTS.md` 标记了目标用途、建议画幅和提示词；预览中的山景、地图和取景区使用明确的 CSS 示意，不假称已是正式图片资产。批准具体图片后再生成、审核、入库并替换占位元素。

## 评审原则

1. 页面设计方案与真实 UI 代码 / HAP 功能是不同成果。
2. ArkTS 与 TS 并非完全等价；浏览器 DOM 与 CSS 无法直接编译成 .ets。
3. 交互反馈不代表真实服务执行，屏幕数据全部为演示示例。
4. 新素材或 UI 可单独 PR 逐项审批；不要自动合并到 main。
