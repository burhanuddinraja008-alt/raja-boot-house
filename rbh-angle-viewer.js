/* RBH angle viewer: drag/swipe the product photo to turn through its angles.
   Only activates when a product has 4+ photos. Not a true 360. */
(function () {
  var img = document.getElementById('pdp-img'), th = document.getElementById('pdp-thumbs');
  if (!img || !th) return;
  var gal = img.parentNode, hint, dots, list = [], idx = 0, active = false, sx = 0, si = 0, moved = false, down = false;
  function build() {
    list = Array.prototype.map.call(th.querySelectorAll('img'), function (t) { return t.src; });
    var on = active;
    active = list.length >= 4;
    gal.classList.toggle('av-on', active);
    if (hint) { hint.remove(); hint = null; }
    if (dots) { dots.remove(); dots = null; }
    if (!active) return;
    list.forEach(function (s) { var p = new Image(); p.src = s; });
    idx = Math.max(0, list.indexOf(img.src));
    hint = document.createElement('div'); hint.className = 'av-hint';
    hint.textContent = '\u25C0  Drag to turn  \u25B6   \u00B7   ' + list.length + ' angles';
    dots = document.createElement('div'); dots.className = 'av-dots';
    list.forEach(function () { dots.appendChild(document.createElement('i')); });
    gal.appendChild(hint); gal.appendChild(dots); mark();
  }
  function mark() {
    if (!dots) return;
    Array.prototype.forEach.call(dots.children, function (d, i) { d.className = i === idx ? 'on' : ''; });
    Array.prototype.forEach.call(th.querySelectorAll('img'), function (t, i) { t.classList.toggle('on', i === idx); });
  }
  function go(i) {
    i = (i + list.length) % list.length;
    if (i === idx) return; idx = i; img.src = list[i]; mark();
  }
  img.addEventListener('pointerdown', function (e) {
    if (!active) return; down = true; moved = false; sx = e.clientX; si = idx;
    try { img.setPointerCapture(e.pointerId); } catch (x) {}
  });
  img.addEventListener('pointermove', function (e) {
    if (!active || !down) return;
    var dx = e.clientX - sx;
    if (Math.abs(dx) > 8) { moved = true; if (hint) hint.classList.add('gone'); }
    var step = Math.max(40, img.clientWidth / (list.length + 1));
    go(si - Math.round(dx / step));
  });
  function up() { down = false; }
  img.addEventListener('pointerup', up); img.addEventListener('pointercancel', up);
  img.addEventListener('click', function (e) { if (moved) { e.stopImmediatePropagation(); e.preventDefault(); moved = false; } }, true);
  new MutationObserver(function () { setTimeout(build, 0); }).observe(th, { childList: true });
  /* keep dots in sync when a thumbnail is tapped */
  th.addEventListener('click', function () { setTimeout(function () { var i = list.indexOf(img.src); if (i > -1) { idx = i; mark(); } }, 0); });
})();
