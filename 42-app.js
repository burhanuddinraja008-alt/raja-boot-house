(function () {
  var WA = function (t) { return 'https://wa.me/919022150546?text=' + t; };
  var SZ = '6 se 10 (confirm karne ke liye WhatsApp karein)';
  var OFFER = '';  // offer banner text - khali rakha toh banner nahi dikhega
  var items = [
    { n: 1, brand: 'Addoxy', name: 'Addoxy Sneaker', colour: 'White / Black', offer: '₹450', mrp: '₹899', sizes: SZ, c: '100-w01.jpg', f: ['123-t01.jpg', '142-m01.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Addoxy+Sneaker+-+Rs+450+%28MRP+Rs+899%29.+Please+share+available+sizes.+%281%29') },
    { n: 2, brand: 'Xlerate', name: 'Xlerate Sports Shoes', colour: 'Blue / Green', offer: '₹450', mrp: '₹1299', sizes: SZ, c: '101-w02.jpg', f: ['124-t02.jpg', '143-m02.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Xlerate+Sports+Shoes+%28Blue%2FGreen%29+-+Rs+450+%28MRP+Rs+1299%29.+Please+share+available+sizes.+%282%29') },
    { n: 3, brand: 'TRV Sports', name: 'TRV Sports Shoes', colour: 'Black / Gold', offer: '₹650', mrp: '₹1299', sizes: SZ, c: '102-w03.jpg', f: ['125-t03.jpg', '144-m03.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+TRV+Sports+Shoes+%28Black%2FGold%29+-+Rs+650+%28MRP+Rs+1299%29.+Please+share+available+sizes.+%283%29') },
    { n: 4, brand: 'Sparx', name: 'Sparx Sport Shoe', colour: 'White / Teal / Orange', offer: '₹850', mrp: '₹1499', sizes: SZ, c: '103-w04.jpg', f: ['126-t04.jpg', '145-m04.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Sparx+Sport+Shoe+%28White%2FTeal%2FOrange%29+-+Rs+850+%28MRP+Rs+1499%29.+Please+share+available+sizes.+%284%29') },
    { n: 5, brand: 'RBH', name: "RBH Men's Sliders", colour: 'Grey', offer: '₹250', mrp: '₹499', sizes: SZ, tag: "Men's", c: '104-w05.jpg', f: ['127-t05.jpg', '146-m05.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Men%27s+Sliders+%28Grey%29+-+Rs+250+%28MRP+Rs+499%29.+Please+share+available+sizes.+%285%29') },
    { n: 6, brand: 'Bata Power', name: 'Bata Power Sports Sandal', colour: 'Olive / Yellow', offer: '₹450', mrp: '₹899', sizes: SZ, c: '105-w06.jpg', f: ['128-t06.jpg', '147-m06.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Bata+Power+Sports+Sandal+%28Olive%2FYellow%29+-+Rs+450+%28MRP+Rs+899%29.+Please+share+available+sizes.+%286%29') },
    { n: 7, brand: 'Bata Power', name: 'Bata Power Sports Sandal', colour: 'Navy / Blue', offer: '₹450', mrp: '₹899', sizes: SZ, c: '106-w07.jpg', f: ['129-t07.jpg', '148-m07.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Bata+Power+Sports+Sandal+%28Navy%2FBlue%29+-+Rs+450+%28MRP+Rs+899%29.+Please+share+available+sizes.+%287%29') },
    { n: 8, brand: 'TRK', name: "TRK Men's Sliders", colour: 'Black', sizes: SZ, tag: "Men's", c: '107-w08.jpg', f: ['130-t08.jpg', '149-m08.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+TRK+Men%27s+Sliders+%28Black%29.+Please+share+price+and+available+sizes.+%288%29') },
    { n: 9, brand: 'Flite', name: 'Flite Slide', colour: 'Camo Blue', offer: '₹199', sizes: SZ, c: '108-w09.jpg', f: ['131-t09.jpg', '150-m09.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Flite+Slide+%28Camo+Blue%29+-+Rs+199.+Please+share+available+sizes.+%289%29') },
    { n: 10, brand: 'Puma', name: 'Puma Slides', colour: 'Red / Black', offer: '₹250', mrp: '₹460', sizes: SZ, c: '109-w10.jpg', f: ['132-t10.jpg', '151-m10.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Puma+Slides+%28Red%29+-+Rs+250+%28MRP+Rs+460%29.+Please+share+available+sizes.+%2810%29') },
    { n: 11, brand: 'AIR', name: 'AIR Slide', colour: 'Navy / Blue', offer: '₹150', sizes: SZ, c: '110-w11.jpg', f: ['133-t11.jpg', '152-m11.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+AIR+Slide+%28Navy%2FBlue%29+-+Rs+150.+Please+share+available+sizes.+%2811%29') },
    { n: 12, brand: 'BOSS', name: 'BOSS Slide', colour: 'White / Navy', offer: '₹150', sizes: SZ, c: '111-w12.jpg', f: ['134-t12.jpg', '153-m12.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+BOSS+Slide+%28White%2FNavy%29+-+Rs+150.+Please+share+available+sizes.+%2812%29') },
    { n: 13, brand: 'Sport', name: 'Sport Slide', colour: 'Black / Red', offer: '₹150', sizes: SZ, c: '112-w13.jpg', f: ['135-t13.jpg', '154-m13.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+SPORT+Slide+%28Black%2FRed%29+-+Rs+150.+Please+share+available+sizes.+%2813%29') },
    { n: 14, brand: 'V Shape', name: 'V Shape Flip-flop (PU-SKT)', colour: 'Black / Green', offer: '₹120', sizes: SZ, c: '113-w14.jpg', f: ['136-t14.jpg', '155-m14.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+V+Shape+PU-SKT+Flip-flop+%28Black%2FGreen%29+-+Rs+120.+Please+share+available+sizes.+%2814%29') },
    { n: 15, brand: 'V Shape', name: 'V Shape Flip-flop', colour: 'Black / Red', offer: '₹120', sizes: SZ, c: '114-w15.jpg', f: ['137-t15.jpg', '156-m15.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+V+Shape+Flip-flop+%28Black%2FRed%29+-+Rs+120.+Please+share+available+sizes.+%2815%29') },
    { n: 16, brand: 'Combit', name: 'Combit Flip-flop', colour: 'Black', offer: '₹250', mrp: '₹460', sizes: SZ, c: '115-w16.jpg', f: ['138-t16.jpg', '157-m16.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Combit+Flip-flop+%28Black%29+-+Rs+250+%28MRP+Rs+460%29.+Please+share+available+sizes.+%2816%29') },
    { n: 17, brand: 'Combit', name: 'Combit Flip-flop', colour: 'Red / Black', offer: '₹250', mrp: '₹460', sizes: SZ, c: '116-w17.jpg', f: ['139-t17.jpg', '158-m17.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Combit+Flip-flop+%28Red%29+-+Rs+250+%28MRP+Rs+460%29.+Please+share+available+sizes.+%2817%29') },
    { n: 18, brand: 'RBH', name: 'Crocs', colour: 'White / Grey / Black', offer: '₹150', mrp: '₹250', sizes: SZ, c: '117-w18.jpg', f: ['140-t18.jpg', '159-m18.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Crocs+%28White%2FGrey%2FBlack%29+-+Rs+150+%28MRP+Rs+250%29.+Size+6+se+10+mein+se+confirm+karenge.+%2818%29') },
    { n: 19, brand: 'RBH', name: 'Flip-flop', colour: 'White', offer: '₹100', sizes: '6/10', c: '118-w19.jpg', f: ['141-t19.jpg', '160-m19.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Flip-flop+%28White%29+-+Rs+100.+Size+6%2F10.+Stock+limited%21+%2819%29') }
  ];

  function card(it) {
    var el = document.createElement('article');
    el.className = 'card' + (it.oos ? ' oos' : '');
    el.innerHTML =
      '<div class="num">' + it.n + ' &nbsp;<span class="brand">' + it.brand + '</span>' + (it.tag ? ' &nbsp;<span class="gtag">' + it.tag + '</span>' : '') + (it.tag2 ? ' &nbsp;<span class="gtag2">' + it.tag2 + '</span>' : '') + '</div>' +
      '<h3>' + it.name + '</h3>' +
      '<img src="' + it.c + '" alt="' + it.name + ', ' + it.colour + '" loading="lazy">' +
      (it.mrp ? '<div class="mrp">MRP ' + it.mrp + '</div>' : '') +
      '<div class="offer">' + (it.offer ? 'Offer Price ' + it.offer : 'Price: WhatsApp par poochhein') + '</div>' +
      '<div class="facts"><div><b>Colour</b> ' + it.colour + '</div><div><b>Available Sizes</b> ' + it.sizes + '</div></div>' +
      (it.oos ? '<div class="oosnote">Stock khatam - naya stock ke liye WhatsApp karein</div>' : '<a class="btn" href="' + it.wa + '" target="_blank" rel="noopener">Order on WhatsApp</a>') +
      '<div class="rrow">' +
      '<a class="rlink" href="' + WA('Hi+Raja+Boot+House%21+Mera+review+-+' + encodeURIComponent(it.name + ' (' + it.colour + ', #' + it.n + ')') + '%3A%0A') + '" target="_blank" rel="noopener">Apna review likhein</a>' +
      '<a class="rlink" href="https://wa.me/?text=' + encodeURIComponent('Ye dekho - ' + it.name + ' (' + it.colour + ')' + (it.offer ? ' sirf ' + it.offer + ' me' : '') + ', Raja Boot House Dharni: https://burhanuddinraja008-alt.github.io/raja-boot-house/') + '" target="_blank" rel="noopener">Dost ko bhejo</a>' +
      '</div>';
    el.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      openLb(it);
    });
    return el;
  }
  function fill(id, list) {
    var g = document.getElementById(id);
    list.forEach(function (it) { g.appendChild(it._el = card(it)); });
  }
  var byN = {};
  items.forEach(function (i) { byN[i.n] = i; });
  function pick(ns) { return ns.map(function (n) { return byN[n]; }); }
  fill('grid-shoes', pick([1, 2, 3, 4]));
  fill('grid-sandals', pick([6, 7]));
  fill('grid-sliders', pick([5, 8, 9, 10, 11, 12, 13]));
  fill('grid-flipflops', pick([14, 15, 16, 17, 18, 19]));

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
    cap.textContent = cur.colour + ' · Photo ' + (idx + 1) + '/' + cur.f.length + ' · Pinch ya double-tap se zoom karein';
    waBtn.href = cur.wa;
    var many = cur.f.length > 1;
    prev.style.display = many ? '' : 'none';
    next.style.display = many ? '' : 'none';
    resetZoom();
  }
  // offer banner
  if (OFFER) { var ob = document.getElementById('offer-banner'); if (ob) { ob.textContent = OFFER; ob.hidden = false; } }

  // search + price filter
  var curF = 'all';
  function priceNum(it) { var m = (it.offer || '').replace(/[^0-9]/g, ''); return m ? parseInt(m, 10) : null; }
  function applyFilter() {
    var q = (document.getElementById('q').value || '').toLowerCase().trim();
    var shown = { 'grid-shoes': 0, 'grid-sandals': 0, 'grid-sliders': 0, 'grid-flipflops': 0 };
    items.forEach(function (it) {
      var el = it._el; if (!el) return;
      var p = priceNum(it);
      var okF = curF === 'all' || (curF === '200' ? (p !== null && p <= 200) : curF === '500' ? (p !== null && p <= 500) : (p !== null && p > 500));
      var okQ = !q || (it.name + ' ' + it.brand + ' ' + it.colour).toLowerCase().indexOf(q) !== -1;
      var show = okF && okQ;
      el.style.display = show ? '' : 'none';
      if (show && el.parentElement) shown[el.parentElement.id] = (shown[el.parentElement.id] || 0) + 1;
    });
    ['sec-sports', 'sec-sandals', 'sec-sliders', 'sec-flipflops'].forEach(function (secId, i) {
      var sec = document.getElementById(secId);
      var gid = ['grid-shoes', 'grid-sandals', 'grid-sliders', 'grid-flipflops'][i];
      if (sec) sec.style.display = shown[gid] ? '' : 'none';
    });
  }
  var qEl = document.getElementById('q');
  if (qEl) qEl.addEventListener('input', applyFilter);
  var frow = document.getElementById('frow');
  if (frow) frow.addEventListener('click', function (e) {
    var b = e.target.closest('.fchip'); if (!b) return;
    curF = b.getAttribute('data-f');
    frow.querySelectorAll('.fchip').forEach(function (c) { c.classList.toggle('on', c === b); });
    applyFilter();
  });

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
  var pts = new Map(), pinchD0 = 0, scale0 = 1, mid0 = null, base = null;
  var downX = 0, downY = 0, movedFar = false, lastTap = 0;
  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function mid(a, b) { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }

  stage.addEventListener('pointerdown', function (e) {
    if (e.target.closest('button')) return;
    try { stage.setPointerCapture(e.pointerId); } catch (_) {}
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
