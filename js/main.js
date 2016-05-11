var fish = null;
var gameInfo = { w: 0, h: 0 }; //the size of the game UI
var imgs = new Array(6);
var movingTimer = null; //control the move of the blow fish
var eatingOrderByUser = new Array(4);  //store the alt of element clicked by user
var counter = 0; //record the food clicked
var preFoodLoc = new Array(4);

$(function () {
	newgame();
});

function newgame() {
	init();
}

function init() {
    //get our images
    imgs[0] = new Image();
    imgs[0].src = './img/blowfish.png';

    imgs[1] = new Image();
    imgs[1].src = './img/crab.png';

    imgs[2] = new Image();
    imgs[2].src = './img/shrimp.png';

    imgs[3] = new Image();
    imgs[3].src = './img/squid.png';

    imgs[4] = new Image();
    imgs[4].src = './img/mussel.png';

    for (var i = 0; i < eatingOrderByUser.length; i++) {
        eatingOrderByUser[i] = "n";
    }


    //var canvas = document.getElementById("canvas");
    //gameInfo.w = canvas.offsetWidth;  //offset width
    //gameInfo.h = canvas.offsetHeight; //offset height
	document.getElementById("js_start_loading").style.display = "none";
	document.getElementById("js_start_btn").style.display = "block";
	randomFoodPlacement(imgs);
}

function start() {
    document.getElementById("js_start_flush").style.display = "none";

    //initiate the blowfish
    fish = new Fish(150, 0, gameInfo);
}

function finishClick() {
    //var piss = (counter == 4);
    //alert(piss);
    if (counter == 4) {
        if(comparing(eatingOrderByUser, getEatingOrderElem())) {
            alert("yeah, good memory");
        } else {
            alert("stupid man");
        }  
    }
}

function clearCounter() {
    counter = 0;
}

function eating(altt, id) {
    if (counter == 4) {
        clearEatingOrderUser();
        counter = 0;
        document.getElementById('fatfish').style.display = "block";
    }
    document.getElementById('fatfish').style.display = "none";
    preFoodLoc[counter] = document.getElementById(id);
    if (counter - 1 >= 0) {
        preFoodLoc[counter - 1].src = "./img/poop.png";
    }

    //alert("click!!");
    document.getElementById(id).src = imgs[0].src;
    eatingOrderByUser[counter] = altt;
    counter = counter + 1;
    //var eatpicArr = getEatingOrderElem();     //get the pictures of eating order
    //alert(eatpicArr[1].alt);
    //alert(altt);
    //alert(altt.localeCompare(eatpicArr[1].alt));
    //var i = 0;  //this is the counter for recording the user's click
    //while (eatingOrderByUser[i].localeCompare("n") != 0) {
    //    i++;
    //}
    //eatingOrderByUser[i] = altt;
    //parseInt(i);
    //alert(i == 4);
    finishClick();
}




function clearEatingOrderUser() {
    for (var i = 0; i < eatingOrderByUser.length; i++) {
        eatingOrderByUser[i] = "n";
    }
}

$(document).keydown(function(event) {
    switch (event.keyCode) {
        case 37: // left
            //change picture div fish
            alert("hahaleft");
            //document.getElementById('imgfish').src = './img/crab.png';   //for testing
            clearInterval(movingTimer);
            movingTimer = null;
            movingTimer = setInterval(' moveLeft();', 10);         
            break;
        case 38: // up
            //change picture here
            alert("haharight");
            clearInterval(movingTimer);
            movingTimer = null;
            document.getElementById('fatfish').style.display = "none";
            break;
        case 39:  //right
            randomFoodPlacement(imgs);
            break;
        case 40: // down
            break;
    }
});

function timer() {
    clearInterval(movingTimer);
    movingTimer = null;
    movingTimer = setInterval(' moveLeft();', 10);

    if (movingTimer == null) {
        movingTimer = setInterval(' moveLeft();', 1000);
    } else {
        clearInterval(movingTimer);
        movingTimer = null;
    }
}