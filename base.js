function e(i){return document.getElementById(i)}
function x(v){return typeof(v)!='undefined'}
function k(i){e(i).style.display='none'}
function s(i){e(i).style.display='block'}
function sk(i,a){if(!e(a)){a=['ta','tb','tc','td']}a.forEach(x=>k(x));s(i)}
function ph(i){e(i).style.display=='none'?s(i):k(i)}

function cc(i,x){var n = e(i);
  if (n.nodeName == 'svg') {n.style.fill=x}
  else {n.style.color=x;
    if (n.getElementsByTagName('svg').length==1) {n.getElementsByTagName('svg')[0].style.fill=x}}}

function ch(h){h=Math.trunc(h)%1530;if(h<0){return 1530-Math.abs(h)}else{return(h)}}
function sh(h){return(Math.max(0,h-510)-Math.max(0,h-765)-Math.max(0,h-1275));}
function hc(h){return new Array(3).fill().map((x,i)=>sh(ch(h+(510*i))))}
function hu(h){return "rgb("+hc(h).join(",")+")"}

function ui(i,v,a) {x(a)?e(i).setAttribute(a,v):e(i).innerHTML=v}
function ut(i) {return e(i).innerText}
function uh(d,ids,t){
  if (typeof ids=='string') {ids=[ids]}
  var h=d.getTime()/t; var l=ids.length;
  ids.forEach((n,i) => cc(n,hu(h-(i/l*1530))))}

function main() {uh(new Date(),['pp','m4a','m4b','m4c','m4d'],137);requestAnimationFrame(main)}

function rs() {
  var w = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
  var h = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
  var pw = 800; var ph = 800;
  document.body.style.zoom = Math.min(w/pw,h/ph);
}

ui('year',new Date().getFullYear());
ui('em',"mailto:"+['me',ut('h')].join('@'),'href');
rs();k('l');main();