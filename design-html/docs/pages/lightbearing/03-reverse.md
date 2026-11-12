# 逐光 LightBearing · 反向寻光

> **页面 03 / 12** · `lightbearing/reverse` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

定义摄影目标方向与高低角等条件，寻找可拍摄窗口；演示结果不代表真实算法执行。

**页面副标题：**从理想光线反推出时间

## 内容结构（由上至下）

1. **找到理想的光** — `hero`。
   - 辅助说明：PHOTOGRAPHY PLANNER
   - 可见元素：指定朝向与时间范围、结合现有反向寻光算法计算可拍摄区间
   - 对应 ArkUI：HeroBanner → Stack + Image + Gradient + Button
2. **目标方位盘** — `compass`。
   - 对应 ArkUI：DirectionCompass → Canvas + Sensor adapter
3. **搜索约束** — `form`。
   - 可见元素：目标方位（°）、容差（°）、日期起点、日期终点
   - UI 演示值（不是设备数据）：235 / 8 / 2026-11-20 / 2026-12-20
   - 对应 ArkUI：FormField → TextInput / DatePicker / Menu
4. **光线类型** — `tabs`。
   - 可见元素：黄金、蓝调、太阳方向
   - 对应 ArkUI：SegmentedTabs → Tabs / custom component
5. **候选拍摄时段（演示）** — `list`。
   - 辅助说明：点击查看候选计划
   - 可见元素：11月24日 · 16:24–17:02、11月26日 · 16:21–16:59、11月30日 · 16:18–16:55
   - UI 演示值（不是设备数据）：匹配条件参考 / 匹配条件参考 / 匹配条件参考
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

