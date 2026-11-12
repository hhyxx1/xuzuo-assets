# TypeScript → HarmonyOS ArkTS 迁移说明

## 使用范围

此原型以 `src/*.ts` 为主要源代码，编译出浏览器 `dist/*.js`，再由 HTML/CSS 渲染。**并非原生 ArkUI 代码**，不能通过改扩展名为 `.ets` 就完成移植。

## 有意识遵守的 ArkTS 友好原则

1. 页面与组件数据均有明确 `interface`、枚举式联合类型，不依赖 `any`。
2. 页面对象结构在运行时保持稳定，不使用动态添加/删除字段。
3. 页面身份与事件名称是固定字面量和显式状态，避免动态代理、运行时反射与无约束索引访问。
4. UI 显示逻辑与业务数据独立，未来用 ArkUI 组件重建 UI 层。
5. 相机、地图、编码、ASR、PC Agent 等能力先走接口适配/能力探测，不预设普通第三方应用一定能用。

## 推荐的原生架构

```text
entry/src/main/ets/
  models/         # 真实业务模型 + 页面展示模型
  design/         # ThemeTokens, CommonComponents
  pages/          # 对应设计页面的 @Component
  state/          # ViewState + 实际业务进度
  services/       # 太阳算法/相机/音频/网络适配层
  tests/          # 纯函数与 UI/真机验收
```

- `types.ts` / `tokens.ts`：**概念可迁移**；需在实际 SDK 下检查语法、类型与资源声明。
- `data.ts`：设计页面的结构列表可迁移为页面导航/验收依据，但真实业务类型应分开定义。
- `render.ts`：DOM、HTML 字符串、SVG 不直接迁移。需用 `Column`/`Row`/`Grid`/`List`/`Canvas` 等 ArkUI 元素重写。
- `main.ts`：浏览器事件和 history 不是 ArkUI 状态管理。需使用目标 API26 SDK 支持的声明式状态与事件回调。
- `styles.css`：将视觉 token 映射成 ArkTS 颜色、间距、圆角属性；不能直接作为 ArkUI 样式文件。

## 版本与验证

目标设备 **HarmonyOS 7 / API 26 only**。新页面尚未在 DevEco 编译；不宣称页面与所有高风险 Kit 可用。按官方 [ArkTS 引导](https://developer.huawei.com/consumer/en/doc/HarmonyOS-Guides/arkts-get-started/) 与 [TypeScript → ArkTS 迁移规则](https://developer.huawei.com/consumer/en/doc/HarmonyOS-Guides/typescript-to-arkts-migration-guide/) 逐项核对编译报错。不得自动把需要 ACL / 系统签名的接口包含进业务实现。

## LightBearing 的特别边界

**界面视觉完全重做**，但保留现有仓库的天文算法、DST 特殊日期处理、持久化数据与已注册包名 `com.hhyxx.LightBearing`。全新页面未做移植前，不能称为当前生产版已实现。
