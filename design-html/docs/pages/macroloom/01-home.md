# 键阵 MacroLoom · 控制台首页

> **页面 01 / 10** · `macroloom/home` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

连接电脑、最近动作、常用面板和运行状态。

**页面副标题：**手机上的工作流控制中心

## 内容结构（由上至下）

1. **你的桌面，就在掌心** — `hero`。
   - 辅助说明：DESKTOP CONTROL
   - 可见元素：安全连接 Windows Agent、一键触发获授权的动作
   - 对应 ArkUI：HeroBanner → Stack + Image + Gradient + Button
2. **当前连接** — `metrics`。
   - 可见元素：设备数、连接状态、平均往返、最近执行
   - UI 演示值（不是设备数据）：1 / 演示已连接 / 12 ms / 构建完成
   - 对应 ArkUI：MetricCard → Grid + Text + status
3. **常用面板** — `deck`。
   - 可见元素：构建、打开 IDE、截图、音量+、播放/暂停、锁屏
   - 对应 ArkUI：ControlDeck → Grid + CommandStatus
4. **最近活动** — `list`。
   - 可见元素：09:12 构建项目、09:10 截取屏幕、08:52 打开工作区
   - 对应 ArkUI：ListRow → List / LazyForEach

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

