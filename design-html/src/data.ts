import type { AppSpec } from './types.js';

/** 42 screens; source-of-truth data for browser preview and ArkUI migration. */
export const APPS: AppSpec[] = [
  {
    "id": "lightbearing",
    "name": "LightBearing",
    "cnName": "逐光",
    "symbol": "☀",
    "tagline": "规划光线，抵达好时刻",
    "primary": "#FFBC6B",
    "secondary": "#73D9D5",
    "pages": [
      {
        "id": "home",
        "title": "今日光线",
        "subtitle": "所见之光，提前抵达",
        "description": "以当前机位和选定日期呈现黄金/蓝调时段、实时太阳参数与主要工具入口。",
        "blocks": [
          {
            "kind": "hero",
            "title": "逐光 · 今日观测",
            "items": [
              "下一段黄金时刻",
              "晚间 16:37 — 17:29",
              "摄影计划示例 · 非实时数据"
            ],
            "values": [],
            "subtitle": "SHANGHAI · GOLDEN HOUR",
            "action": "切换机位"
          },
          {
            "kind": "metrics",
            "title": "日照概览",
            "items": [
              "日出",
              "日落",
              "方位角",
              "高度角"
            ],
            "values": [
              "06:50",
              "17:29",
              "238.6°",
              "12.4°"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "chart",
            "title": "今日太阳高度曲线",
            "items": [
              "06:00",
              "09:00",
              "12:00",
              "15:00",
              "18:00"
            ],
            "values": [],
            "subtitle": "选中曲线点，可查看方位/高度示例",
            "action": ""
          },
          {
            "kind": "timeline",
            "title": "光线时段",
            "items": [
              "06:24 蓝调",
              "06:50 日出",
              "07:37 晨黄金结束",
              "16:37 暮黄金开始",
              "17:29 日落"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "grid",
            "title": "快捷工具",
            "items": [
              "太阳轨迹",
              "反向寻光",
              "机位",
              "拍摄计划"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "sunpath",
        "title": "太阳轨迹",
        "subtitle": "今天的每一道光都有方向",
        "description": "用可拖动时刻选择器探索太阳高度、方位和光线窗口；真实实现必须复用已有精确天文内核。",
        "blocks": [
          {
            "kind": "tabs",
            "title": "轨迹呈现",
            "items": [
              "高度曲线",
              "方向罗盘",
              "时间列表"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "chart",
            "title": "太阳高度与时刻",
            "items": [
              "06:00",
              "09:00",
              "12:00",
              "15:00",
              "18:00"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "选中时刻",
            "items": [
              "方位角",
              "高度角",
              "日照阶段",
              "本地时区"
            ],
            "values": [
              "238.6°",
              "12.4°",
              "黄金时刻",
              "UTC+08:00"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "timeline",
            "title": "关键时间节点",
            "items": [
              "民用曙光",
              "日出",
              "太阳正午",
              "日落",
              "蓝调结束"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "compass",
            "title": "方位仪表",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "reverse",
        "title": "反向寻光",
        "subtitle": "从理想光线反推出时间",
        "description": "定义摄影目标方向与高低角等条件，寻找可拍摄窗口；演示结果不代表真实算法执行。",
        "blocks": [
          {
            "kind": "hero",
            "title": "找到理想的光",
            "items": [
              "指定朝向与时间范围",
              "结合现有反向寻光算法计算可拍摄区间"
            ],
            "values": [],
            "subtitle": "PHOTOGRAPHY PLANNER",
            "action": ""
          },
          {
            "kind": "compass",
            "title": "目标方位盘",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "搜索约束",
            "items": [
              "目标方位（°）",
              "容差（°）",
              "日期起点",
              "日期终点"
            ],
            "values": [
              "235",
              "8",
              "2026-11-20",
              "2026-12-20"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "tabs",
            "title": "光线类型",
            "items": [
              "黄金",
              "蓝调",
              "太阳方向"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "候选拍摄时段（演示）",
            "items": [
              "11月24日 · 16:24–17:02",
              "11月26日 · 16:21–16:59",
              "11月30日 · 16:18–16:55"
            ],
            "values": [
              "匹配条件参考",
              "匹配条件参考",
              "匹配条件参考"
            ],
            "subtitle": "点击查看候选计划",
            "action": "预览搜索结果"
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "locations",
        "title": "机位库",
        "subtitle": "所有灵感，都有坐标",
        "description": "搜索、筛选、收藏、排序并维护拍摄位置。",
        "blocks": [
          {
            "kind": "form",
            "title": "搜索机位",
            "items": [
              "机位名称 / 坐标"
            ],
            "values": [
              "徐汇滨江"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "tabs",
            "title": "筛选机位",
            "items": [
              "全部",
              "收藏",
              "最近"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "map",
            "title": "机位分布预览",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "保存的机位",
            "items": [
              "徐汇滨江 · 日落江景",
              "余山 · 城市远眺",
              "外滩 · 城市建筑群"
            ],
            "values": [
              "上海 · 收藏",
              "上海 · 自然",
              "上海 · 建筑"
            ],
            "subtitle": "点击进入机位详情",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "compass",
        "title": "现场罗盘",
        "subtitle": "把太阳落点放到眼前",
        "description": "以设备传感器与真实太阳方位数据驱动罗盘；本 HTML 只演示视觉和状态。",
        "blocks": [
          {
            "kind": "compass",
            "title": "实时朝向预览",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "观测读数",
            "items": [
              "太阳方位",
              "太阳高度",
              "设备朝向",
              "偏差角"
            ],
            "values": [
              "238.6°",
              "12.4°",
              "231.0°",
              "+7.6°"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "校准与偏移",
            "items": [
              "用户微调（°）"
            ],
            "values": [
              "0"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "checklist",
            "title": "校准状态",
            "items": [
              "定位精度已确认",
              "磁力计校准",
              "太阳数据校验"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "map",
        "title": "地图方位",
        "subtitle": "在地图上看光线落点",
        "description": "机位点、拍摄方向扇区与太阳轨迹分层显示。",
        "blocks": [
          {
            "kind": "map",
            "title": "拍摄地图和光线方向",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "tabs",
            "title": "地图模式",
            "items": [
              "地形",
              "道路",
              "简化"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "当前机位",
            "items": [
              "经度",
              "纬度",
              "朝向",
              "目标距离"
            ],
            "values": [
              "121.4399°E",
              "31.1804°N",
              "238°",
              "—"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "地图图层",
            "items": [
              "方向扇区",
              "机位标记",
              "地形高程"
            ],
            "values": [
              "可切换",
              "可切换",
              "条件支持"
            ],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "planner",
        "title": "拍摄计划",
        "subtitle": "让好时刻成为可靠计划",
        "description": "创建、编辑和维护拍摄计划，带时间、机位、提醒和清单。",
        "blocks": [
          {
            "kind": "form",
            "title": "计划基本信息",
            "items": [
              "计划名称",
              "开始时间",
              "结束时间",
              "地点"
            ],
            "values": [
              "滨江夕照",
              "2026-11-20 16:00",
              "2026-11-20 18:00",
              "徐汇滨江"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "timeline",
            "title": "拍摄流程",
            "items": [
              "到达机位",
              "构图准备",
              "黄金时段",
              "蓝调收尾"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "checklist",
            "title": "拍摄准备",
            "items": [
              "相机与镜头",
              "三脚架",
              "存储卡",
              "天气再确认"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "关联推荐",
            "items": [
              "黄金时段",
              "蓝调时段",
              "摄影提醒"
            ],
            "values": [
              "示例 16:37",
              "示例 17:29",
              "可设置"
            ],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "calendar",
        "title": "光线日历",
        "subtitle": "一个月的好光线，一眼看见",
        "description": "用日历格展示日期状态、日光窗口与已保存计划；极昼/极夜等异常需明确标注。",
        "blocks": [
          {
            "kind": "calendar",
            "title": "2026 年 11 月",
            "items": [
              "月视图",
              "光线筛选"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "本月摘要",
            "items": [
              "黄金日",
              "蓝调日",
              "计划数",
              "异常日期"
            ],
            "values": [
              "12",
              "9",
              "3",
              "按位置变化"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "选中日期 · 11 月 20 日",
            "items": [
              "晨间黄金",
              "暮间黄金",
              "关联计划"
            ],
            "values": [
              "根据机位计算",
              "根据机位计算",
              "滨江夕照"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "chart",
            "title": "月度时段趋势",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "compare",
        "title": "时间比较",
        "subtitle": "同一处机位，不同日子的光",
        "description": "对比两日期或两个时段的太阳高度、时窗与最佳拍摄角度。",
        "blocks": [
          {
            "kind": "form",
            "title": "比较对象",
            "items": [
              "日期 A",
              "日期 B"
            ],
            "values": [
              "2026-11-20",
              "2026-12-20"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "比较读数",
            "items": [
              "A 日暮光",
              "B 日暮光",
              "高度差",
              "方位差"
            ],
            "values": [
              "示例 A",
              "示例 B",
              "依计算结果",
              "依计算结果"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "chart",
            "title": "太阳高度差异",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "比较总结",
            "items": [
              "日落方向移动",
              "暮间时段长度变化",
              "临界日期说明"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "settings",
        "title": "设置",
        "subtitle": "精度、单位与个人偏好",
        "description": "统一管理单位、外观、提醒及离线数据策略。",
        "blocks": [
          {
            "kind": "settings",
            "title": "显示偏好",
            "items": [
              "主题模式",
              "距离单位",
              "角度格式",
              "时间制"
            ],
            "values": [
              "跟随系统",
              "米 / 公里",
              "度",
              "24 小时"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "settings",
            "title": "定位与权限",
            "items": [
              "定位授权",
              "数据导出",
              "拍摄提醒",
              "关于逐光"
            ],
            "values": [
              "仅使用时",
              "手动导出",
              "关闭",
              "版本与协议"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "重要声明",
            "items": [
              "日轨计算来自实际天文内核",
              "天气与地图需第三方服务",
              "本 HTML 为设计预览"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "placeDetail",
        "title": "机位详情",
        "subtitle": "地理坐标与拍摄条件",
        "description": "机位照片、地图、历史计划与拍摄建议分层。",
        "blocks": [
          {
            "kind": "hero",
            "title": "徐汇滨江",
            "items": [
              "城市天际线",
              "31.1804°N · 121.4399°E"
            ],
            "values": [],
            "subtitle": "SAVED LOCATION",
            "action": "创建计划"
          },
          {
            "kind": "map",
            "title": "机位与拍摄方向",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "当前光线",
            "items": [
              "黄金时段",
              "蓝调时段",
              "日落方向",
              "时区"
            ],
            "values": [
              "演示 16:37",
              "演示 17:29",
              "238°",
              "Asia/Shanghai"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "历史计划",
            "items": [
              "滨江夕照",
              "城市剪影练习",
              "蓝调夜景"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "planDetail",
        "title": "拍摄计划详情",
        "subtitle": "从准备到抵达，时间不会错过",
        "description": "已经保存的计划明细、清单与导航入口。",
        "blocks": [
          {
            "kind": "hero",
            "title": "滨江夕照",
            "items": [
              "已保存计划",
              "目标时窗 16:37–17:29"
            ],
            "values": [],
            "subtitle": "SHOOTING PLAN",
            "action": "查看机位"
          },
          {
            "kind": "timeline",
            "title": "拍摄日程",
            "items": [
              "15:30 抵达",
              "16:00 架设",
              "16:37 黄金开始",
              "17:29 日落",
              "17:55 蓝调结束"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "checklist",
            "title": "装备清单",
            "items": [
              "相机与长焦",
              "三脚架",
              "备用电池",
              "清洁工具"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "map",
            "title": "拍摄集合地点",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "计划操作",
            "items": [
              "编辑计划",
              "导出摘要",
              "取消此计划"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      }
    ]
  },
  {
    "id": "framemori",
    "name": "FrameMori",
    "cnName": "帧间",
    "symbol": "▣",
    "tagline": "让每一帧，都有生命",
    "primary": "#FF9471",
    "secondary": "#75DDC4",
    "pages": [
      {
        "id": "projects",
        "title": "项目首页",
        "subtitle": "从这里开始你的下一部动画",
        "description": "项目创建、最近编辑、素材与模板入口。",
        "blocks": [
          {
            "kind": "hero",
            "title": "让每一帧都有生命",
            "items": [
              "逐帧拍摄 · 时间轴编辑 · 本地导出"
            ],
            "values": [],
            "subtitle": "FRAME BY FRAME",
            "action": "创建项目"
          },
          {
            "kind": "grid",
            "title": "创作快捷入口",
            "items": [
              "新建动画",
              "拍摄工作台",
              "项目模板",
              "素材库"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "最近项目",
            "items": [
              "纸偶冒险 · 128 帧",
              "桌面小剧场 · 72 帧",
              "积木城市 · 204 帧"
            ],
            "values": [
              "12 fps · 草稿",
              "24 fps · 编辑中",
              "12 fps · 完成"
            ],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "capture",
        "title": "拍摄工作台",
        "subtitle": "稳定相机、逐帧捕捉",
        "description": "相机预览、网格、曝光、焦点、拍摄间隔和快门。",
        "blocks": [
          {
            "kind": "camera",
            "title": "实时拍摄取景框",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "filmstrip",
            "title": "已拍摄帧",
            "items": [
              "001",
              "002",
              "003",
              "004",
              "005",
              "006",
              "007"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "当前拍摄",
            "items": [
              "帧数",
              "目标帧率",
              "播放时长",
              "曝光"
            ],
            "values": [
              "128",
              "12 fps",
              "10.7 秒",
              "自动"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "拍摄设置",
            "items": [
              "帧率",
              "曝光补偿"
            ],
            "values": [
              "12",
              "+0.0"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "grid",
            "title": "快捷操作",
            "items": [
              "拍摄一帧",
              "洋葱皮",
              "网格",
              "稳定辅助"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "timeline",
        "title": "逐帧时间轴",
        "subtitle": "编辑节奏和故事动作",
        "description": "帧缩略图、播放头、轨道、复制粘贴与撤销。",
        "blocks": [
          {
            "kind": "filmstrip",
            "title": "逐帧编辑轨",
            "items": [
              "120",
              "121",
              "122",
              "123",
              "124",
              "125",
              "126",
              "127",
              "128"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "waveform",
            "title": "声音轨道",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "grid",
            "title": "时间轴工具",
            "items": [
              "剪切",
              "复制",
              "粘贴",
              "删除",
              "复制帧",
              "撤销"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "当前剪辑",
            "items": [
              "选中帧",
              "帧率",
              "总帧数",
              "时长"
            ],
            "values": [
              "127",
              "12 fps",
              "128",
              "10.7 s"
            ],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "frame-editor",
        "title": "单帧编辑",
        "subtitle": "让一个画面恰到好处",
        "description": "构图、色彩、曝光与变换均采用非破坏性参数。",
        "blocks": [
          {
            "kind": "camera",
            "title": "单帧预览 · 拖动对比",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "tabs",
            "title": "调整类别",
            "items": [
              "基础",
              "颜色",
              "裁剪"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "画面参数",
            "items": [
              "曝光（EV）",
              "对比度",
              "饱和度",
              "旋转（°）"
            ],
            "values": [
              "0.3",
              "12",
              "5",
              "0"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "grid",
            "title": "操作",
            "items": [
              "重置",
              "应用本帧",
              "应用选中",
              "前后对比"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "audio",
        "title": "配音与音乐",
        "subtitle": "为画面配上节奏",
        "description": "导入音频、设置入点、预览和音量调节。",
        "blocks": [
          {
            "kind": "waveform",
            "title": "音轨预览",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "音轨",
            "items": [
              "背景音乐",
              "拟音片段",
              "旁白"
            ],
            "values": [
              "00:00–00:11",
              "00:04–00:07",
              "未添加"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "轨道参数",
            "items": [
              "音量（%）",
              "开始时刻（秒）"
            ],
            "values": [
              "78",
              "0"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "grid",
            "title": "音频操作",
            "items": [
              "导入",
              "静音",
              "分割",
              "删除"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "stability",
        "title": "稳定性辅助",
        "subtitle": "让每帧保持画面一致",
        "description": "参考帧、洋葱皮、取景辅助线与位置对齐。",
        "blocks": [
          {
            "kind": "camera",
            "title": "参考帧叠加预览",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "叠加设置",
            "items": [
              "洋葱皮透明度（%）",
              "参考帧数"
            ],
            "values": [
              "55",
              "2"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "对齐反馈",
            "items": [
              "画面漂移",
              "亮度偏差",
              "对齐模式",
              "参考帧"
            ],
            "values": [
              "演示",
              "演示",
              "手动",
              "127"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "checklist",
            "title": "辅助功能",
            "items": [
              "显示九宫格",
              "启用洋葱皮",
              "锁定白平衡",
              "镜头位置复核"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "preview",
        "title": "成片预览",
        "subtitle": "发现节奏里的每个细节",
        "description": "播放、循环、速度和逐帧调试。",
        "blocks": [
          {
            "kind": "camera",
            "title": "作品预览",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "timeline",
            "title": "播放控制",
            "items": [
              "00:00",
              "00:04",
              "00:08",
              "00:10"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "预览信息",
            "items": [
              "分辨率",
              "帧率",
              "总帧数",
              "时长"
            ],
            "values": [
              "1920×1080",
              "12 fps",
              "128",
              "10.7 s"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "grid",
            "title": "预览动作",
            "items": [
              "播放",
              "暂停",
              "上一帧",
              "下一帧"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "export",
        "title": "动画导出",
        "subtitle": "带走真正可播放的作品",
        "description": "独立的格式、尺寸、帧率选择与导出进度。",
        "blocks": [
          {
            "kind": "export",
            "title": "导出格式",
            "items": [
              "MP4 H.264",
              "PNG 序列",
              "GIF"
            ],
            "values": [
              "视频（需设备支持）",
              "帧序列",
              "动图（需验证）"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "导出配置",
            "items": [
              "宽度",
              "高度",
              "帧率",
              "质量"
            ],
            "values": [
              "1920",
              "1080",
              "12",
              "高"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "progress",
            "title": "任务预览",
            "items": [
              "准备帧",
              "编码",
              "保存"
            ],
            "values": [
              "33"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "验收条件",
            "items": [
              "外部播放器能播放",
              "视频时长与帧数相符",
              "失败可以重试"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "presets",
        "title": "拍摄预设",
        "subtitle": "保存自己惯用的拍摄方式",
        "description": "快速选择帧率、曝光和叠帧参数。",
        "blocks": [
          {
            "kind": "grid",
            "title": "常用预设",
            "items": [
              "黏土动画",
              "纸片动画",
              "积木动画",
              "自定义"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "预设配置",
            "items": [
              "12 fps · 柔和运动",
              "24 fps · 流畅动态",
              "8 fps · 手作叙事"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "保存预设",
            "items": [
              "预设名称",
              "帧率"
            ],
            "values": [
              "我的动画",
              "12"
            ],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "settings",
        "title": "设置与素材",
        "subtitle": "可靠保存每一帧",
        "description": "项目自动保存、导出路径、界面和权限。",
        "blocks": [
          {
            "kind": "settings",
            "title": "拍摄与项目",
            "items": [
              "自动保存",
              "默认帧率",
              "相机权限",
              "本地素材存储"
            ],
            "values": [
              "开启",
              "12 fps",
              "使用时",
              "应用私有空间"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "settings",
            "title": "输出与外观",
            "items": [
              "默认视频尺寸",
              "默认格式",
              "主题",
              "语言"
            ],
            "values": [
              "1080p",
              "MP4（如支持）",
              "深色",
              "简体中文"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "存储管理",
            "items": [
              "检查项目完整性",
              "备份项目",
              "清理临时文件"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      }
    ]
  },
  {
    "id": "voxcarve",
    "name": "VoxCarve",
    "cnName": "声剪",
    "symbol": "◍",
    "tagline": "从文字，剪出好声音",
    "primary": "#AF9DFF",
    "secondary": "#FDBF92",
    "pages": [
      {
        "id": "projects",
        "title": "项目首页",
        "subtitle": "每一段声音，都有结构",
        "description": "项目搜索、录音导入、草稿和最近编辑状态。",
        "blocks": [
          {
            "kind": "hero",
            "title": "声音从这里开始",
            "items": [
              "导入音频与视频",
              "转写为可编辑的文字"
            ],
            "values": [],
            "subtitle": "VOICE STUDIO",
            "action": "导入声音"
          },
          {
            "kind": "list",
            "title": "最近项目",
            "items": [
              "产品访谈",
              "团队周会",
              "课程录音",
              "播客第 3 期"
            ],
            "values": [
              "转写待复核",
              "字幕已编辑",
              "未处理",
              "剪辑中"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "grid",
            "title": "开始工作",
            "items": [
              "导入文件",
              "新建录音",
              "文字稿",
              "剪辑台"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "import",
        "title": "音视频导入",
        "subtitle": "准备处理一段录音",
        "description": "媒体导入、语言选择、能力确认、进度与取消。",
        "blocks": [
          {
            "kind": "form",
            "title": "导入任务",
            "items": [
              "文件名称",
              "语言",
              "说话人数量"
            ],
            "values": [
              "interview.wav",
              "自动检测",
              "自动"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "checklist",
            "title": "导入检查",
            "items": [
              "格式支持验证",
              "读取音轨信息",
              "确认 ASR 服务可用",
              "隐私授权"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "progress",
            "title": "准备转写",
            "items": [
              "读取媒体",
              "提交转写",
              "人工校对"
            ],
            "values": [
              "28"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "能力说明",
            "items": [
              "转写不等于词级精确时间戳",
              "无法使用的服务应提供替代方案"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "transcript",
        "title": "文字稿",
        "subtitle": "在音频时间里直接编辑文字",
        "description": "时间戳、说话人、文本选择、播放联动与版本记录。",
        "blocks": [
          {
            "kind": "tabs",
            "title": "编辑模式",
            "items": [
              "文字稿",
              "说话人",
              "备注"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "带时间戳的语句",
            "items": [
              "00:00:04 · 说话人 A：欢迎来到今天的访谈",
              "00:00:12 · 说话人 B：我想从设计目标开始",
              "00:00:19 · 说话人 A：先谈谈你的创作过程",
              "00:00:28 · 说话人 B：这是一个新的尝试"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "waveform",
            "title": "联动音轨",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "搜索当前文字稿",
            "items": [
              "关键词"
            ],
            "values": [
              "设计目标"
            ],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "timeline",
        "title": "音频剪辑台",
        "subtitle": "在时间线上精准修剪声音",
        "description": "波形、区间选择、剪切、复制、试听、撤销。",
        "blocks": [
          {
            "kind": "waveform",
            "title": "音频波形与选区",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "当前选区",
            "items": [
              "开始时间（秒）",
              "结束时间（秒）",
              "淡入（秒）"
            ],
            "values": [
              "12.360",
              "28.640",
              "0.2"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "grid",
            "title": "剪辑工具",
            "items": [
              "修剪",
              "分割",
              "删除",
              "保留",
              "撤销",
              "试听"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "timeline",
            "title": "编辑轨道",
            "items": [
              "00:00",
              "00:15",
              "00:30",
              "00:45"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "silence",
        "title": "停顿复核",
        "subtitle": "剪掉停顿之前，先让你听见",
        "description": "静音片段检测与人工确认；不可一次性不可逆覆盖。",
        "blocks": [
          {
            "kind": "waveform",
            "title": "停顿候选区域",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "检测阈值",
            "items": [
              "最短停顿（秒）",
              "前后保留（秒）"
            ],
            "values": [
              "0.6",
              "0.3"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "checklist",
            "title": "建议删除片段",
            "items": [
              "00:12.3–00:13.1",
              "01:48.0–01:49.4",
              "03:03.2–03:04.3"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "变更预估",
            "items": [
              "候选数量",
              "预计缩短",
              "操作模式",
              "保存方式"
            ],
            "values": [
              "3",
              "3.5 秒",
              "人工确认",
              "非破坏性"
            ],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "captions",
        "title": "字幕编辑",
        "subtitle": "字幕与声音保持一致",
        "description": "字幕分段、阅读速度、样式与导出前检查。",
        "blocks": [
          {
            "kind": "tabs",
            "title": "字幕类型",
            "items": [
              "逐句",
              "双语",
              "样式"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "字幕段落",
            "items": [
              "00:00–00:04 欢迎来到今天的访谈",
              "00:04–00:09 让我们从问题开始",
              "00:09–00:15 谢谢你的邀请"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "字幕样式",
            "items": [
              "单行最大字数",
              "行数",
              "时间偏移（ms）"
            ],
            "values": [
              "16",
              "2",
              "0"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "grid",
            "title": "字幕操作",
            "items": [
              "合并",
              "拆分",
              "上一条",
              "下一条"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "preview",
        "title": "剪后试听试看",
        "subtitle": "最终声音，不靠想象",
        "description": "试听真实媒体片段，核对时间线、字幕和音量。",
        "blocks": [
          {
            "kind": "waveform",
            "title": "音频试听区域",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "timeline",
            "title": "播放位置",
            "items": [
              "00:00",
              "00:15",
              "00:30",
              "00:45"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "预览状态",
            "items": [
              "项目长度",
              "播放速度",
              "剩余变更",
              "输出格式"
            ],
            "values": [
              "00:58",
              "1.0×",
              "3 条",
              "WAV"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "校验提醒",
            "items": [
              "音频片段完整性",
              "字幕时间对齐",
              "声音峰值与失真检查"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "export",
        "title": "导出",
        "subtitle": "把编辑成果交给真实播放器",
        "description": "媒体与字幕独立导出，显示格式、编码和耗时。",
        "blocks": [
          {
            "kind": "export",
            "title": "可选交付",
            "items": [
              "WAV",
              "MP3",
              "SRT",
              "VTT"
            ],
            "values": [
              "无损音频",
              "有损编码（验证）",
              "通用字幕",
              "WebVTT"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "settings",
            "title": "导出选项",
            "items": [
              "字幕编码",
              "保存位置",
              "覆盖冲突",
              "项目备份"
            ],
            "values": [
              "UTF-8",
              "用户选定",
              "确认再覆盖",
              "推荐"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "progress",
            "title": "导出任务",
            "items": [
              "媒体准备",
              "编码",
              "写入"
            ],
            "values": [
              "0"
            ],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "history",
        "title": "历史与版本",
        "subtitle": "每一次剪辑都可追溯",
        "description": "查看版本、恢复点和编辑摘要。",
        "blocks": [
          {
            "kind": "list",
            "title": "历史版本",
            "items": [
              "v5 · 修正字幕",
              "v4 · 静音片段复核",
              "v3 · 主动剪辑",
              "v2 · 导入与转写"
            ],
            "values": [
              "今天 16:20",
              "今天 15:42",
              "昨天 21:00",
              "昨天 20:10"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "版本概览",
            "items": [
              "版本数",
              "撤销步骤",
              "素材数",
              "备份状态"
            ],
            "values": [
              "5",
              "12",
              "3",
              "本地"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "checklist",
            "title": "历史策略",
            "items": [
              "保留原媒体",
              "版本可恢复",
              "变更有时间范围"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "settings",
        "title": "设置",
        "subtitle": "尊重声音，也尊重隐私",
        "description": "语言与 ASR 服务、自动保存、播放和存储。",
        "blocks": [
          {
            "kind": "settings",
            "title": "音频偏好",
            "items": [
              "语言",
              "转写提供方",
              "自动保存",
              "默认播放速度"
            ],
            "values": [
              "简体中文",
              "按实际可用性",
              "30 秒",
              "1.0×"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "settings",
            "title": "隐私与导出",
            "items": [
              "默认离线优先",
              "数据清理",
              "导出字幕编码",
              "主题"
            ],
            "values": [
              "是",
              "手动",
              "UTF-8",
              "深色"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "能力说明",
            "items": [
              "时间戳精度可能依服务而异",
              "不承诺云转写一定可用",
              "任何媒体上传必须征求授权"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      }
    ]
  },
  {
    "id": "macroloom",
    "name": "MacroLoom",
    "cnName": "键阵",
    "symbol": "⌘",
    "tagline": "一个按钮，串起工作流",
    "primary": "#B3F07C",
    "secondary": "#7FC8FF",
    "pages": [
      {
        "id": "home",
        "title": "控制台首页",
        "subtitle": "手机上的工作流控制中心",
        "description": "连接电脑、最近动作、常用面板和运行状态。",
        "blocks": [
          {
            "kind": "hero",
            "title": "你的桌面，就在掌心",
            "items": [
              "安全连接 Windows Agent",
              "一键触发获授权的动作"
            ],
            "values": [],
            "subtitle": "DESKTOP CONTROL",
            "action": "连接设备"
          },
          {
            "kind": "metrics",
            "title": "当前连接",
            "items": [
              "设备数",
              "连接状态",
              "平均往返",
              "最近执行"
            ],
            "values": [
              "1",
              "演示已连接",
              "12 ms",
              "构建完成"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "deck",
            "title": "常用面板",
            "items": [
              "构建",
              "打开 IDE",
              "截图",
              "音量+",
              "播放/暂停",
              "锁屏"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "最近活动",
            "items": [
              "09:12 构建项目",
              "09:10 截取屏幕",
              "08:52 打开工作区"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "pair",
        "title": "首次配对",
        "subtitle": "信任从明确授权开始",
        "description": "二维码、一次性配对码、本机服务验证与取消配对。",
        "blocks": [
          {
            "kind": "pair",
            "title": "与桌面建立连接",
            "items": [],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "输入配对信息",
            "items": [
              "配对码",
              "设备备注"
            ],
            "values": [
              "847296",
              "我的工作电脑"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "checklist",
            "title": "配对要求",
            "items": [
              "电脑端主动显示验证码",
              "用户确认设备身份",
              "双向认证与密钥持久化",
              "可随时撤销设备"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "发现设备",
            "items": [
              "我的电脑 · 局域网",
              "其他设备 · 未授权"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "deck",
        "title": "控制面板",
        "subtitle": "高频动作，触手可及",
        "description": "可自定义按钮网格、状态回执、失败重试。",
        "blocks": [
          {
            "kind": "tabs",
            "title": "面板组",
            "items": [
              "默认",
              "开发",
              "媒体"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "deck",
            "title": "默认面板",
            "items": [
              "构建",
              "清理",
              "IDE",
              "截图",
              "锁定",
              "音量+",
              "上一首",
              "播放",
              "下一首"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "执行状态",
            "items": [
              "执行中",
              "已完成",
              "失败",
              "待确认"
            ],
            "values": [
              "0",
              "4",
              "0",
              "1"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "操作约束",
            "items": [
              "危险命令必须二次确认",
              "所有执行结果带回执",
              "脱机时禁用远程按钮"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "designer",
        "title": "面板布局编辑",
        "subtitle": "每一格都按你的习惯排列",
        "description": "网格密度、按键文案、图标和拖拽排序。",
        "blocks": [
          {
            "kind": "deck",
            "title": "编辑面板",
            "items": [
              "构建",
              "清理",
              "IDE",
              "截图",
              "音量",
              "播放"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "tabs",
            "title": "网格布局",
            "items": [
              "2×2",
              "3×2",
              "3×3",
              "4×3"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "按钮属性",
            "items": [
              "按钮名称",
              "按钮图标",
              "按下反馈"
            ],
            "values": [
              "构建",
              "⚡",
              "触感+高亮"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "checklist",
            "title": "编辑规则",
            "items": [
              "拖拽排序后保存",
              "取消放弃未保存更改",
              "重复命令需提示"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "macros",
        "title": "宏编辑器",
        "subtitle": "把重复步骤编成一次动作",
        "description": "逐步骤设置执行、延时、条件与失败处理。",
        "blocks": [
          {
            "kind": "form",
            "title": "宏属性",
            "items": [
              "宏名称",
              "执行模式",
              "失败处理"
            ],
            "values": [
              "构建并启动",
              "串行",
              "立即停止"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "checklist",
            "title": "宏步骤",
            "items": [
              "运行构建命令",
              "等待 3 秒",
              "启动指定应用",
              "通知执行结果"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "安全边界",
            "items": [
              "不可绕过 UAC",
              "不可绕过锁屏",
              "不执行未授权命令"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "grid",
            "title": "步骤操作",
            "items": [
              "新增",
              "删除",
              "上移",
              "下移"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "actions",
        "title": "安全动作库",
        "subtitle": "可控的操作，才值得一键执行",
        "description": "预置常用动作与受限高风险动作分组。",
        "blocks": [
          {
            "kind": "tabs",
            "title": "动作类别",
            "items": [
              "应用",
              "媒体",
              "系统"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "grid",
            "title": "动作模板",
            "items": [
              "启动应用",
              "媒体播放",
              "音量调节",
              "窗口切换",
              "屏幕截图",
              "通知"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "权限需求",
            "items": [
              "普通执行：单击确认",
              "文件修改：明确路径与范围",
              "系统级动作：额外确认"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "checklist",
            "title": "安全规则",
            "items": [
              "禁止任意远程 shell 默认开放",
              "动作可查看参数",
              "运行日志记录敏感字段最小化"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "devices",
        "title": "设备列表",
        "subtitle": "知道谁有权限连接你的电脑",
        "description": "展示在线设备、密钥状态、最近连接与撤销。",
        "blocks": [
          {
            "kind": "list",
            "title": "已配对设备",
            "items": [
              "工作电脑 · 在线",
              "家用电脑 · 离线",
              "测试机 · 等待授权"
            ],
            "values": [
              "12 ms",
              "上次昨天",
              "未连接"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "连接概览",
            "items": [
              "在线",
              "离线",
              "待审核",
              "过期授权"
            ],
            "values": [
              "1",
              "1",
              "1",
              "0"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "form",
            "title": "设备属性",
            "items": [
              "显示名称",
              "服务端地址"
            ],
            "values": [
              "工作电脑",
              "局域网"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "grid",
            "title": "设备操作",
            "items": [
              "重新连接",
              "断开",
              "查看详情",
              "撤销"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "activity",
        "title": "执行记录",
        "subtitle": "每一个动作都有明确结果",
        "description": "时间顺序、状态过滤、执行耗时与错误回执。",
        "blocks": [
          {
            "kind": "tabs",
            "title": "筛选",
            "items": [
              "全部",
              "成功",
              "失败"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "timeline",
            "title": "最近运行",
            "items": [
              "09:12 Build",
              "09:10 Screenshot",
              "08:52 Open IDE",
              "08:45 Volume"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "执行详情",
            "items": [
              "构建项目 · 成功 · 3.2 秒",
              "截图 · 成功 · 0.7 秒",
              "打开 IDE · 成功 · 1.4 秒",
              "清理缓存 · 待确认"
            ],
            "values": [
              "有回执",
              "有回执",
              "有回执",
              "未执行"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "metrics",
            "title": "今日汇总",
            "items": [
              "总操作",
              "成功",
              "失败",
              "取消"
            ],
            "values": [
              "14",
              "12",
              "1",
              "1"
            ],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "diagnostics",
        "title": "连接诊断",
        "subtitle": "连接的稳定性应该可以验证",
        "description": "网络往返、Agent 版本、端口和功能状态报告。",
        "blocks": [
          {
            "kind": "metrics",
            "title": "连接质量",
            "items": [
              "往返延迟",
              "上传速率",
              "下载速率",
              "连接状态"
            ],
            "values": [
              "12 ms",
              "3.2 KB/s",
              "5.8 KB/s",
              "演示在线"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "checklist",
            "title": "诊断项目",
            "items": [
              "Agent 证书验证",
              "应用握手协议",
              "指令队列回执",
              "失联恢复策略"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "progress",
            "title": "诊断进度",
            "items": [
              "网络连通",
              "认证",
              "Agent 响应"
            ],
            "values": [
              "68"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "故障处理",
            "items": [
              "网络不通：检查同网段",
              "认证失效：重新配对",
              "Agent 不在线：检查电脑程序"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      },
      {
        "id": "settings",
        "title": "安全与设置",
        "subtitle": "控制越方便，边界越清楚",
        "description": "连接加密、权限、面板、通知和备份。",
        "blocks": [
          {
            "kind": "settings",
            "title": "安全设置",
            "items": [
              "连接权限",
              "执行确认",
              "本机生物认证",
              "自动断线"
            ],
            "values": [
              "仅已配对",
              "危险操作需确认",
              "可选",
              "开启"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "settings",
            "title": "界面偏好",
            "items": [
              "布局",
              "主题",
              "通知",
              "备份"
            ],
            "values": [
              "3×3",
              "深色",
              "开启",
              "仅手动"
            ],
            "subtitle": "",
            "action": ""
          },
          {
            "kind": "list",
            "title": "隐私声明",
            "items": [
              "配对密钥仅本机保存",
              "日志不可记录凭据",
              "不会绕过 UAC 和锁屏"
            ],
            "values": [],
            "subtitle": "",
            "action": ""
          }
        ],
        "stateNotes": [
          "Normal：展示本页完整任务链",
          "Empty：显示原因和唯一明确的下一步",
          "Loading：显示真实可取消的任务状态",
          "Error：可恢复操作与明确错误说明"
        ]
      }
    ]
  }
];
