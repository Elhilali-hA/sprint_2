var heuresDiv = document.querySelector('.heures');

var affichageHeure = function(){
    var today,heures, minutes, secondes, deuxChiffres;
    
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

    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes + " " +"PM";
    
}
setInterval(affichageHeure, 1000);
affichageHeure();