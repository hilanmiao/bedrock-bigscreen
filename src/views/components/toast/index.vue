<template>
  <div class="bd-page">
    <DocsSidebar active="toast" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>交互反馈</span><span>/</span><span>消息提示</span></div>
      <header class="bd-page-head"><h1>消息提示</h1><p>基于 ElMessage 的轻量反馈。success / warning / error / info 四种语义，点击按钮触发，自动消失和关闭交给 Element Plus。</p><div class="bd-tags"><span class="bd-tag">el-message</span><span class="bd-tag">feedback</span><span class="bd-tag">tone</span></div></header>

      <section class="bd-section"><div class="bd-section__head">触发 / TRIGGER<span class="bd-section__meta">4 种语义</span></div><div class="bd-stage"><div class="bd-toast-demo">
        <div class="bd-toast-demo__row">
          <el-button type="success" class="bd-btn" @click="show('success', '保存成功', '配置已生效。')">成功</el-button>
          <el-button type="warning" class="bd-btn" @click="show('warning', '数据延迟', '东港能源站延迟 32 秒。')">预警</el-button>
          <el-button type="danger" class="bd-btn" @click="show('error', '通讯中断', '老城中心站已离线 7 小时。')">错误</el-button>
          <el-button class="bd-btn bd-btn--ghost" @click="show('info', '提示', '报表正在生成中。')">信息</el-button>
        </div>
        <p class="bd-note">点击后右下角弹出；自定义 class 为 bd-toast。</p>
      </div></div></section>

      <section class="bd-section"><div class="bd-section__head">静态结构 / STRUCTURE<span class="bd-section__meta">图标 · 内容 · 关闭</span></div><div class="bd-stage"><div class="bd-alert__card"><b>消息提示</b><span>图标 + 单行或双行文本 + 关闭按钮，由 ElMessage 渲染。</span></div></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">EP API</span></div><pre class="bd-code">ElMessage({
  type: 'success',
  message: '配置已生效。',
  customClass: 'bd-toast bd-toast--success'
})</pre></section>
    </main>
  </div>
</template>
<script setup>
import { ElButton, ElMessage } from 'element-plus'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
function show(type, title, message) {
  ElMessage({ type: type === 'warning' ? 'warning' : type === 'error' ? 'error' : type === 'success' ? 'success' : 'info', message: title + '：' + message, customClass: 'bd-toast bd-toast--' + type })
}
</script>
