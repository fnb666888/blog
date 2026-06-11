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

  // ── Hero cursor-follow glow ─────────────────────────────────────
  // Updates --mx/--my CSS vars so the radial highlight tracks the pointer.
  function initHeroGlow() {
    const hero = document.querySelector("[data-hero-glow]");
    if (!hero || reduceMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let ticking = false;
    let mx = 50;
    let my = 30;
    function paint() {
      hero.style.setProperty("--mx", mx + "%");
      hero.style.setProperty("--my", my + "%");
      ticking = false;
    }
    hero.addEventListener(
      "pointermove",
      (e) => {
        const r = hero.getBoundingClientRect();
        mx = ((e.clientX - r.left) / r.width) * 100;
        my = ((e.clientY - r.top) / r.height) * 100;
        if (!ticking) {
          window.requestAnimationFrame(paint);
          ticking = true;
        }
      },
      { passive: true },
    );
  }

  // ── Magnetic buttons ────────────────────────────────────────────
  // Primary CTA drifts slightly toward the cursor, springs back on leave.
  function initMagnetic() {
    if (reduceMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      const strength = 0.3;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
  }

  // ── Card pointer sheen ──────────────────────────────────────────
  // Updates --cx/--cy so each card's radial sheen tracks the pointer.
  function initCardGlow() {
    if (reduceMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.querySelectorAll("[data-card-glow]").forEach((card) => {
      card.addEventListener(
        "pointermove",
        (e) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--cx", ((e.clientX - r.left) / r.width) * 100 + "%");
          card.style.setProperty("--cy", ((e.clientY - r.top) / r.height) * 100 + "%");
        },
        { passive: true },
      );
    });
  }

  function init() {
    initReveal();
    initProgress();
    initHeroGlow();
    initMagnetic();
    initCardGlow();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
