(function(){
 if(/[?&]utsav=0/.test(location.search))return;
 document.body.classList.add('utsav');
 function top(){var g=document.querySelector('.green-top');if(!g)return;if(g.querySelector('#u-garland'))return;
  var a=document.createElement('div');a.id='u-garland';g.insertBefore(a,g.firstChild);
  var t=document.createElement('div');t.id='u-greet';t.textContent='\u2726 HAPPY DIWALI FROM RAJA BOOT HOUSE \u2726';g.insertBefore(t,a.nextSibling);}
 function hero(){var h=document.querySelector('.green-hero');if(!h)return;
  if(!h.querySelector('#u-fw')){var c=document.createElement('canvas');c.id='u-fw';h.insertBefore(c,h.firstChild);fw(c,h);}
  if(!document.getElementById('u-diyas')){var d=document.createElement('div');d.id='u-diyas';d.innerHTML='<b>Shubh Diwali</b>';h.parentNode.insertBefore(d,h.nextSibling);}}
 function fw(c,h){var x=c.getContext('2d'),P=[],W,H;function rs(){W=c.width=h.clientWidth;H=c.height=h.clientHeight}rs();
  if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  function burst(){var cx=W*(.5+Math.random()*.45),cy=H*(.12+Math.random()*.3),n=26,col=['255,214,102','255,160,60','255,255,220'][Math.random()*3|0];
   for(var i=0;i<n;i++){var a=i/n*6.283,s=.8+Math.random()*1.6;P.push({x:cx,y:cy,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,c:col})}}
  var last=0;(function f(t){if(!document.body.contains(c))return;if(t-last>1500){burst();last=t}
   x.clearRect(0,0,W,H);for(var i=P.length-1;i>=0;i--){var p=P[i];p.x+=p.vx;p.y+=p.vy;p.vy+=.025;p.vx*=.985;p.l-=.014;if(p.l<=0){P.splice(i,1);continue}
    x.fillStyle='rgba('+p.c+','+p.l+')';x.beginPath();x.arc(p.x,p.y,1.6*p.l+.4,0,6.283);x.fill()}
   requestAnimationFrame(f)})(0)}
 var n=0,iv=setInterval(function(){top();hero();if(++n>60)clearInterval(iv)},250);
})();
