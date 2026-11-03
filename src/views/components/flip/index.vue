<template>
  <div class="bd-page">
    <DocsSidebar active="flip" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>数据展示</span><span>/</span><span>数字翻牌器</span></div>
      <header class="bd-page-head"><h1>数字翻牌器</h1><p>突出显示单个大数字的翻牌样式。cell / outline / plain 三种形态，三档尺寸，支持单位和增量。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">flip</span><span class="bd-tag">number</span></div></header>

      <section class="bd-section">
        <div class="bd-section__head">形态 / VARIANT<span class="bd-section__meta">cell · outline · plain</span></div>
        <div class="bd-stage"><div class="bd-flip-row">
          <div><div class="bd-label">CELL / 翻牌单元</div><div class="bd-flip"><span class="bd-flip__digit">1</span><span class="bd-flip__digit">2</span><span class="bd-flip__digit">8</span><span class="bd-flip__digit">6</span><span class="bd-flip__digit">4</span><span class="bd-flip__digit">2</span><span class="bd-flip__suffix">台</span></div><div class="bd-flip__meta">+2.4% 较昨日</div></div>
          <div><div class="bd-label">OUTLINE / 描边单元</div><div class="bd-flip bd-flip--outline"><span class="bd-flip__digit">8</span><span class="bd-flip__digit">6</span><span class="bd-flip__digit">.</span><span class="bd-flip__digit">4</span><span class="bd-flip__suffix">℃</span></div></div>
          <div><div class="bd-label">PLAIN / 无底单元</div><div class="bd-flip bd-flip--plain"><span class="bd-flip__digit">9</span><span class="bd-flip__digit">8</span><span class="bd-flip__digit">.</span><span class="bd-flip__digit">6</span><span class="bd-flip__suffix">%</span></div></div>
        </div></div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">尺寸 / SIZE<span class="bd-section__meta">sm · md · lg</span></div>
        <div class="bd-stage"><div class="bd-flip-row">
          <div><div class="bd-label">SM</div><div class="bd-flip bd-flip--sm"><span class="bd-flip__digit">9</span><span class="bd-flip__digit">8</span><span class="bd-flip__digit">.</span><span class="bd-flip__digit">6</span><span class="bd-flip__suffix">%</span></div></div>
          <div><div class="bd-label">MD</div><div class="bd-flip"><span class="bd-flip__digit">9</span><span class="bd-flip__digit">8</span><span class="bd-flip__digit">.</span><span class="bd-flip__digit">6</span><span class="bd-flip__suffix">%</span></div></div>
          <div><div class="bd-label">LG</div><div class="bd-flip bd-flip--lg"><span class="bd-flip__digit">9</span><span class="bd-flip__digit">8</span><span class="bd-flip__digit">.</span><span class="bd-flip__digit">6</span><span class="bd-flip__suffix">%</span></div></div>
        </div><p class="bd-note">纯 CSS 组合，数字按位拆成 span；不依赖动画库。</p></div>
      </section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-flip"&gt;
  &lt;span class="bd-flip__digit"&gt;1&lt;/span&gt;
  &lt;span class="bd-flip__digit"&gt;2&lt;/span&gt;
  &lt;span class="bd-flip__suffix"&gt;台&lt;/span&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
