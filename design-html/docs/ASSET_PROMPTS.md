# AI 图像素材提示词 · 下一轮按需生成

> **状态：PROMPT_READY / ASSET_NOT_GENERATED。** 本轮 HTML 用渐变/结构化占位。以下提示词用于生成**独立可替换图像素材**，不是整张静态 App 截图。所有生成图需要人工复核、裁剪、安全区与版权检查。

## 通用约束

英文正向提示词后可追加：`No text, no logos, no app screens, no UI widgets, no map labels, no fake sun trajectories, no watermark, clean negative space for overlay UI, original artwork.`

| Asset ID | 应用 | 用途 | 建议尺寸或比例 | 目标文件 |
|---|---|---|---|---|
| LB-HERO-01 | LightBearing | 首页城市日落摄影头图 | 16:9，≥1600×900 | `assets/lightbearing/hero-city.webp` |
| LB-ONB-01 | LightBearing | 首次引导山谷摄影 | 3:4，≥1200×1600 | `assets/lightbearing/onboarding.webp` |
| LB-EMPTY-01 | LightBearing | 无保存机位的简约插画 | 4:3、透明可选 | `assets/lightbearing/empty-location.webp` |
| FM-HERO-01 | FrameMori | 桌面定格动画布景 | 16:9 | `assets/framemori/stopmotion-hero.webp` |
| FM-ONB-01 | FrameMori | 手作定格布景与相机 | 3:4 | `assets/framemori/onboarding.webp` |
| FM-EMPTY-01 | FrameMori | 空项目的创意工作台 | 4:3 | `assets/framemori/empty-project.webp` |
| VC-HERO-01 | VoxCarve | 高质感抽象声波背景 | 16:9 | `assets/voxcarve/sonic-hero.webp` |
| VC-ONB-01 | VoxCarve | 播客/声音编辑氛围画面 | 3:4 | `assets/voxcarve/onboarding.webp` |
| VC-EMPTY-01 | VoxCarve | 暂无录音的声波插画 | 4:3 | `assets/voxcarve/empty-audio.webp` |
| ML-HERO-01 | MacroLoom | 手机与 PC 的无线控制场景 | 16:9 | `assets/macroloom/control-hero.webp` |
| ML-ONB-01 | MacroLoom | 桌面控制台概念插画 | 3:4 | `assets/macroloom/onboarding.webp` |
| ML-EMPTY-01 | MacroLoom | 尚未连接设备的简约插画 | 4:3 | `assets/macroloom/empty-device.webp` |

## 精准提示词

### LB-HERO-01
> Ultra-premium editorial photograph of Shanghai riverside skyline during golden hour, warm amber sun resting low over the horizon, cool teal shadows over river water, realistic atmospheric haze, 16:9 wide crop, skyline concentrated right, gentle dark navy negative space left for application overlay, cinematic yet natural, professional landscape photography, physically plausible sunlight, no typography, no diagram overlays.

### LB-ONB-01
> Cinematic fine-art illustration of a landscape photographer with a tripod standing on a mountainside before sunrise, warm golden rim light, teal fog valleys, premium realistic painterly photography style, portrait 3:4 composition, generous quiet top area, no text or UI.

### LB-EMPTY-01
> Minimal premium editorial illustration of a single glowing location pin on a distant ridgeline at dawn, subtle amber sun haze and deep navy-to-teal gradient sky, no interface, one isolated subject, transparent-capable silhouette, thoughtful negative space.

### FM-HERO-01
> A sophisticated stop-motion animation tabletop set with small original handcrafted puppet, felt trees, tiny scenic mountains, studio lamp casting warm coral light, mint highlights, macro photography shallow depth of field, original toy design, premium cinematic creative-studio visual, 16:9.

### FM-ONB-01
> Vertical cinematic photograph of a handcrafted miniature stop-motion world with expressive original clay character, animator's hands adjusting scene carefully, tripod camera, gentle coral and mint accents, warm tactile studio lights, portrait 3:4, no text.

### FM-EMPTY-01
> Minimal charming studio desk illustration with an empty miniature animation stage, clapperboard and a single tiny frame, coral and mint accent lighting, dark navy background, original minimal 3D aesthetic, uncluttered for app empty state, 4:3.

### VC-HERO-01
> Abstract premium sound waves made of delicate luminous wisteria-purple threads flowing across a dark navy space, subtle apricot frequency highlights, elegant waveform-inspired visual art but not a literal measured waveform, cinematic volumetric light, 16:9, negative space for typography.

### VC-ONB-01
> Beautiful intimate home audio studio, professional microphone, headphones and handwritten notes on desk, twilight purple ambient lighting with apricot desk-lamp highlights, realistic product photography, portrait 3:4, no screen UI, no text.

### VC-EMPTY-01
> Minimal elegant sculptural microphone silhouette surrounded by a few floating soft sound-ripple rings, purple and apricot accent lights against dark navy, original 3D illustration, isolated and uncluttered, 4:3.

### ML-HERO-01
> Premium clean modern desk with Windows PC monitor and smartphone showing abstract color blocks without any readable UI, subtle secure wireless connection as lime and sky-blue light ribbon between devices, dark navy cinematic environment, 16:9, no text, no brand logos.

### ML-ONB-01
> High-end editorial 3D illustration of a smartphone controlling a compact desktop studio setup, keyboard, monitor and subtle network lines, lime-green and sky-blue rim lights, modern premium automation aesthetic, portrait 3:4, no app UI or text.

### ML-EMPTY-01
> Minimal dark-navy 3D illustration of a disconnected desktop computer and smartphone, tiny dotted connection path fading in the middle, lime and sky-blue light accents, friendly sophisticated empty-state visual, 4:3.

## 使用与验收

1. 首先只生成对应页面真正需要的图像，不批量堆积无用背景。
2. 每张 AI 图必须单独保存源图与压缩版；生成时间、提示词版本、授权/使用说明及校验和一并归档。
3. **不把算法数据做成 AI 图片**：真实太阳方向、时间轴、音频波形、帧缩略图、电脑连接状态全部由代码和实际数据渲染。
4. 正式上架图标需单独设计并检查 48/96/192px 的识别度；不从概念板自动裁剪成正式 icon。
