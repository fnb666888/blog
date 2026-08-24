---
title: "C++ 基础知识"
description: "介绍使用 C++ 进行开发的基础知识"
summary: "介绍使用 C++ 进行开发的基础知识"
date: 2026-08-24
lastmod: 2026-08-24
draft: false
weight: 50
categories: ["基础知识"]
tags: ["C++"]
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


### 一、 C++ 核心基础知识体系

现代 C++（C++11/14/17/20/23）与老旧的 "C with Classes" 风格有本质区别。学习时应以 **现代 C++** 为核心。

#### 1. 语言核心机制
-   **类型系统**：理解值类型 vs 引用类型、`const` 正确性、`auto` 类型推导、`decltype`。
-   **内存模型**：栈 vs 堆、RAII（资源获取即初始化）是 C++ 的灵魂。理解对象生命周期、析构函数、移动语义（Move Semantics）和右值引用（`&&`）。
-   **智能指针**：**彻底摒弃裸 `new/delete`**。熟练掌握 `std::unique_ptr`（独占所有权）、`std::shared_ptr`（共享所有权+引用计数）、`std::weak_ptr`（解决循环引用）。
-   **STL 容器与算法**：`std::vector`, `std::unordered_map`, `std::string` 等容器的性能特征；`<algorithm>` 中的 `sort`, `find_if`, `transform` 等泛型算法。
-   **模板与泛型编程**：函数模板、类模板、SFINAE、Concepts（C++20）、可变参数模板。这是 C++ 库开发的基石。
-   **并发编程**：`std::thread`, `std::mutex`, `std::atomic`, `std::future/promise`，以及 C++20 协程（Coroutines）。

#### 2. 必须掌握的现代特性
| 标准 | 关键特性 | 意义 |
| :--- | :--- | :--- |
| C++11 | auto, lambda, smart ptr, move semantics, range-for | 现代 C++ 的起点 |
| C++14 | generic lambda, constexpr 扩展 | 编译期计算增强 |
| C++17 | structured bindings, optional/variant, filesystem, if constexpr | 代码简洁度大幅提升 |
| C++20 | **Concepts**, Ranges, Coroutines, Modules, Three-way comparison | 革命性更新 |
| C++23 | std::print, expected, deducing this | 持续现代化 |

#### 3. 工程素养
-   **Undefined Behavior (UB)**：理解什么是 UB，如何避免（越界、悬垂指针、数据竞争等）。
-   **ABI 兼容性**：理解头文件/源文件分离、链接过程、符号导出/导入。
-   **调试能力**：GDB/LLDB/MSVC Debugger、Valgrind/ASan/TSan/UBSan 等 sanitizer 工具。

---

### 二、 现代 C++ 开发工具链详解

C++ 没有像 Java/Maven 或 Rust/Cargo 那样统一的标准工具链，因此需要自己组装。以下是当前业界主流选择：

#### 1. 编译器
| 编译器 | 平台 | 特点 |
| :--- | :--- | :--- |
| **GCC** | Linux/跨平台 | 老牌稳定，优化好，C++ 标准支持快 |
| **Clang/LLVM** | macOS/Linux/跨平台 | 错误信息友好，编译速度快，工具链完善（clangd, clang-tidy） |
| **MSVC** | Windows | Visual Studio 集成最佳，Windows API 支持完整 |

> 💡 **建议**：Linux/macOS 首选 Clang，Windows 用 MSVC，服务器部署用 GCC。使用 `-Wall -Wextra -Wpedantic -Werror` 开启严格警告。

#### 2. 构建系统
这是 C++ 工程化的核心痛点，以下是主流方案对比：

| 工具 | 定位 | 优点 | 缺点 |
| :--- | :--- | :--- | :--- |
| **CMake** | 事实标准 | 生态最大，几乎所有库都支持，IDE 集成好 | 语法古老，学习曲线陡 |
| **Meson** | 现代替代 | 语法简洁（Python-like），构建极快 | 生态不如 CMake |
| **Bazel** | 大规模工程 | Google 出品，增量构建快，多语言支持 | 配置复杂，小项目过重 |
| **xmake** | 国产新秀 | Lua 语法，内置包管理，开箱即用 | 生态仍在成长 |
| **Premake** | 轻量级 | Lua 配置，生成 IDE 工程文件 | 社区较小 |

> 🏆 **推荐**：**新手和项目通用选 CMake**。它是行业标配，招聘要求中也最常见。掌握 `target-based` 现代 CMake 写法（`target_link_libraries`, `target_include_directories`），避免老式全局变量写法。

#### 3. 包管理器
C++ 包管理长期缺失，近年终于成熟：

| 包管理器 | 模式 | 特点 |
| :--- | :--- | :--- |
| **vcpkg** | 源码编译为主 | 微软维护，库最全（2000+），与 CMake/MSBuild 无缝集成，manifest 模式支持项目级依赖 |
| **Conan** | 二进制+源码 | 去中心化，私有仓库支持好，企业级场景强 |
| **Homebrew/apt** | 系统级 | 仅适合安装系统工具库，不适合项目依赖管理 |
| **CPM.cmake** | 纯 CMake | 无需额外安装，直接从 Git 拉取源码构建，零配置 |

> 🏆 **推荐**：个人/开源项目用 **vcpkg**（manifest 模式）；企业内网/需要二进制缓存用 **Conan**；极简项目用 **CPM.cmake**。

#### 4. IDE / 编辑器
-   **Visual Studio 2022**：Windows 下最强 C++ IDE，调试器顶级，IntelliSense 优秀。
-   **CLion**：JetBrains 出品，跨平台，CMake 原生支持，重构能力强，付费。
-   **VS Code + clangd**：轻量免费，clangd 提供极速补全和诊断，配合 CMake Tools 插件体验极佳。**目前最流行的组合之一**。
-   **Neovim + LSP**：终端党首选，配置门槛高但效率天花板也高。

#### 5. 代码质量与静态分析
-   **clang-tidy**：最重要的 C++ linter，检查现代 C++ 最佳实践、bug、性能问题。务必集成到 CI。
-   **cppcheck**：轻量级静态分析。
-   **clang-format**：统一代码格式，配合 `.clang-format` 配置文件和 git pre-commit hook。
-   **Include-What-You-Use (IWYU)**：清理多余头文件，加速编译。
-   **Sanitizers**：AddressSanitizer (内存), ThreadSanitizer (数据竞争), UndefinedBehaviorSanitizer。**开发阶段必开**。

#### 6. 测试框架
-   **Google Test (GTest)**：业界标准，功能全面，断言丰富。
-   **Catch2**：header-only，BDD 风格，轻量优雅。
-   **doctest**：编译最快，可嵌入生产代码做单元测试。

#### 7. 文档生成
-   **Doxygen**：传统选择，从注释生成 API 文档。
-   **MkDocs + Material** + Doxygen：现代文档站点方案，美观且易维护。

---

### 三、 推荐的入门项目工具链组合

对于一个新开始的 C++ 项目，推荐以下 **"黄金组合"**：

```
编译器:     Clang (开发) / GCC (生产)
构建系统:   CMake (3.20+, Modern CMake)
包管理:     vcpkg (manifest mode)
IDE:        VS Code + clangd + CMake Tools
格式化:     clang-format + pre-commit hook
静态分析:   clang-tidy
测试:       Google Test
CI:         GitHub Actions (矩阵测试 GCC/Clang/MSVC)
Sanitizer:  ASan + UBSan (Debug 构建默认开启)
```


---

### 一、 基本数据类型与变量

#### 1. 内置类型
```cpp
// 整型
int, short, long, long long          // 有符号
unsigned int, uint32_t, size_t       // 无符号（推荐用 <cstdint> 固定宽度类型）

// 浮点
float, double, long double

// 字符与布尔
char, wchar_t, char8_t(C++20), char16_t, char32_t
bool                                 // true / false

// 空类型
void                                 // 无返回值/无类型
std::nullptr_t                       // nullptr 的类型（C++11）
```

#### 2. 变量声明与初始化
```cpp
int a = 42;              // 拷贝初始化
int b(42);               // 直接初始化
int c{42};               // 列表初始化（C++11，推荐，防止窄化转换）
auto d = 42;             // 类型推导（C++11）
const int e = 100;       // 常量
constexpr int f = 200;   // 编译期常量（C++11）
constinit int g = 300;   // 编译期初始化（C++20，解决静态初始化顺序问题）
```

> ⚠️ **关键原则**：优先使用 `{}` 列表初始化；优先使用 `auto` 避免冗长类型；区分 `const`（运行时常量）与 `constexpr`（编译期常量）。

---

### 二、 运算符与表达式

| 类别 | 示例 | 注意事项 |
| :--- | :--- | :--- |
| 算术 | `+ - * / %` | 整数除法截断，注意溢出 |
| 比较 | `== != < > <= >=` | C++20 三路比较 `<=>` |
| 逻辑 | `&& \|\| !` | 短路求值 |
| 位运算 | `& \| ^ ~ << >>` | 注意符号位 |
| 赋值 | `= += -= *= ...` | 复合赋值 |
| 成员访问 | `. -> .* ->*` | 指针用 `->` |
| 条件 | `? :` | 三元运算符 |
| sizeof | `sizeof(x)` | 返回字节数，编译期确定 |

#### C++20 三路比较
```cpp
struct Point {
    int x, y;
    auto operator<=>(const Point&) const = default; // 自动生成所有比较运算符
};
```

---

### 三、 控制流

```cpp
// if-else（C++17 支持初始化语句）
if (auto it = map.find(key); it != map.end()) {
    use(it->second);
}

// switch（C++17 同样支持初始化语句）
switch (auto val = get_value(); val) { ... }

// range-for（C++11，最常用遍历方式）
for (const auto& item : container) { ... }

// 传统 for / while / do-while
// break, continue, return
```

> 💡 **现代实践**：90% 的循环应使用 range-for；避免裸 `for(int i=0;...)`，除非需要索引或特殊步进。

---

### 四、 函数

#### 1. 基本语法
```cpp
// 普通函数
int add(int a, int b) { return a + b; }

// 默认参数
void log(const std::string& msg, int level = 0);

// 重载
void print(int);
void print(const std::string&);

// 内联（建议由编译器决定，显式 inline 仅用于头文件定义）
inline int square(int x) { return x * x; }
```

#### 2. 现代函数特性
```cpp
// constexpr 函数（C++11/14/17/20 逐步放宽限制）
constexpr int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Lambda 表达式（C++11，极其重要）
auto greet = [](const std::string& name) -> std::string {
    return "Hello, " + name;
};

// 捕获列表：[=] 值捕获, [&] 引用捕获, [x, &y] 混合, [*this] C++17
// C++20 模板 lambda
auto add = []<typename T>(T a, T b) { return a + b; };

// C++23 递归 lambda（deducing this）
auto fib = [](this auto self, int n) -> int {
    return n <= 1 ? n : self(n-1) + self(n-2);
};
```

#### 3. 参数传递规则
| 场景 | 推荐方式 | 原因 |
| :--- | :--- | :--- |
| 只读大对象 | `const T&` | 避免拷贝 |
| 小对象（≤2个指针大小） | `T`（值传递） | 寄存器传递更高效 |
| 需要所有权转移 | `T&&` 或 `std::unique_ptr<T>` | 移动语义 |
| 可选参数 | `std::optional<T>` | 比指针/哨兵值安全 |
| 输出参数 | `T&` 或返回结构体 | 优先用返回值 |

---

### 五、 类与面向对象

#### 1. 基础结构
```cpp
class Widget {
public:
    Widget(int id);                    // 构造函数
    ~Widget();                         // 析构函数
    Widget(const Widget&);             // 拷贝构造
    Widget& operator=(const Widget&);  // 拷贝赋值
    Widget(Widget&&) noexcept;         // 移动构造（C++11）
    Widget& operator=(Widget&&) noexcept; // 移动赋值（C++11）

    void do_work() const;              // const 成员函数
    static Widget create();            // 静态工厂方法

private:
    int id_;
    std::string name_;
};
```

#### 2. Rule of Five / Zero
- **Rule of Zero**：如果类不需要自定义资源管理，**不要写任何**构造/析构/拷贝/移动函数。让编译器生成。
- **Rule of Five**：如果定义了析构、拷贝构造、拷贝赋值中的任何一个，通常需要定义全部五个。
- **`= default` / `= delete`**：显式控制特殊成员函数的生成与禁用。

#### 3. 继承与多态
```cpp
class Shape {
public:
    virtual ~Shape() = default;           // 虚析构（多态基类必须有）
    virtual double area() const = 0;      // 纯虚函数 → 抽象类
    virtual std::string name() const;     // 虚函数
};

class Circle : public Shape {
public:
    double area() const override;         // override 关键字（C++11，必加）
    std::string name() const final;       // final 禁止进一步重写
};
```

> ⚠️ **现代 OOP 建议**：优先组合而非继承；接口用纯虚类；避免深层继承树；考虑 `std::variant` + `std::visit` 作为多态替代方案。

---

### 六、 模板与泛型

```cpp
// 函数模板
template<typename T>
T max(T a, T b) { return (a > b) ? a : b; }

// 类模板
template<typename T, size_t N>
class Array {
    T data_[N];
public:
    constexpr size_t size() const { return N; }
};

// C++20 Concepts（约束模板参数）
template<std::integral T>        // 仅接受整数类型
T gcd(T a, T b);

template<typename T>
concept Printable = requires(T t) {
    { std::cout << t } -> std::same_as<std::ostream&>;
};
```

> 💡 Concepts 是 C++20 最重要的特性之一，它让模板错误信息从"天书"变为可读的诊断。

---

### 七、 内存管理与智能指针

```cpp
#include <memory>

// ✅ 独占所有权
auto ptr = std::make_unique<Widget>(42);

// ✅ 共享所有权
auto shared = std::make_shared<Widget>(42);
std::weak_ptr<Widget> weak = shared;  // 观察，不增加引用计数

// ❌ 永远不要这样
Widget* raw = new Widget(42);
delete raw;  // 容易泄漏、异常不安全
```

> 🚫 **铁律**：业务代码中不应出现裸 `new/delete`。工厂函数用 `make_unique/make_shared`。

---

### 八、 STL 核心组件速览

| 类别 | 常用组件 | 备注 |
| :--- | :--- | :--- |
| 容器 | `vector`, `array`, `deque`, `list`, `unordered_map/set`, `map/set` | 默认选 `vector` |
| 字符串 | `std::string`, `std::string_view`(C++17) | `string_view` 零拷贝只读 |
| 算法 | `sort`, `find_if`, `transform`, `accumulate`, `ranges::*(C++20)` | 配合迭代器/lambda |
| 工具 | `pair`, `tuple`, `optional`, `variant`, `any` | 替代部分继承场景 |
| IO | `iostream`, `fstream`, `sstream`, `print`(C++23) | C++23 `std::print` 取代 printf/cout |

---

### 九、 异常与安全

```cpp
try {
    throw std::runtime_error("something went wrong");
} catch (const std::exception& e) {   // 始终按 const 引用捕获
    std::cerr << e.what() << '\n';
}

// noexcept 标记不抛异常的函数（启用移动语义优化）
Widget(Widget&&) noexcept;
```

> ⚠️ **争议话题**：高性能/嵌入式项目常禁用异常（`-fno-exceptions`），改用错误码或 `std::expected`(C++23)。了解两种范式都很重要。

---

### 十、 学习优先级建议

| 阶段 | 重点语法 | 可暂缓 |
| :--- | :--- | :--- |
| **入门** | 变量、函数、类基础、vector/string、range-for、智能指针 | 模板元编程、多重继承、union |
| **进阶** | Lambda、move semantics、RAII、STL算法、const正确性 | 自定义allocator、placement new |
| **现代** | Concepts、Ranges、coroutines、modules、constexpr everything | 兼容C++03的旧写法 |
| **工程** | 编译链接原理、ABI、sanitizers、性能分析 | 语言律师级细节 |

