# 键阵 MacroLoom · 连接诊断

> **页面 09 / 10** · `macroloom/diagnostics` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

网络往返、Agent 版本、端口和功能状态报告。

**页面副标题：**连接的稳定性应该可以验证

## 内容结构（由上至下）

1. **连接质量** — `metrics`。
   - 可见元素：往返延迟、上传速率、下载速率、连接状态
   - UI 演示值（不是设备数据）：12 ms / 3.2 KB/s / 5.8 KB/s / 演示在线
   - 对应 ArkUI：MetricCard → Grid + Text + status
2. **诊断项目** — `checklist`。
   - 可见元素：Agent 证书验证、应用握手协议、指令队列回执、失联恢复策略
   - 对应 ArkUI：ChecklistRow → Checkbox / persisted state
3. **诊断进度** — `progress`。
   - 可见元素：网络连通、认证、Agent 响应
   - UI 演示值（不是设备数据）：68
   - 对应 ArkUI：TaskProgress → Progress / event state
4. **故障处理** — `list`。
   - 可见元素：网络不通：检查同网段、认证失效：重新配对、Agent 不在线：检查电脑程序
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

