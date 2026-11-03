<template>
  <div class="bd-page">
    <DocsSidebar active="kpi" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>数据展示</span><span>/</span><span>指标卡</span></div>
      <header class="bd-page-head">
        <h1>指标卡</h1>
        <p>大屏核心指标卡片。支持基础、图标、环形三种布局，三档尺寸和正常 / 预警 / 异常状态。</p>
        <div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">kpi</span><span class="bd-tag">state</span></div>
      </header>

      <section class="bd-section">
        <div class="bd-section__head">布局 / LAYOUT<span class="bd-section__meta">basic · icon · ring</span></div>
        <div class="bd-stage">
          <div class="bd-panel-grid">
            <article class="bd-kpi"><div class="bd-kpi__label">在线表具</div><div class="bd-kpi__value">12,846<span class="bd-kpi__unit">台</span></div><div class="bd-kpi__delta" data-tone="good">+2.4% 较昨日</div></article>
            <article class="bd-kpi bd-kpi--icon"><div class="bd-kpi__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 18V9m5 9V5m5 13v-6m5 6V7" stroke="currentColor" stroke-width="1.6"/></svg></div><div class="bd-kpi__label">累计供热量</div><div class="bd-kpi__value">8.64<span class="bd-kpi__unit">万 GJ</span></div><div class="bd-kpi__delta" data-tone="good">+8.6% 同比</div></article>
            <article class="bd-kpi bd-kpi--ring" style="--p: 98.6"><div><div class="bd-kpi__label">设备在线率</div><div class="bd-kpi__value">98.6<span class="bd-kpi__unit">%</span></div></div><div class="bd-kpi__ring"><b>98.6</b></div></article>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">尺寸 × 状态 / SIZE × STATE<span class="bd-section__meta">sm · md · lg × normal · warn · error</span></div>
        <div class="bd-stage">
          <div class="bd-panel-grid bd-panel-grid--4">
            <article class="bd-kpi bd-kpi--sm"><div class="bd-kpi__label">SM / 在线表具</div><div class="bd-kpi__value">12,846</div></article>
            <article class="bd-kpi"><div class="bd-kpi__label">MD / 今日补水量</div><div class="bd-kpi__value">12.4<span class="bd-kpi__unit">t</span></div></article>
            <article class="bd-kpi bd-kpi--lg"><div class="bd-kpi__label">LG / 累计供热量</div><div class="bd-kpi__value">8.64<span class="bd-kpi__unit">万 GJ</span></div></article>
            <article class="bd-kpi bd-kpi--warn"><div class="bd-kpi__label">WARN / 二次压力</div><div class="bd-kpi__value">0.31<span class="bd-kpi__unit">MPa</span></div><div class="bd-kpi__delta" data-tone="bad">低于下限</div></article>
            <article class="bd-kpi bd-kpi--error"><div class="bd-kpi__label">ERROR / 通讯状态</div><div class="bd-kpi__value">离线</div><div class="bd-kpi__delta" data-tone="bad">已 7 小时</div></article>
            <article class="bd-kpi bd-kpi--muted"><div class="bd-kpi__label">MUTED / 备用表具</div><div class="bd-kpi__value">0</div></article>
          </div>
          <p class="bd-note">纯 CSS 组件，环形指标使用 conic-gradient，不引入图表库。</p>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div>
        <pre class="bd-code">&lt;article class="bd-kpi bd-kpi--warn"&gt;
  &lt;div class="bd-kpi__label"&gt;二次压力&lt;/div&gt;
  &lt;div class="bd-kpi__value"&gt;0.31&lt;span class="bd-kpi__unit"&gt;MPa&lt;/span&gt;&lt;/div&gt;
&lt;/article&gt;</pre>
      </section>
    </main>
  </div>
</template>

<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
