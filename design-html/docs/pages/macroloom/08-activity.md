# 键阵 MacroLoom · 执行记录

> **页面 08 / 10** · `macroloom/activity` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

时间顺序、状态过滤、执行耗时与错误回执。

**页面副标题：**每一个动作都有明确结果

## 内容结构（由上至下）

1. **筛选** — `tabs`。
   - 可见元素：全部、成功、失败
   - 对应 ArkUI：SegmentedTabs → Tabs / custom component
2. **最近运行** — `timeline`。
   - 可见元素：09:12 Build、09:10 Screenshot、08:52 Open IDE、08:45 Volume
   - 对应 ArkUI：TimeAxis → Scroll + Canvas + event markers
3. **执行详情** — `list`。
   - 可见元素：构建项目 · 成功 · 3.2 秒、截图 · 成功 · 0.7 秒、打开 IDE · 成功 · 1.4 秒、清理缓存 · 待确认
   - UI 演示值（不是设备数据）：有回执 / 有回执 / 有回执 / 未执行
   - 对应 ArkUI：ListRow → List / LazyForEach
4. **今日汇总** — `metrics`。
   - 可见元素：总操作、成功、失败、取消
   - UI 演示值（不是设备数据）：14 / 12 / 1 / 1
   - 对应 ArkUI：MetricCard → Grid + Text + status

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

