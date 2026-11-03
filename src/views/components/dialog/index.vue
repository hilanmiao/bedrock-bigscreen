<template>
  <div class="bd-page">
    <DocsSidebar active="dialog" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>交互反馈</span><span>/</span><span>Dialog</span></div>
      <header class="bd-page-head"><h1>Dialog</h1><p>基于 ElDialog 的页面弹窗。基础 / 详情 / 确认三种示例，只改遮罩下的视觉；开合、焦点和关闭逻辑交给 Element Plus。</p><div class="bd-tags"><span class="bd-tag">el-dialog</span><span class="bd-tag">overlay</span><span class="bd-tag">interaction</span></div></header>

      <section class="bd-section"><div class="bd-section__head">触发 / TRIGGER<span class="bd-section__meta">basic · wide · confirm</span></div><div class="bd-stage"><div class="bd-row">
        <el-button type="primary" class="bd-btn" @click="basic = true">基础弹窗</el-button>
        <el-button class="bd-btn bd-btn--outline" @click="wide = true">详情弹窗</el-button>
        <el-button type="danger" class="bd-btn" @click="confirm = true">确认操作</el-button>
      </div><p class="bd-note">弹窗打开后由 EP 负责 ESC / 遮罩 / 焦点恢复，样式类为 bd-dialog。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">结构 / STRUCTURE<span class="bd-section__meta">标题 · 内容 · 底部操作</span></div><div class="bd-stage"><div class="bd-dialog__grid"><div class="bd-dialog__field"><span>HEADER</span><b>标题栏</b></div><div class="bd-dialog__field"><span>BODY</span><b>内容区</b></div><div class="bd-dialog__field"><span>FOOTER</span><b>操作区</b></div><div class="bd-dialog__field"><span>OVERLAY</span><b>遮罩</b></div></div></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">EP props</span></div><pre class="bd-code">&lt;el-dialog v-model="visible" class="bd-dialog" title="设备详情" width="460px"&gt;
  &lt;div&gt;...&lt;/div&gt;
  &lt;template #footer&gt;
    &lt;el-button class="bd-btn" @click="visible = false"&gt;关闭&lt;/el-button&gt;
  &lt;/template&gt;
&lt;/el-dialog&gt;</pre></section>

      <el-dialog v-model="basic" class="bd-dialog" title="系统提示" width="420px">
        <div class="bd-dialog__eyebrow">NOTICE</div>
        配置已保存，新的策略将在下一个采集周期生效。
        <template #footer><div class="bd-dialog__actions"><el-button class="bd-btn" @click="basic = false">关闭</el-button><el-button type="primary" class="bd-btn" @click="basic = false">知道了</el-button></div></template>
      </el-dialog>
      <el-dialog v-model="wide" class="bd-dialog bd-dialog--wide" title="滨江换热站 · 3# 机组" width="680px">
        <div class="bd-dialog__eyebrow">DEVICE DETAIL</div>
        <div class="bd-dialog__grid"><div class="bd-dialog__field"><span>供水温度</span><b>86.4℃</b></div><div class="bd-dialog__field"><span>二次压力</span><b>0.46 MPa</b></div><div class="bd-dialog__field"><span>瞬时流量</span><b>128.6 t/h</b></div><div class="bd-dialog__field"><span>今日补水量</span><b>12.4 t</b></div></div>
        <template #footer><div class="bd-dialog__actions"><el-button class="bd-btn" @click="wide = false">关闭</el-button><el-button type="primary" class="bd-btn" @click="wide = false">立即派单</el-button></div></template>
      </el-dialog>
      <el-dialog v-model="confirm" class="bd-dialog" title="确认广播" width="420px">
        <div class="bd-dialog__eyebrow">EMERGENCY</div>
        将通过应急广播向 3 个小区推送停暖通知，确认执行？
        <template #footer><div class="bd-dialog__actions"><el-button class="bd-btn" @click="confirm = false">取消</el-button><el-button type="danger" class="bd-btn" @click="confirm = false">确认广播</el-button></div></template>
      </el-dialog>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
const basic = ref(false)
const wide = ref(false)
const confirm = ref(false)
</script>
