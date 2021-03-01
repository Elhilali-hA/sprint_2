var mouves = document.querySelectorAll(".contenue");



function zoom(){
   this.classList.toggle("mouvement");
};


mouves.forEach(element =>element.addEventListener('click',zoom));