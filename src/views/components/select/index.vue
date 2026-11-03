<template>
  <div class="bd-page">
    <DocsSidebar active="select" />
    <main class="bd-main">
      <div class="bd-crumb"><RouterLink to="/">组件总览</RouterLink><span>/</span><span>交互反馈</span><span>/</span><span>下拉选择</span></div>
      <header class="bd-page-head"><h1>下拉选择</h1><p>基于 ElSelect。支持单选、多选、清空和选项描述；触发器与下拉面板只改样式。</p><div class="bd-tags"><span class="bd-tag">el-select</span><span class="bd-tag">form</span><span class="bd-tag">multiple</span></div></header>

      <section class="bd-section"><div class="bd-section__head">单选 / 多选<span class="bd-section__meta">single · multiple · clearable</span></div><div class="bd-stage"><div class="bd-select-row">
        <el-select v-model="single" class="bd-select" popper-class="bd-select-popper">
          <el-option v-for="o in options" :key="o.value" :label="o.label" :value="o.value"><span>{{ o.label }}</span><small>{{ o.desc }}</small></el-option>
        </el-select>
        <el-select v-model="multi" class="bd-select" multiple collapse-tags popper-class="bd-select-popper">
          <el-option v-for="o in options" :key="o.value" :label="o.label" :value="o.value"><span>{{ o.label }}</span><small>{{ o.desc }}</small></el-option>
        </el-select>
        <el-select v-model="empty" class="bd-select" clearable placeholder="选择片区" popper-class="bd-select-popper">
          <el-option v-for="o in options" :key="o.value" :label="o.label" :value="o.value" />
        </el-select>
      </div><p class="bd-note">下拉面板通过 <code>popper-class</code> 挂样式，不改 EP 组件逻辑。</p></div></section>

      <section class="bd-section"><div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">EP props</span></div><pre class="bd-code">&lt;el-select v-model="value" class="bd-select" popper-class="bd-select-popper"&gt;
  &lt;el-option label="城北片区" value="north" /&gt;
&lt;/el-select&gt;</pre></section>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElSelect, ElOption } from 'element-plus'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
const options = [
  { label: '城北片区', value: 'north', desc: '12,846 只表具' },
  { label: '滨江片区', value: 'river', desc: '8,420 只表具' },
  { label: '高新片区', value: 'high', desc: '6,180 只表具' },
  { label: '东港片区', value: 'east', desc: '4,920 只表具' }
]
const single = ref('north')
const multi = ref(['north', 'river'])
const empty = ref('')
</script>
