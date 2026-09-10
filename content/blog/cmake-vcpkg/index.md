---
title: "Cmake和vcpkg基础知识"
description: "介绍使用Cmake和vcpkg进行开发的基础知识"
summary: "介绍使用Cmake和vcpkg进行开发的基础知识"
date: 2026-08-25
lastmod: 2026-08-25
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

## 一、CMake：跨平台构建系统生成器

### 1. CMake 是什么？
CMake **不是**编译器，也**不是**构建工具（如 Make/Ninja）。它是一个 **构建系统生成器**：
- 你编写平台无关的 `CMakeLists.txt`
- CMake 根据目标平台生成对应的构建文件（Windows 上生成 `.sln`/Ninja，Linux 上生成 Makefile/Ninja）
- 再由原生构建工具完成实际编译

```
CMakeLists.txt → CMake → Ninja/Makefile/VS Solution → 编译器 → 可执行文件
```

### 2. 核心特点

| 特点 | 说明 |
| :--- | :--- |
| **跨平台** | 同一份 CMakeLists.txt 可在 Windows/Linux/macOS/Android/iOS 上构建 |
| **语言无关** | 支持 C, C++, Fortran, CUDA, Objective-C 等 |
| **依赖管理** | 内置 `find_package()` 机制查找系统/第三方库 |
| **IDE 集成** | VS Code, CLion, Visual Studio, Qt Creator 均原生支持 |
| **模块化** | 通过 Module/Config 模式扩展查找逻辑 |
| **测试/打包** | 内置 CTest（测试）、CPack（安装包生成） |
| **Presets** | CMakePresets.json 统一配置多环境构建参数 |

### 3. 核心语法速查

#### 最小项目
```cmake
cmake_minimum_required(VERSION 3.20)
project(my_app VERSION 1.0.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(my_app src/main.cpp src/utils.cpp)
```

#### 链接库
```cmake
# 查找库
find_package(fmt CONFIG REQUIRED)
find_package(OpenCV CONFIG REQUIRED)

# 链接（推荐 target 级别，避免全局污染）
target_link_libraries(my_app PRIVATE
    fmt::fmt
    opencv_core
    opencv_imgproc
)
```

#### 子目录组织
```cmake
add_subdirectory(src/core)     # 子目录有自己的 CMakeLists.txt
add_subdirectory(src/network)
add_subdirectory(tests)
```

#### 条件编译
```cmake
if(WIN32)
    target_compile_definitions(my_app PRIVATE PLATFORM_WINDOWS)
elseif(UNIX)
    target_compile_definitions(my_app PRIVATE PLATFORM_LINUX)
endif()
```

### 4. Modern CMake 核心原则
> ⚠️ **最重要的一条**：一切以 **Target** 为中心，避免使用全局命令

| ❌ 旧式（避免） | ✅ 现代（推荐） |
| :--- | :--- |
| `include_directories(...)` | `target_include_directories(my_app ...)` |
| `link_libraries(...)` | `target_link_libraries(my_app ...)` |
| `add_definitions(...)` | `target_compile_definitions(my_app ...)` |
| `set(CMAKE_CXX_FLAGS ...)` | `target_compile_options(my_app ...)` |

**原因**：Target 级别的属性具有传播性（`PRIVATE/PUBLIC/INTERFACE`），不会污染其他目标，支持多目标共存。

### 5. 常用命令行
```bash
# 配置（生成构建系统）
cmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE=Release

# 构建
cmake --build build --config Release -j8

# 安装
cmake --install build --prefix ./install

# 运行测试
ctest --test-dir build --output-on-failure

# 清理缓存重新配置
rm -rf build && cmake -S . -B build
```

---

## 二、vcpkg：微软官方 C/C++ 包管理器

### 1. vcpkg 是什么？
vcpkg 是一个 **源码级包管理器**：
- 从源码编译第三方库（保证与你的编译器/运行时一致）
- 自动处理依赖关系
- 与 CMake 无缝集成（通过 toolchain file）
- 支持 Windows / Linux / macOS

### 2. 核心特点

| 特点 | 说明 |
| :--- | :--- |
| **源码编译** | 不下载预编译二进制，避免 ABI 不兼容问题 |
| **Triplet 机制** | 精确控制目标架构：`x64-windows`, `x64-linux`, `arm64-android` 等 |
| **Manifest Mode** | 项目级 `vcpkg.json`，依赖版本锁定，可复现构建 |
| **Classic Mode** | 全局安装，适合快速原型验证 |
| **CMake 原生集成** | 设置 toolchain file 后 `find_package()` 自动生效 |
| **丰富的生态** | 2000+ 开源库，社区活跃维护 |
| **Binary Caching** | 编译过一次后缓存二进制，后续安装秒级完成 |
| **Overlay Ports** | 自定义/修改 port，满足特殊需求 |

### 3. 两种使用模式对比

| | Classic Mode | Manifest Mode ✅推荐 |
|---|---|---|
| 依赖声明 | `vcpkg install xxx` 命令行 | 项目根目录 `vcpkg.json` |
| 作用域 | 全局共享 | 项目隔离 |
| 版本控制 | 手动管理 | 可指定版本/baseline |
| 团队协作 | ❌ 不可复现 | ✅ 完全可复现 |
| CI/CD | 困难 | 天然支持 |
| 适用场景 | 学习、临时实验 | 正式项目 |

### 4. Manifest Mode 完整用法

#### vcpkg.json
```json
{
  "name": "my-project",
  "version-semver": "1.0.0",
  "builtin-baseline": "a1b2c3d4e5f6...",
  "dependencies": [
    { "name": "fmt", "version>=": "10.2.1" },
    { "name": "spdlog", "version>=": "1.13.0" },
    {
      "name": "opencv",
      "default-features": false,
      "features": ["jpeg", "png"]
    },
    {
      "name": "boost-asio",
      "platform": "!uwp"
    }
  ],
  "overrides": [
    { "name": "nlohmann-json", "version": "3.11.3" }
  ]
}
```

关键字段说明：
-   **`builtin-baseline`**: vcpkg 仓库的 git commit hash，锁定所有未显式指定版本的依赖版本
-   **`version>=`**: 最低版本约束
-   **`features`**: 启用库的可选功能
-   **`platform`**: 条件依赖（`!uwp` = 非 UWP 平台才安装）
-   **`overrides`**: 强制指定某个依赖的确切版本

#### CMakeLists.txt 中使用
```cmake
# 只需正常 find_package，vcpkg toolchain 会自动处理
find_package(fmt CONFIG REQUIRED)
find_package(spdlog CONFIG REQUIRED)
find_package(OpenCV CONFIG REQUIRED COMPONENTS jpeg png)

target_link_libraries(my_app PRIVATE
    fmt::fmt
    spdlog::spdlog
    opencv_core opencv_imgcodecs
)
```

### 5. 常用命令
```bash
# 搜索可用库
vcpkg search json

# 查看库的详细信息（含可用 features）
vcpkg show nlohmann-json

# Classic Mode 安装
vcpkg install fmt:x64-windows spdlog:x64-windows-static

# 更新 baseline（获取最新库版本）
cd vcpkg && git pull
vcpkg x-update-baseline --add-initial-baseline

# 导出已安装列表
vcpkg list

# 清理不再需要的包
vcpkg remove --outdated
```

### 6. Triplet 常见选项
| Triplet | 说明 |
| :--- | :--- |
| `x64-windows` | Windows x64, 动态链接 CRT |
| `x64-windows-static` | Windows x64, 静态链接 CRT + 库 |
| `x64-mingw-dynamic` | MinGW GCC, 动态链接 |
| `x64-linux` | Linux x64 |
| `arm64-osx` | Apple Silicon macOS |
| `x64-android` | Android NDK x64 |

---

## 三、CMake + vcpkg 协作流程

```
┌─────────────────────────────────────────────┐
│              开发者工作流                      │
│                                             │
│  1. 编写 vcpkg.json (声明依赖)               │
│           ↓                                 │
│  2. 编写 CMakeLists.txt (find_package)       │
│           ↓                                 │
│  3. cmake configure (自动触发 vcpkg 安装)     │
│           ↓                                 │
│  4. cmake build (编译项目+依赖)               │
│           ↓                                 │
│  5. ctest (运行测试)                          │
└─────────────────────────────────────────────┘
```

**关键点**：配置阶段 CMake 通过 `-DCMAKE_TOOLCHAIN_FILE=vcpkg.cmake` 将 vcpkg 注入整个构建流程，`find_package()` 会优先在 vcpkg 安装目录中查找，无需手动指定路径。

---

## 四、选型建议

| 场景 | 建议 |
| :--- | :--- |
| 新项目 | CMake + vcpkg Manifest Mode |
| 已有 Makefile 老项目 | 逐步迁移到 CMake，或先用 vcpkg Classic Mode |
| 纯 Windows + VS IDE | 可用 NuGet/vcpkg，但 CMake 更利于未来跨平台 |
| 嵌入式/交叉编译 | CMake + vcpkg 自定义 triplet |
| 需要极致构建速度 | 考虑 Conan（有预编译二进制），但 vcpkg binary caching 也已大幅改善 |
| 团队统一工具链 | CMakePresets.json + vcpkg manifest + CI 自动化 |

这套组合是目前 C++ 生态中**标准化程度最高、文档最全、IDE 支持最好**的方案，掌握后可以显著降低 C++ 项目的依赖管理和跨平台构建痛苦。
