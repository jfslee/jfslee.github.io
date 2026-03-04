function e(i){return document.getElementById(i)}
function k(i){e(i).style.display='none';}
function s(i){e(i).style.display='block';}
function phase(i){e(i).style.display=='none'?s(i):k(i)}

function cc(n,x){n = document.getElementById(n);
  if (n.nodeName == 'svg') {n.style.fill=x}
  else {n.style.color=x;
    if (n.getElementsByTagName('svg').length==1) {n.getElementsByTagName('svg')[0].style.fill=x}}}

function ch(h){h=Math.trunc(h)%1530;if(h<0){return 1530-Math.abs(h)}else{return(h)}}
function sh(h){return(Math.max(0,h-510)-Math.max(0,h-765)-Math.max(0,h-1275));}
function hc(h){return new Array(3).fill().map((x,i)=>sh(ch(h+(510*i))))}
function hue(h){return "rgb("+hc(h).join(",")+")"}

function ui(i,x,a) {var l = e(i); typeof(a)!='undefined'?l.setAttribute(a,x):l.innerHTML=x}
function ut(i) {return e(i).innerText}
function ui_hue(d,ids,t){
  if (typeof ids=='string') {ids=[ids]}
  var h=d.getTime()/t; var l=ids.length;
  ids.forEach((n,i) => cc(n,hue(h-(i/l*1530))))}

function main(){
  const d = new Date();
  ui_hue(d,['pp','m4a','m4b','m4c','m4d'],137)
  requestAnimationFrame(main)}

function rs() {
  var w = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
  var h = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
  var pw = 800; var ph = 800;
  document.body.style.zoom = Math.min(w/pw,h/ph);
}

ui('year',new Date().getFullYear());
ui('em',"mailto:"+['me',ut('h')].join('@'),'href');
rs();k('l');main();