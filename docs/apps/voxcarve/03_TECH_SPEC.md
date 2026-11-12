# 声剪 / VoxCarve · 技术架构与 API26 实施规格

> Xuzuo Studio · API 26 only · v0.3 草案，等待用户审核；不代表编译验证。

**应用**：声剪 / VoxCarve · **Bundle**：`com.hhyxx.voxcarve` · **代码仓库**：（待创建独立仓库）。

## 1. 技术基线与工程边界

- Stage + ArkTS + ArkUI、API 26 only；不能偷偷兼容 Android SDK/旧版视频编辑 SDK。
- 先使用 DevEco Studio + 官方 SDK26 核实 import、since、SystemCapability、ACL、编译行为。
- `entry/` 存 UIAbility 和页面，`model/`、`domain/`、`repository/`、`services/`、`platform/`、`components/` 分层。
- `assets` 仅由本仓库审阅后复制；签名/证书/用户数据不入 Git。

## 2. API 与子系统设计（必须探测真实性）

- File Picker：用户导入并复制沙箱、检查 URI 生命周期
- Core Speech Kit：先验证 API26 是否支持当前设备/语言、离线模型及返回时间戳粒度
- 音频链：AudioDecoder/PCM/波形计算/AudioRenderer/AudioEncoder
- 视频链：AVDemuxer/VideoDecoder/VideoEncoder/AVMuxer 能力探测与 PTS
- ArkData：RDB 项目/分段/剪辑决定，素材二进制放沙箱
- 若语音服务需要网络，必须有独立明确授权和个人数据外传说明

## 3. 数据模型（领域接口；字段为草案）

```text
MediaProject{id,name,mediaPath,mime,durationUs,schemaVersion}
SourceTrack{id,type,codec,sampleRate,channels,width,height,offsetUs}
TranscriptSegment{id,text,startUs,endUs,confidence,verified,timeSource}
EditDecision{id,sourceStartUs,sourceEndUs,mode,createdAt}
RenderSequence{id,orderedSegments,outputFormat,version}
CaptionCue{id,startUs,endUs,text,styleId}
RenderTask{id,progress,status,errorCode,outputUri}
```

**持久化规则**：对象 ID 稳定、创建修改时间由单一时钟源生成；写入有事务；schema 迁移保留旧数据；大型二进制素材放沙箱并记录路径/校验和。任务完成与文件持久化须保持一致，取消不标记成功。

## 4. 主流程执行边界

1. 用户选择一个 5 分钟口播视频→读取时长与轨道→生成波形→逐字稿转写或手动校准→预览。
2. 选中“嗯、呃”和重复句→播放对照→拖动边界对齐波形→确认删除→仅修改编辑图。
3. 点击停顿建议→逐个试听→确认/取消建议→撤销操作可恢复。
4. 导出 WAV/SRT→检查真实字节与音频长度；若 MP4 支持则重编码并验证音画同步。

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

- 先解复用实际音轨为分块 PCM，再计算 RMS / 波形峰值缓存；不得把视频当成只有音频。
- 字幕时间信息的来源需要显式字段 `timeSource = SDK | MANUAL | ALIGNED`；SDK 没有时间戳时不能自己按字符比例“估计准确点”。
- 非破坏性裁剪编辑图采用 `[startUs,endUs)` 半开区间，保留原媒体，修改只重算输出序列。
- 输出时间轴必须重新生成单调 PTS、处理视频关键帧与音频采样偏移；拼接首尾避免明显点击声。
- 用外部 ffprobe/播放器验证输出时长、真实剪切点与 A/V sync；没有支持的编码器需标记 UNSUPPORTED，而不是保存原视频充数。

## 7. 权限、审计、错误恢复

- MICROPHONE：仅点“开始录音”后申请
- 输入文件只使用用户文件/媒体选择器
- 默认不声明互联网权限；在线转写如果加入须单独审核
- 系统保存弹窗用于结果导出，不应要求广泛存储 ACL

**阻断因素**：

- Core Speech 不一定提供稳定的词级时间戳；不能按文本字符比例伪造切点
- 音频变速、视频编辑需要重新计算音视频 PTS 和音量跨段平滑
- 断点和编解码格式错误可能产生静音、黑屏、音画不同步
- 错误剪辑会造成实际内容损失：默认可预览、可撤销、不覆盖源
- 长音频不得完全解码到内存；必须分块与磁盘缓存

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

## 9. 真机与构建质量门槛

- `API_AUDIT.md` 按接口列 Kit、SDK 文件/版本、since、权限、设备限制、测试结论。
- `README.md` 列本机 DevEco SDK 和构建命令、签名配置说明、最小测试步骤。
- `ACCEPTANCE.md` 记录真实测试命令、设备系统版本、结果、未验证项。
- 对运行环境不可访问的测试，报告 `NOT_RUN`，不能声称已测试通过。
