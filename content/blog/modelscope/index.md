---
title: "ModelScope 说明文档"
description: "ModelScope 说明文档"
summary: "ModelScope 说明文档"
date: 2026-08-13
lastmod: 2026-08-13
draft: false
weight: 50
categories: ["说明文档"]
tags: ["云服务", "硬件"]
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

该文档是 ModelScope 平台的**环境安装与配置指南**，旨在帮助开发者快速搭建模型训练、推理及数据集管理所需的运行环境。以下是详细总结：

### 1. 基础支持与环境要求
*   **功能支持**：ModelScope Library 支持模型/数据集的获取与管理，以及基于 PyTorch、TensorFlow 等框架的训练与推理。
*   **版本兼容**：推荐 Python 3.8+、PyTorch 1.11+、TensorFlow 2.x。
*   **特殊说明**：大部分语音模型需在 Linux 环境下运行（推荐 python3.8 + tf2.13.0 + torch2.0.1）；少部分旧模型依赖 TensorFlow 1.15.0。

### 2. 官方 Docker 镜像（推荐）
为免去繁琐的环境配置，官方提供了多种预置镜像，涵盖 CPU/GPU/AMD GPU 及大模型训练场景：
*   **最新镜像 (v1.39.0)**：基于 Ubuntu 22.04 + Python 3.12 + Torch 2.10.0。
    *   **GPU 版**：CUDA 12.8.1，适用于大模型、Diffusers、Megatron、FunASR 等。
    *   **小模型兼容**：若需运行 BERT/YOLO 等小模型，请使用 Torch 2.3.1 + CUDA 12.1.0 的低版本镜像。
    *   **AMD GPU**：提供 ROCm 7.2.3 专用镜像。
    *   **SWIFT 训练镜像**：集成 ms-swift、vLLM 及 Megatron-SWIFT 依赖，专为大模型训练设计。
*   **历史镜像**：提供了从 Python 3.7 到 3.11、Torch 1.11 到 2.9.1 等多个历史版本，以兼容旧模型。

### 3. 本地 Python 环境安装
若不使用 Docker，可通过以下步骤手动配置：
*   **环境创建**：推荐使用 Anaconda (`conda create -n modelscope python=3.12`)。
*   **Library 安装**：
    *   仅下载模型/命令行工具：`pip install modelscope`
    *   完整框架能力（数据集加载等）：`pip install modelscope[framework]`
*   **深度学习框架**：根据需求安装 PyTorch 或 TensorFlow。国内用户建议配置清华源或阿里云镜像加速。
*   **分领域依赖安装**：针对不同模态提供独立安装选项（需配合 `-f` 参数指定依赖源）：
    *   NLP / CV / Audio / Multi-modal / Science
*   **特殊依赖注意**：
    *   **语音**：Linux 下需手动安装 `libsndfile1`。
    *   **CV**：部分模型依赖 `mmcv-full` (1.x 版本)，切勿安装 2.0+。

### 4. 安装验证
安装完成后可通过一行代码验证环境是否正常，例如运行中文分词任务：
```python
python -c "from modelscope.pipelines import pipeline;print(pipeline('word-segmentation')('今天天气不错，适合 出去游玩'))"
```

### 5. SWIFT 框架安装
针对大模型（LLM & SD）训练推理，推荐使用官方框架 SWIFT：
*   **Wheel 包**：`pip install ms-swift -U`
*   **源码安装**：克隆仓库后执行 `pip install -e .`

### 6. Notebook 在线环境
ModelScope 官网提供免费 GPU 算力（A10 显卡），用户登录后可在“我的Notebook”中直接开启实例，无需本地部署即可体验平台模型。


---

该文档是魔搭 ModelScope 社区的“快速开始”指南，旨在帮助新用户快速熟悉模型下载、推理、微调及部署的全流程。以下是详细总结：

### 1. 环境安装
*   **在线体验**：推荐使用社区预装的 Notebook 环境，提供一定额度的免费 GPU 和不限时长的免费 CPU 算力，且已预置大部分依赖。
*   **本地开发**：推荐通过 `pip install modelscope` 安装 SDK，并建议同时安装 Git 和 Git LFS 以支持模型管理。

### 2. 模型下载
提供了三种主要下载方式，均支持断点续传和高速下载：
*   **命令行工具**：适合高带宽机器，使用 `modelscope download` 命令指定模型和本地目录。
*   **Python SDK**：使用 `snapshot_download` 函数在代码中下载。
*   **Git Clone**：在安装 Git LFS 后直接克隆仓库。

### 3. 模型加载与推理
*   **加载方式**：
    *   **AutoModel**：兼容 Transformers/Diffusers，支持 `AutoModelForCausalLM` 等接口加载大语言模型。
    *   **Pipeline**：ModelScope 原生推理接口，开箱即用，适合多种模态任务（如语音识别、分词等）。
*   **推理示例**：文档提供了大语言模型（Qwen2.5）的对话生成代码、语音识别 Pipeline 调用代码，以及未原生集成模型（如 SDXL-Turbo）结合 Diffusers 库进行文生图的完整示例。

### 4. 模型微调
*   **核心工具**：使用 `ms-swift` 框架，支持 500+ 大模型和 200+ 多模态模型的训练、评测、量化与部署。
*   **技术支持**：涵盖 LoRA、QLoRA、DoRA 等轻量化训练技术，以及 DPO、GRPO、PPO 等人类对齐方法；支持 vLLM/LMDeploy 加速及多种量化技术。
*   **操作方式**：提供了基于 Qwen2.5-7B-Instruct 的 LoRA 微调脚本及训练后的推理命令，并配备 Gradio Web-UI。

### 5. 模型部署
*   **云端一键部署**：使用 SwingDeploy 将模型部署至云资源，部分大模型支持直接提供 OpenAI API 兼容接口。
*   **本地/自有 GPU 部署**：推荐使用 vLLM，需设置环境变量 `VLLM_USE_MODELSCOPE=True`。v0.6+ 版本支持内置工具调用功能。

---
该文档主要介绍了 ModelScope Notebook 的产品概述、功能特性及使用指南，关键信息归纳如下：

### 1. 产品简介
ModelScope Notebook 是一款基于 Jupyter Notebook 的云端机器学习开发 IDE，适用于不同水平的 AI 开发者。它通过与阿里云 PAI-DSW 合作，提供开箱即用的限时免费算力，实现了模型开发环境与 CPU/GPU 计算资源的无缝连接，并支持 Web-IDE (VS-Code) 在线开发。

### 2. 核心特性与存储
*   **环境预置**：已预装魔搭模型开发包及算法库，支持自定义安装第三方库。
*   **计算资源**：支持 GPU，CPU 规格为 8核32G，默认拥有 Root 权限。
*   **持久化存储**：提供免费 100G 存储空间，挂载于 `/mnt/workspace/` 目录。**注意**：仅该目录下的数据在实例关闭后会保留，其他路径数据会被清除；平台不提供 SLA 保障，请勿存储敏感或重要数据，需自行备份。账号超过 365 天无活动可能会清除数据。
*   **网络限制**：外网访问受限（包括 HuggingFace 等）。

### 3. 开发流程范例
文档提供了基于 ModelScope 生态的完整开发示例：
*   **推理**：使用 `pipeline` 函数快速加载模型进行任务处理（如中文分词），支持单条或批量输入。
*   **数据加载**：通过 `MsDataset` 接口标准加载数据集。
*   **预处理与训练**：框架自动读取 modelcard 配置完成预处理实例化；通过 `build_trainer` 构建训练器并调用 `train()` 接口进行训练。
*   **评估**：训练完成后调用 `evaluate()` 函数即可完成模型评估。

### 4. 免费资源与获取方式
*   **资源规格**：新用户可获得 CPU 环境（8核32G，长期使用）和 GPU 环境（8核32G内存+24G显存，免费限额36小时）。
*   **获取步骤**：需登录 ModelScope 账号并授权绑定阿里云账号（需勾选全部选项）方可获得初始额度。

### 5. 使用限制与注意事项
*   **合规性**：用户对算力使用的合法合规性负责。
*   **时长限制**：单次运行最长不超过 10 小时；空闲超过 1 小时会自动关闭以节省额度。
*   **额度用尽处理**：
    1.  切换至免费的 CPU 环境继续开发。
    2.  导出文件至本地 IDE 开发。
    3.  前往阿里云控制台购买 Notebook 商业版（PAI-DSW）付费使用。

