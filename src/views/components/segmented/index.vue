<template>
  <div class="bd-page">
    <DocsSidebar active="segmented" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>交互反馈</span><span>/</span><span>分段控制</span></div>
      <header class="bd-page-head"><h1>分段控制</h1><p>基于 ElRadioGroup / ElRadioButton 的互斥分段。pill / square 两种形态、三档尺寸与 block 布局。</p><div class="bd-tags"><span class="bd-tag">el-radio-group</span><span class="bd-tag">form</span><span class="bd-tag">segmented</span></div></header>

      <section class="bd-section"><div class="bd-section__head">形态 × 尺寸 / VARIANT × SIZE<span class="bd-section__meta">pill · square × sm · md · lg</span></div><div class="bd-stage"><div class="bd-stack">
        <el-radio-group v-model="day" class="bd-segmented"><el-radio-button label="日" value="day" /><el-radio-button label="周" value="week" /><el-radio-button label="月" value="month" /></el-radio-group>
        <el-radio-group v-model="day" class="bd-segmented bd-segmented--sm"><el-radio-button label="日" value="day" /><el-radio-button label="周" value="week" /><el-radio-button label="月" value="month" /></el-radio-group>
        <el-radio-group v-model="day" class="bd-segmented bd-segmented--lg"><el-radio-button label="日" value="day" /><el-radio-button label="周" value="week" /><el-radio-button label="月" value="month" /></el-radio-group>
        <el-radio-group v-model="mode" class="bd-segmented bd-segmented--square"><el-radio-button label="设备" value="device" /><el-radio-button label="告警" value="alert" /><el-radio-button label="工单" value="ticket" /></el-radio-group>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">Block / 等宽<span class="bd-section__meta">撑满容器</span></div><div class="bd-stage"><el-radio-group v-model="period" class="bd-segmented bd-segmented--block"><el-radio-button label="近 24 小时" value="24h" /><el-radio-button label="近 7 日" value="7d" /><el-radio-button label="近 30 日" value="30d" /></el-radio-group></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">EP props + class</span></div><pre class="bd-code">&lt;el-radio-group v-model="day" class="bd-segmented bd-segmented--block"&gt;
  &lt;el-radio-button label="日" value="day" /&gt;
  &lt;el-radio-button label="周" value="week" /&gt;
&lt;/el-radio-group&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElRadioGroup, ElRadioButton } from 'element-plus'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
const day = ref('day')
const mode = ref('device')
const period = ref('7d')
</script>
