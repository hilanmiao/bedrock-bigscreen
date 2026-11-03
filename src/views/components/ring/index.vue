<template>
  <div class="bd-page">
    <DocsSidebar active="ring" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>数据展示</span><span>/</span><span>环形进度</span></div>
      <header class="bd-page-head"><h1>环形进度</h1><p>用环形长度表达百分比。solid / thin 两种环宽，三档尺寸和正常 / 预警 / 异常状态。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">ring</span><span class="bd-tag">state</span></div></header>

      <section class="bd-section">
        <div class="bd-section__head">形态 / VARIANT<span class="bd-section__meta">solid · thin</span></div>
        <div class="bd-stage"><div class="bd-ring-row">
          <div class="bd-ring" style="--p: 98.6"><div class="bd-ring__content"><div class="bd-ring__value">98.6%</div><div class="bd-ring__label">设备在线率</div></div></div>
          <div class="bd-ring bd-ring--thin" style="--p: 74"><div class="bd-ring__content"><div class="bd-ring__value">74%</div><div class="bd-ring__label">负荷率</div></div></div>
          <div class="bd-ring bd-ring--thin" style="--p: 42"><div class="bd-ring__content"><div class="bd-ring__value">42%</div><div class="bd-ring__label">补水率</div></div></div>
        </div></div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">尺寸 × 状态 / SIZE × STATE<span class="bd-section__meta">sm · md · lg × normal · warn · error</span></div>
        <div class="bd-stage"><div class="bd-ring-row">
          <div class="bd-ring bd-ring--sm" style="--p: 82"><div class="bd-ring__content"><div class="bd-ring__value">82%</div><div class="bd-ring__label">SM</div></div></div>
          <div class="bd-ring" style="--p: 86"><div class="bd-ring__content"><div class="bd-ring__value">86%</div><div class="bd-ring__label">MD</div></div></div>
          <div class="bd-ring bd-ring--lg" style="--p: 92"><div class="bd-ring__content"><div class="bd-ring__value">92%</div><div class="bd-ring__label">LG</div></div></div>
          <div class="bd-ring bd-ring--warn" style="--p: 34"><div class="bd-ring__content"><div class="bd-ring__value">34%</div><div class="bd-ring__label">WARN</div></div></div>
          <div class="bd-ring bd-ring--error" style="--p: 12"><div class="bd-ring__content"><div class="bd-ring__value">12%</div><div class="bd-ring__label">ERROR</div></div></div>
        </div><p class="bd-note">纯 CSS，使用 conic-gradient，不依赖图表库。</p></div>
      </section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-ring" style="--p: 98.6"&gt;
  &lt;div class="bd-ring__content"&gt;
    &lt;div class="bd-ring__value"&gt;98.6%&lt;/div&gt;
    &lt;div class="bd-ring__label"&gt;设备在线率&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
