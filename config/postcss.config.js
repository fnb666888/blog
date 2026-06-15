import autoprefixer from 'autoprefixer';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';

const purgecss = purgeCSSPlugin({
    content: ['./hugo_stats.json'],
    defaultExtractor: (content) => {
        const els = JSON.parse(content).htmlElements;
        return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
    },
    dynamicAttributes: [
        'aria-expanded',
        'data-bs-popper',
        'data-bs-target',
        'data-bs-theme',
        'data-dark-mode',
        'data-global-alert',
        'data-pane', // tabs.js
        'data-popper-placement',
        'data-sizes',
        'data-toggle-tab', // tabs.js
        'id',
        'size',
        'type'
    ],
    safelist: {
        standard: [
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
            'offcanvas', // Bootstrap offcanvas base class
            'offcanvas-body',
            'offcanvas-end',
            'offcanvas-header',
            'offcanvas-title',
            'offcanvas-start', // in case used elsewhere
            'figcaption',
            'dt',
            'dd',
            'showing',
            'hiding',
            'page-item',
            'page-link',
            'not-content',
            'copy',
            'btn-copy',
            'read-progress', // custom.js dynamically creates this element
            'collapse', // Bootstrap collapse
            'navbar-collapse', // Bootstrap navbar collapse
            'navbar-toggler', // Bootstrap navbar toggler button
            'collapsing' // Bootstrap collapse animation state
        ],
        // 使用正则表达式匹配所有 Bootstrap 动态类
        deep: [/^navbar-/, /^collapse/, /^modal-/, /^offcanvas-/],
        greedy: [/^btn-/, /^nav-/, /^dropdown-/, /^fade/, /^show/, /^hide/]
    }
});

export default {
    plugins: [autoprefixer(), ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])]
};
