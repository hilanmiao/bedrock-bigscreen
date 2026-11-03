<template>
  <ScreenAdapter :design-width="1920" :design-height="1080">
    <div class="general-screen">
      <header class="bd-header bd-header--lg">
        <div class="bd-header__brand">
          <svg class="bd-header__mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M24 5 42 15 24 25 6 15z" stroke="currentColor" stroke-width="1.8" />
            <path d="M6 23 24 33 42 23" stroke="currentColor" stroke-width="1.8" opacity=".65" />
            <path d="M6 31 24 41 42 31" stroke="currentColor" stroke-width="1.8" opacity=".35" />
          </svg>
          <div>
            <div class="bd-header__name">综合运营监控中心</div>
            <div class="bd-header__sub">BEDROCK COMMAND · 园区运营</div>
          </div>
        </div>
        <nav class="bd-header__nav">
          <span class="bd-header__link bd-header__link--active">园区态势</span>
          <span class="bd-header__link">事件中心</span>
          <span class="bd-header__link">任务看板</span>
        </nav>
        <div class="bd-header__meta">
          <span class="bd-header__status"><i class="bd-header__dot"></i>模拟数据</span>
          <span>{{ clock }}</span>
          <RouterLink class="screen-back" to="/">返回组件库</RouterLink>
        </div>
      </header>

      <section class="general-kpis">
        <article class="bd-kpi bd-kpi--lg">
          <div class="bd-kpi__label">今日入园</div>
          <div class="bd-kpi__value">{{ metrics.visitors.toLocaleString('zh-CN') }}<span class="bd-kpi__unit">人</span></div>
          <div class="bd-kpi__delta" data-tone="good">+8.2% 同比</div>
        </article>
        <article class="bd-kpi bd-kpi--lg">
          <div class="bd-kpi__label">车流</div>
          <div class="bd-kpi__value">{{ metrics.traffic.toLocaleString('zh-CN') }}<span class="bd-kpi__unit">辆</span></div>
          <div class="bd-kpi__delta" data-tone="good">-2.1% 环比</div>
        </article>
        <article class="bd-kpi bd-kpi--lg">
          <div class="bd-kpi__label">综合能耗</div>
          <div class="bd-kpi__value">{{ metrics.energy.toFixed(1) }}<span class="bd-kpi__unit">MWh</span></div>
          <div class="bd-kpi__delta" data-tone="good">-4.3% 同比</div>
        </article>
        <article class="bd-kpi bd-kpi--lg bd-kpi--ring" :style="{ '--p': metrics.onlineRate }">
          <div>
            <div class="bd-kpi__label">设备在线率</div>
            <div class="bd-kpi__value">{{ metrics.onlineRate.toFixed(1) }}<span class="bd-kpi__unit">%</span></div>
            <div class="bd-kpi__delta" data-tone="good">+0.4% 环比</div>
          </div>
          <div class="bd-kpi__ring"><b>{{ metrics.onlineRate.toFixed(1) }}</b></div>
        </article>
        <article class="bd-kpi bd-kpi--lg">
          <div class="bd-kpi__label">待办事件</div>
          <div class="bd-kpi__value">{{ metrics.events }}<span class="bd-kpi__unit">条</span></div>
          <div class="bd-kpi__delta">较昨日 -3</div>
        </article>
        <article class="bd-kpi bd-kpi--lg bd-kpi--error">
          <div class="bd-kpi__label">安防告警</div>
          <div class="bd-kpi__value">{{ metrics.alerts }}<span class="bd-kpi__unit">条</span></div>
          <div class="bd-kpi__delta" data-tone="bad">较昨日 -2</div>
        </article>
      </section>

      <main class="general-grid">
        <section class="general-col general-col--left">
          <section class="bd-panel">
            <div class="bd-panel__head"><span class="bd-panel__title">客流与车流</span><span class="bd-panel__meta">今日 · 人次 / 辆</span></div>
            <div class="bd-panel__body"><div ref="trafficEl" class="screen-chart"></div></div>
          </section>
          <section class="bd-panel">
            <div class="bd-panel__head"><span class="bd-panel__title">区域热度</span><span class="bd-panel__meta">今日入园</span></div>
            <div class="bd-panel__body">
              <div class="bd-progress bd-progress--compact">
                <div v-for="zone in zones" :key="zone.name" class="bd-progress__row">
                  <span class="bd-progress__label">{{ zone.name }}</span>
                  <span class="bd-progress__track"><i class="bd-progress__fill" :style="{ '--p': zone.percent + '%' }"></i></span>
                  <span class="bd-progress__value">{{ zone.percent }}%</span>
                </div>
              </div>
            </div>
          </section>
          <section class="bd-panel">
            <div class="bd-panel__head"><span class="bd-panel__title">设备在线</span><span class="bd-panel__meta">523 台设备</span></div>
            <div class="bd-panel__body screen-health">
              <div class="bd-ring bd-ring--lg" :style="{ '--p': metrics.onlineRate }">
                <div class="bd-ring__content"><div class="bd-ring__value">{{ metrics.onlineRate.toFixed(1) }}%</div><div class="bd-ring__label">在线率</div></div>
              </div>
              <div class="bd-progress bd-progress--compact screen-health__bars">
                <div class="bd-progress__row"><span class="bd-progress__label">在线</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 98.6%"></i></span><span class="bd-progress__value">516</span></div>
                <div class="bd-progress__row bd-progress__row--warn"><span class="bd-progress__label">维护中</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 3%"></i></span><span class="bd-progress__value">3</span></div>
              </div>
            </div>
          </section>
        </section>

        <section class="general-col general-col--center">
          <section class="bd-panel">
            <div class="bd-panel__head"><span class="bd-panel__title">视频巡查</span><span class="bd-panel__meta">3 / 12 路</span></div>
            <div class="bd-panel__body video-wall">
              <article class="bd-video">
                <div class="bd-video__scene"><div class="bd-video__top"><span class="bd-video__live">LIVE</span><span>CAM-01</span><span class="bd-video__id">1080P</span></div><div class="bd-video__hud"><span>人流 128</span><span>车流 42</span></div></div>
                <div class="bd-video__foot"><span class="bd-video__name">东门入口</span><span class="bd-video__status">在线</span></div>
              </article>
              <article class="bd-video">
                <div class="bd-video__scene"><div class="bd-video__top"><span class="bd-video__live">LIVE</span><span>CAM-05</span><span class="bd-video__id">1080P</span></div><div class="bd-video__hud"><span>人流 236</span><span>密度 中</span></div></div>
                <div class="bd-video__foot"><span class="bd-video__name">中心广场</span><span class="bd-video__status">在线</span></div>
              </article>
              <article class="bd-video">
                <div class="bd-video__scene"><div class="bd-video__top"><span class="bd-video__live">LIVE</span><span>CAM-08</span><span class="bd-video__id">1080P</span></div><div class="bd-video__hud"><span>车流 64</span><span>余位 38</span></div></div>
                <div class="bd-video__foot"><span class="bd-video__name">地下车库</span><span class="bd-video__status">在线</span></div>
              </article>
              <article class="bd-video bd-video--offline">
                <div class="bd-video__scene"><div class="bd-video__top"><span class="bd-video__live">OFFLINE</span><span>CAM-12</span><span class="bd-video__id">无信号</span></div><div class="bd-video__hud"><span>—</span><span>—</span></div></div>
                <div class="bd-video__foot"><span class="bd-video__name">北门通道</span><span class="bd-video__status">离线</span></div>
              </article>
            </div>
          </section>
          <section class="bd-panel">
            <div class="bd-panel__head"><span class="bd-panel__title">分区状态</span><span class="bd-panel__meta">8 个区域</span></div>
            <div class="bd-panel__body">
              <div class="bd-matrix bd-matrix--4">
                <div class="bd-matrix__cell"><span class="bd-matrix__label">东区</span><span class="bd-matrix__state">在线 3</span></div>
                <div class="bd-matrix__cell"><span class="bd-matrix__label">西区</span><span class="bd-matrix__state">在线 2</span></div>
                <div class="bd-matrix__cell bd-matrix__cell--warn"><span class="bd-matrix__label">北区</span><span class="bd-matrix__state">预警 1</span></div>
                <div class="bd-matrix__cell"><span class="bd-matrix__label">南区</span><span class="bd-matrix__state">在线 3</span></div>
                <div class="bd-matrix__cell"><span class="bd-matrix__label">中心广场</span><span class="bd-matrix__state">在线 2</span></div>
                <div class="bd-matrix__cell bd-matrix__cell--error"><span class="bd-matrix__label">地下车库</span><span class="bd-matrix__state">离线 1</span></div>
                <div class="bd-matrix__cell"><span class="bd-matrix__label">物流区</span><span class="bd-matrix__state">在线 1</span></div>
                <div class="bd-matrix__cell"><span class="bd-matrix__label">展厅</span><span class="bd-matrix__state">在线 1</span></div>
              </div>
            </div>
          </section>
        </section>

        <section class="general-col general-col--right">
          <section class="bd-panel">
            <div class="bd-panel__head"><span class="bd-panel__title">实时事件</span><span class="bd-panel__meta">12 条待处理</span></div>
            <div class="bd-panel__body">
              <div class="bd-alert bd-alert--compact">
                <div v-for="event in events" :key="event.text" class="bd-alert__row" :class="'bd-alert__row--' + event.level">
                  <span class="bd-alert__time">{{ event.time }}</span>
                  <span class="bd-alert__tag">{{ event.tag }}</span>
                  <span class="bd-alert__text">{{ event.text }}</span>
                </div>
              </div>
            </div>
          </section>
          <section class="bd-panel">
            <div class="bd-panel__head"><span class="bd-panel__title">任务进度</span><span class="bd-panel__meta">今日</span></div>
            <div class="bd-panel__body">
              <div class="bd-progress bd-progress--compact">
                <div v-for="task in tasks" :key="task.name" class="bd-progress__row">
                  <span class="bd-progress__label">{{ task.name }}</span>
                  <span class="bd-progress__track"><i class="bd-progress__fill" :style="{ '--p': task.value + '%' }"></i></span>
                  <span class="bd-progress__value">{{ task.value }}%</span>
                </div>
              </div>
            </div>
          </section>
          <section class="bd-panel">
            <div class="bd-panel__head"><span class="bd-panel__title">服务指数</span><span class="bd-panel__meta">{{ score.toFixed(1) }}</span></div>
            <div class="bd-panel__body screen-service">
              <div class="bd-ring bd-ring--lg" :style="{ '--p': score }">
                <div class="bd-ring__content"><div class="bd-ring__value">{{ score.toFixed(1) }}</div><div class="bd-ring__label">综合满意度</div></div>
              </div>
              <div class="bd-bullet bd-bullet--compact screen-service__bars">
                <div class="bd-bullet__row"><span class="bd-bullet__label">响应达标</span><span class="bd-bullet__track"><i class="bd-bullet__fill" style="--v: 94%"></i><i class="bd-bullet__target" style="--t: 90%"></i></span><span class="bd-bullet__value">94 / 90</span></div>
                <div class="bd-bullet__row"><span class="bd-bullet__label">满意度</span><span class="bd-bullet__track"><i class="bd-bullet__fill" style="--v: 92%"></i><i class="bd-bullet__target" style="--t: 90%"></i></span><span class="bd-bullet__value">92 / 90</span></div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <div class="bd-marquee bd-marquee--board screen-marquee">
        <span class="bd-marquee__lead">园区播报</span>
        <div class="bd-marquee__viewport">
          <div class="bd-marquee__track">
            <span v-for="item in ticker" :key="'a-' + item" class="bd-marquee__item"><i class="bd-marquee__dot"></i>{{ item }}</span>
            <span v-for="item in ticker" :key="'b-' + item" class="bd-marquee__item"><i class="bd-marquee__dot"></i>{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </ScreenAdapter>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import * as echarts from 'echarts'
import ScreenAdapter from '@/components/ScreenAdapter/index.vue'
import { formatClock } from '@/utils/datetime'

const now = ref(new Date())
const clock = computed(() => formatClock(now.value))
const score = ref(92.6)
const metrics = reactive({ visitors: 12846, traffic: 3268, energy: 28.6, onlineRate: 98.6, events: 12, alerts: 3 })
const zones = [
  { name: '东区', percent: 24.8 },
  { name: '西区', percent: 21.4 },
  { name: '南区', percent: 18.2 },
  { name: '北区', percent: 16.6 },
  { name: '中心区', percent: 12.8 },
  { name: '物流区', percent: 6.2 }
]
const events = [
  { time: '09:42', level: 'warn', tag: '事件', text: '东门入口人流密度达到黄色阈值' },
  { time: '09:36', level: 'error', tag: '设备', text: '地下车库 CAM-08 摄像头离线' },
  { time: '09:24', level: 'warn', tag: '车辆', text: '地下车库入口车辆滞留 8 分钟' },
  { time: '09:12', level: 'info', tag: '任务', text: '北区 3F 保洁任务已超时' },
  { time: '08:58', level: 'info', tag: '访客', text: '南门访客预约信息待核验' }
]
const tasks = [
  { name: '巡检计划', value: 92 },
  { name: '保洁任务', value: 86 },
  { name: '维修工单', value: 64 },
  { name: '访客审批', value: 100 },
  { name: '能耗巡检', value: 78 }
]
const ticker = [
  '今日累计处理事件 186 条',
  '平均响应 3.2 分钟',
  '园区设备运行平稳',
  '东门客流高峰已回落'
]
const trafficData = ref([680, 1120, 1580, 1920, 2050, 1880, 1760, 1920, 1680, 1460, 1100, 760])
const vehicleData = ref([280, 420, 560, 620, 580, 520, 480, 560, 610, 540, 430, 320])
const trafficLabels = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19']

const cssToken = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim()
const theme = {
  primary: cssToken('--bedrock-primary'),
  accent: cssToken('--bedrock-accent'),
  info: cssToken('--bedrock-info'),
  success: cssToken('--bedrock-success'),
  danger: cssToken('--bedrock-danger'),
  text: cssToken('--bedrock-text-2'),
  textStrong: cssToken('--bedrock-text-1'),
  muted: cssToken('--bedrock-text-3'),
  grid: cssToken('--bedrock-line-1'),
  line: cssToken('--bedrock-line-2'),
  panel: cssToken('--bedrock-bg-2'),
  bg: cssToken('--bedrock-bg-0'),
  font: cssToken('--bedrock-font-ui'),
  fs: {
    caption: parseInt(cssToken('--bedrock-fs-caption')),
    label: parseInt(cssToken('--bedrock-fs-label')),
    body: parseInt(cssToken('--bedrock-fs-body'))
  }
}
const alpha = (hex, opacity) => {
  const value = parseInt(hex.slice(1), 16)
  return `rgba(${value >> 16 & 255}, ${value >> 8 & 255}, ${value & 255}, ${opacity})`
}

const trafficEl = ref(null)
let trafficChart = null
let trafficObserver = null
let clockTimer = null
let liveTimer = null

function initTrafficChart() {
  if (!trafficEl.value) return
  trafficChart = echarts.init(trafficEl.value)
  trafficChart.setOption({
    animationDuration: 650,
    textStyle: { color: theme.text, fontFamily: theme.font },
    tooltip: {
      trigger: 'axis',
      backgroundColor: alpha(theme.panel, .96),
      borderColor: theme.line,
      textStyle: { color: theme.text, fontSize: theme.fs.label },
      axisPointer: { lineStyle: { color: alpha(theme.primary, .4), type: 'dashed' } }
    },
    legend: { top: 0, right: 8, itemWidth: 10, itemHeight: 2, textStyle: { color: theme.muted, fontSize: theme.fs.label } },
    grid: { left: 46, right: 44, top: 32, bottom: 30 },
    xAxis: {
      type: 'category', boundaryGap: false, data: trafficLabels,
      axisLine: { lineStyle: { color: theme.grid } },
      axisTick: { show: false },
      axisLabel: { color: theme.muted, fontSize: theme.fs.label, interval: 1 },
      axisPointer: { lineStyle: { color: alpha(theme.primary, .4), type: 'dashed' } }
    },
    yAxis: [
      { type: 'value', name: '人次', nameTextStyle: { color: theme.muted, fontSize: theme.fs.caption }, splitLine: { lineStyle: { color: theme.grid, type: 'dashed' } }, axisLabel: { color: theme.muted, fontSize: theme.fs.label } },
      { type: 'value', name: '辆', nameTextStyle: { color: theme.muted, fontSize: theme.fs.caption }, splitLine: { show: false }, axisLabel: { color: theme.muted, fontSize: theme.fs.label } }
    ],
    series: [
      {
        name: '客流', type: 'line', smooth: true, showSymbol: false,
        lineStyle: { width: 2, color: theme.primary, shadowColor: alpha(theme.primary, .35), shadowBlur: 8 },
        itemStyle: { color: theme.primary },
        areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: alpha(theme.primary, .2) }, { offset: 1, color: alpha(theme.primary, 0) }]) },
        data: trafficData.value
      },
      {
        name: '车流', type: 'line', yAxisIndex: 1, smooth: true, showSymbol: false,
        lineStyle: { width: 1.6, color: theme.info },
        itemStyle: { color: theme.info },
        areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: alpha(theme.info, .12) }, { offset: 1, color: alpha(theme.info, 0) }]) },
        data: vehicleData.value
      }
    ]
  })
  trafficObserver = new ResizeObserver(() => trafficChart && trafficChart.resize())
  trafficObserver.observe(trafficEl.value)
}

function updateLive() {
  metrics.visitors += Math.floor(Math.random() * 10 + 3)
  metrics.traffic = Math.max(3000, Math.round(metrics.traffic + (Math.random() * 40 - 20)))
  metrics.energy = +(metrics.energy + (Math.random() * .2 - .1)).toFixed(1)
  metrics.onlineRate = Math.min(99.1, +(metrics.onlineRate + (Math.random() * .08 - .04)).toFixed(1))
  score.value = Math.min(93.8, Math.max(91.8, +(score.value + (Math.random() * .3 - .15)).toFixed(1)))
  const last = trafficData.value.length - 1
  trafficData.value[last] = Math.max(500, Math.round(trafficData.value[last] + (Math.random() * 100 - 50)))
  vehicleData.value[last] = Math.max(200, Math.round(vehicleData.value[last] + (Math.random() * 60 - 30)))
  trafficChart?.setOption({ series: [{ data: trafficData.value }, { data: vehicleData.value }] })
}

onMounted(() => {
  clockTimer = setInterval(() => { now.value = new Date() }, 1000)
  liveTimer = setInterval(updateLive, 5000)
  nextTick(initTrafficChart)
})

onBeforeUnmount(() => {
  clearInterval(clockTimer)
  clearInterval(liveTimer)
  trafficObserver?.disconnect()
  trafficChart?.dispose()
})
</script>

<style scoped lang="scss">
.general-screen {
  display: grid;
  grid-template-rows: 76px 112px minmax(0, 1fr) 38px;
  gap: 12px;
  width: 1920px;
  height: 1080px;
  padding: 16px 20px;
  overflow: hidden;
  color: var(--bedrock-text-2);
  font-family: var(--bedrock-font-ui);
  background:
    radial-gradient(ellipse 55% 45% at 50% 0%, rgba(var(--bedrock-primary-rgb), .07), transparent 68%),
    radial-gradient(ellipse 40% 38% at 95% 80%, rgba(90, 168, 255, .06), transparent 70%),
    var(--bedrock-bg-0);
}
.general-kpis { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 12px; min-height: 0; }
.general-grid { display: grid; grid-template-columns: 420px minmax(0, 1fr) 420px; gap: 12px; min-height: 0; }
.general-col { display: grid; gap: 12px; min-height: 0; }
.general-col--left { grid-template-rows: 1.1fr .95fr .9fr; }
.general-col--center { grid-template-rows: 1.3fr .7fr; }
.general-col--right { grid-template-rows: 1.05fr .9fr .95fr; }
.screen-chart { width: 100%; height: 100%; min-height: 0; }
.video-wall { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 8px; }
.screen-health { display: flex; align-items: center; gap: 18px; }
.screen-health__bars { flex: 1; min-width: 0; }
.screen-service { display: flex; align-items: center; gap: 18px; }
.screen-service__bars { flex: 1; min-width: 0; }
.screen-back { color: var(--bedrock-text-3); }
.screen-back:hover { color: var(--bedrock-primary); }
.screen-marquee { min-width: 0; }
</style>
