<template>
  <div class="bd-page">
    <DocsSidebar active="heatmap" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>图表</span><span>/</span><span>热力图</span></div>
      <header class="bd-page-head">
        <h1>热力图</h1><p>用颜色表达二维密度，适合时段 × 站点告警频次。</p>
        <div class="bd-tags"><span class="bd-tag">echarts</span><span class="bd-tag">chart</span><span class="bd-tag">heatmap</span></div>
      </header>
      <section class="bd-section">
        <div class="bd-section__head">热力图 / ECHARTS<span class="bd-section__meta">独立 option · 独立 resize</span></div>
        <div class="bd-stage"><div ref="chartEl" class="bd-chart-stage"></div><p class="bd-note">该页独立 import ECharts、独立 setOption 与 resize，不引用公共图表配置。</p></div>
      </section>
      <section class="bd-section"><div class="bd-section__head">用法 / OPTION<span class="bd-section__meta">页面内联</span></div><pre class="bd-code">series: [{ type: 'heatmap', data: [[0,0,2], ...] }]</pre></section>
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
      position: 'top',
      backgroundColor: alpha(theme.panel, .96),
      borderColor: theme.line,
      textStyle: {
        color: theme.text,
        fontSize: theme.fs.caption
      }
    },
    grid: {
      left: 64,
      right: 58,
      top: 24,
      bottom: 32
    },
    xAxis: {
      type: 'category',
      data: ['00', '04', '08', '12', '16', '20'],
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
    visualMap: {
      min: 0,
      max: 8,
      calculable: false,
      orient: 'vertical',
      right: 6,
      top: 'middle',
      itemWidth: 10,
      itemHeight: 90,
      text: ['高', '低'],
      textStyle: {
        color: theme.muted,
        fontSize: theme.fs.caption
      },
      inRange: {
        color: [alpha(theme.primary, .08), alpha(theme.primary, .5), theme.primary]
      }
    },
    series: [
      {
        type: 'heatmap',
        data: [
          [0, 0, 2],
          [1, 0, 3],
          [2, 0, 5],
          [3, 0, 7],
          [4, 0, 4],
          [5, 0, 2],
          [0, 1, 1],
          [1, 1, 2],
          [2, 1, 4],
          [3, 1, 6],
          [4, 1, 3],
          [5, 1, 1],
          [0, 2, 0],
          [1, 2, 1],
          [2, 2, 3],
          [3, 2, 4],
          [4, 2, 2],
          [5, 2, 1],
          [0, 3, 3],
          [1, 3, 5],
          [2, 3, 7],
          [3, 3, 8],
          [4, 3, 4],
          [5, 3, 2]
        ],
        itemStyle: {
          borderColor: theme.bg,
          borderWidth: 2,
          borderRadius: 3
        },
        label: {
          show: true,
          color: theme.textStrong,
          fontSize: theme.fs.caption
        },
        emphasis: {
          itemStyle: {
            borderColor: theme.textStrong,
            borderWidth: 1
          }
        }
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
