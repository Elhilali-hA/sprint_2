var mouves = document.querySelectorAll(".contenue");



function texttranslate(){
  this.classList.toggle("texthabt");
};
setTimeout(texttranslate, 7000); 

function zoom(){
   this.classList.toggle("mouvement");
 };
   // function myFunction() {
   //    document.getElementById("myDIV").style.transition = "0rem 2s";
   //  }
   // function myFunction() {
   //    document.getElementById("top").style.transitionProperty = "width, height";
   //  }
  //  function transl() {
  //    if (function zoom(){
  //     this.classList.toggle("mouvement");
  //   };)
  //   this.classList.toggle("translate");
  //  }


mouves.forEach(element => element.addEventListener('click',zoom));
mouves.forEach(element => element.addEventListener('click',texttranslate));


