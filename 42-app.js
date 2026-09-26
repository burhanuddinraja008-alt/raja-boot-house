(function () {
  var WA = function (t) { return 'https://wa.me/919022150546?text=' + t; };
  var items = [
    { n: 1, brand: 'Addoxy', name: 'Addoxy Sports Sneaker', colour: 'White / Black', offer: '\u20B9450', mrp: '\u20B9899', c: '4-c01.jpg', f: ['22-f01.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Addoxy+Sports+Sneaker+-+Rs+450+%28MRP+Rs+899%29.+Please+share+available+sizes.+%281%29') },
    { n: 2, brand: 'Xlerate', name: 'Xlerate Sports Shoes', colour: 'Blue / Green', offer: '\u20B9450', mrp: '\u20B91299', c: '5-c02.jpg', f: ['23-f02.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Xlerate+Sports+Shoes+%28Blue%2FGreen%29+-+Rs+450+%28MRP+Rs+1299%29.+Please+share+available+sizes.+%282%29') },
    { n: 3, brand: 'TRV Sports', name: 'TRV Sports Shoes', colour: 'Black / Gold', offer: '\u20B9650', mrp: '\u20B91299', c: '6-c03.jpg', f: ['24-f03.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+TRV+Sports+Shoes+%28Black%2FGold%29+-+Rs+650+%28MRP+Rs+1299%29.+Please+share+available+sizes.+%283%29') },
    { n: 4, brand: 'Sparx', name: 'Sparx Sport Shoe', colour: 'White / Teal / Orange', offer: '\u20B9850', mrp: '\u20B91499', c: '7-c04.jpg', f: ['25-f04.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Sparx+Sport+Shoe+%28White%2FTeal%2FOrange%29+-+Rs+850+%28MRP+Rs+1499%29.+Please+share+available+sizes.+%284%29') },
    { n: 5, brand: 'RBH', name: "RBH Men's Sliders", colour: 'Grey', offer: '\u20B9250', mrp: '\u20B9499', c: '8-c05.jpg', f: ['26-f05.jpg', '39-f05b.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Men%27s+Sliders+%28Grey%29+-+Rs+250+%28MRP+Rs+499%29.+Please+share+available+sizes.+%285%29') },
    { n: 6, brand: 'Bata Power', name: 'Bata Power Sports Sandal', colour: 'Olive / Yellow', offer: '\u20B9450', mrp: '\u20B9899', c: '9-c06.jpg', f: ['27-f06.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Bata+Power+Sports+Sandal+%28Olive%2FYellow%29+-+Rs+450+%28MRP+Rs+899%29.+Please+share+available+sizes.+%286%29') },
    { n: 7, brand: 'Bata Power', name: 'Bata Power Sports Sandal', colour: 'Navy / Blue', offer: '\u20B9450', mrp: '\u20B9899', c: '10-c07.jpg', f: ['28-f07.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Bata+Power+Sports+Sandal+%28Navy%2FBlue%29+-+Rs+450+%28MRP+Rs+899%29.+Please+share+available+sizes.+%287%29') },
    { n: 8, brand: 'TRK', name: "TRK Men's Sliders", colour: 'Black', c: '11-c08.jpg', f: ['29-f08.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+TRK+Men%27s+Sliders+%28Black%29.+Please+share+price+and+available+sizes.+%288%29') },
    { n: 9, brand: 'Flite', name: 'Flite Slide', colour: 'Camo Blue', offer: '\u20B9199', c: '12-c09.jpg', f: ['30-f09.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Flite+Slide+%28Camo+Blue%29+-+Rs+199.+Please+share+available+sizes.+%289%29') },
    { n: 10, brand: 'Puma', name: 'Puma Slides', colour: 'Red / Black', offer: '\u20B9250', mrp: '\u20B9460', c: '13-c10.jpg', f: ['31-f10.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Puma+Slides+%28Red%29+-+Rs+250+%28MRP+Rs+460%29.+Please+share+available+sizes.+%2810%29') },
    { n: 11, brand: 'AIR', name: 'AIR Slide', colour: 'Navy / Blue', offer: '\u20B9150', c: '14-c11.jpg', f: ['32-f11.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+AIR+Slide+%28Navy%2FBlue%29+-+Rs+150.+Please+share+available+sizes.+%2811%29') },
    { n: 12, brand: 'BOSS', name: 'BOSS Slide', colour: 'White / Navy', offer: '\u20B9150', c: '15-c12.jpg', f: ['33-f12.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+BOSS+Slide+%28White%2FNavy%29+-+Rs+150.+Please+share+available+sizes.+%2812%29') },
    { n: 13, brand: 'Sport', name: 'Sport Slide', colour: 'Black / Red', offer: '\u20B9150', c: '16-c13.jpg', f: ['34-f13.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+SPORT+Slide+%28Black%2FRed%29+-+Rs+150.+Please+share+available+sizes.+%2813%29') },
    { n: 14, brand: 'V Shape', name: 'V Shape Flip-flop (PU-SKT)', colour: 'Black / Green', offer: '\u20B9120', c: '17-c14.jpg', f: ['35-f14.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+V+Shape+PU-SKT+Flip-flop+%28Black%2FGreen%29+-+Rs+120.+Please+share+available+sizes.+%2814%29') },
    { n: 15, brand: 'V Shape', name: 'V Shape Flip-flop', colour: 'Black / Red', offer: '\u20B9120', c: '18-c15.jpg', f: ['36-f15.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+V+Shape+Flip-flop+%28Black%2FRed%29+-+Rs+120.+Please+share+available+sizes.+%2815%29') },
    { n: 16, brand: 'Combit', name: 'Combit Slide', colour: 'Black', offer: '\u20B9250', mrp: '\u20B9460', c: '19-c16.jpg', f: ['37-f16.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Combit+Slide+%28Black%29+-+Rs+250+%28MRP+Rs+460%29.+Please+share+available+sizes.+%2816%29') },
    { n: 17, brand: 'Combit', name: 'Combit Slide', colour: 'Red / Black', offer: '\u20B9250', mrp: '\u20B9460', c: '20-c17.jpg', f: ['38-f17.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Combit+Slide+%28Red%29+-+Rs+250+%28MRP+Rs+460%29.+Please+share+available+sizes.+%2817%29') }
  ];

  function card(it) {
    var el = document.createElement('article');
    el.className = 'card';
    el.innerHTML =
      '<div class="num">' + it.n + ' &nbsp;<span class="brand">' + it.brand + '</span></div>' +
      '<h3>' + it.name + '</h3>' +
      '<img src="' + it.c + '" alt="' + it.name + ', ' + it.colour + '" loading="lazy">' +
      (it.mrp ? '<div class="mrp">MRP ' + it.mrp + '</div>' : '') +
      '<div class="offer">' + (it.offer ? 'Offer Price ' + it.offer : 'Price: WhatsApp par poochhein') + '</div>' +
      '<div class="facts"><div><b>Colour</b> ' + it.colour + '</div><div><b>Available Sizes</b> WhatsApp par confirm karein</div></div>' +
      '<a class="btn" href="' + it.wa + '" target="_blank" rel="noopener">Order on WhatsApp</a>';
    el.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      openLb(it);
    });
    return el;
  }
  function fill(id, list) {
    var g = document.getElementById(id);
    list.forEach(function (it) { g.appendChild(card(it)); });
  }
  fill('grid-shoes', items.filter(function (i) { return i.n <= 4; }));
  fill('grid-sandals', items.filter(function (i) { return i.n >= 5 && i.n <= 8; }));
  fill('grid-slides', items.filter(function (i) { return i.n >= 9; }));

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById('lb'),
      stage = document.getElementById('lb-stage'),
      img = document.getElementById('lb-img'),
      title = document.getElementById('lb-title'),
      cap = document.getElementById('lb-cap'),
      waBtn = document.getElementById('lb-wa'),
      prev = document.getElementById('lb-prev'),
      next = document.getElementById('lb-next'),
      closeBtn = document.getElementById('lb-close');

  var cur = null, idx = 0;
  var scale = 1, tx = 0, ty = 0;

  function apply() {
    img.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + scale + ')';
  }
  function clampPan() {
    var sw = stage.clientWidth, sh = stage.clientHeight;
    var iw = img.clientWidth * scale, ih = img.clientHeight * scale;
    var mx = Math.max(0, (iw - sw) / 2), my = Math.max(0, (ih - sh) / 2);
    tx = Math.min(mx, Math.max(-mx, tx));
    ty = Math.min(my, Math.max(-my, ty));
  }
  function resetZoom() { scale = 1; tx = 0; ty = 0; apply(); }

  function show() {
    img.src = cur.f[idx];
    img.alt = cur.name + ', photo ' + (idx + 1);
    title.textContent = cur.name;
    cap.textContent = cur.colour + ' \u00B7 Photo ' + (idx + 1) + '/' + cur.f.length + ' \u00B7 Pinch ya double-tap se zoom karein';
    waBtn.href = cur.wa;
    var many = cur.f.length > 1;
    prev.style.display = many ? '' : 'none';
    next.style.display = many ? '' : 'none';
    resetZoom();
  }
  function openLb(it) {
    cur = it; idx = 0;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    show();
  }
  function closeLb() {
    lb.hidden = true;
    document.body.style.overflow = '';
    cur = null;
  }
  function nav(d) {
    if (!cur || cur.f.length < 2) return;
    idx = (idx + d + cur.f.length) % cur.f.length;
    show();
  }
  closeBtn.addEventListener('click', closeLb);
  prev.addEventListener('click', function () { nav(-1); });
  next.addEventListener('click', function () { nav(1); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') nav(-1);
    if (e.key === 'ArrowRight') nav(1);
  });

  /* Pointer gestures: pinch zoom, pan, swipe, double-tap */
  var pts = new Map(), pinchD0 = 0, scale0 = 1, mid0 = null, base = null;
  var downX = 0, downY = 0, movedFar = false, lastTap = 0;
  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function mid(a, b) { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }

  stage.addEventListener('pointerdown', function (e) {
    stage.setPointerCapture(e.pointerId);
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2) {
      var p = Array.from(pts.values());
      pinchD0 = dist(p[0], p[1]);
      scale0 = scale;
      mid0 = mid(p[0], p[1]);
      base = { x: tx, y: ty };
    } else if (pts.size === 1) {
      downX = e.clientX; downY = e.clientY;
      base = { x: tx, y: ty };
      movedFar = false;
    }
  });
  stage.addEventListener('pointermove', function (e) {
    if (!pts.has(e.pointerId)) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (Math.abs(e.clientX - downX) + Math.abs(e.clientY - downY) > 10) movedFar = true;
    if (pts.size === 2 && pinchD0 > 0) {
      var p = Array.from(pts.values());
      var m = mid(p[0], p[1]);
      scale = Math.min(5, Math.max(1, scale0 * dist(p[0], p[1]) / pinchD0));
      tx = base.x + (m.x - mid0.x);
      ty = base.y + (m.y - mid0.y);
      clampPan(); apply();
    } else if (pts.size === 1 && scale > 1) {
      tx = base.x + (e.clientX - downX);
      ty = base.y + (e.clientY - downY);
      clampPan(); apply();
    }
  });
  function lift(e) {
    var wasPinch = pts.size >= 2;
    pts.delete(e.pointerId);
    if (wasPinch) { pinchD0 = 0; if (pts.size === 1) { var p = pts.values().next().value; downX = p.x; downY = p.y; base = { x: tx, y: ty }; } return; }
    if (pts.size > 0) return;
    var now = Date.now();
    if (!movedFar) {
      if (now - lastTap < 320) {
        if (scale > 1) { scale = 1; tx = 0; ty = 0; }
        else { scale = 2.5; clampPan(); }
        apply();
        lastTap = 0;
        return;
      }
      lastTap = now;
      return;
    }
    if (scale <= 1 && cur && cur.f.length > 1) {
      var dx = e.clientX - downX;
      if (dx > 50) nav(-1);
      else if (dx < -50) nav(1);
    }
  }
  stage.addEventListener('pointerup', lift);
  stage.addEventListener('pointercancel', function (e) { pts.delete(e.pointerId); pinchD0 = 0; });
})();
