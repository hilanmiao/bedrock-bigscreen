<template>
  <div class="bd-page">
    <DocsSidebar active="matrix" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>数据展示</span><span>/</span><span>状态矩阵</span></div>
      <header class="bd-page-head"><h1>状态矩阵</h1><p>把多个站点的在线 / 预警 / 异常状态压成紧凑矩阵。支持 6 列 / 4 列、紧凑密度和列表模式。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">matrix</span><span class="bd-tag">status</span></div></header>

      <section class="bd-section">
        <div class="bd-section__head">列数 / COLUMNS<span class="bd-section__meta">6 列 · 4 列</span></div>
        <div class="bd-stage"><div class="bd-stack">
          <div class="bd-matrix">
            <div class="bd-matrix__cell"><span class="bd-matrix__label">城北 01</span><span class="bd-matrix__state">在线</span></div>
            <div class="bd-matrix__cell"><span class="bd-matrix__label">城北 02</span><span class="bd-matrix__state">在线</span></div>
            <div class="bd-matrix__cell bd-matrix__cell--warn"><span class="bd-matrix__label">城北 03</span><span class="bd-matrix__state">预警</span></div>
            <div class="bd-matrix__cell"><span class="bd-matrix__label">滨江 01</span><span class="bd-matrix__state">在线</span></div>
            <div class="bd-matrix__cell bd-matrix__cell--error"><span class="bd-matrix__label">滨江 02</span><span class="bd-matrix__state">离线</span></div>
            <div class="bd-matrix__cell"><span class="bd-matrix__label">滨江 03</span><span class="bd-matrix__state">在线</span></div>
            <div class="bd-matrix__cell"><span class="bd-matrix__label">高新 01</span><span class="bd-matrix__state">在线</span></div>
            <div class="bd-matrix__cell"><span class="bd-matrix__label">高新 02</span><span class="bd-matrix__state">在线</span></div>
            <div class="bd-matrix__cell"><span class="bd-matrix__label">东港 01</span><span class="bd-matrix__state">在线</span></div>
            <div class="bd-matrix__cell bd-matrix__cell--warn"><span class="bd-matrix__label">东港 02</span><span class="bd-matrix__state">预警</span></div>
            <div class="bd-matrix__cell"><span class="bd-matrix__label">西山 01</span><span class="bd-matrix__state">在线</span></div>
            <div class="bd-matrix__cell bd-matrix__cell--error"><span class="bd-matrix__label">西山 02</span><span class="bd-matrix__state">离线</span></div>
          </div>
          <div class="bd-matrix bd-matrix--4">
            <div class="bd-matrix__cell"><span class="bd-matrix__label">城北片区</span><span class="bd-matrix__state">在线 3</span></div>
            <div class="bd-matrix__cell bd-matrix__cell--warn"><span class="bd-matrix__label">滨江片区</span><span class="bd-matrix__state">预警 1</span></div>
            <div class="bd-matrix__cell"><span class="bd-matrix__label">高新片区</span><span class="bd-matrix__state">在线 2</span></div>
            <div class="bd-matrix__cell bd-matrix__cell--error"><span class="bd-matrix__label">东港片区</span><span class="bd-matrix__state">离线 1</span></div>
          </div>
        </div></div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">密度 × 布局 / DENSITY × LAYOUT<span class="bd-section__meta">compact · list</span></div>
        <div class="bd-stage"><div class="bd-panel-grid">
          <div><div class="bd-label">COMPACT / 6 列</div><div class="bd-matrix bd-matrix--compact">
            <div class="bd-matrix__cell"><span class="bd-matrix__label">01</span><span class="bd-matrix__state">在线</span></div><div class="bd-matrix__cell"><span class="bd-matrix__label">02</span><span class="bd-matrix__state">在线</span></div><div class="bd-matrix__cell bd-matrix__cell--warn"><span class="bd-matrix__label">03</span><span class="bd-matrix__state">预警</span></div><div class="bd-matrix__cell"><span class="bd-matrix__label">04</span><span class="bd-matrix__state">在线</span></div><div class="bd-matrix__cell"><span class="bd-matrix__label">05</span><span class="bd-matrix__state">在线</span></div><div class="bd-matrix__cell bd-matrix__cell--error"><span class="bd-matrix__label">06</span><span class="bd-matrix__state">离线</span></div>
          </div></div>
          <div><div class="bd-label">LIST / 列表</div><div class="bd-matrix bd-matrix--list">
            <div class="bd-matrix__cell"><span class="bd-matrix__label">城北热源站</span><span class="bd-matrix__state">在线</span></div>
            <div class="bd-matrix__cell bd-matrix__cell--warn"><span class="bd-matrix__label">滨江换热站</span><span class="bd-matrix__state">预警</span></div>
            <div class="bd-matrix__cell bd-matrix__cell--error"><span class="bd-matrix__label">老城中心站</span><span class="bd-matrix__state">离线</span></div>
            <div class="bd-matrix__cell"><span class="bd-matrix__label">高新首站</span><span class="bd-matrix__state">在线</span></div>
          </div></div>
        </div><p class="bd-note">纯 CSS，状态颜色只用于等级，不改变单元格尺寸。</p></div>
      </section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-matrix"&gt;
  &lt;div class="bd-matrix__cell"&gt;
    &lt;span class="bd-matrix__label"&gt;城北 01&lt;/span&gt;
    &lt;span class="bd-matrix__state"&gt;在线&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
