---
title: "Oracle 说明文档"
description: "Oracle 说明文档"
summary: "Oracle 说明文档"
date: 2026-08-03
lastmod: 2026-08-03
draft: false
weight: 50
categories: ["云服务"]
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
## 一、总体说明
- 所有 OCI 账户都拥有一组永久免费资源，仅限**租户主区域**使用，控制台中标有 "Always Free-eligible" 标签。
- 可用于创建虚拟机、Autonomous AI 数据库及配套的网络/负载均衡/存储资源，适合运行小型应用或做概念验证（PoC）。

## 二、基础设施（Infrastructure）

**1. 计算（Compute）**
- **AMD Micro 实例**：最多 2 台 VM.Standard.E2.1.Micro（1/8 OCPU 、1 GB 内存、1 个公网 IP、互联网带宽最高 50 Mbps，私有/同区域流量最高 480 Mbps）。
- **Ampere A1（Arm）实例**：每月免费 1500 OCPU 小时 + 9000 GB 小时，相当于 **2 OCPU + 12 GB 内存**，可灵活分配（如 1 台 2 OCPU 或 2 台各 1 OCPU）。
- 可选镜像：Oracle Linux Cloud Developer、Oracle Linux、Ubuntu、CentOS（Arm 版 Developer 镜像需 ≥8 GB 内存）。
- 多可用区区域中，A1 可在任意可用区创建（韩国春川除外），Micro 只能在一个可用区。
- **"out of host capacity" 错误**表示免费容量临时不足，可换可用区、稍后重试，或升级为付费账户（升级后免费额度仍不收费）。
- **闲置回收政策**：若 7 天内 CPU 95 百分位 <20%、网络 <20%、内存 <20%（仅 A1），实例可能被 Oracle 回收。

**2. 块存储（Block Volume）**
- 共 **200 GB**（启动卷+块卷合计）+ **5 个备份**，必须在主区域创建。
- 实例默认启动卷 50 GB（计算部分另提到最低 47 GB），因此 4 台默认实例即占满额度；也可 1 台实例 + 挂载 150 GB 块卷。
- 删除免费卷后，系统可自动把付费卷转为免费卷。

**3. 对象/归档存储（Object & Archive Storage）**
- 共 **20 GB** + 每月 5 万次 API 请求。
- 纯免费账户：20 GB 在标准/低频/归档三层间共享；付费或试用账户：每层各 10 GB。
- **重要警告**：试用结束时若用量超过 20 GB，所有对象将被删除。

**4. 其他基础设施**
- **证书服务**：5 个 CA + 150 个证书。
- **Vault 密钥管理**：软件保护的主密钥全部免费；HSM 保护密钥版本 20 个；150 个 secret（每个 secret 40 个版本）。
- **Resource Manager（Terraform 自动化）**：100 个配置源、2 个并发作业（最长 24 小时）、1 个私有端点、100 个可达 IP、100 个私有模板、100 个 stack。

## 三、数据库（Database）
- **Autonomous AI Database ×2**：1 OCPU、20 GB 存储（均不可扩展）、20 个并发会话、Serverless；可选事务处理、JSON、APEX、Lakehouse 等工作负载类型；可事后升级为付费实例；需确认主区域是否支持（版本因区域为 19c 或 21c）。
- **NoSQL 数据库**：每月 1.33 亿次读 + 1.33 亿次写，3 个表、每表 25 GB。
- **MySQL HeatWave**：单节点独立 DB 系统，50 GB 存储 + 额外 50 GB 备份存储。

## 四、网络（Networking）
- **VCN**：免费租户最多 2 个，支持 IPv4/IPv6；默认禁止通过 25 端口对外发邮件，需申请豁免。
- **负载均衡器 ×1**：2020-12-15 后创建的租户为 Flexible 型（10 Mbps，16 监听器/虚拟主机名/后端集，1024 后端服务器）；更早租户为 Micro 型（10/10/10/128）。
- **网络负载均衡器 ×1**：50 监听器、50 后端集、共 1024 后端服务器。
- **VCN 流日志**：与 Logging 服务共享每月最多 10 GB。
- **Site-to-Site VPN**：最多 50 个 IPSec 连接。
- **集群放置组**：每区域 10–50 个。

## 五、可观测性与管理（Observability and Management）
- **APM**：每小时 1000 个追踪事件 + 10 次合成监控运行。
- **Connector Hub**：2 个连接器。
- **控制台仪表板**：100 个。
- **邮件发送服务**：每月 3000 封。
- **Fleet 应用管理**：每月前 25 个资源的生命周期管理免费。
- **监控**：5 亿个数据点写入 + 10 亿个数据点读取。
- **通知服务**：每月 100 万条 HTTPS 通知 + 1000 封邮件通知。

## 六、附加服务
- **出站数据传输**：每月 **10 TB**。
- **Logging 日志服务**、**Bastion（无公网端点资源的限时 SSH 访问）**：免费。

## 七、查看额度
可在控制台通过 **Governance & Administration → Tenancy Management → Limits, Quotas and Usage** 查询自己租户的免费资源限额与用量。

---

**核心要点**：OCI 的永久免费套餐最具价值的是 2 台 AMD 微实例 + 最高 2 OCPU/12GB 的 Arm A1 实例、200 GB 块存储、2 个 Autonomous 数据库，以及每月 10 TB 出站流量；但需注意资源必须建在主区域、闲置实例可能被回收、试用到期超量对象存储会被清空等限制。



## 文档详细总结

该文档是 Oracle Cloud Infrastructure（OCI）官方文档中的 **"Quickly Launch Your Always Free Resources Using Resource Manager"（使用资源管理器快速启动永久免费资源）** 页面（更新于 2025-08-05），是上一份 "Always Free Resources" 文档的配套操作指南，教你如何用模板**一键自动创建**一整套免费资源。

## 一、核心概念与背景

- **Resource Manager（资源管理器）模板**：是预先构建好的 **Terraform 配置**，能用单一、简单的工作流，轻松创建常见场景所需的一整套资源。
- 使用官方提供的模板部署 Always Free 资源后，资源会自带开始云上应用开发所需的设置和配置。
- **无需任何 Terraform 经验**即可使用该模板。
- 术语提示：Terraform 把被部署的这套资源称为 **"stack"（堆栈）**。

## 二、操作步骤（用 Terraform + Resource Manager 部署免费资源）

1. 登录 Oracle Cloud Infrastructure 账户。
2. 在 **Stacks 列表页**选择 **Create stack**（创建堆栈）。
3. 在 "Choose the origin of the Terraform configuration"（选择 Terraform 配置来源）下，选择 **Template（模板）**。
4. 在 Stack configuration 下选择 **Select template**。
5. 在 Browse templates 面板中切换到 **Architecture** 标签，选择 **"Sample e-commerce application (MuShop Basic)"**（示例电商应用模板），然后点击 Select template。页面会自动填入模板中的配置信息。
6. （可选）如需使用**自定义 provider**，勾选 Use custom providers 并选择存放自定义 provider 的存储桶。
7. （可选）修改默认堆栈名称、填写描述——**注意不要输入机密信息**。
8. 选择要在其中创建堆栈的 **compartment（隔间）**。
9. （可选）在 Tags 下添加标签：有创建资源权限即可打自由格式标签；使用定义标签则需相应标签命名空间权限；不确定可跳过，日后再补。
10. 点击 **Next**。
11. 在 **Configure variables** 面板中检查 Terraform 配置列出的变量，按需修改。
    - ⚠️ **重要警告：切勿把私钥或其他机密信息填入配置变量。**
12. 再次点击 **Next**。
13. 在 **Review** 面板中确认堆栈配置无误。
14. 点击 **Create**。

## 三、结果

- 整套 Always Free 资源的部署**只需几分钟**。
- 创建完成后堆栈即生成，并自动打开其详情页，之后便可在此基础上开始搭建应用。

## 四、要点归纳

| 项目 | 内容 |
|---|---|
| 目的 | 几分钟内自动创建一整套 Always Free 资源 |
| 所用工具 | Resource Manager + 预置 Terraform 模板 |
| 选用模板 | Sample e-commerce application (MuShop Basic) |
| 技能要求 | 无需 Terraform 经验 |
| 安全注意事项 | 堆栈描述和配置变量中**不得包含私钥等机密信息** |
| 可选配置 | 自定义 provider、堆栈名称/描述、隔间、标签 |

**与上一份文档的关系**：上一份文档（result.md）列出了 Always Free 的具体资源配额（如 AMD/Ampere 实例、200 GB 块存储、Autonomous 数据库等）；本文档则给出"快速落地"方法——通过 MuShop Basic 示例模板，把这些免费资源一次性自动部署好，直接用于运行一个小型电商示例应用。


## 文档详细总结

该文档是 Oracle Cloud Infrastructure（OCI）官方文档中的 **"Accessing Oracle Cloud Infrastructure"（访问 Oracle Cloud Infrastructure）** 页面（更新于 2024-07-08），属于入门/概述性质的页面，主题是：**在 OCI 上创建和管理资源的几种方式**。

## 一、核心内容：7 种创建与管理资源的方式

**1. Oracle Cloud Console（控制台）**
- 直观的图形化界面；
- 可用于创建和管理实例（instances）、云网络、存储卷，以及用户和权限；
- 参考链接：Get to Know the Console。

**2. APIs（应用程序接口）**
- OCI API 是典型的 **REST API**，使用 HTTPS 请求和响应；
- 参考链接：API Requests。

**3. SDKs（软件开发工具包）**
- 提供多种 SDK，便于与 OCI API 集成；
- 包括 **Java、Ruby、Python** 等语言的 SDK；
- 参考链接：Developer Tools and Resources。

**4. Command Line Interface（CLI，命令行界面）**
- 部分服务支持通过命令行界面操作；
- 参考链接：Developer Tools and Resources。

**5. Terraform**
- 属于"**基础设施即代码**"（Infrastructure-as-Code, IaC）软件；
- 允许把基础设施资源定义在文件中，这些文件可以**持久保存、版本化管理和共享**；
- 参考链接：Terraform Getting Started。

**6. Ansible**
- 用于自动化操作，包括：
  - 云基础设施的配置与供给（provisioning）；
  - 软件资产的部署与更新；
  - 复杂运维流程的编排（orchestration）；
- 参考链接：Ansible Getting Started。

**7. Resource Manager（资源管理器）**
- OCI 自带的一项服务，用于**自动化供给 OCI 资源**；
- 底层基于 Terraform，通过 IaC 模型帮助安装、配置和管理资源；
- 参考链接：Resource Manager 文档。

## 二、要点归纳

| 类别 | 方式 | 适用场景 |
|---|---|---|
| 图形化 | Console | 日常手动管理实例、网络、存储、用户权限 |
| 程序化 | REST APIs、SDKs（Java/Ruby/Python）、CLI | 开发集成、脚本化运维 |
| 自动化/IaC | Terraform、Ansible、Resource Manager | 基础设施即代码、自动化部署与编排 |

**总体来看**，这一页是 OCI 管理工具链的"入口索引"：从图形界面到 API/SDK/CLI，再到 IaC 与自动化工具（Terraform、Ansible、Resource Manager），覆盖了从手动操作到 fully-automated 的不同使用需求；同时表明 Oracle 对新功能采取"API/控制台先行、Terraform 30 天内跟进"的发布节奏。

# 文档详细总结

该文档是 Oracle Cloud Infrastructure（OCI）官方文档中的 **"New Console Experience"（新版控制台体验）** 页面（更新于 2025-06-25），介绍了 Oracle Cloud Console 为提升**易用性**和**跨服务一致性**而推出的全新界面设计，涵盖四大使用场景的更新。

## 一、总体说明

- OCI 在 Oracle Cloud 控制台中引入了新设计，以增强各服务和各使用体验之间的可用性与一致性。
- 本次更新覆盖以下四个方面的体验：
  1. 服务内导航（Navigating Within a Service）
  2. 资源列表（Listing Resources）
  3. 查看资源详情（Viewing Resource Details）
  4. 创建资源（Creating a Resource）

## 二、服务内导航（Navigating Within a Service）

- 新版控制台在**所有页面左侧**提供一个**持久化导航窗格（persistent navigation pane）**，用于访问相关资源。
- 导航窗格可以**折叠或展开**，方便操作服务资源。
- 在导航窗格中来回切换时，**不会丢失当前正在操作的主页面**。

## 三、资源列表（Listing Resources）

进入某个服务后，可在**资源列表页**通过搜索和筛选快速定位目标资源。列表页可以查看服务中的资源及单个资源的详细信息，并支持：对全部资源进行搜索和筛选、直接在表格上排序和过滤、以及自定义要显示的表格列。具体包括四个子功能：

**1. 隔间选择（Compartment Selection）**
- Compartment（隔间）是资源列表页上的一个**过滤器**；
- 默认设置为**租户的根隔间（root compartment）**；
- 与其他过滤器不同，隔间过滤器**不能被移除**，但可以把范围切换到你需要的隔间。

**2. 搜索与筛选（Search and Filter）**
- 每个列表页都有"Search and Filter"搜索框，既可搜索特定资源，也可应用过滤器缩小显示范围。
- 常见过滤器：
  - **State（状态）**：只显示所选状态的资源，取值因资源类型而异，例如 Any state（所有生命周期状态）、Available、Provisioning、Terminating、Terminated；
  - **Availability domain（可用区）**：将列表限定在所选可用区内的资源；
  - **Tags（标签）**：按标签筛选支持打标签的资源。
- 使用步骤：
  1. 将焦点置于搜索框，即显示可用过滤器（常见的有 Name、State、Availability domain、Resource type、Tags）；
  2. 选择或直接输入过滤器名称，输入时可用选项会**动态过滤**；
  3. 选择过滤器后显示其取值选项，勾选所需选项并点击 **Apply Filter**；
  4. 已应用的过滤器会列在搜索框下方，可随时**添加或移除**；
  5. 若只需简单搜索，直接在搜索框中输入关键词即可。

**3. 表格排序与过滤（Table Sort and Filter）**
- 可排序的列在列名旁会显示一个排序图标，点击该图标即可排序。

**4. 管理表格列（Manage Table Columns）**
- 列表表格提供"管理列"选项：
  1. 点击 **Manage Columns** 图标打开管理面板；
  2. 勾选要在表格中显示的列，需要时可**调整列的顺序**，然后点击 **Apply changes** 生效。

## 四、查看资源详情（Viewing Resource Details）

- **资源详情页**提供与某资源及其子资源相关的全部信息和元数据。
- 打开方式：在资源列表页的表格中点击该资源。
- 页面**顶部**显示资源名称及其当前状态。
- 所有信息、元数据和子资源按类别组织，以**标签页（tabs）** 形式展示，常见标签页包括：**Details、Monitoring、Policies、Work requests、Tags**，其他标签页则根据主资源及所属服务动态显示。
- 页面提供 **Actions 菜单**，列出可对该资源执行的操作任务。

## 五、创建资源（Creating a Resource）

- 创建各类 OCI 资源时，采用**单一面板**或**多步骤工作流**两种方式。
- 对于需要多步骤工作流的复杂资源，所需填写的详细信息会在**同一页面内按分区分组**展示；
- 创建过程中可以**展开或折叠**各个分区，便于聚焦当前步骤。

## 六、要点归纳

| 体验模块 | 核心改进 |
|---|---|
| 服务内导航 | 左侧持久导航窗格，可折叠/展开，切换时不丢失当前页面 |
| 资源列表 | 支持搜索、过滤、排序、自定义列；隔间为不可移除的默认过滤器 |
| 资源详情 | 信息按标签页分类（Details/Monitoring/Policies/Work requests/Tags 等），顶部显示名称与状态，配 Actions 操作菜单 |
| 创建资源 | 单面板或多步骤工作流，复杂资源同页分区、可展开/折叠 |

**总体来看**，这一页是 OCI 新版控制台（Redwood 风格设计）的使用指南，重点在于：统一、持久的左侧导航；功能强大的资源列表检索与自定义能力（隔间、状态、可用区、标签等多维过滤）；结构化的资源详情页；以及更灵活的资源创建流程。页面其余部分（如 Getting Started、Free Tier、Marketplace 等链接）均为 OCI 文档站的通用导航入口，与正文内容无直接关系。



## 文档详细总结

该文档是 Oracle Cloud Infrastructure（OCI）官方教程 **"Get Started with the Command Line Interface"（命令行界面入门）**（更新于 2026-07-10），是一份完整的**实操教程**，手把手教你使用 OCI CLI（命令行工具）完成从创建网络环境到启动 Linux/Windows 实例、连接实例、再到清理资源的全流程。

---

## 一、CLI 概述

- **CLI 是什么**：一个可以操作 OCI 中大多数可用服务的命令行工具，提供与 Console（控制台）相同的核心功能，并有额外命令。
- **功能基础**：CLI 的功能和命令帮助基于各服务的 API。
- **交互模式**：CLI 提供交互模式，支持自动命令补全、参数信息和建议。

## 二、获取命令帮助

可使用 `--help`、`-h` 或 `-?` 关键词获取行内帮助，例如：
```
oci --help
oci bv volume -h
oci os bucket create -?
```

## 三、示例格式说明

文档中的示例以"命令 + 响应"分组呈现：
- 先说明命令的用途，给出命令；
- 命令的返回结果以下拉文本框显示；
- 响应以 **JSON 格式**返回，由键/值对组成。

示例：获取租户命名空间
```
oci os ns get
```
返回：
```json
{ "data": "docs", "id": "ocid1.compartment.oc1...", "is-stateless": null }
```

## 四、开始前的准备

- 需满足 CLI 的所有前提要求。
- **最佳实践**：在**测试环境**中完成本教程的操作，确保配置不影响租户中的其他环境；教程结束时可安全删除测试资源。

## 五、在隔间（Compartment）中工作

本教程所有资源使用同一个隔间；生产环境中通常会将资源分在不同隔间。可以选择**已有隔间**（推荐）或**新建隔间**。

### 1. 查看隔间列表
```
oci iam compartment list -c <tenancy_id>
```
返回隔间的名称、OCID、生命周期状态、创建时间等信息。

### 2. 创建隔间
```
oci iam compartment create --name CLIsandbox -c <root_compartment_id> --description "For testing CLI features"
```
- 创建前建议先了解隔间设计、资源管理和约束。
- **提示**：要记录命令返回的信息（如 OCID），后续步骤会用到。例如返回的 compartment-id 即为租户（也是根隔间）的 OCID。

## 六、创建虚拟云网络（VCN）

在启动任何实例之前，必须先创建 VCN 及相关资源。

### 1. 创建 VCN
```
oci network vcn create --compartment-id <id> --display-name "cli_vcn" --dns-label sandboxvcn1 --cidr-block "10.0.0.0/16"
```
- 需指定 DNS 名称和 CIDR 块。
- 创建 VCN 时会自动生成默认的 DHCP 选项、路由表和安全列表。
- 可通过 `oci network vcn list -c <compartment_id>` 查询网络信息。

### 2. 配置安全列表入站规则（端口 3389）
```
oci network security-list create -c <compartment_id> --egress-security-rules "[...]" --ingress-security-rules "[...]" --vcn-id <vcn_id> --display-name port3389rule
```
- VCN 创建时已有默认安全列表，但 **Windows 实例需要开放 3389 端口的入站流量**。
- 推荐做法：创建**第二个安全列表**来满足 Windows 端口需求，创建子网时通过 `--security-list-ids` 把两个安全列表都关联到子网。
- 此命令以 **JSON 文本字符串**形式传入复杂输入。

### 3. 创建子网
先用 `oci iam availability-domain list -c <compartment_id>` 获取可用区列表，然后：
```
oci network subnet create --vcn-id <vcn_id> -c <compartment_id> --availability-domain "EMIr:PHX-AD-1" --display-name CLISUB --dns-label "vminstances" --cidr-block "10.0.0.0/16" --security-list-ids "[<默认安全列表ID>,<新安全列表ID>]"
```
- 需要提供默认安全列表和新安全列表的 OCID；若未记录，可用 `oci network security-list list` 查询。

### 4. 创建互联网网关
```
oci network internet-gateway create -c <compartment_id> --is-enabled true --vcn-id <vcn_id> --display-name sbgateway
```

### 5. 向路由表添加规则
- VCN 创建时自动生成路由表，先查询其 OCID：
```
oci network route-table list -c <compartment_id> --vcn-id <vcn_id>
```
- 返回结果显示路由表存在但没有任何规则（`"route rules":[]`）。
- 更新路由表添加规则：
```
oci network route-table update --rt-id <route_table_id> --route-rules "[{\"cidrBlock\":\"0.0.0.0/0\",\"networkEntityId\":\"<internet_gateway_id>\"}]"
```
- ⚠️ **警告**：对路由规则的更新会**替换所有已有规则**，需输入 "y" 确认继续。

## 七、准备启动实例

启动实例需要提供以下信息：
| 参数 | 说明 |
|---|---|
| `compartment-id` | 隔间 ID |
| `availability-domain` | 可用区 |
| `subnet-id` | 子网 ID |
| `image-id` | 镜像 ID（操作系统） |
| `shape` | 规格（CPU/内存配置） |

### 1. 获取可用镜像
```
oci compute image list -c <compartment_id>
```
- 镜像可用系统：Oracle Linux、CentOS、Ubuntu、Windows Server。
- 示例只展示了 Oracle Linux 7.3 的信息。

### 2. 获取可用规格（Shape）
```
oci compute shape list -c <compartment_id> --availability-domain "EMIr:PHX-AD-1"
```
- Shape 决定虚拟机或裸金属主机的配置。
- 本教程测试使用 `VM.Standard1.1`（1 CPU + 7 GB 内存）。
- **注意**：计算实例规格和块卷大小不在本教程范围内，示例使用最小可用规格。

## 八、启动 Linux 实例

### 1. 使用 SSH 密钥对连接实例
- 通过 CLI 启动实例时，需要**已有的密钥对**才能访问实例（该密钥对与 API 签名密钥不同）。

### 2. 启动实例
```
oci compute instance launch --availability-domain "EMIr:PHX-AD-1" -c <compartment_id> --shape "VM.Standard1.1" --display-name "Linux Instance" --image-id <image_id> --ssh-authorized-keys-file "C:\Users\testuser\.oci\linux_key.pem" --subnet-id <subnet_id>
```
- ⚠️ **注意**：`--ssh-authorized-keys-file` 参数引用的文件包含访问计算实例所需的公钥；如果启动实例时未提供此密钥，启动后将**无法连接**该实例。

### 3. 获取实例的 VNIC 信息
```
oci compute instance list-vnics --instance-id <instance_id>
```
- 连接实例需要其公网 IP 地址，该信息在实例的 VNIC 中。
- 返回包含私有 IP（10.0.0.2）和公网 IP（129.145.32.236）。

### 4. 为实例创建块卷
```
oci bv volume create --availability-domain "EMIr:PHX-AD-1" -c <compartment_id> --size-in-mbs 51200 --display-name LinuxVol
```
- ⚠️ 块卷大小以 **1024 MB 为增量**表示，示例使用最小值 51200 MB（即 50 GB）。
- 生命周期状态从 "PROVISIONING" 变为 "AVAILABLE" 后才能将卷附加到实例。
- **提示**：可用 `oci bv volume get` 命令查询块卷（或其他资源如实例、VNIC）的生命周期状态。

### 5. 将块卷附加到实例
```
oci compute volume-attachment attach --instance-id <instance_id> --type iscsi --volume-id <volume_id>
```

## 九、启动 Windows 实例

- 启动 Windows 实例的流程与 Linux 相同，唯一显著区别是**操作系统和规格**。

### 1. 启动实例
```
oci compute instance launch --availability-domain "EMIr:PHX-AD-1" -c <compartment_id> --shape "VM.Standard1.2" --display-name "Windows Instance" --image-id <image_id> --subnet-id <subnet_id>
```
- 注意：Windows 实例启动命令中**没有** SSH 密钥参数（与 Linux 不同）。

### 2. 获取 VNIC 信息
```
oci compute instance list-vnics --instance-id <instance_id>
```

### 3. 创建块卷
```
oci bv volume create --availability-domain "<ad>" -c <compartment_id> --size-in-mbs 51200 --display-name <display_name>
```

### 4. 附加块卷到实例
```
oci compute volume-attachment attach --instance-id <instance_id> --type iscsi --volume-id <volume_id>
```

## 十、连接到实例

虽然连接 Linux 和 Windows 实例都需要公网 IP，但这是两者唯一的共同点；区别包括认证方式、端口配置和桌面客户端程序。

### 1. 连接 Linux 实例
- 参见官方教程"Launch your first Linux instance"，介绍如何从 Unix 风格或 Windows 风格系统连接 Linux 实例。

### 2. 连接 Windows 实例（通过远程桌面 RDC）
需要两样东西：
- **实例的公网 IP 地址**：
```
oci compute instance list-vnics --instance-id <instance_id>
```
- **初始 Windows 凭据**：
```
oci compute instance get-windows-initial-creds --instance-id <instance_id>
```
返回示例：
```json
{ "data": { "password": "Cz{73~~vf@dnK7A", "username": "opc" } }
```
- 之后参见官方教程使用 RDC 连接。

## 十一、清理测试环境

完成教程后，通过删除未使用的资源来清理测试环境。

### 1. 分离并删除块卷（三步流程）
- **第 1 步：获取 volume-attachment-id**
```
oci compute volume-attachment list -c <compartment_id>
```
- **第 2 步：分离卷附加**
```
oci compute volume-attachment detach --volume-attachment-id <volume_attachment_id>
```
  - 所有破坏性操作允许使用 `--force` 参数（无需确认即删除资源），但**最佳实践是使用 y/N 确认选项而非 `--force`**。
  - 删除资源后无响应返回。
- **第 3 步：删除块卷**
```
oci bv volume delete --volume-id <volume_id> --force
```
  - 此操作无响应；可通过 `oci bv volume list` 验证，返回 `"lifecycle-state": "TERMINATED"` 表示卷已不存在。
  - Windows 实例的块卷删除步骤相同。

### 2. 终止实例
```
oci compute instance terminate --instance-id <instance_id>
```
- 分别对 Linux 和 Windows 实例执行，确认删除后无响应返回。

### 3. 删除虚拟云网络（两步）
- **删除子网**：
```
oci network subnet delete --subnet-id <subnet_id> --force
```
- **删除 VCN**：
```
oci network vcn delete --vcn-id <vcn_id> --force
```

---

## 十二、要点归纳

| 教程阶段 | 核心命令/操作 |
|---|---|
| 环境准备 | 在测试隔间中操作，记录所有 OCID |
| 网络搭建 | VCN → 安全列表（3389端口）→ 子网 → 互联网网关 → 路由规则 |
| 实例准备 | 查询镜像列表、查询可用规格 |
| Linux 实例 | 启动（需 SSH 密钥）→ 获取 VNIC → 创建/附加块卷 |
| Windows 实例 | 启动（无 SSH 密钥）→ 获取 VNIC → 创建/附加块卷 |
| 连接方式 | Linux 用 SSH；Windows 用 RDC + 初始凭据（username: opc） |
| 清理资源 | 分离/删除块卷 → 终止实例 → 删除子网 → 删除 VCN |

**总体来看**，这是一份从零到一的 OCI CLI 实战教程，覆盖了使用命令行完成"网络准备 → 启动 Linux/Windows 实例 → 连接实例 → 清理环境"的完整生命周期，特别适合希望以脚本化方式（而非控制台 GUI）管理 OCI 资源的用户入门。


## 说明
这份文档是关于 **Oracle Cloud Infrastructure (OCI) 控制台主页** 的官方指南，详细介绍了如何个性化定制主页、调整显示模式以及利用各类功能模块（Widgets）来高效管理云资源。

### 🎨 一、个性化定制与显示设置
#### 1. 定制主页
用户可以根据需求自定义主页的模块（Widgets）布局：
- **显示/隐藏模块**：点击主页右上角的"Customize"，在面板中切换各模块的开关。其中"最新动态"模块默认开启且不可关闭。
- **调整布局**：通过拖拽模块顶部的标题栏，可以改变模块在页面上的位置。
- **恢复默认**：可通过定制面板恢复主页的默认布局。

#### 2. 选择颜色模式
通过"Profile"菜单进入"Console settings"，用户可选择三种显示主题：
- **浅色模式**：浅色背景配深色文字。
- **深色模式**：深色背景配浅色文字。
- **匹配操作系统**：自动跟随宿主机的系统设置切换。

### 🧩 二、核心功能模块 (Widgets)
主页由多个功能模块组成，提供个性化的云环境视图：

#### 1. 资源概览
- **最近查看/创建**：列出当前区域内用户最近访问或租户内最近创建的资源。
- **资源集合**：显示保存的常用资源搜索集合，支持跳转至资源浏览器进行查询。

#### 2. 操作与构建
- **常用任务**：提供创建计算实例、设置虚拟网络等常见操作的快捷入口。
- **服务访问**：分为"最近访问"和"固定"两列，方便快速跳转至常用服务。

#### 3. 学习与发现
- **服务聚焦**：根据用户首次登录时选择的画像推荐 OCI 服务。
- **入门指南**：推荐基于用户画像的课程、教程和研讨会。
- **快速入门**：提供无需手动配置即可快速部署的完整解决方案。

#### 4. 运维与优化
- **最新动态**：展示 OCI 的发布说明和博客文章。
- **建议**：展示来自 Cloud Advisor（成本/性能优化）和 Cloud Guard（安全）的建议。
- **成本分析**：查看订阅的成本和余额信息，支持跳转至成本分析图表。
- **告警监控**：监控已创建告警的资源状态，支持跳转至指标浏览器。
- **公告**：显示影响服务状态的操作事件公告。

#### 5. 用户管理
提供身份管理服务的快捷操作，包括：
- 创建用户或组。
- 配置多因素认证。
- 查看审计事件。

### 🌐 三、辅助功能与全局视图
- **控制台仪表盘**：通过导航菜单访问，提供资源的图形化概览。
- **服务健康状况**：主页右上角入口，查看所有区域的服务整体健康状况。
- **体验预览**：主页底部入口，允许用户提前试用新功能并提供反馈。
- **市场与测试计划**：主页底部提供访问 Marketplace（部署第三方应用）和加入 Oracle Beta 计划的链接。

该文档全面阐述了 OCI 控制台主页的自定义能力与功能布局，通过模块化的设计帮助用户集中监控资源状态、优化成本安全并快速执行管理任务，是提升云环境运维效率的重要入口指南。
