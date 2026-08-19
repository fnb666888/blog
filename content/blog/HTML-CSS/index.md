---
title: "HTML和CSS基础知识"
description: "介绍HTML和CSS基础知识"
summary: "介绍HTML和CSS基础知识"
date: 2026-08-19
lastmod: 2026-08-19
draft: false
weight: 50
categories: ["基础知识"]
tags: ["HTML","CSS"]
contributors: []
pinned: false
homepage: false
params:
  seo:
    title: ""
    description: ""
    canonical: ""
    robots: ""
---

HTML（HyperText Markup Language，超文本标记语言）是 Web 的**骨架与语义基础**。它不是编程语言，而是一种**结构化标记语言**，负责定义内容的含义、层级和关系，而非外观或行为。

以下是 HTML 核心知识体系的系统梳理，注重**现代标准（HTML5+）** 与**工程实践**，而非过时用法。

---

### 1. 核心理念：语义化
> HTML 的首要职责是**表达内容是什么**，而不是看起来像什么。

#### ✅ 正确 vs ❌ 错误
```html
<!-- ❌ 无语义：仅靠样式区分 -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="article">...</div>

<!-- ✅ 语义化：标签本身传达含义 -->
<header>...</header>
<nav>...</nav>
<article>...</article>
```

#### 为什么重要？
- **无障碍**：屏幕阅读器依赖语义标签导航
- **SEO**：搜索引擎理解内容结构
- **可维护性**：代码自文档化，团队协作更高效
- **默认行为**：`<button>` 自带键盘焦点、回车触发；`<a>` 支持右键新窗口

---

### 2. 文档结构（Boilerplate）
每个 HTML 页面的最小合规结构：

```html
<!DOCTYPE html>                <!-- 声明 HTML5 标准（防止怪异模式） -->
<html lang="zh-CN">            <!-- 语言属性：影响搜索、翻译、语音合成 -->
<head>
  <meta charset="UTF-8">       <!-- ⚠️ 必须在前 1024 字节内，防乱码 -->
  <meta name="viewport"
        content="width=device-width, initial-scale=1"> <!-- 响应式基石 -->
  <title>页面标题</title>       <!-- 浏览器标签页 + SEO 关键 -->
</head>
<body>
  <!-- 可见内容 -->
</body>
</html>
```

#### `<head>` 关键元素
| 元素 | 作用 |
| :--- | :--- |
| `<meta charset>` | 字符编码（UTF-8 唯一推荐） |
| `<meta name="viewport">` | 移动端适配 |
| `<title>` | 页面标题（SEO 权重最高） |
| `<meta name="description">` | 搜索摘要 |
| `<link rel="stylesheet">` | 外部样式表 |
| `<script defer>` | 延迟执行脚本（不阻塞解析） |
| `<link rel="icon">` | 网站图标 |

---

### 3. 语义化标签体系
#### 🏗️ 页面级结构
| 标签 | 用途 | 注意事项 |
| :--- | :--- | :--- |
| `<header>` | 页头/区块头部 | 可嵌套在 `<article>`/`<section>` 内 |
| `<nav>` | 主导航区域 | 通常包裹 `<ul>` |
| `<main>` | 页面主体内容 | **每页仅一个**，不含侧边栏/页脚 |
| `<aside>` | 相关内容（侧边栏、引用） | 非主要内容 |
| `<footer>` | 页脚/区块底部 | 可含版权、相关链接 |
| `<section>` | 主题性分组 | **应有标题**（h1-h6），否则用 `<div>` |
| `<article>` | 独立可复用内容 | 博客文章、评论、产品卡片 |

#### 📝 文本级语义
| 标签 | 含义 | 何时用 |
| :--- | :--- | :--- |
| `<strong>` | **重要性强调** | 语义强，视觉通常加粗 |
| `<em>` | *语气强调* | 语义弱于 strong，视觉通常斜体 |
| `<mark>` | 高亮标记 | 搜索结果、引用重点 |
| `<time datetime="...">` | 机器可读时间 | `<time datetime="2024-05-20">今天</time>` |
| `<abbr title="...">` | 缩写 | 悬停显示全称 |
| `<cite>` | 作品标题引用 | 书名、论文、电影 |
| `<code>` / `<pre>` | 代码片段 / 预格式化块 | 技术文档必备 |

> ⚠️ `<b>` / `<i>` 仅用于**纯视觉样式**（如品牌名、外语词），无 semantic weight。优先用 `<strong>` / `<em>`。

---

### 4. 表单（Forms）—— 交互核心
#### 基础结构
```html
<form action="/submit" method="POST" novalidate>
  <label for="email">邮箱：</label>
  <input type="email" id="email" name="email" required
         autocomplete="email" aria-describedby="email-hint">
  <small id="email-hint">我们不会分享你的邮箱</small>

  <fieldset>
    <legend>偏好设置</legend>
    <label><input type="checkbox" name="newsletter"> 订阅通讯</label>
  </fieldset>

  <button type="submit">提交</button>
</form>
```

#### 关键原则
- **永远用 `<label for="id">`**：点击标签聚焦输入框，无障碍必需
- **`type` 要精确**：`email` / `tel` / `url` / `number` / `date` → 移动端弹出对应键盘 + 内置验证
- **`autocomplete` 属性**：提升用户体验（`username`, `current-password`, `cc-number` 等标准值）
- **`fieldset` + `<legend>`**：逻辑分组单选/复选框
- **避免 `type="submit"` 以外的按钮**：`<button type="button">` 防意外提交
- **服务端验证不可替代**：前端验证仅为 UX 优化

---

### 5. 多媒体与嵌入
```html
<!-- 响应式图片 -->
<picture>
  <source media="(min-width: 800px)" srcset="large.webp" type="image/webp">
  <source media="(min-width: 800px)" srcset="large.jpg">
  <img src="fallback.jpg" alt="描述性文字" loading="lazy" decoding="async">
</picture>

<!-- 视频（多格式回退） -->
<video controls preload="metadata" poster="cover.jpg">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  <track kind="subtitles" src="subs_zh.vtt" srclang="zh" label="中文">
  您的浏览器不支持 video 标签。
</video>
```

#### ⚠️ 关键点
- **`alt` 属性**：装饰图用 `alt=""`；信息图必须描述内容
- **`loading="lazy"`**：原生懒加载（首屏图片勿用）
- **`decoding="async"`**：非阻塞解码，提升 LCP
- **`<iframe>` 安全**：始终加 `sandbox` 属性限制权限

---

### 6. 全局属性（所有标签可用）
| 属性 | 用途 |
| :--- | :--- |
| `id` | 唯一标识符（锚点、JS 选择器） |
| `class` | CSS 类名（空格分隔多个） |
| `data-*` | 自定义数据（`data-user-id="123"` → JS 通过 `dataset.userId` 读取） |
| `tabindex` | 键盘焦点顺序（0=自然序，-1=可编程聚焦，>0=慎用） |
| `aria-*` | 无障碍增强（当原生语义不足时） |
| `hidden` | 隐藏元素（等价于 `display:none`，但语义明确） |
| `contenteditable` | 使元素可编辑（富文本编辑器基础） |

---

### 7. 现代 HTML 最佳实践
#### ✅ DO
- 使用小写标签名（HTML5 不强制，但约定俗成）
- 属性值加引号（`class="btn"` 而非 `class=btn`）
- 自闭合标签省略斜杠（`<img>` 而非 `<img />`）
- 用 `<template>` 存放客户端模板（不渲染、可克隆）
- 用 `<dialog>` 实现模态框（原生支持焦点陷阱、ESC 关闭）
- 用 `<details>` / `<summary>` 实现折叠面板（零 JS）

#### ❌ DON'T
- 用 `<div>` / `<span>` 替代语义标签
- 用 `<br>` 控制布局间距
- 用 `<table>` 做页面布局
- 内联样式（`style="..."`）除非动态生成
- 废弃标签：`<font>`, `<center>`, `<marquee>`, `<blink>`
- `target="_blank"` 不加 `rel="noopener noreferrer"`（安全风险）

---

### 8. HTML 与 CSS/JS 的边界
| 层 | 职责 | 示例 |
| :--- | :--- | :--- |
| **HTML** | 内容与语义 | “这是一篇关于气候变化的文章” |
| **CSS** | 表现与布局 | “文章标题用 2rem 蓝色字体，左对齐” |
| **JS** | 行为与状态 | “点击按钮展开评论区，异步加载数据” |

> 💡 **黄金法则**：如果去掉 CSS 和 JS，HTML 仍应传达完整内容结构。

---

### 📚 学习资源推荐
1. **MDN HTML Guide**：最权威、更新及时的参考
2. **HTML Spec (WHATWG)**：标准原文（进阶查阅）
3. **Web Accessibility Initiative (WAI)**：ARIA 与无障碍实践
4. **Can I Use**：特性兼容性查询
5. **Nu Html Checker**：官方验证器，检测语法/语义错误

---

CSS（Cascading Style Sheets，层叠样式表）是 Web 的**表现层语言**，负责控制 HTML 内容的视觉呈现、布局、动画与响应式适配。它不是编程语言，而是一套**声明式规则系统**，核心在于理解“层叠”、“继承”与“盒模型”。

以下是现代 CSS 知识体系的系统梳理，聚焦 **CSS3+ 标准**与**工程实践**，摒弃过时用法。

---

### 1. 核心机制：层叠、优先级与继承
> CSS 的名称中 “Cascading” 决定了样式的最终生效逻辑。

#### 🔺 优先级计算（Specificity）
当多条规则作用于同一元素时，按以下权重决胜（从高到低）：

| 层级 | 选择器示例 | 权重值 (a,b,c,d) |
| :--- | :--- | :--- |
| `!important` | `color: red !important` | ∞（慎用！破坏可维护性） |
| 内联样式 | `style="color:red"` | (1,0,0,0) |
| ID 选择器 | `#header` | (0,1,0,0) |
| 类/伪类/属性 | `.btn`, `:hover`, `[type]` | (0,0,1,0) |
| 元素/伪元素 | `div`, `::before` | (0,0,0,1) |
| 通配符/组合符 | `*`, `>`, `+` | (0,0,0,0) |

```css
/* 权重比较 */
#nav .link:hover { /* (0,1,1,0) */ }
.nav-link.active   { /* (0,0,2,0) → 前者胜 */ }
```

#### 🔄 继承
- **可继承属性**：文本相关（`color`, `font-*`, `line-height`, `visibility`）
- **不可继承属性**：盒模型（`margin`, `padding`, `border`）、定位、背景
- 强制继承：`inherit` / 强制不继承：`initial` / 重置为浏览器默认：`revert`

#### 💡 工程建议
- 避免 `!important`，通过提升选择器语义或调整源码顺序解决冲突
- 使用 BEM / CSS Modules / Tailwind 等方案降低优先级复杂度
- 用 DevTools "Computed" 面板实时查看最终生效值及来源

---

### 2. 盒模型：一切布局的基础
每个 HTML 元素都是一个矩形盒子，由四层组成：

```
┌─────────────── Margin ───────────────┐
│ ┌──────────── Border ─────────────┐ │
│ │ ┌──────── Padding ───────────┐ │ │
│ │ │ ┌────── Content ────────┐ │ │ │
│ │ │ │                       │ │ │ │
│ │ │ └───────────────────────┘ │ │ │
│ │ └───────────────────────────┘ │ │
│ └───────────────────────────────┘ │
└───────────────────────────────────┘
```

#### ⚠️ 关键陷阱：`box-sizing`
| 值 | width/height 包含 | 推荐度 |
| :--- | :--- | :--- |
| `content-box` (默认) | 仅 content | ❌ 易导致溢出 |
| `border-box` | content + padding + border | ✅ **全局重置首选** |

```css
/* 现代项目必备重置 */
*, *::before, *::after {
  box-sizing: border-box;
}
```

#### 外边距折叠
垂直方向相邻的 margin 会合并（取较大值），常见于块级元素之间。解决方案：Flex/Grid 布局、BFC、或统一使用单侧 margin。

---

### 3. 布局体系演进
#### 📏 传统布局（了解即可）
- `float` + `clear`：已淘汰，仅用于文字环绕图片
- `inline-block`：间隙问题难处理，对齐困难
- `table-cell`：等高列可行，但语义污染

#### 🎯 现代布局双雄
| 特性 | Flexbox | Grid |
| :--- | :--- | :--- |
| 维度 | 一维（行或列） | 二维（行和列同时） |
| 适用场景 | 组件内部对齐、导航栏、卡片列表 | 页面整体骨架、复杂网格、仪表盘 |
| 核心概念 |主轴/交叉轴、flex-grow/shrink/basis | grid-template-rows/columns、area |
| 自动换行 | `flex-wrap: wrap` | `grid-auto-flow: dense` |
| 间距控制 | `gap` (现代浏览器支持) | `gap` (原生支持) |

#### 💡 实战模式
```css
/* Flex：水平居中 + 等间距 */
.nav { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }

/* Grid：响应式卡片（无媒体查询！） */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Grid Area：语义化布局 */
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

---

### 4. 响应式设计
#### 移动优先原则
```css
/* 基础样式 = 移动端 */
.card { padding: 1rem; }

/* 逐步增强 */
@media (min-width: 768px) {
  .card { padding: 2rem; }
}
```

#### 现代响应式技术栈
| 技术 | 用途 |
| :--- | :--- |
| `clamp(min, preferred, max)` | 流体排版/间距：`font-size: clamp(1rem, 2.5vw, 2rem)` |
| Container Queries (`@container`) | 基于父容器宽度响应（组件级响应式） |
| `dvh` / `svh` / `lvh` | 视口单位修复移动端地址栏问题 |
| `aspect-ratio` | 固定宽高比（替代 padding-top hack） |
| `:has()` | 父选择器，根据子元素状态调整父样式 |

---

### 5. 自定义属性（CSS Variables）
> 原生变量，无需预处理器

```css
:root {
  --color-primary: #3b82f6;
  --space-md: 1rem;
  --radius-btn: 0.375rem;
}

.button {
  background: var(--color-primary);
  padding: var(--space-md);
  border-radius: var(--radius-btn);
}

/* 运行时动态修改 */
.dark-theme { --color-primary: #60a5fa; }
```

#### 优势
- 主题切换零 JS 重绘
- 组件作用域隔离（在组件根定义）
- 与 JS 互通：`el.style.setProperty('--x', value)`

---

### 6. 过渡与动画
#### Transition（状态变化）
```css
.btn {
  transition: background-color 0.2s ease, transform 0.1s;
}
.btn:hover { background-color: var(--color-primary-hover); }
```

#### Animation（独立循环/复杂序列）
```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

.loader {
  animation: spin 1s linear infinite;
}
```

#### ⚠️ 性能黄金法则
- **只动画 `transform` 和 `opacity`**：触发 GPU 合成层，不引起重排重绘
- 避免动画 `width`, `height`, `top`, `left`, `margin`, `padding`
- 使用 `will-change: transform` 提示浏览器优化（勿滥用）
- 尊重用户偏好：`@media (prefers-reduced-motion: reduce)` 禁用非必要动画

---

### 7. 现代 CSS 新特性速览
| 特性 | 作用 | 兼容性 |
| :--- | :--- | :--- |
| `:has()` | 父选择器 / 条件样式 | ✅ 主流浏览器 |
| `@layer` | 显式控制层叠顺序 | ✅ |
| `@scope` | 限定样式作用范围 | 🟡 实验中 |
| `color-mix()` | 颜色混合函数 | ✅ |
| `light-dark()` | 简化暗色模式 | 🟡 Chrome 124+ |
| Subgrid | 子网格继承父网格轨道 | ✅ |
| `text-wrap: balance` | 标题自动平衡换行 | ✅ |

---

### 8. 工程化最佳实践
#### ✅ DO
- 使用 CSS Reset / Normalize.css 统一基线
- 采用方法论：BEM（命名）、ITCSS（分层）、CUBE CSS（现代组合）
- 利用 PostCSS / Autoprefixer 处理兼容
- 用 CSSLint / Stylelint 静态检查
- 关键 CSS 内联，非关键异步加载
- 用 DevTools Coverage 面板检测未使用样式

#### ❌ DON'T
- 深层嵌套选择器（>3 层即危险信号）
- 魔法数字（用变量或设计令牌）
- `z-index` 军备竞赛（建立明确的 stacking context 管理策略）
- 用 CSS 做本应由 JS 处理的逻辑（如复杂状态判断）
- 忽略无障碍：确保颜色对比度 ≥ 4.5:1，焦点可见


