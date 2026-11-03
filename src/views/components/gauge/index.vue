<template>
  <div class="bd-page">
    <DocsSidebar active="gauge" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>图表</span><span>/</span><span>仪表盘</span></div>
      <header class="bd-page-head">
        <h1>仪表盘</h1><p>单值 + 目标区间，适合温度、压力与负荷。</p>
        <div class="bd-tags"><span class="bd-tag">echarts</span><span class="bd-tag">chart</span><span class="bd-tag">gauge</span></div>
      </header>
      <section class="bd-section">
        <div class="bd-section__head">仪表盘 / ECHARTS<span class="bd-section__meta">独立 option · 独立 resize</span></div>
        <div class="bd-stage"><div ref="chartEl" class="bd-chart-stage"></div><p class="bd-note">该页独立 import ECharts、独立 setOption 与 resize，不引用公共图表配置。</p></div>
      </section>
      <section class="bd-section"><div class="bd-section__head">用法 / OPTION<span class="bd-section__meta">页面内联</span></div><pre class="bd-code">series: [{ type: 'gauge', progress: { show: true } }]</pre></section>
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
    animationDuration: 800,
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
    series: [
      {
        type: 'gauge',
        startAngle: 210,
        endAngle: -30,
        min: 0,
        max: 120,
        radius: '82%',
        center: ['50%', '58%'],
        splitNumber: 4,
        progress: {
          show: true,
          width: 14,
          roundCap: true,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: alpha(theme.primary, .3) },
              { offset: 1, color: theme.primary }
            ])
          }
        },
        axisLine: {
          lineStyle: {
            width: 14,
            color: [[1, alpha(theme.primary, .1)]]
          }
        },
        axisTick: {
          distance: -20,
          length: 5,
          lineStyle: {
            color: theme.line
          }
        },
        splitLine: {
          distance: -20,
          length: 10,
          lineStyle: {
            color: alpha(theme.primary, .45)
          }
        },
        axisLabel: {
          distance: -28,
          color: theme.muted,
          fontSize: theme.fs.caption,
          formatter: value => value % 30 === 0 ? value : ''
        },
        pointer: {
          width: 4,
          itemStyle: {
            color: theme.primary
          }
        },
        anchor: {
          show: true,
          size: 10,
          itemStyle: {
            color: theme.primary,
            borderColor: alpha(theme.primary, .3),
            borderWidth: 4
          }
        },
        title: {
          offsetCenter: [0, '36%'],
          color: theme.muted,
          fontSize: theme.fs.caption
        },
        detail: {
          valueAnimation: true,
          offsetCenter: [0, '8%'],
          formatter: '{value}℃',
          color: theme.text,
          fontSize: theme.fs.metricLg
        },
        data: [
          {
            value: 86.4,
            name: '供水温度'
          }
        ]
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
