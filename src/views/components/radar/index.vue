<template>
  <div class="bd-page">
    <DocsSidebar active="radar" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>图表</span><span>/</span><span>雷达图</span></div>
      <header class="bd-page-head">
        <h1>雷达图</h1><p>多指标综合对比，适合站点能力或设备健康度。</p>
        <div class="bd-tags"><span class="bd-tag">echarts</span><span class="bd-tag">chart</span><span class="bd-tag">radar</span></div>
      </header>
      <section class="bd-section">
        <div class="bd-section__head">雷达图 / ECHARTS<span class="bd-section__meta">独立 option · 独立 resize</span></div>
        <div class="bd-stage"><div ref="chartEl" class="bd-chart-stage"></div><p class="bd-note">该页独立 import ECharts、独立 setOption 与 resize，不引用公共图表配置。</p></div>
      </section>
      <section class="bd-section"><div class="bd-section__head">用法 / OPTION<span class="bd-section__meta">页面内联</span></div><pre class="bd-code">series: [{ type: 'radar', data: [...] }]</pre></section>
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
      }
    },
    radar: {
      center: ['50%', '48%'],
      radius: '62%',
      indicator: [
        {
          name: '温度',
          max: 100
        },
        {
          name: '压力',
          max: 100
        },
        {
          name: '流量',
          max: 100
        },
        {
          name: '能效',
          max: 100
        },
        {
          name: '稳定',
          max: 100
        }
      ],
      axisName: {
        color: theme.muted,
        fontSize: theme.fs.caption
      },
      splitLine: {
        lineStyle: {
          color: theme.grid
        }
      },
      splitArea: {
        areaStyle: {
          color: ['transparent']
        }
      },
      axisLine: {
        lineStyle: {
          color: theme.grid
        }
      }
    },
    legend: {
      bottom: 0,
      textStyle: {
        color: theme.muted,
        fontSize: theme.fs.caption
      }
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [86, 72, 68, 82, 94],
            name: '城北',
            lineStyle: {
              color: theme.primary
            },
            itemStyle: {
              color: theme.primary
            },
            areaStyle: {
              color: alpha(theme.primary, .16)
            }
          },
          {
            value: [64, 81, 58, 74, 86],
            name: '滨江',
            lineStyle: {
              color: theme.accent
            },
            itemStyle: {
              color: theme.accent
            },
            areaStyle: {
              color: alpha(theme.accent, .08)
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
