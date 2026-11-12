# 键阵 MacroLoom · 面板布局编辑

> **页面 04 / 10** · `macroloom/designer` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

网格密度、按键文案、图标和拖拽排序。

**页面副标题：**每一格都按你的习惯排列

## 内容结构（由上至下）

1. **编辑面板** — `deck`。
   - 可见元素：构建、清理、IDE、截图、音量、播放
   - 对应 ArkUI：ControlDeck → Grid + CommandStatus
2. **网格布局** — `tabs`。
   - 可见元素：2×2、3×2、3×3、4×3
   - 对应 ArkUI：SegmentedTabs → Tabs / custom component
3. **按钮属性** — `form`。
   - 可见元素：按钮名称、按钮图标、按下反馈
   - UI 演示值（不是设备数据）：构建 / ⚡ / 触感+高亮
   - 对应 ArkUI：FormField → TextInput / DatePicker / Menu
4. **编辑规则** — `checklist`。
   - 可见元素：拖拽排序后保存、取消放弃未保存更改、重复命令需提示
   - 对应 ArkUI：ChecklistRow → Checkbox / persisted state

## 页面状态与交互

- Normal：展示本页完整任务链
- Empty：显示原因和唯一明确的下一步
- Loading：显示真实可取消的任务状态
- Error：可恢复操作与明确错误说明
- 顶部上一页/下一页用于设计评审；产品正式导航须回到真实信息架构。
- 本页的图表/地图/摄影/媒体数据如未接业务后端，一律展示“演示”而非真实测量。

## 复用规范

- 颜色：共用深色主题底色 `#0B1622`、面板 `#152836`；本 App 专属主色 `#B3F07C`、辅助色 `#7FC8FF`。
- 间距：4vp 基准；操作热区目标 48vp；导航和状态组件从单一设计系统调用。
- 不复制新的按钮、卡片、弹窗代码。各页面只提供 typed data 与必要的专用业务组件。

## 验收

- [ ] 360vp / 390vp / 430vp 三档可读可操作。
- [ ] 正常 / 空 / 加载 / 错误四态满足设计和无障碍。
- [ ] 组件在深/浅主题有清晰对比度。
- [ ] 实际 ArkUI 运行与源业务数据联动后再标为 PASS。

