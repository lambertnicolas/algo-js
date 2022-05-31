const readlineSync = require("readline-sync");

//Function calcul de surface
function calcSurface(length,width) {
    return length * width;
}

//Questions posées à l'utilisateur
let userLength = new Number(readlineSync.question("Quelle est la longueur du rectangle ?"));
let userWidth = new Number(readlineSync.question("Quelle est la largeur du rectangle ?"));

//Affichage
console.log("La surface du rectangle est : " + calcSurface(userLength,userWidth));