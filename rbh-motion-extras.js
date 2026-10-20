/* RBH motion extras: diya sparks, scroll reveal, WhatsApp confetti, real-price count-up.
   ~3 KB, no libraries. Everything is decorative; links, layout, prices untouched. */
(function(){'use strict';
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;

/* B) Floating diya sparks on the home banner.
   The app re-renders the hero after data load, so re-add if wiped. */
function ensureSparks(){var hero=document.querySelector('.green-hero');
if(!hero||hero.querySelector('.rbh-spark'))return;
for(var i=0;i<7;i++){var s=document.createElement('span');
s.className='rbh-spark';s.setAttribute('aria-hidden','true');
s.style.left=(6+Math.random()*88)+'%';s.style.bottom=(8+Math.random()*22)+'%';
s.style.setProperty('--dur',(5.5+Math.random()*3.5)+'s');
s.style.setProperty('--delay',(Math.random()*6)+'s');
if(i%3===0){s.style.width='4px';s.style.height='4px';}
hero.appendChild(s);}}

/* C) Product cards reveal one by one on scroll */
var io=null;
if(!RM&&'IntersectionObserver' in window){
document.documentElement.classList.add('rbh-rvl');
io=new IntersectionObserver(function(es){var d=0;
es.forEach(function(en){if(en.isIntersecting){var t=en.target;
t.style.transitionDelay=(d*70)+'ms';d++;t.classList.add('rbh-in');io.unobserve(t);
setTimeout(function(){t.style.transitionDelay='';},700);}});},
{rootMargin:'0px 0px -6% 0px',threshold:.05});}
function watch(){
if(io){document.querySelectorAll('.card:not(.rbh-in),.green-card:not(.rbh-in)')
.forEach(function(c){if(!c.__rbhObs){c.__rbhObs=1;io.observe(c);}});}
ensureSparks();}
if(!RM){
watch();
new MutationObserver(watch).observe(document.body,{childList:true,subtree:true});}

/* D) Confetti burst on Order on WhatsApp taps (never blocks the link) */
function burst(x,y){if(RM)return;
var cols=['#e2b54a','#1e7a4e','#641E2B','#f6efe2','#d4af37'];
for(var i=0;i<16;i++){var p=document.createElement('span');
p.className='rbh-confetti';p.setAttribute('aria-hidden','true');
var ang=Math.random()*Math.PI*2,dist=45+Math.random()*75;
p.style.left=x+'px';p.style.top=y+'px';p.style.background=cols[i%cols.length];
p.style.setProperty('--dx',Math.cos(ang)*dist+'px');
p.style.setProperty('--dy',(Math.sin(ang)*dist-30)+'px');
p.style.setProperty('--rot',(Math.random()*360-180)+'deg');
if(i%2){p.style.borderRadius='50%';p.style.width='5px';p.style.height='5px';}
document.documentElement.appendChild(p);
setTimeout(function(el){el.remove();}.bind(null,p),950);}}
if(!RM){
var lastX=innerWidth/2,lastY=innerHeight/2;
document.addEventListener('pointerdown',function(e){lastX=e.clientX;lastY=e.clientY;},true);
document.addEventListener('pointerdown',function(e){
var a=e.target.closest&&e.target.closest('a[href*="wa.me"]');
if(!a)return;
if(a.closest('[id*="owner"],[id*="admin"],.adm-table'))return;
burst(e.clientX||lastX,e.clientY||lastY);},true);
var _open=window.open.bind(window);
window.open=function(url){
if(typeof url==='string'&&url.indexOf('wa.me')>-1)burst(lastX,lastY);
return _open.apply(null,arguments);};}

/* E) Keep the product price stable. Animating from MRP changes the real offer
   briefly and can desync the WhatsApp link. Product prices are shown as stored. */
})();
