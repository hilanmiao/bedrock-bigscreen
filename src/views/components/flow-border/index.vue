<template>
  <div class="bd-page">
    <DocsSidebar active="flow-border" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>视觉增强</span><span>/</span><span>流光边框</span></div>
      <header class="bd-page-head"><h1>流光边框</h1><p>沿容器边缘循环流动的高光边框。用于强调重点区域、实时监测面板或当前选中模块，内容区仍保持低干扰。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">border</span><span class="bd-tag">motion</span></div></header>

      <section class="bd-section"><div class="bd-section__head">默认 / DEFAULT<span class="bd-section__meta">4.2s 循环</span></div><div class="bd-stage"><div class="bd-stack">
        <article class="bd-flow">
          <div class="bd-flow__body">
            <div class="bd-flow__head"><span class="bd-flow__dot"></span><span class="bd-flow__title">滨江换热站 · 3# 机组</span><span class="bd-flow__meta">实时</span></div>
            <div class="bd-flow__value">86.4<small>℃</small></div>
            <p class="bd-flow__desc">二次压力 0.46 MPa，循环流量 128.6 t/h，当前处于稳定运行区间。</p>
          </div>
        </article>
        <p class="bd-note">光带由 conic-gradient 与 mask 绘制，不增加额外 DOM；内容区不参与动画。</p>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">速度 / SPEED<span class="bd-section__meta">slow · normal · fast</span></div><div class="bd-stage"><div class="bd-panel-grid">
        <article class="bd-flow bd-flow--slow">
          <div class="bd-flow__body">
            <div class="bd-flow__head"><span class="bd-flow__dot"></span><span class="bd-flow__title">缓慢</span><span class="bd-flow__meta">7s</span></div>
            <p class="bd-flow__desc">适合背景型容器或长时间驻留的重点区域。</p>
          </div>
        </article>
        <article class="bd-flow">
          <div class="bd-flow__body">
            <div class="bd-flow__head"><span class="bd-flow__dot"></span><span class="bd-flow__title">标准</span><span class="bd-flow__meta">4.2s</span></div>
            <p class="bd-flow__desc">默认速度，适合大多数监测面板和实时卡片。</p>
          </div>
        </article>
        <article class="bd-flow bd-flow--fast">
          <div class="bd-flow__body">
            <div class="bd-flow__head"><span class="bd-flow__dot"></span><span class="bd-flow__title">快速</span><span class="bd-flow__meta">2.4s</span></div>
            <p class="bd-flow__desc">用于短时告警或需要立刻吸引注意的区域。</p>
          </div>
        </article>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">语义色 / TONE<span class="bd-section__meta">primary · warn · error</span></div><div class="bd-stage"><div class="bd-panel-grid">
        <article class="bd-flow">
          <div class="bd-flow__body">
            <div class="bd-flow__head"><span class="bd-flow__dot"></span><span class="bd-flow__title">正常运行</span><span class="bd-flow__meta">48 站</span></div>
            <p class="bd-flow__desc">主色高光，表示当前关注区域。</p>
          </div>
        </article>
        <article class="bd-flow bd-flow--warn">
          <div class="bd-flow__body">
            <div class="bd-flow__head"><span class="bd-flow__dot"></span><span class="bd-flow__title">参数预警</span><span class="bd-flow__meta">6 站</span></div>
            <p class="bd-flow__desc">琥珀高光，表示需要关注但未中断运行。</p>
          </div>
        </article>
        <article class="bd-flow bd-flow--error">
          <div class="bd-flow__body">
            <div class="bd-flow__head"><span class="bd-flow__dot"></span><span class="bd-flow__title">通讯离线</span><span class="bd-flow__meta">2 站</span></div>
            <p class="bd-flow__desc">红色高光，表示已经影响数据完整性。</p>
          </div>
        </article>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">状态 / STATE<span class="bd-section__meta">flowing · paused</span></div><div class="bd-stage"><div class="bd-panel-grid">
        <article class="bd-flow">
          <div class="bd-flow__body">
            <div class="bd-flow__head"><span class="bd-flow__dot"></span><span class="bd-flow__title">流动中</span><span class="bd-flow__meta">LIVE</span></div>
            <p class="bd-flow__desc">默认状态，边框高光持续旋转。</p>
          </div>
        </article>
        <article class="bd-flow bd-flow--paused">
          <div class="bd-flow__body">
            <div class="bd-flow__head"><span class="bd-flow__dot"></span><span class="bd-flow__title">已暂停</span><span class="bd-flow__meta">HOLD</span></div>
            <p class="bd-flow__desc">暂停动画，保留边框高光形状，适合静态截图。</p>
          </div>
        </article>
      </div><p class="bd-note">系统开启“减少动态效果”时自动停止边框动画。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;article class="bd-flow bd-flow--warn"&gt;
  &lt;div class="bd-flow__body"&gt;
    &lt;div class="bd-flow__head"&gt;
      &lt;span class="bd-flow__dot"&gt;&lt;/span&gt;
      &lt;span class="bd-flow__title"&gt;参数预警&lt;/span&gt;
    &lt;/div&gt;
    &lt;p class="bd-flow__desc"&gt;...&lt;/p&gt;
  &lt;/div&gt;
&lt;/article&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
