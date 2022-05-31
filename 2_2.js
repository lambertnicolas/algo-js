const readlineSync = require("readline-sync");

//Questions posées à l'utilisateur
let userMinAge = readlineSync.question(
  "Veuillez entrer un âge inférieur au votre ?"
);
let userAge = readlineSync.question("Quel est votre âge actuel ?");
let userMaxAge = readlineSync.question(
  "Veuillez entrer un âge supérieur au votre ?"
);

//condition
if (userAge < userMaxAge && userAge > userMinAge) {
  console.log("Votre age actuel est" + userAge);
} else if (userMaxAge < userMinAge) {
  console.log("Vous n'avez pas compris les questions. Au revoir.");
} else {
  console.log(
    `Une des valeurs indiquées ne correspond pas à la question posée. Avez vous ${userAge} ans ?`
  );
}
