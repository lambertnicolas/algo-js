//CALCUL DE LA FACTORIELLE D'UNE VALEUR
//Function :
function factorial(a) {
    if (a < 0) 
          console.log("la valeur doit être positive.")
    else if (a == 0) 
        return 1;
    else {
        return (a * factorial(a - 1));
    }
  }

  //Affichage :
  console.log(factorial(5));