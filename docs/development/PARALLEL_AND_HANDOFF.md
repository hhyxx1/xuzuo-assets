# 多 AI 并行开发与统一交接

## 四个独立会话

推荐一次使用四个互不共享源码写入目录的编程 AI 会话：
- 会话 A → LightBearing 既有仓库及其独立 feature 分支；
- 会话 B → FrameMori 新/既有独立本地工程；
- 会话 C → VoxCarve 新/既有独立本地工程；
- 会话 D → MacroLoom 新/既有独立本地工程（含 Windows Agent）。

**四者共读 xuzuo-assets/main 的设计与提示词**，但不要四个 AI 同时改这个仓库。记录同一个共享设计库 SHA，后续需要更新规范时提交文档建议，由用户或指定协调者审核。四个 App 代码可以并行编译，但 DevEco 设备调试需协调唯一设备/签名，否则日志会互相覆盖。

## 共享 UI 一致性

- 定义统一语义组件名称和 props：AppBar, NavigationShell, PrimaryButton, SecondaryButton, StatusChip, EmptyPanel, ErrorPanel, PermissionGate, Progress, TextFieldRow, ListRow, ConfirmDialog。
- 只共享视觉 Token/接口契约及设计验证；每款独立工程可以在初期复制最小组件代码，但必须保留相同契约与版本号，后续需要单独评审才把它们抽成共享 ohpm 包。
- 共用色彩、间距、排版、触摸行为与无障碍，不强行共用专业日轨/帧编辑/波形/宏面板。
- 调整公共组件时先同步变更提议到设计库，并在其余 App 创建“待合并变更项”，避免各自形成分叉。

## Skills 与工具环境

每个会话独立检测技能、DevEco/SDK、Java、hdc/设备和官方网络访问情况；不能把 A 会话的编译结果继承为 B 的验证结果。本地代码编辑权限和远端 GitHub 权限必须分别确认。

## 需要人工确认的动作

远端公开仓库、AGC 注册/应用上架、购买云 API/其他付费服务、签名证书处理、真机数据擦除、共享规范全局升级、应用市场图标替换。其它可逆的常规代码迭代在明确授权的 feature branch 内推进。

## 每阶段交换的信息

会话报告只能包含：已经验证的主题 Token/组件 API 变动、共同架构影响、官方 API26 支持差异、可复现测试结果和 blocker。不要跨 App 复制测试用户的真实媒体/机位/电脑密钥。

## 失败恢复

如果某个 AI 中断，用本目录 07_REVIEW_AND_CONTINUE.md 让它恢复；先读 CURRENT_STATE/CONTINUE 和 Git 当前 SHA，再继续。不要重新初始化现有工程。

## 同步节奏

每完成一个阶段写一次 WORK_LOG；四个 App 的状态可汇总在 xuzuo-assets/docs/development/STATUS_BOARD.md（由指定协调者单点更新），任何未验证状态必须清楚标明 NOT_RUN，避免只显示“完成百分比”。
