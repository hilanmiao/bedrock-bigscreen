<template>
  <div class="bd-page">
    <DocsSidebar active="video-tile" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>业务组件</span><span>/</span><span>视频监控卡</span></div>
      <header class="bd-page-head"><h1>视频监控卡</h1><p>没有真实视频流时的监控占位卡。热成像底、扫描线、HUD 与测温/流量叠层全部由 CSS 绘制，在线 / 离线两种状态。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">video</span><span class="bd-tag">offline</span></div></header>

      <section class="bd-section"><div class="bd-section__head">状态 / STATE<span class="bd-section__meta">live · offline</span></div><div class="bd-stage"><div class="bd-panel-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr))">
        <article class="bd-video">
          <div class="bd-video__scene"><div class="bd-video__top"><span class="bd-video__live">LIVE</span><span>CAM-03</span><span class="bd-video__id">1080P · 25fps</span></div><div class="bd-video__hud"><span>86.4℃</span><span>128.6 t/h</span></div></div>
          <div class="bd-video__foot"><span class="bd-video__name">滨江换热站 · 3# 机组</span><span class="bd-video__status">在线</span></div>
        </article>
        <article class="bd-video bd-video--offline">
          <div class="bd-video__scene"><div class="bd-video__top"><span class="bd-video__live">OFFLINE</span><span>CAM-07</span><span class="bd-video__id">无信号</span></div><div class="bd-video__hud"><span>212℃</span><span>0.0 t/h</span></div></div>
          <div class="bd-video__foot"><span class="bd-video__name">东港能源站 · 蒸汽母管</span><span class="bd-video__status">离线</span></div>
        </article>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;article class="bd-video"&gt;
  &lt;div class="bd-video__scene"&gt;
    &lt;div class="bd-video__top"&gt;...&lt;/div&gt;
    &lt;div class="bd-video__hud"&gt;&lt;span&gt;86.4℃&lt;/span&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="bd-video__foot"&gt;...&lt;/div&gt;
&lt;/article&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
