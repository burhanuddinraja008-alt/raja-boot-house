/* RBH Feature 3: Play with the mascot (self-contained).
   To remove: delete the <script src="rbh-mascot-play.js"> tag in index.html (and this file).
   Off by default. A small paw button turns it on; the cursor-following mascot comes back when it is off. */
(function () {
  'use strict';
  if (window.__rbhPal) return;
  window.__rbhPal = 1;
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  var W = 60, H = 63, SIT = 43; // pal box, and distance from its top to the sole
  var KEY = 'rbhPal';

  var css = document.createElement('style');
  css.textContent =
    'html.rbh-play #rbh-mascot{display:none!important}' +
    '#rbh-pal{position:fixed;left:0;top:0;width:' + W + 'px;height:' + H + 'px;z-index:99990;display:none;will-change:transform;touch-action:none;pointer-events:none;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none}' +
    '#rbh-pal.on{display:block}#rbh-pal.grab{pointer-events:auto}' +
    '#rbh-pal.home{pointer-events:auto;cursor:grab}#rbh-pal.drag{cursor:grabbing}' +
    '#rbh-pal .body{width:100%;height:100%;transform-origin:50% 50%;filter:drop-shadow(0 4px 3px rgba(11,31,75,.22))}' +
    '#rbh-pal svg{width:100%;height:100%;overflow:visible;display:block}' +
    '#rbh-pal .leg{display:none}' +
    '#rbh-pal.sit .leg,#rbh-pal.climb .leg,#rbh-pal.drag .leg{display:inline}' +
    '#rbh-pal.sit .leg.a{animation:rbhpal-sw 1s ease-in-out infinite alternate}' +
    '#rbh-pal.sit .leg.b{animation:rbhpal-sw 1s ease-in-out infinite alternate-reverse}' +
    '#rbh-pal.drag .leg.a{animation:rbhpal-sw .5s ease-in-out infinite alternate}' +
    '#rbh-pal.drag .leg.b{animation:rbhpal-sw .5s ease-in-out infinite alternate-reverse}' +
    '#rbh-pal.climb .leg.a{animation:rbhpal-sw .28s linear infinite alternate}' +
    '#rbh-pal.climb .leg.b{animation:rbhpal-sw .28s linear infinite alternate-reverse}' +
    '@keyframes rbhpal-sw{from{transform:rotate(-24deg)}to{transform:rotate(24deg)}}' +
    '#rbh-pal .eyes{transform-box:fill-box;transform-origin:center;transition:transform .1s}' +
    '#rbh-pal.blink .eyes{transform:scaleY(.08)}' +
    '#rbh-pal .eyes,#rbh-pal .zeyes,#rbh-pal .jeyes,#rbh-pal .spark,#rbh-pal .zzz{transition:opacity .15s}' +
    '#rbh-pal .zeyes,#rbh-pal .jeyes,#rbh-pal .spark,#rbh-pal .zzz{opacity:0}' +
    '#rbh-pal.sleep .eyes,#rbh-pal.joy .eyes{opacity:0}' +
    '#rbh-pal.sleep .zeyes,#rbh-pal.joy .jeyes{opacity:1}' +
    '#rbh-pal.sleep .zzz{opacity:1;animation:rbhpal-z 2.6s ease-in-out infinite}' +
    '#rbh-pal.joy .body{animation:rbhpal-hop .65s ease-out both}' +
    '#rbh-pal.joy .spark{animation:rbhpal-tw .65s ease-out both}' +
    '@keyframes rbhpal-hop{0%{transform:scale(1.08,.88)}35%{transform:translateY(-14px) rotate(-7deg) scale(.96,1.04)}65%{transform:translateY(-7px) rotate(5deg)}85%{transform:scale(1.08,.92)}100%{transform:none}}' +
    '@keyframes rbhpal-tw{0%{opacity:0;transform:scale(.7)}35%{opacity:1}100%{opacity:0;transform:translateY(-8px) scale(1.12)}}' +
    '@keyframes rbhpal-z{0%,100%{transform:translateY(0);opacity:.45}50%{transform:translateY(-4px);opacity:1}}' +
    '#rbh-pal-btn{position:fixed;right:12px;z-index:99991;width:42px;height:42px;border-radius:50%;border:1.5px solid #d7b365;background:linear-gradient(180deg,#183563,#0b1f4b);color:#f6d994;box-shadow:0 4px 12px rgba(11,31,75,.3);display:flex;align-items:center;justify-content:center;padding:0;cursor:pointer;-webkit-tap-highlight-color:transparent}' +
    '#rbh-pal-btn[aria-pressed="true"]{background:linear-gradient(180deg,#e9c76f,#c49943);color:#0b1f4b}' +
    '#rbh-pal-btn svg{width:22px;height:22px}' +
    '#rbh-pal-hint{position:fixed;right:62px;z-index:99991;padding:6px 11px;border-radius:14px;background:#0b1f4b;color:#fff3d0;border:1.5px solid #d7b365;font:600 12px/1.2 system-ui,-apple-system,sans-serif;opacity:0;transition:opacity .25s;pointer-events:none;white-space:nowrap}' +
    '#rbh-pal-hint.show{opacity:1}';
  document.head.appendChild(css);

  var pal = document.createElement('div');
  pal.id = 'rbh-pal';
  pal.setAttribute('aria-hidden', 'true');
  pal.innerHTML =
    '<div class="body"><svg viewBox="0 8 80 84">' +
    '<defs><linearGradient id="rbhpal-sh" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="#365b8f"/><stop offset=".55" stop-color="#142f58"/><stop offset="1" stop-color="#0b1f4b"/></linearGradient>' +
    '<linearGradient id="rbhpal-so" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#ffe6a2"/><stop offset="1" stop-color="#c49943"/></linearGradient></defs>' +
    '<g transform="translate(28 64)"><g class="leg a"><rect x="-2.3" y="0" width="4.6" height="16" rx="2.3" fill="#142f58" stroke="#d7b365" stroke-width="1.2"/><ellipse cx="2.5" cy="17.5" rx="5.5" ry="3" fill="url(#rbhpal-so)" stroke="#ae8536" stroke-width="1"/></g></g>' +
    '<g transform="translate(52 64)"><g class="leg b"><rect x="-2.3" y="0" width="4.6" height="16" rx="2.3" fill="#142f58" stroke="#d7b365" stroke-width="1.2"/><ellipse cx="2.5" cy="17.5" rx="5.5" ry="3" fill="url(#rbhpal-so)" stroke="#ae8536" stroke-width="1"/></g></g>' +
    '<path d="M9 43c0-11 5-19 14-23l9-3c3-1 5 0 7 4l5 8c3 4 8 7 17 9 8 2 12 6 12 13v5H9z" fill="url(#rbhpal-sh)" stroke="#d7b365" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M18 29c3-5 7-7 12-8" fill="none" stroke="#7395bd" stroke-width="2.3" opacity=".6" stroke-linecap="round"/>' +
    '<path d="M25 20l8-3c3-1 5 1 7 5l2 4-12 4z" fill="#0b1f4b" stroke="#d7b365" stroke-width="1.5"/>' +
    '<path d="M30 28l9-3m-6 8 9-3m-5 8 9-3" stroke="#f6d994" stroke-width="2.4" stroke-linecap="round"/>' +
    '<path d="M9 53q29 6 64-1v7c0 4-3 6-7 6H17c-5 0-8-3-8-6z" fill="url(#rbhpal-so)" stroke="#ae8536" stroke-width="1.4"/>' +
    '<path d="M12 59q26 4 58-1" fill="none" stroke="#fff3ca" stroke-width="1.3"/>' +
    '<g class="look"><g class="eyes"><ellipse cx="29" cy="42" rx="2.5" ry="3.8" fill="#fff3d0"/><ellipse cx="45" cy="42" rx="2.5" ry="3.8" fill="#fff3d0"/><circle cx="28.4" cy="40.9" r=".65" fill="#fff"/><circle cx="44.4" cy="40.9" r=".65" fill="#fff"/></g></g>' +
    '<g class="zeyes" fill="none" stroke="#fff3d0" stroke-width="2" stroke-linecap="round"><path d="M26 43q3 3 6 0m10 0q3 3 6 0"/></g>' +
    '<g class="jeyes" fill="none" stroke="#fff3d0" stroke-width="2" stroke-linecap="round"><path d="M26 43q3-5 6 0m10 0q3-5 6 0"/></g>' +
    '<ellipse cx="22" cy="47" rx="3.4" ry="1.8" fill="#f8a6a5" opacity=".7"/><ellipse cx="52" cy="47" rx="3.4" ry="1.8" fill="#f8a6a5" opacity=".7"/>' +
    '<path d="M33 48q4 5 8 0" stroke="#fff3d0" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
    '<g class="spark" fill="#edc76e"><path d="M9 15l2 5 5 2-5 2-2 5-2-5-5-2 5-2zM67 20l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z"/></g>' +
    '<text class="zzz" x="58" y="22" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#b99139" letter-spacing="2">z z</text>' +
    '</svg></div>';
  document.body.appendChild(pal);
  var body = pal.querySelector('.body'), look = pal.querySelector('.look');

  var btn = document.createElement('button');
  btn.id = 'rbh-pal-btn'; btn.type = 'button';
  btn.setAttribute('aria-label', 'Play with the mascot'); btn.setAttribute('aria-pressed', 'false');
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><ellipse cx="6.5" cy="10" rx="2.1" ry="2.8"/><ellipse cx="11" cy="6.3" rx="2.1" ry="2.8"/><ellipse cx="16.5" cy="7" rx="2.1" ry="2.8"/><ellipse cx="20" cy="12" rx="1.9" ry="2.6"/><path d="M12 11c-3.4 0-6 3.1-6 5.6 0 1.7 1.2 2.6 2.7 2.6 1.2 0 2-.5 3.3-.5s2.1.5 3.3.5c1.5 0 2.7-.9 2.7-2.6C18 14.1 15.4 11 12 11z"/></svg>';
  document.body.appendChild(btn);
  var hint = document.createElement('div');
  hint.id = 'rbh-pal-hint'; hint.setAttribute('aria-hidden', 'true');
  document.body.appendChild(hint);

  var on = false, state = 'off', x = 0, y = 0, f = 1, r = 0, session = 0, sleepT = 0, hintT = 0;

  function navH() {
    var el = document.elementFromPoint(innerWidth / 2, innerHeight - 3);
    while (el && el !== document.body) {
      if (getComputedStyle(el).position === 'fixed') { var b = el.getBoundingClientRect(); var h = innerHeight - b.top; return h > 0 && h < 130 ? h : 0; }
      el = el.parentElement;
    }
    return 0;
  }
  function place() { pal.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)'; }
  function pose() { body.style.transform = 'scaleX(' + f + ') rotate(' + r.toFixed(1) + 'deg)'; }
  function overlap(px, py, bl) {
    var a = 0;
    for (var k = 0; k < bl.length; k++) {
      var q = bl[k], w = Math.min(px + W, q.right) - Math.max(px, q.left), h = Math.min(py + H, q.bottom) - Math.max(py, q.top);
      if (w > 2 && h > 2) a += w * h;
    }
    return a;
  }
  /* park on the spot that covers the fewest buttons/links (bottom-left preferred) */
  function homePos() {
    var bl = blockers(), base = innerHeight - navH() - H - 14, xs = [12, Math.round(innerWidth / 2 - W / 2), innerWidth - W - 66], best = null;
    for (var i = 0; i < xs.length; i++) for (var j = 0; j < 12; j++) {
      var px = xs[i], py = base - j * 20, sc = overlap(px, py, bl) + i * 40 + j * 15;
      if (py < 90) continue;
      if (!best || sc < best.sc) best = { x: px, y: py, sc: sc, ov: overlap(px, py, bl) };
    }
    return best || { x: 12, y: base, ov: 0 };
  }
  function setState(s) {
    state = s;
    pal.classList.remove('home', 'drag', 'sit', 'climb', 'sleep', 'joy');
    if (s === 'home' || s === 'drag' || s === 'sit' || s === 'climb') pal.classList.add(s);
  }
  function positionButton() {
    var b = navH() + 12; btn.style.bottom = b + 'px'; hint.style.bottom = (b + 8) + 'px';
  }
  function say(t) {
    hint.textContent = t; hint.classList.add('show'); clearTimeout(hintT);
    hintT = setTimeout(function () { hint.classList.remove('show'); }, 3200);
  }

  /* blink + eye look, cheap timers */
  setInterval(function () {
    if (!on || document.hidden || pal.classList.contains('sleep')) return;
    pal.classList.add('blink'); setTimeout(function () { pal.classList.remove('blink'); }, 130);
  }, 3800);
  function lookDown(d) { look.setAttribute('transform', 'translate(0 ' + (d ? 2.4 : 0) + ')'); }

  function ease(t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
  function frame(dur, fn) {
    var s = session;
    return new Promise(function (res) {
      var t0 = performance.now();
      (function step(now) {
        if (s !== session) return res(false);
        var t = Math.min(1, (now - t0) / dur);
        if (fn(t) === false) return res(false);
        if (t >= 1) return res(true);
        requestAnimationFrame(step);
      })(t0);
    });
  }
  function wait(ms) { return frame(ms, function () { }); }

  function resetSleep() {
    pal.classList.remove('sleep'); clearTimeout(sleepT);
    if (state === 'home') sleepT = setTimeout(function () { if (state === 'home') pal.classList.add('sleep'); }, 20000);
  }

  function goHome(animate) {
    var s = ++session, h = homePos();
    setState('off'); pal.classList.add('on');
    if (!animate) { x = h.x; y = h.y; f = 1; r = 0; place(); pose(); lookDown(0); setState('home'); resetSleep(); return Promise.resolve(); }
    var x0 = x, y0 = y, r0 = r;
    var dist = Math.hypot(h.x - x0, h.y - y0), dur = Math.max(450, Math.min(900, dist * 1.1));
    return frame(dur, function (t) {
      var e = ease(t); x = x0 + (h.x - x0) * e; y = y0 + (h.y - y0) * e - Math.sin(Math.PI * t) * Math.min(70, dist * .25);
      r = r0 * (1 - e); place(); pose();
    }).then(function (ok) { if (ok && s === session) { f = 1; r = 0; pose(); lookDown(0); setState('home'); resetSleep(); } });
  }

  function findCard(cx, cy) {
    var els = document.elementsFromPoint(cx, cy);
    for (var i = 0; i < els.length; i++) { var c = els[i].closest && els[i].closest('.card'); if (c) return c; }
    var best = null, bd = 50, all = document.querySelectorAll('.card');
    for (var j = 0; j < all.length; j++) {
      var b = all[j].getBoundingClientRect();
      if (b.width < 20 || b.bottom < 0 || b.top > innerHeight) continue;
      var dx = Math.max(b.left - cx, 0, cx - b.right), dy = Math.max(b.top - cy, 0, cy - b.bottom), d = Math.hypot(dx, dy);
      if (d < bd) { bd = d; best = all[j]; }
    }
    return best;
  }
  function blockers() {
    var out = [], els = document.querySelectorAll('a,button,input,select,textarea,[role="button"],label');
    for (var i = 0; i < els.length; i++) {
      var e = els[i]; if (pal.contains(e) || e === btn) continue;
      var b = e.getBoundingClientRect();
      if (b.width < 4 || b.height < 4 || b.bottom < 0 || b.top > innerHeight) continue;
      var cs = getComputedStyle(e); if (cs.visibility === 'hidden' || cs.display === 'none') continue;
      out.push(b);
    }
    return out;
  }
  function pickLanding(card, wantX) {
    var b = card.getBoundingClientRect(), edge = b.top, bl = blockers(), lo = b.left + 6, hi = b.right - 6 - W;
    if (hi < lo) return null;
    var cands = [], px = Math.max(lo, Math.min(hi, wantX - W / 2));
    for (var cx = lo; cx <= hi; cx += 8) cands.push(cx);
    cands.push(px);
    cands.sort(function (a, c) { return Math.abs(a - px) - Math.abs(c - px); });
    for (var i = 0; i < cands.length; i++) {
      var rx = cands[i], ry = edge - SIT;
      var ok = true;
      for (var k = 0; k < bl.length; k++) {
        var q = bl[k];
        if (rx + W - 3 > q.left && rx + 3 < q.right && ry + H - 3 > q.top && ry + 3 < q.bottom) { ok = false; break; }
      }
      if (ok) return rx - b.left;
    }
    return null;
  }

  function edgeVisible(card) {
    var t = card.getBoundingClientRect().top;
    return t > SIT + 56 && t < innerHeight - navH() - 90;
  }
  function settleScroll() {
    var last = -1, n = 0;
    return new Promise(function (res) {
      var t0 = performance.now(), s = session;
      (function chk(now) {
        if (s !== session) return res(false);
        if (window.scrollY === last) n++; else n = 0;
        last = window.scrollY;
        if (n >= 4 || now - t0 > 1200) return res(true);
        requestAnimationFrame(chk);
      })(t0);
    });
  }

  function perch(card) {
    var s = ++session;
    setState('off'); pal.classList.add('on');
    var live = function () { return s === session && card.isConnected && edgeVisible(card) ; };
    var p = Promise.resolve(true);
    if (!edgeVisible(card)) {
      var tgt = card.getBoundingClientRect().top + scrollY - Math.round(innerHeight * .28);
      scrollTo({ top: Math.max(0, tgt), behavior: 'smooth' });
      p = settleScroll();
    }
    return p.then(function (ok) {
      if (!ok || s !== session) return;
      var b = card.getBoundingClientRect();
      var lx = pickLanding(card, x + W / 2 - b.left + b.left);
      if (lx == null || !edgeVisible(card)) { say('Yahan jagah nahi hai'); return goHome(true); }
      var roomL = b.left, roomR = innerWidth - b.right, left;
      var preferLeft = (x + W / 2) < (b.left + b.right) / 2;
      left = preferLeft ? roomL >= 34 || roomL >= roomR : !(roomR >= 34 || roomR >= roomL);
      var fl = left ? 1 : -1;
      // wall centre x so the sole touches the card wall
      var wx = function () { var q = card.getBoundingClientRect(); return left ? q.left - 13 : q.right + 13; };
      var edgeY = function () { return card.getBoundingClientRect().top; };
      var startCy = Math.max(edgeY() + 90, Math.min(y + H / 2, edgeY() + 220));
      var x0 = x, y0 = y, f0 = f;
      // 1. run to the wall and turn to climb
      return frame(500, function (t) {
        if (!live()) return false;
        var e = ease(t), tx = wx() - W / 2, ty = startCy - H / 2;
        x = x0 + (tx - x0) * e; y = y0 + (ty - y0) * e - Math.sin(Math.PI * t) * 24;
        f = t < .5 ? f0 : fl; r = -90 * e; place(); pose();
      }).then(function (ok) {
        if (!ok) return false;
        setState('climb'); f = fl; r = -90; pose();
        var c0 = startCy;
        // 2. climb up the wall
        return frame(1300, function (t) {
          if (!live()) return false;
          var e = ease(t), cy = c0 + ((edgeY() + 8) - c0) * e;
          x = wx() - W / 2 + Math.sin(t * 22) * .8; y = cy - H / 2; r = -90; place(); pose();
        });
      }).then(function (ok) {
        if (!ok) return false;
        setState('sit'); var sx = x, sy = y;
        // 3. hop over the edge and sit down
        return frame(520, function (t) {
          if (!live()) return false;
          var q = card.getBoundingClientRect(), e = ease(t);
          var tx = q.left + lx, ty = q.top - SIT;
          x = sx + (tx - sx) * e; y = sy + (ty - sy) * e - Math.sin(Math.PI * t) * 34; r = -90 * (1 - e); place(); pose();
        });
      }).then(function (ok) {
        if (!ok) return false;
        var follow = function () { var q = card.getBoundingClientRect(); x = q.left + lx; y = q.top - SIT; place(); };
        // 4. sit and swing legs, then peek over the card
        return frame(3000, function () { if (!live()) return false; r = 0; follow(); pose(); })
          .then(function (ok) {
            if (!ok) return false;
            lookDown(1);
            return frame(1700, function (t) { if (!live()) return false; r = 13 * Math.min(1, t * 5) * (t > .85 ? (1 - t) / .15 : 1); follow(); pose(); });
          }).then(function (ok) { lookDown(0); if (!ok) return false; return frame(900, function () { if (!live()) return false; r = 0; follow(); pose(); }); });
      }).then(function (ok) { if (s === session) { f = 1; return goHome(true); } });
    });
  }

  /* drag, tap */
  var dragging = false, gx = 0, gy = 0, sx0 = 0, sy0 = 0, t0 = 0, moved = false, scrollRaf = 0, lastPy = 0;
  pal.addEventListener('pointerdown', function (e) {
    if (state !== 'home') return;
    e.preventDefault(); session++; dragging = true; moved = false; t0 = performance.now();
    pal.setPointerCapture(e.pointerId);
    gx = e.clientX - x; gy = e.clientY - y; sx0 = e.clientX; sy0 = e.clientY; lastPy = e.clientY;
    clearTimeout(sleepT); pal.classList.remove('sleep');
  });
  pal.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    if (!moved && Math.hypot(e.clientX - sx0, e.clientY - sy0) > 7) { moved = true; setState('drag'); }
    if (!moved) return;
    x = Math.max(4, Math.min(innerWidth - W - 4, e.clientX - gx)); y = Math.max(4, Math.min(innerHeight - H - 4, e.clientY - gy));
    f = 1; r = Math.max(-18, Math.min(18, (e.clientX - sx0) * .1)); lastPy = e.clientY; place(); pose();
    if (!scrollRaf) scrollRaf = requestAnimationFrame(autoScroll);
  });
  function autoScroll() {
    scrollRaf = 0; if (!dragging || !moved) return;
    var top = 70, bot = innerHeight - navH() - 40, d = 0;
    if (lastPy < top) d = -10; else if (lastPy > bot) d = 10;
    if (d) { scrollBy(0, d); scrollRaf = requestAnimationFrame(autoScroll); }
  }
  function end(e, cancel) {
    if (!dragging) return; dragging = false;
    try { pal.releasePointerCapture(e.pointerId); } catch (_) { }
    if (!moved) { // tap
      setState('home'); pal.classList.add('joy'); resetSleep();
      setTimeout(function () { pal.classList.remove('joy'); }, 680); return;
    }
    r = 0; pose();
    if (cancel) return void goHome(true);
    var card = findCard(x + W / 2, y + H / 2);
    if (!card) return void goHome(true);
    perch(card);
  }
  pal.addEventListener('pointerup', function (e) { end(e, false); });
  pal.addEventListener('pointercancel', function (e) { end(e, true); });

  function turn(v) {
    on = v; btn.setAttribute('aria-pressed', v ? 'true' : 'false');
    try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (_) { }
    document.documentElement.classList.toggle('rbh-play', v);
    session++; clearTimeout(sleepT);
    if (v) { var m = document.getElementById('rbh-mascot'); var h = homePos(); x = h.x; y = h.y - 40; place(); pose(); pal.classList.add('on'); goHome(true); }
    else { pal.classList.remove('on'); setState('off'); }
  }
  btn.addEventListener('click', function () {
    turn(!on);
    if (on) say('Mujhe pakad ke kisi card pe bithao');
  });
  var scT = 0;
  addEventListener('scroll', function () {
    clearTimeout(scT);
    scT = setTimeout(function () {
      if (!on || state !== 'home' || dragging) return;
      var cur = overlap(x, y, blockers()), h = homePos();
      if (cur > 0 && h.ov < cur) goHome(true);
    }, 700);
  }, { passive: true });
  addEventListener('resize', function () { positionButton(); if (state === 'home') goHome(false); });
  document.addEventListener('visibilitychange', function () { if (document.hidden && (state === 'sit' || state === 'climb')) goHome(false); });
  positionButton();
  setTimeout(positionButton, 1500);
  try { if (localStorage.getItem(KEY) === '1') turn(true); } catch (_) { }
})();
