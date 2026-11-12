# 帧间 FrameMori · 逐帧时间轴

> **页面 03 / 10** · `framemori/timeline` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

帧缩略图、播放头、轨道、复制粘贴与撤销。

**页面副标题：**编辑节奏和故事动作

## 内容结构（由上至下）

1. **逐帧编辑轨** — `filmstrip`。
   - 可见元素：120、121、122、123、124、125、126、127、128
   - 对应 ArkUI：FrameStrip → horizontal List / Image
2. **声音轨道** — `waveform`。
   - 对应 ArkUI：WaveformView → Canvas + AudioPlayer
3. **时间轴工具** — `grid`。
   - 可见元素：剪切、复制、粘贴、删除、复制帧、撤销
   - 对应 ArkUI：ActionGrid → Grid / GridItem
4. **当前剪辑** — `metrics`。
   - 可见元素：选中帧、帧率、总帧数、时长
   - UI 演示值（不是设备数据）：127 / 12 fps / 128 / 10.7 s
   - 对应 ArkUI：MetricCard → Grid + Text + status

## 页面状态与交互

- Normal：展示本页完整任务链
- Empty：显示原因和唯一明确的下一步
- Loading：显示真实可取消的任务状态
- Error：可恢复操作与明确错误说明
- 顶部上一页/下一页用于设计评审；产品正式导航须回到真实信息架构。
- 本页的图表/地图/摄影/媒体数据如未接业务后端，一律展示“演示”而非真实测量。

## 复用规范

- 颜色：共用深色主题底色 `#0B1622`、面板 `#152836`；本 App 专属主色 `#FF9471`、辅助色 `#75DDC4`。
- 间距：4vp 基准；操作热区目标 48vp；导航和状态组件从单一设计系统调用。
- 不复制新的按钮、卡片、弹窗代码。各页面只提供 typed data 与必要的专用业务组件。

## 验收

- [ ] 360vp / 390vp / 430vp 三档可读可操作。
- [ ] 正常 / 空 / 加载 / 错误四态满足设计和无障碍。
- [ ] 组件在深/浅主题有清晰对比度。
- [ ] 实际 ArkUI 运行与源业务数据联动后再标为 PASS。

