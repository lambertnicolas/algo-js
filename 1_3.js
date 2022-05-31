//DEMANDER LE PRENOM DE L'UTILISATEUR ET L'AFFICHER
const readlineSync = require("readline-sync");

//Questions posées à l'utilisateur
let userName = readlineSync.question("Quel est votre prénom ?");

//Affichage
console.log(`Hello ${userName}`);
