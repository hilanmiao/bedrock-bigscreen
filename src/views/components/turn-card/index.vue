<template>
  <div class="bd-page">
    <DocsSidebar active="turn-card" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>视觉增强</span><span>/</span><span>双面翻转卡</span></div>
      <header class="bd-page-head"><h1>双面翻转卡</h1><p>正面概览、背面明细的 3D 翻转卡。支持 Y / X 轴、三档尺寸，悬停或键盘聚焦翻转，也可以加 bd-turn--flipped 固定展示背面。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">3d</span><span class="bd-tag">flip</span></div></header>

      <section class="bd-section"><div class="bd-section__head">轴 / AXIS<span class="bd-section__meta">Y · X · 固定翻转</span></div><div class="bd-stage"><div class="bd-panel-grid">
        <article class="bd-turn" tabindex="0">
          <div class="bd-turn__inner">
            <div class="bd-turn__face bd-turn__face--front">
              <span class="bd-turn__eyebrow">Y AXIS / 悬停或聚焦</span>
              <span class="bd-turn__title">滨江换热站 · 3# 机组</span>
              <span class="bd-turn__value">86.4<span class="bd-turn__unit">℃</span></span>
              <span class="bd-turn__status">在线运行</span>
              <span class="bd-turn__hint">查看运行明细</span>
            </div>
            <div class="bd-turn__face bd-turn__face--back">
              <span class="bd-turn__eyebrow">DETAIL</span>
              <div class="bd-turn__rows">
                <div class="bd-turn__row"><span>二次压力</span><b>0.46 MPa</b></div>
                <div class="bd-turn__row"><span>循环流量</span><b>128.6 t/h</b></div>
                <div class="bd-turn__row"><span>补水率</span><b>1.2%</b></div>
                <div class="bd-turn__row"><span>更新时间</span><b>09:42</b></div>
              </div>
              <span class="bd-turn__hint">移出返回概览</span>
            </div>
          </div>
        </article>

        <article class="bd-turn bd-turn--x" tabindex="0">
          <div class="bd-turn__inner">
            <div class="bd-turn__face bd-turn__face--front">
              <span class="bd-turn__eyebrow">X AXIS / 上下翻转</span>
              <span class="bd-turn__title">城北热源站 · CP-01</span>
              <span class="bd-turn__value">92.1<span class="bd-turn__unit">℃</span></span>
              <span class="bd-turn__status bd-turn__status--warn">参数预警</span>
              <span class="bd-turn__hint">查看告警明细</span>
            </div>
            <div class="bd-turn__face bd-turn__face--back">
              <span class="bd-turn__eyebrow">ALERT</span>
              <div class="bd-turn__rows">
                <div class="bd-turn__row"><span>供水温度</span><b>92.1℃</b></div>
                <div class="bd-turn__row"><span>二次压力</span><b>0.52 MPa</b></div>
                <div class="bd-turn__row"><span>预警等级</span><b>关注</b></div>
                <div class="bd-turn__row"><span>持续时间</span><b>8 min</b></div>
              </div>
              <span class="bd-turn__hint">移出返回概览</span>
            </div>
          </div>
        </article>

        <article class="bd-turn bd-turn--x bd-turn--flipped" tabindex="0">
          <div class="bd-turn__inner">
            <div class="bd-turn__face bd-turn__face--front">
              <span class="bd-turn__eyebrow">X + FLIPPED / 固定背面</span>
              <span class="bd-turn__title">东港能源站 · FT-07</span>
              <span class="bd-turn__value">0.31<span class="bd-turn__unit">MPa</span></span>
              <span class="bd-turn__status bd-turn__status--error">通讯离线</span>
              <span class="bd-turn__hint">查看离线明细</span>
            </div>
            <div class="bd-turn__face bd-turn__face--back">
              <span class="bd-turn__eyebrow">OFFLINE</span>
              <div class="bd-turn__rows">
                <div class="bd-turn__row"><span>最后通讯</span><b>02:14</b></div>
                <div class="bd-turn__row"><span>离线时长</span><b>7 h</b></div>
                <div class="bd-turn__row"><span>影响用户</span><b>2,860 户</b></div>
                <div class="bd-turn__row"><span>工单</span><b>WO-2048</b></div>
              </div>
              <span class="bd-turn__hint">已派单抢修</span>
            </div>
          </div>
        </article>
      </div><p class="bd-note">悬停或 Tab 聚焦即可翻转；bd-turn--flipped 用于没有悬停条件的展示场景。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">尺寸 / SIZE<span class="bd-section__meta">sm · md · lg</span></div><div class="bd-stage"><div class="bd-panel-grid" style="align-items: end">
        <article class="bd-turn bd-turn--sm bd-turn--flipped" tabindex="0">
          <div class="bd-turn__inner">
            <div class="bd-turn__face bd-turn__face--front">
              <span class="bd-turn__eyebrow">SM</span>
              <span class="bd-turn__title">补水率</span>
              <span class="bd-turn__value">1.2<span class="bd-turn__unit">%</span></span>
            </div>
            <div class="bd-turn__face bd-turn__face--back">
              <span class="bd-turn__eyebrow">SM / DETAIL</span>
              <div class="bd-turn__rows"><div class="bd-turn__row"><span>今日补水</span><b>12.4 t</b></div></div>
            </div>
          </div>
        </article>
        <article class="bd-turn bd-turn--flipped" tabindex="0">
          <div class="bd-turn__inner">
            <div class="bd-turn__face bd-turn__face--front">
              <span class="bd-turn__eyebrow">MD</span>
              <span class="bd-turn__title">循环流量</span>
              <span class="bd-turn__value">1,286<span class="bd-turn__unit">t/h</span></span>
            </div>
            <div class="bd-turn__face bd-turn__face--back">
              <span class="bd-turn__eyebrow">MD / DETAIL</span>
              <div class="bd-turn__rows">
                <div class="bd-turn__row"><span>设计流量</span><b>1,500 t/h</b></div>
                <div class="bd-turn__row"><span>负载率</span><b>85.7%</b></div>
              </div>
            </div>
          </div>
        </article>
        <article class="bd-turn bd-turn--lg bd-turn--flipped" tabindex="0">
          <div class="bd-turn__inner">
            <div class="bd-turn__face bd-turn__face--front">
              <span class="bd-turn__eyebrow">LG</span>
              <span class="bd-turn__title">累计供热量</span>
              <span class="bd-turn__value">86,428<span class="bd-turn__unit">GJ</span></span>
            </div>
            <div class="bd-turn__face bd-turn__face--back">
              <span class="bd-turn__eyebrow">LG / DETAIL</span>
              <div class="bd-turn__rows">
                <div class="bd-turn__row"><span>同比</span><b>+2.4%</b></div>
                <div class="bd-turn__row"><span>环比</span><b>+6.8%</b></div>
                <div class="bd-turn__row"><span>计划完成</span><b>92%</b></div>
              </div>
            </div>
          </div>
        </article>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;article class="bd-turn" tabindex="0"&gt;
  &lt;div class="bd-turn__inner"&gt;
    &lt;div class="bd-turn__face bd-turn__face--front"&gt;概览&lt;/div&gt;
    &lt;div class="bd-turn__face bd-turn__face--back"&gt;明细&lt;/div&gt;
  &lt;/div&gt;
&lt;/article&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
