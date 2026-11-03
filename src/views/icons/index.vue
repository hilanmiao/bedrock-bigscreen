<template>
  <div class="bd-page">
    <DocsSidebar active="icons" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>资产</span><span>/</span><span>图标</span></div>
      <header class="bd-page-head"><h1>图标</h1><p>常用 SVG 图标浏览页。当前从本地 @element-plus/icons-vue 中选取 120 个常用图标，统一 18px 线性使用。</p><div class="bd-tags"><span class="bd-tag">svg</span><span class="bd-tag">icons</span><span class="bd-tag">local-dependency</span></div></header>
      <section class="bd-section">
        <div class="bd-section__head">图标库 / LIBRARY<span class="bd-section__meta">{{ icons.length }} 个</span></div>
        <div class="bd-stage"><div class="bd-icon-grid">
          <div v-for="name in icons" :key="name" class="bd-icon-cell"><component :is="IconMap[name]" /><span>{{ name }}</span></div>
        </div><p class="bd-note">图标来自项目已安装的 Element Plus Icons，页面不新增网络请求。</p></div>
      </section>
    </main>
  </div>
</template>
<script setup>
import * as IconMap from '@element-plus/icons-vue'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
const icons = Object.keys(IconMap).filter(name => name !== 'default').slice(0, 120)
</script>
