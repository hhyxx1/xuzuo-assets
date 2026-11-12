# 逐光 LightBearing · 太阳轨迹

> **页面 02 / 12** · `lightbearing/sunpath` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

用可拖动时刻选择器探索太阳高度、方位和光线窗口；真实实现必须复用已有精确天文内核。

**页面副标题：**今天的每一道光都有方向

## 内容结构（由上至下）

1. **轨迹呈现** — `tabs`。
   - 可见元素：高度曲线、方向罗盘、时间列表
   - 对应 ArkUI：SegmentedTabs → Tabs / custom component
2. **太阳高度与时刻** — `chart`。
   - 可见元素：06:00、09:00、12:00、15:00、18:00
   - 对应 ArkUI：DataChart → Canvas（业务数据驱动）
3. **选中时刻** — `metrics`。
   - 可见元素：方位角、高度角、日照阶段、本地时区
   - UI 演示值（不是设备数据）：238.6° / 12.4° / 黄金时刻 / UTC+08:00
   - 对应 ArkUI：MetricCard → Grid + Text + status
4. **关键时间节点** — `timeline`。
   - 可见元素：民用曙光、日出、太阳正午、日落、蓝调结束
   - 对应 ArkUI：TimeAxis → Scroll + Canvas + event markers
5. **方位仪表** — `compass`。
   - 对应 ArkUI：DirectionCompass → Canvas + Sensor adapter

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

