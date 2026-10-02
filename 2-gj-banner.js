(function(){
  var e=document.getElementById('gj-banner'); if(!e) return;
  if(Date.now()>=Date.parse('2026-10-03T00:00:00+05:30')){ e.remove(); return; }
  e.style.display='block';
  var b=document.getElementById('gj-share'), img=e.querySelector('img');
  var U='https://burhanuddinraja008-alt.github.io/raja-boot-house/';
  var T='Happy Gandhi Jayanti - Raja Boot House, Dharni. Visit our website: '+U;
  if(!b||!img) return;
  b.addEventListener('click',function(){
    fetch(img.src).then(function(r){return r.blob()}).then(function(bl){
      var f=new File([bl],'RBH-Gandhi-Jayanti.jpg',{type:'image/jpeg'});
      if(navigator.canShare&&navigator.canShare({files:[f]})) return navigator.share({files:[f],text:T}).catch(function(){});
      var a=document.createElement('a');a.href=URL.createObjectURL(bl);a.download='RBH-Gandhi-Jayanti.jpg';document.body.appendChild(a);a.click();a.remove();
    }).catch(function(){window.open('https://wa.me/?text='+encodeURIComponent(T),'_blank');});
  });
})();
