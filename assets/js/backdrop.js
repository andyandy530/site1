// Ambient backdrop: marketing and tech terms drifting very slowly behind the content.
// Words are anchored to the PAGE (document coordinates), not to the viewport:
// they stay where they are while you scroll past them.
// The canvas itself is viewport-sized and fixed; each frame subtracts window.scrollY
// so only the words currently on screen are drawn.
// Tweak the constants below to change density, speed and visibility.
(function () {
  const WORDS = [
    "SEO", "SMM", "SEM", "PPC", "CPC", "CPA", "CPL", "CTR", "ROI", "ROMI", "ROAS", "LTV", "CAC", "CRM", "KPI",
    "AI", "ML", "LLM", "IT", "API", "UX", "UI", "A/B", "B2B", "B2C", "SaaS", "CRO", "UTM", "NPS", "ARPU",
    "DAU", "MAU", "CMS", "CDN", "ERP", "GitHub", "Python", "JavaScript", "Claude", "GPT", "HTML", "CSS",
    "JSON", "SQL", "Git", "Docker", "React", "Node.js", "DevOps", "Analytics", "Funnel", "Retargeting",
    "Growth", "Data", "Cloud", "Automation", "Conversion", "Attribution", "Cohort", "Pipeline"
  ];
  const MAX_ALPHA = 0.20;        // peak visibility (0–1)
  const SPEED = 0.08;            // px per frame at 60 fps ≈ 4.8 px/s
  const LIFE_MIN = 18, LIFE_MAX = 40;  // seconds a word lives (fade in → out)
  const DENSITY = 1 / 42000;     // words per px² of the whole page
  const MAX_WORDS = 400;         // hard cap for very long pages
  const FRAME_MS = 1000 / 30;    // cap at 30 fps: the motion is slow, this halves the CPU cost

  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.createElement("canvas");
  canvas.className = "backdrop";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");

  let W = 0, H = 0, PAGE_H = 0, dpr = 1, words = [];
  const rand = (a, b) => a + Math.random() * (b - a);
  const accent = () => (getComputedStyle(document.documentElement).getPropertyValue("--accent") || "#8b8cff").trim();
  const pageHeight = () => Math.max(document.documentElement.scrollHeight, window.innerHeight);

  // x / y are document coordinates (y counts from the top of the page, not the screen).
  function spawn(initial) {
    const life = rand(LIFE_MIN, LIFE_MAX);
    const angle = rand(0, Math.PI * 2);
    return {
      text: WORDS[Math.floor(Math.random() * WORDS.length)],
      x: rand(0, W), y: rand(0, PAGE_H),
      vx: Math.cos(angle) * SPEED, vy: Math.sin(angle) * SPEED,
      turn: rand(-0.002, 0.002),
      size: rand(13, 34),
      weight: Math.random() < 0.3 ? 700 : 500,
      mono: Math.random() < 0.35,
      life, age: initial ? rand(0, life) : 0,
      tint: Math.random() < 0.35 ? "cyan" : "accent"
    };
  }

  function layout() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight; PAGE_H = pageHeight();
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const target = Math.min(MAX_WORDS, Math.round(W * PAGE_H * DENSITY));
    while (words.length < target) words.push(spawn(true));
    words.length = target;
  }

  // Page height changes when tabs / FAQ / filters open: re-check it now and then.
  function syncHeight() {
    const h = pageHeight();
    if (h !== PAGE_H) { PAGE_H = h; const target = Math.min(MAX_WORDS, Math.round(W * PAGE_H * DENSITY)); while (words.length < target) words.push(spawn(true)); words.length = target; }
  }

  function draw(w, alpha, colAccent) {
    const sy = w.y - window.scrollY;               // document → screen
    if (sy < -60 || sy > H + 60) return;           // off screen: skip
    ctx.globalAlpha = alpha;
    ctx.fillStyle = w.tint === "cyan" ? "#22d3ee" : colAccent;
    ctx.font = `${w.weight} ${w.size}px ${w.mono ? '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace' : 'Inter, system-ui, sans-serif'}`;
    ctx.fillText(w.text, w.x, sy);
  }

  let last = performance.now(), running = true, heightTimer = 0;
  function frame(now) {
    if (!running) return;
    if (now - last < FRAME_MS) { requestAnimationFrame(frame); return; }
    const dt = Math.min((now - last) / 1000, 0.1); last = now;
    if ((heightTimer += dt) > 2) { heightTimer = 0; syncHeight(); }
    ctx.clearRect(0, 0, W, H);
    const colAccent = accent();
    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      w.age += dt;
      if (w.age >= w.life) { words[i] = spawn(false); continue; }
      // gentle wandering: rotate velocity a little every frame
      const a = Math.atan2(w.vy, w.vx) + w.turn;
      w.vx = Math.cos(a) * SPEED; w.vy = Math.sin(a) * SPEED;
      w.x += w.vx * dt * 60; w.y += w.vy * dt * 60;
      if (w.x < -100) w.x = W + 100; if (w.x > W + 100) w.x = -100;
      if (w.y < -50) w.y = PAGE_H + 50; if (w.y > PAGE_H + 50) w.y = -50;
      // smooth fade in / out over the word's life
      const t = w.age / w.life;
      draw(w, MAX_ALPHA * Math.sin(Math.PI * t) ** 1.5, colAccent);
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }

  function drawStatic() {
    ctx.clearRect(0, 0, W, H);
    const colAccent = accent();
    words.forEach((w) => draw(w, MAX_ALPHA * 0.7, colAccent));
    ctx.globalAlpha = 1;
  }

  layout();
  window.addEventListener("resize", () => { layout(); if (reduce) drawStatic(); });
  if (reduce) { drawStatic(); window.addEventListener("scroll", drawStatic, { passive: true }); return; }
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) { last = performance.now(); requestAnimationFrame(frame); }
  });
  requestAnimationFrame(frame);
})();
