(function(){'use strict';
var TAG='<i>\uD83E\uDE94</i>Diwali Offer';
function mk(cls){var s=document.createElement('span');s.className='rbh-diwali-tag'+(cls?' '+cls:'');s.setAttribute('aria-label','Diwali Offer');s.innerHTML=TAG;return s;}
function has(el){return el.querySelector('.rbh-diwali-tag');}
function run(){
document.querySelectorAll('.green-card .green-card-info').forEach(function(i){if(!has(i))i.insertBefore(mk(),i.firstChild);});
document.querySelectorAll('.card .imgwrap').forEach(function(w){var c=w.parentElement;if(!c||has(c))return;var d=document.createElement('div');d.className='rbh-diwali-wrap';d.appendChild(mk());w.after(d);});
var img=document.getElementById('pdp-img');if(img&&img.parentElement){var g=img.parentElement;if(!g.querySelector('.rbh-diwali-pdp')&&!(g.nextElementSibling&&g.nextElementSibling.classList.contains('rbh-diwali-pdp'))){g.after(mk('rbh-diwali-pdp'));}}
}
var t=null;function sched(){if(t)return;t=setTimeout(function(){t=null;run();},60);}
new MutationObserver(sched).observe(document.body,{childList:true,subtree:true});
run();window.addEventListener('load',run);
})();
