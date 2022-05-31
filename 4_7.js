//APPELER L'ASCENCEUR LE PLUS PROCHE DE L'UTILISATEUR. SI LES ASCENCEURS SE TROUVENT AU MEME NIVEAU APPELER CELUI DE DROITE
const readlineSync = require("readline-sync");

function elevator (left, right, floor) {
    switch (floor === 0) {
        case left > right :
            return "droite";
        case left < right :
            return "gauche";
        case left == right :
            return "droite";   
    }
    
    switch (floor === 2) {
        case left < right :
            return "droite";
        case left > right :
            return "gauche";
        case left == right :
            return "droite"; 
    } 

    switch (floor === 1) {
//Si l'utilisateur se trouve à l'étage n°1, que l'ascenceur de gauche s'y trouve aussi et pas celui de droite, on appele le gauche.
        case left === 1 && right !== 1 :
            return "gauche";
//Autrement on appelera toujours celui de droite.
        case left !== 1 :
            return "droite";
    }
}

//Questions posées à l'utilisateur
let yFloor = Number(readlineSync.question("A quel étage vous trouvez vous ?"));
let eLeft = Number(readlineSync.question("A quel étage se trouve l'ascenseur de gauche ?"));
let eRight = Number(readlineSync.question("A quel étage se trouve l'ascenseur de droite ?"));

//Affichage de la réponse
console.log(`L'ascenseur de ${elevator(eLeft, eRight, yFloor)} à été appelé. Veuillez patienter..`)

