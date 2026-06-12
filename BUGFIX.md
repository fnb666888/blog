# Bug 修复记录 — 2026-06-12

## 修复的问题

### 1. 生产环境进度条渐变不显示
**现象：**
- 开发环境（`npm run dev`）：进度条正常显示渐变效果
- 生产环境（`npm run build`）：进度条完全不显示

**根本原因：**
PurgeCSS 在生产构建时扫描 `hugo_stats.json`，删除了所有"未使用"的 CSS 类。`.read-progress` 类是由 `assets/js/custom.js` 中的 `initProgress()` 函数动态创建的，不在 HTML 源码中，因此被误删。

**修复方法：**
在 `config/postcss.config.js` 的 `safelist` 数组中添加 `'read-progress'`。

### 2. 移动端导航栏显示空白
**现象：**
- 桌面端：导航栏正常显示所有菜单项
- 移动端：只显示品牌名"Fengnb"，点击侧边栏按钮后弹出的菜单是空白

**根本原因：**
Bootstrap 的 offcanvas 组件相关样式被 PurgeCSS 删除。虽然 HTML 中包含 `.offcanvas`, `.offcanvas-body`, `.offcanvas-header` 等类，但 PurgeCSS 配置中只保护了 `offcanvas-backdrop`，其他 offcanvas 类被删除，导致移动端侧边栏菜单无样式。

**修复方法：**
在 `config/postcss.config.js` 的 `safelist` 数组中添加：
- `'offcanvas'`
- `'offcanvas-body'`
- `'offcanvas-end'`
- `'offcanvas-header'`
- `'offcanvas-title'`
- `'offcanvas-start'`

## 修改的文件

### config/postcss.config.js
```diff
     safelist: [
         'active',
         'btn-clipboard', // clipboards.js
         'clipboard', // clipboards.js
         'disabled',
         'hidden',
         'modal-backdrop', // search-modal.js
         'selected', // search-modal.js
         'show',
         'img-fluid',
         'blur-up',
         'lazyload',
         'lazyloaded',
         'alert-link',
         'container-fw ',
         'container-lg',
         'container-fluid',
         'offcanvas-backdrop',
+        'offcanvas', // Bootstrap offcanvas base class
+        'offcanvas-body',
+        'offcanvas-end',
+        'offcanvas-header',
+        'offcanvas-title',
+        'offcanvas-start', // in case used elsewhere
         'figcaption',
         'dt',
         'dd',
         'showing',
         'hiding',
         'page-item',
         'page-link',
         'not-content',
         'copy',
-        'btn-copy'
+        'btn-copy',
+        'read-progress' // custom.js dynamically creates this element
     ]
```

## 验证步骤

1. **构建生产版本：**
   ```bash
   npm run build
   ```

2. **预览生产版本：**
   ```bash
   npm run preview
   ```

3. **测试进度条：**
   - 打开任意博客文章页面
   - 滚动页面，顶部应显示蓝色渐变进度条

4. **测试移动端导航：**
   - 将浏览器窗口缩小到移动端宽度（< 992px）
   - 点击右上角的"三横线"菜单按钮
   - 侧边栏应滑出并显示完整菜单：Blog, Categories, Tags, About

## 技术细节

### PurgeCSS 工作原理
1. Hugo 构建时生成 `hugo_stats.json`，记录所有 HTML 中使用的标签、类名、ID
2. PostCSS 处理 CSS 时，PurgeCSS 读取 `hugo_stats.json`
3. 仅保留在 `hugo_stats.json` 或 `safelist` 中的 CSS 类
4. 删除所有其他 CSS 规则（减小文件大小）

### 为什么开发环境正常？
`postcss.config.js` 第57行：
```javascript
plugins: [autoprefixer(), ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])]
```

PurgeCSS **仅在生产环境**（`HUGO_ENVIRONMENT=production`）启用。开发环境（`npm run dev`）不运行 PurgeCSS，所以所有 CSS 都保留。

### 类似问题的识别方法
如果生产环境某个功能不工作，但开发环境正常：
1. 检查该功能是否使用了 JavaScript 动态创建的 DOM 元素
2. 检查该功能的 CSS 类是否在 HTML 源码中（构建后的 `public/` 目录）
3. 检查 `config/postcss.config.js` 的 `safelist` 是否包含这些类

### 预防措施
在 `safelist` 中添加注释说明每个类的来源（如 `// clipboards.js`, `// custom.js`），方便未来维护。

## 相关文件
- `assets/js/custom.js` - 创建 read-progress 元素的脚本
- `assets/scss/common/_custom.scss` - 定义 .read-progress 样式
- `config/postcss.config.js` - PurgeCSS 配置
- `hugo_stats.json` - Hugo 生成的 CSS 使用统计（自动生成，不要手动编辑）

