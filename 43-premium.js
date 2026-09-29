/* RBH PREMIUM - motion layer (visual only; no feature/logic changes) */
(function(){
  'use strict';
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* 1) image skeleton markers: clear shimmer once each image paints */
  function markImg(img){
    if (img.dataset.pvLoaded || img.dataset.pvPending) return;
    if (img.complete && img.naturalWidth > 0) { img.dataset.pvLoaded = '1'; return; }
    img.dataset.pvPending = '1';
    img.addEventListener('load', function(){ img.dataset.pvLoaded = '1'; delete img.dataset.pvPending; }, {once:true});
    img.addEventListener('error', function(){ img.dataset.pvLoaded = '1'; delete img.dataset.pvPending; }, {once:true});
  }
  function scanImgs(root){
    if (root.matches && root.matches('.imgwrap img,.hcard img,.ctrack img,#pdp-img')) markImg(root);
    root.querySelectorAll('.imgwrap img,.hcard img,.ctrack img,#pdp-img').forEach(markImg);
  }

  /* 2) scroll reveal */
  var REVEAL_SEL = '.sec-bar,.banner,.catrow,.searchrow,.qchips,.card,.hcard,.steps-box,.revcta,.review-grid,.sizechart,.shopinfo,#rbh-share-app,.reels-h3,.reel-grid-embed';
  var io = null;
  function watchReveal(){
    if (!('IntersectionObserver' in window)) return;
    io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting){ en.target.classList.add('pv-in'); io.unobserve(en.target); }
      });
    }, {threshold:.06, rootMargin:'0px 0px -30px 0px'});
    scanReveal(document);
  }
  function scanReveal(root){
    if (!io) return;
    var i = 0;
    var nodes = Array.from(root.querySelectorAll(REVEAL_SEL));
    if (root.matches && root.matches(REVEAL_SEL)) nodes.unshift(root);
    nodes.forEach(function(el){
      if (el.classList.contains('pv-rv') || el.classList.contains('pv-in')) return;
      el.classList.add('pv-rv');
      el.style.transitionDelay = ((i++ % 4) * 55) + 'ms';
      io.observe(el);
    });
  }

  /* 3) run now + keep watching for JS-rendered content (products render async) */
  function boot(){ scanImgs(document); watchReveal(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  var mo = new MutationObserver(function(muts){
    muts.forEach(function(mut){
      mut.addedNodes.forEach(function(node){
        if (node.nodeType !== 1) return;
        scanImgs(node); scanReveal(node);
      });
    });
  });
  mo.observe(document.documentElement, {childList:true, subtree:true});

  /* 4) subtle parallax on hero carousel */
  var car = document.querySelector('.carousel');
  if (car){
    car.addEventListener('scroll', function(){
      car.style.setProperty('--pv-scroll', car.scrollLeft);
    }, {passive:true});
  }
})();

/* 5) bottom-nav line icons (visual swap of emoji glyphs -> inline svg; behavior untouched) */
(function(){
  var ICONS = {
    'bt-home':  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/></svg>',
    'bt-search':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>',
    'bt-wish':  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 20.5C7 16.5 3.5 13.2 3.5 9.6 3.5 7 5.5 5 8 5c1.6 0 3.1.8 4 2.1C12.9 5.8 14.4 5 16 5c2.5 0 4.5 2 4.5 4.6 0 3.6-3.5 6.9-8.5 10.9Z"/></svg>',
    'bt-cart':  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M6 8h12l-1 13H7L6 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>',
    'bt-acct':  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20.5c1.4-3.4 4.2-5 7.5-5s6.1 1.6 7.5 5"/></svg>'
  };
  Object.keys(ICONS).forEach(function(id){
    var b = document.getElementById(id);
    if (!b) return;
    var ic = b.querySelector('.bt-ic');
    if (ic) ic.innerHTML = ICONS[id];
  });
})();
