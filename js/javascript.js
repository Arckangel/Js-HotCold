var chaudfroid = document.getElementById("indicateur");

console.log("Début du script");

var nbIa = Math.floor(100*Math.random());

console.log("nbIa = " + nbIa);

var nbEssai = 0;


function Tester(){

  var rep = document.getElementById("reponse");

  console.log("nbUser = " + rep.value + " / nbEssai = " + nbEssai++);

  var diff = Math.abs(nbIa-rep.value);

  if (diff == 0){
    chaudfroid.innerHTML = "Félicitations ! <br> Vous avez gagné au tour " + nbEssai + ".";
    chaudfroid.style.color = "green";
  }
  else if (diff <= 10) {
    chaudfroid.innerHTML = "Chaud";
    chaudfroid.style.color = "red";
  }
  else if (diff <= 20) {
    chaudfroid.innerHTML = "Tiède";
    chaudfroid.style.color = "purple";
  }
  else {
    chaudfroid.innerHTML = "Froid";
    chaudfroid.style.color = "blue";
  }

  console.log("Fin du script");
}
