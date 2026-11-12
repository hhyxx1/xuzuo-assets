# 声剪 VoxCarve · 音频剪辑台

> **页面 04 / 10** · `voxcarve/timeline` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

波形、区间选择、剪切、复制、试听、撤销。

**页面副标题：**在时间线上精准修剪声音

## 内容结构（由上至下）

1. **音频波形与选区** — `waveform`。
   - 对应 ArkUI：WaveformView → Canvas + AudioPlayer
2. **当前选区** — `form`。
   - 可见元素：开始时间（秒）、结束时间（秒）、淡入（秒）
   - UI 演示值（不是设备数据）：12.360 / 28.640 / 0.2
   - 对应 ArkUI：FormField → TextInput / DatePicker / Menu
3. **剪辑工具** — `grid`。
   - 可见元素：修剪、分割、删除、保留、撤销、试听
   - 对应 ArkUI：ActionGrid → Grid / GridItem
4. **编辑轨道** — `timeline`。
   - 可见元素：00:00、00:15、00:30、00:45
   - 对应 ArkUI：TimeAxis → Scroll + Canvas + event markers

## 页面状态与交互

- Normal：展示本页完整任务链
- Empty：显示原因和唯一明确的下一步
- Loading：显示真实可取消的任务状态
- Error：可恢复操作与明确错误说明
- 顶部上一页/下一页用于设计评审；产品正式导航须回到真实信息架构。
- 本页的图表/地图/摄影/媒体数据如未接业务后端，一律展示“演示”而非真实测量。

## 复用规范

- 颜色：共用深色主题底色 `#0B1622`、面板 `#152836`；本 App 专属主色 `#AF9DFF`、辅助色 `#FDBF92`。
- 间距：4vp 基准；操作热区目标 48vp；导航和状态组件从单一设计系统调用。
- 不复制新的按钮、卡片、弹窗代码。各页面只提供 typed data 与必要的专用业务组件。

## 验收

- [ ] 360vp / 390vp / 430vp 三档可读可操作。
- [ ] 正常 / 空 / 加载 / 错误四态满足设计和无障碍。
- [ ] 组件在深/浅主题有清晰对比度。
- [ ] 实际 ArkUI 运行与源业务数据联动后再标为 PASS。

