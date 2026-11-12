# 帧间 FrameMori · 单帧编辑

> **页面 04 / 10** · `framemori/frame-editor` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

构图、色彩、曝光与变换均采用非破坏性参数。

**页面副标题：**让一个画面恰到好处

## 内容结构（由上至下）

1. **单帧预览 · 拖动对比** — `camera`。
   - 对应 ArkUI：MediaViewport → XComponent / Camera / Image
2. **调整类别** — `tabs`。
   - 可见元素：基础、颜色、裁剪
   - 对应 ArkUI：SegmentedTabs → Tabs / custom component
3. **画面参数** — `form`。
   - 可见元素：曝光（EV）、对比度、饱和度、旋转（°）
   - UI 演示值（不是设备数据）：0.3 / 12 / 5 / 0
   - 对应 ArkUI：FormField → TextInput / DatePicker / Menu
4. **操作** — `grid`。
   - 可见元素：重置、应用本帧、应用选中、前后对比
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

