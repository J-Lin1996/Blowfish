var eggCounter = 0;
var blowfish = document.getElementById("myBlowfish");

function clickEgg() {
  if(eggCounter == 5) {
    serverSashimi();
  } else {
    eggCounter += 1;
  }
}

function serveSashimi() {
  blowfish.src = "../img/Sashimi.png";
}
