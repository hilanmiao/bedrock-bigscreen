<template>
  <div class="bd-page">
    <DocsSidebar active="donut" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>图表</span><span>/</span><span>环形图</span></div>
      <header class="bd-page-head">
        <h1>环形图</h1><p>强调占比与总量，中心可以放主数值。</p>
        <div class="bd-tags"><span class="bd-tag">echarts</span><span class="bd-tag">chart</span><span class="bd-tag">donut</span></div>
      </header>
      <section class="bd-section">
        <div class="bd-section__head">环形图 / ECHARTS<span class="bd-section__meta">独立 option · 独立 resize</span></div>
        <div class="bd-stage"><div ref="chartEl" class="bd-chart-stage"></div><p class="bd-note">该页独立 import ECharts、独立 setOption 与 resize，不引用公共图表配置。</p></div>
      </section>
      <section class="bd-section"><div class="bd-section__head">用法 / OPTION<span class="bd-section__meta">页面内联</span></div><pre class="bd-code">series: [{ type: 'pie', radius: ['48%', '68%'] }]</pre></section>
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
    title: {
      text: '8.21万 GJ',
      subtext: '累计供热量',
      left: 'center',
      top: '40%',
      textStyle: {
        color: theme.text,
        fontSize: theme.fs.subhead
      },
      subtextStyle: {
        color: theme.muted,
        fontSize: theme.fs.caption
      }
    },
    legend: {
      bottom: 2,
      itemWidth: 8,
      itemHeight: 8,
      icon: 'circle',
      textStyle: {
        color: theme.muted,
        fontSize: theme.fs.caption
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['50%', '46%'],
        padAngle: 2,
        itemStyle: {
          borderColor: theme.bg,
          borderRadius: 4
        },
        label: {
          show: false
        },
        emphasis: {
          scale: true,
          scaleSize: 8,
          label: {
            show: true,
            color: theme.textStrong,
            fontSize: theme.fs.label,
            formatter: '{b}\n{d}%'
          }
        },
        data: [
          {
            name: '城北',
            value: 18642,
            itemStyle: {
              color: theme.primary
            }
          },
          {
            name: '滨江',
            value: 16284,
            itemStyle: {
              color: theme.info
            }
          },
          {
            name: '高新',
            value: 14862,
            itemStyle: {
              color: theme.accent
            }
          },
          {
            name: '东港',
            value: 12648,
            itemStyle: {
              color: theme.success
            }
          },
          {
            name: '其他',
            value: 19690,
            itemStyle: {
              color: theme.danger
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
