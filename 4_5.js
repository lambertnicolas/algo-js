//CALCULER LA DISTANCE ENTRE 2 POINTS EN 2D :
//Function dont les attributs sont les coordonées sur les axes X et Y
function calcDistance (x1, y1, x2, y2) {
// Calcul
    return Math.sqrt(Math.pow(x2 - x1, 2) +
                Math.pow(y2 - y1, 2) * 1.0);
}
 
console.log(calcDistance(-2, 2, 2, -2));