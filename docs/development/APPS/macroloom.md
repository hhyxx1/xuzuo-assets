# 应用专项指令：键阵 MacroLoom

**预期身份**：MacroLoom / 键阵；拟定 bundle **com.hhyxx.macroloom**（AGC 注册前候选）。2026-11-12 未找到同名公开仓库；AI 应确认本机/已授权的私有工程后再创建独立项目。**这是 HarmonyOS 客户端 + Windows 本地 Agent 的双端产品**，只有手机 UI 不算完成。

颜色青柠 #B3F07C 与天蓝 #7FC8FF，背景沿用四款统一中性色。外观需像可靠的控制工具，别做“电竞遥控器”“赛博霓虹”。

## 全部 10 页

home 控制台首页；pair 首次配对；deck 控制面板；designer 面板布局编辑；macros 宏编辑器；actions 安全动作库；devices 设备列表；activity 执行记录；diagnostics 连接诊断；settings 安全与设置。

## 架构建议

- harmony/：Stage ArkTS/ArkUI，网络/会话状态、设备密钥、UI、任务回执、控制面板数据。
- windows-agent/：Windows .NET 8 WPF / WinUI / 服务（具体形态按本机可维护性与平台权限选择），明确本机可见的配对/授权/状态窗口。
- protocol/：共享 schema、版本协商、nonce、expiry、messageId、actionId、执行回执、拒绝码和测试向量。协议应支持客户端/Agent 单独测试，不许只有单端假数据。

## 分阶段任务

1. **01 官方与安全审计**：HarmonyOS Network Kit WebSocket/WSS/网络状态/安全存储/Scan Kit 能力在 API26 的真实可用性；Windows .NET、Windows Input / SendInput 等实际文档和权限模型。检测本机 Windows 环境和 .NET 是否存在；不能把 Linux mock 标为 Windows 真机功能完成。
2. **02 架构/简约 UI**：TrustedComputer、Deck、DeckButton、Macro、AllowedAction、Envelope、ExecutionReceipt；共享组件/控制格/状态条，所有在线状态由协议控制，未连接时不可显示绿色假在线。
3. **03 真闭环**：电脑端 Agent 启动和绑定本地授权窗口→生成一次性短期配对码/二维码→手机主动配对且用户核对设备身份→Windows 用户点击允许→建立带身份绑定的安全连接→手机发送“安全白名单单步动作”→Agent 校验并执行或拒绝→回传真正 receipt 和耗时→手机显示实际结果。
4. **04 所有页面**：网格选择/编辑/拖拽、动作模板、宏步骤、设备撤销/重连、执行历史/错误诊断、主题设置和通知；高风险动作必须具体确认，禁止“执行成功”只是 UI Toast。
5. **05 可靠性与安全**：TLS/WSS 与证书指纹绑定、密钥安全保存与轮换、验证码过期、nonce 与 messageId 去重、重放/洪泛防护、执行超时、撤销授权、离线重连安全策略、日志脱敏。Windows SendInput 只在允许的交互会话，**不得绕过 UAC、登录锁屏、安全桌面**。绝不接受手机端任意 shell/PowerShell 或可注入的原始命令参数。
6. **06 双端验收**：真实 Windows Agent 运行、客户端不同网络中断/恢复、重复执行与确认取消、已撤销设备拒绝控制、多步宏异常回滚策略、启动关闭时资源释放、跨设备安全日志回执一致性。需要用户 Windows 机器配合的验收标 NOT_RUN 直到实际运行。

## 安全边界

服务端仅接受预先登记的 actionId 与严格参数 schema，Windows 本地用户可审查/撤销。若某种窗口/系统控制需要更高系统权限，不能以管理员提权提示或 UAC 绕过实现，应该显示受限和可选替代动作。不做可被滥用的公网开放远控端口默认配置。

## 交付证明

必须提供 Agent 安装/启动说明（不包含签名密钥），本机 Windows 执行日志、手机回执、协议测试向量、真实故障恢复证据。网络和设备控制不能只靠 App 页面展示模拟成功。
