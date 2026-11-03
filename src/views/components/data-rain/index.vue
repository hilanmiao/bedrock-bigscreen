<template>
  <div class="bd-page">
    <DocsSidebar active="data-rain" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>视觉增强</span><span>/</span><span>数据雨</span></div>
      <header class="bd-page-head"><h1>数据雨</h1><p>按列下落的数据流，用遥测值而不是随机字符填充。适合作为监控页背景、数据接入状态或大屏待机画面。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">rain</span><span class="bd-tag">motion</span></div></header>

      <section class="bd-section"><div class="bd-section__head">默认 / DEFAULT<span class="bd-section__meta">10 列 · 中心焦点</span></div><div class="bd-stage">
        <div class="bd-rain bd-rain--lg">
          <div class="bd-rain__fall">
            <div v-for="(col, ci) in rainColumns" :key="'hero' + ci" class="bd-rain__col" :style="{ '--x': col.x, '--t': col.t, '--d': col.d, '--o': col.o }">
              <span v-for="(row, ri) in rainRows" :key="'hero-a' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
              <span v-for="(row, ri) in rainRows" :key="'hero-b' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
            </div>
          </div>
          <div class="bd-rain__focus"><span class="bd-rain__focus-value">48</span><span class="bd-rain__focus-label">在线节点</span></div>
        </div>
        <p class="bd-note">每列复制一份数据并在半高处归零，形成无缝循环；渐变遮罩让上下边缘自然消失。</p>
      </div></section>

      <section class="bd-section"><div class="bd-section__head">速度 / SPEED<span class="bd-section__meta">slow · fast</span></div><div class="bd-stage"><div class="bd-panel-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr))">
        <div>
          <div class="bd-label">SLOW / 1.7×</div>
          <div class="bd-rain bd-rain--sm bd-rain--slow">
            <div class="bd-rain__fall">
              <div v-for="(col, ci) in rainColumnsCompact" :key="'slow' + ci" class="bd-rain__col" :style="{ '--x': col.x, '--t': col.t, '--d': col.d, '--o': col.o }">
                <span v-for="(row, ri) in rainRows" :key="'slow-a' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
                <span v-for="(row, ri) in rainRows" :key="'slow-b' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bd-label">FAST / 0.55×</div>
          <div class="bd-rain bd-rain--sm bd-rain--fast">
            <div class="bd-rain__fall">
              <div v-for="(col, ci) in rainColumnsCompact" :key="'fast' + ci" class="bd-rain__col" :style="{ '--x': col.x, '--t': col.t, '--d': col.d, '--o': col.o }">
                <span v-for="(row, ri) in rainRows" :key="'fast-a' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
                <span v-for="(row, ri) in rainRows" :key="'fast-b' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
              </div>
            </div>
          </div>
        </div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">语义色 / TONE<span class="bd-section__meta">warn · error</span></div><div class="bd-stage"><div class="bd-panel-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr))">
        <div>
          <div class="bd-label">WARN / 预警</div>
          <div class="bd-rain bd-rain--sm bd-rain--warn">
            <div class="bd-rain__fall">
              <div v-for="(col, ci) in rainColumnsCompact" :key="'warn' + ci" class="bd-rain__col" :style="{ '--x': col.x, '--t': col.t, '--d': col.d, '--o': col.o }">
                <span v-for="(row, ri) in rainRows" :key="'warn-a' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
                <span v-for="(row, ri) in rainRows" :key="'warn-b' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bd-label">ERROR / 越限</div>
          <div class="bd-rain bd-rain--sm bd-rain--error">
            <div class="bd-rain__fall">
              <div v-for="(col, ci) in rainColumnsCompact" :key="'error' + ci" class="bd-rain__col" :style="{ '--x': col.x, '--t': col.t, '--d': col.d, '--o': col.o }">
                <span v-for="(row, ri) in rainRows" :key="'error-a' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
                <span v-for="(row, ri) in rainRows" :key="'error-b' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
              </div>
            </div>
          </div>
        </div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">状态 / STATE<span class="bd-section__meta">live · paused</span></div><div class="bd-stage"><div class="bd-panel-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr))">
        <div>
          <div class="bd-label">LIVE / 运行中</div>
          <div class="bd-rain bd-rain--sm">
            <div class="bd-rain__fall">
              <div v-for="(col, ci) in rainColumnsCompact" :key="'live' + ci" class="bd-rain__col" :style="{ '--x': col.x, '--t': col.t, '--d': col.d, '--o': col.o }">
                <span v-for="(row, ri) in rainRows" :key="'live-a' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
                <span v-for="(row, ri) in rainRows" :key="'live-b' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bd-label">PAUSED / 暂停</div>
          <div class="bd-rain bd-rain--sm bd-rain--paused">
            <div class="bd-rain__fall">
              <div v-for="(col, ci) in rainColumnsCompact" :key="'paused' + ci" class="bd-rain__col" :style="{ '--x': col.x, '--t': col.t, '--d': col.d, '--o': col.o }">
                <span v-for="(row, ri) in rainRows" :key="'paused-a' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
                <span v-for="(row, ri) in rainRows" :key="'paused-b' + ci + '-' + ri" :class="{ 'bd-rain__hot': (ri + ci) % 7 === 0 }">{{ row }}</span>
              </div>
            </div>
          </div>
        </div>
      </div><p class="bd-note">页面用 v-for 复制数据列；组件本身只有 CSS。系统开启“减少动态效果”时不再下落。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-rain"&gt;
  &lt;div class="bd-rain__fall"&gt;
    &lt;div class="bd-rain__col" style="--x: 13%; --t: 11s; --d: -3s"&gt;
      &lt;span&gt;86.4℃&lt;/span&gt;
      &lt;span class="bd-rain__hot"&gt;0.46MPa&lt;/span&gt;
      ... 复制一份数据用于无缝循环 ...
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'

const rainRows = [
  '86.4℃', '0.46MPa', '128.6t/h', '92.1%', '48 站', '7 h', '−4.2℃', '1.18%', 'ONLINE', 'OK',
  '72.4%', '0.31MPa', '6 条', '3.2℃', '112.8', '95.6%', 'WO-2048', '2,860 户', '0.52MPa', 'SCAN'
]

const rainColumns = [
  { x: '3%', t: '9s', d: '-1.2s', o: .55 },
  { x: '13%', t: '12s', d: '-4.5s', o: .32 },
  { x: '23%', t: '8s', d: '-2.2s', o: .62 },
  { x: '33%', t: '14s', d: '-7s', o: .4 },
  { x: '43%', t: '10.5s', d: '-3.6s', o: .5 },
  { x: '53%', t: '11s', d: '-6.4s', o: .36 },
  { x: '63%', t: '9.5s', d: '-1.8s', o: .58 },
  { x: '73%', t: '13s', d: '-5.2s', o: .3 },
  { x: '83%', t: '8.5s', d: '-.8s', o: .46 },
  { x: '93%', t: '12.5s', d: '-4s', o: .6 }
]

const rainColumnsCompact = rainColumns.slice(0, 6).map((col, i) => ({ ...col, x: `${4 + i * 17}%` }))
</script>
