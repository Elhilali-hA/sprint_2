var mouves = document.querySelectorAll(".contenue");



function texttranslate(){
  this.classList.toggle("texthabt");
};
setTimeout(texttranslate, 7000); 

function zoom(){
   this.classList.toggle("mouvement");
 };
mouves.forEach(element => element.addEventListener('click',zoom));
mouves.forEach(element => element.addEventListener('click',texttranslate));


