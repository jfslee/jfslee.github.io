function e(i){return document.getElementById(i)}
function x(v){return typeof(v)!='undefined'}
function k(i){e(i).style.display='none'}
function s(i){e(i).style.display='block'}
function sk(i,a){if(!e(a)){a=d.st}a.forEach(x=>k(x));s(i)}
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
function uh(d,ids){
  if (typeof ids=='string') {ids=[ids]}
  var l=ids.length; ids.forEach((n,i) => cc(n,hu(d-(i/l*1530))))}
function ub(){ui('fi',d.bc);ui('fn',db[d.bc].name);ui('fl',db[d.bc].loc)}

function b(n){
  d.bx = true; var im = new Image(); 
  var iu = "bg/"+n.toString().padStart(2,'0')+".webp";
  im.onload = function(){
    var ib = document.createElement('div');ib.className='bg';
    ib.style.background="#000 url('"+iu+"') center / cover no-repeat";
    document.body.appendChild(ib);
    window.getComputedStyle(ib).opacity;
    ib.style.opacity='1';
    setTimeout(()=>{ub()},500);
    setTimeout(()=>{document.querySelectorAll('.bg').forEach(b=>{if(b!==ib){b.remove()}});d.bx=false},1000)}
  im.src=iu}

function dm(){return Object.entries(db).map(e=>[e[0],e[1].pr])}
function df(){return dm().filter(f=>f[0]!=d.bl)}
function ax(a){return a.map((i)=>new Array(i[1]).fill(i[0])).flat()}

function ri(n){return Math.trunc(Math.random()*n)+1}
function rb(n){if(d.bx){return} d.bl=d.bc;
  var bm = ax(x(n)?n>0?df().slice(0,n):d.bs.size<dm().length?df().filter(f=>!d.bs.has(f[0])):df():df());
  d.bc=bm[ri(bm.length)-1]; d.bs.add(d.bc);
  if(d.bl==0){ub()} b(d.bc)}

function m() {d.mf+=d.ms;uh(d.mf+ch(d.m0),d.sv);requestAnimationFrame(m)}

function rs() {
  var w = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
  var h = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
  document.body.style.zoom = Math.min(w/d.pw,h/d.ph)}

var d = {
  pw:700,ph:800,
  ms:1,mf:0,m0:new Date().getTime(),
  st:['ta','tb','tc','td'],sv:['pp','va','vb','vc','vd'],
  ba:5,bc:0,bl:0,bs:new Set(),bx:false}

ui('year',new Date().getFullYear());
ui('em',"mailto:"+['me',ui('h')].join('@'),'href');
if(ui('h').startsWith('404')) {d.sv.splice(3,2)} else {rb(d.ba)}
rs();k('l');m();