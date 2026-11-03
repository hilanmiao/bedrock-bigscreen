<template>
  <div class="bd-page">
    <DocsSidebar active="orbit" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>视觉增强</span><span>/</span><span>轨道节点</span></div>
      <header class="bd-page-head"><h1>轨道节点</h1><p>三圈差速轨道围绕中心读数运行，卫星节点用语义色标记状态。支持 3D 倾斜与平面两种视角，适合系统拓扑、站点关系或巡检态势。</p><div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">orbit</span><span class="bd-tag">3d</span></div></header>

      <section class="bd-section"><div class="bd-section__head">视角 / VIEW<span class="bd-section__meta">tilted · flat</span></div><div class="bd-stage"><div class="bd-row" style="gap: 42px; align-items: flex-start; justify-content: center">
        <div>
          <div class="bd-label">TILTED / 3D 倾斜</div>
          <div class="bd-orbit">
            <div class="bd-orbit__stage">
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat bd-orbit__sat--warn"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
            </div>
            <div class="bd-orbit__core"><span class="bd-orbit__value">48</span><span class="bd-orbit__label">在线节点</span></div>
          </div>
        </div>
        <div>
          <div class="bd-label">FLAT / 平面轨道</div>
          <div class="bd-orbit bd-orbit--flat">
            <div class="bd-orbit__stage">
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat bd-orbit__sat--warn"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
            </div>
            <div class="bd-orbit__core"><span class="bd-orbit__value">48</span><span class="bd-orbit__label">在线节点</span></div>
          </div>
        </div>
      </div><p class="bd-note">倾斜视角用 perspective + rotateX 绘制；平面视角只保留环形轨道，适合嵌套在紧凑面板里。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">尺寸 / SIZE<span class="bd-section__meta">sm · md · lg</span></div><div class="bd-stage"><div class="bd-row" style="gap: 38px; align-items: flex-start; justify-content: center">
        <div>
          <div class="bd-label">SM</div>
          <div class="bd-orbit bd-orbit--sm">
            <div class="bd-orbit__stage">
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat bd-orbit__sat--warn"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
            </div>
            <div class="bd-orbit__core"><span class="bd-orbit__value">12</span><span class="bd-orbit__label">SM</span></div>
          </div>
        </div>
        <div>
          <div class="bd-label">MD</div>
          <div class="bd-orbit">
            <div class="bd-orbit__stage">
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat bd-orbit__sat--warn"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
            </div>
            <div class="bd-orbit__core"><span class="bd-orbit__value">48</span><span class="bd-orbit__label">MD</span></div>
          </div>
        </div>
        <div>
          <div class="bd-label">LG</div>
          <div class="bd-orbit bd-orbit--lg">
            <div class="bd-orbit__stage">
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat bd-orbit__sat--warn"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
            </div>
            <div class="bd-orbit__core"><span class="bd-orbit__value">128</span><span class="bd-orbit__label">LG</span></div>
          </div>
        </div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">语义色 / TONE<span class="bd-section__meta">primary · warn · error</span></div><div class="bd-stage"><div class="bd-row" style="gap: 38px; align-items: flex-start; justify-content: center">
        <div>
          <div class="bd-label">PRIMARY</div>
          <div class="bd-orbit">
            <div class="bd-orbit__stage">
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
            </div>
            <div class="bd-orbit__core"><span class="bd-orbit__value">48</span><span class="bd-orbit__label">在线</span></div>
          </div>
        </div>
        <div>
          <div class="bd-label">WARN</div>
          <div class="bd-orbit bd-orbit--warn">
            <div class="bd-orbit__stage">
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
            </div>
            <div class="bd-orbit__core"><span class="bd-orbit__value">6</span><span class="bd-orbit__label">预警</span></div>
          </div>
        </div>
        <div>
          <div class="bd-label">ERROR</div>
          <div class="bd-orbit bd-orbit--error">
            <div class="bd-orbit__stage">
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
              <div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div>
            </div>
            <div class="bd-orbit__core"><span class="bd-orbit__value">2</span><span class="bd-orbit__label">离线</span></div>
          </div>
        </div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">状态与速度 / STATE & SPEED<span class="bd-section__meta">slow · normal · fast · paused</span></div><div class="bd-stage"><div class="bd-row" style="gap: 24px; align-items: flex-start; justify-content: center">
        <div class="bd-orbit bd-orbit--sm bd-orbit--slow"><div class="bd-orbit__stage"><div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div><div class="bd-orbit__ring"><span class="bd-orbit__sat bd-orbit__sat--warn"></span></div><div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div></div><div class="bd-orbit__core"><span class="bd-orbit__label">SLOW</span></div></div>
        <div class="bd-orbit bd-orbit--sm"><div class="bd-orbit__stage"><div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div><div class="bd-orbit__ring"><span class="bd-orbit__sat bd-orbit__sat--warn"></span></div><div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div></div><div class="bd-orbit__core"><span class="bd-orbit__label">NORMAL</span></div></div>
        <div class="bd-orbit bd-orbit--sm bd-orbit--fast"><div class="bd-orbit__stage"><div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div><div class="bd-orbit__ring"><span class="bd-orbit__sat bd-orbit__sat--warn"></span></div><div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div></div><div class="bd-orbit__core"><span class="bd-orbit__label">FAST</span></div></div>
        <div class="bd-orbit bd-orbit--sm bd-orbit--paused"><div class="bd-orbit__stage"><div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div><div class="bd-orbit__ring"><span class="bd-orbit__sat bd-orbit__sat--warn"></span></div><div class="bd-orbit__ring"><span class="bd-orbit__sat"></span></div></div><div class="bd-orbit__core"><span class="bd-orbit__label">PAUSED</span></div></div>
      </div><p class="bd-note">暂停只停轨道动画，中心读数和卫星状态保持不变；系统开启“减少动态效果”时轨道不再旋转。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div><pre class="bd-code">&lt;div class="bd-orbit"&gt;
  &lt;div class="bd-orbit__stage"&gt;
    &lt;div class="bd-orbit__ring"&gt;&lt;span class="bd-orbit__sat"&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;div class="bd-orbit__ring"&gt;&lt;span class="bd-orbit__sat bd-orbit__sat--warn"&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;div class="bd-orbit__ring"&gt;&lt;span class="bd-orbit__sat"&gt;&lt;/span&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="bd-orbit__core"&gt;
    &lt;span class="bd-orbit__value"&gt;48&lt;/span&gt;
    &lt;span class="bd-orbit__label"&gt;在线节点&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
