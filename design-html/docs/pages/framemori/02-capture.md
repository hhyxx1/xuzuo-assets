# 帧间 FrameMori · 拍摄工作台

> **页面 02 / 10** · `framemori/capture` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

相机预览、网格、曝光、焦点、拍摄间隔和快门。

**页面副标题：**稳定相机、逐帧捕捉

## 内容结构（由上至下）

1. **实时拍摄取景框** — `camera`。
   - 对应 ArkUI：MediaViewport → XComponent / Camera / Image
2. **已拍摄帧** — `filmstrip`。
   - 可见元素：001、002、003、004、005、006、007
   - 对应 ArkUI：FrameStrip → horizontal List / Image
3. **当前拍摄** — `metrics`。
   - 可见元素：帧数、目标帧率、播放时长、曝光
   - UI 演示值（不是设备数据）：128 / 12 fps / 10.7 秒 / 自动
   - 对应 ArkUI：MetricCard → Grid + Text + status
4. **拍摄设置** — `form`。
   - 可见元素：帧率、曝光补偿
   - UI 演示值（不是设备数据）：12 / +0.0
   - 对应 ArkUI：FormField → TextInput / DatePicker / Menu
5. **快捷操作** — `grid`。
   - 可见元素：拍摄一帧、洋葱皮、网格、稳定辅助
   - 对应 ArkUI：ActionGrid → Grid / GridItem

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

