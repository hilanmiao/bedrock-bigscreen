<template>
  <div class="bd-page">
    <DocsSidebar active="panel" />

    <main class="bd-main">
      <div class="bd-crumb">
        <RouterLink to="/">组件总览</RouterLink>
        <span>/</span>
        <span>布局容器</span>
        <span>/</span>
        <span>面板容器</span>
      </div>

      <header class="bd-page-head">
        <h1>面板容器</h1>
        <p>大屏里承载图表和数据区块的基础容器。边框形态、密度和状态三个轴独立组合，标题栏支持 meta 与文字操作。</p>
        <div class="bd-tags">
          <span class="bd-tag">css-only</span>
          <span class="bd-tag">panel</span>
          <span class="bd-tag">layout</span>
        </div>
      </header>

      <section class="bd-section">
        <div class="bd-section__head">形态 / FRAME<span class="bd-section__meta">line · bracket · cut</span></div>
        <div class="bd-stage">
          <div class="bd-panel-grid">
            <article class="bd-panel">
              <header class="bd-panel__head">
                <span class="bd-panel__title">区域能耗</span>
                <span class="bd-panel__meta">近 24h</span>
              </header>
              <div class="bd-panel__body">
                <div class="bd-panel-demo">
                  <div><span>供热量</span><strong>8.64<em>万 GJ</em></strong></div>
                  <div><span>补水率</span><strong>1.8<em>%</em></strong></div>
                  <div><span>在线率</span><strong>98.6<em>%</em></strong></div>
                </div>
              </div>
            </article>

            <article class="bd-panel bd-panel--bracket">
              <header class="bd-panel__head">
                <span class="bd-panel__title">站点负荷</span>
                <span class="bd-panel__meta">实时</span>
              </header>
              <div class="bd-panel__body">
                <div class="bd-panel-demo">
                  <div><span>城北站</span><strong>72<em>%</em></strong></div>
                  <div><span>滨江站</span><strong>64<em>%</em></strong></div>
                  <div><span>东港站</span><strong>51<em>%</em></strong></div>
                </div>
              </div>
            </article>

            <article class="bd-panel bd-panel--cut">
              <header class="bd-panel__head">
                <span class="bd-panel__title">告警趋势</span>
                <span class="bd-panel__meta">近 7 日</span>
              </header>
              <div class="bd-panel__body">
                <div class="bd-panel-demo">
                  <div><span>严重</span><strong>03<em>条</em></strong></div>
                  <div><span>预警</span><strong>17<em>条</em></strong></div>
                  <div><span>已闭环</span><strong>92<em>%</em></strong></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">密度 / DENSITY<span class="bd-section__meta">compact · standard · comfortable</span></div>
        <div class="bd-stage">
          <div class="bd-stack">
            <article class="bd-panel bd-panel--compact">
              <header class="bd-panel__head">
                <span class="bd-panel__title">Compact / 紧凑</span>
                <span class="bd-panel__meta">10px padding · 34px head</span>
              </header>
              <div class="bd-panel__body">
                <div class="bd-panel-demo">
                  <div><span>供水温度</span><strong>86.4<em>℃</em></strong></div>
                  <div><span>回水温度</span><strong>46.2<em>℃</em></strong></div>
                  <div><span>二次压力</span><strong>0.46<em>MPa</em></strong></div>
                </div>
              </div>
            </article>

            <article class="bd-panel">
              <header class="bd-panel__head">
                <span class="bd-panel__title">Standard / 标准</span>
                <span class="bd-panel__meta">16px padding · 42px head</span>
              </header>
              <div class="bd-panel__body">
                <div class="bd-panel-demo">
                  <div><span>供水温度</span><strong>86.4<em>℃</em></strong></div>
                  <div><span>回水温度</span><strong>46.2<em>℃</em></strong></div>
                  <div><span>二次压力</span><strong>0.46<em>MPa</em></strong></div>
                </div>
              </div>
            </article>

            <article class="bd-panel bd-panel--comfortable">
              <header class="bd-panel__head">
                <span class="bd-panel__title">Comfortable / 宽松</span>
                <span class="bd-panel__meta">22px padding · 50px head</span>
              </header>
              <div class="bd-panel__body">
                <div class="bd-panel-demo">
                  <div><span>供水温度</span><strong>86.4<em>℃</em></strong></div>
                  <div><span>回水温度</span><strong>46.2<em>℃</em></strong></div>
                  <div><span>二次压力</span><strong>0.46<em>MPa</em></strong></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">状态 / STATE<span class="bd-section__meta">default · info · warn · error</span></div>
        <div class="bd-stage">
          <div class="bd-panel-grid bd-panel-grid--4">
            <article class="bd-panel">
              <header class="bd-panel__head"><span class="bd-panel__title">默认</span></header>
              <div class="bd-panel__body"><div class="bd-panel-demo" style="grid-template-columns: 1fr"><div><span>状态</span><strong>运行中</strong></div></div></div>
            </article>
            <article class="bd-panel bd-panel--info">
              <header class="bd-panel__head"><span class="bd-panel__title">信息</span></header>
              <div class="bd-panel__body"><div class="bd-panel-demo" style="grid-template-columns: 1fr"><div><span>状态</span><strong>已同步</strong></div></div></div>
            </article>
            <article class="bd-panel bd-panel--warn">
              <header class="bd-panel__head"><span class="bd-panel__title">预警</span></header>
              <div class="bd-panel__body"><div class="bd-panel-demo" style="grid-template-columns: 1fr"><div><span>状态</span><strong>需关注</strong></div></div></div>
            </article>
            <article class="bd-panel bd-panel--error">
              <header class="bd-panel__head"><span class="bd-panel__title">异常</span></header>
              <div class="bd-panel__body"><div class="bd-panel-demo" style="grid-template-columns: 1fr"><div><span>状态</span><strong>已断流</strong></div></div></div>
            </article>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">组合 / COMPOSE<span class="bd-section__meta">bracket · compact · warn + action / foot</span></div>
        <div class="bd-stage">
          <article class="bd-panel bd-panel--bracket bd-panel--compact bd-panel--warn">
            <header class="bd-panel__head">
              <span class="bd-panel__title">滨江换热站 · 实时运行</span>
              <span class="bd-panel__meta">09:42:16</span>
              <button class="bd-panel__action">查看详情 →</button>
            </header>
            <div class="bd-panel__body">
              <div class="bd-panel-demo">
                <div><span>二次压力</span><strong>0.31<em>MPa</em></strong></div>
                <div><span>供水温度</span><strong>86.4<em>℃</em></strong></div>
                <div><span>瞬时流量</span><strong>128.6<em>t/h</em></strong></div>
              </div>
            </div>
            <footer class="bd-panel__foot"><span>数据源：SCADA</span><span>更新于 12 秒前</span></footer>
          </article>
          <p class="bd-note">纯 CSS 组件，不依赖 Element Plus；复制片段时只需携带 panel.scss 或对应样式。</p>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">纯 CSS</span></div>
        <pre class="bd-code">&lt;article class="bd-panel bd-panel--bracket bd-panel--warn"&gt;
  &lt;header class="bd-panel__head"&gt;
    &lt;span class="bd-panel__title"&gt;滨江换热站 · 实时运行&lt;/span&gt;
    &lt;span class="bd-panel__meta"&gt;09:42:16&lt;/span&gt;
    &lt;button class="bd-panel__action"&gt;查看详情 →&lt;/button&gt;
  &lt;/header&gt;
  &lt;div class="bd-panel__body"&gt;...&lt;/div&gt;
&lt;/article&gt;</pre>
      </section>
    </main>
  </div>
</template>

<script setup>
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
