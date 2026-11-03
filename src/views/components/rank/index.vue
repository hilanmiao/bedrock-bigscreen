<template>
  <div class="bd-page">
    <DocsSidebar active="rank" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>数据展示</span><span>/</span><span>排行榜</span></div>
      <header class="bd-page-head"><h1>排行榜</h1><p>按数值排序的列表与领奖台。list / compact / podium 三种布局，前三名有独立的视觉层级。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">rank</span><span class="bd-tag">layout</span></div></header>

      <section class="bd-section">
        <div class="bd-section__head">布局 / LAYOUT<span class="bd-section__meta">list · compact · podium</span></div>
        <div class="bd-stage"><div class="bd-panel-grid">
          <div><div class="bd-label">LIST / 带占比条</div><div class="bd-rank">
            <div class="bd-rank__item"><span class="bd-rank__no">01</span><span class="bd-rank__name">城北片区</span><span class="bd-rank__value">18,642 GJ</span><span class="bd-rank__bar"><i style="--p: 100%"></i></span></div>
            <div class="bd-rank__item"><span class="bd-rank__no">02</span><span class="bd-rank__name">滨江片区</span><span class="bd-rank__value">16,284 GJ</span><span class="bd-rank__bar"><i style="--p: 87%"></i></span></div>
            <div class="bd-rank__item"><span class="bd-rank__no">03</span><span class="bd-rank__name">高新片区</span><span class="bd-rank__value">14,862 GJ</span><span class="bd-rank__bar"><i style="--p: 80%"></i></span></div>
            <div class="bd-rank__item"><span class="bd-rank__no">04</span><span class="bd-rank__name">东港片区</span><span class="bd-rank__value">12,648 GJ</span><span class="bd-rank__bar"><i style="--p: 68%"></i></span></div>
            <div class="bd-rank__item"><span class="bd-rank__no">05</span><span class="bd-rank__name">西山片区</span><span class="bd-rank__value">10,284 GJ</span><span class="bd-rank__bar"><i style="--p: 55%"></i></span></div>
          </div></div>
          <div><div class="bd-label">COMPACT / 紧凑</div><div class="bd-rank bd-rank--compact">
            <div class="bd-rank__item"><span class="bd-rank__no">01</span><span class="bd-rank__name">城北片区</span><span class="bd-rank__value">18,642</span></div>
            <div class="bd-rank__item"><span class="bd-rank__no">02</span><span class="bd-rank__name">滨江片区</span><span class="bd-rank__value">16,284</span></div>
            <div class="bd-rank__item"><span class="bd-rank__no">03</span><span class="bd-rank__name">高新片区</span><span class="bd-rank__value">14,862</span></div>
            <div class="bd-rank__item"><span class="bd-rank__no">04</span><span class="bd-rank__name">东港片区</span><span class="bd-rank__value">12,648</span></div>
          </div></div>
          <div><div class="bd-label">PODIUM / 领奖台</div><div class="bd-rank bd-rank--podium">
            <div class="bd-rank__podium"><b>1</b><span>城北</span><span>18,642</span></div>
            <div class="bd-rank__podium"><b>2</b><span>滨江</span><span>16,284</span></div>
            <div class="bd-rank__podium"><b>3</b><span>高新</span><span>14,862</span></div>
          </div></div>
        </div></div>
      </section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-rank"&gt;
  &lt;div class="bd-rank__item"&gt;
    &lt;span class="bd-rank__no"&gt;01&lt;/span&gt;
    &lt;span class="bd-rank__name"&gt;城北片区&lt;/span&gt;
    &lt;span class="bd-rank__value"&gt;18,642 GJ&lt;/span&gt;
    &lt;span class="bd-rank__bar"&gt;&lt;i style="--p: 100%"&gt;&lt;/i&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
