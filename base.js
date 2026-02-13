function k(id){var e=document.getElementById(id);e.style.display='none';}
function s(id){var e=document.getElementById(id);e.style.display='block';}
function phase(id){var e=document.getElementById(id);if(e.style.display=='none'){s(id);}else{k(id);}}
function cc(t,x){var m = document.getElementById(t);m.style.color=x};
function ch(h){h=h%1530;if(h<0){return 1530-Math.abs(h)}else{return(h)}}
function sh(h){return(Math.max(0,h-510)-Math.max(0,h-765)-Math.max(0,h-1275));}
function hue(h){var c=[];for(i=0;i<3;i++){c[i]=sh(ch(h+(510*i)));} return "rgb("+c.join(",")+")";}

function swc(){
  var d = new Date();
  var h = d.getTime()/137;
  document.getElementById("pp").style.fill=hue(h);
  cc("m4a",hue(h-306));
  cc("m4b",hue(h-612));
  cc("m4c",hue(h-918));
  cc("m4d",hue(h-1224));
  requestAnimationFrame(swc);
}

function rs() {
  var w = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
  var h = (document.documentElement.scrollHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
  var prefw = 800;
  var prefh = 800;
  document.body.style.zoom = Math.min(w/prefw,h/prefh);
}

var d=new Date();document.getElementById('year').innerHTML=d.getFullYear();
var e=document.getElementById("em");e.setAttribute("href", "mailto:"+"me"+"@"+"joshl.ee");
rs();swc();
