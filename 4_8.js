//CALCULER LE TEMPS TOTAL REQUIS A UNE FILE D'ATTENTE POUR PASSER A UNE OU PLUSIEURS CAISSES AUTOMATIQUES AU SUPERMARCHE.
//Les données sont :
//-customers : un array de nombres entiers positifs représentant la queue.
//Chaque entier représente le temps à passer en caisse avant de quitter le supermarché.
//-n : un entier positif = le nombre de caisse disponible.
function queueTime (customers,n) {
//On crée un array pour "n" nombre de caisse. 
//La valeur de départ est 0 pour chaque caisse.
    const tills = new Array (n).fill(0);

//Pour chaque client on fait une boucle sur l'array "n" et on place sa valeur 
//sur le première caisse dont la valeur est égale à la valeur minimum de l'ensemble des caissses actives.
    for (let element of customers) {
        let index = tills.indexOf(Math.min(...tills));
        tills[index] += element;
    }
    return Math.max(...tills);
}

//Valeurs utilisées
let arr = [10,8,3,4];
let nbretills = 2;

//On renvoie la valeur max de l'array "n".
console.log(queueTime(arr,nbretills));