
let h,m,s;
 var degre=6;

function clock(){
     date=new Date();
     
   let  s = date.getSeconds() ;
   let  m = date.getMinutes();
    let   h =date.getHours()  ;

   document.getElementById("sec").style.transform = "rotate(" +(s*360) /60+ "deg)";
   document.getElementById("min").style.transform = "rotate(" +(m*360 /60 + 6 * s /60) +"deg)";
   document.getElementById("hour").style.transform = "rotate(" +(h*360 )/12 + m * 30/60 + "deg)";
}
clock ();
setInterval(clock,1000);

