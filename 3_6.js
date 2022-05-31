let arr = ["Exercice", "de", "Javascript", ":", "chapitre", "3", "terminé"];

let phrase = "";
let lastItemPhrase ="";
let lastItem = arr.length -1;

for (let i = 0; i <= lastItem; i+=1) {
    if (i != lastItem){
        phrase += arr[i] + " ";
    }
    else {
        lastItemPhrase += arr[i] + "";
    }
}

console.log(phrase + lastItemPhrase);