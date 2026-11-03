<template>
  <div class="bd-page">
    <DocsSidebar active="bullet" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>数据展示</span><span>/</span><span>目标进度</span></div>
      <header class="bd-page-head"><h1>目标进度</h1><p>同时表达实际值和目标线，适合负荷率、处置率与计划完成度。solid / segmented / thin 三种形态。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">bullet</span><span class="bd-tag">target</span></div></header>

      <section class="bd-section">
        <div class="bd-section__head">形态 / VARIANT<span class="bd-section__meta">solid · segmented · thin</span></div>
        <div class="bd-stage"><div class="bd-stack">
          <div class="bd-bullet">
            <div class="bd-bullet__row"><span class="bd-bullet__label">抢修作业完成</span><span class="bd-bullet__track"><i class="bd-bullet__fill" style="--v: 68%"></i><i class="bd-bullet__target" style="--t: 88%"></i></span><span class="bd-bullet__value">68 / 88</span></div>
            <div class="bd-bullet__row"><span class="bd-bullet__label">巡检计划完成</span><span class="bd-bullet__track"><i class="bd-bullet__fill" style="--v: 92%"></i><i class="bd-bullet__target" style="--t: 90%"></i></span><span class="bd-bullet__value">92 / 90</span></div>
            <div class="bd-bullet__row bd-bullet__row--warn"><span class="bd-bullet__label">工单闭环率</span><span class="bd-bullet__track"><i class="bd-bullet__fill" style="--v: 54%"></i><i class="bd-bullet__target" style="--t: 85%"></i></span><span class="bd-bullet__value">54 / 85</span></div>
          </div>
          <div class="bd-bullet bd-bullet--segmented">
            <div class="bd-bullet__row"><span class="bd-bullet__label">日供热量</span><span class="bd-bullet__track"><i class="bd-bullet__fill" style="--v: 76%"></i><i class="bd-bullet__target" style="--t: 82%"></i></span><span class="bd-bullet__value">76 / 82</span></div>
            <div class="bd-bullet__row"><span class="bd-bullet__label">补水量控制</span><span class="bd-bullet__track"><i class="bd-bullet__fill" style="--v: 32%"></i><i class="bd-bullet__target" style="--t: 40%"></i></span><span class="bd-bullet__value">32 / 40</span></div>
          </div>
          <div class="bd-bullet bd-bullet--thin">
            <div class="bd-bullet__row"><span class="bd-bullet__label">设备可用率</span><span class="bd-bullet__track"><i class="bd-bullet__fill" style="--v: 98%"></i><i class="bd-bullet__target" style="--t: 97%"></i></span><span class="bd-bullet__value">98 / 97</span></div>
          </div>
        </div></div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">密度 × 状态 / DENSITY × STATE<span class="bd-section__meta">compact × normal · warn · error</span></div>
        <div class="bd-stage"><div class="bd-bullet bd-bullet--compact">
          <div class="bd-bullet__row"><span class="bd-bullet__label">在线率</span><span class="bd-bullet__track"><i class="bd-bullet__fill" style="--v: 98.6%"></i><i class="bd-bullet__target" style="--t: 99%"></i></span><span class="bd-bullet__value">98.6 / 99</span></div>
          <div class="bd-bullet__row bd-bullet__row--warn"><span class="bd-bullet__label">压力达标率</span><span class="bd-bullet__track"><i class="bd-bullet__fill" style="--v: 84%"></i><i class="bd-bullet__target" style="--t: 95%"></i></span><span class="bd-bullet__value">84 / 95</span></div>
          <div class="bd-bullet__row bd-bullet__row--error"><span class="bd-bullet__label">通讯完整率</span><span class="bd-bullet__track"><i class="bd-bullet__fill" style="--v: 46%"></i><i class="bd-bullet__target" style="--t: 98%"></i></span><span class="bd-bullet__value">46 / 98</span></div>
        </div><p class="bd-note">纯 CSS，白色目标线独立于填充，不随实际值缩放。</p></div>
      </section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-bullet__row"&gt;
  &lt;span class="bd-bullet__label"&gt;抢修作业完成&lt;/span&gt;
  &lt;span class="bd-bullet__track"&gt;
    &lt;i class="bd-bullet__fill" style="--v: 68%"&gt;&lt;/i&gt;
    &lt;i class="bd-bullet__target" style="--t: 88%"&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;span class="bd-bullet__value"&gt;68 / 88&lt;/span&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
