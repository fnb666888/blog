---
title: "数据库"
description: "介绍数据库的基础知识。"
summary: "介绍数据库的基础知识。"
date: 2026-09-19
lastmod: 2026-09-19
draft: false
weight: 50
categories: [基础知识]
tags: ["数据库"]
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

SQL（Structured Query Language，结构化查询语言）是用于管理和操作关系型数据库的标准语言。它并非编程语言，而是一种**声明式**语言：你只需描述“想要什么数据”，而不必关心“如何取到数据”，具体的执行路径由数据库引擎自行优化。

### 一、先搞清楚几个概念

| 概念 | 说明 |
|---|---|
| 数据库（Database） | 数据的容器，一个实例下可建多个库 |
| 表（Table） | 数据以行（记录）和列（字段）组织，类似二维表格 |
| 字段 / 列（Column） | 定义数据的属性，有名称和数据类型 |
| 行 / 记录（Row） | 一条完整的数据 |
| 主键（Primary Key） | 唯一标识一行数据的列，不可重复、不可为空 |
| 外键（Foreign Key） | 指向另一张表主键的列，用于建立表间关系 |
| DBMS | 数据库管理系统，如 MySQL、PostgreSQL、SQL Server、Oracle、SQLite |

> 注意：不同 DBMS 在语法细节上存在差异（如分页写法、字符串拼接、日期函数等），下文以标准 SQL 为主，并在关键处标注常见方言区别。

### 二、SQL 的五大分类

1. **DQL（数据查询语言）**：`SELECT` —— 最常用，占日常工作的八成
2. **DML（数据操作语言）**：`INSERT` / `UPDATE` / `DELETE`
3. **DDL（数据定义语言）**：`CREATE` / `ALTER` / `DROP` / `TRUNCATE`
4. **DCL（数据控制语言）**：`GRANT` / `REVOKE`
5. **TCL（事务控制语言）**：`COMMIT` / `ROLLBACK` / `SAVEPOINT`

### 三、数据类型（以 MySQL 为例）

- **数值**：`INT`、`BIGINT`、`DECIMAL(10,2)`（金额用这个，别用浮点）、`FLOAT`、`DOUBLE`
- **字符串**：`CHAR(n)`（定长）、`VARCHAR(n)`（变长）、`TEXT`
- **日期时间**：`DATE`、`TIME`、`DATETIME`、`TIMESTAMP`（注意时区问题）
- **布尔**：`BOOLEAN`（MySQL 内部用 `TINYINT(1)` 模拟）
- **其他**：`JSON`、`BLOB`、枚举类型等

选型原则：**够用即可**。金额用 `DECIMAL`，手机号用 `VARCHAR`（因为可能有 `+86` 或前导 0），性别这种固定值用 `TINYINT` 或枚举。

### 四、查询：SELECT 是核心

#### 4.1 基本结构

```sql
SELECT name, age                  -- 选哪些列
FROM users                        -- 从哪张表
WHERE age >= 18                   -- 过滤条件
  AND status = 'active'
ORDER BY age DESC, name ASC       -- 排序
LIMIT 10 OFFSET 20;               -- 分页：跳过20条，取10条
```

执行顺序（非常重要，与书写顺序不同）：
`FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY` → `LIMIT`

这意味着：**`WHERE` 里不能用 `SELECT` 中定义的别名**，因为它还没执行到那一层。

#### 4.2 常用技巧

```sql
SELECT DISTINCT department FROM employees;     -- 去重
SELECT COUNT(*) AS total FROM users;           -- 计数（别名用 AS）
SELECT * FROM users LIMIT 5;                   -- 只看前几行，探索表结构时很实用
```

`COUNT(*)` 统计行数（含 NULL），`COUNT(列名)` 统计该列非 NULL 的行数。

#### 4.3 WHERE 条件运算符

```sql
WHERE age BETWEEN 18 AND 30                    -- 区间（包含两端）
WHERE name IN ('Alice', 'Bob', 'Carol')        -- 集合匹配
WHERE email LIKE '%@gmail.com'                 -- 模糊匹配：%任意字符，_单个字符
WHERE phone IS NULL                            -- 判断空值，不能用 = NULL
WHERE age IS NOT NULL
WHERE NOT (age < 18)                           -- 逻辑取反
```

⚠️ **两个高频坑**：
- `NULL` 不等于任何值，包括它自己。`NULL = NULL` 结果是 UNKNOWN，必须用 `IS NULL`。
- `LIKE '张%'` 能走索引，`LIKE '%张'` 通常走不了（前导通配符）。

### 五、聚合与分组

```sql
SELECT
    department,
    COUNT(*)       AS emp_count,
    AVG(salary)    AS avg_sal,
    MAX(salary)    AS max_sal,
    SUM(salary)    AS total_sal
FROM employees
WHERE hire_date >= '2020-01-01'
GROUP BY department
HAVING AVG(salary) > 8000          -- 对分组后的结果再过滤
ORDER BY avg_sal DESC;
```

常用聚合函数：`COUNT()`、`SUM()`、`AVG()`、`MAX()`、`MIN()`、`GROUP_CONCAT()`（MySQL）。

规则：**`SELECT` 中出现的非聚合列，必须出现在 `GROUP BY` 里**，否则结果不确定（MySQL 宽松模式下不报错但数据是错的）。

`WHERE` vs `HAVING`：`WHERE` 在分组前过滤行，`HAVING` 在分组后过滤组。能用 `WHERE` 的就别放 `HAVING`，性能更好。

### 六、多表连接 JOIN（重点）

假设有 `users` 表和 `orders` 表：

```sql
SELECT u.name, o.order_no, o.amount
FROM users u                      -- u 是别名，简洁且推荐
JOIN orders o ON u.id = o.user_id;
```

连接类型：

| 类型 | 含义 |
|---|---|
| `INNER JOIN`（内连接） | 只保留两表都能匹配上的行 |
| `LEFT JOIN`（左连接） | 保留左表全部行，右表无匹配则填 NULL |
| `RIGHT JOIN` | 保留右表全部行（少用，写成 LEFT JOIN 更清晰） |
| `FULL OUTER JOIN` | 两表都保留（MySQL 不支持，可用 UNION 模拟） |
| `CROSS JOIN` | 笛卡尔积，慎用 |

```sql
-- 找出"从未下过单的用户"——经典左连接判空模式
SELECT u.name
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;
```

多表连接时，**驱动表（左表）尽量小**，连接字段要建索引，否则会产生慢查询。

### 七、子查询与集合操作

**子查询**（标量、行、表子查询）：

```sql
-- 标量子查询：返回单个值
SELECT name FROM users
WHERE salary > (SELECT AVG(salary) FROM users);

-- IN 子查询
SELECT name FROM users
WHERE id IN (SELECT user_id FROM orders WHERE amount > 1000);

-- EXISTS：通常比 IN 效率高，尤其在大数据量时
SELECT name FROM users u
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
```

**集合操作**：`UNION`（去重合并）、`UNION ALL`（不去重，更快）、`INTERSECT`（交集）、`EXCEPT`（差集）。要求两个查询的**列数和类型对应一致**。

### 八、增删改：DML

```sql
INSERT INTO users (name, age, email)
VALUES ('Alice', 25, 'alice@example.com');

-- 批量插入（性能远高于逐条插入）
INSERT INTO users (name, age) VALUES ('Bob', 30), ('Carol', 28);

UPDATE users
SET age = 26, status = 'active'
WHERE id = 1;                     -- 务必带 WHERE！

DELETE FROM users WHERE id = 1;   -- 务必带 WHERE！
```

⚠️ **铁律**：执行 `UPDATE` / `DELETE` 前，先把条件换成 `SELECT *` 跑一遍，确认影响的行数对不对。生产环境误删数据是最常见的事故之一。

`TRUNCATE TABLE t` 会清空整表且不可回滚（DDL），比 `DELETE` 快；`DROP TABLE t` 则是连表结构一起删掉。

### 九、建表与约束：DDL

```sql
CREATE TABLE users (
    id          BIGINT PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(50)  NOT NULL,
    email       VARCHAR(100) NOT NULL UNIQUE,
    age         INT          CHECK (age >= 0 AND age <= 150),
    dept_id     BIGINT,
    created_at  DATETIME     DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (dept_id) REFERENCES departments(id) ON DELETE SET NULL
);

ALTER TABLE users ADD COLUMN phone VARCHAR(20);      -- 加列
ALTER TABLE users DROP COLUMN phone;                 -- 删列
ALTER TABLE users MODIFY COLUMN name VARCHAR(100);   -- 改类型
DROP TABLE users;                                    -- 删表
```

常用约束：`PRIMARY KEY`、`NOT NULL`、`UNIQUE`、`CHECK`、`DEFAULT`、`FOREIGN KEY`。

外键能保证数据一致性，但高并发场景下常带来锁竞争，因此很多互联网项目选择**在应用层维护关联关系**（逻辑外键）。

### 十、索引：让查询变快的关键

```sql
CREATE INDEX idx_email ON users(email);                      -- 普通索引
CREATE UNIQUE INDEX idx_email ON users(email);               -- 唯一索引
CREATE INDEX idx_dept_age ON users(dept_id, age);            -- 复合索引
SHOW INDEX FROM users;                                       -- 查看索引（MySQL）
```

核心要点：
1. **最左前缀原则**：复合索引 `(a, b, c)` 可用于 `a`、`a+b`、`a+b+c` 的查询，但单独查 `b` 或 `c` 用不上。
2. 索引不是越多越好：写操作（增删改）都要同步更新索引，过多反而拖慢写入。
3. 以下情况索引容易失效：对索引列做函数运算（如 `WHERE YEAR(created_at)=2024`）、隐式类型转换（字符串字段不加引号）、`OR` 条件、`!=`、`LIKE '%xx'`。
4. 区分度高的列适合建索引（如身份证号），区分度低的（如性别）意义不大。

### 十一、视图、事务与其他

**视图**（虚拟表，封装复杂查询）：
```sql
CREATE VIEW v_active_users AS
SELECT name, email FROM users WHERE status = 'active';
```

**事务**（保证一组操作要么全成功、要么全失败）：
```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;      -- 提交；出错则 ROLLBACK;
```

ACID 四性：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）。隔离级别从低到高：读未提交 → 读已提交 → 可重复读（MySQL 默认） → 串行化。

**其他实用对象**：存储过程、函数、触发器、CTE（公用表表达式，`WITH ... AS (...) SELECT ...`，可读性远优于嵌套子查询，强烈推荐）。

---

关系型数据库（Relational Database）是目前应用最广泛的数据库类型，MySQL、PostgreSQL、Oracle、SQL Server 等均属此类。其核心在于**用数学上严谨的“关系”模型来组织数据，并用声明式语言（SQL）操作数据**，使用者只需说明“要什么”，无需关心“怎么取”。

### 一、理论根基：关系模型

1970 年，IBM 研究员 E. F. Codd 发表论文《大型共享数据库的数据关系模型》，提出用**集合论与一阶谓词逻辑**描述数据，取代当时主流的层次模型和网状模型。这一模型包含三个层面：

- **结构（数据结构）**：数据以二维表（关系）的形式组织。
- **完整性（约束条件）**：定义数据必须满足的规则。
- **操作（数据操纵）**：基于关系代数或关系演算进行运算。

之所以称为“关系型”，源于数学概念：表中的每一行都是属性取值的一个 n 元组，整张表则是这些元组构成的集合（即笛卡尔积的子集）。这里的“关系”指代数学上的关系，而非表与表之间的关联。

### 二、核心概念

| 术语 | 含义 |
|---|---|
| 关系（Relation） | 一张表 |
| 元组（Tuple） | 一行记录 |
| 属性（Attribute） | 一列字段 |
| 域（Domain） | 属性的合法取值范围 |
| 模式（Schema） | 表的结构定义（列名、类型、约束），相对稳定 |
| 实例（Instance） | 某一时刻表中的实际数据，随时变化 |

**键（Key）**是关系模型的灵魂：

- **候选键**：能唯一标识一行的最小属性集。
- **主键（Primary Key）**：从候选键中选定一个作为主要标识，要求唯一且非空。
- **外键（Foreign Key）**：引用另一张表主键的列，用于建立表间联系。
- **超键**：包含候选键的属性集（不一定最小）。

表与表之间通过外键建立联系，而非像网状模型那样使用物理指针。这种**逻辑上的关联**正是关系模型实现数据独立性的关键。

### 三、三类完整性约束

1. **实体完整性**：主键不能为空且必须唯一，确保每行可被区分。
2. **参照完整性**：外键的值要么为空，要么必须在被引用表中真实存在，防止出现“孤儿记录”。
3. **用户定义完整性**：由业务决定的约束，如非空、唯一、检查条件（CHECK）、默认值等。

这三类约束将数据质量的控制权从应用程序转移到了数据库层，从根本上避免了脏数据的产生。

### 四、操作：关系代数与 SQL

关系代数提供了一组**闭包**运算：输入是关系，输出仍是关系，因此可以嵌套组合。基本运算包括：

- **选择（σ）**：按条件筛选行（水平子集）。
- **投影（π）**：选取指定列（垂直子集）。
- **并、差、笛卡尔积**：集合运算。
- **连接（⋈）**：最重要的运算，包括内连接、外连接、自连接等，本质是“笛卡尔积 + 选择”的优化组合。
- **除（÷）**：用于表达“所有”类查询。

SQL 是关系代数的工程实现，但两者存在差异：SQL 的表允许重复行（多重集），且支持排序、分组聚合等扩展功能。SQL 属于**声明式语言**，用户编写 `SELECT ... WHERE ...` 描述目标结果，具体执行路径由优化器决定。

### 五、设计方法：规范化

规范化旨在消除数据冗余及更新异常（插入异常、删除异常、修改异常），其依据是**函数依赖**：

- **1NF**：每个属性不可再分（原子性）。
- **2NF**：满足 1NF，且非主属性完全依赖于主键（消除部分依赖）。
- **3NF**：满足 2NF，且非主属性不传递依赖于主键。
- **BCNF**：任何函数依赖的决定因素都必须是候选键。

规范化程度越高，冗余越低，但查询时的连接操作也会增多。因此在实际工程中常需在**范式与性能之间权衡**，有时会故意进行反规范化（如数据仓库中的星型模型）。

### 六、事务：ACID

当多步操作需要作为一个整体执行时（如转账），便涉及事务机制：

- **原子性（A）**：事务内的操作要么全部完成，要么全部回滚。
- **一致性（C）**：事务前后数据库均处于合法状态。
- **隔离性（I）**：并发事务互不干扰。
- **持久性（D）**：一旦提交，结果永久保存。

并发控制通常采用**锁机制**（共享锁/排他锁、两阶段锁协议）或 **MVCC（多版本并发控制）**；隔离级别从低到高分为读未提交、读已提交、可重复读、串行化，级别越高，并发性能越差。

恢复机制则依赖 **WAL（预写式日志）**：修改数据前先写日志，崩溃后可通过重做（REDO）与撤销（UNDO）保证持久性和原子性。

### 七、物理实现：存储与索引

逻辑层面的“表”在磁盘上需要具体的存储结构：

- **堆文件 / 聚簇索引组织表**：决定行的物理排列方式。InnoDB 采用“索引组织表”，数据本身即按主键构建的 B+ 树叶子节点。
- **B+ 树索引**：最常用的索引结构，树高通常为 3~4 层即可支撑千万级数据，范围查询效率高。
- **哈希索引**：等值查询极快，但不支持范围查询与排序。
- **查询优化器**：将 SQL 转化为执行计划，通过基于代价的估算（结合统计信息、选择性、I/O 成本）选择连接顺序、连接算法（嵌套循环、哈希连接、归并连接）以及是否走索引。这也是 SQL 书写方式会显著影响性能的原因。

### 八、适用场景与局限

**适合**：数据结构清晰、需要强一致性与复杂查询、存在大量关联分析的业务系统（如订单、账务、库存、ERP、CRM）。

**不适合**：超大规模写入、schema 频繁变动、海量非结构化数据或需要极高横向扩展的场景。这类需求往往更适合 NoSQL（键值、文档、列存、图数据库），这也正是近年来 NewSQL 与分布式数据库试图弥补的方向。

---

非关系型数据库（NoSQL，Not Only SQL）并非单一技术，而是一批**放弃关系模型某些特性，以换取扩展性、灵活性或特定查询性能**的数据库的统称。理解它的关键在于搞清楚它们各自放弃了什么，以及为何值得放弃。

### 一、为什么会出现 NoSQL

关系数据库在 2000 年代末遇到了一组难以同时满足的需求，催生了 NoSQL 的兴起：

1. **数据量爆炸**。单机存储和 I/O 存在上限，而关系数据库的强一致性与复杂 JOIN 使得水平分片极其困难（跨分片事务和跨分片 JOIN 成本极高）。
2. **Schema 僵化**。互联网产品的数据结构迭代极快，`ALTER TABLE` 在大表上往往是灾难性的操作。
3. **访问模式高度可预测**。大量业务是简单的“按 ID 取数据”或“按时间范围扫描”，根本用不到 JOIN 和复杂事务。既然不需要这些功能，也就无需承担其带来的性能开销。
4. **写多读少与海量日志**。监控、埋点、IoT 等场景以追加写入为主，B+ 树的随机写成为瓶颈。

背后的理论支撑主要有两个：

- **CAP 定理**：分布式系统中，一致性（C）、可用性（A）、分区容错性（P）三者只能取其二。由于 P（网络分区）在分布式环境中不可避免，实际选择往往落在 **CP**（保一致，牺牲部分可用性）或 **AP**（保可用，牺牲强一致）之间。关系数据库通常选择 CA（依赖单机或主从架构，不真正面对分区）。
- **BASE 理论**：Basically Available（基本可用）、Soft state（软状态）、Eventually consistent（最终一致）。这是对 ACID 的妥协——放弃即时一致，换取系统的高可用与高吞吐。

核心思路在于：**不再追求通用性，而是针对特定访问模式做极致优化**。

### 二、四大类（plus）

#### 1. 键值数据库（Key-Value）

代表：Redis、DynamoDB、Riak、etcd

**原理**：数据模型退化为最简形式——一个 key 对应一个 value（value 通常为不透明的二进制大对象或字符串），只支持 `get`、`set`、`delete`。

- 存储上通常就是**哈希表 + 持久化日志**，查找 O(1)，没有任何解析器和优化器开销。
- Redis 全内存运行，配合 RDB 快照与 AOF 日志实现持久化；其价值很大程度上来自丰富的 value 结构（String、Hash、List、Set、ZSet、Bitmap、HyperLogLog、Geo）。
- 分布式方案多采用**一致性哈希**或**分片集群**（如 Redis Cluster 的 16384 个槽位）。

**适用**：缓存、会话存储、计数器、排行榜、分布式锁、消息队列。**不适用**：需要按 value 内容查询或多维筛选的场景。

#### 2. 文档数据库（Document）

代表：MongoDB、CouchDB、Firestore

**原理**：value 升级为**半结构化文档**（JSON/BSON），数据库能理解文档内部结构，支持对嵌套字段建索引、按字段查询、聚合管道。

- Schema-less（更准确说是 **schema-on-read**）：同一集合内文档结构可以不同，新增字段直接写入即可，无需 DDL。
- 索引通常基于 B+ 树或 LSM，支持单字段、复合、数组、全文、地理空间索引。MongoDB 4.0+ 还引入了多文档事务（但官方明确建议不要将其作为常规用法）。
- **关键设计取舍**：鼓励**数据内嵌（embedding）而非关联（referencing）**。例如把订单明细直接嵌在订单文档里，一次读取即完成，代价是更新时需要同时修改多处（或通过应用层处理）。这是用“写冗余”换“读性能”。

**适用**：内容管理、用户画像、商品目录、快速迭代的业务系统。它是关系数据库最常见的替代或补充方案。

#### 3. 列族数据库（Column-Family / Wide-Column）

代表：Cassandra、HBase、Bigtable、ScyllaDB

**原理**：这是最容易误解的一类。它的“列存”与 OLAP 的列存不同，准确说是**二维有序键值映射**：

```
row_key → { column_family → { column_qualifier: value, timestamp } }
```

几个关键点：

- **行键（Row Key）是唯一的主访问路径**，数据按 row key 字典序物理排序存储。这意味着：**只有按 row key 或 row key 前缀查询才高效**，其他条件基本只能全表扫。因此 row key 的设计就是全部的艺术（通常需要把查询维度编码进 key，甚至做冗余表）。
- **列是稀疏的、动态的**：同一行不同列族下的列可以完全不同，新增列零成本。
- **底层几乎全是 LSM-Tree**：写入追加到 MemTable，刷盘成 SSTable，后台合并。写吞吐极高，适合时序、日志、监控数据。
- **无中心架构**：Cassandra 采用 Gossip 协议 + 一致性哈希环，无单点；HBase 则依赖 ZooKeeper + HMaster + RegionServer 的主从架构。
- **可调一致性**：Cassandra 允许通过 `consistency level`（ONE / QUORUM / ALL / LOCAL_QUORUM）在每次读写时选择一致性与延迟的平衡点，公式 `R + W > N` 保证强一致。

**适用**：海量写入、时间序列、事件存储、消息历史。**不适用**：复杂查询、频繁更新删除、需要事务的场景。

#### 4. 图数据库（Graph）

代表：Neo4j、JanusGraph、NebulaGraph、TigerGraph

**原理**：当业务的核心复杂度在于**关系本身**（而非实体属性）时，关系数据库的 JOIN 会随着跳数指数级退化。图数据库改用**指针式物理邻接**：每个节点直接持有指向其关系的物理指针，遍历一条边就是一次指针跳转，**查询复杂度与图总规模无关，只与 traversed subgraph 大小有关**。这就是“index-free adjacency”。

- 数据模型：属性图（Property Graph），包含节点、边（有方向、有类型、可带属性）。
- 查询语言：Cypher（Neo4j）、Gremlin（遍历式）、GQL（正在成为 ISO 标准）。
- 典型算法：最短路径、连通分量、PageRank、社区发现、环路检测。

**适用**：社交网络、推荐系统、知识图谱、风控反欺诈（关系链路识别）、权限与依赖分析。**不适用**：简单 CRUD、聚合统计。

#### 5. 其他衍生

| 类型 | 代表 | 核心思路 |
|---|---|---|
| 搜索引擎 | Elasticsearch、Solr | **倒排索引**：词项 → 文档列表 + 位置/频率，支持全文检索、模糊、相关性打分（TF-IDF/BM25） |
| 时序数据库 | InfluxDB、Prometheus、TDengine | 时间为主键，列式压缩（delta-of-delta、Gorilla 压缩），降采样与连续查询，高压缩比 |
| 向量数据库 | Milvus、Pinecone、pgvector | **近似最近邻（ANN）**：HNSW 图索引、IVF 量化，牺牲精度换召回速度，服务大模型 RAG |
| NewSQL / 分布式 SQL | TiDB、CockroachDB、Spanner | 用分布式共识（Raft）+ 分布式事务（Percolator / 2PC + 时间戳序）重建 SQL 的强一致与水平扩展，本质是"既要" |

### 三、分布式层面的共同机制

NoSQL 的价值大半体现在分布式能力上，以下几项机制几乎是共通的：

**1. 分片（Sharding / Partitioning）**

- **范围分片**：按 key 区间切分（HBase、MongoDB 的范围分片）。优点是范围查询友好；缺点是可能产生热点（如自增 ID 全部打到最后一个分片）。
- **哈希分片**：按 `hash(key) mod N` 分配（Cassandra、MongoDB 的哈希分片）。写入均匀，但范围查询需 scatter-gather 到所有分片。
- **一致性哈希 / 虚拟节点**：节点增减时只迁移少量数据，避免全量重分布。

**2. 复制（Replication）**

- 主从（leader-follower）：写走主，读可从从库，读扩展好，但存在复制延迟（读到旧数据）。
- 多主（multi-leader）：跨区域写入友好，但冲突解决复杂（需 Last-Write-Wins、向量时钟、CRDT 等机制）。
- 无主（leaderless）：Dynamo 风格，读写都发往 N 个节点，靠 Quorum 和 Hinted Handoff 保证最终一致。

**3. 一致性模型（这是个谱系，不是二选一）**

```
强一致 → 顺序一致 → 因果一致 → 会话一致 → 最终一致
```

工程上常见的手段包括：Quorum 机制（`R+W>N`）、向量时钟与版本向量（检测并发写冲突）、Merkle Tree（抗熵修复，用于节点间数据校验）、读修复与 hinted handoff。

**4. 冲突解决**

放弃强一致后，必须回答“两个客户端同时改了同一个 key，留哪个”。常见策略包括 LWW（最后写入胜出，依赖时钟，有时钟漂移风险）、版本向量 + 兄弟节点保留（交由应用层合并，如 Riak）、CRDT（数学上保证收敛的数据结构）。

### 四、与关系数据库的核心差异对照

| 维度 | 关系型 | NoSQL |
|---|---|---|
| 数据模型 | 表 + 行，schema 固定 | 多样，schema 灵活或无 schema |
| 关联 | JOIN（任意方向、多表） | 基本不支持，靠应用层组装或数据冗余 |
| 事务 | ACID，多行多表 | 大多单行/单文档原子，少数支持多文档 |
| 查询语言 | SQL（声明式、统一） | 各异，多为 API 或专有 DSL |
| 扩展 | 纵向为主，分库分表需人工介入 | 横向扩展为原生设计 |
| 一致性 | 强一致 | 可调，多为最终一致 |
| 优化器 | 有（代价估算、执行计划） | 大多没有，**查询能力由索引和 key 设计预先决定** |

最后一行尤为重要：**在关系数据库中，写好 SQL 即可依赖优化器寻找路径；而在多数 NoSQL 中，必须在建模阶段就预判查询模式，因为事后无法通过加索引来弥补设计缺陷**（尤其是 Cassandra 这类，换一种查询往往就得新建一张表）。

### 五、选型与避坑

**选型原则：先定查询模式，再选数据库。**具体步骤如下：

1. 列出所有高频查询（包括过滤条件、排序、分页方式）。
2. 判断是否需要事务、是否需要 JOIN、数据量与写读比。
3. 据此匹配：
   - 简单 KV 高速存取 → Redis / DynamoDB
   - 结构多变、以读为主、需要灵活查询 → MongoDB
   - 海量写入、时序/日志、可接受最终一致 → Cassandra / HBase
   - 关系深度遍历 → Neo4j / NebulaGraph
   - 全文检索 → Elasticsearch
   - 既要 SQL 又要水平扩展 → TiDB / CockroachDB

**常见坑：**

- **把 NoSQL 当关系库用**：在 MongoDB 里做应用层 JOIN，或在 Cassandra 里按非 key 字段查数据，性能必然崩盘。
- **滥用最终一致**：涉及资金、库存扣减、权限的场景，不要指望“过一会就一致了”，应选用 CP 系统或 NewSQL。
- **忽视热点**：row key 或 hash key 设计不当会导致单节点被打满，这是 NoSQL 集群故障的头号原因。
- **内存型当持久化用**：Redis 的持久化是异步的，极端崩溃会丢数据；且内存成本高，要有淘汰策略。
- **认为 NoSQL 不需要设计**：恰恰相反，NoSQL 的建模难度高于关系型，因为它把复杂度从“查询时”转移到了“设计时”。

### 六、一个现实的趋势

如今纯粹的“NoSQL vs SQL”之争已基本结束，主流形态演变为**多模持久化（polyglot persistence）**：一个系统里 MySQL 管交易、Redis 管缓存、ES 管搜索、ClickHouse 管分析、Neo4j 管关系，各司其职，由应用层编排。同时，关系数据库也在吸收 NoSQL 的特性（如 JSON 类型、列存引擎、分布式扩展），而 NoSQL 也在补回事务与 SQL（如 MongoDB 的事务、Cassandra 的 CQL）。两者的边界正日益模糊。

---

### 一、它解决的是什么问题

向量数据库要回答的核心问题是：**给定一个向量，如何在百万到百亿规模的向量集合里，快速找到和它“最相似”的那一批**。

这个需求来自 embedding 技术。文本、图片、音频、视频经过神经网络编码后变成固定长度的稠密向量（如 768、1024、4096 维），语义相近的内容在向量空间中距离更近。于是“搜索”被转化为“最近邻查找”。典型场景包括 RAG 知识检索、以图搜图、推荐召回、去重与相似内容识别，以及 Agent 的记忆检索。

关键在于：**精确最近邻在大规模下不可行**。暴力扫描需要逐个计算距离并排序，复杂度为 O(n·d)，十亿级数据单次查询耗时达秒级。因此，向量数据库本质上是**近似最近邻（ANN, Approximate Nearest Neighbor）索引引擎**——通过牺牲少量精度（如召回率从 100% 降至 95%），换取数百倍甚至千倍的性能提升。

### 二、先明确"相似"怎么算

距离度量的选择直接影响结果，且必须与 embedding 模型及训练目标匹配：

| 度量 | 公式 | 适用 |
|---|---|---|
| L2 欧氏距离 | ‖x−y‖² | 通用，SIFT 等图像特征 |
| 内积 IP | x·y | 推荐系统、未经归一化的 embedding |
| 余弦相似度 | x·y/(‖x‖‖y‖) | **文本 embedding 最常用** |
| 汉明距离 | bit 异或计数 | 二值化向量（PQ 残差、感知哈希） |
| 曼哈顿 L1 | Σ\|xᵢ−yᵢ\| | 较少用 |

一个重要工程技巧：**当向量被 L2 归一化后，余弦相似度等价于内积，而最大化内积又等价于最小化 L2 距离**。因此大多数引擎内部统一转化为一种运算，再通过归一化预处理切换语义。这也是为什么建索引前是否做 normalize 会显著影响结果。

另外需要注意：**距离度量必须在索引构建时确定，构建后无法更改**（因为索引结构本身依赖该度量）。更换度量通常需要重建索引。

### 三、为什么传统索引在高维失效

这是理解向量索引的前提。B+ 树、KD-Tree、R-Tree 这类结构依赖“空间划分”来剪枝，但在高维空间中会出现**维度灾难**：

- 随着维度 d 上升，数据点几乎全部落在超球面的薄壳上，彼此之间的距离趋于收敛。此时“最近”和“最远”的差异消失，剪枝失去意义。
- KD-Tree 的复杂度退化为接近 O(n)，实际表现甚至不如暴力扫描（经验上 d > 20 左右就开始崩）。
- 同时，高维空间的体积爆炸导致任何局部区域的覆盖率极低。

因此，现代 ANN 索引基本放弃了严格的空间划分，转向三条路线：**量化（压缩）、图（邻接跳转）、哈希（随机投影）**，以及它们的组合。

### 四、主流索引算法

#### 1. IVF（倒排文件索引）—— 粗粒度聚类

思路类似“先分桶再细找”：

1. 用 k-means 把全量向量聚成 nlist 个簇（如 1024~4096），每个簇中心构成一个 Voronoi 单元。
2. 每个向量归属最近的中心，建立 `center_id → 向量列表` 的倒排。
3. 查询时，先算 query 与所有中心的距离，取最近的 nprobe 个簇（如 nprobe=10）。
4. 只在这 nprobe 个簇内做精确或量化距离计算。

**代价**：只需扫描全量的 nprobe/nlist（如 1%），速度提升百倍。**风险**：如果 query 落在簇边界附近，真正的近邻可能在相邻簇里被漏掉。增大 nprobe 能提高召回但会降低速度。

IVF 很少单独使用，通常作为“第一级路由”与其他技术叠加，例如 Faiss 经典的 `IVF4096,PQ64`。

#### 2. PQ（乘积量化）—— 有损压缩

这是降低内存与计算成本的核心手段。假设一个 128 维 float32 向量占 512 字节，十亿条就是 480GB，完全放不下内存。

PQ 的做法：

1. 把 128 维切分成 m 段（如 m=16，每段 8 维）。
2. 每段独立跑 k-means（如 k=256 个码字），得到一个大小为 256×8 的码本。
3. 原始向量被压缩成 m 个整数（每个整数是对应段的码本下标），即 **16 字节**。
4. 压缩率达 32 倍，十亿条从 480GB 降至 15GB。

距离计算时不再还原向量，而是**查表累加**：预先算出 query 每段与各码字的距离（m×k 的小表），两个向量的距离 ≈ 各段码字间距离之和。这叫 **ADC（Asymmetric Distance Computation）**。

**精度损失来源**：每段内的 256 个码字只能近似表达该子空间，残差被丢弃。改进版本包括 OPQ（先做一次旋转使各段方差更均衡）、RQ（残差量化，逐层量化残差）、SQ（标量量化，每维直接均匀离散化为 4bit/8bit，实现简单且在现代硬件上往往优于 PQ）。

#### 3. HNSW（分层可导航小世界图）—— 目前最主流的图索引

理解它需要拆成两部分：

**（a）小世界图**。构造一张图，节点是向量，边连接“较近”的节点。其特性是：任意两节点间存在一条短路径，且**局部连通性良好**。搜索时从入口点出发，采用贪心策略走向“离 query 更近的邻居”，迭代至无法更优。这种方式的跳转次数是 O(log n) 级别，且每次跳转都在局部，缓存友好。

**（b）分层结构（借鉴跳表）**。单层图的问题是容易陷入局部最优。HNSW 给节点分配多个层级（按指数衰减概率抽样，越高层越稀疏）：

- 高层：节点少、边长，用于**长距离快速跨越**空间。
- 底层（第 0 层）：包含全部节点，用于**精细定位**。
- 搜索时从最高层的入口开始，找到该层最近点后下降一层，以其为起点继续搜索，直到底层。

关键参数：
- `M`：每节点最大出边数（一般 16~64）。越大图越密、召回越高，但内存和构建时间线性增长。
- `efConstruction`：建图时的候选池大小，影响图质量（建好后不可改）。
- `efSearch`：查询时的候选池大小，**这是召回与速度的主要调节旋钮**，可在线调整。

优点：召回率极高（常 >98%）、无需训练阶段、支持在线插入。缺点：**内存占用大**（每张图的边都要存指针/ID），十亿级需要百 GB 级内存；删除节点困难（通常只做逻辑标记）。

#### 4. DiskANN / Vamana —— 磁盘优先

微软提出的思路：用量化压缩向量放内存作为“导航图”，原始向量放 SSD，通过精心设计的 I/O 预取让磁盘访问次数可控。这使得单机就能支撑亿级甚至十亿级向量，成本远低于纯内存方案。Qdrant 的 mmap 模式、Milvus 的 DiskANN 索引均采用此路线。

#### 5. 其他

- **LSH（局部敏感哈希）**：用随机投影保证“近的点碰撞概率高”，理论性质好，但工程上召回/效率不如 HNSW，现在多见于理论基线或超大规模初筛。
- **NSG / NGT / SPTAG**：基于邻近图，通过选取邻居保证单调路径，性能好但构建慢。
- **Flat / 暴力 + SIMD/GPU**：小规模（<100 万）或要求 100% 召回时，直接暴力扫描反而更快。现代 GPU 的 brute-force 吞吐量惊人，NVIDIA RAFT 即是此类方案。
- **二分图 / SPANN**：结合聚类与图，追求更高压缩比。

### 五、一个典型的组合形态

实际产品极少只用一种算法，而是**多级流水线**：

```
query → 归一化
     → IVF 粗筛（nprobe 个簇，缩小到万级）
        → 图索引精搜（efSearch 控制）
           → PQ/SQ 解码算距离
              → top-k 重排（可选：用原始向量精算一次）
                 → 返回
```

Faiss 的命名就体现了这种组合：`IndexIVFHNSWPQ` = IVF 路由 + HNSW 簇内搜索 + PQ 压缩。理解这种拼接方式，比死记单个算法更有用。

### 六、除了 ANN，向量数据库还做了什么

很多人以为向量数据库就是 FAISS 包一层 HTTP，差别其实体现在以下方面：

**1. 元数据过滤（filtering）**。真实查询几乎都带条件：“找相似图片，且属于用户 A，时间在最近 30 天，标签不含已读”。这带来难题：ANN 的跳转顺序与过滤条件无关，可能扫了几万个点才凑够 k 个满足条件的。

两种解法：
- **后过滤（post-filter）**：先 ANN 取 top-k×放大倍数，再过滤。快，但过滤条件苛刻时召回骤降。
- **预过滤（pre-filter）**：先用标量索引筛出候选集，再在候选集上做 ANN。准确，但候选集过大时退化。

成熟做法是**自适应选择**（根据过滤选择性估计决定），并配合位图索引、倒排标量索引、Bloom filter。Qdrant 的 payload 索引、Milvus 的 ScalarIndex 均属此类。这是选型时最容易踩坑的地方——**很多引擎的过滤性能远不如宣传**。

**2. 混合检索与重排**。单纯向量检索对关键词精确匹配、数字、专有名词表现不佳。工业界普遍采用 **BM25（稀疏/关键词）+ 向量（稠密）双路召回，再用 RRF（倒数排名融合）或加权打分合并**，最后交给 Cross-Encoder 重排。这也是 RAG 提升召回率的标准配置。

顺便提一句：稀疏向量检索（如 SPLADE、BM25 的向量化表达）正在回归，ColBERT 这类“多向量”方案也模糊了稀疏与稠密的界限。

**3. 增删改与实时性**。HNSW 不擅长删除。常见做法是 tombstone 标记 + 定期 vacuum/重构，或者采用 LSM 式分段：新数据写入 mutable segment（内存或小图），满后冻结为 immutable segment 并建索引，查询时 merge 多段结果。Milvus 的 growing segment / sealed segment 就是这套机制。

**4. 分布式**。包括一致性哈希或范围分片、副本复制、Raft 主从、查询 scatter-gather 与各分片 top-k 归并。这里有个细节：各分片返回 top-k 后再全局归并，得到的并非全局精确 top-k，但在 ANN 语境下误差可接受。

**5. 持久化与容错**。日志追加、checkpoint、对象存储下沉冷数据、多租户隔离。云原生托管服务（Pinecone、Weaviate Cloud、Milvus Zilliz）的价值主要在此，而非算法本身。

### 七、评估指标（别只看 QPS）

- **Recall@k**：返回的 k 条中有多少在真实 top-k 内。生产环境一般要求 ≥0.9，金融/医疗场景要求更高。注意 recall@k 会随 k 增大而虚高，比较时需固定 k。
- **QPS / P99 延迟**：尤其关注尾部延迟，图搜索的长尾很明显。
- **索引构建时间与成本**：十亿级建索引可能要几十小时，涉及业务停机窗口。
- **内存占用**：HNSW 的内存往往是原始数据的数倍。
- **吞吐下的召回稳定性**：高并发时若降级策略不当，召回会崩塌。

建议使用标准数据集（SIFT1M、GIST1M、Deep1B）做基准测试，避免被厂商单点优化数据误导。

### 八、代表实现

| 类型 | 代表 | 特点 |
|---|---|---|
| 专用引擎 | Milvus、Qdrant、Weaviate、Vespa、Zilliz、Pinecone、LanceDB | 功能全、支持过滤/混合/分布式 |
| 库 | FAISS（Meta）、ScaNN（Google）、NGT、RAFT（NVIDIA） | 性能基座，需自建服务层 |
| 数据库插件 | **pgvector**（PostgreSQL）、Elasticsearch/OpenSearch kNN、ClickHouse、Redis Stack、MongoDB Atlas Vector Search | **运维统一，适合中小规模** |
| 文件格式 | Lance、HDF5、Parquet+embedding | 离线分析、湖仓一体 |

一个务实的建议：**数据量在千万级以下、团队已有 PostgreSQL 时，pgvector 通常是首选**。它支持 HNSW 与 IVFFlat，能和事务、权限、JOIN 共存，运维成本极低。只有当规模、QPS 或过滤复杂度超出其能力时，才值得引入专用引擎。

### 九、局限与常见坑

1. **维度灾难依然存在**。1024 维以上的 embedding，ANN 的收益会打折扣；而 128 维以下的 embedding，区分能力不足。不要盲目追求大维度。
2. **embedding 模型决定上限**。索引只是加速器，如果 embedding 本身把不同语义映射到一起，召回率再高也无济于事。领域数据最好微调或用领域模型。
3. **数据分布漂移需要重建**。IVF/PQ 的码本依赖训练集的统计特性。数据大规模更新后，量化误差会累积，应定期重训索引（HNSW 无此问题，因为它不需要训练）。
4. **PQ 的精度损失不可忽视**。压缩 32 倍时，top-1 精度可能掉几个点。对精度敏感的场景可用 SQ8 或半精度（fp16），或者只在底层用 PQ、上层重排时用原向量。
5. **过滤条件是隐形杀手**。前面提过，高选择性过滤会让 ANN 优势荡然无存。设计时要提前规划哪些字段需要标量索引。
6. **距离阈值不好定**。“相似度 > 0.85”这种硬阈值在不同 query 上含义不同，更好的做法是用相对排名或校准后的分数。
7. **多租户与隔离**。同一个索引里混放不同租户的数据，过滤成本会转嫁给所有人。规模上来后应按租户分片。
8. **安全与合规**。向量是不可逆的吗？不是。已有研究能从 embedding 反推原文片段。涉及个人信息时，向量同样属于敏感数据，需要加密与访问控制。

### 十、它在整个数据架构里的位置

向量数据库并没有取代关系型或非关系型数据库，而是成为**多模持久化中的又一专才**。典型的 RAG 架构大致如下：

```
PostgreSQL / MySQL  —— 交易与结构化事实（权威源）
Redis               —— 缓存、会话、限流
Elasticsearch       —— 关键词检索、日志
Vector DB           —— 语义召回
ClickHouse          —— 行为分析与埋点
Neo4j               —— 实体关系与权限链路
```

其中关键决策在于：**embedding 应该存在哪**。越来越多的系统选择“主库自带向量能力”（如 pgvector、MySQL HeatWave、SQL Server 向量），以避免数据同步带来的复杂性。反过来，向量数据库也在补回 SQL、事务与 ACID（如 Milvus 的 Hybrid Search、Weaviate 的聚合）。两者的边界正在模糊，正如当年 NoSQL 与 SQL 的演进轨迹。

未来的变量主要有三个：**GPU 原生检索**（让暴力扫描重新具备竞争力）、**端到端可微检索**（索引本身参与训练）、以及**多模态统一空间**（图文音视频共用一套索引）。

---

如果需要进一步探讨，可以深入了解以下方向之一：
- **RAG 场景下的完整链路**：从 chunking 策略、embedding 选型、混合检索到重排的调优方法。
- **HNSW 的参数调优与容量规划**：如何根据数据量和内存预算估算 M、efConstruction、efSearch。
- **动手搭建一个最小可用的向量检索服务**：对比 pgvector 与 FAISS 的实际差异。
