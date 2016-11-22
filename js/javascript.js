var chaudfroid = document.getElementById("indicateur");

console.log("Début du script");

var nbIa = Math.floor(100*Math.random());

console.log("nbIa = " + nbIa);

var nbEssai = 1;


function Tester(){

  var rep = document.getElementById("reponse");

  console.log("nbUser = " + rep.value + " / nbEssai = " + nbEssai++);

  var diff = nbIa-rep.value;

  if (diff < -20) {
    chaudfroid.innerHTML = "Froid";
  }
  else if (diff < -10) {
    chaudfroid.innerHTML = "Tiède";
  }
  else if (diff < 0) {
    chaudfroid.innerHTML = "Chaud";
  }
  else if (diff == 0){
    chaudfroid.innerHTML = "Félicitation ! <br> Vous avez gagné au tour " + nbEssai + ".";
  }
  else if (diff <= 10) {
    chaudfroid.innerHTML = "Chaud";
  }
  else if (diff <= 20) {
    chaudfroid.innerHTML = "Tiède";
  }
  else {
    chaudfroid.innerHTML = "Froid";
  }

  console.log("Fin du script");
}
