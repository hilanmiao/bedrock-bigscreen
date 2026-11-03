<template>
  <div class="bd-page">
    <DocsSidebar active="pulse-wave" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>视觉增强</span><span>/</span><span>脉冲波</span></div>
      <header class="bd-page-head"><h1>脉冲波</h1><p>一段沿折线行进的高亮光段，用 SVG 路径和 CSS 动画绘制。适合设备心跳、通讯质量、压力波动等连续信号。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">svg</span><span class="bd-tag">pulse</span></div></header>

      <section class="bd-section"><div class="bd-section__head">背景 / BACKDROP<span class="bd-section__meta">grid · plain</span></div><div class="bd-stage"><div class="bd-panel-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr))">
        <div>
          <div class="bd-label">GRID / 网格背景</div>
          <div class="bd-pulse">
            <svg class="bd-pulse__chart" viewBox="0 0 320 96" preserveAspectRatio="none">
              <path class="bd-pulse__track" :d="pulsePath" pathLength="100" />
              <path class="bd-pulse__beam" :d="pulsePath" pathLength="100" />
            </svg>
            <div class="bd-pulse__meta"><b>86.4</b>℃ · 72 bpm</div>
          </div>
        </div>
        <div>
          <div class="bd-label">PLAIN / 无网格</div>
          <div class="bd-pulse bd-pulse--plain">
            <svg class="bd-pulse__chart" viewBox="0 0 320 96" preserveAspectRatio="none">
              <path class="bd-pulse__track" :d="pulsePath" pathLength="100" />
              <path class="bd-pulse__beam" :d="pulsePath" pathLength="100" />
            </svg>
            <div class="bd-pulse__meta"><b>72</b>bpm</div>
          </div>
        </div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">尺寸 / SIZE<span class="bd-section__meta">sm · md · lg</span></div><div class="bd-stage"><div class="bd-panel-grid">
        <div><div class="bd-label">SM</div><div class="bd-pulse bd-pulse--sm"><svg class="bd-pulse__chart" viewBox="0 0 320 96" preserveAspectRatio="none"><path class="bd-pulse__track" :d="pulsePath" pathLength="100" /><path class="bd-pulse__beam" :d="pulsePath" pathLength="100" /></svg></div></div>
        <div><div class="bd-label">MD</div><div class="bd-pulse"><svg class="bd-pulse__chart" viewBox="0 0 320 96" preserveAspectRatio="none"><path class="bd-pulse__track" :d="pulsePath" pathLength="100" /><path class="bd-pulse__beam" :d="pulsePath" pathLength="100" /></svg></div></div>
        <div><div class="bd-label">LG</div><div class="bd-pulse bd-pulse--lg"><svg class="bd-pulse__chart" viewBox="0 0 320 96" preserveAspectRatio="none"><path class="bd-pulse__track" :d="pulsePath" pathLength="100" /><path class="bd-pulse__beam" :d="pulsePath" pathLength="100" /></svg></div></div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">语义色 / TONE<span class="bd-section__meta">primary · warn · error</span></div><div class="bd-stage"><div class="bd-panel-grid">
        <div><div class="bd-label">PRIMARY / 正常</div><div class="bd-pulse"><svg class="bd-pulse__chart" viewBox="0 0 320 96" preserveAspectRatio="none"><path class="bd-pulse__track" :d="pulsePath" pathLength="100" /><path class="bd-pulse__beam" :d="pulsePath" pathLength="100" /></svg></div></div>
        <div><div class="bd-label">WARN / 预警</div><div class="bd-pulse bd-pulse--warn"><svg class="bd-pulse__chart" viewBox="0 0 320 96" preserveAspectRatio="none"><path class="bd-pulse__track" :d="pulsePath" pathLength="100" /><path class="bd-pulse__beam" :d="pulsePath" pathLength="100" /></svg></div></div>
        <div><div class="bd-label">ERROR / 越限</div><div class="bd-pulse bd-pulse--error"><svg class="bd-pulse__chart" viewBox="0 0 320 96" preserveAspectRatio="none"><path class="bd-pulse__track" :d="pulsePath" pathLength="100" /><path class="bd-pulse__beam" :d="pulsePath" pathLength="100" /></svg></div></div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">状态 / STATE<span class="bd-section__meta">running · paused</span></div><div class="bd-stage"><div class="bd-panel-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr))">
        <div><div class="bd-label">RUNNING / 运行中</div><div class="bd-pulse bd-pulse--lg"><svg class="bd-pulse__chart" viewBox="0 0 320 96" preserveAspectRatio="none"><path class="bd-pulse__track" :d="pulsePath" pathLength="100" /><path class="bd-pulse__beam" :d="pulsePath" pathLength="100" /></svg><div class="bd-pulse__meta"><b>86.4</b>℃</div></div></div>
        <div><div class="bd-label">PAUSED / 暂停</div><div class="bd-pulse bd-pulse--lg bd-pulse--paused"><svg class="bd-pulse__chart" viewBox="0 0 320 96" preserveAspectRatio="none"><path class="bd-pulse__track" :d="pulsePath" pathLength="100" /><path class="bd-pulse__beam" :d="pulsePath" pathLength="100" /></svg><div class="bd-pulse__meta"><b>86.4</b>℃</div></div></div>
      </div><p class="bd-note">光段沿 pathLength 标准化后的路径循环；暂停只停动画，折线和数值保持可读。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS + SVG</span></div><pre class="bd-code">&lt;div class="bd-pulse bd-pulse--warn"&gt;
  &lt;svg class="bd-pulse__chart" viewBox="0 0 320 96" preserveAspectRatio="none"&gt;
    &lt;path class="bd-pulse__track" d="M0 58 H36 L44 40 L52 76 L60 16 L68 58 H320" pathLength="100" /&gt;
    &lt;path class="bd-pulse__beam" d="M0 58 H36 L44 40 L52 76 L60 16 L68 58 H320" pathLength="100" /&gt;
  &lt;/svg&gt;
  &lt;div class="bd-pulse__meta"&gt;&lt;b&gt;86.4&lt;/b&gt;℃&lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
const pulsePath = 'M0 58 H30 L38 58 L44 42 L50 74 L58 16 L66 58 H104 L112 58 L118 46 L124 68 L132 30 L140 58 H178 L186 58 L193 40 L200 78 L208 12 L216 58 H254 L262 58 L268 46 L274 68 L282 34 L290 58 H320'
</script>
