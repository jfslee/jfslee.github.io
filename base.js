function e(i){return document.getElementById(i)}
function x(v){return typeof(v)!='undefined'}
function k(i){e(i).style.display='none'}
function s(i){e(i).style.display='block'}
function sk(i,a){if(!e(a)){a=d.ts}a.forEach(x=>k(x));s(i)}
function ph(i){e(i).style.display=='none'?s(i):k(i)}

function cc(i,x){var n = e(i);
  if (n.nodeName == 'svg') {n.style.stroke=x}
  else {n.style.color=x;
    if (n.getElementsByTagName('svg').length==1) {n.getElementsByTagName('svg')[0].style.fill=x}}}

function ch(h){h=Math.trunc(h)%1530;if(h<0){return 1530-Math.abs(h)}else{return(h)}}
function sh(h){return(Math.max(0,h-510)-Math.max(0,h-765)-Math.max(0,h-1275));}
function hc(h){return new Array(3).fill().map((x,i)=>sh(ch(h+(510*i))))}
function hu(h){return "rgb("+hc(h).join(",")+")"}

function ui(i,v,a){return x(v)?x(a)?e(i).setAttribute(a,v):e(i).innerHTML=v:e(i).innerText}
function uh(d,ids,t){
  if (typeof ids=='string') {ids=[ids]}
  var h=d.getTime()/t; var l=ids.length;
  ids.forEach((n,i) => cc(n,hu(h-(i/l*1530))))}

function b(x){document.body.style.background="#000 url('bg/"+x.toString().padStart(2,'0')+".webp') center / cover no-repeat"}
function ri(x){return Math.trunc(Math.random()*x)+1}
function rb(x){
  d.bl=d.bc; while(d.bc==d.bl){d.bc=ri(x)}
  d.bs.add(d.bc); b(d.bc)}

function main() {uh(new Date(),d.vs,137);requestAnimationFrame(main)}

function rs() {
  var w = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
  var h = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
  document.body.style.zoom = Math.min(w/d.pw,h/d.ph)}

var d = {
  pw:700,ph:800,
  ts:['ta','tb','tc','td'],vs:['pp','va','vb','vc','vd'],
  ba:6,bb:18,bc:0,bl:0,bs:new Set()}

ui('year',new Date().getFullYear());
ui('em',"mailto:"+['me',ui('h')].join('@'),'href');
if(ui('h').startsWith('404')) {d.vs.splice(3,2)} else {rb(d.ba)}
rs();k('l');main();