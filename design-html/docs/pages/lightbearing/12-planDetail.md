# 逐光 LightBearing · 拍摄计划详情

> **页面 12 / 12** · `lightbearing/planDetail` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

已经保存的计划明细、清单与导航入口。

**页面副标题：**从准备到抵达，时间不会错过

## 内容结构（由上至下）

1. **滨江夕照** — `hero`。
   - 辅助说明：SHOOTING PLAN
   - 可见元素：已保存计划、目标时窗 16:37–17:29
   - 对应 ArkUI：HeroBanner → Stack + Image + Gradient + Button
2. **拍摄日程** — `timeline`。
   - 可见元素：15:30 抵达、16:00 架设、16:37 黄金开始、17:29 日落、17:55 蓝调结束
   - 对应 ArkUI：TimeAxis → Scroll + Canvas + event markers
3. **装备清单** — `checklist`。
   - 可见元素：相机与长焦、三脚架、备用电池、清洁工具
   - 对应 ArkUI：ChecklistRow → Checkbox / persisted state
4. **拍摄集合地点** — `map`。
   - 对应 ArkUI：MapSlot → Map Kit adapter（条件能力）
5. **计划操作** — `list`。
   - 可见元素：编辑计划、导出摘要、取消此计划
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

