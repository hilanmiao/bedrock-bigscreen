<template>
  <div class="bd-page">
    <DocsSidebar active="waterfall" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>图表</span><span>/</span><span>瀑布图</span></div>
      <header class="bd-page-head">
        <h1>瀑布图</h1><p>拆解总量变化，适合同比归因和成本变化。</p>
        <div class="bd-tags"><span class="bd-tag">echarts</span><span class="bd-tag">chart</span><span class="bd-tag">waterfall</span></div>
      </header>
      <section class="bd-section">
        <div class="bd-section__head">瀑布图 / ECHARTS<span class="bd-section__meta">独立 option · 独立 resize</span></div>
        <div class="bd-stage"><div ref="chartEl" class="bd-chart-stage"></div><p class="bd-note">该页独立 import ECharts、独立 setOption 与 resize，不引用公共图表配置。</p></div>
      </section>
      <section class="bd-section"><div class="bd-section__head">用法 / OPTION<span class="bd-section__meta">页面内联</span></div><pre class="bd-code">series: [{ type: 'bar', stack: 'total', data: [...] }]</pre></section>
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
      top: 24,
      bottom: 30
    },
    xAxis: {
      type: 'category',
      data: ['基期', '面积', '气温', '能效', '本期'],
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
        name: 'base',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: 'transparent'
        },
        data: [0, 6280, 6700, 7120, 0]
      },
      {
        name: '变化',
        type: 'bar',
        stack: 'total',
        barWidth: 22,
        itemStyle: {
          borderRadius: 2
        },
        label: {
          show: true,
          position: 'top',
          color: theme.text,
          fontSize: theme.fs.caption,
          formatter: params => {
            const changes = ['', '+420', '+680', '-260', '']
            return changes[params.dataIndex] || params.value.toLocaleString()
          }
        },
        data: [
          {
            value: 6280,
            itemStyle: {
              color: theme.primary
            }
          },
          {
            value: 420,
            itemStyle: {
              color: theme.accent
            }
          },
          {
            value: 680,
            itemStyle: {
              color: theme.accent
            }
          },
          {
            value: 260,
            itemStyle: {
              color: theme.success
            }
          },
          {
            value: 7120,
            itemStyle: {
              color: theme.primary
            }
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
