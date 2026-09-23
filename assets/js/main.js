// Shared logic for all pages.
(function () {
  // --- Header & mobile menu ---
  const nav = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");
  if (burger && nav) burger.addEventListener("click", () => nav.classList.toggle("open"));

  // Highlight the active nav link by file name.
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === current || (current === "article.html" && href === "blog.html")) a.classList.add("active");
  });

  // --- Animated counters ---
  // Attributes (English / default): data-count, data-prefix, data-suffix, data-decimals.
  // Optional Russian overrides: data-count-ru, data-prefix-ru, data-suffix-ru, data-decimals-ru.
  const counters = document.querySelectorAll("[data-count]");
  const attr = (el, name) => {
    const v = el.dataset[name + (I18N.lang === "ru" ? "Ru" : "")];
    if (v !== undefined) return v;
    return el.dataset[name] !== undefined ? el.dataset[name] : "";
  };
  const format = (el, value) => {
    const dec = +attr(el, "decimals") || 0;
    return attr(el, "prefix") + value.toLocaleString(I18N.locale(), { minimumFractionDigits: dec, maximumFractionDigits: dec }) + attr(el, "suffix");
  };
  const animate = (el) => {
    const target = +attr(el, "count");
    const dur = 1200, start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      el.textContent = format(el, target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick); else el.dataset.done = "1";
    };
    requestAnimationFrame(tick);
  };
  if (counters.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    counters.forEach((c) => io.observe(c));
    document.addEventListener("langchange", () => {
      counters.forEach((el) => { if (el.dataset.done) el.textContent = format(el, +attr(el, "count")); });
    });
  }

  // --- Hero bars (data-width) ---
  document.querySelectorAll(".bar-fill[data-width]").forEach((b) => {
    setTimeout(() => (b.style.width = b.dataset.width + "%"), 200);
  });

  // --- Tabs (.tabs / .tab-panel) ---
  document.querySelectorAll("[data-tabs]").forEach((wrap) => {
    const tabs = wrap.querySelectorAll(".tab");
    const panels = wrap.querySelectorAll(".tab-panel");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        wrap.querySelector("#" + tab.dataset.tab).classList.add("active");
      });
    });
  });

  // --- FAQ accordion ---
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.addEventListener("click", () => q.parentElement.classList.toggle("open"));
  });

  // --- Lead form (no backend: validation and a message) ---
  const form = document.querySelector("#lead-form");
  if (form) {
    const note = form.querySelector(".form-note");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const ok = name.length >= 2 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
      note.className = "form-note " + (ok ? "ok" : "err");
      note.textContent = ok
        ? I18N.t("js.form.ok").replace("{name}", name).replace("{email}", email)
        : I18N.t("js.form.err");
      if (ok) form.reset();
    });
  }

  // --- Payback calculator ---
  // Slider ranges and currency depend on the language: [min, max, step, default].
  const calc = document.querySelector("#calc");
  if (calc) {
    const fmt = (n) => Math.round(n).toLocaleString(I18N.locale());
    const CFG = {
      en: { budget: [500, 20000, 100, 3000], cpl: [5, 100, 1, 15], check: [10, 3000, 10, 250], money: (n) => "$" + fmt(n) },
      ru: { budget: [50000, 2000000, 10000, 300000], cpl: [200, 10000, 100, 1500], check: [1000, 300000, 1000, 25000], money: (n) => fmt(n) + " ₽" }
    };
    const $ = (id) => calc.querySelector("#" + id);
    const inputs = { budget: $("budget"), cpl: $("cpl"), conv: $("conv"), check: $("check") };
    const out = {
      budget: $("out-budget"), cpl: $("out-cpl"), conv: $("out-conv"), check: $("out-check"),
      leads: $("out-leads"), sales: $("out-sales"), revenue: $("out-revenue"), romi: $("out-romi")
    };
    let cfg = CFG.en;
    const configure = () => {
      cfg = CFG[I18N.lang] || CFG.en;
      ["budget", "cpl", "check"].forEach((k) => {
        const [min, max, step, val] = cfg[k];
        const i = inputs[k];
        i.min = min; i.max = max; i.step = step; i.value = val;
      });
    };
    const update = () => {
      const b = +inputs.budget.value, c = +inputs.cpl.value, cv = +inputs.conv.value, ch = +inputs.check.value;
      const leads = b / c;
      const sales = leads * cv / 100;
      const revenue = sales * ch;
      const romi = b ? ((revenue - b) / b) * 100 : 0;
      out.budget.textContent = cfg.money(b);
      out.cpl.textContent = cfg.money(c);
      out.conv.textContent = cv + " %";
      out.check.textContent = cfg.money(ch);
      out.leads.textContent = fmt(leads);
      out.sales.textContent = fmt(sales);
      out.revenue.textContent = cfg.money(revenue);
      out.romi.textContent = (romi >= 0 ? "+" : "") + fmt(romi) + " %";
      out.romi.style.color = romi >= 0 ? "var(--ok)" : "var(--danger)";
    };
    Object.values(inputs).forEach((i) => i.addEventListener("input", update));
    document.addEventListener("langchange", () => { configure(); update(); });
    configure();
    update();
  }

  // --- Year in the footer ---
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
