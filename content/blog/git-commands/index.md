---
title: "Git 命令参考"
description: "Git 常用命令速查表，涵盖配置初始化、分支管理、远程仓库、提交历史、版本回退、暂存管理等核心操作"
summary: "Git 常用命令速查表，涵盖配置初始化、分支管理、远程仓库、提交历史、版本回退、标签管理和暂存管理等核心操作"
date: 2026-08-04T10:01:41+08:00
lastmod: 2026-08-04T10:01:41+08:00
draft: false
weight: 50
categories: [技术]
tags: [Git, 版本控制, 命令, 速查]
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

# Git 命令速查

## 配置用户信息

设置提交代码时的用户名和邮箱（全局配置只需设置一次）。

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

## 初始化与克隆

| 命令 | 说明 |
|------|------|
| `git init` | 初始化本地仓库 |
| `git clone <远程仓库地址>` | 克隆远程仓库 |
| `git clone -b <分支名> <远程仓库地址>` | 克隆并指定特定分支 |

## 状态与差异

| 命令 | 说明 |
|------|------|
| `git status` | 查看当前工作目录和暂存区的状态 |
| `git diff` | 查看工作区与暂存区之间具体修改了什么内容 |

## 提交

| 命令 | 说明 |
|------|------|
| `git add <文件名>` | 将修改的文件加入暂存区，准备提交 |
| `git commit -m "提交信息"` | 将暂存区内容正式提交，并附带提交信息 |
| `git commit --amend` | 修正最近一次提交的遗漏文件或错误信息 |

## 分支管理

| 命令 | 说明 |
|------|------|
| `git branch` | 列出本地所有分支 |
| `git branch <新分支名>` | 创建新分支 |
| `git checkout <分支名>` | 切换到指定分支 |
| `git checkout -b <新分支名>` | 创建并立即切换到新分支 |
| `git merge <分支名>` | 将指定分支合并到当前所在分支 |

**删除分支：**

| 命令 | 说明 |
|------|------|
| `git branch -d <分支名>` | 删除已合并的本地分支 |
| `git branch -D <分支名>` | 强制删除未合并的本地分支 |

## 远程仓库

| 命令 | 说明 |
|------|------|
| `git remote add origin <远程仓库地址>` | 关联远程仓库 |
| `git remote -v` | 查看远程仓库的详细信息 |

**拉取远程更新：**

| 命令 | 说明 |
|------|------|
| `git fetch origin` | 仅下载远程更新，不自动合并，较为安全 |
| `git pull origin <分支名>` | 下载并自动合并远程更新（相当于 fetch + merge） |

**推送本地代码：**

| 命令 | 说明 |
|------|------|
| `git push -u origin <分支名>` | 首次推送并建立追踪关系 |
| `git push` | 后续推送（已建立追踪关系时直接使用） |

## 查看提交历史

| 命令 | 说明 |
|------|------|
| `git log` | 查看详细历史 |
| `git log --oneline` | 简洁的单行显示 |
| `git reflog` | 查看所有 HEAD 变动记录，找回丢失提交的"救命稻草" |

## 版本回退

| 命令 | 说明 |
|------|------|
| `git reset --soft HEAD~1` | 回退 commit，但保留修改在暂存区 |
| `git reset --mixed HEAD~1` | 默认模式，回退 commit，保留修改在工作区 |
| `git reset --hard HEAD~1` | 彻底回退，丢弃所有未提交的修改，慎用 |
| `git revert <commit-id>` | 生成一个新的反向提交来撤销，适合已推送到远程仓库的情况 |

## 暂存（Stash）

| 命令 | 说明 |
|------|------|
| `git stash` | 暂存当前未完成的修改 |
| `git stash list` | 查看暂存列表 |
| `git stash pop` | 恢复最近一次暂存的修改，并删除该暂存记录 |
| `git stash apply` | 恢复暂存但保留记录 |
| `git stash clear` | 清空所有暂存记录 |

## 标签

| 命令 | 说明 |
|------|------|
| `git tag v1.0.0` | 创建轻量级标签 |
| `git tag -a v1.0.0 -m "版本说明"` | 创建带注释的标签 |
| `git push origin v1.0.0` | 推送指定标签到远程 |
| `git push origin --tags` | 推送所有本地标签到远程 |
| `git tag -d v1.0.0` | 删除本地标签 |
