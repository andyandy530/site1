// Ambient backdrop: marketing and tech terms drifting very slowly behind the content.
// Each word is a <span> inside a page-sized container, animated with CSS (see .bd-word in style.css).
// The browser scrolls and animates them on the compositor, so they never stutter during scrolling.
// Words are anchored to the PAGE: they stay where they are while you scroll past them.
// Tweak the constants below to change density, speed and visibility.
(function () {
  const WORDS = [
    "SEO", "SMM", "SEM", "PPC", "CPC", "CPA", "CPL", "CTR", "ROI", "ROMI", "ROAS", "LTV", "CAC", "CRM", "KPI",
    "AI", "ML", "LLM", "IT", "API", "UX", "UI", "A/B", "B2B", "B2C", "SaaS", "CRO", "UTM", "NPS", "ARPU",
    "DAU", "MAU", "CMS", "CDN", "ERP", "GitHub", "Python", "JavaScript", "Claude", "GPT", "HTML", "CSS",
    "JSON", "SQL", "Git", "Docker", "React", "Node.js", "DevOps", "Analytics", "Funnel", "Retargeting",
    "Growth", "Data", "Cloud", "Automation", "Conversion", "Attribution", "Cohort", "Pipeline"
  ];
  const MAX_ALPHA = 0.20;              // peak visibility (0–1)
  const SPEED = 4.8;                   // drift speed in px per second
  const LIFE_MIN = 18, LIFE_MAX = 40;  // seconds a word lives (fade in → drift → fade out)
  const DENSITY = 1 / 42000;           // words per px² of the whole page
  const MAX_WORDS = 250;               // hard cap for very long pages

  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.createElement("div");
  root.className = "backdrop";
  root.setAttribute("aria-hidden", "true");
  document.body.prepend(root);

  const rand = (a, b) => a + Math.random() * (b - a);
  const pageHeight = () => Math.max(document.documentElement.scrollHeight, window.innerHeight);
  let W = window.innerWidth, PAGE_H = pageHeight();
  const words = [];

  // Place a word at a random spot and give it a new random drift vector.
  function place(el) {
    const life = rand(LIFE_MIN, LIFE_MAX);
    const angle = rand(0, Math.PI * 2);
    const dist = SPEED * life;
    el.style.left = rand(0, W) + "px";
    el.style.top = rand(0, PAGE_H) + "px";
    el.style.setProperty("--d", life + "s");
    el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
    el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
    el.textContent = WORDS[Math.floor(Math.random() * WORDS.length)];
  }

  function spawn() {
    const el = document.createElement("span");
    el.className = "bd-word" + (Math.random() < 0.35 ? " mono" : "") + (Math.random() < 0.35 ? " cyan" : "");
    el.style.fontSize = rand(13, 34) + "px";
    el.style.fontWeight = Math.random() < 0.3 ? 700 : 500;
    el.style.setProperty("--a", MAX_ALPHA);
    place(el);
    if (reduce) {
      el.classList.add("static");
    } else {
      // start mid-life so the page does not begin empty
      el.style.animationDelay = -rand(0, LIFE_MAX) + "s";
      // each time the animation loops (opacity is 0 there), move the word somewhere else
      el.addEventListener("animationiteration", () => place(el));
    }
    root.appendChild(el);
    words.push(el);
  }

  function layout() {
    W = window.innerWidth; PAGE_H = pageHeight();
    root.style.height = PAGE_H + "px";
    const target = Math.min(MAX_WORDS, Math.round(W * PAGE_H * DENSITY));
    while (words.length < target) spawn();
    while (words.length > target) words.pop().remove();
  }

  layout();
  window.addEventListener("resize", layout);
  // Page height changes when tabs / FAQ / filters open.
  if (window.ResizeObserver) new ResizeObserver(layout).observe(document.body);
})();
