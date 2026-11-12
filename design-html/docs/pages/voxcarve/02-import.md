# 声剪 VoxCarve · 音视频导入

> **页面 02 / 10** · `voxcarve/import` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

媒体导入、语言选择、能力确认、进度与取消。

**页面副标题：**准备处理一段录音

## 内容结构（由上至下）

1. **导入任务** — `form`。
   - 可见元素：文件名称、语言、说话人数量
   - UI 演示值（不是设备数据）：interview.wav / 自动检测 / 自动
   - 对应 ArkUI：FormField → TextInput / DatePicker / Menu
2. **导入检查** — `checklist`。
   - 可见元素：格式支持验证、读取音轨信息、确认 ASR 服务可用、隐私授权
   - 对应 ArkUI：ChecklistRow → Checkbox / persisted state
3. **准备转写** — `progress`。
   - 可见元素：读取媒体、提交转写、人工校对
   - UI 演示值（不是设备数据）：28
   - 对应 ArkUI：TaskProgress → Progress / event state
4. **能力说明** — `list`。
   - 可见元素：转写不等于词级精确时间戳、无法使用的服务应提供替代方案
   - 对应 ArkUI：ListRow → List / LazyForEach

## 页面状态与交互

- Normal：展示本页完整任务链
- Empty：显示原因和唯一明确的下一步
- Loading：显示真实可取消的任务状态
- Error：可恢复操作与明确错误说明
- 顶部上一页/下一页用于设计评审；产品正式导航须回到真实信息架构。
- 本页的图表/地图/摄影/媒体数据如未接业务后端，一律展示“演示”而非真实测量。

## 复用规范

- 颜色：共用深色主题底色 `#0B1622`、面板 `#152836`；本 App 专属主色 `#AF9DFF`、辅助色 `#FDBF92`。
- 间距：4vp 基准；操作热区目标 48vp；导航和状态组件从单一设计系统调用。
- 不复制新的按钮、卡片、弹窗代码。各页面只提供 typed data 与必要的专用业务组件。

## 验收

- [ ] 360vp / 390vp / 430vp 三档可读可操作。
- [ ] 正常 / 空 / 加载 / 错误四态满足设计和无障碍。
- [ ] 组件在深/浅主题有清晰对比度。
- [ ] 实际 ArkUI 运行与源业务数据联动后再标为 PASS。

