<template>
  <div class="bd-page">
    <DocsSidebar active="home" />

    <main class="bd-main">
      <header class="bd-page-head bd-doc-head">
        <div class="bd-eyebrow">BEDROCK UI / DESIGN SYSTEM</div>
        <h1>大屏组件库</h1>
        <p>面向 1920×1080 监控大屏的 Vue 3 + Element Plus 组件体系。深色底、低饱和界面、单一高亮色；信息层级优先于装饰，状态语义先于视觉效果。组件片段只依赖 Element Plus，可直接复制到其他项目；不带 Bedrock 样式时回退 EP 默认外观。</p>
        <div class="bd-tags">
          <span class="bd-tag">Vue 3</span>
          <span class="bd-tag">Element Plus</span>
          <span class="bd-tag">ECharts</span>
          <span class="bd-tag">CSS</span>
        </div>
      </header>

      <section class="bd-section">
        <div class="bd-section__head">设计原则 / PRINCIPLES<span class="bd-section__meta">03</span></div>
        <div class="bd-stage">
          <div class="bd-principles">
            <article class="bd-principle">
              <div class="bd-principle__no">01</div>
              <h3>信息优先</h3>
              <p>数据、状态和趋势先于装饰。边框、发光与网格只用来建立层级，不抢读数。</p>
            </article>
            <article class="bd-principle">
              <div class="bd-principle__no">02</div>
              <h3>状态可读</h3>
              <p>颜色只编码语义，语义、形状、尺寸是相互独立的轴；同一组件在不同状态下保持结构稳定。</p>
            </article>
            <article class="bd-principle">
              <div class="bd-principle__no">03</div>
              <h3>片段可复制</h3>
              <p>组件片段只依赖 Element Plus；复制到其他项目不会引用本地路径，缺少自定义样式时回退 EP 默认外观。</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">色彩体系 / COLOR<span class="bd-section__meta">SURFACE · TEXT · SEMANTIC</span></div>
        <div class="bd-stage">
          <div class="bd-color-group">
            <div class="bd-color-group__title">SURFACE / 背景与线条</div>
            <div class="bd-swatches">
              <div class="bd-swatch" style="--sw: var(--bedrock-bg-0)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>bg-0</span><em>#04090E</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-bg-1)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>bg-1</span><em>#07121A</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-bg-2)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>bg-2</span><em>#0A1A25</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-line-1)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>line-1</span><em>8%</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-line-2)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>line-2</span><em>16%</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-line-3)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>line-3</span><em>30%</em></div></div>
            </div>
          </div>

          <div class="bd-color-group">
            <div class="bd-color-group__title">TEXT / 文本层级</div>
            <div class="bd-swatches">
              <div class="bd-swatch" style="--sw: var(--bedrock-text-1)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>text-1</span><em>#F3FBFF</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-text-2)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>text-2</span><em>#C0D7E5</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-text-3)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>text-3</span><em>#90AABD</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-text-4)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>text-4</span><em>#708B9D</em></div></div>
            </div>
          </div>

          <div class="bd-color-group">
            <div class="bd-color-group__title">SEMANTIC / 语义色</div>
            <div class="bd-swatches">
              <div class="bd-swatch" style="--sw: var(--bedrock-primary)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>primary</span><em>{{ themeTokens.primary }}</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-accent)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>accent</span><em>#F4B95E</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-success)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>success</span><em>#4ADE80</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-warning)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>warning</span><em>#F4B95E</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-danger)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>danger</span><em>#FB7185</em></div></div>
              <div class="bd-swatch" style="--sw: var(--bedrock-info, #5AA8FF)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>info</span><em>#5AA8FF</em></div></div>
            </div>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">主题 / THEME<span class="bd-section__meta">OCEAN · BLUE</span></div>
        <div class="bd-stage">
          <div class="bd-theme-bar">
            <el-radio-group v-model="theme" size="small">
              <el-radio-button value="ocean">Ocean 默认</el-radio-button>
              <el-radio-button value="blue">Blue 实验</el-radio-button>
            </el-radio-group>
            <span class="bd-tag">{{ theme === 'blue' ? 'data-bedrock-theme="blue"' : '默认主题' }}</span>
            <span class="bd-note">切换只影响主色家族；语义色、强调色和背景层级保持不变。</span>
          </div>

          <div class="bd-theme-tokens">
            <div class="bd-swatch" style="--sw: var(--bedrock-primary)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>primary</span><em>{{ themeTokens.primary }}</em></div></div>
            <div class="bd-swatch" style="--sw: var(--bedrock-primary-2)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>primary-2</span><em>{{ themeTokens.primary2 }}</em></div></div>
            <div class="bd-swatch" style="--sw: var(--bedrock-primary-light)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>primary-light</span><em>{{ themeTokens.primaryLight }}</em></div></div>
            <div class="bd-swatch" style="--sw: var(--bedrock-primary-ink)"><div class="bd-swatch__chip"></div><div class="bd-swatch__meta"><span>primary-ink</span><em>{{ themeTokens.primaryInk }}</em></div></div>
          </div>

          <div class="bd-theme-grid">
            <div>
              <div class="bd-label">1 / 激活主题</div>
              <pre class="bd-code">&lt;!-- 默认 Ocean：不写 data 属性 --&gt;
&lt;html class="dark" lang="zh-CN"&gt;

&lt;!-- Blue --&gt;
&lt;html class="dark" data-bedrock-theme="blue" lang="zh-CN"&gt;</pre>
            </div>
            <div>
              <div class="bd-label">2 / 在组件里使用</div>
              <pre class="bd-code">color: var(--bedrock-primary);
background: rgba(var(--bedrock-primary-rgb), .12);
border-color: var(--bedrock-primary-line);
box-shadow: 0 0 8px rgba(var(--bedrock-primary-rgb), .35);</pre>
            </div>
          </div>

          <div class="bd-theme-wide">
            <div class="bd-label">3 / 定义新主题</div>
            <pre class="bd-code">html.dark[data-bedrock-theme="blue"] {
  --bedrock-primary: #2563eb;
  --bedrock-primary-2: #1e40af;
  --bedrock-primary-light: #3b82f6;
  --bedrock-primary-soft: rgba(37, 99, 235, .14);
  --bedrock-primary-line: rgba(37, 99, 235, .42);
  --bedrock-primary-rgb: 37, 99, 235;
  --bedrock-primary-ink: #f5f9ff;
  --el-color-primary: var(--bedrock-primary);
}</pre>
          </div>

          <div class="bd-theme-notes">
            <p class="bd-note">主题只覆盖 primary 家族；success / warning / danger / info / accent 是固定语义色。组件里不要写死主色，统一使用 token 或 rgba(var(--bedrock-primary-rgb), α)。</p>
            <p class="bd-note">新增主题：在 src/assets/styles/themes/ 下新建 SCSS，用相同选择器覆盖 primary token，并在 styles/index.scss 引入。ECharts 在挂载时读取 token，切换主题后需刷新页面重绘。</p>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">字号 / TYPE SCALE<span class="bd-section__meta">12 — 40</span></div>
        <div class="bd-stage">
          <div class="bd-type-row"><span class="bd-type-meta">12 / caption</span><span class="bd-type-sample" style="font-size: 12px">图例、时间戳与辅助说明</span></div>
          <div class="bd-type-row"><span class="bd-type-meta">14 / body</span><span class="bd-type-sample" style="font-size: 14px">正文与表格内容，保持 1.6 行高</span></div>
          <div class="bd-type-row"><span class="bd-type-meta">16 / title</span><span class="bd-type-sample" style="font-size: 16px">面板标题与区块标题</span></div>
          <div class="bd-type-row"><span class="bd-type-meta">20 / section</span><span class="bd-type-sample" style="font-size: 20px">页面区块标题</span></div>
          <div class="bd-type-row"><span class="bd-type-meta">28 / metric</span><span class="bd-type-sample" style="font-size: 28px; font-family: var(--bedrock-font-num)">8.64 万 GJ</span></div>
          <div class="bd-type-row"><span class="bd-type-meta">40 / display</span><span class="bd-type-sample" style="font-size: 40px; font-family: var(--bedrock-font-num)">98.6%</span></div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">间距与圆角 / SPACING & RADIUS<span class="bd-section__meta">4 — 32</span></div>
        <div class="bd-stage">
          <div class="bd-scale-row"><span class="bd-scale-key">4</span><span class="bd-scale-bar" style="width: 16px"></span><span class="bd-scale-value">space-1</span></div>
          <div class="bd-scale-row"><span class="bd-scale-key">8</span><span class="bd-scale-bar" style="width: 32px"></span><span class="bd-scale-value">space-2</span></div>
          <div class="bd-scale-row"><span class="bd-scale-key">12</span><span class="bd-scale-bar" style="width: 48px"></span><span class="bd-scale-value">space-3</span></div>
          <div class="bd-scale-row"><span class="bd-scale-key">16</span><span class="bd-scale-bar" style="width: 64px"></span><span class="bd-scale-value">space-4</span></div>
          <div class="bd-scale-row"><span class="bd-scale-key">24</span><span class="bd-scale-bar" style="width: 96px"></span><span class="bd-scale-value">space-6</span></div>
          <div class="bd-scale-row"><span class="bd-scale-key">32</span><span class="bd-scale-bar" style="width: 128px"></span><span class="bd-scale-value">space-7</span></div>

          <div class="bd-radius-row" style="margin-top: 22px">
            <div class="bd-radius-item"><div class="bd-radius-box" style="border-radius: 2px"></div><span>2 / xs</span></div>
            <div class="bd-radius-item"><div class="bd-radius-box" style="border-radius: 4px"></div><span>4 / sm</span></div>
            <div class="bd-radius-item"><div class="bd-radius-box" style="border-radius: 7px"></div><span>7 / md</span></div>
            <div class="bd-radius-item"><div class="bd-radius-box" style="border-radius: 10px"></div><span>10 / lg</span></div>
            <div class="bd-radius-item"><div class="bd-radius-box" style="border-radius: 999px"></div><span>pill</span></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import { ElRadioButton, ElRadioGroup } from 'element-plus'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'

const theme = ref(document.documentElement.dataset.bedrockTheme === 'blue' ? 'blue' : 'ocean')
const themeTokens = ref({
  primary: '#3FE0CF',
  primary2: '#1FA4B8',
  primaryLight: '#74F4E5',
  primaryInk: '#03201D'
})
const tokenMap = {
  primary: '--bedrock-primary',
  primary2: '--bedrock-primary-2',
  primaryLight: '--bedrock-primary-light',
  primaryInk: '--bedrock-primary-ink'
}

function readThemeTokens() {
  const styles = getComputedStyle(document.documentElement)
  themeTokens.value = Object.fromEntries(
    Object.entries(tokenMap).map(([key, token]) => [key, styles.getPropertyValue(token).trim()])
  )
}

function applyTheme(value) {
  const root = document.documentElement
  if (value === 'blue') root.setAttribute('data-bedrock-theme', 'blue')
  else root.removeAttribute('data-bedrock-theme')
  nextTick(readThemeTokens)
}

watch(theme, applyTheme)
onMounted(readThemeTokens)
</script>

<style lang="scss" src="./home.scss"></style>
