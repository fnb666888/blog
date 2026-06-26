---
title: "OpenAI Curated Plugins 中文增强版"
description: "OpenAI 官方 Curated Plugins 中文增强版目录，涵盖 148 个插件的用途说明、典型场景和安装建议，助力 Codex 高效工作"
summary: "OpenAI 官方 Curated Plugins 中文增强版目录，涵盖 148 个插件的用途说明、典型场景和安装建议"
date: 2026-06-26T22:39:50+08:00
lastmod: 2026-06-26T22:39:50+08:00
draft: false
weight: 50
categories: ["技术"]
tags: ["OpenAI", "Plugins", "Codex", "AI", "参考"]
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

本文件基于 `openai-curated-plugins.md` 生成，保留官方 manifest 字段，并补充中文用途、典型场景和安装建议。

生成时间：2026-05-30 18:51:49 +08:00

说明：中文用途是根据官方 manifest 描述、插件名称、分类、Skills/MCP 信息整理的增强说明；具体可用能力仍以安装后的 `/plugins` 和 `/mcp verbose` 显示为准。

插件数量：148

## 设计与内容创作（Design）

### biorender

- 显示名：BioRender
- 官方分类：Design
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：BioRender helps scientists create professional figures in minutes.
- 中文用途：适合设计、图形、视频和前端落地场景，让 Codex 更好地理解视觉资产、生成内容或实现设计稿。
- 典型用法：在提示词中明确服务名和目标，例如"用 BioRender 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/biorender/.codex-plugin/plugin.json

### canva

- 显示名：Canva
- 官方分类：Design
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Search, create, edit designs
- 中文用途：适合设计、图形、视频和前端落地场景，让 Codex 更好地理解视觉资产、生成内容或实现设计稿。
- 典型用法：在提示词中明确服务名和目标，例如"用 Canva 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/canva/.codex-plugin/plugin.json

### figma

- 显示名：Figma
- 官方分类：Design
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Figma workflows for design implementation, Code Connect templates, and design system rule generation.
- 中文用途：适合设计、图形、视频和前端落地场景，让 Codex 更好地理解视觉资产、生成内容或实现设计稿。
- 典型用法：在提示词中明确服务名和目标，例如"用 Figma 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/figma/.codex-plugin/plugin.json

### heygen

- 显示名：HeyGen
- 官方分类：Design
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Create HeyGen avatar videos and personalized video messages. Build a persistent digital identity from a description or hosted photo URL, then generate presenter-led videos with your digital twin.
- 中文用途：适合设计、图形、视频和前端落地场景，让 Codex 更好地理解视觉资产、生成内容或实现设计稿。
- 典型用法：在提示词中明确服务名和目标，例如"用 HeyGen 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/heygen/.codex-plugin/plugin.json

### hyperframes

- 显示名：HyperFrames by HeyGen
- 官方分类：Design
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：Write HTML, render video. Compositions, GSAP animations, captions, voiceovers, audio-reactive visuals, and website-to-video capture for HyperFrames.
- 中文用途：适合设计、图形、视频和前端落地场景，让 Codex 更好地理解视觉资产、生成内容或实现设计稿。
- 典型用法：在提示词中明确服务名和目标，例如"用 HyperFrames by HeyGen 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/hyperframes/.codex-plugin/plugin.json

### remotion

- 显示名：Remotion
- 官方分类：Design
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：Remotion video creation skills — best practices, animations, audio, captions, 3D, and more for building programmatic videos with React.
- 中文用途：适合设计、图形、视频和前端落地场景，让 Codex 更好地理解视觉资产、生成内容或实现设计稿。
- 典型用法：在提示词中明确服务名和目标，例如"用 Remotion 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/remotion/.codex-plugin/plugin.json

## 开发工具（Developer Tools）

### build-ios-apps

- 显示名：Build iOS Apps
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：Build iOS apps with workflows for App Intents, SwiftUI UI work, refactors, performance profiling, leak investigation, and simulator debugging.
- 中文用途：适合应用开发场景，会给 Codex 增加面向特定平台的实现规范、调试流程、测试方式和代码生成经验。
- 典型用法：在提示词中明确服务名和目标，例如"用 Build iOS Apps 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件暴露 MCP 能力，安装后可用 `/mcp verbose` 检查工具是否启动成功。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- 包含 MCP：./.mcp.json
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/build-ios-apps/.codex-plugin/plugin.json

### build-macos-apps

- 显示名：Build macOS Apps
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：Build, run, test, debug, instrument, and implement local macOS apps using Xcode, SwiftUI, AppKit interop, unified logging, and shell-first desktop workflows.
- 中文用途：适合应用开发场景，会给 Codex 增加面向特定平台的实现规范、调试流程、测试方式和代码生成经验。
- 典型用法：在提示词中明确服务名和目标，例如"用 Build macOS Apps 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/build-macos-apps/.codex-plugin/plugin.json

### build-web-apps

- 显示名：Build Web Apps
- 官方分类：Developer Tools
- 认证方式：ON_USE
- 适用产品：CODEX
- 官方功能描述：Build web apps with frontend asset design, browser testing, UI components, payments, and database guidance.
- 中文用途：适合应用开发场景，会给 Codex 增加面向特定平台的实现规范、调试流程、测试方式和代码生成经验。
- 典型用法：在提示词中明确服务名和目标，例如"用 Build Web Apps 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：适合先保留，需要用到时再认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/build-web-apps/.codex-plugin/plugin.json

### build-web-data-visualization

- 显示名：Build Web Data Visualization
- 官方分类：Developer Tools
- 认证方式：ON_USE
- 适用产品：CODEX
- 官方功能描述：Design, critique, implement, test, and export web data visualizations in Codex, including charts, maps, dashboards, Gantt, UML, scrollytelling, reports, slides, mobile views, shareable state, and advanced WebGL concepts.
- 中文用途：适合应用开发场景，会给 Codex 增加面向特定平台的实现规范、调试流程、测试方式和代码生成经验。
- 典型用法：在提示词中明确服务名和目标，例如"用 Build Web Data Visualization 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：适合先保留，需要用到时再认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/build-web-data-visualization/.codex-plugin/plugin.json

### circleci

- 显示名：CircleCI
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Build, test, and deploy any application
- 中文用途：适合开发、部署和运维场景，帮助 Codex 查看部署、日志、数据库、CI/CD、监控和错误信息。
- 典型用法：在提示词中明确服务名和目标，例如"用 CircleCI 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/circleci/.codex-plugin/plugin.json

### cloudflare

- 显示名：Cloudflare
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Cloudflare platform plugin with curated skills for Workers, Wrangler, and Agents SDK plus the official Cloudflare API MCP server.
- 中文用途：适合开发、部署和运维场景，帮助 Codex 查看部署、日志、数据库、CI/CD、监控和错误信息。
- 典型用法：在提示词中明确服务名和目标，例如"用 Cloudflare 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件暴露 MCP 能力，安装后可用 `/mcp verbose` 检查工具是否启动成功。
- 包含 Skills：./skills/
- 包含 MCP：./.mcp.json
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/cloudflare/.codex-plugin/plugin.json

### cloudinary

- 显示名：Cloudinary
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Manage, search, and transform your Cloudinary media library — directly from Codex.
- 中文用途：适合软件开发或工程平台集成，让 Codex 能结合该服务完成查询、配置、调试或自动化任务。
- 典型用法：在提示词中明确服务名和目标，例如"用 Cloudinary 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/cloudinary/.codex-plugin/plugin.json

### coderabbit

- 显示名：CodeRabbit
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：AI-powered code review in Codex, powered by CodeRabbit.
- 中文用途：适合软件开发或工程平台集成，让 Codex 能结合该服务完成查询、配置、调试或自动化任务。
- 典型用法：在提示词中明确服务名和目标，例如"用 CodeRabbit 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/coderabbit/.codex-plugin/plugin.json

### convex

- 显示名：Convex
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Add a reactive, type-safe backend, database, server functions, and scaling guidance to JavaScript and TypeScript apps with Convex.
- 中文用途：适合开发、部署和运维场景，帮助 Codex 查看部署、日志、数据库、CI/CD、监控和错误信息。
- 典型用法：在提示词中明确服务名和目标，例如"用 Convex 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/convex/.codex-plugin/plugin.json

### datadog

- 显示名：Datadog (Preview)
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Investigate Datadog telemetry and workflows from Codex
- 中文用途：适合开发、部署和运维场景，帮助 Codex 查看部署、日志、数据库、CI/CD、监控和错误信息。
- 典型用法：在提示词中明确服务名和目标，例如"用 Datadog (Preview) 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/datadog/.codex-plugin/plugin.json

### expo

- 显示名：Expo
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：Official Expo skills for building, deploying, upgrading, and debugging Expo and React Native apps.
- 中文用途：适合应用开发场景，会给 Codex 增加面向特定平台的实现规范、调试流程、测试方式和代码生成经验。
- 典型用法：在提示词中明确服务名和目标，例如"用 Expo 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/expo/.codex-plugin/plugin.json

### game-studio

- 显示名：Game Studio
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：Design, prototype, and ship browser games with guided 2D and 3D workflows, asset pipelines, and playtesting support.
- 中文用途：适合应用开发场景，会给 Codex 增加面向特定平台的实现规范、调试流程、测试方式和代码生成经验。
- 典型用法：在提示词中明确服务名和目标，例如"用 Game Studio 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/game-studio/.codex-plugin/plugin.json

### github

- 显示名：GitHub
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Inspect repositories, triage pull requests and issues, debug CI, and publish changes through a hybrid GitHub connector and CLI workflow.
- 中文用途：适合让 Codex 读取仓库、Issue、PR、CI 状态，辅助代码审查、故障定位、发布说明和协作流程。
- 典型用法：在提示词中明确服务名和目标，例如"用 GitHub 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/github/.codex-plugin/plugin.json

### hostinger

- 显示名：Hostinger
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Hostinger Horizons lets you build real websites and apps just by describing what you want.
- 中文用途：适合软件开发或工程平台集成，让 Codex 能结合该服务完成查询、配置、调试或自动化任务。
- 典型用法：在提示词中明确服务名和目标，例如"用 Hostinger 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/hostinger/.codex-plugin/plugin.json

### hugging-face

- 显示名：Hugging Face
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Inspect models, datasets, Spaces, and research
- 中文用途：适合软件开发或工程平台集成，让 Codex 能结合该服务完成查询、配置、调试或自动化任务。
- 典型用法：在提示词中明确服务名和目标，例如"用 Hugging Face 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/hugging-face/.codex-plugin/plugin.json

### marcopolo

- 显示名：MarcoPolo
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：MarcoPolo spins up a secure container where Codex can work with your actual data.
- 中文用途：适合软件开发或工程平台集成，让 Codex 能结合该服务完成查询、配置、调试或自动化任务。
- 典型用法：在提示词中明确服务名和目标，例如"用 MarcoPolo 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/marcopolo/.codex-plugin/plugin.json

### neon-postgres

- 显示名：Neon Postgres
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Manage Neon Serverless Postgres projects and databases with the neon-postgres agent skill and the Neon MCP Server
- 中文用途：适合开发、部署和运维场景，帮助 Codex 查看部署、日志、数据库、CI/CD、监控和错误信息。
- 典型用法：在提示词中明确服务名和目标，例如"用 Neon Postgres 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/neon-postgres/.codex-plugin/plugin.json

### netlify

- 显示名：Netlify
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Deploy projects and manage preview or production releases on Netlify.
- 中文用途：适合开发、部署和运维场景，帮助 Codex 查看部署、日志、数据库、CI/CD、监控和错误信息。
- 典型用法：在提示词中明确服务名和目标，例如"用 Netlify 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/netlify/.codex-plugin/plugin.json

### plugin-eval

- 显示名：Plugin Eval
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：Evaluate Codex skills and plugins from chat with a beginner-friendly start command, local-first reports, token budget explanations, and guided benchmarking.
- 中文用途：适合软件开发或工程平台集成，让 Codex 能结合该服务完成查询、配置、调试或自动化任务。
- 典型用法：在提示词中明确服务名和目标，例如"用 Plugin Eval 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/plugin-eval/.codex-plugin/plugin.json

### quicknode

- 显示名：Quicknode
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Manage your Quicknode infrastructure directly in OpenAI.
- 中文用途：适合软件开发或工程平台集成，让 Codex 能结合该服务完成查询、配置、调试或自动化任务。
- 典型用法：在提示词中明确服务名和目标，例如"用 Quicknode 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/quicknode/.codex-plugin/plugin.json

### render

- 显示名：Render
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Skills for deploying, debugging, monitoring, and migrating apps on Render.
- 中文用途：适合开发、部署和运维场景，帮助 Codex 查看部署、日志、数据库、CI/CD、监控和错误信息。
- 典型用法：在提示词中明确服务名和目标，例如"用 Render 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/render/.codex-plugin/plugin.json

### sendgrid

- 显示名：SendGrid
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Connector for interacting with the SendGrid email API.
- 中文用途：适合软件开发或工程平台集成，让 Codex 能结合该服务完成查询、配置、调试或自动化任务。
- 典型用法：在提示词中明确服务名和目标，例如"用 SendGrid 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/sendgrid/.codex-plugin/plugin.json

### sentry

- 显示名：Sentry
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Inspect recent issues and events in Sentry from Codex.
- 中文用途：适合开发、部署和运维场景，帮助 Codex 查看部署、日志、数据库、CI/CD、监控和错误信息。
- 典型用法：在提示词中明确服务名和目标，例如"用 Sentry 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/sentry/.codex-plugin/plugin.json

### statsig

- 显示名：Statsig
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Bring your Statsig workspace into Codex.
- 中文用途：适合产品分析、增长分析和 BI 场景，帮助 Codex 查询指标、解释趋势、生成数据报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Statsig 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/statsig/.codex-plugin/plugin.json

### supabase

- 显示名：Supabase
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Access your Supabase projects and perform tasks like managing tables, fetching config, and querying data.
- 中文用途：适合开发、部署和运维场景，帮助 Codex 查看部署、日志、数据库、CI/CD、监控和错误信息。
- 典型用法：在提示词中明确服务名和目标，例如"用 Supabase 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/supabase/.codex-plugin/plugin.json

### superpowers

- 显示名：Superpowers
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：An agentic skills framework & software development methodology that works: planning, TDD, debugging, and collaboration workflows.
- 中文用途：适合软件开发或工程平台集成，让 Codex 能结合该服务完成查询、配置、调试或自动化任务。
- 典型用法：在提示词中明确服务名和目标，例如"用 Superpowers 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/superpowers/.codex-plugin/plugin.json

### temporal

- 显示名：Temporal
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Comprehensive skill for the entire Temporal lifecycle — developing applications, using the Temporal CLI, running and managing Temporal Server, and working with Temporal Cloud.
- 中文用途：适合开发、部署和运维场景，帮助 Codex 查看部署、日志、数据库、CI/CD、监控和错误信息。
- 典型用法：在提示词中明确服务名和目标，例如"用 Temporal 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/temporal/.codex-plugin/plugin.json

### test-android-apps

- 显示名：Test Android Apps
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：Test Android apps with emulator workflows for reproduction, screenshots, UI inspection, log capture, and performance profiling.
- 中文用途：适合应用开发场景，会给 Codex 增加面向特定平台的实现规范、调试流程、测试方式和代码生成经验。
- 典型用法：在提示词中明确服务名和目标，例如"用 Test Android Apps 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/test-android-apps/.codex-plugin/plugin.json

### twilio-developer-kit

- 显示名：Twilio Developer Kit
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Twilio Skills provide procedural knowledge for AI coding agents — which APIs to use, in what order, and what to avoid. Covers Messaging, Voice, Verify, SendGrid, and 30+ products.
- 中文用途：适合软件开发或工程平台集成，让 Codex 能结合该服务完成查询、配置、调试或自动化任务。
- 典型用法：在提示词中明确服务名和目标，例如"用 Twilio Developer Kit 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/twilio-developer-kit/.codex-plugin/plugin.json

### vantage

- 显示名：Vantage
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Vantage is a cloud observability and optimization platform that aggregates cloud infrastructure costs acros...
- 中文用途：适合软件开发或工程平台集成，让 Codex 能结合该服务完成查询、配置、调试或自动化任务。
- 典型用法：在提示词中明确服务名和目标，例如"用 Vantage 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/vantage/.codex-plugin/plugin.json

### vercel

- 显示名：Vercel
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Build and deploy web apps and agents
- 中文用途：适合开发、部署和运维场景，帮助 Codex 查看部署、日志、数据库、CI/CD、监控和错误信息。
- 典型用法：在提示词中明确服务名和目标，例如"用 Vercel 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/vercel/.codex-plugin/plugin.json

### yepcode

- 显示名：YepCode
- 官方分类：Developer Tools
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：YepCode lets you build custom AI tools using your own code with JSON Schema-defined inputs, executed in an...
- 中文用途：适合软件开发或工程平台集成，让 Codex 能结合该服务完成查询、配置、调试或自动化任务。
- 典型用法：在提示词中明确服务名和目标，例如"用 YepCode 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/yepcode/.codex-plugin/plugin.json

## 工程（Engineering）

### openai-developers

- 显示名：OpenAI Developers
- 官方分类：Engineering
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：Build with OpenAI APIs, Agents SDK, and ChatGPT Apps, and create and save OpenAI API keys from Codex.
- 中文用途：适合 OpenAI API、Agents SDK、ChatGPT Apps 等开发任务，给 Codex 提供官方开发工作流和文档导向。
- 典型用法：在提示词中明确服务名和目标，例如"用 OpenAI Developers 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/openai-developers/.codex-plugin/plugin.json

## 生活服务（Lifestyle）

### cogedim

- 显示名：Cogedim
- 官方分类：Lifestyle
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Cogedim is one of France's leading real estate developers.
- 中文用途：适合具体生活服务或垂直业务场景，通常需要对应服务账号才能发挥作用。
- 典型用法：在提示词中明确服务名和目标，例如"用 Cogedim 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/cogedim/.codex-plugin/plugin.json

### finn

- 显示名：FINN
- 官方分类：Lifestyle
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：A FINN car subscription is a flexible way to stay mobile anytime - without long-term commitments like buyin...
- 中文用途：适合具体生活服务或垂直业务场景，通常需要对应服务账号才能发挥作用。
- 典型用法：在提示词中明确服务名和目标，例如"用 FINN 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/finn/.codex-plugin/plugin.json

### myregistry-com

- 显示名：MyRegistry.com
- 官方分类：Lifestyle
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：MyRegistry.com helps make gift-giving easy for friends & family to get you the gifts you really want!
- 中文用途：适合具体生活服务或垂直业务场景，通常需要对应服务账号才能发挥作用。
- 典型用法：在提示词中明确服务名和目标，例如"用 MyRegistry.com 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/myregistry-com/.codex-plugin/plugin.json

### setu-bharat-connect-billpay

- 显示名：Setu Bharat Connect BillPay
- 官方分类：Lifestyle
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：This app helps you pay your utility bills through simple conversation.
- 中文用途：适合具体生活服务或垂直业务场景，通常需要对应服务账号才能发挥作用。
- 典型用法：在提示词中明确服务名和目标，例如"用 Setu Bharat Connect BillPay 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/setu-bharat-connect-billpay/.codex-plugin/plugin.json

### weatherpromise

- 显示名：WeatherPromise
- 官方分类：Lifestyle
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Protect your trip with WeatherPromise and get back the full cost if it rains more than promised during your...
- 中文用途：适合具体生活服务或垂直业务场景，通常需要对应服务账号才能发挥作用。
- 典型用法：在提示词中明确服务名和目标，例如"用 WeatherPromise 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/weatherpromise/.codex-plugin/plugin.json

## 生产力与业务协作（Productivity）

### airtable

- 显示名：Airtable
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Airtable is the database and operations layer for your agents — whether running product, marketing, sales, ops, HR, or a custom business app. It combines structured data with multiplayer visual surfaces (grid, kanban, calendar, gallery, timeline) humans and agents share — plus sync integrations to Jira, Salesforce, Zendesk, Google Drive, Databricks, and the rest of your stack, all backed by enterprise governance. This plugin makes Codex fluent in Airtable: creating bases and schema, working with records, and sharing UI for collaboration. Uses the Airtable app connector.
- 中文用途：适合让 Codex 检索知识库、文档、表格或笔记，把已有资料转成结构化输出、计划、摘要或代码上下文。
- 典型用法：在提示词中明确服务名和目标，例如"用 Airtable 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/airtable/.codex-plugin/plugin.json

### amplitude

- 显示名：Amplitude
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Product analytics and funnels
- 中文用途：适合产品分析、增长分析和 BI 场景，帮助 Codex 查询指标、解释趋势、生成数据报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Amplitude 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/amplitude/.codex-plugin/plugin.json

### apollo

- 显示名：Apollo
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：B2B prospecting, account research, contacts, and outreach lists
- 中文用途：适合 CRM、销售、客户情报和增长场景，用于查找客户或公司信息、整理线索、生成跟进策略。
- 典型用法：在提示词中明确服务名和目标，例如"用 Apollo 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/apollo/.codex-plugin/plugin.json

### asana

- 显示名：Asana
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Work with your Asana tasks, subtasks, comments, due dates, and project details to create summaries, understand priorities, and prepare clear status updates.
- 中文用途：适合把项目管理系统中的任务、缺陷、路线图和状态报告带入 Codex，让它辅助拆任务、总结进展、生成行动项。
- 典型用法：在提示词中明确服务名和目标，例如"用 Asana 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/asana/.codex-plugin/plugin.json

### atlassian-rovo

- 显示名：Atlassian Rovo
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Manage Jira and Confluence fast
- 中文用途：适合把项目管理系统中的任务、缺陷、路线图和状态报告带入 Codex，让它辅助拆任务、总结进展、生成行动项。
- 典型用法：在提示词中明确服务名和目标，例如"用 Atlassian Rovo 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/atlassian-rovo/.codex-plugin/plugin.json

### attio

- 显示名：Attio
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Attio connects Codex directly to your CRM workspace, letting you manage customer relationships through na...
- 中文用途：适合 CRM、销售、客户情报和增长场景，用于查找客户或公司信息、整理线索、生成跟进策略。
- 典型用法：在提示词中明确服务名和目标，例如"用 Attio 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/attio/.codex-plugin/plugin.json

### brand24

- 显示名：Brand24
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：The Brand24 app in Codex lets marketing and PR teams instantly explore brand mentions, sentiment, and med...
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Brand24 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/brand24/.codex-plugin/plugin.json

### brex

- 显示名：Brex
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Connect Brex to Codex and review your company finances through natural conversation — at Codex speed.
- 中文用途：适合支付、账单、费用和财务运营场景，让 Codex 能围绕交易、发票、客户或费用数据工作。
- 典型用法：在提示词中明确服务名和目标，例如"用 Brex 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/brex/.codex-plugin/plugin.json

### calendly

- 显示名：Calendly
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Search Calendly events and availability so Codex can reason about meetings and scheduling.
- 中文用途：适合处理沟通和日程上下文，例如总结邮件/消息、安排会议、提炼行动项、准备跟进内容。
- 典型用法：在提示词中明确服务名和目标，例如"用 Calendly 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/calendly/.codex-plugin/plugin.json

### carta-crm

- 显示名：Carta CRM
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Carta CRM helps investment teams stay on top of deal flow by keeping deals, companies, and relationships in...
- 中文用途：适合 CRM、销售、客户情报和增长场景，用于查找客户或公司信息、整理线索、生成跟进策略。
- 典型用法：在提示词中明确服务名和目标，例如"用 Carta CRM 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/carta-crm/.codex-plugin/plugin.json

### channel99

- 显示名：Channel99
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Channel99 real time go to market intelligence connects Codex directly to Channel99's performance marketin...
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Channel99 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/channel99/.codex-plugin/plugin.json

### circleback

- 显示名：Circleback
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Circleback helps teams get the most out of every conversation with AI-powered meeting notes, action items,...
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Circleback 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/circleback/.codex-plugin/plugin.json

### clay

- 显示名：Clay
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Find, enrich, and organize GTM accounts, contacts, and prospecting workflows from Clay.
- 中文用途：适合 CRM、销售、客户情报和增长场景，用于查找客户或公司信息、整理线索、生成跟进策略。
- 典型用法：在提示词中明确服务名和目标，例如"用 Clay 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/clay/.codex-plugin/plugin.json

### clickup

- 显示名：ClickUp
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Turn Codex into your ClickUp command center.
- 中文用途：适合把项目管理系统中的任务、缺陷、路线图和状态报告带入 Codex，让它辅助拆任务、总结进展、生成行动项。
- 典型用法：在提示词中明确服务名和目标，例如"用 ClickUp 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/clickup/.codex-plugin/plugin.json

### close

- 显示名：Close
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：CRM leads, opportunities, activities, and sales pipeline context
- 中文用途：适合 CRM、销售、客户情报和增长场景，用于查找客户或公司信息、整理线索、生成跟进策略。
- 典型用法：在提示词中明确服务名和目标，例如"用 Close 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/close/.codex-plugin/plugin.json

### common-room

- 显示名：Common Room
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Embed complete buyer intelligence directly within Codex.
- 中文用途：适合 CRM、销售、客户情报和增长场景，用于查找客户或公司信息、整理线索、生成跟进策略。
- 典型用法：在提示词中明确服务名和目标，例如"用 Common Room 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/common-room/.codex-plugin/plugin.json

### conductor

- 显示名：Conductor
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：The Conductor MCP server retrieves proprietary performance metrics regarding a brand's visibility, sentimen...
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Conductor 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/conductor/.codex-plugin/plugin.json

### coupler-io

- 显示名：Coupler.io
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Analyze multi-channel marketing, financial, sales, e-commerce, and other business data within Codex by co...
- 中文用途：适合产品分析、增长分析和 BI 场景，帮助 Codex 查询指标、解释趋势、生成数据报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Coupler.io 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/coupler-io/.codex-plugin/plugin.json

### coveo

- 显示名：Coveo
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Search your enterprise content
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Coveo 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/coveo/.codex-plugin/plugin.json

### datasite

- 显示名：Datasite
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Deal room documents, diligence materials, and Q&A workflows
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Datasite 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/datasite/.codex-plugin/plugin.json

### deepnote

- 显示名：Deepnote
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Use Deepnote's collaborative data workspace to explore data, automate notebooks and SQL workflows, and turn analysis into shareable results.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Deepnote 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/deepnote/.codex-plugin/plugin.json

### demandbase

- 显示名：Demandbase
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Demandbase integration with Codex gives sales, marketing, and GTM teams seamless access to rich B2B data...
- 中文用途：适合 CRM、销售、客户情报和增长场景，用于查找客户或公司信息、整理线索、生成跟进策略。
- 典型用法：在提示词中明确服务名和目标，例如"用 Demandbase 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/demandbase/.codex-plugin/plugin.json

### docket

- 显示名：Docket
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Docket AI makes your sales knowledge your instant superpower.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Docket 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/docket/.codex-plugin/plugin.json

### docusign

- 显示名：Docusign
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Agreement envelopes, signing status, recipients, and contract dates
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Docusign 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/docusign/.codex-plugin/plugin.json

### domotz-preview

- 显示名：Domotz (Preview)
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Monitor and manage your network infrastructure through natural language.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Domotz (Preview) 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/domotz-preview/.codex-plugin/plugin.json

### dovetail

- 显示名：dovetail
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：未能读取 plugin.json；可能该插件清单存在但 manifest 路径、分支或可见性不同。
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 dovetail 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/dovetail/.codex-plugin/plugin.json

### egnyte

- 显示名：egnyte
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：未能读取 plugin.json；可能该插件清单存在但 manifest 路径、分支或可见性不同。
- 中文用途：适合让 Codex 检索知识库、文档、表格或笔记，把已有资料转成结构化输出、计划、摘要或代码上下文。
- 典型用法：在提示词中明确服务名和目标，例如"用 egnyte 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/egnyte/.codex-plugin/plugin.json

### fireflies

- 显示名：Fireflies
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：The Fireflies app brings your meetings and knowledge directly into Codex.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Fireflies 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/fireflies/.codex-plugin/plugin.json

### fyxer

- 显示名：Fyxer
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Fyxer for Codex lets you write emails that sound like you, right from the chat.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Fyxer 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/fyxer/.codex-plugin/plugin.json

### gmail

- 显示名：Gmail
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Work with Gmail using the configured Gmail app connector.
- 中文用途：适合处理沟通和日程上下文，例如总结邮件/消息、安排会议、提炼行动项、准备跟进内容。
- 典型用法：在提示词中明确服务名和目标，例如"用 Gmail 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/gmail/.codex-plugin/plugin.json

### google-calendar

- 显示名：Google Calendar
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Connect Google Calendar for scheduling, availability, daily briefs, and event management.
- 中文用途：适合处理沟通和日程上下文，例如总结邮件/消息、安排会议、提炼行动项、准备跟进内容。
- 典型用法：在提示词中明确服务名和目标，例如"用 Google Calendar 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/google-calendar/.codex-plugin/plugin.json

### granola

- 显示名：Granola
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Granola MCP connects your meeting history to Codex so your assistant can pull real context from past conv...
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Granola 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/granola/.codex-plugin/plugin.json

### happenstance

- 显示名：Happenstance
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Happenstance searches your professional network using natural language to find the right people.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Happenstance 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/happenstance/.codex-plugin/plugin.json

### help-scout

- 显示名：Help Scout
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Connect to sync Help Scout mailboxes and conversations for use in Codex.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Help Scout 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/help-scout/.codex-plugin/plugin.json

### hg-insights

- 显示名：HG Insights
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Access HG Insights revenue growth intelligence, account data, buyer intent, technographics, and GTM signals from Codex.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 HG Insights 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/hg-insights/.codex-plugin/plugin.json

### highlevel

- 显示名：HighLevel
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：HighLevel gives agencies a unified CRM, automation, and client communication platform.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 HighLevel 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/highlevel/.codex-plugin/plugin.json

### hubspot

- 显示名：HubSpot
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Work with your HubSpot data to analyze patterns, create and update records, and manage your CRM operations.
- 中文用途：适合 CRM、销售、客户情报和增长场景，用于查找客户或公司信息、整理线索、生成跟进策略。
- 典型用法：在提示词中明确服务名和目标，例如"用 HubSpot 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/hubspot/.codex-plugin/plugin.json

### jam

- 显示名：Jam
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Screen record with context
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Jam 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/jam/.codex-plugin/plugin.json

### keybid-puls

- 显示名：KeyBid Puls
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Unlock the profitability of short-term rental investments with our ROI Calculator app, tailored for platfor...
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 KeyBid Puls 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/keybid-puls/.codex-plugin/plugin.json

### linear

- 显示名：Linear
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Find and reference issues and projects.
- 中文用途：适合把项目管理系统中的任务、缺陷、路线图和状态报告带入 Codex，让它辅助拆任务、总结进展、生成行动项。
- 典型用法：在提示词中明确服务名和目标，例如"用 Linear 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/linear/.codex-plugin/plugin.json

### mem

- 显示名：Mem
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Give Codex the full context of your second brain by connecting your Mem knowledge base.
- 中文用途：适合让 Codex 检索知识库、文档、表格或笔记，把已有资料转成结构化输出、计划、摘要或代码上下文。
- 典型用法：在提示词中明确服务名和目标，例如"用 Mem 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/mem/.codex-plugin/plugin.json

### meticulate

- 显示名：Meticulate
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Company matching, firmographic lookup, and go-to-market account intelligence
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Meticulate 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/meticulate/.codex-plugin/plugin.json

### mixpanel

- 显示名：Mixpanel
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Query and analyze Mixpanel
- 中文用途：适合产品分析、增长分析和 BI 场景，帮助 Codex 查询指标、解释趋势、生成数据报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Mixpanel 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/mixpanel/.codex-plugin/plugin.json

### mixpanel-headless

- 显示名：Mixpanel Headless
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Analyze Mixpanel data with the mixpanel_headless Python SDK and Codex skills.
- 中文用途：适合产品分析、增长分析和 BI 场景，帮助 Codex 查询指标、解释趋势、生成数据报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Mixpanel Headless 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/mixpanel-headless/.codex-plugin/plugin.json

### monday-com

- 显示名：Monday.com
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：A powerful MCP connector enabling AI agents to seamlessly interact with monday.com.
- 中文用途：适合把项目管理系统中的任务、缺陷、路线图和状态报告带入 Codex，让它辅助拆任务、总结进展、生成行动项。
- 典型用法：在提示词中明确服务名和目标，例如"用 Monday.com 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/monday-com/.codex-plugin/plugin.json

### motherduck

- 显示名：MotherDuck
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Connect AI assistants to your MotherDuck data warehouse.
- 中文用途：适合产品分析、增长分析和 BI 场景，帮助 Codex 查询指标、解释趋势、生成数据报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 MotherDuck 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/motherduck/.codex-plugin/plugin.json

### network-solutions

- 显示名：Network Solutions
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：The Network Solutions Domain Search Assistant makes finding an available domain fast, simple, and conversat...
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Network Solutions 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/network-solutions/.codex-plugin/plugin.json

### notion

- 显示名：Notion
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Notion workflows for implementation planning, research synthesis, meeting preparation, and knowledge capture.
- 中文用途：适合让 Codex 检索知识库、文档、表格或笔记，把已有资料转成结构化输出、计划、摘要或代码上下文。
- 典型用法：在提示词中明确服务名和目标，例如"用 Notion 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/notion/.codex-plugin/plugin.json

### omni-analytics

- 显示名：Omni Analytics
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Query Omni using the same semantic model, permissions, and logic defined by your data team directly from Codex.
- 中文用途：适合产品分析、增长分析和 BI 场景，帮助 Codex 查询指标、解释趋势、生成数据报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Omni Analytics 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/omni-analytics/.codex-plugin/plugin.json

### otter-ai

- 显示名：Otter.ai
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：The Otter.ai MCP server connects Codex to your meeting intelligence, enabling search and retrieval of transcripts, summaries, action items, and meeting metadata directly within your workflow.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Otter.ai 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/otter-ai/.codex-plugin/plugin.json

### outlook-calendar

- 显示名：Outlook Calendar
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Connect Outlook Calendar for scheduling, daily briefs, event prep, and safe meeting changes.
- 中文用途：适合处理沟通和日程上下文，例如总结邮件/消息、安排会议、提炼行动项、准备跟进内容。
- 典型用法：在提示词中明确服务名和目标，例如"用 Outlook Calendar 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/outlook-calendar/.codex-plugin/plugin.json

### outlook-email

- 显示名：Outlook Email
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Work with Outlook Email using the configured Microsoft Outlook app connector.
- 中文用途：适合处理沟通和日程上下文，例如总结邮件/消息、安排会议、提炼行动项、准备跟进内容。
- 典型用法：在提示词中明确服务名和目标，例如"用 Outlook Email 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/outlook-email/.codex-plugin/plugin.json

### pipedrive

- 显示名：Pipedrive
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Connect to sync Pipedrive deals and contacts for use in Codex.
- 中文用途：适合 CRM、销售、客户情报和增长场景，用于查找客户或公司信息、整理线索、生成跟进策略。
- 典型用法：在提示词中明确服务名和目标，例如"用 Pipedrive 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/pipedrive/.codex-plugin/plugin.json

### pylon

- 显示名：Pylon
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Access Pylon's customer support platform directly from Codex to search, manage, and resolve customer issues.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Pylon 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/pylon/.codex-plugin/plugin.json

### ranked-ai

- 显示名：Ranked AI
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Ranked AI provides industry leading AI SEO & PPC software, with a fully managed service integrated into it.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Ranked AI 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/ranked-ai/.codex-plugin/plugin.json

### razorpay

- 显示名：Razorpay
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Connect your Razorpay account to access your payment data through conversation.
- 中文用途：适合支付、账单、费用和财务运营场景，让 Codex 能围绕交易、发票、客户或费用数据工作。
- 典型用法：在提示词中明确服务名和目标，例如"用 Razorpay 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/razorpay/.codex-plugin/plugin.json

### read-ai

- 显示名：Read AI
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Read AI brings your meeting intelligence directly into your AI workflows.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Read AI 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/read-ai/.codex-plugin/plugin.json

### responsive

- 显示名：Responsive
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：The Responsive App makes it easy to work with your organization's data inside Codex.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Responsive 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/responsive/.codex-plugin/plugin.json

### rox

- 显示名：Rox
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Access Rox revenue agents, account intelligence, and sales workflow automation from Codex.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Rox 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/rox/.codex-plugin/plugin.json

### semrush

- 显示名：Semrush
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：The Semrush MCP provides structured, quantitative SEO and traffic data for domains, keywords, backlinks, an...
- 中文用途：适合产品分析、增长分析和 BI 场景，帮助 Codex 查询指标、解释趋势、生成数据报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Semrush 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/semrush/.codex-plugin/plugin.json

### sharepoint

- 显示名：SharePoint
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Work with SharePoint using the configured Microsoft SharePoint app connector.
- 中文用途：适合让 Codex 检索知识库、文档、表格或笔记，把已有资料转成结构化输出、计划、摘要或代码上下文。
- 典型用法：在提示词中明确服务名和目标，例如"用 SharePoint 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/sharepoint/.codex-plugin/plugin.json

### signnow

- 显示名：SignNow
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Get documents signed faster without switching between tools.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 SignNow 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/signnow/.codex-plugin/plugin.json

### similarweb

- 显示名：Similarweb
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Digital market intelligence and web traffic analytics
- 中文用途：适合产品分析、增长分析和 BI 场景，帮助 Codex 查询指标、解释趋势、生成数据报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Similarweb 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/similarweb/.codex-plugin/plugin.json

### skywatch

- 显示名：SkyWatch
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Search and explore satellite imagery from top providers including Vantor, Planet, Airbus, and more, all in...
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 SkyWatch 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/skywatch/.codex-plugin/plugin.json

### slack

- 显示名：Slack
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Work with Slack using the configured Slack integration.
- 中文用途：适合处理沟通和日程上下文，例如总结邮件/消息、安排会议、提炼行动项、准备跟进内容。
- 典型用法：在提示词中明确服务名和目标，例如"用 Slack 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/slack/.codex-plugin/plugin.json

### streak

- 显示名：Streak
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Streak is a CRM built directly into Gmail, so you can track deals, contacts, and workflows from your inbox.
- 中文用途：适合 CRM、销售、客户情报和增长场景，用于查找客户或公司信息、整理线索、生成跟进策略。
- 典型用法：在提示词中明确服务名和目标，例如"用 Streak 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/streak/.codex-plugin/plugin.json

### stripe

- 显示名：Stripe
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Payments and business tools
- 中文用途：适合支付、账单、费用和财务运营场景，让 Codex 能围绕交易、发票、客户或费用数据工作。
- 典型用法：在提示词中明确服务名和目标，例如"用 Stripe 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/stripe/.codex-plugin/plugin.json

### teams

- 显示名：Teams
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Work with Teams using the configured Microsoft Teams app connector.
- 中文用途：适合处理沟通和日程上下文，例如总结邮件/消息、安排会议、提炼行动项、准备跟进内容。
- 典型用法：在提示词中明确服务名和目标，例如"用 Teams 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/teams/.codex-plugin/plugin.json

### teamwork-com

- 显示名：Teamwork.com
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Connect to sync Teamwork projects and tasks for use in Codex.
- 中文用途：适合把项目管理系统中的任务、缺陷、路线图和状态报告带入 Codex，让它辅助拆任务、总结进展、生成行动项。
- 典型用法：在提示词中明确服务名和目标，例如"用 Teamwork.com 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/teamwork-com/.codex-plugin/plugin.json

### thoughtspot

- 显示名：ThoughtSpot
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Business intelligence answers, dashboards, metrics, and revenue analysis
- 中文用途：适合产品分析、增长分析和 BI 场景，帮助 Codex 查询指标、解释趋势、生成数据报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 ThoughtSpot 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/thoughtspot/.codex-plugin/plugin.json

### united-rentals

- 显示名：United Rentals
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Get the right equipment for the job without guesswork.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 United Rentals 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/united-rentals/.codex-plugin/plugin.json

### waldo

- 显示名：Waldo
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Waldo is an AI-powered strategy platform for agencies and brands.
- 中文用途：适合日常办公、业务协作或运营流程，把外部系统中的任务、文档、客户、会议或工作流接入 Codex。
- 典型用法：在提示词中明确服务名和目标，例如"用 Waldo 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/waldo/.codex-plugin/plugin.json

### windsor-ai

- 显示名：Windsor.ai
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Windsor.ai connects your marketing and business data sources to Codex so you can ask questions in natural...
- 中文用途：适合产品分析、增长分析和 BI 场景，帮助 Codex 查询指标、解释趋势、生成数据报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Windsor.ai 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/windsor-ai/.codex-plugin/plugin.json

### zoom

- 显示名：Zoom
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Connect Codex to Zoom meeting context and build Zoom apps, bots, API integrations, SDK workflows, webhooks, and automations.
- 中文用途：适合处理沟通和日程上下文，例如总结邮件/消息、安排会议、提炼行动项、准备跟进内容。
- 典型用法：在提示词中明确服务名和目标，例如"用 Zoom 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/zoom/.codex-plugin/plugin.json

### zoominfo

- 显示名：ZoomInfo
- 官方分类：Productivity
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：B2B company intelligence, contacts, and go-to-market signals
- 中文用途：适合处理沟通和日程上下文，例如总结邮件/消息、安排会议、提炼行动项、准备跟进内容。
- 典型用法：在提示词中明确服务名和目标，例如"用 ZoomInfo 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/zoominfo/.codex-plugin/plugin.json

## 研究与数据情报（Research）

### aiera

- 显示名：Aiera
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Earnings calls, transcripts, financial events, and market commentary
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Aiera 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/aiera/.codex-plugin/plugin.json

### alpaca

- 显示名：Alpaca
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Stop watching the markets.
- 中文用途：适合资料检索、行业研究、金融研究或学术分析，帮助 Codex 获取更专业的数据源和引用材料。
- 典型用法：在提示词中明确服务名和目标，例如"用 Alpaca 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/alpaca/.codex-plugin/plugin.json

### binance

- 显示名：Binance
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Binance for Codex lets you access and explore Binance public, read-only market data using natural language.
- 中文用途：适合资料检索、行业研究、金融研究或学术分析，帮助 Codex 获取更专业的数据源和引用材料。
- 典型用法：在提示词中明确服务名和目标，例如"用 Binance 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/binance/.codex-plugin/plugin.json

### cb-insights

- 显示名：CB Insights
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Unleash Codex as your private markets research agent.
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 CB Insights 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/cb-insights/.codex-plugin/plugin.json

### cube

- 显示名：cube
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：未能读取 plugin.json；可能该插件清单存在但 manifest 路径、分支或可见性不同。
- 中文用途：适合产品分析、增长分析和 BI 场景，帮助 Codex 查询指标、解释趋势、生成数据报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 cube 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/cube/.codex-plugin/plugin.json

### daloopa

- 显示名：Daloopa
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Daloopa supplies high quality fundamental data sourced from SEC Filings, investor presentations and any pub...
- 中文用途：适合资料检索、行业研究、金融研究或学术分析，帮助 Codex 获取更专业的数据源和引用材料。
- 典型用法：在提示词中明确服务名和目标，例如"用 Daloopa 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/daloopa/.codex-plugin/plugin.json

### dow-jones-factiva

- 显示名：dow-jones-factiva
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：未能读取 plugin.json；可能该插件清单存在但 manifest 路径、分支或可见性不同。
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 dow-jones-factiva 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/dow-jones-factiva/.codex-plugin/plugin.json

### factset

- 显示名：FactSet
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Financial data, estimates, market analytics, and research context
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 FactSet 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/factset/.codex-plugin/plugin.json

### govtribe

- 显示名：GovTribe
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Search government contracts, awards, and vendors directly from Codex.
- 中文用途：适合资料检索、行业研究、金融研究或学术分析，帮助 Codex 获取更专业的数据源和引用材料。
- 典型用法：在提示词中明确服务名和目标，例如"用 GovTribe 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/govtribe/.codex-plugin/plugin.json

### life-science-research

- 显示名：Life Science Research
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：General life-sciences research workflows with query routing, evidence synthesis, and optional parallel subagent analysis across genetics, omics, biology, chemistry, structure, clinical evidence, and public dataset discovery.
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Life Science Research 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/life-science-research/.codex-plugin/plugin.json

### lseg

- 显示名：LSEG
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Financial market data, company intelligence, and news
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 LSEG 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/lseg/.codex-plugin/plugin.json

### midpage

- 显示名：Midpage
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Legal research, cases, statutes, regulations, and cited research memos
- 中文用途：适合资料检索、行业研究、金融研究或学术分析，帮助 Codex 获取更专业的数据源和引用材料。
- 典型用法：在提示词中明确服务名和目标，例如"用 Midpage 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/midpage/.codex-plugin/plugin.json

### moody-s

- 显示名：Moody's
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Credit and risk intelligence
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Moody's 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/moody-s/.codex-plugin/plugin.json

### morningstar

- 显示名：Morningstar
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Investment and fund research
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Morningstar 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/morningstar/.codex-plugin/plugin.json

### mt-newswires

- 显示名：MT Newswires
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：MT Newswires brings real-time global financial news directly into Codex — providing original, unbiased an...
- 中文用途：适合资料检索、行业研究、金融研究或学术分析，帮助 Codex 获取更专业的数据源和引用材料。
- 典型用法：在提示词中明确服务名和目标，例如"用 MT Newswires 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/mt-newswires/.codex-plugin/plugin.json

### particl-market-research

- 显示名：Particl Market Research
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Particl Market Research helps teams answer ecommerce research questions directly in Codex.
- 中文用途：适合资料检索、行业研究、金融研究或学术分析，帮助 Codex 获取更专业的数据源和引用材料。
- 典型用法：在提示词中明确服务名和目标，例如"用 Particl Market Research 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/particl-market-research/.codex-plugin/plugin.json

### pitchbook

- 显示名：PitchBook
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：PitchBook provides structured access to private capital market data across companies, investors, funds, de...
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 PitchBook 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/pitchbook/.codex-plugin/plugin.json

### policynote

- 显示名：PolicyNote
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Use the PolicyNote app to access structured policy and regulatory intelligence from around the world.
- 中文用途：适合资料检索、行业研究、金融研究或学术分析，帮助 Codex 获取更专业的数据源和引用材料。
- 典型用法：在提示词中明确服务名和目标，例如"用 PolicyNote 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/policynote/.codex-plugin/plugin.json

### quartr

- 显示名：Quartr
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Access structured first-party IR data from over 14,500+ public companies across 65 markets Quartr delivers...
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Quartr 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/quartr/.codex-plugin/plugin.json

### readwise

- 显示名：Readwise
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：The official app for Readwise and Reader.
- 中文用途：适合让 Codex 检索知识库、文档、表格或笔记，把已有资料转成结构化输出、计划、摘要或代码上下文。
- 典型用法：在提示词中明确服务名和目标，例如"用 Readwise 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/readwise/.codex-plugin/plugin.json

### s-p

- 显示名：S&P
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Company financials, ratings context, market research, and industry data
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 S&P 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/s-p/.codex-plugin/plugin.json

### scite

- 显示名：Scite
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Scite delivers answers grounded in peer-reviewed research you can verify.
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Scite 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/scite/.codex-plugin/plugin.json

### taxdown

- 显示名：Taxdown
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：TaxDown te ayuda a resolver dudas fiscales en España, tanto para particulares como autónomos: deducciones,...
- 中文用途：适合资料检索、行业研究、金融研究或学术分析，帮助 Codex 获取更专业的数据源和引用材料。
- 典型用法：在提示词中明确服务名和目标，例如"用 Taxdown 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/taxdown/.codex-plugin/plugin.json

### third-bridge

- 显示名：Third Bridge
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Seamlessly incorporate critical context and trusted insights from industry experts as part of your financia...
- 中文用途：适合资料检索、行业研究、金融研究或学术分析，帮助 Codex 获取更专业的数据源和引用材料。
- 典型用法：在提示词中明确服务名和目标，例如"用 Third Bridge 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/third-bridge/.codex-plugin/plugin.json

### tinman-ai

- 显示名：Tinman AI
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Tinman AI helps loan officers and underwriters quickly underwrite home financing scenarios and answer compl...
- 中文用途：适合资料检索、行业研究、金融研究或学术分析，帮助 Codex 获取更专业的数据源和引用材料。
- 典型用法：在提示词中明确服务名和目标，例如"用 Tinman AI 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/tinman-ai/.codex-plugin/plugin.json

### zotero

- 显示名：Zotero
- 官方分类：Research
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：Work with Zotero from Codex: search your library, export BibTeX, insert citations, and import references through the Zotero desktop app.
- 中文用途：适合研究、金融、学术或行业分析，把外部资料源接入 Codex，用于检索、引用、分析和生成研究报告。
- 典型用法：在提示词中明确服务名和目标，例如"用 Zotero 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/zotero/.codex-plugin/plugin.json

## 安全（Security）

### codex-security

- 显示名：Codex Security
- 官方分类：Security
- 认证方式：ON_INSTALL
- 适用产品：CODEX
- 官方功能描述：Codex Security workflows for security scans, analysis, and investigation.
- 中文用途：适合安全审查和安全工程任务，例如检查风险、生成修复建议、完善安全流程。
- 典型用法：在提示词中明确服务名和目标，例如"用 Codex Security 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。 该插件明确面向 Codex，通常比通用连接器更适合本地编码/自动化工作流。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/codex-security/.codex-plugin/plugin.json

## 未分类（Uncategorized）

### box

- 显示名：Box
- 官方分类：Uncategorized
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Search and reference your documents
- 中文用途：适合让 Codex 检索知识库、文档、表格或笔记，把已有资料转成结构化输出、计划、摘要或代码上下文。
- 典型用法：在提示词中明确服务名和目标，例如"用 Box 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/box/.codex-plugin/plugin.json

### google-drive

- 显示名：Google Drive
- 官方分类：Uncategorized
- 认证方式：ON_INSTALL
- 适用产品：All
- 官方功能描述：Use Google Drive as the single entrypoint for Drive, Docs, Sheets, and Slides work.
- 中文用途：适合让 Codex 检索知识库、文档、表格或笔记，把已有资料转成结构化输出、计划、摘要或代码上下文。
- 典型用法：在提示词中明确服务名和目标，例如"用 Google Drive 查找相关记录并总结风险、行动项或实现方案"。
- 安装建议：如果你会频繁使用，适合安装后一次性完成认证。 该插件包含 Skills，除了连接服务，还会改变 Codex 处理相关任务时的工作方法。
- 包含 Skills：./skills/
- Manifest：https://raw.githubusercontent.com/openai/plugins/main/plugins/google-drive/.codex-plugin/plugin.json
