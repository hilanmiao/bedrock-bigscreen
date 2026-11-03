<template>
  <div class="bd-page">
    <DocsSidebar active="horizontal" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>图表</span><span>/</span><span>横向柱状图</span></div>
      <header class="bd-page-head">
        <h1>横向柱状图</h1><p>分类名称较长时优先横向，适合站点排行。</p>
        <div class="bd-tags"><span class="bd-tag">echarts</span><span class="bd-tag">chart</span><span class="bd-tag">horizontal</span></div>
      </header>
      <section class="bd-section">
        <div class="bd-section__head">横向柱状图 / ECHARTS<span class="bd-section__meta">独立 option · 独立 resize</span></div>
        <div class="bd-stage"><div ref="chartEl" class="bd-chart-stage"></div><p class="bd-note">该页独立 import ECharts、独立 setOption 与 resize，不引用公共图表配置。</p></div>
      </section>
      <section class="bd-section"><div class="bd-section__head">用法 / OPTION<span class="bd-section__meta">页面内联</span></div><pre class="bd-code">xAxis: { type: 'value' }, yAxis: { type: 'category' }</pre></section>
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
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: alpha(theme.primary, .06)
        }
      },
      backgroundColor: alpha(theme.panel, .96),
      borderColor: theme.line,
      textStyle: {
        color: theme.text,
        fontSize: theme.fs.caption
      },
      valueFormatter: value => value.toLocaleString() + ' GJ'
    },
    grid: {
      left: 92,
      right: 58,
      top: 18,
      bottom: 26
    },
    xAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: theme.grid,
          type: 'dashed'
        }
      },
      axisLabel: {
        color: theme.muted,
        fontSize: theme.fs.caption,
        formatter: value => value / 1000 + 'k'
      }
    },
    yAxis: {
      type: 'category',
      data: ['南湖', '西山', '东港', '高新', '滨江', '城北'],
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
      }
    },
    series: [
      {
        name: '供热量',
        type: 'bar',
        barWidth: 16,
        showBackground: true,
        backgroundStyle: {
          color: alpha(theme.primary, .04),
          borderRadius: 3
        },
        itemStyle: {
          borderRadius: [0, 3, 3, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: alpha(theme.primary, .25) },
            { offset: 1, color: theme.primary }
          ])
        },
        label: {
          show: true,
          position: 'right',
          color: theme.muted,
          fontSize: theme.fs.caption,
          formatter: params => params.value.toLocaleString()
        },
        data: [9426, 10284, 12648, 14862, 16284, 18642]
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
