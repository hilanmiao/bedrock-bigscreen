<template>
  <div class="bd-page">
    <DocsSidebar active="progress" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>数据展示</span><span>/</span><span>进度列表</span></div>
      <header class="bd-page-head"><h1>进度列表</h1><p>一组同量纲指标的横向进度条。支持 solid / segmented / thin 三种形态，紧凑密度与行级预警状态。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">progress</span><span class="bd-tag">density</span></div></header>

      <section class="bd-section">
        <div class="bd-section__head">形态 / VARIANT<span class="bd-section__meta">solid · segmented · thin</span></div>
        <div class="bd-stage"><div class="bd-stack">
          <div class="bd-progress">
            <div class="bd-progress__row"><span class="bd-progress__label">城北热源站负荷率</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 86%"></i></span><span class="bd-progress__value">86%</span></div>
            <div class="bd-progress__row"><span class="bd-progress__label">滨江换热站负荷率</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 74%"></i></span><span class="bd-progress__value">74%</span></div>
            <div class="bd-progress__row"><span class="bd-progress__label">东港能源站负荷率</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 51%"></i></span><span class="bd-progress__value">51%</span></div>
          </div>
          <div class="bd-progress bd-progress--segmented">
            <div class="bd-progress__row"><span class="bd-progress__label">抢修工单闭环</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 92%"></i></span><span class="bd-progress__value">92%</span></div>
            <div class="bd-progress__row"><span class="bd-progress__label">巡检计划完成</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 68%"></i></span><span class="bd-progress__value">68%</span></div>
          </div>
          <div class="bd-progress bd-progress--thin">
            <div class="bd-progress__row"><span class="bd-progress__label">日供热量目标</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 63%"></i></span><span class="bd-progress__value">63%</span></div>
            <div class="bd-progress__row"><span class="bd-progress__label">补水率控制</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 18%"></i></span><span class="bd-progress__value">18%</span></div>
          </div>
        </div></div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">密度 × 状态 / DENSITY × STATE<span class="bd-section__meta">standard · compact × normal · warn · error</span></div>
        <div class="bd-stage"><div class="bd-progress bd-progress--compact">
          <div class="bd-progress__row"><span class="bd-progress__label">在线率</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 98.6%"></i></span><span class="bd-progress__value">98.6%</span></div>
          <div class="bd-progress__row bd-progress__row--warn"><span class="bd-progress__label">二次压力</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 34%"></i></span><span class="bd-progress__value">34%</span></div>
          <div class="bd-progress__row bd-progress__row--error"><span class="bd-progress__label">通讯完整率</span><span class="bd-progress__track"><i class="bd-progress__fill" style="--p: 12%"></i></span><span class="bd-progress__value">12%</span></div>
        </div><p class="bd-note">纯 CSS，行级状态只改变填充色和数值色。</p></div>
      </section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-progress"&gt;
  &lt;div class="bd-progress__row"&gt;
    &lt;span class="bd-progress__label"&gt;负荷率&lt;/span&gt;
    &lt;span class="bd-progress__track"&gt;&lt;i class="bd-progress__fill" style="--p: 86%"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;span class="bd-progress__value"&gt;86%&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
