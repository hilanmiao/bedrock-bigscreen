<template>
  <div class="bd-page">
    <DocsSidebar active="switch" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>交互反馈</span><span>/</span><span>开关</span></div>
      <header class="bd-page-head"><h1>开关</h1><p>基于 Element Plus Switch，只改轨道与主色。支持尺寸、开 / 关、禁用和 loading，标签与说明留在外部组合。</p><div class="bd-tags"><span class="bd-tag">el-switch</span><span class="bd-tag">form</span><span class="bd-tag">state</span></div></header>

      <section class="bd-section"><div class="bd-section__head">尺寸 / SIZE<span class="bd-section__meta">small · default · large</span></div><div class="bd-stage">
        <div class="bd-switch-row"><div class="bd-switch-row__text"><span class="bd-switch-row__label">SM / 自动调节</span><span class="bd-switch-row__desc">按回水温度自动修正阀门开度</span></div><el-switch class="bd-switch" size="small" :model-value="true" /></div>
        <div class="bd-switch-row"><div class="bd-switch-row__text"><span class="bd-switch-row__label">MD / 异常推送</span><span class="bd-switch-row__desc">告警触发时推送到值班手机</span></div><el-switch class="bd-switch" :model-value="true" /></div>
        <div class="bd-switch-row"><div class="bd-switch-row__text"><span class="bd-switch-row__label">LG / 夜间模式</span><span class="bd-switch-row__desc">22:00 后降低非关键指标刷新频率</span></div><el-switch class="bd-switch" size="large" :model-value="false" /></div>
      </div></section>

      <section class="bd-section"><div class="bd-section__head">状态 / STATE<span class="bd-section__meta">on · off · disabled · loading</span></div><div class="bd-stage">
        <div class="bd-switch-row"><div class="bd-switch-row__text"><span class="bd-switch-row__label">运行中</span><span class="bd-switch-row__desc">当前策略已启用</span></div><el-switch class="bd-switch" :model-value="true" /><span class="bd-switch-row__state">ON</span></div>
        <div class="bd-switch-row"><div class="bd-switch-row__text"><span class="bd-switch-row__label">已停用</span><span class="bd-switch-row__desc">等待管理员开启</span></div><el-switch class="bd-switch" disabled :model-value="false" /><span class="bd-switch-row__state">OFF</span></div>
        <div class="bd-switch-row"><div class="bd-switch-row__text"><span class="bd-switch-row__label">同步中</span><span class="bd-switch-row__desc">配置正在下发到 12 个站点</span></div><el-switch class="bd-switch" loading :model-value="true" /><span class="bd-switch-row__state">SYNC</span></div>
      </div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">EP props</span></div><pre class="bd-code">&lt;el-switch
  v-model="enabled"
  size="small"
  class="bd-switch"
/&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElSwitch } from 'element-plus'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
const enabled = ref(true)
</script>
