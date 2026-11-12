# 键阵 / MacroLoom · 素材制作需求与首轮交付状态

> Xuzuo Studio · API 26 only · v0.3 草案，等待用户审核；不代表编译验证。

**应用**：键阵 / MacroLoom · **Bundle**：`com.hhyxx.macroloom` · **代码仓库**：（待创建独立仓库，必须包含 Windows Agent）。

**阶段：`DESIGN_DRAFT`**。用户已经授权四款素材的**首轮设计制作与入库**，现有 [macroloom 独立 SVG 素材目录](../../../design/04-assets/README.md) 和 [清单](../../../design/04-assets/manifests/assets.json) 可供审核。**素材终稿、HAP 集成及上架资源使用仍未批准；本轮所有生产编译/真机检查未执行。**

## 1. 方向与色彩

- 主色 `#B3F07C`，辅助色 `#7FC8FF`，系列暗底 `#0B1622`，暖纸浅底 `#F4F1EA`。
- 图标形状：四键网格 + 连线。所有小尺寸导出均检查 48px 识别度。
- 画风：精致、专业、简洁；允许场景感，但 UI 内图片不能盖住真实数据。

## 2. 原始候选素材需求（下表保留历史目标；本轮矢量源稿采用抽象画风，不自动等同于写实方案）

| Asset ID | 内容概要 | 规格方向 | 约束与审稿要点 | 本阶段 |
| --- | --- | --- | --- | --- |
| A01 `launcher-icon` | 四宫格快捷面板与连线 | 方形图标 | 不要用第三方 Stream Deck 产品图标 | 计划，未生成 |
| A02 `onboarding` | 手机作为桌面控制台的工作流插画 | 2–3 张 | 显示 Windows Agent 配对但不画假二维码 | 计划，未生成 |
| A03 `empty-devices` | 安静的桌面和未配对电脑 | 轻量插画 | 突出真实 CTA | 计划，未生成 |
| A04 `button-icons` | 抽象通用动作线性 SVG | 按 24vp 网格 | 第三方品牌 Logos 不直接生成 | 计划，未生成 |
| A05 `store-scenes` | 演讲/直播/高效办公桌面 | 视觉营销图 | 不要放虚假 Windows 特权能力 | 计划，未生成 |


### 本轮实际独立资源与原需求差异

- [图标 SVG](../../../design/04-assets/app-icons/macroloom.svg) + [256px PNG 预览](../../../design/04-assets/exports/app-icons/macroloom-preview-256.png)：首轮设计稿，非最终商店图标。
- [引导 01](../../../design/04-assets/onboarding/macroloom-01.svg)、[02](../../../design/04-assets/onboarding/macroloom-02.svg)、[03](../../../design/04-assets/onboarding/macroloom-03.svg)：三套抽象矢量概念，未制作摄影写实或具体人物场景。
- [first-use 空态](../../../design/04-assets/empty-states/macroloom-first-use.svg)、[no-results 空态](../../../design/04-assets/empty-states/macroloom-no-results.svg)、[unsupported 空态](../../../design/04-assets/empty-states/macroloom-unsupported.svg)：统一风格的独立插画，正式 App 文字/CTA 仍由 ArkUI 渲染。
- [分享背景](../../../design/04-assets/share/macroloom-share-bg.svg) 与 [功能插画目录](../../../design/04-assets/feature/)：可编辑 SVG 源件；没有真实业务数据；应用市场真实运行截图仍待上线版本生成。

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
