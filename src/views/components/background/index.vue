<template>
  <div class="bd-page">
    <DocsSidebar active="background" />

    <main class="bd-main">
      <div class="bd-crumb">
        <RouterLink to="/">组件总览</RouterLink>
        <span>/</span>
        <span>布局容器</span>
        <span>/</span>
        <span>背景层</span>
      </div>

      <header class="bd-page-head">
        <h1>背景层</h1>
        <p>默认沿用当前的 CSS 网格与主色光晕；图片预设作为可选项，用于需要更强氛围的大屏。四种素材全部本地化，无外部请求。</p>
        <div class="bd-tags">
          <span class="bd-tag">css-only</span>
          <span class="bd-tag">background</span>
          <span class="bd-tag">local-assets</span>
        </div>
      </header>

      <section class="bd-section">
        <div class="bd-section__head">默认 / CSS LAYERS<span class="bd-section__meta">不依赖图片</span></div>
        <div class="bd-stage">
          <div class="bd-bg bd-bg--css" style="height: 180px; border: 1px solid var(--bedrock-line-1); border-radius: 4px">
            <span class="bd-bg__label">GRID + PRIMARY GLOW</span>
          </div>
          <p class="bd-note">当前文档站使用的就是这一层；换成图片背景不会影响默认样式。</p>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">图片预设 / IMAGE PRESETS<span class="bd-section__meta">04 张</span></div>
        <div class="bd-stage">
          <div class="bd-bg-grid">
            <div class="bd-bg-grid__item">
              <div class="bd-bg bd-bg--aurora"><span class="bd-bg__label">AURORA / 极光</span></div>
            </div>
            <div class="bd-bg-grid__item">
              <div class="bd-bg bd-bg--contour"><span class="bd-bg__label">CONTOUR / 等高线</span></div>
            </div>
            <div class="bd-bg-grid__item">
              <div class="bd-bg bd-bg--mesh"><span class="bd-bg__label">MESH / 数据地平线</span></div>
            </div>
            <div class="bd-bg-grid__item">
              <div class="bd-bg bd-bg--silk"><span class="bd-bg__label">SILK / 流光</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">遮罩 / OVERLAY<span class="bd-section__meta">保证文字可读</span></div>
        <div class="bd-stage">
          <div class="bd-bg bd-bg--silk bd-bg--veil" style="height: 260px; border: 1px solid var(--bedrock-line-1); border-radius: 4px">
            <div class="bd-bg__content">
              <span class="bd-bg__eyebrow">BINJIANG STATION / LIVE</span>
              <div class="bd-bg__title">滨江换热站 · 实时运行</div>
            </div>
          </div>
          <p class="bd-note">图片层只负责氛围；内容区始终叠一层深色遮罩，保证标题与数据可读。</p>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div>
        <pre class="bd-code">&lt;div class="bd-bg bd-bg--aurora bd-bg--veil"&gt;
  &lt;div class="bd-bg__content"&gt;
    &lt;span class="bd-bg__eyebrow"&gt;SITE / LIVE&lt;/span&gt;
    &lt;div class="bd-bg__title"&gt;滨江换热站 · 实时运行&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
      </section>
    </main>
  </div>
</template>

<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
