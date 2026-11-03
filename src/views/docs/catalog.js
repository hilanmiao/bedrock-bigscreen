const item = (id, no, title, path, sub, tags) => ({ id, no, title, path: '/components/' + path, sub, tags })

export const CATEGORIES = [
  {
    id: 'screens', name: '综合大屏', en: 'SCREENS',
    items: [
      { id: 'energy-screen', no: 'S1', title: '能源管理综合大屏', path: '/screens/energy', sub: '供热能源综合态势。', tags: ['screen', 'energy', 'screen-adapter'] },
      { id: 'general-screen', no: 'S2', title: '通用综合大屏', path: '/screens/general', sub: '园区运营综合态势。', tags: ['screen', 'general', 'screen-adapter'] }
    ]
  },
  {
    id: 'layout', name: '布局容器', en: 'LAYOUT',
    items: [
      item('divider', '01', '分割线', 'divider', '水平 / 垂直、渐变 / 实线 / 虚线。', ['css-only', 'divider', 'layout']),
      item('section-title', '02', '区块标题', 'section-title', 'bar / line / plain × inline / stack × 三档尺寸。', ['heading', 'css-only', 'layout']),
      item('background', '03', '背景层', 'background', '默认 CSS 网格与 4 张本地图片预设。', ['background', 'css-only', 'local-assets']),
      item('panel', '04', '面板容器', 'panel', 'line / bracket / cut × 密度 × 状态。', ['panel', 'css-only', 'layout']),
      item('header', '05', '页面头部', 'header', '品牌 / 导航 / 状态三槽位，三种布局与尺寸。', ['header', 'css-only', 'layout']),
      item('screen', '06', '画布骨架', 'screen', 'CSS 16:9 / 21:9 画布与安全区。', ['canvas', 'css-only', 'layout'])
    ]
  },
  {
    id: 'data', name: '数据展示', en: 'DATA',
    items: [
      item('metric', '07', '指标条', 'metric', 'inline / stack / spark × 尺寸 × 状态。', ['metric', 'css-only', 'density']),
      item('kpi', '08', '指标卡', 'kpi', 'basic / icon / ring × 尺寸 × 状态。', ['kpi', 'css-only', 'state']),
      item('progress', '09', '进度列表', 'progress', 'solid / segmented / thin × 密度 × 行状态。', ['progress', 'css-only', 'density']),
      item('bullet', '10', '目标进度', 'bullet', '实际值与目标线对比。', ['bullet', 'css-only', 'target']),
      item('ring', '11', '环形进度', 'ring', 'solid / thin × 尺寸 × 状态。', ['ring', 'css-only', 'state']),
      item('flip', '12', '数字翻牌器', 'flip', 'cell / outline / plain × 尺寸。', ['flip', 'css-only', 'number']),
      item('rank', '13', '排行榜', 'rank', 'list / compact / podium。', ['rank', 'css-only', 'layout']),
      item('timeline', '14', '时间线', 'timeline', 'vertical / horizontal × 密度。', ['timeline', 'css-only', 'layout']),
      item('matrix', '15', '状态矩阵', 'matrix', '6 列 / 4 列 / list × 状态。', ['matrix', 'css-only', 'status']),
      item('device', '16', '设备卡片', 'device', 'card / compact × 在线 / 预警 / 离线。', ['device', 'css-only', 'status']),
      item('gauge', '17', '仪表盘', 'gauge', '独立 ECharts 仪表盘。', ['echarts', 'chart', 'gauge']),
      item('table', '18', '数据表格', 'table', 'EP Table：选择 / 斑马纹 / 紧凑 / 自动滚动。', ['el-table', 'selection', 'density', 'auto-scroll'])
    ]
  },
  {
    id: 'charts', name: '图表', en: 'CHARTS',
    items: [
      item('sparkline', '19', '迷你趋势', 'sparkline', '适合指标条与表格内嵌。', ['echarts', 'chart', 'sparkline']),
      item('line', '20', '折线图', 'line', '连续趋势。', ['echarts', 'chart', 'line']),
      item('area', '21', '面积图', 'area', '趋势与体积。', ['echarts', 'chart', 'area']),
      item('bar', '22', '柱状图', 'bar', '分类比较。', ['echarts', 'chart', 'bar']),
      item('stacked', '23', '堆叠柱状图', 'stacked', '总量与构成。', ['echarts', 'chart', 'stacked']),
      item('horizontal', '24', '横向柱状图', 'horizontal', '长分类名排行。', ['echarts', 'chart', 'horizontal']),
      item('combo', '25', '组合图', 'combo', '柱状 + 折线双指标。', ['echarts', 'chart', 'combo']),
      item('donut', '26', '环形图', 'donut', '占比与总量。', ['echarts', 'chart', 'donut']),
      item('rose', '27', '玫瑰图', 'rose', '分类贡献。', ['echarts', 'chart', 'rose']),
      item('radar', '28', '雷达图', 'radar', '多指标对比。', ['echarts', 'chart', 'radar']),
      item('scatter', '29', '散点图', 'scatter', '连续变量关系。', ['echarts', 'chart', 'scatter']),
      item('heatmap', '30', '热力图', 'heatmap', '二维密度。', ['echarts', 'chart', 'heatmap']),
      item('treemap', '31', '矩形树图', 'treemap', '分类占比。', ['echarts', 'chart', 'treemap']),
      item('waterfall', '32', '瀑布图', 'waterfall', '变化归因。', ['echarts', 'chart', 'waterfall']),
      item('sankey', '33', '桑基流向', 'sankey', '流量结构。', ['echarts', 'chart', 'sankey']),
      item('funnel', '34', '漏斗图', 'funnel', '逐级转化。', ['echarts', 'chart', 'funnel'])
    ]
  },
  {
    id: 'business', name: '业务组件', en: 'BUSINESS',
    items: [item('video-tile', '35', '视频监控卡', 'video-tile', 'CSS 模拟视频画面与 HUD。', ['video', 'css-only', 'domain'])]
  },
  {
    id: 'interaction', name: '交互反馈', en: 'INTERACTION',
    items: [
      item('button', '36', '按钮', 'button', 'el-button 语义 / 形状 / 尺寸 / 状态。', ['el-button', 'shape', 'state']),
      item('states', '37', '空 / 错 / 载入', 'states', '六种状态与骨架屏。', ['state', 'css-only', 'skeleton']),
      item('dialog', '38', 'Dialog', 'dialog', 'EP Dialog 弹窗。', ['el-dialog', 'overlay']),
      item('tooltip', '39', '悬浮提示', 'tooltip', 'EP Tooltip 四向与语义。', ['el-tooltip', 'placement']),
      item('toast', '40', '消息提示', 'toast', 'EP Message 四种语义。', ['el-message', 'feedback']),
      item('switch', '41', '开关', 'switch', 'EP Switch 尺寸与状态。', ['el-switch', 'form']),
      item('slider', '42', '滑杆', 'slider', 'EP Slider 形态与状态。', ['el-slider', 'form']),
      item('tabs', '43', '页签', 'tabs', 'EP Tabs line / card / pill。', ['el-tabs', 'nav']),
      item('select', '44', '下拉选择', 'select', 'EP Select 单选 / 多选。', ['el-select', 'form']),
      item('drawer', '45', '抽屉面板', 'drawer', 'EP Drawer 三向与尺寸。', ['el-drawer', 'placement']),
      item('segmented', '46', '分段控制', 'segmented', 'EP Radio 分段样式。', ['el-radio-group', 'form'])
    ]
  },
  {
    id: 'alerts', name: '告警播报', en: 'ALERTS',
    items: [
      item('alert', '47', '告警流', 'alert', 'list / compact / card。', ['alert', 'css-only', 'state']),
      item('marquee', '48', '跑马灯', 'marquee', 'line / tag / board 循环播报。', ['marquee', 'css-only']),
      item('bell', '49', '通知入口', 'bell', 'details/summary 通知面板。', ['notification', 'css-only']),
      item('event', '50', '事件卡片', 'event', '等级 × card / compact × handled。', ['event', 'css-only', 'state']),
      item('banner', '51', '应急横幅', 'banner', '等级 × inline / stacked。', ['banner', 'css-only', 'level'])
    ]
  },
  {
    id: 'assets', name: '资产', en: 'ASSETS',
    items: [
      { id: 'icons', no: '52', title: '图标', path: '/icons', sub: '120 个本地 SVG 图标。', tags: ['svg', 'icons', 'assets'] },
      { id: 'icons-2', no: '53', title: '图标2', path: '/icons-2', sub: '200 个能源域 SVG 图标。', tags: ['svg', 'icons', 'energy'] }
    ]
  },
  {
    id: 'fx', name: '视觉增强', en: 'FX',
    items: [
      item('radar-scan', '54', '雷达扫描', 'radar-scan', '扫描波束 / 刻度环 / 目标点。', ['fx', 'css-only', 'radar']),
      item('flow-border', '55', '流光边框', 'flow-border', '沿边框循环流动的高光。', ['fx', 'css-only', 'border']),
      item('turn-card', '56', '双面翻转卡', 'turn-card', 'X / Y 轴翻转，正面概览、背面明细。', ['fx', 'css-only', 'flip']),
      item('spectrum', '57', '频谱柱', 'spectrum', '持续起伏的柱阵，适合信号与负荷强度。', ['fx', 'css-only', 'spectrum']),
      item('orbit', '58', '轨道节点', 'orbit', '三圈差速轨道 + 语义色卫星节点。', ['fx', 'css-only', 'orbit']),
      item('pulse-wave', '59', '脉冲波', 'pulse-wave', '沿折线行进的高亮光段。', ['fx', 'css-only', 'pulse']),
      item('data-rain', '60', '数据雨', 'data-rain', '按列下落的遥测数据流。', ['fx', 'css-only', 'rain'])
    ]
  }
]

export const COMPONENTS = CATEGORIES.flatMap(category => category.items)
