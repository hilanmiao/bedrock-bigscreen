<template>
  <div class="bd-page">
    <DocsSidebar active="icons-2" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>资产</span><span>/</span><span>图标2</span></div>
      <header class="bd-page-head">
        <h1>图标2</h1>
        <p>集中在能源、设备、阀门、可视化、监测与场站 6 组；24px 网格、1.7px 主描边、同色双调填充。箭头、操作、天气、状态等通用图标不重复制作，直接用 Element Plus。</p>
        <div class="bd-tags"><span class="bd-tag">svg</span><span class="bd-tag">big-screen</span><span class="bd-tag">energy</span><span class="bd-tag">200</span><span class="bd-tag">local</span></div>
      </header>

      <section class="bd-section">
        <div class="bd-section__head">图标集 / LIBRARY<span class="bd-section__meta">{{ total }} 个 · {{ groups.length }} 组</span></div>
        <div class="bd-stage">
          <div v-for="group in groups" :key="group.en" class="bd-icon2-group">
            <div class="bd-icon2-group__title">{{ group.name }}<span>{{ group.en }}</span></div>
            <div class="bd-icon2-grid">
              <div v-for="icon in group.icons" :key="icon.name" class="bd-icon2-cell" :title="icon.name">
                <svg class="bd-icon2-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" v-html="icon.body"></svg>
                <span class="bd-icon2-cell__cn">{{ icon.cn }}</span>
                <span class="bd-icon2-cell__en">{{ icon.name }}</span>
              </div>
            </div>
          </div>
          <p class="bd-note">统一规格：24×24 网格 · 1.7px 主描边 · 圆头端点 · 同色填充不高于 28% · 只使用 currentColor。通用操作、箭头、天气与状态图标不在此重复，优先使用 Element Plus。</p>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">内联 SVG</span></div>
        <div class="bd-stage">
          <pre class="bd-code">&lt;svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"&gt;
  &lt;path d="M4 12h16M14 6l6 6-6 6"/&gt;
&lt;/svg&gt;</pre>
          <p class="bd-note">图标页不引入图标包；复制单个图标的内部路径即可。颜色继承父级文字色，尺寸由 width / height 控制。</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
import { ICON_GROUPS, ICONS } from '@/views/icons2/icons'

const groups = ICON_GROUPS
const total = ICONS.length
</script>
