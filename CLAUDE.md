# Claude Code 项目指南 — Hugo Doks 博客

## 项目概况

这是一个基于 **Hugo 0.156.0** 和 **Doks 主题 v1.9.1**（Thulite）构建的静态博客网站，部署到 Netlify。

## 项目结构

```
blog/
├── assets/              # 静态资源（图片、JS、SCSS、SVG）
│   ├── images/          # 文章图片（Hugo 会处理）
│   ├── js/              # JavaScript 文件
│   ├── scss/            # SCSS 样式文件
│   └── svgs/            # SVG 图标
├── config/              # Hugo 配置文件
│   ├── _default/        # 默认配置
│   │   ├── hugo.toml    # 主配置
│   │   ├── params.toml  # 参数配置
│   │   ├── module.toml  # 模块配置
│   │   ├── markup.toml  # Markdown 渲染配置
│   │   └── menus/       # 菜单配置
│   ├── production/      # 生产环境配置
│   └── next/            # 下一个版本配置
├── content/             # 内容文件（Markdown）
│   ├── blog/            # 博客文章
│   ├── docs/            # 文档页面
│   ├── contributors/    # 贡献者信息
│   ├── categories/      # 分类页面
│   └── tags/            # 标签页面
├── layouts/             # 自定义布局模板
├── static/              # 纯静态文件（直接复制到 public）
├── public/              # 构建输出（自动生成，不要编辑）
├── resources/           # Hugo 资源缓存（自动生成，不要编辑）
├── node_modules/        # npm 依赖（不要编辑）
├── package.json         # npm 配置
├── netlify.toml         # Netlify 部署配置
└── hugo.toml            # Hugo 配置
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动 Hugo 开发服务器（端口 1313） |
| `npm run build` | 构建生产版本（压缩、GC） |
| `npm run format` | 使用 Prettier 格式化所有文件 |
| `npm run preview` | 预览构建后的网站 |

## 博客文章规范

### 文件位置
- 每篇文章是独立目录：`content/blog/{slug}/index.md`
- slug 使用小写英文、数字和连字符（如 `hugo-setup-guide`）

### Front Matter 必填字段

```yaml
---
title: "文章标题"              # 必填，不超过 60 字符
description: "文章描述"        # 必填，不超过 160 字符
summary: "文章摘要"            # 必填，用于列表展示
date: 2026-06-10T10:00:00+08:00  # 必填，ISO 8601 格式
lastmod: 2026-06-10T10:00:00+08:00  # 最后修改时间
draft: true                    # 草稿状态，发布前改为 false
weight: 50                     # 排序权重
categories: [技术]             # 分类
tags: [Hugo, 教程]             # 标签
contributors: []               # 贡献者
pinned: false                  # 是否置顶
homepage: false                # 是否在首页显示
---
```

### 图片使用

- **特色图片**：在文章目录中放置 `featured.png` 或 `featured.jpg`
- **文章内图片**：使用 `![描述](/images/filename.png)` 引用 `assets/images/` 中的图片
- **相对路径图片**：使用 `![描述](./image.png)` 引用文章目录中的图片

## 代码风格

- **格式化**：使用 Prettier（配置见 `.prettierrc.yaml`）
- **Markdown**：2 空格缩进，双引号
- **YAML/JSON**：2 空格缩进，双引号
- **SCSS**：双引号
- **行尾**：CRLF（Windows）

## 部署流程

1. 完成文章写作，将 `draft: true` 改为 `draft: false`
2. 运行 `/deploy-check` 进行全面检查
3. 本地预览：`npm run dev`
4. 推送到 Git 主分支，Netlify 自动部署

## 禁止操作

- ❌ 不要手动编辑 `public/` 或 `resources/` 目录（由 Hugo 自动生成）
- ❌ 不要直接修改 `node_modules/` 目录
- ❌ 不要在 commit 中包含 `.hugo_build.lock` 文件

## 可用技能

- `/new-post "标题" "描述"` — 创建新博客文章
- `/import-conversation "path/to/file.md"` — 导入 AI 对话 MD 文件为博客文章（自动按日期组织）
- `/deploy-check` — 部署前全面检查

## 可用钩子

- **Prettier 自动格式化**：编辑 `.md`、`.yaml`、`.json`、`.scss`、`.html`、`.js` 文件后自动格式化
- **构建目录保护**：阻止修改 `public/`、`resources/`、`node_modules/` 目录

## Doks 主题特性

- 基于 Bootstrap 5
- 内置搜索功能
- 支持多语言（当前启用英文）
- SEO 优化（自动生成 sitemap、RSS）
- 响应式设计
