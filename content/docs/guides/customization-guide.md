---
title: "Hugo Doks 博客自定义内容清单"
description: "完整的自定义配置指南，涵盖语言、导航、页眉页脚、SEO、图片等所有可配置项"
summary: "本文档列出了当前 Hugo Doks 博客项目中所有可自定义的内容，方便快速查阅和修改。"
date: 2026-06-10T10:00:00+08:00
lastmod: 2026-06-10T10:00:00+08:00
draft: false
weight: 10
categories: ["配置", "参考"]
tags: ["Hugo", "Doks", "自定义", "配置清单"]
contributors: []
pinned: false
homepage: false
---

> **说明**：本文档列出了当前 Hugo Doks 博客项目中所有可自定义的内容，方便快速查阅和修改。

---

## 目录

1. [语言配置](#语言配置)
2. [主题外观](#主题外观)
3. [导航菜单](#导航菜单)
4. [搜索功能](#搜索功能)
5. [页眉页脚](#页眉页脚)
6. [社交媒体](#社交媒体)
7. [SEO 配置](#seo-配置)
8. [图片处理](#图片处理)
9. [内容管理](#内容管理)
10. [其他功能配置](#其他功能配置)

---

## 语言配置

**文件**: `config/_default/languages.toml`

| 配置项 | 说明 |
|--------|------|
| `languageName` | 语言显示名称 |
| `contentDir` | 内容目录路径 |
| `weight` | 语言排序权重 |
| `footer` | 页脚 HTML 内容 |
| `alertText` | 全局提示条内容 |
| `titleAddition` | 标题后缀 |
| `description` | 网站描述 |

**当前状态**：配置了 **3 种语言**（英语、德语、荷兰语），其中德语和荷兰语在 `hugo.toml` 中被禁用。

**文件**: `config/_default/hugo.toml`

```toml
defaultContentLanguage = "en"
disableLanguages = ["de", "nl"]
```

---

## 主题外观

**文件**: `config/_default/params.toml` → `[doks]`

| 配置项 | 当前值 | 说明 |
|--------|--------|------|
| `colorMode` | `"auto"` | 主题模式：`auto` / `light` / `dark` |
| `colorModeToggler` | `true` | 显示暗/亮模式切换按钮 |
| `navbarSticky` | `true` | 导航栏是否固定 |
| `containerBreakpoint` | `"fluid"` | 容器宽度：`fluid` / `sm`~`xxl` |
| `backgroundDots` | `true` | 背景圆点装饰 |
| `headerBar` | `false` | 顶部信息栏 |

### SCSS 颜色自定义

```toml
# 暗色主题
textDark = "#dee2e6"
accentDark = "#5d2f86"

# 亮色主题
textLight = "#1d2d35"
accentLight = "#8ed6fb"
```

---

## 导航菜单

**文件**: `config/_default/menus/menus.en.toml`

可以自定义 **5 种菜单类型**：

| 菜单类型 | 说明 |
|---------|------|
| `[[main]]` | 主导航栏 |
| `[[social]]` | 社交媒体图标 |
| `[[footer]]` | 页脚链接 |
| `[[guide]]` / `[[tutorial]]` | 文档/教程导航 |
| `[[sidebar_docs]]` | 侧边栏菜单 |

**每个菜单项包含**：
- `name` — 显示名称
- `url` — 链接地址
- `weight` — 排序权重
- `pre` — 前面的 HTML/SVG 图标
- `post` — 后面的文本

---

## 搜索功能

**文件**: `config/_default/params.toml` → `[doks]`

| 配置项 | 当前值 | 说明 |
|--------|--------|------|
| `flexSearch` | `true` | 启用搜索 |
| `searchExclKinds` | `[]` | 排除的页面类型 |
| `searchExclTypes` | `[]` | 排除的内容类型 |
| `showSearch` | `[]` | 在哪些页面显示搜索 |
| `showDate` | `false` | 搜索结果显示日期 |
| `showSummary` | `true` | 搜索结果显示摘要 |
| `searchLimit` | `99` | 搜索结果数量限制 |

---

## 页眉页脚

### 页眉（Navbar）

**文件**: `config/_default/params.toml` → `[doks]`

| 配置项 | 说明 |
|--------|------|
| `navBarButton` | 是否显示导航按钮 |
| `navBarButtonUrl` | 按钮链接 |
| `navBarButtonText` | 按钮文字 |

### 页脚

**文件**: `config/_default/languages.toml` → `[en.params]`

```toml
footer = 'Brought to you by <a href="https://thulite.io/">Thulite</a>'
```

**文件**: `config/_default/hugo.toml`

```toml
copyRight = "Copyright (c) 2020-2026 Thulite"
```

---

## 社交媒体

**文件**: `config/_default/params.toml`

```toml
[social]
  twitter = "getdoks"
```

**文件**: `config/_default/menus/menus.en.toml`

```toml
[[social]]
  name = "GitHub"
  url = "https://github.com/thuliteio/doks"
```

**支持添加**：Twitter/X、Discord、LinkedIn、GitHub 等。

---

## SEO 配置

**文件**: `config/_default/params.toml` → `[seo]`

| 配置项 | 说明 |
|--------|------|
| `title.separator` | 标题分隔符 |
| `title.suffix` | 标题后缀 |
| `favicons.icon` | Favicon PNG |
| `favicons.svgIcon` | Favicon SVG |
| `schemas.type` | 结构化数据类型：`Organization` / `Person` |
| `schemas.logo` | 组织 Logo |
| `schemas.name` | 组织名称 |
| `schemas.sameAs` | 社交链接 |
| `schemas.images` | 默认图片 |
| `schemas.blogPosting` | 博客文章的 section |

---

## 图片处理

**文件**: `config/_default/params.toml` → `[thulite_images]`

| 配置项 | 当前值 | 说明 |
|--------|--------|------|
| `decoding` | `"async"` | 图片解码方式 |
| `loading` | `"lazy"` | 懒加载 |
| `widths` | 多种尺寸 | 响应式图片尺寸 |
| `lqip` | `"16x webp q20"` | 低质量占位图 |

**文件**: `config/_default/hugo.toml` → `[imaging]`

```toml
anchor = "Center"
bgColor = "#ffffff"
quality = 85
resampleFilter = "Lanczos"
```

---

## 内容管理

**目录**: `content/`

| 目录 | 说明 |
|------|------|
| `blog/` | 博客文章 |
| `docs/` | 文档页面 |
| `categories/` | 分类页面 |
| `tags/` | 标签页面 |
| `contributors/` | 贡献者信息 |
| `404.md` | 404 页面 |
| `privacy.md` | 隐私政策 |

---

## 其他功能配置

### 数学公式

```toml
math = false          # 是否启用
mathEngine = "KaTeX"  # 渲染引擎：KaTeX / MathJax
```

### 导航辅助

```toml
sectionNav = ["docs"]       # 章节导航
breadcrumbTrail = false     # 面包屑
toTopButton = false         # 回到顶部按钮
scrollSpy = true           # 滚动监听
headlineHash = true        # 标题锚点
```

### 博客功能

```toml
relatedPosts = false   # 相关文章推荐
imageList = true        # 列表显示图片
imageSingle = true      # 单页显示图片
```

### 版本控制

```toml
docsVersioning = false
docsVersion = "1.0"
editPage = false          # 显示"编辑此页"按钮
lastMod = false          # 显示最后修改时间
```

### 全局提示条

```toml
alert = false
alertDismissable = true
```

---

## 自定义总结表

| 自定义项 | 配置文件 | 自定义程度 |
|---------|---------|-----------|
| **语言** | `languages.toml` | ⭐⭐⭐ 高 |
| **主题颜色** | `params.toml` → `[doks]` | ⭐⭐⭐ 高 |
| **导航菜单** | `menus/menus.en.toml` | ⭐⭐⭐ 高 |
| **社交媒体** | `menus.en.toml` + `params.toml` | ⭐⭐⭐ 高 |
| **页眉** | `params.toml` → `[doks]` | ⭐⭐ 中 |
| **页脚** | `languages.toml` + `hugo.toml` | ⭐⭐ 中 |
| **搜索** | `params.toml` → `[doks]` | ⭐⭐ 中 |
| **SEO** | `params.toml` → `[seo]` | ⭐⭐⭐ 高 |
| **图片** | `params.toml` + `hugo.toml` | ⭐⭐⭐ 高 |
| **内容** | `content/` 目录 | ⭐⭐⭐ 高 |
| **侧边栏** | `menus.en.toml` → `sidebar_docs` | ⭐⭐⭐ 高 |
