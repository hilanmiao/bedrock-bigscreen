<template>
  <div class="bd-page">
    <DocsSidebar active="header" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>布局容器</span><span>/</span><span>页面头部</span></div>
      <header class="bd-page-head">
        <h1>页面头部</h1>
        <p>大屏页头的品牌、导航和运行状态区域。支持默认内联导航、居中导航、极简头部，以及三档高度。</p>
        <div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">header</span><span class="bd-tag">layout</span></div>
      </header>

      <section class="bd-section">
        <div class="bd-section__head">布局 / LAYOUT<span class="bd-section__meta">inline · center · minimal</span></div>
        <div class="bd-stage">
          <div class="bd-stack">
            <div>
              <div class="bd-label">INLINE / 默认</div>
              <header class="bd-header">
                <div class="bd-header__brand">
                  <svg class="bd-header__mark" viewBox="0 0 48 48" fill="none"><path d="M24 5 42 15 24 25 6 15z" stroke="currentColor" stroke-width="1.8"/><path d="M6 23 24 33 42 23" stroke="currentColor" stroke-width="1.8" opacity=".65"/><path d="M6 31 24 41 42 31" stroke="currentColor" stroke-width="1.8" opacity=".35"/></svg>
                  <div><div class="bd-header__name">BEDROCK UI</div><div class="bd-header__sub">ENERGY OPERATIONS</div></div>
                </div>
                <nav class="bd-header__nav"><span class="bd-header__link bd-header__link--active">能源总览</span><span class="bd-header__link">换热监控</span><span class="bd-header__link">告警中心</span></nav>
                <div class="bd-header__meta"><span class="bd-header__status"><i class="bd-header__dot"></i>运行中</span><span>{{ sampleTime }}</span></div>
              </header>
            </div>

            <div>
              <div class="bd-label">CENTER / 居中导航</div>
              <header class="bd-header bd-header--center">
                <div class="bd-header__brand"><svg class="bd-header__mark" viewBox="0 0 48 48" fill="none"><path d="M24 5 42 15 24 25 6 15z" stroke="currentColor" stroke-width="1.8"/><path d="M6 23 24 33 42 23" stroke="currentColor" stroke-width="1.8" opacity=".65"/></svg><span class="bd-header__name">能源总览</span></div>
                <nav class="bd-header__nav"><span class="bd-header__link bd-header__link--active">总览</span><span class="bd-header__link">监控</span><span class="bd-header__link">告警</span></nav>
                <div class="bd-header__meta"><span class="bd-header__status"><i class="bd-header__dot"></i>LIVE</span></div>
              </header>
            </div>

            <div>
              <div class="bd-label">MINIMAL / 极简</div>
              <header class="bd-header bd-header--plain bd-header--sm">
                <div class="bd-header__brand"><span class="bd-header__name">滨江换热站</span><span class="bd-header__sub">REAL-TIME</span></div>
                <div class="bd-header__meta"><span>86.4℃</span><span>{{ sampleTime }}</span></div>
              </header>
            </div>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">尺寸 / SIZE<span class="bd-section__meta">sm · md · lg</span></div>
        <div class="bd-stage">
          <div class="bd-stack">
            <div>
              <div class="bd-label">SM / 52px</div>
              <header class="bd-header bd-header--sm"><div class="bd-header__brand"><span class="bd-header__name">BEDROCK UI</span><span class="bd-header__sub">COMPACT</span></div><div class="bd-header__meta"><span class="bd-header__status"><i class="bd-header__dot"></i>运行中</span></div></header>
            </div>
            <div>
              <div class="bd-label">MD / 64px</div>
              <header class="bd-header"><div class="bd-header__brand"><span class="bd-header__name">BEDROCK UI</span><span class="bd-header__sub">DEFAULT</span></div><div class="bd-header__meta"><span>{{ sampleTime }}</span></div></header>
            </div>
            <div>
              <div class="bd-label">LG / 76px</div>
              <header class="bd-header bd-header--lg"><div class="bd-header__brand"><span class="bd-header__name">BEDROCK UI</span><span class="bd-header__sub">LARGE</span></div><div class="bd-header__meta"><span>{{ sampleTime }}</span></div></header>
            </div>
          </div>
          <p class="bd-note">纯 CSS 组件，不依赖 Element Plus；复制片段时只需携带 header.scss 或对应样式。</p>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div>
        <pre class="bd-code">&lt;header class="bd-header"&gt;
  &lt;div class="bd-header__brand"&gt;...&lt;/div&gt;
  &lt;nav class="bd-header__nav"&gt;...&lt;/nav&gt;
  &lt;div class="bd-header__meta"&gt;...&lt;/div&gt;
&lt;/header&gt;</pre>
      </section>
    </main>
  </div>
</template>

<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
import { formatClock } from '@/utils/datetime'

const sampleTime = formatClock(new Date())
</script>
