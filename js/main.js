var fish = null;
var gameInfo = { w: 0, h: 0 }; //the size of the game UI
var imgs = new Array(6);
var movingTimer = null; //control the move of the blow fish
var eatingOrderByUser = new Array(4);  //store the alt of element clicked by user
var counter = 0; //record the food clicked
var preFoodLoc = new Array(4);
var lifeTime = 100;
var easyTimer = null;
var level = 2;
var win = false;

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
	document.getElementById("js_tutor_btn").style.display = "block";
	
}

function start() {
    document.getElementById("js_start_flush").style.display = "none";
    randomFoodPlacement(imgs);
    //initiate the blowfish
    //fish = new Fish(150, 0, gameInfo);

    //set up the the time to max
    document.getElementById("js_life").style.width = parseInt(lifeTime) + "px";
    //startEasyTimer();
}

function startEasyTimer() {
    clearInterval(easyTimer);
    easyTimer = null;
    lifeTime = 100;
    easyTimer = setInterval('cutTime();', 100);
}

function cutTime() {
    lifeTime--;
    if (lifeTime == 0) {
        alert("time is up");
        clearInterval(easyTimer);
        easyTimer = null;
    }
    document.getElementById("js_life").style.width = parseInt(lifeTime) + "px";
}

function stopTimer() {
    clearInterval(easyTimer);
    easyTimer = null;
}

function finishClick() {
    if (counter == 4) {
        stopTimer();
        if (comparing(eatingOrderByUser, getEatingOrderElem())) {
            win = true;
            over(win);
        } else {
            //alert("stupid man");
            win = false;
            over(win);
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

    document.getElementById(id).src = imgs[0].src;
    eatingOrderByUser[counter] = altt;
    counter = counter + 1;
    //for changing the picture of last fooditem
    //if (counter == 4) {
    //    preFoodLoc[counter - 1].src = "./img/poop.png";
    //}
    finishClick();
}

function clearEatingOrderUser() {
    for (var i = 0; i < eatingOrderByUser.length; i++) {
        eatingOrderByUser[i] = "n";
    }
}

function over(flag){
		
  
    //this.timeQuene.stop();


    document.getElementById("js_end_flush").style.display = "block";
    if(flag) {

        document.getElementById("js_end_flush").getElementsByTagName("p")[0].innerHTML = "Good Job! You have completed <label>" + this.level + "</label>" + " level";
        document.getElementById("js_end_flush").getElementsByTagName("a")[0].innerHTML = "Continue";
        document.getElementById("js_end_flush").getElementsByTagName("span")[0].className = "icon happy";
    }
    else{
        document.getElementById("js_end_flush").getElementsByTagName("p")[0].innerHTML = "Stupid! you only completed <label>" + this.level + "</label> level!";
        document.getElementById("js_end_flush").getElementsByTagName("a")[0].innerHTML = "Replay";
        document.getElementById("js_end_flush").getElementsByTagName("span")[0].className = "icon";
    }

    win = false;

}

function replay() {
    randomFoodPlacement(imgs);
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