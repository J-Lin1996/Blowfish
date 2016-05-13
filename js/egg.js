var eggCounter = 0;

function clickEgg() {
  if(eggCounter == 5) {
    serveSashimi();
  } else {
    eggCounter += 1;
  }
}

function serveSashimi() {
  var blowfish = document.getElementById("myBlowfish");
  blowfish.src = "./img/Sashimi.png";
}
