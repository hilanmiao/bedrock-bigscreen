<template>
  <div class="bd-page">
    <DocsSidebar active="timeline" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>数据展示</span><span>/</span><span>时间线</span></div>
      <header class="bd-page-head"><h1>时间线</h1><p>按时间顺序展示事件与处置过程。垂直 / 水平两种方向，紧凑密度可隐藏说明，适合告警侧栏与事件详情。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">timeline</span><span class="bd-tag">layout</span></div></header>

      <section class="bd-section">
        <div class="bd-section__head">方向 / DIRECTION<span class="bd-section__meta">vertical · horizontal</span></div>
        <div class="bd-stage"><div class="bd-panel-grid">
          <div><div class="bd-label">VERTICAL / 垂直</div><div class="bd-timeline">
            <div class="bd-timeline__item"><i class="bd-timeline__dot"></i><span class="bd-timeline__time">09:42</span><div class="bd-timeline__title">压力低于下限</div><div class="bd-timeline__desc">滨江换热站二次网压力降至 0.31 MPa。</div></div>
            <div class="bd-timeline__item bd-timeline__item--warn"><i class="bd-timeline__dot"></i><span class="bd-timeline__time">09:36</span><div class="bd-timeline__title">自动派单</div><div class="bd-timeline__desc">抢修一队已接收任务，预计 18 分钟到达。</div></div>
            <div class="bd-timeline__item"><i class="bd-timeline__dot"></i><span class="bd-timeline__time">09:12</span><div class="bd-timeline__title">巡检完成</div><div class="bd-timeline__desc">城北热源站 3# 机组巡检完成。</div></div>
          </div></div>
          <div><div class="bd-label">HORIZONTAL / 水平</div><div class="bd-timeline bd-timeline--horizontal">
            <div class="bd-timeline__item"><i class="bd-timeline__dot"></i><span class="bd-timeline__time">09:12</span><div class="bd-timeline__title">触发告警</div></div>
            <div class="bd-timeline__item bd-timeline__item--warn"><i class="bd-timeline__dot"></i><span class="bd-timeline__time">09:18</span><div class="bd-timeline__title">自动派单</div></div>
            <div class="bd-timeline__item"><i class="bd-timeline__dot"></i><span class="bd-timeline__time">09:36</span><div class="bd-timeline__title">人员到场</div></div>
            <div class="bd-timeline__item"><i class="bd-timeline__dot"></i><span class="bd-timeline__time">09:52</span><div class="bd-timeline__title">处置完成</div></div>
          </div></div>
        </div></div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">密度 / DENSITY<span class="bd-section__meta">standard · compact</span></div>
        <div class="bd-stage"><div class="bd-panel-grid">
          <div><div class="bd-label">STANDARD</div><div class="bd-timeline">
            <div class="bd-timeline__item"><i class="bd-timeline__dot"></i><span class="bd-timeline__time">09:42</span><div class="bd-timeline__title">压力低于下限</div><div class="bd-timeline__desc">滨江换热站二次网压力降至 0.31 MPa。</div></div>
            <div class="bd-timeline__item bd-timeline__item--error"><i class="bd-timeline__dot"></i><span class="bd-timeline__time">09:36</span><div class="bd-timeline__title">通讯中断</div><div class="bd-timeline__desc">老城中心站已离线 7 小时。</div></div>
          </div></div>
          <div><div class="bd-label">COMPACT / 隐藏说明</div><div class="bd-timeline bd-timeline--compact">
            <div class="bd-timeline__item"><i class="bd-timeline__dot"></i><span class="bd-timeline__time">09:42</span><div class="bd-timeline__title">压力低于下限</div></div>
            <div class="bd-timeline__item bd-timeline__item--warn"><i class="bd-timeline__dot"></i><span class="bd-timeline__time">09:36</span><div class="bd-timeline__title">自动派单</div></div>
            <div class="bd-timeline__item"><i class="bd-timeline__dot"></i><span class="bd-timeline__time">09:12</span><div class="bd-timeline__title">巡检完成</div></div>
          </div></div>
        </div><p class="bd-note">纯 CSS，状态点颜色只表达事件等级。</p></div>
      </section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-timeline"&gt;
  &lt;div class="bd-timeline__item"&gt;
    &lt;i class="bd-timeline__dot"&gt;&lt;/i&gt;
    &lt;span class="bd-timeline__time"&gt;09:42&lt;/span&gt;
    &lt;div class="bd-timeline__title"&gt;压力低于下限&lt;/div&gt;
    &lt;div class="bd-timeline__desc"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
