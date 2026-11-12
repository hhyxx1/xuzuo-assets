# Xuzuo Studio · 资源导出与 HarmonyOS 交付规范

## 已在仓库的真实文件

- **94 个可编辑 SVG 独立资源**：启动图标母版、共享线性图标、引导、空态、功能插画、分享背景。
- **4 个实际 PNG 图标预览**：`exports/app-icons/<app>-preview-256.png`（256×256），用来快速确认图标视觉方向，**不是 AppGallery 1024px 最终图标或已集成的 HAP 资源**。
- **5 个 SVG 视觉概念板**和**42 个页面 SVG**属于 01/02 层，不是运行时图库资源。

## 正式导出原则

1. 图标以 `app-icons/<app>.svg` 为可编辑母版，导出适配 AGC/应用市场要求的确切尺寸；**不要将 256×256 PNG 放大作为终版**。
2. 引导图源为 960×600，不嵌文字；按照设备屏幕比例选裁剪区。空态 480×320，分享背景 1080×1350；原始画布大小不是设备 DPI 建议值。
3. SVG 内的线性渐变、滤镜、透明度需要在实际 SDK26 资源编译/设备渲染上验证；如果不支持，**离线栅格化后再导入 HarmonyOS**。
4. 使用 `tools/export-assets.py` 进行批量 PNG 转换（可选 WebP），输出到未跟踪的 `exports/auto/`，先审稿，再将确认后的文件纳入 App 仓库 `entry/src/main/resources/base/media/`。
5. 与 UI 交互相关的按钮、导航、太阳轨迹、音频波形、设备状态不得栅格化成假控件；只从此目录获取必要的装饰/插图与图标。
6. App 和 AGC 包名不因资源设计变化而修改：LightBearing 保留 `com.hhyxx.LightBearing`；StoroPix 与本视觉套件无关。

## 导出操作（在本地检出仓库后）

```bash
python -m pip install cairosvg pillow
python design/tools/export-assets.py --dry-run
python design/tools/export-assets.py --format png
python design/tools/export-assets.py --format webp --category onboarding
node design/tools/check-kit.mjs
```

如环境不支持 CairoSVG，可在有正式设计软件或 SVG 渲染器的机器上等效导出。不同平台对渐变和字体处理略有差异，需人工对比。脚本只是提供转换，不代表已经完成真机验收。

**发布前置条件**：用户确认最终 SVG 与每张导出成品，检查资源权利和图标大小，真机测压缩体积/色域、暗/亮主题对比度，并写明使用的源文件 SHA。

## 素材审阅状态

当前：`DESIGN_DRAFT`；PNG 预览：`DESIGN_PREVIEW_NOT_RELEASE_ICON`；ArkUI/HAP 编译与真机测试：`NOT_RUN`。
