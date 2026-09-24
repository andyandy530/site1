// Ambient backdrop: marketing and tech terms drifting very slowly behind the content.
// Words fade in, wander, fade out and reappear elsewhere ("slow diffusion").
// Tweak the constants below to change density, speed and visibility.
(function () {
  const WORDS = [
    "SEO", "SMM", "SEM", "PPC", "CPC", "CPA", "CPL", "CTR", "ROI", "ROMI", "ROAS", "LTV", "CAC", "CRM", "KPI",
    "AI", "ML", "LLM", "IT", "API", "UX", "UI", "A/B", "B2B", "B2C", "SaaS", "CRO", "UTM", "NPS", "ARPU",
    "DAU", "MAU", "CMS", "CDN", "ERP", "GitHub", "Python", "JavaScript", "Claude", "GPT", "HTML", "CSS",
    "JSON", "SQL", "Git", "Docker", "React", "Node.js", "DevOps", "Analytics", "Funnel", "Retargeting",
    "Growth", "Data", "Cloud", "Automation", "Conversion", "Attribution", "Cohort", "Pipeline"
  ];
  const MAX_ALPHA = 0.08;        // peak visibility (0–1); keep it low
  const SPEED = 0.06;            // px per frame at 60 fps ≈ 3.6 px/s
  const LIFE_MIN = 18, LIFE_MAX = 40;  // seconds a word lives (fade in → out)
  const DENSITY = 1 / 42000;     // words per px² of viewport
  const MAX_WORDS = 70;

  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.createElement("canvas");
  canvas.className = "backdrop";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");

  let W = 0, H = 0, dpr = 1, words = [];
  const rand = (a, b) => a + Math.random() * (b - a);
  const accent = () => (getComputedStyle(document.documentElement).getPropertyValue("--accent") || "#8b8cff").trim();

  function spawn(initial) {
    const life = rand(LIFE_MIN, LIFE_MAX);
    const angle = rand(0, Math.PI * 2);
    return {
      text: WORDS[Math.floor(Math.random() * WORDS.length)],
      x: rand(0, W), y: rand(0, H),
      vx: Math.cos(angle) * SPEED, vy: Math.sin(angle) * SPEED,
      turn: rand(-0.002, 0.002),
      size: rand(13, 34),
      weight: Math.random() < 0.3 ? 700 : 500,
      mono: Math.random() < 0.35,
      life, age: initial ? rand(0, life) : 0,
      tint: Math.random() < 0.35 ? "cyan" : "accent"
    };
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const target = Math.min(MAX_WORDS, Math.round(W * H * DENSITY));
    while (words.length < target) words.push(spawn(true));
    words.length = target;
  }

  let last = performance.now(), running = true;
  const FRAME_MS = 1000 / 30;    // cap at 30 fps: the motion is slow, this halves the CPU cost
  function frame(now) {
    if (!running) return;
    if (now - last < FRAME_MS) { requestAnimationFrame(frame); return; }
    const dt = Math.min((now - last) / 1000, 0.1); last = now;
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
      if (w.y < -50) w.y = H + 50; if (w.y > H + 50) w.y = -50;
      // smooth fade in / out over the word's life
      const t = w.age / w.life;
      const alpha = MAX_ALPHA * Math.sin(Math.PI * t) ** 1.5;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = w.tint === "cyan" ? "#22d3ee" : colAccent;
      ctx.font = `${w.weight} ${w.size}px ${w.mono ? '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace' : 'Inter, system-ui, sans-serif'}`;
      ctx.fillText(w.text, w.x, w.y);
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }

  function drawStatic() {
    ctx.clearRect(0, 0, W, H);
    words.forEach((w) => {
      ctx.globalAlpha = MAX_ALPHA * 0.7;
      ctx.fillStyle = w.tint === "cyan" ? "#22d3ee" : accent();
      ctx.font = `${w.weight} ${w.size}px Inter, system-ui, sans-serif`;
      ctx.fillText(w.text, w.x, w.y);
    });
    ctx.globalAlpha = 1;
  }

  resize();
  window.addEventListener("resize", () => { resize(); if (reduce) drawStatic(); });
  if (reduce) { drawStatic(); return; }
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) { last = performance.now(); requestAnimationFrame(frame); }
  });
  requestAnimationFrame(frame);
})();
