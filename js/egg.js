var eggCounter = 0;
var h = 180;
var w = 200;

function clickEgg() {
  if(eggCounter == 5) {
    serveSashimi();
  } else {
      eggCounter += 1;
      changePic();
  }
}

function serveSashimi() {
    var blowfish = document.getElementById('myblowfish');
    blowfish.src = "./img/Sashimi.png";
    $("#myblowfish").animate({
        //left: '250px',
        //opacity: '0.5',
        height: '280px',
        width: '320px'
    }, 2000);
}

function changePic() {
    var blowfishh = document.getElementById('myblowfish');
    //blowfish.src = "./img/Sashimi.png";
    var img = "./img/" + parseInt(eggCounter) + ".gif";
    blowfishh.src = img;
    h += 15;
    w += 15;

    $("#myblowfish").animate({
        //left: '250px',
        //opacity: '0.5',
        height: h + 'px',
        width:  w + 'px'
    }, 1000);
   
}
