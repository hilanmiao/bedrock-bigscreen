<template>
  <div class="bd-page">
    <DocsSidebar active="tabs" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>交互反馈</span><span>/</span><span>页签</span></div>
      <header class="bd-page-head"><h1>页签</h1><p>基于 ElTabs。提供默认下划线、card、pill 三种外观，计数与禁用状态通过 slot / prop 保留。</p><div class="bd-tags"><span class="bd-tag">el-tabs</span><span class="bd-tag">nav</span><span class="bd-tag">variant</span></div></header>

      <section class="bd-section"><div class="bd-section__head">形态 / VARIANT<span class="bd-section__meta">line · card · pill</span></div><div class="bd-stage"><div class="bd-stack">
        <el-tabs class="bd-tabs" default-value="a">
          <el-tab-pane label="实时告警" name="a"><div class="bd-tabs__panel">实时告警内容区</div></el-tab-pane>
          <el-tab-pane name="b"><template #label>历史记录<span class="el-tabs__item__count">17</span></template><div class="bd-tabs__panel">历史记录内容区</div></el-tab-pane>
          <el-tab-pane label="已闭环" name="c" disabled><div class="bd-tabs__panel">已闭环内容区</div></el-tab-pane>
        </el-tabs>
        <el-tabs class="bd-tabs bd-tabs--card" type="card" default-value="a">
          <el-tab-pane label="设备" name="a"><div class="bd-tabs__panel">设备页签内容</div></el-tab-pane>
          <el-tab-pane label="告警" name="b"><div class="bd-tabs__panel">告警页签内容</div></el-tab-pane>
          <el-tab-pane label="工单" name="c"><div class="bd-tabs__panel">工单页签内容</div></el-tab-pane>
        </el-tabs>
        <el-tabs class="bd-tabs bd-tabs--pill" default-value="day">
          <el-tab-pane label="日" name="day"><div class="bd-tabs__panel">日视图</div></el-tab-pane>
          <el-tab-pane label="周" name="week"><div class="bd-tabs__panel">周视图</div></el-tab-pane>
          <el-tab-pane label="月" name="month"><div class="bd-tabs__panel">月视图</div></el-tab-pane>
        </el-tabs>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">EP props + class</span></div><pre class="bd-code">&lt;el-tabs class="bd-tabs bd-tabs--pill" default-value="day"&gt;
  &lt;el-tab-pane label="日" name="day"&gt;...&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label="周" name="week"&gt;...&lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import { ElTabs, ElTabPane } from 'element-plus'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
