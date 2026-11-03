<template>
  <div class="bd-page">
    <DocsSidebar active="scatter" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>图表</span><span>/</span><span>散点图</span></div>
      <header class="bd-page-head">
        <h1>散点图</h1><p>观察两个连续变量的关系。</p>
        <div class="bd-tags"><span class="bd-tag">echarts</span><span class="bd-tag">chart</span><span class="bd-tag">scatter</span></div>
      </header>
      <section class="bd-section">
        <div class="bd-section__head">散点图 / ECHARTS<span class="bd-section__meta">独立 option · 独立 resize</span></div>
        <div class="bd-stage"><div ref="chartEl" class="bd-chart-stage"></div><p class="bd-note">该页独立 import ECharts、独立 setOption 与 resize，不引用公共图表配置。</p></div>
      </section>
      <section class="bd-section"><div class="bd-section__head">用法 / OPTION<span class="bd-section__meta">页面内联</span></div><pre class="bd-code">series: [{ type: 'scatter', symbolSize: 8 }]</pre></section>
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
      trigger: 'item',
      backgroundColor: alpha(theme.panel, .96),
      borderColor: theme.line,
      textStyle: {
        color: theme.text,
        fontSize: theme.fs.caption
      },
      formatter: params => `${params.value[0]} ℃<br/>${params.value[1]} t/h`
    },
    grid: {
      left: 46,
      right: 28,
      top: 34,
      bottom: 48
    },
    xAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: theme.grid
        }
      },
      axisLabel: {
        color: theme.muted,
        fontSize: theme.fs.caption
      },
      name: '温度 ℃',
      nameLocation: 'middle',
      nameGap: 30,
      nameTextStyle: {
        color: theme.muted,
        fontSize: theme.fs.caption
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: theme.grid
        }
      },
      axisLabel: {
        color: theme.muted,
        fontSize: theme.fs.caption
      },
      name: '流量 t/h',
      nameTextStyle: {
        color: theme.muted,
        fontSize: theme.fs.caption
      }
    },
    series: [
      {
        type: 'line',
        smooth: true,
        symbol: 'none',
        silent: true,
        lineStyle: {
          color: alpha(theme.accent, .5),
          width: 1.5,
          type: 'dashed'
        },
        data: [[64, 84], [68, 92], [72, 104], [76, 118], [80, 126], [84, 138], [88, 146], [92, 158]]
      },
      {
        name: '工况点',
        type: 'scatter',
        symbolSize: 11,
        itemStyle: {
          color: alpha(theme.primary, .65),
          borderColor: alpha(theme.primary, .9),
          borderWidth: 1
        },
        emphasis: {
          scale: 1.4,
          itemStyle: {
            color: theme.primary
          }
        },
        data: [[64, 84], [68, 92], [72, 104], [76, 118], [80, 126], [84, 138], [88, 146], [92, 158]]
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
