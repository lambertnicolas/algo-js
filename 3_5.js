//SOMME DES POSITIFS
let arr = [1,4,-7,-12];

let result = 0;

//Boucle addition des nombres positifs :
for (let elem of arr) {
    if(elem > 0) {
    result += elem
    }
  }

console.log("Result : " + result);