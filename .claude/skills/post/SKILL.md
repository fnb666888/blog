---
name: post
description: 一步创建并发布 Hugo 博客文章。提供标题、描述和正文内容即可生成符合 Doks 规范的文章目录、front matter 并直接以发布状态（draft: false）写入正文
disable-model-invocation: true
---

# /post — 博客文章一键发布技能

将原 `new-post`（创建）与 `publish-post`（发布）合并为单一流程：
**只需提供内容，文章即创建并直接发布。**

## 使用方式

用户调用格式：

```
/post "文章标题" "文章描述" [分类1,分类2] [标签1,标签2]
```

调用后，把正文内容直接粘贴/编辑给我即可。如果用户在调用时已经附带了正文，直接使用；否则提示用户粘贴正文。

参数：

- **文章标题**（必填）：博客标题，不超过 60 字符
- **文章描述**（必填）：SEO 描述，不超过 160 字符
- **分类**（可选）：逗号分隔的分类列表
- **标签**（可选）：逗号分隔的标签列表
- **正文内容**（必填）：文章 Markdown 正文，可在调用时附带或随后粘贴

## 执行步骤

收到调用后，按以下步骤执行：

### 第 1 步：解析参数与正文

从用户消息中提取标题、描述、分类、标签和正文内容。如果分类或标签为空，使用空数组 `[]`。如果用户未提供正文，提示用户粘贴正文后再继续。

### 第 2 步：生成 slug

根据标题生成 URL 友好的 slug：

- 中文标题：转为拼音（使用常见拼音映射）
- 英文标题：转小写，空格替换为 `-`，去除特殊字符
- 如果 slug 已存在（`content/blog/{slug}/` 目录已存在），在末尾追加 `-2`、`-3` 等后缀

### 第 3 步：获取当前时间

运行以下命令获取 ISO 8601 格式的当前时间（带时区）：

```bash
date -u +"%Y-%m-%dT%H:%M:%S+00:00"
```

### 第 4 步：创建文章目录和文件（直接发布状态）

创建目录 `content/blog/{slug}/`，然后创建 `index.md`，使用以下模板。
注意：`draft` 直接设为 `false`，正文区域填入用户提供的内容。

```yaml
---
title: "{标题}"
description: "{描述}"
summary: "{描述的前 150 个字符}"
date: { 当前时间 ISO 格式 }
lastmod: { 当前时间 ISO 格式 }
draft: false
weight: 50
categories: [{ 分类 }]
tags: [{ 标签 }]
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
{ 用户提供的正文内容 }
```

### 第 5 步：确认结果

输出以下信息：

```
✅ 博客文章已创建并发布！

📁 路径：content/blog/{slug}/index.md
📝 标题：{标题}
📅 日期：{日期}
📌 状态：已发布（draft: false）

后续步骤：
1. 本地预览确认无误：npm run dev
2. 添加特色图片（可选）：在文章目录中放入 featured.png 或 featured.jpg
3. 运行部署检查：/deploy-check
4. 提交到 Git 并推送到主分支，Netlify 将自动部署
```

## 注意事项

- 文章默认 `draft: false`，创建即发布。如需暂存草稿，告知我改为 `draft: true`
- `contributors` 数组需要在 `content/contributors/` 中有对应的作者页面
- `weight` 默认 50，用于控制列表排序，可根据需要调整
- 图片引用：`assets/images/` 用 `![描述](/images/文件名.png)`；文章目录内图片用 `![描述](./图片.png)`
- 不要在 `public/` 或 `resources/` 目录中创建文件
