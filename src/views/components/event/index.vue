<template>
  <div class="bd-page">
    <DocsSidebar active="event" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>告警播报</span><span>/</span><span>事件卡片</span></div>
      <header class="bd-page-head"><h1>事件卡片</h1><p>分级事件摘要卡。四等级 × card / compact 两种布局 × active / handled 状态。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">event</span><span class="bd-tag">state</span></div></header>

      <section class="bd-section"><div class="bd-section__head">等级 / LEVEL<span class="bd-section__meta">info · warn · error · success</span></div><div class="bd-stage"><div class="bd-panel-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr))">
        <article class="bd-event"><div class="bd-event__top"><span class="bd-event__tag">通知</span><span class="bd-event__time">09:12</span></div><div class="bd-event__title">今日抄表任务已完成</div><div class="bd-event__desc">城北片区 12,846 只表具全部回传，数据完整率 100%。</div><div class="bd-event__foot"><span>任务：MR-20261028</span><span>查看 →</span></div></article>
        <article class="bd-event bd-event--warn"><div class="bd-event__top"><span class="bd-event__tag">预警</span><span class="bd-event__time">09:36</span></div><div class="bd-event__title">城北热源站 3# 循环泵振动偏高</div><div class="bd-event__desc">振动值 4.8 mm/s，接近预警阈值 5.0 mm/s。</div><div class="bd-event__foot"><span>设备：CP-03</span><span>查看 →</span></div></article>
        <article class="bd-event bd-event--error"><div class="bd-event__top"><span class="bd-event__tag">告警</span><span class="bd-event__time">09:42</span></div><div class="bd-event__title">滨江换热站二次网压力骤降</div><div class="bd-event__desc">压力由 0.46 MPa 降至 0.31 MPa，疑似补偿器泄漏。</div><div class="bd-event__foot"><span>影响：3 个小区 · 2,860 户</span><span>处置 →</span></div></article>
        <article class="bd-event bd-event--success"><div class="bd-event__top"><span class="bd-event__tag">恢复</span><span class="bd-event__time">09:58</span></div><div class="bd-event__title">东港能源站通讯已恢复</div><div class="bd-event__desc">断流持续 7 分钟后自动恢复，累计影响 12.4 GJ。</div><div class="bd-event__foot"><span>设备：FT-07</span><span>记录 →</span></div></article>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">紧凑 × 状态 / COMPACT × STATE<span class="bd-section__meta">compact · handled</span></div><div class="bd-stage"><div class="bd-stack">
        <article class="bd-event bd-event--compact bd-event--warn"><span class="bd-event__tag">预警</span><span class="bd-event__title">循环泵振动偏高 · CP-03</span><span class="bd-event__time">09:36</span></article>
        <article class="bd-event bd-event--compact bd-event--error"><span class="bd-event__tag">告警</span><span class="bd-event__title">二次网压力骤降 · 滨江换热站</span><span class="bd-event__time">09:42</span></article>
        <article class="bd-event bd-event--compact bd-event--success bd-event--handled"><span class="bd-event__tag">已处置</span><span class="bd-event__title">通讯恢复 · 东港能源站</span><span class="bd-event__time">09:58</span></article>
      </div><p class="bd-note">纯 CSS，handled 状态变绿条并降低透明度，不改变等级标签。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;article class="bd-event bd-event--warn"&gt;
  &lt;div class="bd-event__top"&gt;&lt;span class="bd-event__tag"&gt;预警&lt;/span&gt;&lt;span class="bd-event__time"&gt;09:36&lt;/span&gt;&lt;/div&gt;
  &lt;div class="bd-event__title"&gt;...&lt;/div&gt;
  &lt;div class="bd-event__desc"&gt;...&lt;/div&gt;
&lt;/article&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
