# 逐光 / LightBearing · 素材制作需求与首轮交付状态

> Xuzuo Studio · API 26 only · v0.3 草案，等待用户审核；不代表编译验证。

**应用**：逐光 / LightBearing · **Bundle**：`com.hhyxx.LightBearing` · **代码仓库**：https://github.com/hhyxx1/LightBearing。

**阶段：`DESIGN_DRAFT`**。用户已经授权四款素材的**首轮设计制作与入库**，现有 [lightbearing 独立 SVG 素材目录](../../../design/04-assets/README.md) 和 [清单](../../../design/04-assets/manifests/assets.json) 可供审核。**素材终稿、HAP 集成及上架资源使用仍未批准；本轮所有生产编译/真机检查未执行。**

## 1. 方向与色彩

- 主色 `#FFBC6B`，辅助色 `#73D9D5`，系列暗底 `#0B1622`，暖纸浅底 `#F4F1EA`。
- 图标形状：太阳轨迹 + 地平线 + 观测节点。所有小尺寸导出均检查 48px 识别度。
- 画风：精致、专业、简洁；允许场景感，但 UI 内图片不能盖住真实数据。

## 2. 原始候选素材需求（下表保留历史目标；本轮矢量源稿采用抽象画风，不自动等同于写实方案）

| Asset ID | 内容概要 | 规格方向 | 约束与审稿要点 | 本阶段 |
| --- | --- | --- | --- | --- |
| A01 `launcher-icon` | 太阳地平线与轨迹弧、减少装饰节点 | 1024方形源图；可供矢量简化 | 不得生成写死系统遮罩的白边 | 计划，未生成 |
| A02 `onboarding-01` | 摄影师在金色山谷发现好光线 | 竖构图，保留标题安全区 | 仅首次引导，不上主工作区 | 计划，未生成 |
| A03 `onboarding-02` | 手机规划太阳方向 | 竖构图，场景风格连续 | 画面小屏幕不能冒充真实结果 | 计划，未生成 |
| A04 `onboarding-03` | 城市拍摄计划与目标光线 | 竖构图，保留文字安全区 | 真实时间由 ArkUI 标注 | 计划，未生成 |
| A05 `empty-locations` | 山顶机位信标 | 轻量局部插画、透明背景候选 | 仅空列表状态 | 计划，未生成 |
| A06 `share-background` | 克制的黄金时刻风景背景 | 4:5/9:16 版，留白 | 移除假太阳曲线；动态数字由程序绘制 | 计划，未生成 |


### 本轮实际独立资源与原需求差异

- [图标 SVG](../../../design/04-assets/app-icons/lightbearing.svg) + [256px PNG 预览](../../../design/04-assets/exports/app-icons/lightbearing-preview-256.png)：首轮设计稿，非最终商店图标。
- [引导 01](../../../design/04-assets/onboarding/lightbearing-01.svg)、[02](../../../design/04-assets/onboarding/lightbearing-02.svg)、[03](../../../design/04-assets/onboarding/lightbearing-03.svg)：三套抽象矢量概念，未制作摄影写实或具体人物场景。
- [first-use 空态](../../../design/04-assets/empty-states/lightbearing-first-use.svg)、[no-results 空态](../../../design/04-assets/empty-states/lightbearing-no-results.svg)、[unsupported 空态](../../../design/04-assets/empty-states/lightbearing-unsupported.svg)：统一风格的独立插画，正式 App 文字/CTA 仍由 ArkUI 渲染。
- [分享背景](../../../design/04-assets/share/lightbearing-share-bg.svg) 与 [功能插画目录](../../../design/04-assets/feature/)：可编辑 SVG 源件；没有真实业务数据；应用市场真实运行截图仍待上线版本生成。

**当前未完成的原需求**：需要真实项目截图的应用市场成品、需要摄影写实场景的指定插画、实际图像体积/DPR/设备端验收。不能把已存在的抽象 SVG 自动宣称与所有原表格条目完全一致。

## 3. 素材在 App 中的落点

- Launcher / 关于页：只使用经过图标小尺寸识别测试的正式图标；圆角裁切由系统处理。
- 引导页：首次可跳过、用户可在设置页重新查看；图中不嵌入具体产品文案，文本由 ArkUI 绘制。
- 空状态：小幅装饰 + 具体原因 + CTA，不能替代真实空列表和错误提示。
- 分享/商店图：可以用摄影/创作场景，但具体日期、轨迹、设备状态和成果由真实数据叠加，禁止误导用户。
- 任务工作台：相机/波形/日轨/宏按钮/图片编辑要使用原生可交互组件，而非图片假装可操作。

## 4. AI 生图的版权、真实性与技术约束

- 只能使用原创、已获授权的参考，不模仿指定的版权作品或未授权品牌视觉。
- 需清晰标记原始生成图、人工修改稿、压缩产物；保留生成版本与审稿意见。
- 生图中的手、相机、脚架、光影、太阳方向等必须人工复核；几何/计算数据不得直接来源于生成图。
- 所有图片不包含文本/水印/虚假 UI 读数；最终性能测试决定是否加入 HAP。

## 5. 提交与审核门槛

- 第一轮每款 1–2 套视觉方向/图标草案供比较，用户定稿后再导出全部尺寸。
- 不一次生成几十张差异极小的图；先审首屏和图标方向，避免返工。
- 按 `docs/shared/ASSET_PIPELINE.md` 提交命名、体积、SHA、许可与用途清单；素材单独 PR。

**已有对话中产生过一组 LightBearing 图标/引导/空状态/分享概念图，但这轮不复制或推送它们。用户审阅本文件后再确认哪些值得保留、哪些需要重做。**
