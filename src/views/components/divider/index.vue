<template>
  <div class="bd-page">
    <DocsSidebar active="divider" />

    <main class="bd-main">
      <div class="bd-crumb">
        <RouterLink to="/">组件总览</RouterLink>
        <span>/</span>
        <span>布局容器</span>
        <span>/</span>
        <span>分割线</span>
      </div>

      <header class="bd-page-head">
        <h1>分割线</h1>
        <p>用于建立区块之间的节奏和分组关系。支持水平 / 垂直、渐变 / 实线 / 虚线，以及标签左中右对齐。</p>
        <div class="bd-tags">
          <span class="bd-tag">css-only</span>
          <span class="bd-tag">divider</span>
          <span class="bd-tag">layout</span>
        </div>
      </header>

      <section class="bd-section">
        <div class="bd-section__head">形态 / VARIANT<span class="bd-section__meta">渐变 · 实线 · 虚线</span></div>
        <div class="bd-stage">
          <div class="bd-stack">
            <div>
              <div class="bd-label">GRADIENT / 默认</div>
              <div class="bd-divider"></div>
            </div>
            <div>
              <div class="bd-label">SOLID / 实线</div>
              <div class="bd-divider bd-divider--solid"></div>
            </div>
            <div>
              <div class="bd-label">DASHED / 虚线</div>
              <div class="bd-divider bd-divider--dashed"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">标签 / LABEL<span class="bd-section__meta">居中 · 左对齐 · 右对齐</span></div>
        <div class="bd-stage">
          <div class="bd-stack">
            <div class="bd-divider bd-divider--labeled"><span>今日运行数据</span></div>
            <div class="bd-divider bd-divider--labeled bd-divider--left"><span>左对齐标签</span></div>
            <div class="bd-divider bd-divider--labeled bd-divider--right bd-divider--dashed"><span>右对齐 · 虚线</span></div>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">垂直 / VERTICAL<span class="bd-section__meta">行内分隔</span></div>
        <div class="bd-stage">
          <div class="bd-row">
            <span>1920 × 1080</span>
            <span class="bd-divider bd-divider--vertical"></span>
            <span>实时刷新</span>
            <span class="bd-divider bd-divider--vertical bd-divider--dashed"></span>
            <span>在线 53</span>
          </div>
          <p class="bd-note">纯 CSS 组件，不依赖 Element Plus；复制片段时只需携带 divider.scss 或对应样式。</p>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div>
        <pre class="bd-code">&lt;div class="bd-divider"&gt;&lt;/div&gt;
&lt;div class="bd-divider bd-divider--labeled bd-divider--left"&gt;
  &lt;span&gt;今日运行数据&lt;/span&gt;
&lt;/div&gt;
&lt;span class="bd-divider bd-divider--vertical"&gt;&lt;/span&gt;</pre>
      </section>
    </main>
  </div>
</template>

<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
