// 朱墨 — custom interactions
(function () {
    'use strict';

    if (window.__zhumoCustomInitialized) return;
    window.__zhumoCustomInitialized = true;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Scroll-reveal: fade/slide elements marked .fade-in ─────────
    function initReveal() {
        const items = document.querySelectorAll('.fade-in');
        if (!items.length) return;

        if (reduceMotion || !('IntersectionObserver' in window)) {
            items.forEach((el) => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
            return;
        }

        const io = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry, i) => {
                    if (!entry.isIntersecting) return;
                    // small per-row stagger
                    entry.target.style.transitionDelay = (i % 3) * 70 + 'ms';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'none';
                    obs.unobserve(entry.target);
                });
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
        );

        items.forEach((el) => io.observe(el));
    }

    // ── Reading progress bar on article pages ──────────────────────
    function initProgress() {
        const article = document.querySelector('article');
        if (!article) return;

        const bar = document.createElement('div');
        bar.className = 'read-progress';
        document.body.appendChild(bar);

        let ticking = false;
        function update() {
            const rect = article.getBoundingClientRect();
            const total = article.offsetHeight - window.innerHeight;
            const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
            bar.style.width = (scrolled / Math.max(total, 1)) * 100 + '%';
            ticking = false;
        }
        window.addEventListener(
            'scroll',
            () => {
                if (!ticking) {
                    window.requestAnimationFrame(update);
                    ticking = true;
                }
            },
            { passive: true }
        );
        update();
    }

    // ── Table of contents: smooth scrolling + active section ─────
    function initToc() {
        const links = Array.from(
            document.querySelectorAll('.docs-toc a[href^="#"]')
        );
        if (!links.length) return;

        const headings = links
            .map((link) => {
                try {
                    return document.getElementById(decodeURIComponent(link.getAttribute('href').slice(1)));
                } catch (error) {
                    return null;
                }
            })
            .filter(Boolean);

        if (!headings.length) return;

        let activeId = '';
        let ticking = false;

        function setActive(id) {
            if (id === activeId) return;
            activeId = id;

            links.forEach((link) => {
                let linkId = '';
                try {
                    linkId = decodeURIComponent(link.getAttribute('href').slice(1));
                } catch (error) {
                    linkId = link.getAttribute('href').slice(1);
                }
                link.classList.toggle('active', linkId === id);
            });
        }

        function update() {
            const marker = 130;
            let current = headings[0];

            for (const heading of headings) {
                if (heading.getBoundingClientRect().top <= marker) {
                    current = heading;
                }
            }

            setActive(current.id);
            ticking = false;
        }

        window.addEventListener(
            'scroll',
            () => {
                if (!ticking) {
                    window.requestAnimationFrame(update);
                    ticking = true;
                }
            },
            { passive: true }
        );

        update();
    }

    // ── Mobile table of contents: floating button + bottom sheet ──
    function initMobileToc() {
        const toggle = document.querySelector('.toc-mobile-toggle');
        const panel = document.querySelector('.toc-mobile-panel');
        const backdrop = document.querySelector('.toc-mobile-backdrop');
        if (!toggle || !panel || !backdrop) return;

        const closeButton = panel.querySelector('.toc-mobile-panel__close');

        function setOpen(open) {
            toggle.classList.toggle('is-active', open);
            panel.classList.toggle('is-open', open);
            backdrop.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', String(open));
            panel.setAttribute('aria-hidden', String(!open));
            document.body.style.overflow = open ? 'hidden' : '';
        }

        function close() {
            if (panel.classList.contains('is-open')) {
                setOpen(false);
            }
        }

        toggle.addEventListener('click', () => setOpen(!panel.classList.contains('is-open')));
        closeButton?.addEventListener('click', close);
        backdrop.addEventListener('click', close);
        panel.addEventListener('click', (event) => {
            if (event.target.closest('a')) {
                close();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                close();
            }
        });
    }

    // ── Desktop table of contents: collapse/expand sidebar ────────
    function initDesktopToc() {
        const wrap = document.querySelector('.blog-toc-wrap');
        const toggle = document.querySelector('.toc-desktop-toggle');
        if (!wrap || !toggle) return;

        function setCollapsed(collapsed) {
            wrap.classList.toggle('toc-collapsed', collapsed);
            toggle.setAttribute('aria-expanded', String(!collapsed));
            toggle.setAttribute('aria-label', collapsed ? '展开目录' : '收起目录');
        }

        toggle.addEventListener('click', () => {
            setCollapsed(!wrap.classList.contains('toc-collapsed'));
        });
    }

    // ── Hero cursor-follow glow ─────────────────────────────────────
    // Updates --mx/--my CSS vars so the radial highlight tracks the pointer.
    function initHeroGlow() {
        const hero = document.querySelector('[data-hero-glow]');
        if (!hero || reduceMotion) return;
        if (!window.matchMedia('(pointer: fine)').matches) return;

        let ticking = false;
        let mx = 50;
        let my = 30;
        function paint() {
            hero.style.setProperty('--mx', mx + '%');
            hero.style.setProperty('--my', my + '%');
            ticking = false;
        }
        hero.addEventListener(
            'pointermove',
            (e) => {
                const r = hero.getBoundingClientRect();
                mx = ((e.clientX - r.left) / r.width) * 100;
                my = ((e.clientY - r.top) / r.height) * 100;
                if (!ticking) {
                    window.requestAnimationFrame(paint);
                    ticking = true;
                }
            },
            { passive: true }
        );
    }

    // ── Magnetic buttons ────────────────────────────────────────────
    // Primary CTA drifts slightly toward the cursor, springs back on leave.
    function initMagnetic() {
        if (reduceMotion) return;
        if (!window.matchMedia('(pointer: fine)').matches) return;

        document.querySelectorAll('[data-magnetic]').forEach((el) => {
            const strength = 0.3;
            el.addEventListener('pointermove', (e) => {
                const r = el.getBoundingClientRect();
                const x = e.clientX - (r.left + r.width / 2);
                const y = e.clientY - (r.top + r.height / 2);
                el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            });
            el.addEventListener('pointerleave', () => {
                el.style.transform = '';
            });
        });
    }

    // ── Card pointer sheen ──────────────────────────────────────────
    // Updates --cx/--cy so each card's radial sheen tracks the pointer.
    function initCardGlow() {
        if (reduceMotion) return;
        if (!window.matchMedia('(pointer: fine)').matches) return;

        document.querySelectorAll('[data-card-glow]').forEach((card) => {
            card.addEventListener(
                'pointermove',
                (e) => {
                    const r = card.getBoundingClientRect();
                    card.style.setProperty('--cx', ((e.clientX - r.left) / r.width) * 100 + '%');
                    card.style.setProperty('--cy', ((e.clientY - r.top) / r.height) * 100 + '%');
                },
                { passive: true }
            );
        });
    }

    function init() {
        initReveal();
        initProgress();
        initToc();
        initMobileToc();
        initDesktopToc();
        initHeroGlow();
        initMagnetic();
        initCardGlow();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
