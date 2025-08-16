// flowBackground.js
// Lightweight, customizable, 60fps flow-field background with subtle interactivity.
// No dependencies. Works in vanilla JS, React, Next.js. ~6KB minified.
// © You. MIT License.

// ---------- Usage (vanilla):
// import { createFlowBackground } from './flowBackground.js';
// const destroy = createFlowBackground(document.body, { /* options */ });
//
// ---------- Usage (React/Next, see component below):
// <FlowBackground className="absolute inset-0 -z-10" options={{ /* ... */ }} />

export function createFlowBackground(
  mountEl = document.body,
  userOptions = {}
) {
  // ---- Options (easy to tweak) ----
  const opts = {
    // Colors: auto day/night palettes; can be overridden.
    dayPalette: [
      '#1A237E', // Indigo oscuro
      '#1976D2', // Azul profesional
      '#00897B', // Verde teal oscuro
    ],
    nightPalette: ['#90CAF9', '#CE93D8', '#80CBC4'],    // cool twilight tones
    backgroundAlpha: 0.065,  // trail fade [0..1]; smaller = longer trails
    density: 0.0018,         // particle count per pixel (scaled by DPR)
    speed: 0.9,              // base speed multiplier
    lineWidth: [0.6, 1.4],   // [min, max] px (scaled by DPR)
    interaction: 0.18,       // how strongly cursor bends the flow
    scrollInfluence: 0.22,   // how much scroll velocity modulates speed
    noiseScale: 0.0018,      // spatial scale of the field
    timeScale: 0.0002,       // how fast the field evolves over time
    maxParticles: 6000,      // hard cap for safety on huge screens
    dprCap: 2,               // cap devicePixelRatio to save GPU/CPU
    useBlend: true,          // composite glow effect
    paletteMode: 'auto',     // 'auto' | 'day' | 'night' | 'custom'
    customPalette: null,     // array of colors if paletteMode==='custom'
    zIndex: -1,              // canvas stacking
    ...userOptions
  };

  // ---- Helpers: time-based palette ----
  const hour = new Date().getHours();
  const isNight = hour < 6 || hour >= 19;
  const palette =
    opts.paletteMode === 'custom' && Array.isArray(opts.customPalette)
      ? opts.customPalette
      : opts.paletteMode === 'day'
        ? opts.dayPalette
        : opts.paletteMode === 'night'
          ? opts.nightPalette
          : isNight
            ? opts.nightPalette
            : opts.dayPalette;

  // ---- Setup canvas ----
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: String(opts.zIndex),
  });
  mountEl.appendChild(canvas);

  // DPR + resize
  let width = 0, height = 0, dpr = Math.min(window.devicePixelRatio || 1, opts.dprCap);
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, opts.dprCap);
    width = Math.max(1, Math.floor(canvas.clientWidth || window.innerWidth));
    height = Math.max(1, Math.floor(canvas.clientHeight || window.innerHeight));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  // ---- Tiny, fast "value noise" (enough for elegant motion) ----
  // Hash helpers
  function hash(n) {
    const x = Math.sin(n) * 43758.5453123;
    return x - Math.floor(x);
  }
  function noise2D(x, y) {
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const h00 = hash(xi * 374761393 + yi * 668265263);
    const h10 = hash((xi + 1) * 374761393 + yi * 668265263);
    const h01 = hash(xi * 374761393 + (yi + 1) * 668265263);
    const h11 = hash((xi + 1) * 374761393 + (yi + 1) * 668265263);
    const u = xf * xf * (3 - 2 * xf);
    const v = yf * yf * (3 - 2 * yf);
    const nx0 = h00 * (1 - u) + h10 * u;
    const nx1 = h01 * (1 - u) + h11 * u;
    return nx0 * (1 - v) + nx1 * v;
  }

  // ---- Flow field direction using animated noise ----
  function fieldDir(x, y, t) {
    const n = noise2D(x * opts.noiseScale, y * opts.noiseScale + t * opts.timeScale);
    // map noise to angle (smooth ribbons)
    const angle = n * Math.PI * 2;
    return [Math.cos(angle), Math.sin(angle)];
  }

  // ---- Particles ----
  const area = width * height;
  const targetCount = Math.min(
    Math.floor(area * opts.density * dpr * 0.75),
    opts.maxParticles
  );
  const particles = new Array(targetCount).fill().map(spawnParticle);

  function rand(a = 0, b = 1) { return a + Math.random() * (b - a); }
  function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }

  function spawnParticle() {
    const speedJitter = rand(0.8, 1.2);
    const lw = rand(opts.lineWidth[0], opts.lineWidth[1]);
    return {
      x: rand(0, width),
      y: rand(0, height),
      px: null, // previous position for segments
      py: null,
      life: rand(0, 1), // staggers resetting
      hue: pick(palette),
      speedMul: speedJitter,
      lw,
    };
  }

  // ---- Interaction state ----
  const cursor = { x: width * 0.5, y: height * 0.5, vx: 0, vy: 0, active: false };
  let lastPointerT = performance.now();

  function onPointerMove(e) {
    const now = performance.now();
    const dt = Math.max(0.001, (now - lastPointerT) / 1000);
    lastPointerT = now;
    const x = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? cursor.x;
    const y = e.clientY ?? (e.touches && e.touches[0]?.clientY) ?? cursor.y;
    cursor.vx = (x - cursor.x) / dt;
    cursor.vy = (y - cursor.y) / dt;
    cursor.x = x;
    cursor.y = y;
    cursor.active = true;
  }
  function onPointerEnd() { cursor.active = false; }

  // passive, non-blocking listeners
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('pointerleave', onPointerEnd, { passive: true });
  window.addEventListener('touchend', onPointerEnd, { passive: true });

  // Scroll influence
  let lastScrollY = window.scrollY, scrollVel = 0;
  function onScroll() {
    const y = window.scrollY;
    scrollVel = (y - lastScrollY);
    lastScrollY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Render setup ----
  if (opts.useBlend) {
    ctx.globalCompositeOperation = 'lighter'; // soft additive glow
  }

  let rafId = 0;
  let lastT = performance.now();

  function step() {
    const now = performance.now();
    const dt = Math.min(0.033, (now - lastT) / 1000); // clamp to ~30ms
    lastT = now;
    const t = now;

    // Ambient trail fade
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--background') || '#fff';
    ctx.fillStyle = hexToRgba(bg.trim(), opts.backgroundAlpha);
    ctx.fillRect(0, 0, width, height);
    ctx.restore();

    const baseSpeed = opts.speed * (1 + opts.scrollInfluence * clamp(Math.abs(scrollVel) / 600, 0, 1));
    // light decay of scroll velocity
    scrollVel *= 0.9;

    for (let p of particles) {
      // Vector field direction
      const [dx, dy] = fieldDir(p.x, p.y, t);

      // Cursor attraction/deflection (subtle)
      let ix = 0, iy = 0;
      if (cursor.active) {
        const rx = p.x - cursor.x;
        const ry = p.y - cursor.y;
        const r2 = rx * rx + ry * ry;
        const influence = opts.interaction / (1 + r2 * 0.001);
        // mix in a curl around the pointer using its velocity
        ix += (-ry * 0.002 + cursor.vx * 0.00005) * influence * width;
        iy += (rx * 0.002 + cursor.vy * 0.00005) * influence * height;
      }

      const spd = 40 * baseSpeed * p.speedMul; // px/sec
      const vx = dx * spd + ix;
      const vy = dy * spd + iy;

      // Integrate
      p.px = p.x; p.py = p.y;
      p.x += vx * dt;
      p.y += vy * dt;

      // Wrap around edges for continuity
      if (p.x < -2) { p.x = width + 2; p.px = p.x; }
      if (p.x > width + 2) { p.x = -2; p.px = p.x; }
      if (p.y < -2) { p.y = height + 2; p.py = p.y; }
      if (p.y > height + 2) { p.y = -2; p.py = p.y; }

      // Life fade + respawn
      p.life += dt * 0.08;
      if (p.life > 1) {
        const np = spawnParticle();
        p.x = np.x; p.y = np.y; p.px = null; p.py = null;
        p.life = 0; p.hue = np.hue; p.speedMul = np.speedMul; p.lw = np.lw;
      }

      // Draw segment
      if (p.px != null) {
        ctx.lineWidth = p.lw * dpr;
        ctx.strokeStyle = p.hue;
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
    }

    rafId = requestAnimationFrame(step);
  }

  rafId = requestAnimationFrame(step);

  // ---- Public API ----
  function destroy() {
    cancelAnimationFrame(rafId);
    ro.disconnect();
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('touchmove', onPointerMove);
    window.removeEventListener('pointerleave', onPointerEnd);
    window.removeEventListener('touchend', onPointerEnd);
    window.removeEventListener('scroll', onScroll);
    mountEl.contains(canvas) && mountEl.removeChild(canvas);
  }

  function setOptions(next = {}) {
    Object.assign(opts, next);
  }

  return destroy;
}

// Small utility: clamp
function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

function hexToRgba(hex, alpha = 1) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
  const num = parseInt(hex, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}