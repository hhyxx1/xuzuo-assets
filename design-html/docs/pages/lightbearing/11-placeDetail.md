# 逐光 LightBearing · 机位详情

> **页面 11 / 12** · `lightbearing/placeDetail` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

机位照片、地图、历史计划与拍摄建议分层。

**页面副标题：**地理坐标与拍摄条件

## 内容结构（由上至下）

1. **徐汇滨江** — `hero`。
   - 辅助说明：SAVED LOCATION
   - 可见元素：城市天际线、31.1804°N · 121.4399°E
   - 对应 ArkUI：HeroBanner → Stack + Image + Gradient + Button
2. **机位与拍摄方向** — `map`。
   - 对应 ArkUI：MapSlot → Map Kit adapter（条件能力）
3. **当前光线** — `metrics`。
   - 可见元素：黄金时段、蓝调时段、日落方向、时区
   - UI 演示值（不是设备数据）：演示 16:37 / 演示 17:29 / 238° / Asia/Shanghai
   - 对应 ArkUI：MetricCard → Grid + Text + status
4. **历史计划** — `list`。
   - 可见元素：滨江夕照、城市剪影练习、蓝调夜景
   - 对应 ArkUI：ListRow → List / LazyForEach

## 页面状态与交互

- Normal：展示本页完整任务链
- Empty：显示原因和唯一明确的下一步
- Loading：显示真实可取消的任务状态
- Error：可恢复操作与明确错误说明
- 顶部上一页/下一页用于设计评审；产品正式导航须回到真实信息架构。
- 本页的图表/地图/摄影/媒体数据如未接业务后端，一律展示“演示”而非真实测量。

## 复用规范

- 颜色：共用深色主题底色 `#0B1622`、面板 `#152836`；本 App 专属主色 `#FFBC6B`、辅助色 `#73D9D5`。
- 间距：4vp 基准；操作热区目标 48vp；导航和状态组件从单一设计系统调用。
- 不复制新的按钮、卡片、弹窗代码。各页面只提供 typed data 与必要的专用业务组件。

## 验收

- [ ] 360vp / 390vp / 430vp 三档可读可操作。
- [ ] 正常 / 空 / 加载 / 错误四态满足设计和无障碍。
- [ ] 组件在深/浅主题有清晰对比度。
- [ ] 实际 ArkUI 运行与源业务数据联动后再标为 PASS。

