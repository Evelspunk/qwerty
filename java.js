timeend= new Date();
timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);

function time() {
  today = new Date();
  today = Math.floor((timeend-today)/1000);
  tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
  tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
  thour=today%24; today=Math.floor(today/24);
  timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
  document.getElementById('t').innerHTML=timestr;
  window.setTimeout("time()",1000);
}
slides=0
function butprav_1(){
let b=document.querySelectorAll('.a1')
slides--
if(slides<0){slides=3}
for(let j=0;j<b.length;j++){b[j].style.display='none'}
b[slides].style.display='inline'
}

function butlev_1(){
    let b=document.querySelectorAll('.a1')
    slides++
    if(slides>3){slides=0}
    for(let j=0;j<b.length;j++){b[j].style.display='none'}
    b[slides].style.display='inline'
    }