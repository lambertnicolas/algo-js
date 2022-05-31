//DEMANDER A L'UTILISATEUR LE NOM D'UNE SERIE, SA DATE DE PRODUCTION ET LE OU LES ACTEURS JOUANT DANS CELLE-CI
//Laisser la possibilité à l'utilisateur d'entrer plusieurs acteurs.
const readlineSync = require("readline-sync");

//Function
function askTvSerie() {

//Questions posées à l'utilisateur :
let name = readlineSync.question("Quel est votre série préférée ?");
let year = readlineSync.question("Quelle est l'année de production ?");

let actor = [];
let condition=0;
//Boucle pour ajouter plusieurs acteurs (tant que l'utilisateur ne répond pas "o")
while (condition !== "n") {
    actor.push(readlineSync.question("Quel acteur joue dans cette série ?"));
    condition = readlineSync.question("Souhaitez-vous ajouter un acteur ? o/n : ");  
}

//Définition de l'objet "serie" composée des données précédemment récoltées.
return actor;
}


function randomizeCast(tvSerie) {
    for (let i = tvSerie.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tvSerie[i], tvSerie[j]] = [tvSerie[j], tvSerie[i]];
    }
    return tvSerie;
  }

console.log(randomizeCast(askTvSerie()));




