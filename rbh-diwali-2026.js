/* Presentation only. Existing catalogue, actions, Firebase and navigation are retained. */
(function(){
  'use strict';
  var page=document.querySelector('main.page'), cats=document.getElementById('fest-categories');
  var catrow=document.querySelector('.catrow');if(cats&&catrow)cats.appendChild(catrow);
  if(catrow&&!catrow.querySelector('[href="#sec-kids"]')){
    var kid=document.createElement('a');kid.href='#sec-kids';kid.innerHTML='<img src="1-53-paragon-kids-sandal-navy-front.jpg" alt="Kids footwear category"><span>Kids</span>';catrow.appendChild(kid);
  }
  // Keep the reserved first-child festival slot untouched. Search stays before the catalogue.
  var hero=document.getElementById('diwali-hero'),status=document.getElementById('fest-store-status');
  var search=document.querySelector('.searchrow'),chips=document.getElementById('qchips'),suggest=document.getElementById('qsug'),filters=document.querySelector('.fbar');
  var after=cats;
  [search,suggest,chips,filters,document.getElementById('noresult'),document.getElementById('sec-new'),document.getElementById('sec-trending'),document.getElementById('sec-best'),document.getElementById('sec-value'),document.getElementById('fest-offer')].forEach(function(e){if(e){after.after(e);after=e;}});
  // The owner's actual offers and all legacy catalogue sections stay available below the featured rows.
  var promo=document.getElementById('fest-offer'),banner=document.querySelector('.diya-row');if(banner)promo.after(banner);
  var carousel=document.querySelector('.carousel');if(carousel)carousel.setAttribute('aria-label','Current shop offer posters - swipe to browse');
  var share=document.getElementById('rbh-share-app'),app=document.getElementById('fest-app');if(share&&app)app.appendChild(share);
  var social=document.getElementById('reviews'),shop=document.querySelector('.shopinfo');if(social&&shop)shop.appendChild(social);if(shop)promo.after(shop);
  // Never inject sales rankings or a made-up festive offer. The owner can update #offer-banner as before.
  document.querySelectorAll('.card').forEach(function(card){if(!card.querySelector('.fest-detail')){var b=document.createElement('button');b.className='fest-detail';b.type='button';b.textContent='View details';b.addEventListener('click',function(){card.click();});card.insertBefore(b,card.querySelector('.facts'));}});
})();
