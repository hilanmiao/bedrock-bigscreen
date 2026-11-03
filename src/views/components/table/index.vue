<template>
  <div class="bd-page">
    <DocsSidebar active="table" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>数据展示</span><span>/</span><span>数据表格</span></div>
      <header class="bd-page-head"><h1>数据表格</h1><p>基于 ElTable。斑马纹、尺寸、选择列和固定高度由 EP 负责；自动滚动用页面本地定时器；Bedrock 只覆盖表头、行高、状态色和数字字体。</p><div class="bd-tags"><span class="bd-tag">el-table</span><span class="bd-tag">selection</span><span class="bd-tag">auto-scroll</span></div></header>

      <section class="bd-section"><div class="bd-section__head">状态列 / STATUS CELLS<span class="bd-section__meta">斑马纹 · 选择列 · 固定高度</span></div><div class="bd-stage">
        <el-table :data="rows" class="bd-table" height="300" stripe>
          <el-table-column type="selection" width="42" />
          <el-table-column prop="site" label="站点" min-width="130" />
          <el-table-column prop="device" label="设备" min-width="120" />
          <el-table-column label="供水温度" width="110"><template #default="{ row }"><span class="bd-table__num">{{ row.temp }}℃</span></template></el-table-column>
          <el-table-column label="二次压力" width="110"><template #default="{ row }"><span class="bd-table__num">{{ row.pressure }} MPa</span></template></el-table-column>
          <el-table-column label="状态" width="96"><template #default="{ row }"><span class="bd-table__status" :class="{ 'bd-table__status--warn': row.state === 'warn', 'bd-table__status--error': row.state === 'error' }">{{ row.status }}</span></template></el-table-column>
          <el-table-column prop="updated" label="更新时间" width="92" />
        </el-table>
      </div></section>

      <section class="bd-section"><div class="bd-section__head">自动滚动 / AUTO SCROLL<span class="bd-section__meta">无缝循环 · 悬停暂停</span></div><div class="bd-stage">
        <div @mouseenter="autoPaused = true" @mouseleave="autoPaused = false">
          <div class="bd-row">
            <span class="bd-tag">{{ autoPaused ? '已暂停' : '滚动中' }}</span>
            <span class="bd-note">数据复制一份后循环滚动；鼠标移入暂停，移出继续。</span>
          </div>
          <el-table ref="autoTable" :data="autoRows" class="bd-table bd-table--auto" height="260" stripe>
            <el-table-column prop="site" label="站点" min-width="130" />
            <el-table-column prop="device" label="设备" min-width="110" />
            <el-table-column label="供水温度" width="110"><template #default="{ row }"><span class="bd-table__num">{{ row.temp }}℃</span></template></el-table-column>
            <el-table-column label="二次压力" width="110"><template #default="{ row }"><span class="bd-table__num">{{ row.pressure }} MPa</span></template></el-table-column>
            <el-table-column label="状态" width="96"><template #default="{ row }"><span class="bd-table__status" :class="{ 'bd-table__status--warn': row.state === 'warn', 'bd-table__status--error': row.state === 'error' }">{{ row.status }}</span></template></el-table-column>
            <el-table-column prop="updated" label="更新时间" width="92" />
          </el-table>
        </div>
        <p class="bd-note">滚动目标是 EP 表格内部的 .el-scrollbar__wrap；滚到数据一半时归零，视觉上无缝衔接。系统开启“减少动态效果”时不启动。</p>
        <pre class="bd-code">const wrap = tableRef.value.$el.querySelector('.el-table__body-wrapper .el-scrollbar__wrap')
const half = wrap.scrollHeight / 2
let last = performance.now()
setInterval(() => {
  const now = performance.now()
  const dt = Math.min(now - last, 64)
  last = now
  wrap.scrollTop = (wrap.scrollTop + 26 * dt / 1000) % half
}, 30)</pre>
      </div></section>

      <section class="bd-section"><div class="bd-section__head">紧凑 / COMPACT<span class="bd-section__meta">size=small · 无选择列</span></div><div class="bd-stage">
        <el-table :data="rows.slice(0, 5)" class="bd-table" size="small">
          <el-table-column prop="site" label="站点" />
          <el-table-column prop="device" label="设备" />
          <el-table-column label="压力" width="100"><template #default="{ row }"><span class="bd-table__num">{{ row.pressure }}</span></template></el-table-column>
          <el-table-column label="状态" width="90"><template #default="{ row }"><span class="bd-table__status" :class="{ 'bd-table__status--error': row.state === 'error' }">{{ row.status }}</span></template></el-table-column>
        </el-table>
        <p class="bd-note">紧凑表格数据量少，不启用自动滚动；需要时参考上方示例。</p>
      </div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">EP props</span></div><pre class="bd-code">&lt;el-table :data="rows" class="bd-table" height="300" stripe&gt;
  &lt;el-table-column type="selection" width="42" /&gt;
  &lt;el-table-column prop="site" label="站点" /&gt;
&lt;/el-table&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'

const rows = [
  { site: '城北热源站', device: 'CP-01', temp: '92.1', pressure: '0.52', state: 'ok', status: '在线', updated: '09:42' },
  { site: '滨江换热站', device: 'STM-03', temp: '86.4', pressure: '0.46', state: 'ok', status: '在线', updated: '09:42' },
  { site: '东港能源站', device: 'FT-07', temp: '212', pressure: '0.31', state: 'warn', status: '预警', updated: '09:41' },
  { site: '老城中心站', device: 'FT-02', temp: '—', pressure: '—', state: 'error', status: '离线', updated: '02:14' },
  { site: '高新首站', device: 'CP-05', temp: '88.6', pressure: '0.48', state: 'ok', status: '在线', updated: '09:42' },
  { site: '西山调压站', device: 'PR-04', temp: '74.8', pressure: '0.42', state: 'ok', status: '在线', updated: '09:40' }
]

const autoSource = [
  ...rows,
  { site: '南湖换热站', device: 'HE-02', temp: '81.2', pressure: '0.44', state: 'ok', status: '在线', updated: '09:39' },
  { site: '北岸换热站', device: 'HE-05', temp: '79.6', pressure: '0.41', state: 'ok', status: '在线', updated: '09:39' },
  { site: '西城能源站', device: 'STM-01', temp: '198', pressure: '0.28', state: 'warn', status: '预警', updated: '09:38' },
  { site: '东城首站', device: 'CP-08', temp: '90.4', pressure: '0.51', state: 'ok', status: '在线', updated: '09:40' },
  { site: '江南调压站', device: 'PR-07', temp: '76.1', pressure: '0.43', state: 'ok', status: '在线', updated: '09:38' },
  { site: '北城能源站', device: 'FT-09', temp: '—', pressure: '—', state: 'error', status: '离线', updated: '04:06' },
  { site: '湖滨换热站', device: 'HE-08', temp: '83.7', pressure: '0.45', state: 'ok', status: '在线', updated: '09:41' },
  { site: '新城中心站', device: 'CP-11', temp: '91.8', pressure: '0.5', state: 'ok', status: '在线', updated: '09:42' }
]
const autoRows = [...autoSource, ...autoSource]

const autoTable = ref(null)
const autoPaused = ref(false)
let timerId = 0
let lastTime = 0
const AUTO_SCROLL_SPEED = 26

function getAutoScroller() {
  return autoTable.value?.$el.querySelector('.el-table__body-wrapper .el-scrollbar__wrap')
}

function step() {
  const now = performance.now()
  const wrap = getAutoScroller()
  if (!wrap) return
  if (!lastTime) lastTime = now
  const delta = Math.min(now - lastTime, 64)
  lastTime = now
  if (autoPaused.value) return
  const half = wrap.scrollHeight / 2
  if (half <= wrap.clientHeight) return
  let next = wrap.scrollTop + (AUTO_SCROLL_SPEED * delta) / 1000
  if (next >= half) next %= half
  wrap.scrollTop = next
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  nextTick(() => {
    timerId = window.setInterval(step, 30)
  })
})

onBeforeUnmount(() => clearInterval(timerId))
</script>
