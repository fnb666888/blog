---
title: "PowerShell 常用命令速查"
description: "PowerShell 常用命令速查手册，包含文件目录管理、进程服务管理、控制台操作等核心命令及别名对照表"
summary: "PowerShell 常用命令速查手册，涵盖文件管理、进程控制、服务管理等核心操作及别名"
date: 2026-08-07T17:07:02+08:00
lastmod: 2026-08-07T17:07:02+08:00
draft: false
weight: 50
categories: [基础知识]
tags: [PowerShell, Windows, 命令行, 系统管理, 别名]
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

# PowerShell 常用命令

PowerShell 提供了丰富的内置别名（Aliases），主要是为了兼容传统的 CMD 和 Linux/Unix 用户的习惯，让命令行操作更加快捷。

## 1. 文件与目录管理

- `Get-ChildItem`: 列出目录内容（别名：`ls`, `dir`, `gci`）
- `Set-Location`: 更改当前工作目录（别名：`cd`, `chdir`, `sl`）
- `Get-Location`: 显示当前工作目录（别名：`pwd`, `gl`）
- `Copy-Item`: 复制文件或文件夹（别名：`copy`, `cp`, `cpi`）
- `Move-Item`: 移动文件或文件夹（别名：`move`, `mv`, `mi`）
- `Remove-Item`: 删除文件或文件夹（别名：`del`, `erase`, `rm`, `rd`, `ri`, `rmdir`）
- `New-Item`: 创建新文件或目录（别名：`md`, `mkdir`）
- `Rename-Item`: 重命名文件或文件夹（别名：`ren`, `rni`）

## 2. 文件内容操作

- `Get-Content`: 读取文件内容（别名：`cat`, `type`, `gc`）
- `Add-Content`: 向文件末尾追加内容（别名：`ac`）
- `Set-Content`: 覆盖写入文件内容（别名：`sc`）
- `Clear-Content`: 清除文件内容但不删除文件（别名：`clc`）

## 3. 进程与服务管理

- `Get-Process`: 列出正在运行的进程（别名：`ps`, `gps`）
- `Stop-Process`: 终止进程（别名：`kill`, `spps`）
- `Get-Service`: 列出系统服务（别名：`gsv`）
- `Start-Service`: 启动服务（别名：`sasv`）
- `Stop-Service`: 停止服务（别名：`spsv`）

## 4. 控制台与输出

- `Clear-Host`: 清除控制台屏幕（别名：`cls`, `clear`）
- `Write-Output`: 向控制台输出内容（别名：`echo`, `write`）

## 5. 别名与帮助管理

- `Get-Alias`: 查看当前会话中的所有别名（别名：`gal`）
- `Set-Alias`: 创建或修改别名
- `Get-Help`: 获取命令帮助信息（别名：`man`, `help`）

## 6. 其他常用命令

- `ForEach-Object`: 对集合中的每个对象执行操作（别名：`%`, `foreach`）
- `Where-Object`: 根据条件过滤对象（别名：`?`）
- `Invoke-Expression`: 执行字符串形式的命令（别名：`iex`）
- `Invoke-WebRequest`: 发送 HTTP/HTTPS 请求（别名：`curl`, `iwr`）

## 实用技巧：如何查询别名

1. **查看所有别名**:

   ```powershell
   Get-Alias
   ```

2. **查询某个别名的真实命令**（例如查询 ls）:

   ```powershell
   Get-Alias ls
   ```

3. **查询某个命令的所有别名**（例如查询 Get-ChildItem 的所有别名）:

   ```powershell
   Get-Alias -Definition Get-ChildItem
   ```