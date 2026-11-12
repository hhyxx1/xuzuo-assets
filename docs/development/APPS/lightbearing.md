# 应用专项指令：逐光 LightBearing

**工程身份**：既有仓库 https://github.com/hhyxx1/LightBearing 。真实包名 **com.hhyxx.LightBearing**（大写 L、B 必须保留），已存在 AppScope/app.json5 与用户数据。2026-11-12 公开状态：main 5468b4d9b34a4be97da8320285297bf9fadfabc5，fix/core-quality-audit e89b0262cb6d27cb6b22bf9502336d4f97e951c0。以上是**历史审计快照**，进入工作区后重新读取 Git HEAD。

## 首次会话必须额外告诉 AI

你在开发一个**已有代码和历史测试资产**的真实应用，不准创建新的 LightBearing 工程覆盖文件、不准变更已有 AGC 注册包名和签名材料。先审计当前 main 与 fix/core-quality-audit 的 diff；确认哪些 core/fix 尚未合入，然后从安全的独立分支推进新 UI。不要未核对就把整个 fix 分支强制合入 main。

**UI 视觉彻底重做**：用户不满意当前 ArkUI 及 R2 原型。不得沿用 HomePage/ObservationPanel 的既有视觉结构或 R2 截图作为设计蓝本；它们只作为已有代码和事件契约的参考。按照 docs/development/MINIMAL_UI_DIRECTIVE.md 和 design-html 的**信息结构**设计全新简约原生界面。要用少卡片、纯色、统一导航和可信读数，不要大面积渐变摄影海报。

**保留业务资产**：SolarCalc、TimeUtil、LocalTimeResolver、ReverseSearch、ArkData RDB schema 等不能因重做 UI 而被任意重写；所有改动先跑基准测试。旧审计的 99/99 属于历史记录，当前环境不运行不能声称 99/99 已通过。

## 全部 12 页

home 今日光线；sunpath 太阳轨迹；reverse 反向寻光；locations 机位库；compass 现场罗盘；map 地图方位；planner 拍摄计划；calendar 光线日历；compare 时间比较；settings 设置；placeDetail 机位详情；planDetail 计划详情。

具体页面合同：design-html/docs/pages/lightbearing/ 12 份；docs/apps/lightbearing/01_PRODUCT_PRD.md 与 04_ACCEPTANCE.md。

## 分阶段实现顺序

1. **01**：对照源码清点 main/fix，检查真实 bundle、签名只读、数据库 schema 和迁移历史；在现有算法上补独立边界测试（DST、历史 UTC/负时间戳、豪勋爵半小时变换、极地），记录 API26 Location/Sensor/文件保存等官方 API。
2. **02**：不复刻 R2，先实现新原生布局、公共 Theme/Nav/状态组件；首页首屏机位与日期选择/当前高度方位/时间条，普通纯色面与可读性优先。
3. **03**：机位坐标 + 机位时区 + 本地日期 → 正确 UTC 区间 → 真太阳读数/时窗 → 同一 selectedUtc 驱动图表与卡片 → 机位保存/重启复现。真实算法和原始数据保留。
4. **04**：按页面 ID 做完导航、机位/计划 CRUD、导出、设置与状态，同时所有操作接入真实领域层；实时罗盘需设备能力探测，地图可选但降级方位图必须可用。
5. **05**：重点解决反向寻光在 <5分钟窗口、10分钟误合并、跨日最优、maxResults 覆盖等边界；DST 23/23.5/24.5/25 小时日真实时间轴，偏移可区分的重叠本地时刻，误差不能靠图示硬编码。
6. **06**：同一套太阳数据在首页/日轨/导出/日历的交叉一致性；CSV/PNG 在外部独立解析；真机定位/传感器检查与拒绝权限降级；长搜索取消/重启恢复；极地/时区/1969 特测。

## 不允许的“实现”

- 一条看起来漂亮但始终写死 24h 的太阳曲线；
- 把静态 AI 夕阳照片用作太阳位置计算；
- 看到 R2 HTML 便复刻其旧视觉；
- 直接改包名为 com.hhyxx.lightbearing，或者丢弃已测算法重新用无验证的快捷公式；
- 没有实际系统保存/外部解析就宣称 CSV/PNG 导出成功。

## 交付

保留生产代码可追溯提交与回归结果；明确 UI 重构范围与领域算法的 diff；包含数据迁移安全审计，附真实设备测试日志。所有页面以可测试真实功能为准。
