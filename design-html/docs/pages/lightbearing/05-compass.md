# 逐光 LightBearing · 现场罗盘

> **页面 05 / 12** · `lightbearing/compass` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

以设备传感器与真实太阳方位数据驱动罗盘；本 HTML 只演示视觉和状态。

**页面副标题：**把太阳落点放到眼前

## 内容结构（由上至下）

1. **实时朝向预览** — `compass`。
   - 对应 ArkUI：DirectionCompass → Canvas + Sensor adapter
2. **观测读数** — `metrics`。
   - 可见元素：太阳方位、太阳高度、设备朝向、偏差角
   - UI 演示值（不是设备数据）：238.6° / 12.4° / 231.0° / +7.6°
   - 对应 ArkUI：MetricCard → Grid + Text + status
3. **校准与偏移** — `form`。
   - 可见元素：用户微调（°）
   - UI 演示值（不是设备数据）：0
   - 对应 ArkUI：FormField → TextInput / DatePicker / Menu
4. **校准状态** — `checklist`。
   - 可见元素：定位精度已确认、磁力计校准、太阳数据校验
   - 对应 ArkUI：ChecklistRow → Checkbox / persisted state

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

