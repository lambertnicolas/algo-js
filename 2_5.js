const readlineSync = require("readline-sync");

//Questions posées à l'utilisateur
let favNumber = readlineSync.question("Quel est votre nombre préféré ?");

if (favNumber == 42) {
  favNumber = readlineSync.question(
    "Votre nombre préféré est le 42. Très bon choix."
  );
} else {
  number = 0;
  while (number != 42) {
    favNumber = readlineSync.question(
      "Etes-vous sûr ? Quel est votre nombre préféré ?"
    );
    number = favNumber;
  }
}
