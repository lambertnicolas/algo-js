let first = [1,2,3];
let second = [];

//Copie n°1
second = [...first];
//Copie n°2
second = first.slice(); 


//Dupliquer first :
second.push(...first);

//Affichage :
console.log(second);