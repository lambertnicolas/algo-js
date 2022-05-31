const readlineSync = require("readline-sync");

//Questions posées à l'utilisateur
let n = new Number(readlineSync.question("Combien de chiffre voulez-vous additionner ?"));

//Définir le résultat final
let result = 0;

//Boucle
for (let i = 1; i <= n; i += 1) {
  let somme = new Number(readlineSync.question("Chiffre n°" + i + " :"));
  result += somme;
}

//Affichage
console.log(result);
