<template>
  <div class="bd-page">
    <DocsSidebar active="button" />

    <main class="bd-main">
      <div class="bd-crumb">
        <RouterLink to="/">组件总览</RouterLink>
        <span>/</span>
        <span>交互反馈</span>
        <span>/</span>
        <span>按钮</span>
      </div>

      <header class="bd-page-head">
        <h1>按钮</h1>
        <p>基于 el-button，只重写样式。语义、形状、尺寸、状态四个轴相互独立，保留 Element Plus 的 loading、disabled、图标与键盘能力。</p>
        <div class="bd-tags">
          <span class="bd-tag">el-button</span>
          <span class="bd-tag">shape</span>
          <span class="bd-tag">variant</span>
          <span class="bd-tag">state</span>
        </div>
      </header>

      <section class="bd-section">
        <div class="bd-section__head">语义 / VARIANT<span class="bd-section__meta">8 种</span></div>
        <div class="bd-stage">
          <div class="bd-row">
            <el-button type="primary" class="bd-btn bd-btn--cut">
              <el-icon><VideoPlay /></el-icon>启动系统
            </el-button>
            <el-button type="primary" plain class="bd-btn">运行工况</el-button>
            <el-button class="bd-btn bd-btn--ghost bd-btn--sharp">
              <span class="bd-btn__led"></span>实时监视
            </el-button>
            <el-button class="bd-btn bd-btn--outline bd-btn--bracket">数据校验</el-button>
            <el-button type="danger" class="bd-btn bd-btn--cut">紧急广播</el-button>
            <el-button type="warning" class="bd-btn">预警提示</el-button>
            <el-button type="success" class="bd-btn">已恢复</el-button>
            <el-button text class="bd-btn">查看记录 →</el-button>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">类型 × 强调 / TYPE × EMPHASIS<span class="bd-section__meta">5 种语义 × 实心 / plain / text</span></div>
        <div class="bd-stage bd-emphasis">
          <div class="bd-emphasis-row">
            <span class="bd-emphasis-label">SOLID</span>
            <el-button type="primary" class="bd-btn">primary</el-button>
            <el-button type="danger" class="bd-btn">danger</el-button>
            <el-button type="warning" class="bd-btn">warning</el-button>
            <el-button type="success" class="bd-btn">success</el-button>
            <el-button type="info" class="bd-btn">info</el-button>
          </div>
          <div class="bd-emphasis-row">
            <span class="bd-emphasis-label">PLAIN</span>
            <el-button type="primary" plain class="bd-btn">primary</el-button>
            <el-button type="danger" plain class="bd-btn">danger</el-button>
            <el-button type="warning" plain class="bd-btn">warning</el-button>
            <el-button type="success" plain class="bd-btn">success</el-button>
            <el-button type="info" plain class="bd-btn">info</el-button>
          </div>
          <div class="bd-emphasis-row">
            <span class="bd-emphasis-label">TEXT</span>
            <el-button type="primary" text class="bd-btn">primary</el-button>
            <el-button type="danger" text class="bd-btn">danger</el-button>
            <el-button type="warning" text class="bd-btn">warning</el-button>
            <el-button type="success" text class="bd-btn">success</el-button>
            <el-button type="info" text class="bd-btn">info</el-button>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">形状 / FRAME<span class="bd-section__meta">7 种边角 + 命令按钮</span></div>
        <div class="bd-stage">
          <div class="bd-shape-grid">
            <div class="bd-shape-cell">
              <el-button class="bd-btn bd-btn--ghost bd-btn--sharp">sharp</el-button>
              <span class="bd-label">直角</span>
            </div>
            <div class="bd-shape-cell">
              <el-button class="bd-btn bd-btn--ghost bd-btn--rounded">rounded</el-button>
              <span class="bd-label">小圆角</span>
            </div>
            <div class="bd-shape-cell">
              <el-button type="primary" plain round class="bd-btn">round</el-button>
              <span class="bd-label">胶囊（EP round）</span>
            </div>
            <div class="bd-shape-cell">
              <el-button type="primary" class="bd-btn bd-btn--cut">cut</el-button>
              <span class="bd-label">切角</span>
            </div>
            <div class="bd-shape-cell">
              <el-button class="bd-btn bd-btn--outline bd-btn--bracket">bracket</el-button>
              <span class="bd-label">四角括号</span>
            </div>
            <div class="bd-shape-cell">
              <el-button text class="bd-btn bd-btn--underline">underline</el-button>
              <span class="bd-label">下划线（EP text）</span>
            </div>
            <div class="bd-shape-cell">
              <el-button
                circle
                class="bd-btn bd-btn--ghost bd-btn--icon"
                aria-label="搜索"
              >
                <el-icon><Search /></el-icon>
              </el-button>
              <span class="bd-label">circle（EP）</span>
            </div>
            <div class="bd-shape-cell">
              <el-button class="bd-btn bd-btn--command">
                <span class="bd-btn__text">
                  <span class="bd-btn__title">切换运行工况</span>
                  <span class="bd-btn__sub">MODE SWITCH</span>
                </span>
              </el-button>
              <span class="bd-label">command</span>
            </div>
          </div>
          <p class="bd-note">形状修饰类互斥，只取一个；command 是独立形态，不叠加其他 frame。ghost / outline 是独立强调，不与 type / plain / text 叠加；selected 用于 ghost / outline，active 只用于 group。</p>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">尺寸 × 状态 / SIZE × STATE<span class="bd-section__meta">small · default · large</span></div>
        <div class="bd-stage">
          <div class="bd-label">尺寸 / SIZE</div>
          <div class="bd-row" style="margin-bottom: 22px">
            <el-button size="small" type="primary" class="bd-btn bd-btn--cut">小尺寸</el-button>
            <el-button type="primary" class="bd-btn bd-btn--cut">标准尺寸</el-button>
            <el-button size="large" type="primary" class="bd-btn bd-btn--cut">大尺寸</el-button>
          </div>

          <div class="bd-label">状态 / STATE</div>
          <div class="bd-row">
            <el-button type="primary" class="bd-btn" loading>正在派单</el-button>
            <el-button class="bd-btn bd-btn--ghost" disabled>已停用</el-button>
            <el-button type="danger" class="bd-btn" disabled>禁止广播</el-button>
            <el-button class="bd-btn bd-btn--outline bd-btn--selected">已选中</el-button>
            <el-button
              circle
              class="bd-btn bd-btn--ghost bd-btn--icon"
              aria-label="刷新"
            >
              <el-icon><Refresh /></el-icon>
            </el-button>
            <el-button
              type="primary"
              plain
              circle
              class="bd-btn bd-btn--icon"
              aria-label="通知"
            >
              <el-icon><Bell /></el-icon>
            </el-button>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">组合 / GROUP<span class="bd-section__meta">互斥选择</span></div>
        <div class="bd-stage">
          <div class="bd-row">
            <el-button-group class="bd-btn-group">
              <el-button class="bd-btn bd-btn--active">日</el-button>
              <el-button class="bd-btn">周</el-button>
              <el-button class="bd-btn">月</el-button>
            </el-button-group>
            <el-button-group class="bd-btn-group">
              <el-button class="bd-btn bd-btn--active">设备</el-button>
              <el-button class="bd-btn">告警</el-button>
              <el-button class="bd-btn">工单</el-button>
            </el-button-group>
            <el-button class="bd-btn bd-btn--ghost">
              <el-icon><Download /></el-icon>导出
            </el-button>
          </div>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">EP 映射 / MAPPING<span class="bd-section__meta">EP 优先，Bedrock 只补缺口</span></div>
        <div class="bd-stage">
          <table class="bd-map">
            <thead>
              <tr>
                <th>页面写法</th>
                <th>Element Plus 能力</th>
                <th>归属</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>type="primary / danger / warning / success / info"</code></td><td><code>type</code></td><td><span class="bd-map__tag bd-map__tag--ep">EP</span></td></tr>
              <tr><td><code>size="small / large"</code></td><td><code>size</code></td><td><span class="bd-map__tag bd-map__tag--ep">EP</span></td></tr>
              <tr><td><code>plain</code></td><td><code>plain</code>（全部 type）</td><td><span class="bd-map__tag bd-map__tag--ep">EP</span></td></tr>
              <tr><td><code>text</code></td><td><code>text</code>（全部 type）</td><td><span class="bd-map__tag bd-map__tag--ep">EP</span></td></tr>
              <tr><td><code>round</code></td><td><code>round</code></td><td><span class="bd-map__tag bd-map__tag--ep">EP</span></td></tr>
              <tr><td><code>circle</code></td><td><code>circle</code></td><td><span class="bd-map__tag bd-map__tag--ep">EP</span></td></tr>
              <tr><td><code>loading</code> / <code>disabled</code></td><td>props</td><td><span class="bd-map__tag bd-map__tag--ep">EP</span></td></tr>
              <tr><td><code>&lt;el-button-group&gt;</code></td><td>ButtonGroup</td><td><span class="bd-map__tag bd-map__tag--ep">EP</span></td></tr>
              <tr><td><code>bd-btn--sharp / rounded / cut / bracket / underline</code></td><td>无对应轴</td><td><span class="bd-map__tag bd-map__tag--bd">Bedrock</span></td></tr>
              <tr><td><code>bd-btn--ghost / outline</code></td><td>无对应强调</td><td><span class="bd-map__tag bd-map__tag--bd">Bedrock</span></td></tr>
              <tr><td><code>bd-btn--command / icon</code></td><td>无对应形态</td><td><span class="bd-map__tag bd-map__tag--bd">Bedrock</span></td></tr>
              <tr><td><code>bd-btn--selected / bd-btn--active</code></td><td>无对应状态</td><td><span class="bd-map__tag bd-map__tag--bd">Bedrock</span></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="bd-section">
        <div class="bd-section__head">用法 / USAGE<span class="bd-section__meta">EP props + Bedrock 修饰类</span></div>
        <pre class="bd-code">&lt;el-button type="primary" class="bd-btn bd-btn--cut"&gt;启动系统&lt;/el-button&gt;
&lt;el-button size="small" class="bd-btn bd-btn--ghost" :loading="loading"&gt;派单&lt;/el-button&gt;</pre>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ElButton, ElButtonGroup, ElIcon } from 'element-plus'
import { Bell, Download, Refresh, Search, VideoPlay } from '@element-plus/icons-vue'
import DocsSidebar from '@/views/docs/DocsSidebar.vue'
</script>
