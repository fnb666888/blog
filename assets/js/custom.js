// 朱墨 — custom interactions
(function () {
  "use strict";

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // ── Scroll-reveal: fade/slide elements marked .reveal ──────────
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          // small per-row stagger
          entry.target.style.transitionDelay = (i % 3) * 70 + "ms";
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    items.forEach((el) => io.observe(el));
  }

  // ── Reading progress bar on article pages ──────────────────────
  function initProgress() {
    const article = document.querySelector("article");
    if (!article) return;

    const bar = document.createElement("div");
    bar.className = "read-progress";
    document.body.appendChild(bar);

    let ticking = false;
    function update() {
      const rect = article.getBoundingClientRect();
      const total = article.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      bar.style.width = (scrolled / Math.max(total, 1)) * 100 + "%";
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true },
    );
    update();
  }

  function init() {
    initReveal();
    initProgress();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
