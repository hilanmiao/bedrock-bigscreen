<template>
  <div class="bd-page">
    <DocsSidebar active="metric" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>数据展示</span><span>/</span><span>指标条</span></div>
      <header class="bd-page-head">
        <h1>指标条</h1>
        <p>用于顶部信息带的轻量指标。inline / stack / spark 三种布局，配合尺寸和状态使用，不抢占主图表的视觉层级。</p>
        <div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">metric</span><span class="bd-tag">density</span></div>
      </header>

      <section class="bd-section">
        <div class="bd-section__head">布局 / LAYOUT<span class="bd-section__meta">inline · stack · spark</span></div>
        <div class="bd-stage">
          <div class="bd-stack">
            <div class="bd-row">
              <div class="bd-metric bd-metric--inline"><span class="bd-metric__label">在线表具</span><div class="bd-metric__row"><span class="bd-metric__value">12,846</span><span class="bd-metric__unit">台</span></div></div>
              <div class="bd-metric bd-metric--inline"><span class="bd-metric__label">实时负荷</span><div class="bd-metric__row"><span class="bd-metric__value">72.4</span><span class="bd-metric__unit">%</span></div></div>
              <div class="bd-metric bd-metric--inline"><span class="bd-metric__label">今日补水量</span><div class="bd-metric__row"><span class="bd-metric__value">12.4</span><span class="bd-metric__unit">t</span></div></div>
            </div>
            <div class="bd-row">
              <div class="bd-metric"><span class="bd-metric__label">累计供热量</span><div class="bd-metric__row"><span class="bd-metric__value">8.64</span><span class="bd-metric__unit">万 GJ</span><span class="bd-metric__delta">+2.4%</span></div></div>
              <div class="bd-metric"><span class="bd-metric__label">累计耗电量</span><div class="bd-metric__row"><span class="bd-metric__value">2.18</span><span class="bd-metric__unit">万 kWh</span><span class="bd-metric__delta">+1.1%</span></div></div>
            </div>
            <div class="bd-row">
              <div class="bd-metric bd-metric--spark">
                <span class="bd-metric__label">近 12 小时热负荷</span>
                <div class="bd-metric__row"><span class="bd-metric__value">72.4</span><span class="bd-metric__unit">%</span></div>
                <svg class="bd-metric__spark" viewBox="0 0 92 30" fill="none"><polyline points="1,24 12,20 24,22 35,14 47,17 59,10 71,12 82,6 91,8" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="bd-metric bd-metric--spark">
                <span class="bd-metric__label">近 12 小时压力</span>
                <div class="bd-metric__row"><span class="bd-metric__value">0.46</span><span class="bd-metric__unit">MPa</span></div>
                <svg class="bd-metric__spark" viewBox="0 0 92 30" fill="none"><polyline points="1,15 12,17 24,13 35,16 47,11 59,14 71,9 82,12 91,8" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">尺寸 × 状态 / SIZE × STATE<span class="bd-section__meta">sm · md · lg × normal · warn · error</span></div>
        <div class="bd-stage">
          <div class="bd-row">
            <div class="bd-metric bd-metric--sm"><span class="bd-metric__label">SM / 在线表具</span><div class="bd-metric__row"><span class="bd-metric__value">12,846</span><span class="bd-metric__unit">台</span></div></div>
            <div class="bd-metric"><span class="bd-metric__label">MD / 在线率</span><div class="bd-metric__row"><span class="bd-metric__value">98.6</span><span class="bd-metric__unit">%</span></div></div>
            <div class="bd-metric bd-metric--lg"><span class="bd-metric__label">LG / 累计供热量</span><div class="bd-metric__row"><span class="bd-metric__value">8.64</span><span class="bd-metric__unit">万 GJ</span></div></div>
            <div class="bd-metric bd-metric--warn"><span class="bd-metric__label">WARN / 二次压力</span><div class="bd-metric__row"><span class="bd-metric__value">0.31</span><span class="bd-metric__unit">MPa</span></div></div>
            <div class="bd-metric bd-metric--error"><span class="bd-metric__label">ERROR / 通讯状态</span><div class="bd-metric__row"><span class="bd-metric__value">离线</span><span class="bd-metric__unit">7h</span></div></div>
            <div class="bd-metric bd-metric--muted"><span class="bd-metric__label">MUTED / 备用表具</span><div class="bd-metric__row"><span class="bd-metric__value">0</span><span class="bd-metric__unit">台</span></div></div>
          </div>
          <p class="bd-note">纯 CSS 组件，不依赖 Element Plus；spark 使用内联 SVG，不引入图表库。</p>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div>
        <pre class="bd-code">&lt;div class="bd-metric bd-metric--spark"&gt;
  &lt;span class="bd-metric__label"&gt;近 12 小时热负荷&lt;/span&gt;
  &lt;div class="bd-metric__row"&gt;&lt;span class="bd-metric__value"&gt;72.4&lt;/span&gt;&lt;span class="bd-metric__unit"&gt;%&lt;/span&gt;&lt;/div&gt;
  &lt;svg class="bd-metric__spark"&gt;...&lt;/svg&gt;
&lt;/div&gt;</pre>
      </section>
    </main>
  </div>
</template>

<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
