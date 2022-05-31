//AFFICHER UN NOMBRE ALEATOIRE "n" fois, afficher aussi la moyenne la valeur minimale et la valeur maximale
const readlineSync = require("readline-sync");

//Function - Renvoie d'un nombre aléatoire entre 1 et 10 :
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

//Function moyenne
function average(){
    let avr = 0;
    for (let i = 0; i < multiRand().length; i++) {
        avr = avr + multiRand()[i];
    }
return avr / multiRand().length;
}

//Function permettant que le 10 se retrouve après le 9 et non le 1
function compareNombres(a, b) {
    return a - b;
  }

//Function sélectionnant la plus petite valeur
function min(){
    multiRand().sort(compareNombres);
    return multiRand()[0];
}

//Function sélectionnant la valeur la plus élevée
function max(){
    multiRand().sort(compareNombres);
    let maxNumber = multiRand().length - 1;
    return multiRand()[maxNumber];
}

//Question posée à l'utlisateur
let n = Number(readlineSync.question("Combien de nombre aléatoire désirez-vous ?"));

//Affichage nombre aléatoire
let rand = multiRand(n);
console.log(`Voici une liste de ${n} nombres aléatoires de 1 à 10 : ${rand}`);
console.log("Moyenne : " + average());
console.log("Valeur la plus faible : " + min());
console.log("Valeur la plus élevée : " + max());
