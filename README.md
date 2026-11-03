# Bedrock UI · 大屏组件库

面向 1920×1080 监控大屏的 Vue 3 + Element Plus 组件体系。深色底、低饱和界面、单一主色；状态语义优先于装饰。每个组件一份独立文档页，组件片段可直接复制到其他 Element Plus 项目。

## 技术栈

- Vue 3.5 / Vue Router 5 / Vite 8 / Element Plus 2.14 / ECharts 6.1 / dayjs 1.11 / Sass 1.107
- 全局 token 在 `src/assets/styles/bedrock.scss`
- 组件样式按组件拆分到 `src/assets/styles/components/`
- 图表全部由页面独立初始化 ECharts，不共享 option 封装
- 开发和生产 base 均为 `/frontend/`

## 快速开始

当前验证 Node 24.9.0（LTS）；项目已提供 .nvmrc。

```bash
cd 01-bedrock-bigscreen
npm install
npm run dev
```

默认开发地址：`http://localhost:10070/frontend/`。

## 脚本

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动开发服务器 |
| `npm run build:prod` | 生产构建到 `dist/` |
| `npm run check:fonts` | 字号检查：组件、文档壳和大屏低于 12px 报错，裸 `>=12px` 警告 |

## 页面

共 62 页：58 个组件/视觉组件 + 2 个图标页 + 2 块综合大屏。

- 设计文档首页：`/`
- 组件文档页：`/components/<id>`
- 图标页：`/icons`（120 个本地 SVG）、`/icons-2`（200 个能源域 SVG）
- 综合大屏：`/screens/energy`、`/screens/general`
- 视觉增强：雷达扫描、流光边框、双面翻转卡、频谱柱、轨道节点、脉冲波、数据雨

## 目录结构

```text
src/
  views/
    index.vue                 # 设计文档首页（主题 / 色彩 / 字号 / 间距）
    components/<name>/        # 单组件文档页
    screens/energy|general/   # 两块综合大屏
    icons/ icons2/            # 图标页
  assets/styles/
    bedrock.scss              # 全局 token、reset、EP 变量
    components/*.scss         # 组件样式
    themes/blue.scss          # Blue 主题覆盖
    index.scss                # 样式总入口
  router/index.js             # 组件页自动注册
01-bedrock-bigscreen/nginx.conf # 部署示例
```

## 主题

默认主题是 Ocean，不需要写额外属性：

```html
<html class="dark" lang="zh-CN">
```

启用 Blue 主题时，在根元素加 `data-bedrock-theme`：

```html
<html class="dark" data-bedrock-theme="blue" lang="zh-CN">
```

主题只覆盖 primary 家族，语义色（success / warning / danger / info / accent）保持固定。组件内使用 token，不要写死主色：

```scss
color: var(--bedrock-primary);
background: rgba(var(--bedrock-primary-rgb), .12);
border-color: var(--bedrock-primary-line);
```

新增主题：在 `src/assets/styles/themes/` 下新建 SCSS，用 `html.dark[data-bedrock-theme="..."]` 覆盖 primary token，并在 `src/assets/styles/index.scss` 引入。ECharts 在挂载时读取 token，切换主题后刷新页面才会重绘。

完整示例和实时切换见首页「主题 / THEME」区块。

## 部署

`nginx.conf` 中 8999 端口的 server 已按 `/frontend/` 配置：

- `/` 和 `/frontend` 重定向到 `/frontend/`
- 静态目录 alias 指向 `D:/aobo/bigdata/dist/`
- SPA fallback 到 `/frontend/index.html`

部署前确认 alias 指向实际放置 `dist` 的目录。Vite 构建会自动清空 `dist`，直接构建即可得到当前版本的产物。

## 约定

- 组件类名前缀统一为 `bd-`，不直接使用裸 `btn` 等类名。
- Element Plus 已有的轴优先用 EP props；只有 EP 缺口才写自定义样式。
- 每个组件样式一个 SCSS 文件，在 `styles/index.scss` 注册。
- 组件页复制单位是组件片段，不额外加 DocsLayout 等共享壳。
- 字号统一使用 `--bedrock-fs-*`；ECharts 从 token 读取字号。
- 综合大屏只做布局和图表容器，数据区块复用现有组件。
- 不要求读屏 ARIA，但保留键盘焦点和图标按钮名称。

## 依赖与安全

当前依赖：Vue 3.5.44 / Vue Router 5.4.0 / Element Plus 2.14.7 / ECharts 6.1.0 / dayjs 1.11.23 / Vite 8.3.5 / Sass 1.107.1。依赖使用精确版本，升级走单独回归。

2026-11-02 使用 npmjs registry 审计：`0 vulnerabilities`。

## 已知取舍

- 数据表格自动滚动示例使用页面本地定时器，不提供公共封装。
- 能源大屏保留 fetch 接口层，默认 `USE_REMOTE_API = false`，使用模拟数据。
- 图表和综合大屏不启用 ECharts 光晕，避免盖过数据。
- 不提供测试套件；发布前以 `npm run build:prod` 和页面实拍为准。

## License

MIT
