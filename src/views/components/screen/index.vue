<template>
  <div class="bd-page">
    <DocsSidebar active="screen" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>布局容器</span><span>/</span><span>画布骨架</span></div>
      <header class="bd-page-head">
        <h1>画布骨架</h1>
        <p>用 CSS aspect-ratio 固定大屏画布比例，不依赖 ScreenAdapter。提供 16:9 / 21:9 两种比例和安全区参考线。</p>
        <div class="bd-tags"><span class="bd-tag">css-only</span><span class="bd-tag">canvas</span><span class="bd-tag">layout</span></div>
      </header>

      <section class="bd-section">
        <div class="bd-section__head">比例 / RATIO<span class="bd-section__meta">16:9 · 21:9</span></div>
        <div class="bd-stage">
          <div class="bd-stack">
            <div class="bd-canvas">
              <span class="bd-canvas__safe-label">SAFE AREA · 16:9</span>
              <div class="bd-canvas__safe"></div>
              <div class="bd-canvas__layout">
                <div class="bd-canvas__slot bd-canvas__slot--head">HEADER / 页头</div>
                <div class="bd-canvas__slot bd-canvas__slot--side">SIDE / 侧栏</div>
                <div class="bd-canvas__slot bd-canvas__slot--main">MAIN / 主内容</div>
              </div>
            </div>
            <div class="bd-canvas bd-canvas--wide">
              <span class="bd-canvas__safe-label">SAFE AREA · 21:9</span>
              <div class="bd-canvas__safe"></div>
              <div class="bd-canvas__layout bd-canvas__layout--wide">
                <div class="bd-canvas__slot bd-canvas__slot--head">HEADER / 页头</div>
                <div class="bd-canvas__slot bd-canvas__slot--side">SIDE</div>
                <div class="bd-canvas__slot bd-canvas__slot--main">MAIN / 指挥区</div>
              </div>
            </div>
          </div>
          <p class="bd-note">纯 CSS 骨架，只负责比例与安全区；页面缩放、全屏和 ScreenAdapter 由具体项目决定。</p>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div>
        <pre class="bd-code">&lt;div class="bd-canvas"&gt;
  &lt;div class="bd-canvas__safe"&gt;&lt;/div&gt;
  &lt;div class="bd-canvas__layout"&gt;...&lt;/div&gt;
&lt;/div&gt;</pre>
      </section>
    </main>
  </div>
</template>

<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
