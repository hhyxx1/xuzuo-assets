# 键阵 MacroLoom · 首次配对

> **页面 02 / 10** · `macroloom/pair` · HTML/TypeScript UI v0.1 · DRAFT_FOR_REVIEW

## 页面目标

二维码、一次性配对码、本机服务验证与取消配对。

**页面副标题：**信任从明确授权开始

## 内容结构（由上至下）

1. **与桌面建立连接** — `pair`。
   - 对应 ArkUI：PairingPanel → QR/Code + SecureChannel
2. **输入配对信息** — `form`。
   - 可见元素：配对码、设备备注
   - UI 演示值（不是设备数据）：847296 / 我的工作电脑
   - 对应 ArkUI：FormField → TextInput / DatePicker / Menu
3. **配对要求** — `checklist`。
   - 可见元素：电脑端主动显示验证码、用户确认设备身份、双向认证与密钥持久化、可随时撤销设备
   - 对应 ArkUI：ChecklistRow → Checkbox / persisted state
4. **发现设备** — `list`。
   - 可见元素：我的电脑 · 局域网、其他设备 · 未授权
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

