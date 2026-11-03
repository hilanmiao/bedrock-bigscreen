<template>
  <div class="bd-page">
    <DocsSidebar active="marquee" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>告警播报</span><span>/</span><span>跑马灯</span></div>
      <header class="bd-page-head"><h1>跑马灯</h1><p>横向播报公告、值班提示和恢复消息。line / tag / board 三种形态，悬停暂停，纯 CSS 循环。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">marquee</span><span class="bd-tag">broadcast</span></div></header>

      <section class="bd-section"><div class="bd-section__head">形态 / VARIANT<span class="bd-section__meta">line · tag · board</span></div><div class="bd-stage"><div class="bd-stack">
        <div class="bd-marquee"><div class="bd-marquee__viewport"><div class="bd-marquee__track"><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>系统公告：今日 10:30 恢复滨江片区供热</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>经营提示：本周供热量同比增长 8.6%</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>运维通知：数据中心周日 02:00 例行维护</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>系统公告：今日 10:30 恢复滨江片区供热</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>经营提示：本周供热量同比增长 8.6%</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>运维通知：数据中心周日 02:00 例行维护</span></div></div></div>
        <div class="bd-marquee"><div class="bd-marquee__viewport"><div class="bd-marquee__track"><span class="bd-marquee__item"><span class="bd-marquee__tag">公告</span>滨江片区今日 10:30 恢复供热</span><span class="bd-marquee__item"><span class="bd-marquee__tag">预警</span>东港能源站通讯延迟 32 秒</span><span class="bd-marquee__item"><span class="bd-marquee__tag bd-marquee__tag--danger">告警</span>老城中心站已离线 7 小时</span><span class="bd-marquee__item"><span class="bd-marquee__tag">公告</span>滨江片区今日 10:30 恢复供热</span><span class="bd-marquee__item"><span class="bd-marquee__tag">预警</span>东港能源站通讯延迟 32 秒</span><span class="bd-marquee__item"><span class="bd-marquee__tag bd-marquee__tag--danger">告警</span>老城中心站已离线 7 小时</span></div></div></div>
        <div class="bd-marquee bd-marquee--board"><span class="bd-marquee__lead">实时播报</span><div class="bd-marquee__viewport"><div class="bd-marquee__track"><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>抢修一队已到达滨江换热站</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>今日累计供热量 8.64 万 GJ</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>6 个站点进入夜间节能工况</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>抢修一队已到达滨江换热站</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>今日累计供热量 8.64 万 GJ</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>6 个站点进入夜间节能工况</span></div></div></div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">尺寸 / SIZE<span class="bd-section__meta">sm · md · lg</span></div><div class="bd-stage"><div class="bd-stack">
        <div class="bd-marquee bd-marquee--sm"><div class="bd-marquee__viewport"><div class="bd-marquee__track"><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>SM / 滨江片区恢复供热</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>SM / 东港站延迟 32 秒</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>SM / 滨江片区恢复供热</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>SM / 东港站延迟 32 秒</span></div></div></div>
        <div class="bd-marquee"><div class="bd-marquee__viewport"><div class="bd-marquee__track"><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>MD / 滨江片区恢复供热</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>MD / 东港站延迟 32 秒</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>MD / 滨江片区恢复供热</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>MD / 东港站延迟 32 秒</span></div></div></div>
        <div class="bd-marquee bd-marquee--lg"><div class="bd-marquee__viewport"><div class="bd-marquee__track"><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>LG / 滨江片区恢复供热</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>LG / 东港站延迟 32 秒</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>LG / 滨江片区恢复供热</span><span class="bd-marquee__item"><i class="bd-marquee__dot"></i>LG / 东港站延迟 32 秒</span></div></div></div>
      </div><p class="bd-note">纯 CSS 循环，内容复制一份实现无缝；悬停时暂停。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-marquee"&gt;
  &lt;div class="bd-marquee__viewport"&gt;
    &lt;div class="bd-marquee__track"&gt;...重复两遍...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
