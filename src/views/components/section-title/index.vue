<template>
  <div class="bd-page">
    <DocsSidebar active="section-title" />

    <main class="bd-main">
      <div class="bd-crumb">
        <RouterLink to="/">组件总览</RouterLink>
        <span>/</span>
        <span>布局容器</span>
        <span>/</span>
        <span>区块标题</span>
      </div>

      <header class="bd-page-head">
        <h1>区块标题</h1>
        <p>用于面板、图表和业务区块的标题层。装饰形态、布局方式和尺寸三个轴相互独立，适合放在 1920 大屏的各种容器顶部。</p>
        <div class="bd-tags">
          <span class="bd-tag">css-only</span>
          <span class="bd-tag">heading</span>
          <span class="bd-tag">layout</span>
        </div>
      </header>

      <section class="bd-section">
        <div class="bd-section__head">形态 / VARIANT<span class="bd-section__meta">bar · line · plain</span></div>
        <div class="bd-stage">
          <div class="bd-stack">
            <div class="bd-section-title bd-section-title--bar">
              <div class="bd-section-title__main">
                <span class="bd-section-title__eyebrow">ENERGY OVERVIEW</span>
                <h2 class="bd-section-title__text">区域能耗分析</h2>
              </div>
              <div class="bd-section-title__side">
                <span class="bd-section-title__meta">更新于 12:40</span>
              </div>
            </div>

            <div class="bd-section-title bd-section-title--line">
              <div class="bd-section-title__main">
                <span class="bd-section-title__eyebrow">REAL-TIME ALERTS</span>
                <h2 class="bd-section-title__text">实时告警与处置</h2>
              </div>
              <div class="bd-section-title__side">
                <span class="bd-section-title__meta">17 条待处理</span>
              </div>
            </div>

            <div class="bd-section-title bd-section-title--plain">
              <div class="bd-section-title__main">
                <span class="bd-section-title__eyebrow">SITE PERFORMANCE</span>
                <h2 class="bd-section-title__text">站点运行绩效</h2>
              </div>
              <div class="bd-section-title__side">
                <span class="bd-section-title__meta">近 7 日</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">布局 / LAYOUT<span class="bd-section__meta">inline · stack</span></div>
        <div class="bd-stage">
          <div class="bd-stack">
            <div class="bd-section-title bd-section-title--bar">
              <div class="bd-section-title__main">
                <span class="bd-section-title__eyebrow">INLINE / 左右</span>
                <h2 class="bd-section-title__text">片区供热量排名</h2>
              </div>
              <div class="bd-section-title__side">
                <span class="bd-section-title__meta">单位：GJ</span>
                <button class="bd-section-title__action">查看全部 →</button>
              </div>
            </div>

            <div class="bd-section-title bd-section-title--bar bd-section-title--stack">
              <div class="bd-section-title__main">
                <span class="bd-section-title__eyebrow">STACK / 上下</span>
                <h2 class="bd-section-title__text">换热站运行状态</h2>
              </div>
              <div class="bd-section-title__side">
                <span class="bd-section-title__meta">6 个站点 · 2 个预警</span>
                <button class="bd-section-title__action">进入监控 →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">尺寸 / SIZE<span class="bd-section__meta">sm · md · lg</span></div>
        <div class="bd-stage">
          <div class="bd-stack">
            <div class="bd-section-title bd-section-title--bar bd-section-title--sm">
              <div class="bd-section-title__main">
                <span class="bd-section-title__eyebrow">SMALL</span>
                <h2 class="bd-section-title__text">紧凑型区块标题</h2>
              </div>
              <div class="bd-section-title__side"><span class="bd-section-title__meta">sm</span></div>
            </div>

            <div class="bd-section-title bd-section-title--bar">
              <div class="bd-section-title__main">
                <span class="bd-section-title__eyebrow">DEFAULT</span>
                <h2 class="bd-section-title__text">标准区块标题</h2>
              </div>
              <div class="bd-section-title__side"><span class="bd-section-title__meta">md</span></div>
            </div>

            <div class="bd-section-title bd-section-title--bar bd-section-title--lg">
              <div class="bd-section-title__main">
                <span class="bd-section-title__eyebrow">LARGE</span>
                <h2 class="bd-section-title__text">大区块标题</h2>
              </div>
              <div class="bd-section-title__side"><span class="bd-section-title__meta">lg</span></div>
            </div>
          </div>
          <p class="bd-note">纯 CSS 组件，不依赖 Element Plus；复制片段时只需携带 section-title.scss 或对应样式。</p>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div>
        <pre class="bd-code">&lt;div class="bd-section-title bd-section-title--bar"&gt;
  &lt;div class="bd-section-title__main"&gt;
    &lt;span class="bd-section-title__eyebrow"&gt;ENERGY OVERVIEW&lt;/span&gt;
    &lt;h2 class="bd-section-title__text"&gt;区域能耗分析&lt;/h2&gt;
  &lt;/div&gt;
  &lt;div class="bd-section-title__side"&gt;
    &lt;span class="bd-section-title__meta"&gt;更新于 12:40&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
      </section>
    </main>
  </div>
</template>

<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
