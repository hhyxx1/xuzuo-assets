# 帧间 FrameMori · 稳定性辅助

> **页面 06 / 10** · `framemori/stability` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

参考帧、洋葱皮、取景辅助线与位置对齐。

**页面副标题：**让每帧保持画面一致

## 内容结构（由上至下）

1. **参考帧叠加预览** — `camera`。
   - 对应 ArkUI：MediaViewport → XComponent / Camera / Image
2. **叠加设置** — `form`。
   - 可见元素：洋葱皮透明度（%）、参考帧数
   - UI 演示值（不是设备数据）：55 / 2
   - 对应 ArkUI：FormField → TextInput / DatePicker / Menu
3. **对齐反馈** — `metrics`。
   - 可见元素：画面漂移、亮度偏差、对齐模式、参考帧
   - UI 演示值（不是设备数据）：演示 / 演示 / 手动 / 127
   - 对应 ArkUI：MetricCard → Grid + Text + status
4. **辅助功能** — `checklist`。
   - 可见元素：显示九宫格、启用洋葱皮、锁定白平衡、镜头位置复核
   - 对应 ArkUI：ChecklistRow → Checkbox / persisted state

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

