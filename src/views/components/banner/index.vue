<template>
  <div class="bd-page">
    <DocsSidebar active="banner" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>告警播报</span><span>/</span><span>应急横幅</span></div>
      <header class="bd-page-head"><h1>应急横幅</h1><p>页面级应急提示。info / warn / critical 三等级，inline / stacked 两种布局，支持状态、操作与脉冲。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">banner</span><span class="bd-tag">level</span></div></header>

      <section class="bd-section"><div class="bd-section__head">等级 / LEVEL<span class="bd-section__meta">info · warn · critical</span></div><div class="bd-stage"><div class="bd-stack">
        <div class="bd-banner"><div class="bd-banner__icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 11v6M12 7.5v.5" stroke="currentColor" stroke-width="1.5"/></svg></div><div class="bd-banner__body"><span class="bd-banner__title">系统通知</span><span class="bd-banner__desc">平台将于今晚 23:00 进行例行维护。</span></div><div class="bd-banner__actions"><span class="bd-banner__action">查看详情</span></div></div>
        <div class="bd-banner bd-banner--warn"><div class="bd-banner__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 4 21 20H3z" stroke="currentColor" stroke-width="1.5"/><path d="M12 10v4M12 17v.5" stroke="currentColor" stroke-width="1.5"/></svg></div><div class="bd-banner__body"><span class="bd-banner__title">数据延迟</span><span class="bd-banner__desc">2 个站点通讯延迟超过 30 秒。</span></div><div class="bd-banner__actions"><span class="bd-banner__status">处理中</span></div></div>
        <div class="bd-banner bd-banner--critical bd-banner--pulse"><div class="bd-banner__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 4 21 20H3z" stroke="currentColor" stroke-width="1.5"/><path d="M12 10v4M12 17v.5" stroke="currentColor" stroke-width="1.5"/></svg></div><div class="bd-banner__body"><span class="bd-banner__title">一级响应</span><span class="bd-banner__desc">滨江换热站压力骤降，影响 2,860 户。</span></div><div class="bd-banner__actions"><span class="bd-banner__action">一键广播</span></div></div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">堆叠 / STACKED<span class="bd-section__meta">多行说明 + 操作</span></div><div class="bd-stage"><div class="bd-banner bd-banner--critical bd-banner--stacked"><div class="bd-banner__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 4 21 20H3z" stroke="currentColor" stroke-width="1.5"/><path d="M12 10v4M12 17v.5" stroke="currentColor" stroke-width="1.5"/></svg></div><div class="bd-banner__body"><span class="bd-banner__title">一级响应 · 滨江换热站压力骤降</span><span class="bd-banner__desc">压力由 0.46 MPa 降至 0.31 MPa，影响 3 个小区约 2,860 户，抢修一队已出发。</span></div><div class="bd-banner__actions"><span class="bd-banner__status">处置中</span><span class="bd-banner__action">查看预案</span></div></div><p class="bd-note">纯 CSS，脉冲只作用于图标；没有自写关闭逻辑。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-banner bd-banner--warn"&gt;
  &lt;div class="bd-banner__icon"&gt;...&lt;/div&gt;
  &lt;div class="bd-banner__body"&gt;
    &lt;span class="bd-banner__title"&gt;数据延迟&lt;/span&gt;
    &lt;span class="bd-banner__desc"&gt;...&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="bd-banner__actions"&gt;...&lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
