function e(i){return document.getElementById(i)}
function es(i){return e(i).style}
function x(v){return typeof(v)!='undefined'}
function k(i){es(i).opacity=0;es(i).display='none'}
function s(i){es(i).opacity=1;es(i).display='block'}
function sk(i){c.st.filter(j=>j!=i).forEach(x=>k(x));s(i)}
function ph(i){if(i=='l'){d.fr=false}if(es(i).opacity==1){k(i)}else{s(i)}}
function pc(){ph('c');var p=es('pp');if(p.height=='30px'){d.mh=false;p.height='100px';p.opacity=1;p.filter='none';ui('pp','unset','stroke-width')}
else{d.mh=true;p.height='30px';p.opacity=0.6;p.filter='grayscale(0.9)';ui('pp',0.7,'stroke-width')}}
function cc(i,x){var n=e(i);if(n.nodeName=='svg'){n.style.stroke=x}
else{n.style.color=x;if(n.getElementsByTagName('svg').length==1){n.getElementsByTagName('svg')[0].style.fill=x}}}
function ch(h){h=Math.trunc(h)%1530;if(h<0){return 1530-Math.abs(h)}else{return(h)}}
function sh(h){return(Math.max(0,h-510)-Math.max(0,h-765)-Math.max(0,h-1275));}
function hc(h){return new Array(3).fill().map((x,i)=>sh(ch(h+(510*i))))}
function hu(h){return"rgb("+hc(h).join(",")+")"}
function ui(i,v,a){return x(v)?x(a)?e(i).setAttribute(a,v):e(i).innerHTML=v:e(i).innerText}
function uh(d,ids){if(typeof ids=='string'){ids=[ids]}
var l=ids.length;ids.forEach((n,i)=>cc(n,hu(d-(i/l*1530))))}
function ub(){es('pi').opacity=1;d.bn++;ui('fi',d.bc);ui('fn',db[d.bc].name);ui('fl',db[d.bc].loc);ui('ln',d.ba?"<a href='"+d.bp+"'>Permalink to this photo</a>":"Seen "+d.bs.size+" out of "+dm().length)}
function b(n){if(d.bx){return}d.bx=true;d.bl.push(n);d.bl.shift();d.bc=n;d.bs.add(n);var im=new Image();ui('lm',d.bu?"<a onclick='d.bu=false'>Show more photos</a>":"Loading next photo...");var iu="bg/"+n.toString().padStart(2,'0')+".webp";im.onload=function(){var ib=document.createElement('div');ib.classList.add('bg');ib.style.background="#000 url('"+iu+"') center / cover no-repeat";document.body.appendChild(ib);window.getComputedStyle(ib).opacity;ib.style.opacity=1;es('pi').opacity=0;setTimeout(()=>{ub()},500);if(d.bu||d.bn==1){setTimeout(()=>{if(d.fr){ph('l')}},1250)}
setTimeout(()=>{document.querySelectorAll('.bg').forEach(b=>{if(b!==ib){b.remove()}});if(d.bu){pc()}else{ds()}
d.bx=false},1000)}
im.src=iu}
function dm(){return Object.entries(db).map(e=>[Number(e[0]),e[1].pr])}
function df(){return dm().filter(f=>!d.bl.includes(f[0]))}
function ax(a){return a.map((i)=>new Array(i[1]).fill(i[0])).flat()}
function ri(n){return Math.trunc(Math.random()*n)+1}
function ds(){d.bnt=d.t+c.bnd+d.mf+ri((c.bnd+d.mf)*c.bnv)}
function rb(n){if(d.bx||d.bu){return}
var bm=ax(x(n)?n>0?df().slice(0,n):d.bs.size<dm().length?df().filter(f=>!d.bs.has(f[0])):df():df());b(bm[ri(bm.length)-1])}
function m(){d.mf++;uh(d.mf+ch(d.m0)+(d.bx?ch(d.t):0),(d.mh?c.sv.slice(0,1):c.sv));if(!(d.ep||d.bx||d.bu)){ui('lm',"Next photo in "+((d.bnt-d.t)/1000).toFixed(1)+"s");if(d.t>d.bnt){rb(0)}}
requestAnimationFrame(m)}
function rs(){var w=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);var h=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight);document.body.style.zoom=Math.min(w/c.pw,h/c.ph)}
var d={fr:true,mh:false,mf:0,m0:new Date().getTime(),bc:0,bl:new Array(Math.ceil(dm().length/2)).fill(0),bn:0,bs:new Set(),bx:false,bnt:0,bu:Number(new URLSearchParams(window.location.search).get('bg')),get ba(){return d.bs.size==dm().length},get bp(){return window.location.href.split('?')[0]+'?bg='+d.bc},get t(){return new Date().getTime()},get ep(){return ui('h').startsWith('404')}}
var c=Object.freeze({pw:700,ph:800,ba:5,bnd:30000,bnv:0.2,st:['ta','tb','tc','td'],sv:['pp','va','vb','vc','vd'],i:{pp:'<path d="M0-4V4H-2A2 2 0 0 1-2 0H2A2 2 0 0 0 2-4H0Z"/><circle cx="6" cy="-2" r="2"/><circle cx="-6" cy="2" r="2"/>',va:'<svg viewBox="0 0 24 24"><path d="M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M15.9 8.1C15.5 7.7 14.8 7 13.5 7H11C8.2 7 6 4.8 6 2H4C4 5.2 6.1 7.8 9 8.7V22H11V16H13V22H15V10.1L19 14L20.4 12.6L15.9 8.1Z"/></svg>',vb:'<svg viewBox="0 0 24 24"><path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/></svg>',vc:'<svg viewBox="0 0 24 24"><path d="M10.6 13.4A1 1 0 0 1 9.2 14.8A4.8 4.8 0 0 1 9.2 7.8L12.7 4.2A5.1 5.1 0 0 1 19.8 4.2A5.1 5.1 0 0 1 19.8 11.3L18.3 12.8A6.4 6.4 0 0 0 17.9 10.4L18.4 9.9A3.2 3.2 0 0 0 18.4 5.6A3.2 3.2 0 0 0 14.1 5.6L10.6 9.2A2.9 2.9 0 0 0 10.6 13.4M23 18V20H20V23H18V20H15V18H18V15H20V18M16.2 13.7A4.8 4.8 0 0 0 14.8 9.2A1 1 0 0 0 13.4 10.6A2.9 2.9 0 0 1 13.4 14.8L9.9 18.4A3.2 3.2 0 0 1 5.6 18.4A3.2 3.2 0 0 1 5.6 14.1L6.1 13.7A7.3 7.3 0 0 1 5.7 11.2L4.2 12.7A5.1 5.1 0 0 0 4.2 19.8A5.1 5.1 0 0 0 11.3 19.8L13.1 18A6 6 0 0 1 16.2 13.7Z"/></svg>',vd:'<svg viewBox="0 0 24 24"><path d="M22 5.5H9C7.9 5.5 7 6.4 7 7.5V16.5C7 17.61 7.9 18.5 9 18.5H22C23.11 18.5 24 17.61 24 16.5V7.5C24 6.4 23.11 5.5 22 5.5M22 16.5H9V9.17L15.5 12.5L22 9.17V16.5M15.5 10.81L9 7.5H22L15.5 10.81M5 16.5C5 16.67 5.03 16.83 5.05 17H1C.448 17 0 16.55 0 16S.448 15 1 15H5V16.5M3 7H5.05C5.03 7.17 5 7.33 5 7.5V9H3C2.45 9 2 8.55 2 8S2.45 7 3 7M1 12C1 11.45 1.45 11 2 11H5V13H2C1.45 13 1 12.55 1 12Z"/></svg>'},re:['c','footer'],rp:[[' . ',' &nbsp;&bull;&nbsp; '],[' x ',' &#xd7; ']]})
if(d.ep){c.sv.splice(3,2);ui('pp',c.i.pp)}else{ui('year',new Date().getFullYear());ui('em',"mailto:"+['me',ui('h')].join('@'),'href');c.re.forEach(i=>c.rp.forEach(j=>ui(i,e(i).innerHTML.replaceAll(j[0],j[1]))));c.sv.forEach(j=>ui(j,c.i[j]));es('n').opacity=0;es('c').opacity=1;sk('h');if(d.bu>0&&d.bu<=dm().length){b(d.bu);d.bu=true}else{rb(c.ba);d.bu=false}}
rs();m();