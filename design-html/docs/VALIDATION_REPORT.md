# HTML + TypeScript UI 设计稿验证记录

> 2026-11-12 · 分支 `design/html-ts-v1` · 状态：`DESIGN_PREVIEW_ONLY`

## 已实测

- `dist/data.js`、`dist/render.js`、`dist/main.js`、`dist/tokens.js`：在 V8 动态语法检查中解析成功。
- 四款应用数据：**LightBearing 12、FrameMori 10、VoxCarve 10、MacroLoom 10，共 42 页**。
- 页面渲染：通过调用 `renderPhone` 和 `renderInspector` 遍历全部 42 页，**42/42 返回非空 HTML**，且可查到对应页标题和页面说明。
- 交互状态模拟：启动后的 HTML 生成、切换至 VoxCarve、下一页导航、主题切换、空状态切换均通过简单 DOM mock 执行；**这些不是浏览器真实点击截图验收**。
- GitHub 远端文件：页面模型、公共 renderer、TS 源码、对应浏览器 JS、42 份 Markdown 规格、AI 图像提示词已提交并能读取。

## 尚未实测（NOT_RUN）

- `npm install && npm run build`（本轮未在完整本地仓库完成独立 TypeScript 编译）。
- `npm run verify` 作为独立 Node 子进程执行。
- Chromium / 浏览器的 360、390、430 宽度逐像素检查及键盘/鼠标实际操作验收。
- HarmonyOS API 26 DevEco 构建、真机 ArkUI 组件验收。
- 相机、日轨计算、地图、ASR、字幕/视频导出及 Windows Agent 的真实业务闭环。
- 12 项独立 AI 摄影/插画素材的生成、授权审核和实图入库；目前只有 [提示词](ASSET_PROMPTS.md)，应用内为视觉占位。

## 重要限制

**42 个 HTML 页面设计稿不等于 42 个已开发的原生 HarmonyOS 页面。** 浏览器 JS 由同结构 TS 文件生成；后续正式开发应在实际 DevEco/SDK 工程中独立验证。

**StoroPix 没有视觉重设计，保留其已发布风格。**
