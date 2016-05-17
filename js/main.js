var fish = null;
var gameInfo = { w: 0, h: 0 }; //the size of the game UI
var imgs = new Array(7);
var movingTimer = null; //control the move of the blow fish
var eatingOrderByUser = new Array(4);  //store the alt of element clicked by user
var eatingOrderByUser2 = new Array(5);
var counter = 0; //record the food clicked
var preFoodLoc = new Array(6);  //this is 4 before
var lifeTime = 100;
var easyTimer = null;
var level = 1;
var win = false;
var cheating = true;
var addfifthfood = false;  

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
    imgs[1].src = './img/starfish1.gif';

    imgs[2] = new Image();
    imgs[2].src = './img/shrimp1.gif';

    imgs[3] = new Image();
    imgs[3].src = './img/squid1.gif';

    imgs[4] = new Image();
    imgs[4].src = './img/crab1.gif';

    imgs[5] = new Image();
    imgs[5].src = './img/mussel.png';

    imgs[6] = new Image();
    imgs[6].src = './img/peg.gif';



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
    randomFoodPlacement(imgs, this.level);
    //set up the the time to max
    document.getElementById("js_life").style.width = parseInt(lifeTime) + "px";
}


function startEasyTimer() {
    cheating = false;   
    clearInterval(easyTimer);
    easyTimer = null;
    lifeTime = 100;
    easyTimer = setInterval('cutTime();', 100);
}

function cutTime() {
    lifeTime--;
    if (lifeTime == 0) {
        timeUp();
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
        cheating = true;
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

function finishClick2() {
    if (counter == 5) {
        stopTimer();
        cheating = true;
        if (comparing(eatingOrderByUser2, getEatingOrderElem2())) {
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
    if (cheating) {
        noCheating();
        return;
    }

    if (this.level <= 2) {
        if (counter == 4) {
            clearEatingOrderUser();
            counter = 0;
            document.getElementById('fatfish').style.display = "block";
        }
    } else {
        if (counter == 5) {
            clearEatingOrderUser2();
            counter = 0;
            document.getElementById('fatfish').style.display = "block";
        }
    }
   
    
    document.getElementById('fatfish').style.display = "none";

    //leave a poop here
    preFoodLoc[counter] = document.getElementById(id);
    if (counter - 1 >= 0) {
        preFoodLoc[counter - 1].src = "./img/poop.png";
    }

    //replece by the blowfish
    document.getElementById(id).src = imgs[0].src;

    if (this.level <= 2) {
        eatingOrderByUser[counter] = altt;
        counter = counter + 1;
        finishClick();
    } else {
        eatingOrderByUser2[counter] = altt;
        counter = counter + 1;
        finishClick2();
    } 
}

function clearEatingOrderUser() {
    for (var i = 0; i < eatingOrderByUser.length; i++) {
        eatingOrderByUser[i] = "n";
    }
}

function clearEatingOrderUser2() {
    for (var i = 0; i < eatingOrderByUser2.length; i++) {
        eatingOrderByUser[i] = "n";
    }
}

function updateLevel() {
    document.getElementById('js_level').innerHTML = this.level;
}

function over(flag){
	
    document.getElementById("js_end_flush").style.display = "block";
    if(flag) {
        document.getElementById("js_end_flush").getElementsByTagName("p")[0].innerHTML = "Good Job! You have completed <label>" + this.level + "</label>" + " level";
        this.level++;
        
        document.getElementById("js_end_flush").getElementsByTagName("a")[0].innerHTML = "Continue";
        document.getElementById("js_end_flush").getElementsByTagName("span")[0].className = "icon happy";
    }
    else {
        
        document.getElementById("js_end_flush").getElementsByTagName("p")[0].innerHTML = "Such a blowfish brain! you only completed <label>" + this.level + "</label> level!";
        this.level = 1;
        addfifthfood = false;
        deleteFoodElem('foodDisplay4');
        document.getElementById("js_end_flush").getElementsByTagName("a")[0].innerHTML = "Replay";
        document.getElementById("js_end_flush").getElementsByTagName("span")[0].className = "icon";
    }

    win = false;

}

function timeUp() {
    
    document.getElementById("js_end_flush").style.display = "block";
    document.getElementById("js_end_flush").getElementsByTagName("p")[0].innerHTML = "Time up! stupid! you only completed <label>" + this.level + "</label> level!";
    this.level = 1;
    addfifthfood = false;
    deleteFoodElem('foodDisplay4');
    document.getElementById("js_end_flush").getElementsByTagName("a")[0].innerHTML = "Replay";
    document.getElementById("js_end_flush").getElementsByTagName("span")[0].className = "icon";
    win = false;
}


/**/
function noCheating() {
    document.getElementById('foodDisplay').style.display = "none";
    document.getElementById("js_end_flush").style.display = "block";
    document.getElementById("js_end_flush").getElementsByTagName("p")[0].innerHTML = "No cheating!! Please click food items after display fades away!";
    this.level = 1;
    addfifthfood = false;
    deleteFoodElem('foodDisplay4');
    document.getElementById("js_end_flush").getElementsByTagName("a")[0].innerHTML = "Replay";
    document.getElementById("js_end_flush").getElementsByTagName("span")[0].className = "icon";
    win = false; 
    setTimeout(clearEasyTimer, 1500);
}

function clearEasyTimer() {
    clearInterval(easyTimer);
    easyTimer = null;
}


function replay() {
    updateLevel();   
    if (this.level > 2) {
        //-----------------testing here
        if (!addfifthfood) {
            addFoodDisplay(4);
            document.getElementById('food5').style.display = "block";
            addfifthfood = true;
        }       
        randomFoodPlacement2(imgs, this.level);
    } else {
        randomFoodPlacement(imgs, this.level);
    }
}

function testt() {
    addFoodDisplay(4);
    randomFoodPlacement2(imgs, this.level);
    //generateOrderFood2(imgs);
    //alert("yeah finished!!")
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

