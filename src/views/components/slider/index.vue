<template>
  <div class="bd-page">
    <DocsSidebar active="slider" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>交互反馈</span><span>/</span><span>滑杆</span></div>
      <header class="bd-page-head"><h1>滑杆</h1><p>基于 ElSlider。支持默认、刻度、标记和禁用状态；轨道、按钮和标记文字由 Bedrock 变量统一。</p><div class="bd-tags"><span class="bd-tag">el-slider</span><span class="bd-tag">form</span><span class="bd-tag">marks</span></div></header>

      <section class="bd-section"><div class="bd-section__head">形态 / VARIANT<span class="bd-section__meta">default · stops · marks</span></div><div class="bd-stage"><div class="bd-slider-grid">
        <div class="bd-slider-block"><div class="bd-slider-block__head"><span>目标供水温度</span><span>86℃</span></div><el-slider v-model="temp" :min="60" :max="100" /></div>
        <div class="bd-slider-block"><div class="bd-slider-block__head"><span>循环泵频率</span><span>35Hz</span></div><el-slider v-model="freq" :min="0" :max="50" :step="5" show-stops /></div>
        <div class="bd-slider-block" style="grid-column: span 2"><div class="bd-slider-block__head"><span>片区负荷率（标记）</span><span>72%</span></div><el-slider v-model="load" :min="0" :max="100" :marks="{ 0: '0%', 50: '50%', 100: '100%' }" /></div>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">状态 / STATE<span class="bd-section__meta">normal · disabled · vertical</span></div><div class="bd-stage"><div class="bd-slider-grid">
        <div class="bd-slider-block"><div class="bd-slider-block__head"><span>告警灵敏度</span><span>68%</span></div><el-slider v-model="sensitivity" /></div>
        <div class="bd-slider-block" style="opacity:.5"><div class="bd-slider-block__head"><span>阀门开度（只读）</span><span>64%</span></div><el-slider v-model="opening" disabled /></div>
        <div class="bd-slider-block" style="display:flex;justify-content:center;height:220px"><el-slider v-model="vertical" vertical height="180px" /></div>
        <div class="bd-slider-block"><div class="bd-slider-block__head"><span>补水率上限</span><span>18%</span></div><el-slider v-model="makeup" :min="0" :max="30" show-input size="small" /></div>
      </div><p class="bd-note">EP 负责拖动、键盘和刻度；Bedrock 只覆盖颜色与尺寸变量。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">EP props</span></div><pre class="bd-code">&lt;el-slider v-model="value" :min="0" :max="100" :step="5" show-stops /&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElSlider } from 'element-plus'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
const temp = ref(86)
const freq = ref(35)
const load = ref(72)
const sensitivity = ref(68)
const opening = ref(64)
const vertical = ref(58)
const makeup = ref(18)
</script>
