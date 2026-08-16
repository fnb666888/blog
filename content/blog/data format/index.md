---
title: "常见数据格式"
description: "介绍一些常见的数据格式"
summary: "介绍一些常见的数据格式"
date: 2026-08-16
lastmod: 2026-08-16
draft: false
weight: 50
categories: ["基础知识"]
tags: ["数据格式"]
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


### 一、 文本与网络传输格式（人类可读）

这类格式主要用于配置文件、前后端通信，优点是方便人类阅读和编辑。

#### 1. JSON (JavaScript Object Notation)
*   **特点**：键值对结构，使用大括号 `{}` 和方括号 `[]`，数据类型明确（字符串必须用双引号）。
*   **示例**：
```json
{
  "username": "alice",
  "age": 25,
  "is_active": true,
  "hobbies": ["reading", "coding"]
}
```

#### 2. XML (eXtensible Markup Language)
*   **特点**：使用自定义的成对标签 `<tag></tag>` 包裹数据，结构严谨但非常冗余（标签名重复出现），文件体积大。
*   **示例**：
```xml
<user>
  <username>alice</username>
  <age>25</age>
  <is_active>true</is_active>
  <hobbies>
    <hobby>reading</hobby>
    <hobby>coding</hobby>
  </hobbies>
</user>
```

#### 3. YAML (YAML Ain't Markup Language)
*   **特点**：使用**空格缩进**表示层级关系，不使用大括号或标签，极其简洁，但对缩进极其敏感（不能混用 Tab 和空格）。
*   **示例**：
```yaml
username: alice
age: 25
is_active: true
hobbies:
  - reading
  - coding
```

#### 4. TOML (Tom's Obvious, Minimal Language)
*   **特点**：专为配置文件设计，语法类似 INI，使用 `[section]` 划分区块，键值对使用 `=`，比 YAML 更不容易因缩进出错。
*   **示例**：
```toml
username = "alice"
age = 25
is_active = true
hobbies = ["reading", "coding"]
```

---

### 二、 二进制与高性能传输格式（机器可读）

这类格式将数据转换为二进制字节流，人类无法直接阅读，但解析速度极快、占用空间极小。

#### 1. Protocol Buffers (Protobuf)
*   **特点**：需要先定义 `.proto` 文件（Schema），然后编译生成对应语言的代码。字段使用数字编号代替字段名，极致压缩。
*   **Schema 定义示例**：
```protobuf
message User {
  string username = 1;
  int32 age = 2;
  bool is_active = 3;
  repeated string hobbies = 4; // repeated 表示数组
}
```
*   **实际传输**：在内存中是一串紧凑的二进制字节（如 `0x0a 0x05 0x61 0x6c 0x69 0x63 0x65...`），无法直接用文本编辑器查看。

#### 2. MessagePack
*   **特点**：JSON 的二进制等价物。不需要预先定义 Schema，直接序列化字典/对象。
*   **示例**：
```python
# Python 代码示例
import msgpack
data = {"username": "alice", "age": 25}
packed = msgpack.packb(data)
# 输出类似: b'\x82\xa8username\xa5alice\xa3age\x19'
```

---

### 三、 结构化数据与数据库格式

主要用于海量数据的存储、分析和关系型数据库交互。

#### 1. CSV (Comma-Separated Values)
*   **特点**：纯文本，每行是一条记录，字段之间用逗号 `,` 分隔。没有数据类型概念，所有值都是字符串。
*   **示例**：
```csv
username,age,is_active,hobbies
alice,25,true,"reading,coding"
```

#### 2. Parquet / ORC (列式存储格式)
*   **特点**：专为大数据设计。与 CSV 按行存储不同，Parquet 按**列**存储。这意味着如果你只需要查询 `age` 列，它不需要读取整个文件，且自带极高的压缩率。
*   **示例**：
    *   无法用文本编辑器查看。
    *   在 Python 中通常配合 Pandas 使用：
```python
import pandas as pd
# 读取 Parquet 文件
df = pd.read_parquet("users.parquet")
print(df)
```

---

### 💡 核心对比总结

| 格式 | 可读性 | 文件体积 | 解析速度 | 核心应用场景 |
| :--- | :--- | :--- | :--- | :--- |
| **JSON** | ⭐⭐⭐⭐⭐ | 中等 | 中等 | Web API、前后端交互 |
| **YAML** | ⭐⭐⭐⭐⭐ | 小 | 慢 | 配置文件 (K8s, Docker) |
| **XML** | ⭐⭐⭐ | 大 | 慢 | 传统企业级系统、SOAP |
| **Protobuf** | ❌ (不可读) | 极小 | 极快 | 微服务 RPC (gRPC)、IoT |
| **Parquet** | ❌ (不可读) | 极小 | 快(按列读取) | 大数据仓库、数据分析 |

**选型建议**：
*   写给**人**看的配置：选 **YAML** 或 **TOML**。
*   写给**前端/外部系统**看的接口：选 **JSON**。
*   写给**内部微服务**追求极致性能：选 **Protobuf**。
*   做**海量数据分析**：选 **Parquet**。





