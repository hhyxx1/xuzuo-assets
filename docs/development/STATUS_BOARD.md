# 四款 App 开发状态看板

> **初始化：2026-11-12。** 这里的状态是当前资料与公开代码检查结果，非真机验收；本目录提示词提交完成并不代表 App 已按这些指令运行过。

| 应用 | 代码仓库 | 当前已知开发状态 | 本手册阶段 | 最重要风险 |
|---|---|---|---|---|
| LightBearing | hhyxx1/LightBearing 已存在 | main + fix/core-quality-audit 存在，历史修复和测试另需当前 SHA 复核 | **阶段 01 尚未执行** | 不破坏包名/签名/太阳算法/数据；新 UI 完全重设计 |
| FrameMori | 尚未确认公开同名仓库 | 有 PRD 与 HTML 设计结构，不等于 ArkTS 代码 | **阶段 01 尚未执行** | Camera Kit、真帧/PTS、视频封装 |
| VoxCarve | 尚未确认公开同名仓库 | 有 PRD 与 HTML 设计结构，不等于 ArkTS 代码 | **阶段 01 尚未执行** | ASR 时间戳粒度、真实解码/导出与隐私 |
| MacroLoom | 尚未确认公开同名仓库 | 有 PRD 与 HTML 设计结构，不等于 ArkTS/Windows Agent 代码 | **阶段 01 尚未执行** | 安全配对、Windows Agent 双端闭环 |

将来更新本表必须引用 App 仓库真实 HEAD SHA、日期、设备/SDK、测试报告的证据；不能仅凭编程 AI 文字说“已完成”就改为 PASS。

## 统一状态词
- NOT_STARTED：开发流程尚未执行。
- IN_PROGRESS：有可检查的代码/日志正在实现。
- PASS_HOST：宿主单测有命令与结果。
- PASS_DEVICE：真机完整链路有证据。
- BLOCKED：真实环境/权限/SDK/设备限制。
- NOT_RUN：未运行，不得声称通过。
