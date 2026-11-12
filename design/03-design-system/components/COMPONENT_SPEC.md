# Xuzuo UI · 组件合同 v1.0（四 App 共享）
> `DRAFT_FOR_REVIEW` · 实际 ArkUI 需核对 API 26 签名，命名为**逻辑组件 ID**，并不声称现有 ArkTS 中已经实现。

## 统一 API 与最小合约
| ID | Props / 输入 | 事件 | 必须覆盖的状态 | 原生实现建议 |
| --- | --- | --- | --- | --- |
| XzPageShell | title, body, activeNav, safeArea | onBack, onNavigate | loading, error, permission | Navigation/NavDestination + SafeArea |
| XzTopBar | title, leading, actions[] | onAction | idle, disabled, menu-open | Row + 文本 + iconButton |
| XzBottomNav | items[], active | onSelect | active, idle, badge, disabled | Tabs / Navigation 可访问语义 |
| XzPrimaryButton | text, icon?, enabled, task | onClick | idle, pressed, loading, disabled | Button，不可仅 Toast 假成功 |
| XzSecondaryButton | text, icon?, enabled | onClick | idle, pressed, disabled | Button |
| XzIconButton | iconId, label, enabled | onClick | idle, pressed, disabled | Image + Button + accessibilityText |
| XzSegmented | options[], selected | onChange | active, idle, disabled | Row + Button，语义选中 |
| XzCard | title?, body, actions? | onAction | idle, focused, error | Column + background + radius |
| XzMetricTile | label, value, unit, sourceAt, status | onDetails | ready, no-data, stale, error | Column + 等宽数字；无假实时 |
| XzStatusTag | text, tone, semanticIcon | none | info, success, warning, error | Text + icon，不只依靠颜色 |
| XzListCell | icon?, title, subtitle, trailing | onOpen, onMore | default, pressed, selected, disabled | Row，≥48vp 点击热区 |
| XzTextField | label, value, hint, validation | onInput | idle, focused, error, disabled | TextInput + 错误说明 |
| XzSlider | min,max,step,value,label | onChange,onCommit | enabled, disabled | Slider；显示当前数值与单位 |
| XzSwitch | checked,label,disabled | onChange | on,off,disabled,pending | Toggle + 文本状态 |
| XzDialog | title,body,primary,secondary | onConfirm,onCancel | open, busy, error | AlertDialog / CustomDialog |
| XzToast | message,tone | close | informative only | 不取代持久化/导出完成通知 |
| XzEmptyState | reason,illustration?,cta | onAction | first-use,no-results | 图小、原因明确、可行动 |
| XzErrorState | code,details,retry? | onRetry | recoverable,unrecoverable | 真实错误源、重试幂等 |
| XzPermissionGate | capability,rationale,fallback | onRequest,onFallback | never,denied,unsupported,granted | 用时请求，不重复弹 |
| XzProgressSheet | taskId,stage,progress,cancellable | onCancel | queued,running,verify,success,failed,cancelled | 真任务的状态机绑定 |

## 四款互相一致的硬约束
- 色板/字级/圆角/间距由 [tokens.json](tokens/tokens.json) 单一来源驱动；组件不硬编码应用名、不写 `#FF...` 作为颜色常量。
- App 配色通过 `primary/secondary` 变体注入；例如同一个 `XzPrimaryButton` 在 LightBearing 金色、VoxCarve 紫藤色。
- 共享交互状态：Normal/Pressed/Selected/Disabled/Loading/Error，Focus、读屏文案和大小屏策略一并复用。
- 业务特有的画布不可硬复用：LightBearing 的太阳轨迹必须计算驱动、FrameMori 的相机依赖 Camera Kit、VoxCarve 的波形必须读取音频、MacroLoom 的执行状态必须来自 PC Agent 回执。
- 时间、太阳角度、帧数、录音时长、PC 连接状态等均来自应用业务层；预览图中出现的值**仅为示例**。
- 按钮点击不代表任务成功；必须等真实输出文件校验或设备端 ACK 后更新 Success。
- 禁止同一页面连续出现两个相同优先级的主按钮；危险操作需二次确认并支持撤销（可撤销时）。

## 响应式
- compact 320–599vp：单列，导航与主 CTA 不遮挡；
- medium 600–899vp：主内容 + 局部上下文，可两栏；
- expanded ≥900vp：适当侧栏和检查器，但编辑器画布优先；
- 字体跟随系统放大、横屏时不丢失播放/停止/取消。
- Reduced motion 应用内设置与系统行为是否可读均需以 SDK26 能力核验；不能伪称自动跟随系统。

## 状态与质量
详见 [STATES_AND_ACCESSIBILITY.md](STATES_AND_ACCESSIBILITY.md)。本库 SVG 是视觉源文件；组件完成与否必须以后续具体代码仓库中的构建和真机结果判定。
