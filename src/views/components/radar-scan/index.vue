<template>
  <div class="bd-page">
    <DocsSidebar active="radar-scan" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>视觉增强</span><span>/</span><span>雷达扫描</span></div>
      <header class="bd-page-head"><h1>雷达扫描</h1><p>用纯 CSS 绘制扫描波束、同心刻度、目标点和中心读数。适合监控态势、设备巡检和区域扫描场景。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">radar</span><span class="bd-tag">motion</span></div></header>

      <section class="bd-section"><div class="bd-section__head">尺寸 / SIZE<span class="bd-section__meta">sm · md · lg</span></div><div class="bd-stage"><div class="bd-row">
        <div class="bd-radar bd-radar--sm">
          <div class="bd-radar__sweep"></div>
          <span class="bd-radar__blip" style="--x: 68%; --y: 38%; --d: 0s"></span>
          <span class="bd-radar__blip bd-radar__blip--warn" style="--x: 36%; --y: 62%; --d: .8s"></span>
          <div class="bd-radar__center"><span class="bd-radar__value">12</span><span class="bd-radar__label">SM</span></div>
        </div>
        <div class="bd-radar">
          <div class="bd-radar__sweep"></div>
          <span class="bd-radar__blip" style="--x: 64%; --y: 30%; --d: 0s"></span>
          <span class="bd-radar__blip bd-radar__blip--warn" style="--x: 34%; --y: 58%; --d: .6s"></span>
          <span class="bd-radar__blip bd-radar__blip--error" style="--x: 72%; --y: 70%; --d: 1.2s"></span>
          <div class="bd-radar__center"><span class="bd-radar__value">48</span><span class="bd-radar__label">MD</span></div>
        </div>
        <div class="bd-radar bd-radar--lg">
          <div class="bd-radar__sweep"></div>
          <span class="bd-radar__blip" style="--x: 60%; --y: 28%; --d: 0s"></span>
          <span class="bd-radar__blip bd-radar__blip--warn" style="--x: 32%; --y: 54%; --d: .7s"></span>
          <span class="bd-radar__blip bd-radar__blip--error" style="--x: 70%; --y: 72%; --d: 1.4s"></span>
          <span class="bd-radar__blip" style="--x: 45%; --y: 38%; --d: 1.9s"></span>
          <div class="bd-radar__center"><span class="bd-radar__value">128</span><span class="bd-radar__label">LG</span></div>
        </div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">语义色 / TONE<span class="bd-section__meta">primary · warn · error</span></div><div class="bd-stage"><div class="bd-row">
        <div class="bd-radar">
          <div class="bd-radar__sweep"></div>
          <span class="bd-radar__blip" style="--x: 66%; --y: 32%"></span>
          <div class="bd-radar__center"><span class="bd-radar__value">48</span><span class="bd-radar__label">在线</span></div>
        </div>
        <div class="bd-radar bd-radar--warn">
          <div class="bd-radar__sweep"></div>
          <span class="bd-radar__blip" style="--x: 38%; --y: 60%"></span>
          <div class="bd-radar__center"><span class="bd-radar__value">6</span><span class="bd-radar__label">预警</span></div>
        </div>
        <div class="bd-radar bd-radar--error">
          <div class="bd-radar__sweep"></div>
          <span class="bd-radar__blip" style="--x: 70%; --y: 68%"></span>
          <div class="bd-radar__center"><span class="bd-radar__value">2</span><span class="bd-radar__label">离线</span></div>
        </div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">状态 / STATE<span class="bd-section__meta">scanning · paused</span></div><div class="bd-stage"><div class="bd-row">
        <div class="bd-radar">
          <div class="bd-radar__sweep"></div>
          <span class="bd-radar__blip" style="--x: 62%; --y: 36%"></span>
          <span class="bd-radar__blip bd-radar__blip--warn" style="--x: 36%; --y: 64%; --d: .9s"></span>
          <div class="bd-radar__center"><span class="bd-radar__value">6</span><span class="bd-radar__label">扫描中</span></div>
        </div>
        <div class="bd-radar bd-radar--paused">
          <div class="bd-radar__sweep"></div>
          <span class="bd-radar__blip" style="--x: 62%; --y: 36%"></span>
          <span class="bd-radar__blip bd-radar__blip--warn" style="--x: 36%; --y: 64%"></span>
          <div class="bd-radar__center"><span class="bd-radar__value">6</span><span class="bd-radar__label">已暂停</span></div>
        </div>
      </div><p class="bd-note">扫描波束和脉冲点全部由 CSS 动画驱动；暂停态停止动画，中心读数保持可读。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-radar"&gt;
  &lt;div class="bd-radar__sweep"&gt;&lt;/div&gt;
  &lt;span class="bd-radar__blip" style="--x: 62%; --y: 36%"&gt;&lt;/span&gt;
  &lt;div class="bd-radar__center"&gt;
    &lt;span class="bd-radar__value"&gt;48&lt;/span&gt;
    &lt;span class="bd-radar__label"&gt;在线&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
