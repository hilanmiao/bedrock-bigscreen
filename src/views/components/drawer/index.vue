<template>
  <div class="bd-page">
    <DocsSidebar active="drawer" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>交互反馈</span><span>/</span><span>抽屉面板</span></div>
      <header class="bd-page-head"><h1>抽屉面板</h1><p>基于 ElDrawer。左 / 右 / 下三向和三档尺寸，遮罩、ESC 与焦点恢复交给 Element Plus。</p><div class="bd-tags"><span class="bd-tag">el-drawer</span><span class="bd-tag">placement</span><span class="bd-tag">size</span></div></header>

      <section class="bd-section"><div class="bd-section__head">位置 / PLACEMENT<span class="bd-section__meta">left · right · bottom</span></div><div class="bd-stage"><div class="bd-row">
        <el-button class="bd-btn" @click="left = true">左侧 · 窄</el-button>
        <el-button type="primary" class="bd-btn" @click="right = true">右侧 · 宽</el-button>
        <el-button class="bd-btn bd-btn--ghost" @click="bottom = true">底部 · 中</el-button>
      </div><p class="bd-note">EP 负责滑入方向、遮罩与关闭；Bedrock 只处理标题栏和字段样式。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">结构 / STRUCTURE<span class="bd-section__meta">header · body · footer</span></div><div class="bd-stage"><div class="bd-drawer__grid"><div class="bd-drawer__field"><span>HEADER</span><b>标题</b></div><div class="bd-drawer__field"><span>BODY</span><b>内容</b></div><div class="bd-drawer__field"><span>FOOTER</span><b>操作</b></div><div class="bd-drawer__field"><span>OVERLAY</span><b>遮罩</b></div></div></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">EP props</span></div><pre class="bd-code">&lt;el-drawer v-model="visible" class="bd-drawer" direction="rtl" size="560px" title="设备详情"&gt;
  &lt;div&gt;...&lt;/div&gt;
&lt;/el-drawer&gt;</pre></section>

      <el-drawer v-model="left" class="bd-drawer" direction="ltr" size="340px" title="筛选条件"><div class="bd-drawer__eyebrow">FILTER</div><p>按片区与设备状态过滤。</p><template #footer><el-button class="bd-btn" @click="left = false">重置</el-button><el-button type="primary" class="bd-btn" @click="left = false">应用</el-button></template></el-drawer>
      <el-drawer v-model="right" class="bd-drawer" direction="rtl" size="560px" title="滨江换热站 · 3# 机组"><div class="bd-drawer__eyebrow">DEVICE DETAIL</div><div class="bd-drawer__grid"><div class="bd-drawer__field"><span>供水温度</span><b>86.4℃</b></div><div class="bd-drawer__field"><span>二次压力</span><b>0.46 MPa</b></div></div><template #footer><el-button class="bd-btn" @click="right = false">关闭</el-button><el-button type="primary" class="bd-btn" @click="right = false">派单</el-button></template></el-drawer>
      <el-drawer v-model="bottom" class="bd-drawer" direction="btt" size="50%" title="批量下发指令"><div class="bd-drawer__eyebrow">BATCH ACTION</div><p>已选择 6 台设备。</p><template #footer><el-button class="bd-btn" @click="bottom = false">取消</el-button><el-button type="primary" class="bd-btn" @click="bottom = false">确认下发</el-button></template></el-drawer>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElButton, ElDrawer } from 'element-plus'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
const left = ref(false)
const right = ref(false)
const bottom = ref(false)
</script>
