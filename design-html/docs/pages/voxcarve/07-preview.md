# 声剪 VoxCarve · 剪后试听试看

> **页面 07 / 10** · `voxcarve/preview` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

试听真实媒体片段，核对时间线、字幕和音量。

**页面副标题：**最终声音，不靠想象

## 内容结构（由上至下）

1. **音频试听区域** — `waveform`。
   - 对应 ArkUI：WaveformView → Canvas + AudioPlayer
2. **播放位置** — `timeline`。
   - 可见元素：00:00、00:15、00:30、00:45
   - 对应 ArkUI：TimeAxis → Scroll + Canvas + event markers
3. **预览状态** — `metrics`。
   - 可见元素：项目长度、播放速度、剩余变更、输出格式
   - UI 演示值（不是设备数据）：00:58 / 1.0× / 3 条 / WAV
   - 对应 ArkUI：MetricCard → Grid + Text + status
4. **校验提醒** — `list`。
   - 可见元素：音频片段完整性、字幕时间对齐、声音峰值与失真检查
   - 对应 ArkUI：ListRow → List / LazyForEach

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

