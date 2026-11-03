<template>
  <div class="bd-page">
    <DocsSidebar active="states" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>交互反馈</span><span>/</span><span>空 / 错 / 载入</span></div>
      <header class="bd-page-head"><h1>空 / 错 / 载入</h1><p>数据区没有内容时的六种状态：empty / error / loading / offline / denied / skeleton。支持 inline 与三档尺寸。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">state</span><span class="bd-tag">skeleton</span></div></header>

      <section class="bd-section"><div class="bd-section__head">六种状态 / STATES<span class="bd-section__meta">empty · error · loading · offline · denied · skeleton</span></div><div class="bd-stage"><div class="bd-state-grid">
        <div><div class="bd-state bd-state--sm"><div class="bd-state__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 8 12 4l8 4v8l-8 4-8-4z" stroke="currentColor" stroke-width="1.5"/><path d="M4 8l8 4 8-4M12 12v8" stroke="currentColor" stroke-width="1.5"/></svg></div><div class="bd-state__title">暂无数据</div><div class="bd-state__desc">调整筛选条件后重试。</div></div></div>
        <div><div class="bd-state bd-state--error bd-state--sm"><div class="bd-state__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 4 21 20H3z" stroke="currentColor" stroke-width="1.5"/><path d="M12 10v4M12 17v.5" stroke="currentColor" stroke-width="1.5"/></svg></div><div class="bd-state__title">加载失败</div><div class="bd-state__desc">数据服务暂时不可用。</div></div></div>
        <div><div class="bd-state bd-state--sm"><div class="bd-state__icon"><div class="bd-state__spinner"></div></div><div class="bd-state__title">正在加载</div><div class="bd-state__desc">正在同步最新计量数据。</div></div></div>
        <div><div class="bd-state bd-state--sm"><div class="bd-state__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M3 9a13 13 0 0 1 18 0M6.5 13a8 8 0 0 1 11 0M10 16.5a4 4 0 0 1 4 0" stroke="currentColor" stroke-width="1.5"/></svg></div><div class="bd-state__title">通讯中断</div><div class="bd-state__desc">老城中心站已离线 7 小时。</div></div></div>
        <div><div class="bd-state bd-state--sm"><div class="bd-state__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-3.5 7-9V5.5L12 3 5 5.5V12c0 5.5 7 9 7 9z" stroke="currentColor" stroke-width="1.5"/></svg></div><div class="bd-state__title">暂无权限</div><div class="bd-state__desc">该片区数据仅对运维组开放。</div></div></div>
        <div><div class="bd-state bd-state--sm"><div class="bd-skeleton"><i style="width: 52%"></i><i style="width: 86%"></i><i style="width: 70%"></i></div></div></div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">布局 × 尺寸 / LAYOUT × SIZE<span class="bd-section__meta">inline · sm</span></div><div class="bd-stage"><div class="bd-panel-grid">
        <div class="bd-panel"><div class="bd-state bd-state--inline bd-state--sm"><div class="bd-state__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M3 9a13 13 0 0 1 18 0M6.5 13a8 8 0 0 1 11 0" stroke="currentColor" stroke-width="1.5"/></svg></div><div class="bd-state__title">通讯中断</div><div class="bd-state__desc">老城中心站已离线 7 小时。</div></div></div>
        <div class="bd-panel"><div class="bd-state bd-state--inline bd-state--sm bd-state--error"><div class="bd-state__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 4 21 20H3z" stroke="currentColor" stroke-width="1.5"/></svg></div><div class="bd-state__title">加载失败</div><div class="bd-state__desc">数据服务暂时不可用。</div></div></div>
        <div class="bd-panel"><div class="bd-state"><div class="bd-state__icon"><div class="bd-state__spinner bd-state__spinner--dual"></div></div><div class="bd-state__title">正在同步</div><div class="bd-state__desc">正在拉取 12 个站点的最新数据。</div></div></div>
      </div><p class="bd-note">纯 CSS，loading 与 skeleton 使用 keyframes；不依赖第三方加载组件。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">加载动画 / LOADERS<span class="bd-section__meta">spinner · dots</span></div><div class="bd-stage"><div class="bd-loaders"><div class="bd-state__spinner"></div><span class="bd-dots"><i></i><i></i><i></i><i></i></span></div></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-state bd-state--inline bd-state--sm"&gt;
  &lt;div class="bd-state__icon"&gt;...&lt;/div&gt;
  &lt;div class="bd-state__title"&gt;通讯中断&lt;/div&gt;
  &lt;div class="bd-state__desc"&gt;老城中心站已离线 7 小时。&lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
