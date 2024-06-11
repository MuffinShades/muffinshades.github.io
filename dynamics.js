/*

Does cool effect things on page

programmed by muffinshades
*/
(function(g,m){'use strict';function q(h,r){this.g=Math.random()*Math.PI*2;this.x=h;this.y=r;this.h=1*Math.random()+.1;this.update=function(){var c=(k-Math.sqrt((k-this.x)**2+(t-this.y)**2))/k*.5+.5;this.x+=Math.cos(this.g)*this.h;this.y+=Math.sin(this.g)*this.h;b.fillStyle="#fff";b.globalAlpha=c;b.beginPath();b.arc(this.x,this.y,2,0,2*Math.PI,!1);b.fill();b.globalAlpha=1;-150>this.x&&(this.x=a.width+150,this.g=Math.random()*Math.PI+Math.PI/2);this.x>a.width+150&&(this.x=-150,this.g=Math.random()*
Math.PI-Math.PI/2);-150>this.y&&(this.y=a.height+150,this.g=Math.random()*Math.PI+Math.PI);this.y>a.height+150&&(this.y=-150,this.g=Math.random()*Math.PI);for(var d of f)if(d!=this){c=this.x-d.x;var n=this.y-d.y;c=Math.sqrt(c*c+n*n);150<c||(c=(150-c)/150*.5,b.strokeStyle="#fff",b.globalAlpha=c,b.beginPath(),b.moveTo(this.x,this.y),b.lineTo(d.x,d.y),b.stroke(),b.globalAlpha=1)}}}const e=m.querySelectorAll(".bg")[0],a=m.createElement("canvas"),b=a.getContext("2d");a.width=e.clientWidth;a.height=e.clientHeight;
a.style="position:absolute;top:0;left:0;width:100%;height:100%";e.appendChild(a);var k=a.width/2,t=a.height/2,f=[];for(g=0;50>g;g++)f.push(new q(Math.random()*a.width,Math.random()*a.height));setInterval(function(){a.width=e.clientWidth;a.height=e.clientHeight;for(var h in f)f[h].update()},1E3/60)})(window,document);var l=document.querySelectorAll(".dynamic-hover"),p,u;for(u of l)p=u.innerText,u.setAttribute("tdata",p);