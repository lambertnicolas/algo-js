
//DEMANDER LE PRENOM DE L'UTILISATEUR ET L'AFFICHER
const readlineSync = require("readline-sync");

//Questions posées à l'utilisateur
let firstName = readlineSync.question("Quel est votre prénom ?");
let name = readlineSync.question("Quel est votre nom ?");
let city = readlineSync.question("Quel est votre ville ?");

//Affichage
console.log(`Your name is ${firstName} ${name} and you live in ${city}`)