<template>
  <div class="bd-page">
    <DocsSidebar active="sparkline" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>图表</span><span>/</span><span>Sparkline</span></div>
      <header class="bd-page-head">
        <h1>Sparkline</h1><p>迷你趋势线，适合指标条或表格单元格。</p>
        <div class="bd-tags"><span class="bd-tag">echarts</span><span class="bd-tag">chart</span><span class="bd-tag">sparkline</span></div>
      </header>
      <section class="bd-section">
        <div class="bd-section__head">Sparkline / ECHARTS<span class="bd-section__meta">独立 option · 独立 resize</span></div>
        <div class="bd-stage"><div ref="chartEl" class="bd-chart-stage" style="height:170px"></div><p class="bd-note">该页独立 import ECharts、独立 setOption 与 resize，不引用公共图表配置。</p></div>
      </section>
      <section class="bd-section"><div class="bd-section__head">用法 / OPTION<span class="bd-section__meta">页面内联</span></div><pre class="bd-code">xAxis: { show: false }, yAxis: { show: false }
series: [{ type: 'line', smooth: true }]</pre></section>
    </main>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
const chartEl = ref(null)

// ECharts 画在 canvas 上，读不到 CSS 变量，先在这里取出实际色值。
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
    body: parseInt(cssToken('--bedrock-fs-body')),
    subhead: parseInt(cssToken('--bedrock-fs-subhead')),
    metricLg: parseInt(cssToken('--bedrock-fs-metric-lg'))
  }
}

function alpha(hex, opacity) {
  const value = parseInt(hex.slice(1), 16)
  return `rgba(${value >> 16 & 255}, ${value >> 8 & 255}, ${value & 255}, ${opacity})`
}

let chart = null
let ro = null
onMounted(() => {
  chart = echarts.init(chartEl.value)
  chart.setOption({
    animationDuration: 650,
    textStyle: {
      color: theme.text,
      fontFamily: theme.font
    },
    tooltip: {
      backgroundColor: alpha(theme.panel, .96),
      borderColor: theme.line,
      textStyle: {
        color: theme.text,
        fontSize: theme.fs.caption
      }
    },
    grid: {
      left: 4,
      right: 4,
      top: 8,
      bottom: 4
    },
    xAxis: {
      type: 'category',
      show: false,
      data: ['00', '04', '08', '12', '16', '20', '24']
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [
      {
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: {
          width: 2,
          color: theme.primary,
          shadowColor: alpha(theme.primary, .45),
          shadowBlur: 10,
          shadowOffsetY: 4
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: alpha(theme.primary, .28) },
            { offset: 1, color: alpha(theme.primary, 0) }
          ])
        },
        data: [42, 38, 56, 72, 86, 68, 48]
      }
    ]
  })
  ro = new ResizeObserver(() => chart && chart.resize())
  ro.observe(chartEl.value)
})
onBeforeUnmount(() => {
  if (ro) ro.disconnect()
  if (chart) chart.dispose()
})
</script>
