var eggsCounter = 0; //Clicks till Easter Egg opened

function clickEgg() {
  if(eggsCounter == 5) {
    eggRedirect();
  } else {
    eggsCounter = eggsCounter + 1;
  }
}

function eggRedirect() {
  window.location="https://en.wikipedia.org/wiki/Fugu";
}
