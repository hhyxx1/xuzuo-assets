# 四款 App 共享设计系统

只适用于 LightBearing/FrameMori/VoxCarve/MacroLoom；StoroPix 不强制使用。

- [机器可读 tokens.json](tokens/tokens.json)
- [CSS 参考 tokens.css](tokens/tokens.css)（仅原型预览，真实 App 用 ArkUI 原生组件/资源）
- [组件合同](components/COMPONENT_SPEC.md)
- [状态与无障碍](components/STATES_AND_ACCESSIBILITY.md)

## Token 规范
深色背景 `#0B1622`，卡片 `#152836`，抬升 `#1C3546`，主文字 `#F9FAF3`。

| App | 主强调色 | 辅助色 |
| --- | --- | --- |
| LightBearing / 逐光 | `#FFBC6B` | `#73D9D5` |
| FrameMori / 帧间 | `#FF9471` | `#75DDC4` |
| VoxCarve / 声剪 | `#AF9DFF` | `#FDBF92` |
| MacroLoom / 键阵 | `#B3F07C` | `#7FC8FF` |

所有组件在本库为**设计合同与资产**；不是已编译的 ArkUI 库。若开发共享源码组件，建议独立的 XuzuoUIKit 包并明确其 API 26 测试与版本号。
