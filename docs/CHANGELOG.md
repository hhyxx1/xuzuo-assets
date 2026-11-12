# 文档变更日志

## v0.3 — 2026-11-12（审计修订，DRAFT_FOR_REVIEW）

### 2026-11-12 视觉范围补充（用户已确认此范围，其他事项仍待审批）

- **四款同风格**：LightBearing、FrameMori、VoxCarve、MacroLoom 共用基础视觉设计语言；各应用保留独立交互与强调色。
- **StoroPix 保留独立已定型视觉**：不作为这四款的强制换肤对象，不擅自替换已发布图标、商店素材或页面结构。
- 修改 BRAND_SYSTEM、UI_DESIGN_SYSTEM、ASSET_PIPELINE、文档入口、产品地图与 StoroPix 的 UX/素材清单/AI 任务书，防止编程 AI 把系列视觉套用到 StoroPix。
- 本次仅确定设计**范围**，尚未批准具体素材制作、代码更改或合并 PR；文档版本仍为 v0.3 待审草案。


- 全面核对 [包名与版本事实登记](03_PACKAGE_AND_RELEASE_REGISTRY.md)：`com.hhyxx.storopix` 是 StoroPix 真实包名，原写 `com.hhyxx1.storopix` 错误；保留 LightBearing 已注册的 `com.hhyxx.LightBearing`。
- StoroPix 已上架 0.2.0 为开发者本轮提供的信息；GitHub `main` 仍写 `versionName: 0.1.0`，发布 HAP 与公开源码的对应 SHA 尚待 AGC/构建记录核查。
- StoroPix 由“待创建项目”改为已有产品的增量开发与品牌迭代；继承已有代码与历史测试证据，不重建工程。
- 核对 LightBearing `main@5468b4d`、`fix/core-quality-audit@e89b026`，关键文件真实存在，fix 分支领先 main 43 提交；99/99 宿主机测试仅限历史审计快照。
- 对全系列 5×7 份应用文档、7 份 shared 规范与顶层入口统一 v0.3 草案状态，修复版本标签混用。
- 澄清“六类核心规格 + 一份导航 README = 每款七个文件”。
- 华为 26.0.0 发布日期详细表 8 月 29 日、汇总表 8 月 28 日，保留两者来源差异；继续以 26.0.0 Release 为基线。
- 当前合计 **48 个 Markdown 文件**：1 个仓库根 README + `docs/` 47 个文件；新增加事实登记表。
- PR 保持 Draft，`main` 未修改，不制作或上传素材。

## v0.2 — 2026-11-12

- 将 47 个 Markdown 文件（顶层 README 1 个 + `docs/` 下 46 个）提交至 `docs/preview-v1` 分支供审阅，替换此前仅有目录占位的状态。
- 将“冻结点”更正为“草案日期”，状态统一为 `DRAFT_FOR_REVIEW`。
- 重写顶层 README 与可点击审阅入口，明确本库同时面向文档与未来设计素材。
- 核实 API 26.0.0 Release 官方发布日期与 SDK 版本，区分公开 SDK 基线和具体能力是否可用。
- 不包含新生成/上传的素材；`main` 分支暂未修改。

## v0.1 / 2026-11-12

- 建立五款产品的完整文档草案（PRD、UI、技术、验收、素材需求、AI 开发任务书）。
- 定义「序作 Studio」系列品牌候选、系统色彩/组件、HarmonyOS API26 开发与权限规范。
- 特别标注 LightBearing 现有代码与 AGC 大写包名，不允许重新初始化覆盖。
- 所有素材需求均为 `AWAITING_APPROVAL`，没有开始生成或上传素材。
- 全部测试初始标为 `NOT_RUN`；不虚构已通过的编译或实机证明。

