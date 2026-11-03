<template>
  <div class="bd-page">
    <DocsSidebar active="device" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>数据展示</span><span>/</span><span>设备卡片</span></div>
      <header class="bd-page-head"><h1>设备卡片</h1><p>站点与机组的设备摘要。card / compact 两种布局，支持在线、预警、离线状态与三列实时参数。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">device</span><span class="bd-tag">status</span></div></header>

      <section class="bd-section">
        <div class="bd-section__head">布局 / LAYOUT<span class="bd-section__meta">card · compact</span></div>
        <div class="bd-stage"><div class="bd-panel-grid">
          <article class="bd-device"><div class="bd-device__top"><div class="bd-device__icon"><svg viewBox="0 0 24 24" fill="none"><rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M9 8h6M9 12h6" stroke="currentColor" stroke-width="1.5"/></svg></div><div><div class="bd-device__name">滨江换热站 · 3# 机组</div><div class="bd-device__sub">STM-03-118 · 滨江路 118 号</div></div><span class="bd-device__status">运行中</span></div><div class="bd-device__metrics"><div><span>供水温度</span><b>86.4℃</b></div><div><span>二次压力</span><b>0.46 MPa</b></div><div><span>瞬时流量</span><b>128.6 t/h</b></div></div></article>
          <article class="bd-device bd-device--warn"><div class="bd-device__top"><div class="bd-device__icon"><svg viewBox="0 0 24 24" fill="none"><rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M9 8h6M9 12h6" stroke="currentColor" stroke-width="1.5"/></svg></div><div><div class="bd-device__name">城北热源站 · 循环泵</div><div class="bd-device__sub">CP-03 · 一号泵房</div></div><span class="bd-device__status">预警</span></div><div class="bd-device__metrics"><div><span>振动值</span><b>4.8 mm/s</b></div><div><span>频率</span><b>42 Hz</b></div><div><span>电流</span><b>18.6 A</b></div></div></article>
          <article class="bd-device bd-device--compact"><div class="bd-device__top"><div class="bd-device__icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v4l2.5 2" stroke="currentColor" stroke-width="1.5"/></svg></div><div><div class="bd-device__name">老城中心站 · 流量计</div><div class="bd-device__sub">FT-07</div></div><span class="bd-device__status">离线</span></div></article>
        </div></div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">状态 / STATE<span class="bd-section__meta">normal · warn · error</span></div>
        <div class="bd-stage"><div class="bd-row">
          <article class="bd-device bd-device--compact" style="width: 260px"><div class="bd-device__top"><div class="bd-device__icon"><svg viewBox="0 0 24 24" fill="none"><rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/></svg></div><div><div class="bd-device__name">城北站 · 在线</div><div class="bd-device__sub">CP-01</div></div><span class="bd-device__status">在线</span></div></article>
          <article class="bd-device bd-device--compact bd-device--warn" style="width: 260px"><div class="bd-device__top"><div class="bd-device__icon"><svg viewBox="0 0 24 24" fill="none"><rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/></svg></div><div><div class="bd-device__name">滨江站 · 预警</div><div class="bd-device__sub">CP-02</div></div><span class="bd-device__status">预警</span></div></article>
          <article class="bd-device bd-device--compact bd-device--error" style="width: 260px"><div class="bd-device__top"><div class="bd-device__icon"><svg viewBox="0 0 24 24" fill="none"><rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/></svg></div><div><div class="bd-device__name">老城站 · 离线</div><div class="bd-device__sub">CP-03</div></div><span class="bd-device__status">离线</span></div></article>
        </div><p class="bd-note">纯 CSS，状态只改变指示点；compact 布局只保留身份和状态。</p></div>
      </section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;article class="bd-device bd-device--warn"&gt;
  &lt;div class="bd-device__top"&gt;
    &lt;div class="bd-device__icon"&gt;...&lt;/div&gt;
    &lt;div&gt;&lt;div class="bd-device__name"&gt;城北热源站 · 循环泵&lt;/div&gt;&lt;div class="bd-device__sub"&gt;CP-03&lt;/div&gt;&lt;/div&gt;
    &lt;span class="bd-device__status"&gt;预警&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="bd-device__metrics"&gt;...&lt;/div&gt;
&lt;/article&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
