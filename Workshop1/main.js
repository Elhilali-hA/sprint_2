
let date,hr,min,sec

function youcodeTime(){
     date=new date()
     hr =date.getHours() ;
     min = date.getMinutes() ;
     sec = date.getSeconds() ;

   document.getElementsByClassName("sec").style.transform = "rotate(" +(sec/60)*360 + "deg)";
   document.getElementsByClassName("min").style.transform = "rotate(" +(min/60)*360 + "deg)";
   document.getElementsByClassName("hr").style.transform = "rotate(" +(hr/12)*360 + "deg)";
}
youcodeTime()
window.setInterval(youcodeTime,1000)