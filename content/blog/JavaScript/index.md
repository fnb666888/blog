---
title: "JavaScript基础知识"
description: "介绍JavaScript基础知识以及常用的浏览器调试代码"
summary: "介绍JavaScript基础知识以及常用的浏览器调试代码"
date: 2026-08-16
lastmod: 2026-08-16
draft: false
weight: 50
categories: ["基础知识"]
tags: ["JavaScript"]
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

JavaScript（简称 JS）是目前世界上最流行的编程语言之一，也是 Web 开发的三大核心技术之一（另外两个是 HTML 和 CSS）。它最初被设计用于浏览器端，实现网页的动态交互，但如今通过 Node.js 等技术，已经发展成为一门全栈语言。


### 1. JavaScript 是什么？
- **定义：** 一种轻量级、解释型或即时编译型的编程语言，具有函数优先的特性。
- **核心作用：** 让静态的网页“活”起来。例如：表单验证、动画效果、数据动态加载、单页应用（SPA）等。
- **运行环境：**
    - **浏览器端：** Chrome V8, Firefox SpiderMonkey 等引擎。
    - **服务端：** Node.js, Deno, Bun。
    - **其他：** 桌面应用 (Electron)、移动端 (React Native)、小程序等。

### 2. 核心基础知识体系

#### 📦 变量与数据类型
这是编程的基石。现代 JS 推荐使用 `let` 和 `const`，尽量避免使用 `var`（存在变量提升和作用域问题）。

- **原始类型 (Primitive):**
    - `Number`: 整数和浮点数（注意精度问题）。
    - `String`: 文本字符串。
    - `Boolean`: `true` / `false`。
    - `Undefined`: 声明了但未赋值。
    - `Null`: 表示“空”或“无”的对象引用。
    - `Symbol`: ES6 新增，表示独一无二的值。
    - `BigInt`: 表示任意精度的整数。
- **引用类型 (Reference):**
    - `Object`: 键值对集合。
    - `Array`: 有序列表。
    - `Function`: 函数也是对象。

#### ⚙️ 运算符与流程控制
- **比较运算符：** 强烈建议使用严格相等 `===` 和 `!==`，避免使用 `==`（会发生隐式类型转换，导致奇怪的结果）。
- **逻辑运算符：** `&&` (与), `||` (或), `!` (非)。ES2020 新增了 `??` (空值合并运算符) 和 `?.` (可选链操作符)，极大简化了判空代码。
- **循环与分支：** `if...else`, `switch`, `for`, `while`, `for...of` (遍历可迭代对象), `for...in` (遍历对象属性)。

#### 🔧 函数 (Functions)
JS 中函数是一等公民，可以赋值给变量、作为参数传递、作为返回值。

- **函数声明：** `function add(a, b) { return a + b; }`
- **函数表达式：** `const add = function(a, b) { ... };`
- **箭头函数 (ES6+)：** `const add = (a, b) => a + b;`
    - *重点：* 箭头函数没有自己的 `this`，它继承外层作用域的 `this`，这在回调函数中非常有用。
- **高阶函数：** 接受函数作为参数或返回函数的函数，如 `map`, `filter`, `reduce`。

#### 🎯 对象与原型链
JS 是基于原型的面向对象语言，而非基于类（尽管 ES6 引入了 `class` 语法糖）。

- **对象字面量：** `{ name: "Alice", age: 25 }`
- **原型链：** 每个对象都有一个内部链接指向另一个对象（原型），形成链条，直到 `null`。这是 JS 继承的基础机制。
- **ES6 Class：** 提供了更清晰的 OOP 语法，支持 `constructor`, `extends`, `super`, `static` 等，但底层仍然是原型链。

#### 🔄 异步编程 (重中之重)
JS 是单线程语言，通过事件循环处理并发。理解异步是掌握 JS 的关键。

1.  **回调函数：** 最原始的方式，容易导致“回调地狱”。
2.  **Promise：** 解决回调地狱，提供链式调用 `.then().catch()`。代表一个异步操作的最终完成或失败。
3.  **Async/Await：** ES2017 引入，基于 Promise 的语法糖，让异步代码看起来像同步代码一样直观易读。**目前的主流写法。**

#### 🌐 DOM 与 BOM (浏览器环境)
- **DOM:** 文档对象模型，JS 通过它操作网页元素（增删改查、样式修改、事件监听）。
- **BOM:** 浏览器对象模型，操作浏览器窗口本身（`window`, `location`, `history`, `localStorage` 等）。

### 3. 学习建议与路线图

1.  **打牢基础：** 不要急着学框架（Vue/React），先精通原生 JS（Vanilla JS），特别是闭包、原型链、异步机制和 ES6+ 新特性。
2.  **动手实践：** 尝试做一些小项目，如 Todo List、天气查询、计算器等。
3.  **理解原理：** 推荐阅读《JavaScript高级程序设计》（红宝书）或《你不知道的JavaScript》系列。
4.  **拥抱标准：** 关注 TC39 提案，了解 JS 的新特性演进方向。
5.  **工具链：** 熟悉 npm/yarn/pnpm 包管理，了解 Webpack/Vite 构建工具，以及 TypeScript（JS 的超集，提供静态类型检查，现代大型项目标配）。

> 💡 **提示：** JavaScript 是一门“易学难精”的语言。入门很简单，但要写出健壮、高性能、可维护的代码，需要深入理解其底层机制和设计哲学。保持好奇心，多读源码，多写代码，是进阶的不二法门。


---

### 1. 执行上下文与作用域链
这是 JS 代码运行的基石，不理解它就无法理解闭包和变量提升。

- **词法作用域：** JS 的作用域在**代码编写时**就确定了，而不是运行时。函数在哪里定义，就决定了它能访问哪些变量，与在哪里调用无关。
- **执行上下文：** 代码执行的环境，分为全局、函数、eval（不推荐）三种。每个上下文包含：
    - **变量环境：** `var` 声明和函数声明。
    - **词法环境：** `let/const` 声明、形参、arguments。
    - **this 绑定。**
- **变量提升：**
    - `var`：声明提升到当前作用域顶部，初始化为 `undefined`。
    - `let/const`：声明也提升，但进入**暂时性死区**，在赋值前访问会报错 `ReferenceError`。
    - `function`：整体提升（严格模式下块级作用域内除外）。
- **作用域链：** 当访问变量时，引擎从当前作用域开始查找，找不到则向上一级外层作用域查找，直到全局作用域。这个查找路径就是作用域链。

### 2. this 的绑定规则（最易混淆点）
`this` **永远不指向函数本身**，也**不一定指向定义时的对象**。它的值完全取决于**调用方式**。

| 调用方式 | this 指向 | 示例 |
| :--- | :--- | :--- |
| 默认绑定 | 非严格模式: `window/global`; 严格模式: `undefined` | `foo()` |
| 隐式绑定 | 调用该函数的直接对象 | `obj.foo()` → `obj` |
| 显式绑定 | `call/apply/bind` 指定的对象 | `foo.call(obj)` → `obj` |
| new 绑定 | 新创建的实例对象 | `new Foo()` → 新对象 |
| 箭头函数 | **无自己的 this**，继承外层词法作用域的 this | `(a) => this.x` |

> ⚠️ **经典陷阱：** 隐式绑定丢失。当把对象方法赋值给变量或作为回调传递时，`this` 会退化为默认绑定。解决方案：使用 `bind` 或箭头函数包裹。

### 3. 原型与继承的真相
ES6 的 `class` 只是语法糖，底层依然是原型链。

- **核心三角关系：**
    - `Constructor.prototype` → 构造函数的原型对象
    - `Object.__proto__` → 实例的原型指针（指向 `Constructor.prototype`）
    - `Constructor.prototype.constructor` → 指回构造函数自身
- **属性查找机制：** 访问 `obj.prop` 时，先在自身找；没有则沿 `__proto__` 向上找；直到 `null`。
- **hasOwnProperty vs in：**
    - `obj.hasOwnProperty('x')`: 仅检查自身。
    - `'x' in obj`: 检查自身 + 整个原型链。
- **继承的本质：** 子类的 `prototype.__proto__` 指向父类的 `prototype`。这就是为什么子类实例能调用父类方法。

### 4. 异步编程与事件循环
JS 单线程却能处理高并发，全靠 Event Loop。

- **调用栈：** 同步代码的执行场所，后进先出。
- **任务队列：**
    - **宏任务：** `setTimeout`, `setInterval`, I/O, UI rendering, `script` 标签。
    - **微任务：** `Promise.then/catch/finally`, `MutationObserver`, `queueMicrotask`。
- **Event Loop 流程：**
    1.  执行完当前调用栈所有同步代码。
    2.  **清空所有微任务队列**（按FIFO顺序，微任务中产生的新微任务也会在本轮执行）。
    3.  渲染更新（浏览器环境）。
    4.  取出一个宏任务执行。
    5.  重复步骤 1-4。

> 💡 **关键结论：** 微任务优先级高于宏任务。`Promise.then` 的回调总是在下一个 `setTimeout` 之前执行。

### 5. 闭包的本质与应用
闭包 = 函数 + 其词法环境的引用。

- **形成条件：** 内部函数引用了外部函数的变量，且内部函数在外部函数作用域之外被调用。
- **内存影响：** 闭包会阻止外部函数的变量环境被垃圾回收，可能导致内存泄漏。用完应手动解除引用。
- **核心应用：**
    - 数据私有化/模块化模式
    - 函数工厂
    - 柯里化与偏函数
    - React Hooks 的状态保存机制

### 6. 类型系统与隐式转换
JS 是弱类型语言，隐式转换是 bug 的重灾区。

- **ToPrimitive 算法：** 对象转原始值时，优先调用 `[Symbol.toPrimitive]`，然后 `valueOf()`，最后 `toString()`。日期对象例外，优先 `toString()`。
- **== 比较规则：**
    - 同类型：直接比较。
    - `null == undefined` → `true`（特例）。
    - 数字 vs 字符串：字符串转数字。
    - 布尔 vs 任意：布尔先转数字（`true→1`, `false→0`）。
    - 对象 vs 原始值：对象先 ToPrimitive。
- **安全实践：**
    - 始终使用 `===`。
    - 显式转换优于隐式：`Number()`, `String()`, `Boolean()`。
    - 警惕 `NaN !== NaN`，用 `Number.isNaN()` 判断。
    - 警惕 `typeof null === 'object'`（历史遗留 bug）。


### ✅ 自测清单
如果你能清晰解释以下问题，说明基础已经扎实：
1.  `var a = {n: 1}; var b = a; a.x = a = {n: 2}; console.log(a.x, b.x);` 输出什么？为什么？
2.  `for(var i=0; i<5; i++) setTimeout(()=>console.log(i), 0)` 输出什么？如何用三种方式修复？
3.  `new` 操作符具体做了哪几步？手写一个 `myNew` 实现。
4.  Promise A+ 规范的核心要求是什么？手写一个符合规范的 Promise。
5.  解释 V8 引擎的标记-清除垃圾回收算法及新生代/老生代分代策略。


---

浏览器开发者工具（DevTools）的 Console 不仅仅是 `console.log` 的输出窗口，它本身就是一个强大的**交互式调试 REPL 环境**。掌握以下命令和技巧，可以大幅提升调试效率。

### 1. 增强型日志输出
告别满屏的 `console.log`，使用更语义化的方法：

| 方法 | 用途 | 示例 |
| :--- | :--- | :--- |
| `console.table()` | 以表格形式展示数组/对象 | `console.table(users)` |
| `console.group()` / `groupEnd()` | 将日志分组折叠 | 嵌套逻辑调试 |
| `console.time()` / `timeEnd()` | 测量代码执行耗时 | `console.time('fetch'); ...; console.timeEnd('fetch')` |
| `console.count()` | 统计调用次数 | 循环/回调触发频率 |
| `console.trace()` | 打印完整调用栈 | 追踪函数是谁调用的 |
| `console.assert()` | 条件为 false 时才输出 | `assert(user.id, 'User must have id')` |
| `console.dir()` | 以可交互树形显示对象属性 | 查看 DOM 节点原始属性 |

> 💡 **高级格式化：** `console.log` 支持占位符：`%s`(字符串), `%d`(数字), `%o`(对象), `%c`(CSS样式)。
> 例如：`console.log('%c Error ', 'background:red;color:white', errorMsg)`

### 2. Console 内置快捷命令
这些是 DevTools 专属的全局函数，**仅在控制台可用**，不会污染你的业务代码：

-   **`$(selector)`**：等价于 `document.querySelector(selector)`，返回第一个匹配元素。
-   **`$$(selector)`**：等价于 `document.querySelectorAll(selector)`，返回数组（可直接 `.map/.filter`）。
-   **`$0` ~ `$4`**：引用你在 Elements 面板中**最近选中的 5 个 DOM 节点**。`$0` 是当前选中项。
-   **`copy(value)`**：将任意值序列化后复制到剪贴板。调试时提取数据的神器。
    ```js
    copy(document.querySelectorAll('a[href]')) // 复制所有链接
    copy({name: 'test', data: [1,2,3]})        // 复制JSON
    ```
-   **`inspect(object)`**：在 Elements/Network 等面板中定位并高亮该对象。
-   **`getEventListeners(element)`**：获取绑定在元素上的所有事件监听器（含来源文件和行号）。排查事件冲突必备。
-   **`monitorEvents(element, eventType?)`** / **`unmonitorEvents()`**：实时监控元素上触发的事件并打印到控制台。
    ```js
    monitorEvents($0, ['click', 'input']) // 监控当前选中元素的点击和输入
    ```
-   **`queryObjects(Constructor)`**：查找内存中由指定构造函数创建的所有存活实例。用于排查内存泄漏。
    ```js
    queryObjects(Promise) // 找出所有未GC的Promise实例
    ```

### 3. 网络与存储调试

-   **拦截/修改请求：** 在 Network 面板右键请求 → "Copy as fetch"，粘贴到 Console 修改参数重发。
-   **`fetch` 直接调试：** Console 中可直接发请求测试 API：
    ```js
    const res = await fetch('/api/user', {headers: {'X-Token': 'xxx'}});
    const data = await res.json();
    console.table(data);
    ```
-   **存储操作：**
    - `localStorage` / `sessionStorage`：直接当作对象读写。
    - `cookieStore.get()` / `.set()` / `.delete()`：现代异步 Cookie API（比 `document.cookie` 好用得多）。
-   **清除存储：** Application 面板 → Storage → Clear site data；或 Console 中输入 `localStorage.clear()`。

### 4. 性能分析命令

-   **`performance.mark(name)` / `measure(name, start, end)`**：在代码中打点，Performance 面板可视化查看。
-   **`profile()` / `profileEnd()`**：编程式启动/停止 CPU Profiling（等同于点击 Performance 面板的录制按钮）。
-   **`debug(fn)`**：当指定函数被调用时自动断点。比手动找源码打断点快得多。
    ```js
    debug(app.render) // render被调用时自动暂停
    undebug(app.render) // 取消
    ```
-   **`monitor(fn)`**：函数被调用时打印参数和返回值（不中断执行）。

### 5. 实用调试技巧

-   **条件断点：** 在 Sources 面板行号右键 → "Add conditional breakpoint"，输入表达式（如 `user.id === 123`），仅条件为真时暂停。避免在循环中疯狂按继续。
-   **DOM 断点：** Elements 面板右键元素 → "Break on" → subtree modifications / attribute modifications / node removal。DOM 被意外修改时自动暂停。
-   **XHR/Fetch 断点：** Sources → XHR/fetch Breakpoints → 添加 URL 关键字。匹配的请求发出时自动暂停。
-   **实时编辑：** Sources 面板可直接编辑 JS/CSS，Ctrl+S 保存后立即生效（刷新丢失）。配合 Local Overrides 可持久化修改。
-   **Snippet：** Sources → Snippets 标签页，可保存常用调试脚本，跨页面复用，不随刷新丢失。

### ⚠️ 安全警告
-   **永远不要在生产环境的 Console 中粘贴来路不明的代码！** 攻击者常诱导用户粘贴恶意脚本窃取 Cookie/Token（Self-XSS）。
-   Chrome 已内置防护：首次打开 DevTools 时会显示反诈骗警告，需手动输入确认才能执行粘贴的代码。
- 调试完成后及时清理 `debug()`、`monitor()`、`monitorEvents()` 等注入的钩子。

### 📌 速查记忆口诀
> **选元素用 `$0`，拷数据用 `copy`；**
> **查事件 `getEventListeners`，测耗时 `time/timeEnd`；**
> **自动断点 `debug(fn)`，表格展示 `table`；**
> **条件断点省时间，DOM 断点抓篡改。**

建议打开任意网站，在 Console 中逐一实操以上命令，形成肌肉记忆。熟练后调试效率可提升数倍。
