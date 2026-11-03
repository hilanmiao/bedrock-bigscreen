<template>
  <div class="bd-page">
    <DocsSidebar active="area" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>图表</span><span>/</span><span>面积图</span></div>
      <header class="bd-page-head">
        <h1>面积图</h1><p>在折线基础上强调累计量或区间体积。</p>
        <div class="bd-tags"><span class="bd-tag">echarts</span><span class="bd-tag">chart</span><span class="bd-tag">area</span></div>
      </header>
      <section class="bd-section">
        <div class="bd-section__head">面积图 / ECHARTS<span class="bd-section__meta">独立 option · 独立 resize</span></div>
        <div class="bd-stage"><div ref="chartEl" class="bd-chart-stage"></div><p class="bd-note">该页独立 import ECharts、独立 setOption 与 resize，不引用公共图表配置。</p></div>
      </section>
      <section class="bd-section"><div class="bd-section__head">用法 / OPTION<span class="bd-section__meta">页面内联</span></div><pre class="bd-code">series: [{ type: 'line', areaStyle: { opacity: .2 } }]</pre></section>
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
      trigger: 'axis',
      backgroundColor: alpha(theme.panel, .96),
      borderColor: theme.line,
      textStyle: {
        color: theme.text,
        fontSize: theme.fs.caption
      }
    },
    legend: {
      right: 12,
      top: 0,
      itemWidth: 12,
      itemHeight: 4,
      textStyle: {
        color: theme.muted,
        fontSize: theme.fs.caption
      }
    },
    grid: {
      left: 48,
      right: 24,
      top: 34,
      bottom: 32
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'],
      axisLine: {
        lineStyle: {
          color: theme.grid
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: theme.muted,
        fontSize: theme.fs.caption
      },
      axisPointer: {
        lineStyle: {
          color: alpha(theme.primary, .45),
          type: 'dashed'
        }
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: theme.grid,
          type: 'dashed'
        }
      },
      axisLabel: {
        color: theme.muted,
        fontSize: theme.fs.caption
      }
    },
    series: [
      {
        name: '今日',
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: theme.primary,
          shadowColor: alpha(theme.primary, .45),
          shadowBlur: 12,
          shadowOffsetY: 5
        },
        itemStyle: {
          color: theme.primary
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: alpha(theme.primary, .34) },
            { offset: 1, color: alpha(theme.primary, .02) }
          ])
        },
        data: [42, 38, 35, 44, 58, 66, 74, 78, 71, 62, 54, 48]
      },
      {
        name: '昨日',
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1.5,
          color: theme.accent,
          type: 'dashed'
        },
        itemStyle: {
          color: theme.accent
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: alpha(theme.accent, .2) },
            { offset: 1, color: alpha(theme.accent, 0) }
          ])
        },
        data: [30, 34, 32, 38, 46, 53, 58, 61, 57, 50, 44, 39]
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
