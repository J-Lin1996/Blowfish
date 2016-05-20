var eggCounter = 0;  // the number of clicks
var h = 300;   // the height of the easter egg
var w = 330;   // the width of the easter egg

/**
 * the function that records the increment of the click.
 */
function clickEgg() {
  if(eggCounter == 5) {
    serveSashimi();
  } else {
      eggCounter += 1;
      changePic();
  }
}

/**
 * change the image to Sashimi.
 */
function serveSashimi() {
    var blowfish = document.getElementById('myblowfish');
    blowfish.src = "./img/Sashimi.png";
    $("#myblowfish").animate({
        //left: '250px',
        //opacity: '0.5',
        height: '580px',
        width: '620px'
    }, 2000);
}

/**
 *  change the picture of the easter egg / blow fish using JQuery
 */
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
