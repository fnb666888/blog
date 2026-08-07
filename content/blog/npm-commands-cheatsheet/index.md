---
title: "npm 常用命令速查"
description: "npm 包管理器常用命令速查手册，包含项目初始化、依赖安装卸载、脚本执行、查询诊断和发布相关的所有核心命令"
summary: "npm 包管理器常用命令速查手册，涵盖项目初始化、依赖管理、脚本执行等核心操作"
date: 2026-08-07T17:07:02+08:00
lastmod: 2026-08-07T17:07:02+08:00
draft: false
weight: 50
categories: [基础知识]
tags: [npm, Node.js, 包管理器, JavaScript, 命令行]
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

# npm 常用命令

## 一、项目初始化与配置

- `npm init`: 交互式创建 package.json，需逐项填写项目信息
- `npm init -y`: 跳过交互，直接用默认值生成 package.json（最常用）
- `npm config list`: 查看当前 npm 配置
- `npm config set registry <url>`: 切换镜像源（如淘宝镜像加速下载）
- `npm get registry`: 查看当前使用的镜像源地址

## 二、依赖安装（最高频）

- `npm install` / `npm i`: 安装 package.json 中声明的所有依赖
- `npm install <包名>`: 安装指定包并写入 dependencies（生产依赖）
- `npm install <包名> --save-dev` / `-D`: 安装为开发依赖（如 webpack、eslint），写入 devDependencies
- `npm install <包名> -g`: 全局安装（用于 CLI 工具，如 nodemon、pm2）
- `npm install <包名>@<版本号>`: 安装指定版本，如 npm install vue@3.4.0
- `npm ci`: 严格按 package-lock.json 安装，速度更快、结果更可复现（CI/CD 环境推荐）

## 三、依赖卸载与更新

- `npm uninstall <包名>` / `npm remove <包名>`: 卸载包并自动从 package.json 移除
- `npm uninstall <包名> -g`: 卸载全局包
- `npm update`: 更新所有依赖到 package.json 允许的最新版本
- `npm update <包名>`: 只更新指定包
- `npm outdated`: 列出当前项目中已过时的包及可升级版本

## 四、脚本执行

- `npm run <脚本名>`: 执行 package.json 中 scripts 字段定义的命令，如 npm run dev、npm run build
- `npm start`: 等价于 npm run start，启动项目的快捷命令
- `npm test`: 等价于 npm run test，运行测试的快捷命令
- `npm run`（不带参数）: 列出当前项目所有可用脚本

## 五、查询与诊断

- `npm list` / `npm ls`: 查看当前项目已安装的依赖树
- `npm list -g --depth=0`: 查看全局安装的包（不展开子依赖）
- `npm info <包名>`: 查看某个包的详细信息（版本、描述、仓库等）
- `npm search <关键词>`: 在 npm 仓库中搜索包
- `npm audit`: 扫描项目依赖的安全漏洞
- `npm audit fix`: 自动修复可修复的安全漏洞
- `npm cache clean --force`: 强制清除本地缓存（解决奇怪的安装问题时用）

## 六、发布相关

- `npm login`: 登录 npm 账号
- `npm publish`: 将当前包发布到 npm 公共仓库
- `npm unpublish <包名>@<版本>`: 撤销已发布的版本（有时间窗口限制）
- `npm version patch/minor/major`: 按语义化版本规则自动递增版本号并打 git tag

## 实用技巧

- **简写记忆**: i = install，un = uninstall，up = update，-D = --save-dev，-g = --global
- **传参给底层脚本**: npm run dev -- --port 3000，双横线 -- 后的内容会透传给实际执行的命令
- **国内加速**: 建议配置淘宝镜像 `npm config set registry https://registry.npmmirror.com`，或使用 cnpm / pnpm 替代
- **锁文件重要性**: 团队协作务必提交 package-lock.json，保证所有人安装的依赖版本一致