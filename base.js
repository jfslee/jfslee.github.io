function k(id){var e=document.getElementById(id);e.style.display='none';}
function s(id){var e=document.getElementById(id);e.style.display='block';}
function phase(id){var e=document.getElementById(id);if(e.style.display=='none'){s(id);}else{k(id);}}
function cc(n,x){n = document.getElementById(n); if (n.nodeName == 'svg') {n.style.fill=x} else {n.style.color=x}}

function ch(h){h=Math.trunc(h)%1530;if(h<0){return 1530-Math.abs(h)}else{return(h)}}
function sh(h){return(Math.max(0,h-510)-Math.max(0,h-765)-Math.max(0,h-1275));}
function hc(h){return new Array(3).fill().map((x,i)=>sh(ch(h+(510*i))))}
function hue(h){return "rgb("+hc(h).join(",")+")"}

function hue_ui(d,ids,t){
  if (typeof ids=='string') {ids=[ids]}
  var h=d.getTime()/t; var l=ids.length;
  ids.forEach((n,i) => cc(n,hue(h-(i/l*1530))))}

function main(){
  const d = new Date();
  hue_ui(d,['pp','m4a','m4b','m4c','m4d'],137)
  requestAnimationFrame(main)}

function rs() {
  var w = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
  var h = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
  var pw = 800; var ph = 800;
  document.body.style.zoom = Math.min(w/pw,h/ph);
}

var d=new Date();document.getElementById('year').innerHTML=d.getFullYear();
var e=document.getElementById("em");e.setAttribute("href", "mailto:"+"me"+"@"+"joshl.ee");
rs();main();
