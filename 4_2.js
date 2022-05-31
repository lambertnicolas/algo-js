//AFFICHER UN NOMBRE ALEATOIRE DE 1 A 10
const readlineSync = require("readline-sync");

//Function - Renvoie d'un nombre aléatoire de 1 à 10
function rand10() {
    return parseInt(Math.random() * 10) + 1;
}

//Affichage nombre -entier- -aléatoire- -de 1 à 10-
console.log("Voici un nombre aléatoire de 1 à 10 : " + rand10());