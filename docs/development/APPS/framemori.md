# 应用专项指令：帧间 FrameMori

**预期身份**：FrameMori / 帧间；拟定 bundle **com.hhyxx.framemori**（AGC 未核验注册前不得视为已冻结）。2026-11-12 未找到同名公开仓库；AI 须先检测用户本机私有/已有工程，再选择创建独立工程，勿默认覆盖或公开新仓库。

## 项目目标

真正的原生 HarmonyOS API 26 **逐帧拍摄—编辑—导出**应用。不是由静态 HTML 模拟相机，也不只是图片相册。复杂功能可以分依赖实现，但**全部 PRD 目标保留**。配色珊瑚 #FF9471、薄荷 #75DDC4，基底是四款共享中性色；实用、少渐变、专业但不花哨。

## 必须读取的专项文档

docs/apps/framemori/01_PRODUCT_PRD.md、02_UX_SPEC.md、03_TECH_SPEC.md、04_ACCEPTANCE.md、05_ASSET_BRIEF.md、06_AI_BUILD_PROMPT.md；design-html/docs/pages/framemori/ 10 页；docs/development/MINIMAL_UI_DIRECTIVE.md。

## 全部 10 页

projects 项目首页；capture 拍摄工作台；timeline 逐帧时间轴；frame-editor 单帧编辑；audio 配音与音乐；stability 稳定性辅助；preview 成片预览；export 动画导出；presets 拍摄预设；settings 设置与素材管理。

## 各阶段重点

- **01 发现与 API 探测**：Camera Kit 能否打开预览/拍照、PhotoSession 与 PhotoOutput 声明、AE/AF/AWB 能力差异、Image Kit PixelMap、编解码器支持、Audio Kit、Picker、File System、ArkData。要查华为官方当前 API Reference 与本机 API26 .d.ts，真机与模拟器差异单独列。
- **02 基础架构与 UI**：Project / Frame / CaptureSession / AudioTrack / EditCommand / ExportJob 类型；本地项目与帧目录事务一致；共享组件 + 真实 Camera Viewport 插槽；首屏突出继续拍摄和项目列表。
- **03 最小真实闭环**：建项目→授权相机（不授权要解释）→真正捕捉至少 2–3 帧→保存到应用沙箱→RDB 记录并持久化→退出重启重开→逐帧回放或导出真实帧文件并用第三方查看器确认。
- **04 全页面**：相机设置/取景网格、洋葱皮（原帧与上一帧真实叠加可控透明度）、帧缩略图/选中/拖动/复制/删除/撤销、单帧曝光/裁剪、音轨/试听、预设、设置等；每个按钮必须真实修改项目或明确设备限制。
- **05 真实视频导出**：按本机 SDK/官方 probe 选择支持的 VideoEncoder 与 AVMuxer；帧 PTS 正确、时长准确、音频可选或条件降级、分辨率/容器真实能力；异步进度、取消、断电恢复、导出后外部播放器核验；不能伪造 MP4 或仅把 PNG 改扩展名。
- **06 QA**：200+帧长项目、重复导出、异常退出重开、相机权限关闭/设备无相机、帧顺序与时长、音画同步、低存储、批量资源泄漏与真实输出文件哈希。

## 交付架构建议

Stage ArkTS/ArkUI 的 capture/、timeline/、project/、storage/、media/、export/、ui/ 领域分层；持久化 Frame index→文件路径和校验，不把大图 blob 直接塞 RDB。专业图形和时间轴以真实帧数据为源，布局符合实机屏宽。

## 关键质量闸门

没有 Camera Kit 真机权限就不能宣称“拍摄已完成”；没有实际编码过并在外部播放器验证的 MP4 就不能宣称“视频导出已实现”。设备不支持的编码、4K、手动曝光功能显示明确条件降级，不越权借用 ACL。
