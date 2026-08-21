---
title: "MCP、SKILL、Hook、Plugin介绍"
description: "详细介绍MCP、SKILL、Hook、Plugin的基础知识"
summary: "详细介绍MCP、SKILL、Hook、Plugin的基础知识"
date: 2026-08-21
lastmod: 2026-08-21
draft: false
weight: 50
categories: ["基础知识"]
tags: ["MCP", "Plugins", "SKILL"]
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

### 1. MCP (Model Context Protocol)
**模型上下文协议**

*   **定义**：由 Anthropic 提出的一种开放标准协议，旨在解决 AI 模型与外部数据源、工具之间的连接碎片化问题。它类似于 AI 世界的“USB-C 接口”，定义了 AI 如何安全、标准化地访问本地文件、数据库或第三方 API。
*   **触发情况**：
    *   当 AI Agent 需要获取**上下文信息**（如读取本地代码库、查询数据库）时。
    *   当 AI Agent 需要执行**外部操作**（如发送 Slack 消息、创建 Jira 工单）时。
    *   通常由 LLM 在推理过程中通过 Function Calling 自动触发，或由用户显式指令触发。
*   **规范**：
    *   **传输层**：支持 Stdio（本地进程通信）和 HTTP+SSE（远程服务通信）。
    *   **消息格式**：基于 JSON-RPC 2.0。
    *   **核心原语**：Resources（资源/数据）、Tools（工具/动作）、Prompts（提示词模板）。
    *   **生命周期**：包含初始化（Initialize）、能力协商（Capabilities）、请求/响应、通知等标准握手流程。
*   **例子**：
    > **场景**：你问 AI “帮我分析一下当前项目的 README 并总结待办事项”。
    > **MCP 作用**：AI 通过 MCP Server 调用 `filesystem` 工具，以只读权限读取本地的 `README.md` 文件内容，将其作为 Context 传回给模型，模型再生成总结。整个过程遵循 MCP 的 `tools/call` JSON-RPC 规范。

---

### 2. Skill (技能)
**原子化能力单元**

*   **定义**：在 Agent 框架中，Skill 是对特定任务能力的封装。它比 Plugin 更轻量，比 Tool 更具语义化。Skill 通常包含“意图识别 + 执行逻辑 + 输出规范”，是 Agent 完成复杂任务的积木。
*   **触发情况**：
    *   当用户的自然语言意图匹配到该 Skill 的描述（Description）时。
    *   被其他 Skill 或编排器（Orchestrator）作为子任务调用时。
    *   满足特定前置条件（Pre-condition）时。
*   **规范**：
    *   **元数据**：必须包含 Name、Description（用于 LLM 理解何时调用）、Input Schema、Output Schema。
    *   **独立性**：应尽量无状态或自包含状态。
    *   **可组合性**：支持链式调用或并行执行。
    *   *注：Skill 没有像 MCP 那样的行业统一协议，通常依赖于具体框架（如 LangChain, AutoGen, Dify）的内部规范。*
*   **例子**：
    > **场景**：用户说 “把这张图片翻译成英文并生成一段 Twitter 文案”。
    > **Skill 作用**：Agent 识别出两个 Skill：`ImageOCRTranslation` 和 `SocialCopywriting`。先触发前者提取并翻译文字，将结果作为输入传递给后者，最终输出符合推特风格的文案。

---

### 3. Hook (钩子)
**生命周期拦截点**

*   **定义**：一种编程机制，允许在程序执行的特定节点（生命周期）插入自定义代码。它是**被动触发**的，不改变主流程逻辑，但能监听或修改流经的数据。
*   **触发情况**：
    *   **事件驱动**：如 `on_start`, `on_end`, `on_error`, `before_request`, `after_response`。
    *   **状态变更时**：如数据库写入前、用户登录成功后。
    *   **AI 场景特有**：LLM 生成 Token 流式输出时（Streaming Hook）、工具调用前后。
*   **规范**：
    *   **签名约束**：必须符合宿主系统定义的函数签名（参数类型、返回值）。
    *   **同步/异步**：需明确声明是阻塞式还是非阻塞式。
    *   **副作用控制**：通常建议 Hook 是纯观察性的，若修改数据需遵循严格的契约，避免破坏主流程。
    *   **优先级**：多个 Hook 挂载同一点时，需有明确的执行顺序规范。
*   **例子**：
    > **场景**：企业级 AI 助手需要合规审计。
    > **Hook 作用**：注册一个 `after_llm_response` Hook。每当 AI 生成回复后，该 Hook 自动触发，将问答记录异步发送到审计日志系统，并对敏感词进行脱敏处理。用户无感知，主对话流程不受影响。

---

### 4. Plugin (插件)
**模块化扩展包**

*   **定义**：一种完整的、可插拔的软件模块，用于为宿主应用添加新功能。Plugin 是一个**容器概念**，它内部可能包含多个 Tools、Skills、Hooks 甚至 UI 组件。
*   **触发情况**：
    *   **安装/加载时**：宿主启动时扫描并注册插件。
    *   **功能调用时**：用户主动启用或系统按需加载。
    *   **配置驱动**：通过配置文件声明启用哪些插件。
*   **规范**：
    *   ** manifest/清单文件**：如 `plugin.json`, `manifest.yaml`，声明版本、依赖、权限、入口点。
    *   **隔离性**：理想情况下应有独立的命名空间或沙箱环境。
    *   **API 契约**：必须实现宿主定义的 Interface（如 `IPlugin`, `activate()`, `deactivate()`）。
    *   **版本兼容**：需声明支持的宿主版本范围。

---


### 1. 创建一个 MCP Tool
**目标**：让 AI 能查询本机 SQLite 数据库

#### 步骤：用官方 SDK 声明一个工具
```python
# server.py
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("my-db-server")

@mcp.tool()
def query_sqlite(sql: str) -> str:
    """Execute a read-only SQL query on the local analytics database.

    Args:
        sql: A SELECT statement. INSERT/UPDATE/DELETE are not allowed.
    """
    import sqlite3
    conn = sqlite3.connect("analytics.db")
    # 安全检查：只允许 SELECT
    if not sql.strip().upper().startswith("SELECT"):
        return "Error: Only SELECT queries are permitted."
    cursor = conn.execute(sql)
    rows = cursor.fetchall()
    conn.close()
    return str(rows)

if __name__ == "__main__":
    mcp.run(transport="stdio")
```

#### 创作要点
- 使用 `@mcp.tool()` 装饰器，函数名即工具名，docstring 即 LLM 看到的描述。
- 参数类型注解自动生成 JSON Schema。
- 运行后通过 stdio 与 AI Client 通信，无需手写 JSON-RPC。

---

### 2. 创建一个 Skill
**目标**：让 Agent 能把 Markdown 转成 PDF

#### 步骤：在 Dify / LangChain 等框架中定义 Skill
```yaml
# skills/md_to_pdf.yaml
name: markdown_to_pdf
description: >
  Converts Markdown text to a downloadable PDF file.
  Use when the user wants to export notes, reports, or documents as PDF.
  Do NOT use for HTML or Word conversion.

parameters:
  markdown_content:
    type: string
    required: true
    description: Raw Markdown text to convert
  filename:
    type: string
    required: false
    default: "export.pdf"
    description: Output PDF filename

return_type: file
```

```python
# skills/md_to_pdf.py
import markdown
from weasyprint import HTML

def execute(markdown_content: str, filename: str = "export.pdf") -> str:
    html = markdown.markdown(markdown_content)
    HTML(string=html).write_pdf(filename)
    return f"/tmp/{filename}"
```

#### 创作要点
- **YAML 元数据是核心**：`description` 写给 LLM 看，决定它何时被选中。
- 执行函数签名必须与 YAML 中 `parameters` 一一对应。
- Skill = 元数据文件 + 执行函数，两者配对注册到 Agent 框架。

---

### 3. 创建一个 Hook
**目标**：在每次 AI 回复后自动记录 Token 消耗

#### 步骤：注册一个生命周期回调
```python
# hooks/token_logger.py
from agent_framework import hook

@hook("after_llm_response")
async def log_token_usage(response, context):
    """
    此函数在每次 LLM 返回响应后自动触发。
    签名 (response, context) 由框架规定，不可更改。
    """
    usage = response.usage  # {prompt_tokens, completion_tokens}
    cost = usage.prompt_tokens * 0.0001 + usage.completion_tokens * 0.0002

    await context.logger.info(
        f"Token usage: {usage}, estimated cost: ${cost:.4f}"
    )
    # Hook 不返回值，仅做副作用操作
```

```python
# main.py 中注册
from hooks.token_logger import log_token_usage
app.register_hook("after_llm_response", log_token_usage)
```

#### 创作要点
- **不能独立存在**：必须挂载到宿主系统的某个事件点上。
- **签名固定**：参数由框架定义，你只能按规范接收。
- **无返回值**：Hook 是观察者，不应改变主流程结果（除非框架明确允许）。
- 创作 = 写一个符合签名的函数 + 一行注册代码。

---

### 4. 创建一个 Plugin
**目标**：为 Obsidian 添加一个“AI 摘要笔记”插件

#### 步骤：搭建插件目录结构
```
ai-summarizer/
├── manifest.json          ← 插件身份证
├── main.ts                ← 入口逻辑
└── styles.css             ← 可选 UI 样式
```

```json
// manifest.json
{
  "id": "ai-summarizer",
  "name": "AI Note Summarizer",
  "version": "1.0.0",
  "minAppVersion": "1.5.0",
  "description": "Summarize current note using OpenAI API",
  "author": "YourName",
  "isDesktopOnly": false
}
```

```typescript
// main.ts
import { Plugin, Notice } from 'obsidian';

export default class AISummarizerPlugin extends Plugin {
  async onload() {
    // 注册命令 → 用户可通过 Ctrl+P 触发
    this.addCommand({
      id: 'summarize-current-note',
      name: 'Summarize this note with AI',
      callback: async () => {
        const content = await this.app.workspace.getActiveFile()?.vault.read();
        const summary = await callOpenAI(content);
        new Notice(`Summary: ${summary.slice(0, 100)}...`);
      },
    });
  }

  onunload() {
    // 清理资源
  }
}
```

#### 创作要点
- **manifest.json 是必须的**：没有它宿主不识别这是插件。
- **实现生命周期接口**：`onload()` / `onunload()` 是插件的入口契约。
- **在 onload 中注册功能**：命令、设置面板、Ribbon 图标等都在此处挂载。
- 创作 = 清单文件 + 实现接口的入口模块 + 打包发布。

---

### 🎯 四者“创作工具”时的核心区别

| 你在创作什么 | 交付物形态 | 谁来调用它 | 创作时最关心什么 |
| :--- | :--- | :--- | :--- |
| **MCP Tool** | 一个带装饰器的 Python/TS 函数 | AI Client 通过协议自动发现并调用 | 参数类型注解 + 清晰的 docstring |
| **Skill** | YAML 元数据 + 执行函数 | Agent 编排器根据意图匹配选择 | description 写得让 LLM 能准确理解用途 |
| **Hook** | 一个固定签名的回调函数 | 宿主系统在特定事件点自动触发 | 签名是否正确、副作用是否安全 |
| **Plugin** | manifest + 入口模块的完整包 | 宿主应用加载后由用户或系统触发 | 接口契约 + 权限声明 + 版本兼容 |

