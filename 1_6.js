const readlineSync = require("readline-sync");

//Questions posées à l'utilisateur
let entierUn = readlineSync.question("Veuillez entrer un nombre entier ?");
let entierDeux = readlineSync.question(
  "Veuillez entrer un deuxième nombre entier ?"
);

//Affichage
//parseInt supprime une éventuelle décimal
//% renvoie le reste de la division
console.log(Number(parseInt(entierUn)) % Number(parseInt(entierDeux)));
