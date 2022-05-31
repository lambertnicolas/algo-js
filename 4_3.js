//AFFICHER UN NOMBRE ALEATOIRE "n" fois
const readlineSync = require("readline-sync");

//Function - Renvoie d'un nombre aléatoire entre min et max :
function rand10() {
    return parseInt(Math.random() * 10) + 1;
}

//Définition de l'array
let arr = [];

//Function - ajoute à l'array "n" fois un nombre aléatoire
function multiRand(n) {
    for (let i = 0; i < n; i+=1) {
        arr.push(rand10());
    }
    return arr;
}

//Question posée à l'utlisateur
let nbre = Number(readlineSync.question("Combien de nombre aléatoire désirez-vous ?"));

//Affichage nombre aléatoire
console.log(`Voici une liste de ${nbre} nombres aléatoires de 1 à 10 : ${multiRand(nbre)}`);