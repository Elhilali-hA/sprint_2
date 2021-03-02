var hourDiv = document.querySelector('.hour');
var affichageHeure = function(){
    var today,heures, minutes, secondes, deuxChiffres,day;
    
    today = new Date();
    
    deuxChiffres = function(x){
        if(x < 10){
            return x = "0" + x;
        } else {
            return x;
        }
    }
    
    secondes = deuxChiffres(today.getSeconds());
    
    minutes = deuxChiffres(today.getMinutes());
    
    heures = deuxChiffres(today.getHours());
    
    
    if (heures > 12) {
        day = 'PM';
        heures = heures - 12;
    }
    else{
        day = 'AM'
    }
    if (heures == 0) {
        heures = 12;
    }
    
    hourDiv.textContent = heures + ":" + minutes + ":" + secondes + " " + day;
        
        
}
setInterval(affichageHeure, 1000);
affichageHeure();