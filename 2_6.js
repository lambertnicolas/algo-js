const readlineSync = require("readline-sync");

//Questions posées à l'utilisateur
let nbre = new Number(readlineSync.question("Veuillez entrer un chiffre entre 1 et 7 :"));
nbre -= 1;

var jour = new Array(7);
jour[0] = "Lundi";
jour[1] = "Mardi";
jour[2] = "Mercredi";
jour[3] = "Jeudi";
jour[4] = "Vendredi";
jour[5] = "Samedi";
jour[6] = "Dimanche";
console.log(jour[nbre]);
