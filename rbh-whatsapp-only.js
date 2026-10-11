(function(){'use strict';
function update(){
 document.querySelectorAll('.acct-card').forEach(function(el){if(el.textContent.includes('My Orders'))el.remove();});
 var pdp=document.getElementById('pdp'),btn=document.getElementById('pdp-order'),photo=document.getElementById('pdp-img');
 if(btn&&photo&&photo.getAttribute('src')){var text='Hi Raja Boot House! I want to ask about '+document.getElementById('pdp-name').textContent+'. Size: '+Array.from(document.querySelectorAll('#pdp-sizes .chip.on')).map(e=>e.textContent).join(', ')+'. Photo: '+photo.src;var amount=document.getElementById('q-val');if(amount)text+='. Qty: '+amount.textContent;btn.href='https://wa.me/919022150546?text='+encodeURIComponent(text);btn.textContent='Order on WhatsApp';}
 document.querySelectorAll('article.card').forEach(function(card){var img=card.querySelector('.imgwrap img'),name=card.querySelector('h3');card.querySelectorAll('a.btn').forEach(function(a){if(a.textContent.trim()==='Order on WhatsApp'&&img&&name)a.href='https://wa.me/919022150546?text='+encodeURIComponent('Hi Raja Boot House! I saw '+name.textContent+' on your app. Please confirm size and stock. Photo: '+img.src);});});
}
var queued=false;new MutationObserver(function(){if(queued)return;queued=true;requestAnimationFrame(function(){queued=false;update();});}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['src','hidden']});
document.addEventListener('click',function(e){if(e.target.closest('#pdp-sizes,#pdp-colours,.qty'))setTimeout(update,0);if(e.target.closest('#umenu-admin'))e.preventDefault();});update();
if(location.hash==='#admin'||location.hash==='#bag'||location.hash==='#orders')history.replaceState(null,'',location.pathname+location.search);
})();
