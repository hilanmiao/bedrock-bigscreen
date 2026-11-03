<template>
  <div class="bd-page">
    <DocsSidebar active="bell" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>告警播报</span><span>/</span><span>通知入口</span></div>
      <header class="bd-page-head"><h1>通知入口</h1><p>铃铛 + 未读徽标 + 通知面板。使用原生 details/summary 开合，不引入 JS 或第三方弹层。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">notification</span><span class="bd-tag">badge</span></div></header>

      <section class="bd-section"><div class="bd-section__head">徽标 / BADGE<span class="bd-section__meta">count · dot · none</span></div><div class="bd-stage"><div class="bd-row" style="gap: 40px">
        <details class="bd-bell"><summary><svg viewBox="0 0 24 24" fill="none"><path d="M6 9a6 6 0 1 1 12 0v4l2 3H4l2-3z" stroke="currentColor" stroke-width="1.5"/><path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" stroke-width="1.5"/></svg><span class="bd-bell__badge">3</span></summary><div class="bd-bell__panel"><div class="bd-bell__head">未读通知<span>3 条</span></div><div class="bd-bell__item bd-bell__item--danger"><i class="bd-bell__mark"></i><div class="bd-bell__text">滨江换热站压力低于下限<small>2 分钟前</small></div></div><div class="bd-bell__item bd-bell__item--warn"><i class="bd-bell__mark"></i><div class="bd-bell__text">东港能源站流量计断流<small>12 分钟前</small></div></div><div class="bd-bell__item"><i class="bd-bell__mark"></i><div class="bd-bell__text">今日抄表任务已完成<small>28 分钟前</small></div></div><div class="bd-bell__foot">查看全部通知</div></div></details>
        <details class="bd-bell bd-bell--sm"><summary><svg viewBox="0 0 24 24" fill="none"><path d="M6 9a6 6 0 1 1 12 0v4l2 3H4l2-3z" stroke="currentColor" stroke-width="1.5"/><path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" stroke-width="1.5"/></svg><span class="bd-bell__badge bd-bell__badge--dot"></span></summary></details>
        <details class="bd-bell bd-bell--lg"><summary><svg viewBox="0 0 24 24" fill="none"><path d="M6 9a6 6 0 1 1 12 0v4l2 3H4l2-3z" stroke="currentColor" stroke-width="1.5"/><path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" stroke-width="1.5"/></svg></summary></details>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">面板 / PANEL<span class="bd-section__meta">standard · compact</span></div><div class="bd-stage"><div class="bd-row" style="align-items:flex-start;gap:80px">
        <details class="bd-bell" open><summary><svg viewBox="0 0 24 24" fill="none"><path d="M6 9a6 6 0 1 1 12 0v4l2 3H4l2-3z" stroke="currentColor" stroke-width="1.5"/><path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" stroke-width="1.5"/></svg><span class="bd-bell__badge">3</span></summary><div class="bd-bell__panel"><div class="bd-bell__head">未读通知<span>3 条</span></div><div class="bd-bell__item bd-bell__item--danger"><i class="bd-bell__mark"></i><div class="bd-bell__text">滨江换热站压力低于下限<small>2 分钟前</small></div></div><div class="bd-bell__item bd-bell__item--warn"><i class="bd-bell__mark"></i><div class="bd-bell__text">东港能源站流量计断流<small>12 分钟前</small></div></div><div class="bd-bell__item"><i class="bd-bell__mark"></i><div class="bd-bell__text">今日抄表任务已完成<small>28 分钟前</small></div></div><div class="bd-bell__foot">查看全部通知</div></div></details>
        <details class="bd-bell bd-bell--compact" open><summary><svg viewBox="0 0 24 24" fill="none"><path d="M6 9a6 6 0 1 1 12 0v4l2 3H4l2-3z" stroke="currentColor" stroke-width="1.5"/><path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" stroke-width="1.5"/></svg><span class="bd-bell__badge">5</span></summary><div class="bd-bell__panel"><div class="bd-bell__head">未读通知<span>5 条</span></div><div class="bd-bell__item bd-bell__item--danger"><i class="bd-bell__mark"></i><div class="bd-bell__text">滨江换热站压力低于下限<small>2 分钟前</small></div></div><div class="bd-bell__item"><i class="bd-bell__mark"></i><div class="bd-bell__text">今日抄表任务已完成<small>28 分钟前</small></div></div><div class="bd-bell__foot">查看全部通知</div></div></details>
      </div><p class="bd-note">纯 HTML/CSS；点击铃铛开合，没有自定义 JS。生产环境可根据项目补 Esc / 点击外部关闭。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;details class="bd-bell"&gt;
  &lt;summary&gt;...铃铛...&lt;span class="bd-bell__badge"&gt;3&lt;/span&gt;&lt;/summary&gt;
  &lt;div class="bd-bell__panel"&gt;...&lt;/div&gt;
&lt;/details&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
