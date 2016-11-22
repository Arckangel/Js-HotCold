var chaudfroid = document.getElementById("indicateur");
var historique = document.getElementById("indication");

console.log("Début du script");

var nbIa = Math.floor(100*Math.random());

console.log("nbIa = " + nbIa);
var nbEssai = 0;

function Tester(){

  var rep = document.getElementById("reponse");


  console.log("nbUser = " + rep.value + " / nbEssai = " + nbEssai++);

  var diff = Math.abs(nbIa-rep.value);



  if (diff == 0){
    chaudfroid.innerHTML = "Félicitations ! <br> Essai : " + nbEssai;
    chaudfroid.style.color = "green";
    alert("Vous avez gagné au bout de " + nbEssai + " essai(s).");
    location.reload();
  }
  else if (diff <= 10) {
    chaudfroid.innerHTML = "Chaud <br> Essai : " + nbEssai;
    chaudfroid.style.color = "red";
  }
  else if (diff <= 20) {
    chaudfroid.innerHTML = "Tiède <br> Essai : " + nbEssai;
    chaudfroid.style.color = "purple";
  }
  else {
    chaudfroid.innerHTML = "Froid <br> Essai : " + nbEssai;
    chaudfroid.style.color = "blue";
  }

  if (nbEssai == 5) {
    alert("Le nombre est compris entre " + (nbIa-8) + " et " + (nbIa+11) + ".")
  }

  if (diff != 0 && nbEssai ==10) {
    alert("Vous avez PERDU ! AH !! ");
   location.reload();
  }
}

console.log("Fin du script");
