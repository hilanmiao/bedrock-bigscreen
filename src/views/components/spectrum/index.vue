<template>
  <div class="bd-page">
    <DocsSidebar active="spectrum" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>视觉增强</span><span>/</span><span>频谱柱</span></div>
      <header class="bd-page-head"><h1>频谱柱</h1><p>一组持续起伏的柱阵，用来表现信号、负荷或采样强度。柱高由数据决定，动画只做呼吸，不改变数据层级。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">spectrum</span><span class="bd-tag">motion</span></div></header>

      <section class="bd-section"><div class="bd-section__head">形态 / VARIANT<span class="bd-section__meta">solid · dotted</span></div><div class="bd-stage"><div class="bd-panel-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr))">
        <div>
          <div class="bd-label">SOLID / 实心柱</div>
          <div class="bd-spectrum"><span v-for="(h, i) in bars" :key="'solid' + i" class="bd-spectrum__bar" :style="{ '--h': h + '%', '--d': (i % 8) * -0.14 + 's' }"></span></div>
        </div>
        <div>
          <div class="bd-label">DOTTED / 点阵柱</div>
          <div class="bd-spectrum bd-spectrum--dotted"><span v-for="(h, i) in bars" :key="'dotted' + i" class="bd-spectrum__bar" :style="{ '--h': h + '%', '--d': (i % 8) * -0.14 + 's' }"></span></div>
        </div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">尺寸 / SIZE<span class="bd-section__meta">sm · md · lg</span></div><div class="bd-stage"><div class="bd-panel-grid">
        <div><div class="bd-label">SM</div><div class="bd-spectrum bd-spectrum--sm"><span v-for="(h, i) in bars" :key="'sm' + i" class="bd-spectrum__bar" :style="{ '--h': h + '%', '--d': (i % 8) * -0.14 + 's' }"></span></div></div>
        <div><div class="bd-label">MD</div><div class="bd-spectrum"><span v-for="(h, i) in bars" :key="'md' + i" class="bd-spectrum__bar" :style="{ '--h': h + '%', '--d': (i % 8) * -0.14 + 's' }"></span></div></div>
        <div><div class="bd-label">LG</div><div class="bd-spectrum bd-spectrum--lg"><span v-for="(h, i) in bars" :key="'lg' + i" class="bd-spectrum__bar" :style="{ '--h': h + '%', '--d': (i % 8) * -0.14 + 's' }"></span></div></div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">语义色 / TONE<span class="bd-section__meta">primary · warn · error</span></div><div class="bd-stage"><div class="bd-panel-grid">
        <div><div class="bd-label">PRIMARY / 正常</div><div class="bd-spectrum"><span v-for="(h, i) in bars" :key="'p' + i" class="bd-spectrum__bar" :style="{ '--h': h + '%', '--d': (i % 8) * -0.14 + 's' }"></span></div></div>
        <div><div class="bd-label">WARN / 预警</div><div class="bd-spectrum bd-spectrum--warn"><span v-for="(h, i) in bars" :key="'w' + i" class="bd-spectrum__bar" :style="{ '--h': h + '%', '--d': (i % 8) * -0.14 + 's' }"></span></div></div>
        <div><div class="bd-label">ERROR / 越限</div><div class="bd-spectrum bd-spectrum--error"><span v-for="(h, i) in bars" :key="'e' + i" class="bd-spectrum__bar" :style="{ '--h': h + '%', '--d': (i % 8) * -0.14 + 's' }"></span></div></div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">状态 / STATE<span class="bd-section__meta">live · paused</span></div><div class="bd-stage"><div class="bd-panel-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr))">
        <div><div class="bd-label">LIVE / 运行中</div><div class="bd-spectrum"><span v-for="(h, i) in bars" :key="'live' + i" class="bd-spectrum__bar" :style="{ '--h': h + '%', '--d': (i % 8) * -0.14 + 's' }"></span></div></div>
        <div><div class="bd-label">PAUSED / 暂停</div><div class="bd-spectrum bd-spectrum--paused"><span v-for="(h, i) in bars" :key="'paused' + i" class="bd-spectrum__bar" :style="{ '--h': h + '%', '--d': (i % 8) * -0.14 + 's' }"></span></div></div>
      </div><p class="bd-note">页面用 v-for 生成柱体，柱高和延迟通过内联变量传入；组件本身只有 CSS，不依赖 Vue。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-spectrum bd-spectrum--warn"&gt;
  &lt;span class="bd-spectrum__bar" style="--h: 42%; --d: 0s"&gt;&lt;/span&gt;
  &lt;span class="bd-spectrum__bar" style="--h: 68%; --d: -0.14s"&gt;&lt;/span&gt;
  ...
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
const bars = Array.from({ length: 40 }, (_, i) => 24 + Math.round(56 * Math.abs(Math.sin(i * 0.55 + 0.4))))
</script>
