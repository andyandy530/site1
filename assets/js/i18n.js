// Переключение языка RU / EN.
// Русский текст — в HTML (источник истины). Английский — в словаре ниже.
// Элемент с data-i18n="ключ" получает перевод из TRANSLATIONS.en[ключ].
// Для атрибутов: data-i18n-placeholder, data-i18n-content, data-i18n-aria-label.
// Строки, которые генерирует JS, лежат в TRANSLATIONS.ru и .en под ключами js.*

window.TRANSLATIONS = {
  ru: {
    "js.all": "Все",
    "js.readmore": "Читать →",
    "js.min": "мин",
    "js.readtime": "мин чтения",
    "js.opencase": "Открыть кейс →",
    "js.nocases": "Кейсов в этой категории пока нет.",
    "js.noposts": "Ничего не найдено. Попробуйте другой запрос.",
    "js.period": "Срок работы",
    "js.task": "Задача",
    "js.solution": "Что сделали",
    "js.want": "Хочу так же",
    "js.allposts": "← Все статьи",
    "js.notfound": "Статья не найдена",
    "js.notfound.text": "Возможно, ссылка устарела.",
    "js.toblog": "← В блог",
    "js.help.title": "Нужна помощь с внедрением?",
    "js.help.text": "Расскажите о задаче — предложим план и оценку.",
    "js.help.btn": "Написать нам",
    "js.form.ok": "Спасибо, {name}! Мы свяжемся с вами по адресу {email} в течение рабочего дня.",
    "js.form.err": "Проверьте имя и e-mail: они заполнены некорректно.",
    "js.years": " лет",
    "js.mln": " млн ₽",
    "js.article": "Статья"
  },
  en: {
    "js.all": "All",
    "js.readmore": "Read →",
    "js.min": "min",
    "js.readtime": "min read",
    "js.opencase": "Open case →",
    "js.nocases": "No case studies in this category yet.",
    "js.noposts": "Nothing found. Try another query.",
    "js.period": "Duration",
    "js.task": "The task",
    "js.solution": "What we did",
    "js.want": "I want the same",
    "js.allposts": "← All articles",
    "js.notfound": "Article not found",
    "js.notfound.text": "The link may be outdated.",
    "js.toblog": "← Back to blog",
    "js.help.title": "Need help putting this into practice?",
    "js.help.text": "Tell us about your task and we'll propose a plan and an estimate.",
    "js.help.btn": "Contact us",
    "js.form.ok": "Thank you, {name}! We'll get back to you at {email} within one business day.",
    "js.form.err": "Please check your name and e-mail: they look incorrect.",
    "js.years": " yrs",
    "js.mln": "M ₽",
    "js.article": "Article",

    // ---- Общие: шапка и подвал ----
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.cases": "Case studies",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.cta": "Get in touch",
    "nav.menu": "Menu",
    "nav.lang": "Language",
    "footer.copy": "GovnoLab — marketing agency. All data on this site is for demonstration only.",
    "footer.services": "Services",
    "footer.cases": "Case studies",
    "footer.blog": "Blog",
    "footer.contacts": "Contacts",

    // ---- Главная ----
    "home.meta.title": "GovnoLab — marketing that counts the money",
    "home.meta.desc": "GovnoLab marketing agency: paid ads, SEO, content, analytics. Sales growth with transparent numbers.",
    "home.hero.tag": "Marketing with clear economics",
    "home.hero.title": "We bring customers, not just traffic",
    "home.hero.lead": "We build systematic marketing for businesses: ads, SEO, content and analytics working together. Every ruble of budget is visible in the report.",
    "home.hero.cta1": "See case studies",
    "home.hero.cta2": "Services & pricing",
    "home.hero.card": "Average client growth over 6 months",
    "home.hero.bar1": "Leads",
    "home.hero.bar2": "Revenue",
    "home.hero.bar3": "Traffic",
    "home.hero.bar4": "Cost per lead",
    "home.stat1": "projects launched",
    "home.stat2": "years in business",
    "home.stat3": "ad budget under management",
    "home.stat4": "of clients renew their contract",
    "home.what.eyebrow": "What we do",
    "home.what.title": "Areas of work",
    "home.what.lead": "We pick tools for the business task instead of selling everything at once. Details and prices are on the services page.",
    "home.svc1.title": "Paid search & social ads",
    "home.svc1.text": "Launch, optimisation and scaling of ad campaigns with a focus on cost per lead.",
    "home.svc2.title": "SEO",
    "home.svc2.text": "Technical audit, keyword research, content and link strategy to grow organic traffic.",
    "home.svc3.title": "Content marketing",
    "home.svc3.text": "Articles, videos, newsletters and social posts that warm up the audience and lead to a purchase.",
    "home.svc4.title": "End-to-end analytics",
    "home.svc4.text": "We connect ads, website and CRM so you see real profit per channel.",
    "home.svc5.title": "SMM & influencers",
    "home.svc5.text": "Social media management, seeding, influencer partnerships and a community around the brand.",
    "home.svc6.title": "Marketing strategy",
    "home.svc6.text": "Market research, positioning, launch plan and a budget for the year.",
    "home.more": "Learn more →",
    "home.results.eyebrow": "Results",
    "home.results.title": "Selected case studies",
    "home.results.all": "All case studies →",
    "home.reviews.eyebrow": "Testimonials",
    "home.reviews.title": "What clients say",
    "home.q1": "“For the first time in three years we can see which channel actually makes money. Same budget, twice the sales.”",
    "home.q1.name": "Anna Morozova",
    "home.q1.role": "CMO, fashion e-commerce",
    "home.q2": "“The team speaks the language of numbers, not promises. Even our CFO understands the reports.”",
    "home.q2.name": "Dmitry Kozlov",
    "home.q2.role": "CEO, SaaS company",
    "home.q3": "“They filled the schedules of three new clinics in four months. It used to take us a year.”",
    "home.q3.name": "Elena Smirnova",
    "home.q3.role": "Managing director, dental chain",
    "home.cta.title": "Shall we discuss your project?",
    "home.cta.text": "Leave a request and within two business days we'll prepare a free audit of your current marketing and a growth plan.",
    "home.cta.btn": "Get a free audit",

    // ---- Услуги ----
    "svc.meta.title": "Services & pricing — GovnoLab",
    "svc.meta.desc": "GovnoLab marketing agency services: ads, SEO, content, analytics, SMM, strategy. Pricing and a budget calculator.",
    "svc.tag": "Services",
    "svc.title": "What we do and what it costs",
    "svc.lead": "Pick an area to see the scope of work, timelines and the result we commit to. Prices below are a guide; the final estimate depends on the task.",
    "svc.tab.ads": "🎯 Ads",
    "svc.tab.seo": "🔍 SEO",
    "svc.tab.content": "✍️ Content",
    "svc.tab.analytics": "📊 Analytics",
    "svc.tab.smm": "📱 SMM",
    "svc.tab.strategy": "🧭 Strategy",
    "svc.th.plan": "Plan",
    "svc.th.budget": "Client budget",
    "svc.th.price": "Price",
    "svc.th.scope": "Scope",
    "svc.th.package": "Package",
    "svc.th.includes": "Includes",
    "svc.th.work": "Work",
    "svc.th.time": "Timeline",
    "svc.th.format": "Format",

    "svc.ads.title": "Paid search & social ads",
    "svc.ads.lead": "We run ads in search, display networks and social media. The key metric is cost per lead and its payback, not clicks.",
    "svc.ads.li1": "Audit of current campaigns and competitors",
    "svc.ads.li2": "Keyword research, audience segmentation",
    "svc.ads.li3": "Creatives and landing pages",
    "svc.ads.li4": "Daily bid and budget optimisation",
    "svc.ads.li5": "Weekly A/B tests of ads",
    "svc.ads.li6": "Reporting per channel down to CRM sales",
    "svc.ads.r1": "Start", "svc.ads.r1b": "up to 300,000 ₽/mo", "svc.ads.r1p": "45,000 ₽",
    "svc.ads.r2": "Growth", "svc.ads.r2b": "300,000 – 1M ₽/mo", "svc.ads.r2p": "12% of budget",
    "svc.ads.r3": "Scale", "svc.ads.r3b": "from 1M ₽/mo", "svc.ads.r3p": "custom",
    "svc.ads.note": "First results 2–3 weeks after launch.",

    "svc.seo.title": "SEO",
    "svc.seo.lead": "A long-term channel with the lowest acquisition cost. We work on rankings, traffic and leads.",
    "svc.seo.li1": "Technical audit and fixes",
    "svc.seo.li2": "Keyword map and site structure",
    "svc.seo.li3": "On-page optimisation and meta tags",
    "svc.seo.li4": "Content for commercial and informational queries",
    "svc.seo.li5": "Link strategy and external mentions",
    "svc.seo.li6": "Local SEO for offline locations",
    "svc.seo.r1": "Basic", "svc.seo.r1b": "up to 100 pages", "svc.seo.r1p": "60,000 ₽/mo",
    "svc.seo.r2": "Extended", "svc.seo.r2b": "up to 1,000 pages", "svc.seo.r2p": "110,000 ₽/mo",
    "svc.seo.r3": "E-commerce", "svc.seo.r3b": "1,000+ pages", "svc.seo.r3p": "from 180,000 ₽/mo",
    "svc.seo.note": "Sustainable traffic growth within 3–5 months.",

    "svc.content.title": "Content marketing",
    "svc.content.lead": "We create materials that answer customers' questions at every stage of the decision and lead to a purchase.",
    "svc.content.li1": "Content strategy and editorial calendar",
    "svc.content.li2": "Expert articles and case studies",
    "svc.content.li3": "Email newsletters and automated flows",
    "svc.content.li4": "Scripts and editing for short videos",
    "svc.content.li5": "Lead magnets: checklists, guides, webinars",
    "svc.content.r1": "Editorial", "svc.content.r1b": "4 articles + 2 newsletters per month", "svc.content.r1p": "70,000 ₽/mo",
    "svc.content.r2": "Media", "svc.content.r2b": "8 articles + 4 newsletters + 8 videos", "svc.content.r2p": "150,000 ₽/mo",
    "svc.content.r3": "Strategy", "svc.content.r3b": "one-off development", "svc.content.r3p": "90,000 ₽",

    "svc.analytics.title": "End-to-end analytics",
    "svc.analytics.lead": "We connect ad accounts, the website, call tracking and CRM so you see profit per channel and per keyword.",
    "svc.analytics.li1": "Goals and events on the website",
    "svc.analytics.li2": "Call tracking and email tracking",
    "svc.analytics.li3": "CRM integration with deal status sync",
    "svc.analytics.li4": "Dashboards for executives and marketers",
    "svc.analytics.li5": "Unit economics per channel",
    "svc.analytics.r1": "Basic setup", "svc.analytics.r1b": "1–2 weeks", "svc.analytics.r1p": "55,000 ₽",
    "svc.analytics.r2": "End-to-end analytics with CRM", "svc.analytics.r2b": "3–4 weeks", "svc.analytics.r2p": "140,000 ₽",
    "svc.analytics.r3": "Support", "svc.analytics.r3b": "monthly", "svc.analytics.r3p": "25,000 ₽/mo",

    "svc.smm.title": "SMM & influencers",
    "svc.smm.lead": "We run social media so that it sells, not just collects likes. We pick influencers by real audience, not follower count.",
    "svc.smm.li1": "Strategy and visual concept",
    "svc.smm.li2": "Content plan, shooting, design, copy",
    "svc.smm.li3": "Community management and replies",
    "svc.smm.li4": "Seeding and influencer integrations",
    "svc.smm.li5": "Reporting on reach, followers and leads",
    "svc.smm.r1": "Lite", "svc.smm.r1b": "1 platform, 12 posts", "svc.smm.r1p": "50,000 ₽/mo",
    "svc.smm.r2": "Standard", "svc.smm.r2b": "2 platforms, 24 posts + stories", "svc.smm.r2p": "95,000 ₽/mo",
    "svc.smm.r3": "Influence", "svc.smm.r3b": "selection and launch of 5 integrations", "svc.smm.r3p": "from 80,000 ₽",

    "svc.strategy.title": "Marketing strategy",
    "svc.strategy.lead": "For a new product launch or a marketing relaunch. The result is a document with an action plan, budget and target KPIs for 12 months.",
    "svc.strategy.li1": "Market and competitor analysis",
    "svc.strategy.li2": "Audience research: interviews and surveys",
    "svc.strategy.li3": "Positioning and key messages",
    "svc.strategy.li4": "Channel selection and media plan",
    "svc.strategy.li5": "Financial model and KPIs",
    "svc.strategy.r1": "Express strategy", "svc.strategy.r1b": "2 weeks", "svc.strategy.r1p": "120,000 ₽",
    "svc.strategy.r2": "Full strategy", "svc.strategy.r2b": "5–6 weeks", "svc.strategy.r2p": "350,000 ₽",
    "svc.strategy.r3": "Strategy session", "svc.strategy.r3b": "1 day", "svc.strategy.r3p": "60,000 ₽",

    "svc.calc.eyebrow": "Calculator",
    "svc.calc.title": "Estimate your ad payback",
    "svc.calc.lead": "Move the sliders and the result updates instantly. This is a simplified model for estimation, not a commercial offer.",
    "svc.calc.budget": "Monthly ad budget:",
    "svc.calc.cpl": "Cost per lead:",
    "svc.calc.conv": "Lead-to-sale conversion:",
    "svc.calc.check": "Average order value:",
    "svc.calc.leads": "Leads:",
    "svc.calc.sales": "Sales:",
    "svc.calc.revenue": "Revenue:",
    "svc.cta.title": "Not sure where to start?",
    "svc.cta.text": "We'll run a free audit and suggest a mix of tools that fits your budget.",
    "svc.cta.btn": "Send a request",

    // ---- Кейсы ----
    "cases.meta.title": "Case studies — GovnoLab",
    "cases.meta.desc": "GovnoLab marketing agency case studies: e-commerce, SaaS, services, education. Task, solution, numbers.",
    "cases.tag": "Case studies",
    "cases.title": "Results in numbers",
    "cases.lead": "Filter case studies by industry and click a card to see the task, the solution and the final metrics.",
    "cases.f.all": "All",
    "cases.f.ecommerce": "E-commerce",
    "cases.f.saas": "SaaS",
    "cases.f.services": "Services",
    "cases.f.education": "Education",
    "cases.close": "Close",

    // ---- Блог ----
    "blog.meta.title": "Blog — GovnoLab",
    "blog.meta.desc": "GovnoLab marketing blog: analytics, ads, SEO, content, CRM. Practical articles without fluff.",
    "blog.tag": "Blog",
    "blog.title": "Marketing in practice",
    "blog.lead": "Breakdowns, how-tos and numbers from our work. Search by title or filter by category.",
    "blog.search": "Search articles…",
    "article.related": "Read next",

    // ---- О нас ----
    "about.meta.title": "About & contacts — GovnoLab",
    "about.meta.desc": "The GovnoLab team, how we work, FAQ and a request form.",
    "about.tag": "About",
    "about.title": "A team that counts",
    "about.lead": "GovnoLab is a performance marketing agency. We grew out of an in-house marketing team at an e-commerce company, so we look at advertising through the eyes of the business: profit, not reach.",
    "about.p1.title": "Numbers instead of promises",
    "about.p1.text": "Before the start we fix target metrics and show weekly where we stand against them.",
    "about.p2.title": "Transparency",
    "about.p2.text": "All ad accounts and analytics belong to the client. You have access at any time.",
    "about.p3.title": "Partnership",
    "about.p3.text": "We work as your external marketing department: we take part in planning and own the result.",
    "about.team.eyebrow": "Team",
    "about.team.title": "Who will work on your project",
    "about.t1.name": "Igor Petrov", "about.t1.role": "Founder, strategy", "about.t1.text": "12 years in marketing, former head of marketing at a large e-commerce company.",
    "about.t2.name": "Maria Volkova", "about.t2.role": "Head of paid media", "about.t2.text": "Managed budgets over 100M ₽ per year in SaaS and fintech.",
    "about.t3.name": "Sergey Novikov", "about.t3.role": "Head of SEO", "about.t3.text": "Took 40+ projects to the top, author of a technical SEO course.",
    "about.t4.name": "Olga Kuznetsova", "about.t4.role": "Editor-in-chief", "about.t4.text": "Owns content strategies, newsletters and editorial processes for clients.",
    "about.t5.name": "Anton Lebedev", "about.t5.role": "Analyst", "about.t5.text": "Builds end-to-end analytics and dashboards, calculates unit economics per channel.",
    "about.t6.name": "Daria Sokolova", "about.t6.role": "Account manager", "about.t6.text": "Your single point of contact: planning, reports, team coordination.",
    "about.faq.eyebrow": "FAQ",
    "about.faq.title": "Frequently asked questions",
    "about.faq.q1": "When will the first results appear?",
    "about.faq.a1": "Ads bring the first leads 2–3 weeks after launch. SEO and content are long-term channels; sustainable growth is visible within 3–5 months.",
    "about.faq.q2": "What is the minimum ad budget?",
    "about.faq.a2": "We take on projects with an ad budget from 100,000 ₽ per month. With less it is hard to collect enough data for optimisation.",
    "about.faq.q3": "Who owns the ad accounts?",
    "about.faq.a3": "Always the client. We work in your accounts, and when the engagement ends all history and settings stay with you.",
    "about.faq.q4": "How do you report?",
    "about.faq.a4": "A weekly report on key metrics and a monthly meeting to review results and plan the next period. The dashboard is available online 24/7.",
    "about.faq.q5": "Is there a minimum contract term?",
    "about.faq.a5": "3 months for ads, 6 months for SEO. A shorter period is not enough to evaluate results objectively.",
    "about.contact.eyebrow": "Contacts",
    "about.contact.title": "Send a request",
    "about.contact.lead": "We'll reply within one business day and suggest a time for a call.",
    "about.form.name": "Name",
    "about.form.name.ph": "How should we address you",
    "about.form.email": "E-mail",
    "about.form.company": "Company",
    "about.form.company.ph": "Company name",
    "about.form.service": "Interested in",
    "about.form.o1": "Ads", "about.form.o2": "SEO", "about.form.o3": "Content", "about.form.o4": "Analytics",
    "about.form.o5": "SMM", "about.form.o6": "Strategy", "about.form.o7": "Not sure yet",
    "about.form.task": "Task",
    "about.form.task.ph": "Briefly describe what you want to improve",
    "about.form.submit": "Send request",
    "about.form.or": "Or write to us: hello@govnolab.example · +7 (900) 000-00-00"
  }
};

window.I18N = (function () {
  const dict = window.TRANSLATIONS;
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  let lang = saved === "en" ? "en" : "ru";

  // Строка по ключу (для JS-кода).
  function t(key) {
    const d = dict[lang] || {};
    return d[key] !== undefined ? d[key] : (dict.ru[key] !== undefined ? dict.ru[key] : key);
  }
  // Значение из данных: {ru: "...", en: "..."} или обычная строка.
  function L(v) {
    if (v && typeof v === "object") return v[lang] !== undefined ? v[lang] : v.ru;
    return v;
  }
  function locale() { return lang === "ru" ? "ru-RU" : "en-US"; }

  function applyAttr(attr) {
    document.querySelectorAll("[data-i18n-" + attr + "]").forEach((el) => {
      const key = el.getAttribute("data-i18n-" + attr);
      const orig = "data-i18n-" + attr + "-ru";
      if (!el.hasAttribute(orig)) el.setAttribute(orig, el.getAttribute(attr) || "");
      if (lang === "ru") el.setAttribute(attr, el.getAttribute(orig));
      else if (dict.en[key] !== undefined) el.setAttribute(attr, dict.en[key]);
    });
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (el.dataset.i18nRu === undefined) el.dataset.i18nRu = el.innerHTML;
      if (lang === "ru") el.innerHTML = el.dataset.i18nRu;
      else if (dict.en[key] !== undefined) el.innerHTML = dict.en[key];
    });
    ["placeholder", "content", "aria-label"].forEach(applyAttr);
    document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  }

  function set(next) {
    if (next !== "ru" && next !== "en") return;
    lang = next;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => set(b.dataset.lang)));
  apply();

  return { get lang() { return lang; }, t, L, locale, set };
})();
