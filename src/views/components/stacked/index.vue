<template>
  <div class="bd-page">
    <DocsSidebar active="stacked" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>图表</span><span>/</span><span>堆叠柱状图</span></div>
      <header class="bd-page-head">
        <h1>堆叠柱状图</h1><p>展示总量与构成，适合能源类型或站点贡献。</p>
        <div class="bd-tags"><span class="bd-tag">echarts</span><span class="bd-tag">chart</span><span class="bd-tag">stacked</span></div>
      </header>
      <section class="bd-section">
        <div class="bd-section__head">堆叠柱状图 / ECHARTS<span class="bd-section__meta">独立 option · 独立 resize</span></div>
        <div class="bd-stage"><div ref="chartEl" class="bd-chart-stage"></div><p class="bd-note">该页独立 import ECharts、独立 setOption 与 resize，不引用公共图表配置。</p></div>
      </section>
      <section class="bd-section"><div class="bd-section__head">用法 / OPTION<span class="bd-section__meta">页面内联</span></div><pre class="bd-code">series: [{ type: 'bar', stack: 'total' }, ...]</pre></section>
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
    grid: {
      left: 46,
      right: 22,
      top: 34,
      bottom: 62
    },
    legend: {
      bottom: 0,
      textStyle: {
        color: theme.muted,
        fontSize: theme.fs.caption
      }
    },
    xAxis: {
      type: 'category',
      data: ['城北', '滨江', '高新', '东港'],
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
    yAxis: {
      type: 'value',
      name: 'GJ',
      nameTextStyle: {
        color: theme.muted,
        fontSize: theme.fs.caption
      },
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
        name: '居民',
        type: 'bar',
        stack: 'total',
        barWidth: 24,
        itemStyle: {
          color: theme.primary
        },
        emphasis: {
          focus: 'series'
        },
        data: [62, 54, 48, 41]
      },
      {
        name: '公建',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: theme.info
        },
        emphasis: {
          focus: 'series'
        },
        data: [34, 32, 28, 24]
      },
      {
        name: '工业',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: theme.accent,
          borderRadius: [3, 3, 0, 0]
        },
        emphasis: {
          focus: 'series'
        },
        data: [18, 22, 16, 20]
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
