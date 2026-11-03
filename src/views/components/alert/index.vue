<template>
  <div class="bd-page">
    <DocsSidebar active="alert" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>告警播报</span><span>/</span><span>告警流</span></div>
      <header class="bd-page-head"><h1>告警流</h1><p>按时间滚动的告警与恢复记录。列表 / 紧凑 / 卡片三种布局，等级色只表达事件语义。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">alert</span><span class="bd-tag">state</span></div></header>

      <section class="bd-section"><div class="bd-section__head">列表 / LIST<span class="bd-section__meta">时间 · 等级 · 内容 · 状态</span></div><div class="bd-stage"><div class="bd-alert">
        <div class="bd-alert__row bd-alert__row--error"><span class="bd-alert__time">09:42</span><span class="bd-alert__tag">告警</span><span class="bd-alert__text">滨江换热站二次网压力低于下限 0.32 MPa</span><span class="bd-alert__meta">2 分钟前</span></div>
        <div class="bd-alert__row"><span class="bd-alert__time">09:36</span><span class="bd-alert__tag">预警</span><span class="bd-alert__text">城北热源站 3# 循环泵振动偏高</span><span class="bd-alert__meta">8 分钟前</span></div>
        <div class="bd-alert__row"><span class="bd-alert__time">09:28</span><span class="bd-alert__tag">通知</span><span class="bd-alert__text">高新首站完成今日第 4 轮远程抄表</span><span class="bd-alert__meta">16 分钟前</span></div>
        <div class="bd-alert__row bd-alert__row--success"><span class="bd-alert__time">09:12</span><span class="bd-alert__tag">恢复</span><span class="bd-alert__text">东港能源站通讯已恢复</span><span class="bd-alert__meta">32 分钟前</span></div>
        <div class="bd-alert__row"><span class="bd-alert__time">08:56</span><span class="bd-alert__tag">通知</span><span class="bd-alert__text">夜间节能工况已切换</span><span class="bd-alert__meta">48 分钟前</span></div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">紧凑 / 卡片<span class="bd-section__meta">compact · card</span></div><div class="bd-stage"><div class="bd-panel-grid">
        <div><div class="bd-label">COMPACT</div><div class="bd-alert bd-alert--compact">
          <div class="bd-alert__row bd-alert__row--error"><span class="bd-alert__time">09:42</span><span class="bd-alert__tag">告警</span><span class="bd-alert__text">滨江换热站压力低于下限</span></div>
          <div class="bd-alert__row"><span class="bd-alert__time">09:36</span><span class="bd-alert__tag">预警</span><span class="bd-alert__text">循环泵振动偏高</span></div>
          <div class="bd-alert__row bd-alert__row--success"><span class="bd-alert__time">09:12</span><span class="bd-alert__tag">恢复</span><span class="bd-alert__text">东港能源站通讯恢复</span></div>
        </div></div>
        <div style="grid-column: span 2"><div class="bd-label">CARD</div><div class="bd-alert bd-alert--card">
          <div class="bd-alert__card bd-alert__card--error"><b>二次网压力骤降</b><span>滨江换热站 · 3 个小区 · 2,860 户</span></div>
          <div class="bd-alert__card"><b>循环泵振动偏高</b><span>城北热源站 · CP-03 · 4.8 mm/s</span></div>
          <div class="bd-alert__card"><b>流量计断流</b><span>东港能源站 · FT-07 · 已派单</span></div>
          <div class="bd-alert__card bd-alert__card--success"><b>通讯恢复</b><span>老城中心站 · 09:12</span></div>
        </div></div>
      </div><p class="bd-note">纯 CSS，不带自动滚动；需要滚动时在容器上加 CSS 动画或按项目接入虚拟列表。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-alert"&gt;
  &lt;div class="bd-alert__row bd-alert__row--error"&gt;
    &lt;span class="bd-alert__time"&gt;09:42&lt;/span&gt;
    &lt;span class="bd-alert__tag"&gt;告警&lt;/span&gt;
    &lt;span class="bd-alert__text"&gt;...&lt;/span&gt;
    &lt;span class="bd-alert__meta"&gt;2 分钟前&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
