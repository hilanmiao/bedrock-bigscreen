<template>
  <div class="bd-page">
    <DocsSidebar active="tooltip" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>交互反馈</span><span>/</span><span>悬浮提示</span></div>
      <header class="bd-page-head"><h1>悬浮提示</h1><p>基于 ElTooltip。四向定位、三种语义气泡和 rich 内容；悬停、焦点和 Popper 定位交给 Element Plus。</p><div class="bd-tags"><span class="bd-tag">el-tooltip</span><span class="bd-tag">placement</span><span class="bd-tag">popper</span></div></header>

      <section class="bd-section"><div class="bd-section__head">定位 / PLACEMENT<span class="bd-section__meta">top · bottom · left · right</span></div><div class="bd-stage"><div class="bd-row" style="gap: 28px">
        <el-tooltip content="按结算热量统计，T+0 更新。" placement="top" popper-class="bd-tooltip-popper"><el-button class="bd-btn bd-btn--ghost">向上</el-button></el-tooltip>
        <el-tooltip content="数据口径为 2026 年采暖季。" placement="bottom" popper-class="bd-tooltip-popper"><el-button class="bd-btn bd-btn--ghost">向下</el-button></el-tooltip>
        <el-tooltip content="结算口径" placement="left" popper-class="bd-tooltip-popper"><el-button class="bd-btn bd-btn--ghost">向左</el-button></el-tooltip>
        <el-tooltip content="实时数据，5 分钟刷新。" placement="right" popper-class="bd-tooltip-popper"><el-button class="bd-btn bd-btn--ghost">向右</el-button></el-tooltip>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">语义 × 富内容 / TONE × RICH<span class="bd-section__meta">default · accent · danger</span></div><div class="bd-stage"><div class="bd-row" style="gap: 28px">
        <el-tooltip placement="top" popper-class="bd-tooltip-popper"><template #content><span class="bd-tooltip__title">默认口径</span><span class="bd-tooltip__desc">按结算热量统计</span></template><el-button class="bd-btn bd-btn--ghost">默认</el-button></el-tooltip>
        <el-tooltip placement="top" popper-class="bd-tooltip-popper bd-tooltip-popper--accent"><template #content><span class="bd-tooltip__title">数据提示</span><span class="bd-tooltip__desc">T+0 更新，延迟不超过 5 分钟</span></template><el-button class="bd-btn bd-btn--soft">数据</el-button></el-tooltip>
        <el-tooltip placement="top" popper-class="bd-tooltip-popper bd-tooltip-popper--danger"><template #content><span class="bd-tooltip__title">异常说明</span><span class="bd-tooltip__desc">该站点通讯已中断 2 小时</span></template><el-button type="danger" class="bd-btn">异常</el-button></el-tooltip>
      </div><p class="bd-note">Popper 样式通过 <code>popper-class</code> 注入，不修改 EP 的定位逻辑。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">EP props</span></div><pre class="bd-code">&lt;el-tooltip content="按结算热量统计" placement="top" popper-class="bd-tooltip-popper"&gt;
  &lt;el-button class="bd-btn bd-btn--ghost"&gt;口径说明&lt;/el-button&gt;
&lt;/el-tooltip&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import { ElTooltip, ElButton } from 'element-plus'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
