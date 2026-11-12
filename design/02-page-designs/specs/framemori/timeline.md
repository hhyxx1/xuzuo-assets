# FrameMori · S03 逐帧时间轴（`timeline`）
> 设计套件 v1.0 · UI 完全重构 · 状态 `DESIGN_DRAFT` · 单页画布 [SVG](../../screens/framemori/timeline.svg) · API 26 目标，不等于可编译代码。

## 页面意图
剪出准确的节奏。帧 127 / 328。

- **业务目的**：每帧时间戳单调；大工程必须虚拟化加载，避免一次解码所有帧。
- **PRD 源规范**：[v0.3 UX_SPEC](../../../../docs/apps/framemori/02_UX_SPEC.md)，对应 S03 章节。
- **原 PRD 信息结构**：缩略帧、拖动排序、帧时长、剪切复制、批量选择。
- **原 PRD 主 CTA**：播放预览。
- **原 PRD 异常/空态**：帧数为零/损坏帧/批量选择状态。

## 390 × 844 设计画布与各组件布局
| 位置 / 安全区 | 组件 ID | 显示与层级 |
| --- | --- | --- |
| 0–44 | `SystemStatusBar` | 系统状态栏占位，不在生产 App 内自绘假的电量/时间 |
| 44–150 | `XzTopBar` / `PageTitle` | 顶部品牌、页码/返回、主标题与一句任务描述；实际实现跟随系统安全区 |
| 163–341 | `timelineHero`（业务专用组件） | timeline 的可视化布局；不使用静态 SVG 计算或伪装真实 API |
| 376–466 | 两个 `XzMetricTile` | 总长 00:13.7 / 12 fps；缺失数据分别呈现 `NO_DATA` |
| 514–683 | `XzCard` 内 3 × `XzListCell` | 拖动时间刻度；复制/删除/移动/撤销；加入音轨 |
| 700–749 | `XzPrimaryButton` | 单个明确主任务；条件不足时 disabled + 解释 |
| 767–844 | `XzBottomNav` | 4 项语义导航，选中态采用 #FF9471；小屏尊重手势安全区 |

**共享组件**：XzTopBar、XzPageShell、XzMetricTile、XzCard、XzListCell、XzPrimaryButton、XzBottomNav、XzEmptyState、XzErrorState、XzProgressSheet。来自 [组件合同](../../../03-design-system/components/COMPONENT_SPEC.md)，禁止对本页重新复制整套基础按钮代码。

**该页视觉 token**：背景 `#0B1622`、卡片 `#152836`、主强调 `#FF9471`、辅助 `#75DDC4`、正文 `#F9FAF3`。所有颜色从 [tokens.json](../../../03-design-system/tokens/tokens.json) 注入，不在 ArkTS 内以页级魔法常量写死。

## 点击与导航合同
1. 顶栏可返回上一级，业务首页则显示 App 名；数据变更后先更新业务态再更新视觉。
2. 行 1「拖动时间刻度」→ 进入相应查看、详情或选项弹层。若无有效数据，显示原因而非假跳转。
3. 行 2「复制/删除/移动/撤销」→ 打开配置/详情；异步操作采用任务状态机 NEW→RUNNING→VERIFYING→SUCCESS/FAILED。
4. 行 3「加入音轨」及页底主 CTA → 播放预览。；重复点击必须幂等、防双提交。非导航操作需要可观察的真实结果。
5. 底部导航只切换四个明确的一级入口；非一级页面以 Navigation 返回，保留页面输入草稿与滚动位置。

## 数据与实现边界
每帧时间戳单调；大工程必须虚拟化加载，避免一次解码所有帧。

Camera Kit、曝光/对焦锁定和编码器能力按设备探测；不以视觉图推断设备必然支持。

- SVG 中的 `总长 00:13.7`、`12 fps`、演示日期、位置、统计以及视觉曲线均为 **DEMO_ONLY**。生产值必须由领域模型/Kit/RDB/PC Agent 提供。
- 动态视图优先用 ArkUI Canvas/原生控件或权限明确的系统 Kit；系统相机/媒体/网络能力必须先检查 SDK26 实际接口与设备支持。
- 本页能展示在浏览器不表示已通过 Build/HAP/真机测试。

## 组件状态矩阵
| 场景 | 设计行为 | 可测条件 |
| --- | --- | --- |
| First-use / Empty | 空态插画 + 原因 + 明确创建/导入 CTA；不虚构列表 | 新安装/清空应用数据 |
| Loading | 局部骨架屏、按钮 loading；异步任务进度来自真实任务源 | 人为降低 I/O 或后端响应 |
| Ready | 正常显示真实值；允许触摸、键盘和读屏操作 | 业务数据可用 |
| Permission denied | 使用 PermissionGate 显示申请原因和替代路线 | 系统拒绝/撤销授权 |
| Unsupported | 显示所缺 SystemCapability / 设备能力，禁用对应项 | 模拟/真实不支持 Kit |
| Failed | 保留原项目数据、显示错误码和重试；禁止成功 Toast | 源文件损坏 / 断连 |
| Cancelled | 任务取消不标记成功，可恢复输入状态 | 任务执行中取消 |
| Reduced motion | 无自动动画和大幅闪烁，状态切换保持可读 | 应用内关闭动效 |

## 响应式与可访问
- 手机 320–599vp：内容单列、可滚动，CTA 不压住系统手势区域；≥600vp 可引入检查器侧栏，业务工作区优先。
- 字号跟随系统缩放，所有操作目标至少 48vp；图标必须有 `accessibilityText`，颜色不能单独传递状态。
- 深色为主，可通过同一 token 实现浅色主题；本文只定义深色主稿，浅色由 token 语义反转而非手工画另一套逻辑。
- 所有真实效果、异常与退出恢复必须加入应用仓库的自动化/真机验收。

**本页审阅状态**：`DRAFT_FOR_REVIEW`；图稿是设计素材，非完成的生产代码。
