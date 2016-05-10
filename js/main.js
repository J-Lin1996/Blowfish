var fish = null;
var gameInfo = { w: 0, h: 0 }; //the size of the game UI
var imgs = new Array(6);
var movingTimer = null; //control the move of the blow fish

$(function () {
	newgame();
});

function newgame() {
	init();
}

function init() {
    //get our images
    imgs[0] = new Image();
    imgs[0].src = 'img/animals-blowfish.png';


    //var canvas = document.getElementById("canvas");
    //gameInfo.w = canvas.offsetWidth;  //offset width
    //gameInfo.h = canvas.offsetHeight; //offset height
	document.getElementById("js_start_loading").style.display = "none";
	document.getElementById("js_start_btn").style.display = "block";
}

function start() {
    document.getElementById("js_start_flush").style.display = "none";

    //initiate the blowfish
    fish = new Fish(150, 0, gameInfo);


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
            alert("johnny is smart!");
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