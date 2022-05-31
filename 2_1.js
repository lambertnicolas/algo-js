const readlineSync = require("readline-sync");

//Questions posées à l'utilisateur
let userAge = readlineSync.question("Quel est votre âge ?");

//condition
if (userAge < 18) {
  console.log("You are not yet an adult");
} else {
  console.log("You are an adult");
}
