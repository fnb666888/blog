---
name: import-conversation
description: 将 AI 对话 MD 文件导入为博客文章，自动生成日期-based slug 和 front matter
disable-model-invocation: true
---

# /import-conversation — 对话记录导入技能

## 使用方式

用户调用格式：

```
/import-conversation "path/to/conversation.md"
/import-conversation "path/to/conversation.md" "自定义标题"
```

参数：

- **对话文件路径**（必填）：相对或绝对路径，指向用户导出的 MD 文件
- **自定义标题**（可选）：若不提供，自动生成为 `AI 对话记录 — YYYY年M月D日` 格式

## 执行步骤

收到调用后，按以下步骤执行：

### 第 1 步：读取源文件

使用 Read 工具读取用户提供的对话 MD 文件。

### 第 2 步：提取日期

按以下优先级顺序确定日期：

1. **文件名匹配** — 检查文件名是否包含 `YYYY-MM-DD` 格式的日期（如 `2026-06-11.md`），提取该日期
2. **文件首行日期** — 如果文件开头包含日期行（如 `## 2026-06-11` 或 `**日期：2026-06-11**`），提取该日期
3. **当天日期** — 如果上述两种方法都失败，使用当天日期

运行以下命令获取当天日期（若需要）：

```bash
date +"%Y-%m-%d"
```

### 第 3 步：提取摘要和描述

从对话内容提取前 80-100 个字符作为摘要：

- 从文件中找到第一个问题（标记为 `问：` 或 `**问：**`）
- 取该问题的前 80 个字符（中文按字符计，英文可能截中间单词，无需完美截断）
- 用此作为 `summary` 和 `description` 字段

如果无法找到问题标记，从文件开头非标题行的前 80 个字符作为摘要。

### 第 4 步：生成 slug 和检查存在性

根据提取的日期生成固定 slug 格式：

```
ai-chat-YYYY-MM-DD
```

例如日期为 `2026-06-11`，则 slug 为 `ai-chat-2026-06-11`。

检查目录 `content/blog/ai-chat-YYYY-MM-DD/` 是否已存在：

- **不存在** — 进行第 5a 步（创建新文章）
- **已存在** — 进行第 5b 步（追加内容）

### 第 5a 步：创建新文章

创建目录 `content/blog/ai-chat-YYYY-MM-DD/`，然后创建 `index.md`，使用以下模板：

```yaml
---
title: "{标题}"
description: "{摘要}"
summary: "{摘要}"
date: YYYY-MM-DDTHH:MM:SS+08:00
lastmod: YYYY-MM-DDTHH:MM:SS+08:00
draft: false
weight: 50
categories: ["AI对话"]
tags: ["Claude", "AI", "日记"]
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
## 对话内容

{ 对话内容 }
```

其中：

- **{标题}** — 使用用户提供的自定义标题，或默认 `AI 对话记录 — YYYY年M月D日` 格式（中文月日，如 `AI 对话记录 — 2026年6月11日`）
- **{摘要}** — 从第 3 步提取的 80 个字符摘要
- **YYYY-MM-DD...** — 当前时间，ISO 8601 格式，使用 +08:00 时区（中国时区）

运行以下命令获取当前时间：

```bash
date +"%Y-%m-%dT%H:%M:%S+08:00"
```

- **{对话内容}** — 原始对话 MD 内容（直接粘贴用户文件的内容部分）

### 第 5b 步：追加内容到既有文章（同日期多次导入）

如果 `content/blog/ai-chat-YYYY-MM-DD/index.md` 已存在：

1. 使用 Read 工具读取现有文件
2. 在文件末尾追加新对话内容（加 `---` 分隔符）
3. 更新 front matter 中的 `lastmod` 字段为当前时间
4. 使用 Edit 工具更新文件

追加格式：

```markdown
---

## 补充对话（第 N 次导入）

{新的对话内容}
```

### 第 6 步：确认结果

输出以下信息：

**创建新文章时：**

```
✅ 对话记录已导入为博客文章！

📁 路径：content/blog/ai-chat-YYYY-MM-DD/index.md
📝 标题：{标题}
📅 日期：YYYY年M月D日
📊 状态：已发布（draft: false）

后续步骤：
1. 本地预览：npm run dev
2. 推送到 Git 主分支
3. 检查部署：/deploy-check
```

**追加内容到既有文章时：**

```
✅ 对话内容已追加到既有文章！

📁 路径：content/blog/ai-chat-YYYY-MM-DD/index.md
🔄 状态：已更新 lastmod
📋 新增：{摘要}...

后续步骤：
1. 本地预览：npm run dev
2. 推送更新
```

## 注意事项

- 对话文件默认 **draft: false**（直接发布），与普通文章不同
- 对话记录自动归类到 `["AI对话"]` 分类和 `["Claude", "AI", "日记"]` 标签
- 同一天的多次导入会追加到同一篇文章，而不是创建多篇
- 文件路径可以是相对路径（相对于 `blog/` 根目录）或绝对路径
- 如果用户提供自定义标题，使用该标题；否则自动生成日期格式标题
