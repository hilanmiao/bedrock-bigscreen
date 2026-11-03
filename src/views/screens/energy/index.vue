<template>
  <ScreenAdapter :design-width="1920" :design-height="1080">
    <div class="energy-screen">
      <header class="bd-header bd-header--lg">
        <div class="bd-header__brand">
          <svg class="bd-header__mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M24 5 42 15 24 25 6 15z" stroke="currentColor" stroke-width="1.8" />
            <path d="M6 23 24 33 42 23" stroke="currentColor" stroke-width="1.8" opacity=".65" />
            <path d="M6 31 24 41 42 31" stroke="currentColor" stroke-width="1.8" opacity=".35" />
          </svg>
          <div>
            <div class="bd-header__name">能源管理综合大屏</div>
            <div class="bd-header__sub">BEDROCK ENERGY · 区域供热</div>
          </div>
        </div>
        <nav class="bd-header__nav">
          <span class="bd-header__link bd-header__link--active">热流总览</span>
          <span class="bd-header__link">热网监控</span>
          <span class="bd-header__link">告警中心</span>
        </nav>
        <div class="bd-header__meta">
          <span class="bd-header__status"><i class="bd-header__dot"></i>{{ dataModeLabel }}</span>
          <span>{{ clock }}</span>
          <RouterLink class="screen-back" to="/">返回组件库</RouterLink>
        </div>
      </header>

      <main class="energy-main">
        <section class="energy-col energy-col--left">
          <section class="bd-panel">
            <div class="bd-panel__head">
              <span class="bd-panel__title">热源机组</span>
              <span class="bd-panel__meta">全网 {{ metrics.load }} MW · 能效 {{ metrics.efficiency.toFixed(1) }}%</span>
            </div>
            <div class="bd-panel__body energy-source">
              <article class="bd-kpi bd-kpi--sm">
                <div class="bd-kpi__label">城北热源 · 3# 锅炉</div>
                <div class="bd-kpi__value">786<span class="bd-kpi__unit">MW</span></div>
                <div class="bd-kpi__delta" data-tone="good">供水 86.4℃ · 稳定</div>
              </article>
              <article class="bd-kpi bd-kpi--sm">
                <div class="bd-kpi__label">滨江热源 · 2# 机组</div>
                <div class="bd-kpi__value">500<span class="bd-kpi__unit">MW</span></div>
                <div class="bd-kpi__delta" data-tone="good">回水 46.2℃ · 稳定</div>
              </article>
              <div class="bd-bullet bd-bullet--compact energy-source__params">
                <div v-for="param in params" :key="param.label" class="bd-bullet__row">
                  <span class="bd-bullet__label">{{ param.label }}</span>
                  <span class="bd-bullet__track"><i class="bd-bullet__fill" :style="{ '--v': param.fill + '%' }"></i><i class="bd-bullet__target" :style="{ '--t': param.target + '%' }"></i></span>
                  <span class="bd-bullet__value">{{ param.value }}</span>
                </div>
              </div>
            </div>
          </section>

          <section class="bd-panel">
            <div class="bd-panel__head"><span class="bd-panel__title">能源结构</span><span class="bd-panel__meta">本月</span></div>
            <div class="bd-panel__body"><div ref="mixEl" class="screen-chart"></div></div>
          </section>
        </section>

        <div class="bd-flow energy-flow">
          <div class="bd-flow__body energy-flow__body">
            <section class="bd-panel energy-flow__panel">
              <div class="bd-panel__head">
                <span class="bd-panel__title">热负荷罗盘</span>
                <span class="bd-panel__meta">24H · 实绩至 {{ currentHourText }}</span>
              </div>
              <div class="bd-panel__body compass-layout">
                <div class="compass-table-wrap">
                  <el-table :data="hourRows" class="bd-table compass-table" size="small" stripe :row-class-name="tableRowClass" @row-click="onHourRowClick">
                    <el-table-column prop="time" label="时段" width="64" />
                    <el-table-column label="负荷 MW" width="86">
                      <template #default="{ row }"><span class="bd-table__num">{{ row.load == null ? '—' : formatNumber(row.load) }}</span></template>
                    </el-table-column>
                    <el-table-column label="较均值" width="72">
                      <template #default="{ row }">
                        <span v-if="row.delta != null" class="compass-table__delta" :class="{ 'compass-table__delta--up': row.delta >= 0, 'compass-table__delta--down': row.delta < 0 }">{{ signed(row.delta) }}</span>
                        <span v-else class="compass-table__muted">—</span>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>

                <div class="compass-main">
                  <div ref="compassEl" class="screen-compass"></div>
                  <div class="compass-center">
                    <strong>{{ formatNumber(metrics.load) }}</strong>
                    <span>实时热负荷 MW</span>
                    <em>当前 {{ currentHourText }}</em>
                  </div>
                </div>

                <aside class="compass-side">
                  <div class="compass-side__title">今日实绩</div>
                  <div class="bd-metric bd-metric--inline"><span class="bd-metric__label">当前负荷</span><div class="bd-metric__row"><span class="bd-metric__value">{{ formatNumber(metrics.load) }}</span><span class="bd-metric__unit">MW</span></div></div>
                  <div class="bd-metric bd-metric--inline"><span class="bd-metric__label">今日均值</span><div class="bd-metric__row"><span class="bd-metric__value">{{ formatNumber(actualStats.avg) }}</span><span class="bd-metric__unit">MW</span></div></div>
                  <div class="bd-metric bd-metric--inline"><span class="bd-metric__label">今日峰值 · {{ hourLabels[actualStats.maxHour] }}:00</span><div class="bd-metric__row"><span class="bd-metric__value">{{ formatNumber(actualStats.max) }}</span><span class="bd-metric__unit">MW</span></div></div>
                  <div class="bd-metric bd-metric--inline"><span class="bd-metric__label">今日谷值 · {{ hourLabels[actualStats.minHour] }}:00</span><div class="bd-metric__row"><span class="bd-metric__value">{{ formatNumber(actualStats.min) }}</span><span class="bd-metric__unit">MW</span></div></div>
                  <div class="bd-metric bd-metric--inline"><span class="bd-metric__label">累计供热量</span><div class="bd-metric__row"><span class="bd-metric__value">{{ formatNumber(metrics.heat) }}</span><span class="bd-metric__unit">GJ</span></div></div>
                  <div class="compass-selected">
                    <div class="compass-selected__head">选中时段 · {{ selected.time }}</div>
                    <div class="compass-selected__value">{{ formatNumber(selected.load) }}<span>MW</span></div>
                    <div class="compass-selected__row" :class="selected.delta >= 0 ? 'compass-selected__row--up' : 'compass-selected__row--down'">较均值 {{ signed(selected.delta) }} MW</div>
                    <div v-if="selected.prevDelta != null" class="compass-selected__row" :class="selected.prevDelta >= 0 ? 'compass-selected__row--up' : 'compass-selected__row--down'">较前一小时 {{ signed(selected.prevDelta) }} MW</div>
                  </div>
                  <div class="compass-hint">点击柱形或左侧时段切换对比</div>
                </aside>
              </div>
            </section>
          </div>
        </div>

        <section class="energy-col energy-col--right">
          <section class="bd-panel">
            <div class="bd-panel__head"><span class="bd-panel__title">实时告警</span><span class="bd-panel__meta">{{ alerts.length }} 条待确认</span></div>
            <div class="bd-panel__body">
              <div class="bd-alert bd-alert--compact">
                <div v-for="alert in alerts" :key="alert.text" class="bd-alert__row" :class="'bd-alert__row--' + alert.level">
                  <span class="bd-alert__time">{{ alert.time }}</span>
                  <span class="bd-alert__tag">{{ alert.tag }}</span>
                  <span class="bd-alert__text">{{ alert.text }}</span>
                </div>
              </div>
            </div>
          </section>

          <section class="bd-panel">
            <div class="bd-panel__head"><span class="bd-panel__title">工单闭环</span><span class="bd-panel__meta">今日</span></div>
            <div class="bd-panel__body screen-order">
              <div class="bd-ring bd-ring--lg" :style="{ '--p': workOrders.rate }">
                <div class="bd-ring__content"><div class="bd-ring__value">{{ workOrders.rate }}%</div><div class="bd-ring__label">今日闭环</div></div>
              </div>
              <div class="bd-progress bd-progress--compact screen-order__bars">
                <div class="bd-progress__row"><span class="bd-progress__label">已闭环</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 92%"></i></span><span class="bd-progress__value">92%</span></div>
                <div class="bd-progress__row"><span class="bd-progress__label">按时处置</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 88%"></i></span><span class="bd-progress__value">88%</span></div>
              </div>
            </div>
          </section>

          <section class="bd-panel">
            <div class="bd-panel__head"><span class="bd-panel__title">关键设备</span><span class="bd-panel__meta">118 / 118 在线</span></div>
            <div class="bd-panel__body screen-device-list">
              <article v-for="device in devices" :key="device.name" class="bd-device bd-device--compact" :class="device.status === 'warn' ? 'bd-device--warn' : ''">
                <div class="bd-device__top">
                  <div class="bd-device__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" v-html="iconBody(device.icon)"></svg></div>
                  <div><div class="bd-device__name">{{ device.name }}</div><div class="bd-device__sub">{{ device.detail }}</div></div>
                  <span class="bd-device__status">{{ device.label }}</span>
                </div>
              </article>
            </div>
          </section>
        </section>
      </main>

      <div class="bd-marquee bd-marquee--board screen-marquee">
        <span class="bd-marquee__lead">实时播报</span>
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
import { ElTable, ElTableColumn } from 'element-plus'
import * as echarts from 'echarts'
import ScreenAdapter from '@/components/ScreenAdapter/index.vue'
import { ICONS } from '@/views/icons2/icons'
import { formatClock } from '@/utils/datetime'
import { fetchEnergySnapshot } from './api'

const iconBody = name => ICONS.find(item => item.name === name)?.body || ''
const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const pad = value => String(value).padStart(2, '0')
const formatNumber = value => Math.round(value).toLocaleString('zh-CN')
const signed = value => `${value >= 0 ? '+' : ''}${formatNumber(value)}`
const USE_REMOTE_API = false
const dataModeLabel = USE_REMOTE_API ? '实时数据' : '模拟数据'

const now = ref(new Date())
const clock = computed(() => formatClock(now.value))
const hourLabels = Array.from({ length: 24 }, (_, index) => pad(index))
const initialHour = new Date().getHours()
const currentHour = ref(initialHour)
const currentHourText = computed(() => `${hourLabels[currentHour.value]}:00`)

const metrics = reactive({ heat: 86428, load: 1286, efficiency: 92.6, makeup: 1.24, online: 48 })
const loadData = ref([820, 790, 760, 748, 762, 805, 880, 960, 1040, 1105, 1160, 1205, 1238, 1262, 1245, 1208, 1162, 1128, 1156, 1208, 1258, 1302, 1286, 1280])
loadData.value[initialHour] = metrics.load

const actualStats = computed(() => {
  const actual = loadData.value.slice(0, currentHour.value + 1)
  const total = actual.reduce((sum, value) => sum + value, 0)
  const max = Math.max(...actual)
  const min = Math.min(...actual)
  return { avg: Math.round(total / actual.length), max, min, maxHour: actual.indexOf(max), minHour: actual.indexOf(min) }
})
const hourRows = computed(() => {
  const avg = actualStats.value.avg
  return hourLabels.map((time, index) => {
    const load = index <= currentHour.value ? loadData.value[index] : null
    return { index, time: `${time}:00`, load, delta: load == null ? null : load - avg }
  })
})
const selectedHour = ref(initialHour)
const selected = computed(() => {
  if (selectedHour.value == null) return null
  const load = loadData.value[selectedHour.value]
  if (load == null) return null
  const avg = actualStats.value.avg
  const prev = selectedHour.value > 0 ? loadData.value[selectedHour.value - 1] : null
  return {
    time: `${hourLabels[selectedHour.value]}:00`,
    load,
    delta: load - avg,
    prevDelta: prev == null ? null : load - prev
  }
})

const params = computed(() => [
  { label: '供水温度', value: '86.4 / 95', fill: 86, target: 95 },
  { label: '回水温度', value: '46.2 / 55', fill: 46, target: 55 },
  { label: '循环流量', value: '1,286 / 1,500', fill: 78, target: 100 },
  { label: '补水率', value: `${metrics.makeup.toFixed(2)} / 1.5`, fill: Math.round(metrics.makeup / 1.5 * 100), target: 100 }
])

const alerts = reactive([
  { time: '09:42', level: 'error', tag: '告警', text: '滨江换热站二次网压力低于下限' },
  { time: '09:36', level: 'warn', tag: '预警', text: '城北热源站 3# 循环泵振动偏高' },
  { time: '09:28', level: 'warn', tag: '预警', text: '高新首站补水率瞬时超过 2.0%' },
  { time: '09:17', level: 'info', tag: '通知', text: '东港能源站通讯延迟超过 30 秒' },
  { time: '09:05', level: 'warn', tag: '预警', text: '南湖换热站 2# 机组温度偏差 3.2℃' },
  { time: '08:58', level: 'success', tag: '恢复', text: '东港能源站通讯已恢复' }
])
const devices = reactive([
  { name: '循环泵', detail: '12 / 12 台', icon: 'pump', status: 'ok', label: '在线' },
  { name: '补水泵', detail: '8 / 8 台', icon: 'feed-pump', status: 'ok', label: '在线' },
  { name: '换热器', detail: '16 / 16 台', icon: 'heat-exchange', status: 'ok', label: '在线' },
  { name: '调节阀', detail: '24 / 24 台', icon: 'control-valve', status: 'warn', label: '关注' }
])
const workOrders = reactive({ rate: 84 })
const mix = reactive([
  { name: '热电联产', value: 42 },
  { name: '燃气锅炉', value: 28 },
  { name: '工业余热', value: 18 },
  { name: '电蓄热', value: 12 }
])
const ticker = [
  '城北热源 3# 锅炉运行稳定',
  '滨江换热站补水率回落至 1.18%',
  '高新首站二次网压差 0.46 MPa',
  '南湖换热站负荷平稳'
]

const cssToken = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim()
const theme = {
  primary: cssToken('--bedrock-primary'),
  accent: cssToken('--bedrock-accent'),
  info: cssToken('--bedrock-info'),
  success: cssToken('--bedrock-success'),
  text: cssToken('--bedrock-text-2'),
  textStrong: cssToken('--bedrock-text-1'),
  muted: cssToken('--bedrock-text-3'),
  line: cssToken('--bedrock-line-2'),
  panel: cssToken('--bedrock-bg-2'),
  bg: cssToken('--bedrock-bg-0'),
  font: cssToken('--bedrock-font-ui'),
  fontNum: cssToken('--bedrock-font-num'),
  fs: {
    caption: parseInt(cssToken('--bedrock-fs-caption')),
    label: parseInt(cssToken('--bedrock-fs-label')),
    body: parseInt(cssToken('--bedrock-fs-body')),
    title: parseInt(cssToken('--bedrock-fs-title')),
    metric: parseInt(cssToken('--bedrock-fs-metric')),
    display: parseInt(cssToken('--bedrock-fs-display')),
    hero: parseInt(cssToken('--bedrock-fs-hero'))
  }
}
const alpha = (hex, opacity) => {
  const value = parseInt(hex.slice(1), 16)
  return `rgba(${value >> 16 & 255}, ${value >> 8 & 255}, ${value & 255}, ${opacity})`
}

const compassEl = ref(null)
const mixEl = ref(null)
let compassChart = null
let mixChart = null
let compassObserver = null
let mixObserver = null
let clockTimer = null
let liveTimer = null

function buildCompassOption() {
  const values = loadData.value
  const actualValues = values.map((value, index) => index <= currentHour.value ? value : null)
  const actual = values.slice(0, currentHour.value + 1)
  const max = Math.max(...actual)
  const min = Math.min(...actual)
  const maxIndex = actual.indexOf(max)
  const minIndex = actual.indexOf(min)
  const avg = Math.round(actual.reduce((sum, value) => sum + value, 0) / actual.length)
  const maxBound = Math.max(1400, Math.ceil(max / 200) * 200)
  const barColor = params => {
    if (params.dataIndex === currentHour.value) return theme.accent
    const ratio = (params.value - min) / Math.max(1, max - min)
    return alpha(theme.primary, .18 + ratio * .5)
  }

  return {
    animationDuration: 900,
    textStyle: { color: theme.text, fontFamily: theme.font },
    tooltip: {
      trigger: 'item',
      backgroundColor: alpha(theme.panel, .96),
      borderColor: theme.line,
      textStyle: { color: theme.text, fontSize: theme.fs.label },
      formatter: params => {
        if (params.value == null) return ''
        const index = params.dataIndex
        const value = params.value
        const prev = index > 0 ? loadData.value[index - 1] : null
        const lines = [`${hourLabels[index]}:00`, `${formatNumber(value)} MW`, `较今日均值 ${signed(value - avg)} MW`]
        if (prev != null) lines.push(`较前一小时 ${signed(value - prev)} MW`)
        return lines.join('<br/>')
      }
    },
    angleAxis: {
      type: 'category',
      data: hourLabels,
      startAngle: 97.5,
      clockwise: true,
      axisLine: { lineStyle: { color: theme.line } },
      axisTick: { show: true, interval: 0, length: 4, lineStyle: { color: theme.line } },
      axisLabel: { color: theme.muted, fontSize: theme.fs.caption, interval: 0 },
      splitLine: { show: false }
    },
    radiusAxis: {
      type: 'value',
      min: 0,
      max: maxBound,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { show: true, splitNumber: 4, lineStyle: { color: theme.line, type: 'dashed' } }
    },
    polar: { center: ['50%', '50%'], radius: ['27%', '78%'] },
    series: [
      {
        type: 'pie',
        radius: ['0%', '24%'],
        center: ['50%', '50%'],
        silent: true,
        label: { show: false },
        data: [{ value: 1, itemStyle: { color: alpha(theme.primary, .035) } }],
        z: 0
      },
      {
        type: 'bar',
        coordinateSystem: 'polar',
        data: actualValues.map((value, index) => ({
          value,
          itemStyle: index === selectedHour.value ? { borderColor: theme.textStrong, borderWidth: 2 } : undefined
        })),
        barWidth: 10,
        showBackground: true,
        backgroundStyle: { color: alpha(theme.primary, .055) },
        itemStyle: { borderRadius: 4, color: barColor },
        emphasis: { itemStyle: { color: theme.primary } },
        z: 2
      }
    ]
  }
}

function initCompassChart() {
  if (!compassEl.value) return
  compassChart = echarts.init(compassEl.value)
  compassChart.setOption(buildCompassOption())
  compassChart.on('click', params => {
    if (params.seriesType === 'bar' && params.value != null) selectHour(params.dataIndex)
  })
  compassObserver = new ResizeObserver(() => compassChart && compassChart.resize())
  compassObserver.observe(compassEl.value)
}

function updateCompass() {
  compassChart?.setOption(buildCompassOption())
}

function selectHour(index) {
  if (loadData.value[index] == null) return
  selectedHour.value = index
  updateCompass()
}

function onHourRowClick(row) {
  selectHour(row.index)
}

function tableRowClass({ row }) {
  if (row.index === currentHour.value) return 'compass-table__row--current'
  if (row.index === selectedHour.value) return 'compass-table__row--selected'
  return ''
}

function initMixChart() {
  if (!mixEl.value) return
  mixChart = echarts.init(mixEl.value)
  mixChart.setOption({
    animationDuration: 650,
    textStyle: { color: theme.text, fontFamily: theme.font },
    tooltip: { trigger: 'item', backgroundColor: alpha(theme.panel, .96), borderColor: theme.line, textStyle: { color: theme.text, fontSize: theme.fs.label } },
    series: [{
      type: 'pie',
      radius: ['34%', '50%'],
      center: ['50%', '50%'],
      padAngle: 2,
      avoidLabelOverlap: true,
      label: {
        show: true,
        position: 'outside',
        alignTo: 'labelLine',
        bleedMargin: 2,
        formatter: '{b}\n{d}%',
        color: theme.text,
        fontSize: theme.fs.caption,
        lineHeight: 16
      },
      labelLine: {
        show: true,
        length: 8,
        length2: 6,
        smooth: .2,
        lineStyle: { color: alpha(theme.muted, .8), width: 1 }
      },
      itemStyle: { borderColor: theme.bg, borderRadius: 3 },
      data: mix.map((item, index) => ({ name: item.name, value: item.value, itemStyle: { color: [theme.primary, theme.accent, theme.info, theme.success][index % 4] } }))
    }]
  })
  mixObserver = new ResizeObserver(() => mixChart && mixChart.resize())
  mixObserver.observe(mixEl.value)
}

function updateLive() {
  metrics.heat += 3
  metrics.efficiency = clamp(+(metrics.efficiency + (Math.random() * .2 - .1)).toFixed(1), 91.8, 93.6)
  metrics.makeup = clamp(+(metrics.makeup + (Math.random() * .04 - .02)).toFixed(2), 1.08, 1.4)
}

async function loadRemoteSnapshot() {
  const snapshot = await fetchEnergySnapshot()
  const overview = snapshot.overview || {}
  if (overview.totalHeat?.value !== undefined) metrics.heat = overview.totalHeat.value
  if (overview.currentLoad?.value !== undefined) {
    metrics.load = overview.currentLoad.value
    loadData.value[currentHour.value] = metrics.load
  }
  if (overview.efficiency?.value !== undefined) metrics.efficiency = overview.efficiency.value
  if (overview.makeupRate?.value !== undefined) metrics.makeup = overview.makeupRate.value
  if (overview.onlineStations?.value !== undefined) metrics.online = overview.onlineStations.value
  if (snapshot.loadCurve?.load?.length) {
    loadData.value = snapshot.loadCurve.load
    loadData.value[currentHour.value] = metrics.load
  }
  if (snapshot.alerts?.length) alerts.splice(0, alerts.length, ...snapshot.alerts)
  if (snapshot.workOrders?.closeRate !== undefined) workOrders.rate = snapshot.workOrders.closeRate
  updateCompass()
}

onMounted(() => {
  clockTimer = setInterval(() => {
    const next = new Date()
    now.value = next
    const hour = next.getHours()
    if (hour !== currentHour.value) {
      currentHour.value = hour
      loadData.value[hour] = metrics.load
      updateCompass()
    }
  }, 1000)
  if (!USE_REMOTE_API) liveTimer = setInterval(updateLive, 5000)
  nextTick(() => {
    initCompassChart()
    initMixChart()
    if (USE_REMOTE_API) loadRemoteSnapshot().catch(error => console.error('[energy-screen] remote snapshot failed', error))
  })
})

onBeforeUnmount(() => {
  clearInterval(clockTimer)
  clearInterval(liveTimer)
  compassObserver?.disconnect()
  mixObserver?.disconnect()
  compassChart?.dispose()
  mixChart?.dispose()
})
</script>

<style scoped lang="scss">
.energy-screen {
  display: grid;
  grid-template-rows: 76px minmax(0, 1fr) 38px;
  gap: 12px;
  width: 1920px;
  height: 1080px;
  padding: 16px 20px;
  overflow: hidden;
  color: var(--bedrock-text-2);
  font-family: var(--bedrock-font-ui);
  background:
    radial-gradient(ellipse 55% 45% at 50% 0%, rgba(var(--bedrock-primary-rgb), .08), transparent 68%),
    radial-gradient(ellipse 35% 35% at 8% 90%, rgba(90, 168, 255, .05), transparent 70%),
    var(--bedrock-bg-0);
}
.energy-main { display: grid; grid-template-columns: 320px minmax(0, 1fr) 380px; gap: 12px; min-height: 0; }
.energy-col { display: grid; gap: 12px; min-height: 0; }
.energy-col--left { grid-template-rows: 1.1fr .9fr; }
.energy-col--right { grid-template-rows: .8fr .55fr .75fr; }
.energy-flow { position: relative; display: flex; flex-direction: column; min-height: 0; overflow: visible; }
.energy-flow::before { z-index: 3; }
.energy-flow__body { display: flex; flex-direction: column; flex: 1; min-height: 0; padding: 12px; }
.energy-flow__panel { flex: 1; min-height: 0; border-color: transparent; background: transparent; }
.energy-source { display: flex; flex-direction: column; gap: 10px; height: 100%; }
.energy-source__params { margin-top: auto; }
.screen-chart { width: 100%; height: 100%; min-height: 0; }
.screen-compass { width: 100%; height: 100%; min-height: 0; }
.compass-layout { display: grid; grid-template-columns: 250px minmax(0, 1fr) 240px; gap: 12px; height: 100%; min-height: 0; }
.compass-table-wrap { min-width: 0; min-height: 0; }
.compass-table :deep(.el-table__body td) { height: auto; padding-top: 3px; padding-bottom: 3px; font-size: var(--bedrock-fs-label); white-space: nowrap; }
.compass-table :deep(.el-table__row) { cursor: pointer; }
.compass-table :deep(.el-table__body tr.compass-table__row--current > td.el-table__cell) { background: rgba(var(--bedrock-accent-rgb), .07); }
.compass-table :deep(.el-table__body tr.compass-table__row--selected > td.el-table__cell) { background: rgba(var(--bedrock-primary-rgb), .12); }
.compass-table__delta { font-family: var(--bedrock-font-num); font-size: var(--bedrock-fs-label); }
.compass-table__delta--up { color: var(--bedrock-accent); }
.compass-table__delta--down { color: var(--bedrock-info); }
.compass-table__muted { color: var(--bedrock-text-4); }
.compass-main { position: relative; min-width: 0; min-height: 0; }
.compass-center { position: absolute; inset: 0; z-index: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; pointer-events: none; text-align: center; }
.compass-center strong { font-family: var(--bedrock-font-num); font-size: var(--bedrock-fs-display); font-weight: 500; line-height: 1; color: var(--bedrock-text-1); }
.compass-center span { font-size: var(--bedrock-fs-label); color: var(--bedrock-text-3); }
.compass-center em { font-family: var(--bedrock-font-num); font-size: var(--bedrock-fs-caption); font-style: normal; color: var(--bedrock-accent); }
.compass-side { display: flex; flex-direction: column; gap: 8px; min-height: 0; overflow: auto; }
.compass-side__title { font-size: var(--bedrock-fs-caption); letter-spacing: .12em; color: var(--bedrock-text-4); }
.compass-side .bd-metric--inline { padding: 8px 10px; }
.compass-side .bd-metric__value { font-size: var(--bedrock-fs-title); }
.compass-selected { padding: 10px 12px; border-left: 2px solid var(--bedrock-accent); background: rgba(var(--bedrock-accent-rgb), .06); }
.compass-selected__head { font-size: var(--bedrock-fs-caption); color: var(--bedrock-text-4); }
.compass-selected__value { margin-top: 5px; font-family: var(--bedrock-font-num); font-size: var(--bedrock-fs-metric); line-height: 1; color: var(--bedrock-text-1); }
.compass-selected__value span { margin-left: 4px; font-size: var(--bedrock-fs-caption); color: var(--bedrock-text-3); }
.compass-selected__row { margin-top: 5px; font-family: var(--bedrock-font-num); font-size: var(--bedrock-fs-caption); color: var(--bedrock-text-3); }
.compass-selected__row--up { color: var(--bedrock-accent); }
.compass-selected__row--down { color: var(--bedrock-info); }
.compass-hint { margin-top: auto; font-size: var(--bedrock-fs-caption); line-height: 1.6; color: var(--bedrock-text-4); }
.screen-device-list { display: grid; align-content: stretch; gap: 8px; }
.screen-order { display: flex; align-items: center; gap: 18px; height: 100%; }
.screen-order__bars { flex: 1; min-width: 0; }
.screen-back { color: var(--bedrock-text-3); }
.screen-back:hover { color: var(--bedrock-primary); }
.screen-marquee { min-width: 0; }
</style>