<template>
  <div class="bd-page">
    <DocsSidebar active="rose" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>图表</span><span>/</span><span>玫瑰图</span></div>
      <header class="bd-page-head">
        <h1>玫瑰图</h1><p>用半径和角度表达分类占比。</p>
        <div class="bd-tags"><span class="bd-tag">echarts</span><span class="bd-tag">chart</span><span class="bd-tag">rose</span></div>
      </header>
      <section class="bd-section">
        <div class="bd-section__head">玫瑰图 / ECHARTS<span class="bd-section__meta">独立 option · 独立 resize</span></div>
        <div class="bd-stage"><div ref="chartEl" class="bd-chart-stage"></div><p class="bd-note">该页独立 import ECharts、独立 setOption 与 resize，不引用公共图表配置。</p></div>
      </section>
      <section class="bd-section"><div class="bd-section__head">用法 / OPTION<span class="bd-section__meta">页面内联</span></div><pre class="bd-code">series: [{ type: 'pie', roseType: 'radius' }]</pre></section>
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
        roseType: 'radius',
        radius: ['24%', '62%'],
        center: ['50%', '46%'],
        padAngle: 1.5,
        itemStyle: {
          borderColor: theme.bg,
          borderRadius: 4
        },
        label: {
          color: theme.muted,
          fontSize: theme.fs.caption,
          formatter: '{b}\n{d}%'
        },
        labelLine: {
          length: 6,
          length2: 6,
          lineStyle: {
            color: theme.line
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
            name: '西山',
            value: 10284,
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
