# 复用组件合同 · TypeScript/ArkUI 迁移

> 共享外观不等于共享业务数据。**四款必须复用一套主题 token、基础布局、基础状态组件。**

## 组件目录

| HTML/TS BlockKind | 组件合同 | 迁移后的 ArkUI 形式 |
|---|---|---|
| `hero` | 固定输入/输出 + Normal/Empty/Error | HeroBanner → Stack + Image + Gradient + Button |
| `metrics` | 固定输入/输出 + Normal/Empty/Error | MetricCard → Grid + Text + status |
| `chart` | 固定输入/输出 + Normal/Empty/Error | DataChart → Canvas（业务数据驱动） |
| `timeline` | 固定输入/输出 + Normal/Empty/Error | TimeAxis → Scroll + Canvas + event markers |
| `list` | 固定输入/输出 + Normal/Empty/Error | ListRow → List / LazyForEach |
| `grid` | 固定输入/输出 + Normal/Empty/Error | ActionGrid → Grid / GridItem |
| `form` | 固定输入/输出 + Normal/Empty/Error | FormField → TextInput / DatePicker / Menu |
| `calendar` | 固定输入/输出 + Normal/Empty/Error | DateGrid → Grid + calendar model |
| `camera` | 固定输入/输出 + Normal/Empty/Error | MediaViewport → XComponent / Camera / Image |
| `filmstrip` | 固定输入/输出 + Normal/Empty/Error | FrameStrip → horizontal List / Image |
| `waveform` | 固定输入/输出 + Normal/Empty/Error | WaveformView → Canvas + AudioPlayer |
| `map` | 固定输入/输出 + Normal/Empty/Error | MapSlot → Map Kit adapter（条件能力） |
| `compass` | 固定输入/输出 + Normal/Empty/Error | DirectionCompass → Canvas + Sensor adapter |
| `settings` | 固定输入/输出 + Normal/Empty/Error | SettingRow → ListItem / Toggle |
| `progress` | 固定输入/输出 + Normal/Empty/Error | TaskProgress → Progress / event state |
| `editor` | 固定输入/输出 + Normal/Empty/Error | AdjustmentSlider → Slider + Image |
| `deck` | 固定输入/输出 + Normal/Empty/Error | ControlDeck → Grid + CommandStatus |
| `checklist` | 固定输入/输出 + Normal/Empty/Error | ChecklistRow → Checkbox / persisted state |
| `export` | 固定输入/输出 + Normal/Empty/Error | ExportOptionCard → GridItem + media task |
| `pair` | 固定输入/输出 + Normal/Empty/Error | PairingPanel → QR/Code + SecureChannel |
| `tabs` | 固定输入/输出 + Normal/Empty/Error | SegmentedTabs → Tabs / custom component |

## 公共状态接口

`PageSpec {id,title,subtitle,blocks,description,stateNotes}` 与 `BlockSpec {kind,title,subtitle?,items?,values?,action?}` 当前用于**设计稿预览模型**，在正式应用中需按场景细化为有意义的独立参数，如太阳位置读数、帧引用、音频时间码和已授权操作 ID，而不是让业务逻辑依赖通用的 `items:string[]`。

推荐拆分：
- `ViewState`：Loading/Ready/Empty/Error/Unsupported，业务返回明确枚举。
- `ActionIntent`：用户意图枚举，UI 不直接操作存储、地理位置或 Agent。
- `ThemeToken`：四款公共语义 token + 每个 App 的强调色。
- `AsyncResult`：状态、进度、错误码及用户可采取的恢复操作。

## 不能伪造或机械复制的组件

- LightBearing：太阳轨迹、反向搜索和 DST 日期窗必须来自真实天文与时区算法；HTML 曲线只是示意。
- FrameMori：拍摄取景必须由真实 CameraKit 输出驱动；帧时间轴必须绑定真实素材文件。
- VoxCarve：文字稿/时间码需有真实对齐来源，不能凭示意图伪造精准度。
- MacroLoom：所有执行状态必须收到 Windows Agent 的真实授权回执；安全策略以实际桌面端为准。

## 四款共同视觉

- 页面深色底：`#0B1622`
- 面板：`#152836` / 提升层 `#1C3546`
- 正文：`#F9FAF3` / 次要：`#93A9B6`
- 应用强调色：见 `src/tokens.ts`
- 基础间距：4/8/12/16/20/24/32vp
- 组件圆角：8/12/16/20/28vp
- 操作热区推荐：48vp
- 所有触摸按钮：普通、禁用、按下、加载、失败、已完成状态有明确规范

**与 StoroPix 的关系：** StoroPix 视觉已定型，不继承这四款的强制颜色或组件外观；可共享隐私、安全、测试流程。
