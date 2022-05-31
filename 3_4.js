//Array d'exemple :
let arr = [5,7,2,9,1,4];

//Récupérer la dernière valeur :
let lastItem = arr.length - 1;

//Trier les données du plus petit au plus grand :
arr.sort();

//Affichage
console.log("Le minimum est " + arr[0] + " et le maximum est " + arr[lastItem]);



//2ème solution
console.log("Minimum", Math.min(...arr));
console.log("Maximum", Math.max(...arr));