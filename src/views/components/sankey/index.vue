<template>
  <div class="bd-page">
    <DocsSidebar active="sankey" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>图表</span><span>/</span><span>桑基流向</span></div>
      <header class="bd-page-head">
        <h1>桑基流向</h1><p>用带宽表达流量，适合热源 → 换热站 → 用户结构。</p>
        <div class="bd-tags"><span class="bd-tag">echarts</span><span class="bd-tag">chart</span><span class="bd-tag">sankey</span></div>
      </header>
      <section class="bd-section">
        <div class="bd-section__head">桑基流向 / ECHARTS<span class="bd-section__meta">独立 option · 独立 resize</span></div>
        <div class="bd-stage"><div ref="chartEl" class="bd-chart-stage"></div><p class="bd-note">该页独立 import ECharts、独立 setOption 与 resize，不引用公共图表配置。</p></div>
      </section>
      <section class="bd-section"><div class="bd-section__head">用法 / OPTION<span class="bd-section__meta">页面内联</span></div><pre class="bd-code">series: [{ type: 'sankey', data: [...], links: [...] }]</pre></section>
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
    series: [
      {
        type: 'sankey',
        left: 26,
        right: 110,
        top: 20,
        bottom: 20,
        nodeGap: 14,
        nodeWidth: 12,
        nodeAlign: 'justify',
        lineStyle: {
          color: 'gradient',
          curveness: 0.5,
          opacity: 0.24
        },
        label: {
          color: theme.text,
          fontSize: theme.fs.caption
        },
        itemStyle: {
          borderWidth: 0,
          borderRadius: 2
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            opacity: 0.5
          }
        },
        data: [
          {
            name: '城北热源',
            itemStyle: { color: theme.primary }
          },
          {
            name: '滨江换热站',
            itemStyle: { color: theme.info }
          },
          {
            name: '高新首站',
            itemStyle: { color: theme.accent }
          },
          {
            name: '居民采暖',
            itemStyle: { color: theme.success }
          },
          {
            name: '公建',
            itemStyle: { color: theme.danger }
          },
          {
            name: '工业',
            itemStyle: { color: alpha(theme.primary, .5) }
          }
        ],
        links: [
          {
            source: '城北热源',
            target: '滨江换热站',
            value: 220
          },
          {
            source: '城北热源',
            target: '高新首站',
            value: 180
          },
          {
            source: '滨江换热站',
            target: '居民采暖',
            value: 160
          },
          {
            source: '滨江换热站',
            target: '公建',
            value: 60
          },
          {
            source: '高新首站',
            target: '公建',
            value: 80
          },
          {
            source: '高新首站',
            target: '工业',
            value: 100
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
