const readlineSync = require("readline-sync");

//Questions posées à l'utilisateur
let decimalUn = readlineSync.question(
  "Veuilez entrer un chiffre contenant une décimal ?"
);
let decimalDeux = readlineSync.question(
  "Veuilez entrer un seconde chiffre contenant une décimal ?"
);

//Affichage
//parseInt supprime la décimal
console.log(Number(deci) * Number(parseInt(decid)));
