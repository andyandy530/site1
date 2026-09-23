// Общая логика для всех страниц.
(function () {
  // --- Шапка и мобильное меню ---
  const nav = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");
  if (burger && nav) {
    burger.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // Подсветка активного пункта меню по имени файла.
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === current || (current === "article.html" && href === "blog.html")) {
      a.classList.add("active");
    }
  });

  // --- Анимированные счётчики (data-count) ---
  const counters = document.querySelectorAll("[data-count]");
  // Суффикс счётчика: data-suffix (RU) и data-suffix-en (EN), либо ключ словаря data-suffix-key.
  const suffix = (el) => el.dataset.suffixKey ? I18N.t(el.dataset.suffixKey)
    : (I18N.lang === "en" && el.dataset.suffixEn !== undefined ? el.dataset.suffixEn : (el.dataset.suffix || ""));
  document.addEventListener("langchange", () => {
    counters.forEach((el) => { if (el.dataset.done) el.textContent = (+el.dataset.count).toLocaleString(I18N.locale()) + suffix(el); });
  });
  if (counters.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.dataset.count;
        const dur = 1200;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min((t - start) / dur, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString(I18N.locale()) + suffix(el);
          if (p < 1) requestAnimationFrame(tick); else el.dataset.done = "1";
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => io.observe(c));
  }

  // --- Полоски-графики в hero (data-width) ---
  document.querySelectorAll(".bar-fill[data-width]").forEach((b) => {
    setTimeout(() => (b.style.width = b.dataset.width + "%"), 200);
  });

  // --- Табы (.tabs / .tab-panel) ---
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

  // --- FAQ-аккордеон ---
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.addEventListener("click", () => q.parentElement.classList.toggle("open"));
  });

  // --- Форма заявки (без бэкенда: валидация и сообщение) ---
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

  // --- Калькулятор бюджета ---
  const calc = document.querySelector("#calc");
  if (calc) {
    const budget = calc.querySelector("#budget");
    const cpl = calc.querySelector("#cpl");
    const conv = calc.querySelector("#conv");
    const check = calc.querySelector("#check");
    const out = {
      budget: calc.querySelector("#out-budget"),
      cpl: calc.querySelector("#out-cpl"),
      conv: calc.querySelector("#out-conv"),
      check: calc.querySelector("#out-check"),
      leads: calc.querySelector("#out-leads"),
      sales: calc.querySelector("#out-sales"),
      revenue: calc.querySelector("#out-revenue"),
      romi: calc.querySelector("#out-romi")
    };
    const fmt = (n) => Math.round(n).toLocaleString(I18N.locale());
    const update = () => {
      const b = +budget.value, c = +cpl.value, cv = +conv.value, ch = +check.value;
      const leads = b / c;
      const sales = leads * cv / 100;
      const revenue = sales * ch;
      const romi = b ? ((revenue - b) / b) * 100 : 0;
      out.budget.textContent = fmt(b) + " ₽";
      out.cpl.textContent = fmt(c) + " ₽";
      out.conv.textContent = cv + " %";
      out.check.textContent = fmt(ch) + " ₽";
      out.leads.textContent = fmt(leads);
      out.sales.textContent = fmt(sales);
      out.revenue.textContent = fmt(revenue) + " ₽";
      out.romi.textContent = (romi >= 0 ? "+" : "") + fmt(romi) + " %";
      out.romi.style.color = romi >= 0 ? "var(--ok)" : "#dc2626";
    };
    [budget, cpl, conv, check].forEach((i) => i.addEventListener("input", update));
    document.addEventListener("langchange", update);
    update();
  }

  // --- Год в подвале ---
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
