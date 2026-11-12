# 键阵 / MacroLoom · 技术架构与 API26 实施规格

> Xuzuo Studio · API 26 only · v0.3 草案，等待用户审核；不代表编译验证。

**应用**：键阵 / MacroLoom · **Bundle**：`com.hhyxx.macroloom` · **代码仓库**：（待创建独立仓库，必须包含 Windows Agent）。

## 1. 技术基线与工程边界

- Stage + ArkTS + ArkUI、API 26 only；不能偷偷兼容 Android SDK/旧版视频编辑 SDK。
- 先使用 DevEco Studio + 官方 SDK26 核实 import、since、SystemCapability、ACL、编译行为。
- `entry/` 存 UIAbility 和页面，`model/`、`domain/`、`repository/`、`services/`、`platform/`、`components/` 分层。
- `assets` 仅由本仓库审阅后复制；签名/证书/用户数据不入 Git。

**双软件结构**：建议 `harmony/` 与 `windows-agent/` 两个构建目标，另有 `protocol/` 作为 JSON Schema、版本协商、测试向量的单一来源。

## 2. API 与子系统设计（必须探测真实性）

- 鸿蒙端 Network Kit WebSocket、网络状态监测、ArkData 与 Scan Kit（必要时 Camera 权限核对）
- Windows .NET 8 WPF（或 WinUI）Agent，托盘/配对/日志/本机授权界面
- 传输 WSS/TLS、证书指纹绑定与短期 Token；本地凭据安全存储
- Windows SendInput 操作在登录会话内执行，不尝试 UAC/锁屏绕过
- OBS WebSocket 5.x 插件通过电脑本地 Agent 访问 OBS，不让手机裸连 OBS
- 协议 schema：版本、nonce、expiry、允许动作、超时、幂等回执

## 3. 数据模型（领域接口；字段为草案）

```text
TrustedComputer{id,name,host,fingerprint,version,pairedAt,revokedAt}
Deck{id,name,gridRows,gridCols,sortOrder}
DeckButton{id,deckId,label,icon,spanX,spanY,macroId}
Macro{id,name,steps,timeoutMs,requiresConfirmation}
AllowedAction{id,kind,payload,approvedByLocalUser}
Envelope{version,id,type,deviceId,timestamp,nonce,payload}
ExecutionReceipt{id,status,startedAt,finishedAt,errorCode,latencyMs}
```

**持久化规则**：对象 ID 稳定、创建修改时间由单一时钟源生成；写入有事务；schema 迁移保留旧数据；大型二进制素材放沙箱并记录路径/校验和。任务完成与文件持久化须保持一致，取消不标记成功。

## 4. 主流程执行边界

1. Windows Agent 启动→显示一次性二维码→手机扫描→核对设备指纹→电脑端点击“允许”→持久信任并建立 WSS。
2. 用户编辑按钮→选“PPT 下一页”→保存→点击→手机发送 command ID→Agent 校验→执行→返回 ACK 及耗时。
3. 掉线→按钮变灰/排队策略明确→重连后仅安全地重发可幂等消息→消息 ID 去重。
4. 用户创建多步宏→审阅动作链→试运行/干运行→确认正式运行→执行结果与错误码可回看。

## 5. 异步任务状态机

```text
NEW → VALIDATING → QUEUED → RUNNING → VERIFYING → SUCCESS
             └→ UNSUPPORTED       ├→ CANCELLING → CANCELLED
                                  └→ FAILED → RETRY_QUEUED
```

- 所有长任务记录 `taskId`, `status`, `progress`, `errorCode`, `startedAt`, `finishedAt`。
- UI 不得根据按钮点击直接设置 SUCCESS；必须等文件校验/Agent ACK/计算结果验证结束。
- 任务多次点击或重试需防重复执行；退出页面释放相机/音视频 decoder/网络会话与资源。

## 6. App 特有的高风险实现细节

- 协议 Envelope：`{version,id,type,deviceId,ts,nonce,payload}`，所有字段有长度、类型、速率与有效期上限。
- 配对：Agent 自生成身份密钥 → 限时挑战 → 手机展示/校验电脑指纹 → PC 本人确认 → 发凭据；凭据安全保存、可撤销。
- 执行：按 agent-side 白名单校验 `HOTKEY / MEDIA / PRESENTATION / OPEN_APPROVED_APP / WAIT_MS / OBS_SCENE / OBS_MUTE`，并设置每步超时。
- 禁止远端原始键盘文本注入任意系统指令、任意文件路径执行和脚本执行；Windows UAC、锁屏与安全桌面不越权。
- 重连需使用命令 id 和幂等窗口去重：不可逆操作默认不做无条件自动重放。
- 操作日志不记录 token/密码/私有命令负载，电脑端提供紧急停止与强制解绑。

## 7. 权限、审计、错误恢复

- HarmonyOS `INTERNET` 普通权限（局域网通信）
- 二维码扫描依 Scan Kit 的 SDK26 可用性检查授权
- 不使用受限 ACL、不获取鸿蒙跨应用自动化权限
- Windows 侧安装时说明本机端口、防火墙、常驻托盘与可信设备配置

**阻断因素**：

- 没有 Windows Agent 的 HarmonyOS 应用无法独立控制电脑
- 网络控制存在命令重放、凭据窃取、未授权执行风险；默认拒绝未知设备
- 某些系统窗口/UAC/锁屏属于安全边界，不能绕过
- 自动重连若重发多次可能多次点击，必须 ID 去重和过期验证
- 允许自定义任意脚本会扩大攻击面；当前不允许远端任意脚本执行

## 8. 文件结构提议（不是已存在的代码证明）

```text
AppScope/
entry/src/main/ets/entryability/
entry/src/main/ets/pages/
entry/src/main/ets/components/
entry/src/main/ets/domain/
entry/src/main/ets/model/
entry/src/main/ets/repository/
entry/src/main/ets/services/
entry/src/main/ets/platform/
entry/src/main/resources/{base,dark}/
entry/src/ohosTest/
docs/{API_AUDIT,ACCEPTANCE,README}.md
```

此外必须包含 `windows-agent/` 的 .NET 源码、安装构建脚本、配对协议测试、证书处理说明与 UI。

## 9. 真机与构建质量门槛

- `API_AUDIT.md` 按接口列 Kit、SDK 文件/版本、since、权限、设备限制、测试结论。
- `README.md` 列本机 DevEco SDK 和构建命令、签名配置说明、最小测试步骤。
- `ACCEPTANCE.md` 记录真实测试命令、设备系统版本、结果、未验证项。
- 对运行环境不可访问的测试，报告 `NOT_RUN`，不能声称已测试通过。
