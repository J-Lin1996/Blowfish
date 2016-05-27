var fish = null;   //this is for later blowfish animation
var gameInfo = { w: 0, h: 0 }; //the size of the game UI
var imgs = new Array(13);  //the initialized game img array
var movingTimer = null; //control the move of the blow fish
var eatingOrderByUser = new Array(4);  //store the alt of element clicked by user (4 food itmes)
var eatingOrderByUser2 = new Array(5);  //store the alt of element clicked by user (5 food itmes)
var eatingOrderByUser3 = new Array(6);   //store the alt of element clicked by user  (6 food itmes)
var counter = 0; //record the food clicked
var preFoodLoc = new Array(6);  //this is 4 before and the blowfish will leave a poop 
var lifeTime = 200;   // the timer css/html
var easyTimer = null;  // the timer object
var level = 1;   // the level of the game
var win = false;   // did the user win
var cheating = true;  // did the user cheat
var addfifthfood = false;  //whether the fifth food item has been added
var addsixthfood = false;  //whether the sixth food item has been added

$(function () {
	newgame();
});

function newgame() {
	init();
}

/**
  initialize the game when it is loading the page
*/
function init() {
    //get our images
    imgs[0] = new Image();
    imgs[0].src = '/img/blowfish.png';

    imgs[1] = new Image();
    imgs[1].src = '/img/starfish1.gif';

    imgs[2] = new Image();
    imgs[2].src = '/img/shrimp1.gif';

    imgs[3] = new Image();
    imgs[3].src = '/img/squid1.gif';

    imgs[4] = new Image();
    imgs[4].src = '/img/crab1.gif';

    imgs[5] = new Image();
    imgs[5].src = '/img/mussel.png';

    imgs[6] = new Image();
    imgs[6].src = '/img/peg.gif';

    imgs[7] = new Image();
    imgs[7].src = '/img/clam.gif';

    imgs[8] = new Image();
    imgs[8].src = '/img/Jellyfish.gif';

    imgs[9] = new Image();
    imgs[9].src = '/img/Pfish.gif';

    imgs[10] = new Image();
    imgs[10].src = '/img/seahorse.gif';

    imgs[11] = new Image();
    imgs[11].src = '/img/squidd.gif';

    imgs[12] = new Image();
    imgs[12].src = '/img/turtle.gif';

    //shuffle the img pool
    shuffleImg();

    // initialize the array eatingOrderByUser (for 4 fooditems)
    for (var i = 0; i < eatingOrderByUser.length; i++) {
        eatingOrderByUser[i] = "n";
    }

    // initialize the array eatingOrderByUser2 (for 5 fooditems)
	for (var i = 0; i < eatingOrderByUser2.length; i++) {
        eatingOrderByUser2[i] = "n";
    }

    // initialize the array eatingOrderByUser3 (for 6 fooditems)
	for (var i = 0; i < eatingOrderByUser3.length; i++) {
        eatingOrderByUser3[i] = "n";
    }

    // showing the play button
	document.getElementById("js_start_loading").style.display = "none";
	document.getElementById("js_start_btn").style.display = "block";
	document.getElementById("js_tutor_btn").style.display = "block";
	
}

/**
  start the game
*/
function start() {
    document.getElementById("js_start_flush").style.display = "none";
    randomFoodPlacement(imgs, this.level);
    //set up the the time to max
    document.getElementById("js_life").style.width = parseInt(lifeTime) + "px";
}

/**
  start the timer
*/
function startEasyTimer() {
    cheating = false;   
    clearInterval(easyTimer);
    easyTimer = null;
    lifeTime = 200;
    if (this.level < 8) {
        easyTimer = setInterval('cutTime();', 100);
    } else if (this.level < 15) {
        easyTimer = setInterval('cutTime();', 50);
    } else {
        easyTimer = setInterval('cutTime();', 30);
    }
    
}

/**
  decreasing the timer
*/
function cutTime() {
    lifeTime--;
    if (lifeTime == 0) {
        timeUp();
        clearInterval(easyTimer);
        easyTimer = null;
    }
    document.getElementById("js_life").style.width = parseInt(lifeTime) + "px";
}

/**
  stop the timer
*/
function stopTimer() {
    clearInterval(easyTimer);
    easyTimer = null;
}

/**
  the user finished the click and comparing 4 food itmes
*/
function finishClick() {
    if (counter == 4) {
        stopTimer();
        cheating = true;
        if (comparing(eatingOrderByUser, getEatingOrderElem())) {
            win = true;
            over(win);
        } else {
            win = false;
            over(win);
        }
    }
}

/**
  the user finished the click and comparing 5 food itmes
*/
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

/**
  the user finished the click and comparing 6 food itmes
*/
function finishClick3() {
    if (counter == 6) {
        stopTimer();
        cheating = true;
        if (comparing(eatingOrderByUser3, getEatingOrderElem3())) {
            win = true;
            over(win);
        } else {
            win = false;
            over(win);
        }
    }

}

/**
  clear the click counter
*/
function clearCounter() {
    counter = 0;
}

/**
  the eating function will be triggled when the user clicks the food img
*/
function eating(altt, id) {
    if (cheating) {
        noCheating();
        return;
    }

    // clear the click counter here and show the blowfish
    if (this.level <= 3) {
        if (counter == 4) {
            clearEatingOrderUser();
            counter = 0;
            document.getElementById('fatfish').style.display = "block";
        }
    } else if(this.level <= 7) {
        if (counter == 5) {
            clearEatingOrderUser2();
            counter = 0;
            document.getElementById('fatfish').style.display = "block";
        }
    } else {
        if (counter == 6) {
            clearEatingOrderUser3();
            counter = 0;
            document.getElementById('fatfish').style.display = "block";
        }
    }
   
    
    document.getElementById('fatfish').style.display = "none";

    preFoodLoc[counter] = document.getElementById(id);
    var trailImgArr = getTrailImg();
    
    if (counter - 1 >= 0) {
        if (this.level <= 5) {
            //leave a poop here
            preFoodLoc[counter - 1].src = "/img/poop.png";
        } else {
            // food items confusion part if the player can reach level 5 above
            // increase level difficulty
            preFoodLoc[counter - 1].src = trailImgArr[counter - 1].src;
        }    
    }

    //replace by the blowfish
    document.getElementById(id).src = imgs[0].src;

    if (this.level <= 3) {
        eatingOrderByUser[counter] = altt;
        counter = counter + 1;
        finishClick();
    } else if (this.level <= 7) {
        eatingOrderByUser2[counter] = altt;
        counter = counter + 1;
        finishClick2();
    } else {
        eatingOrderByUser3[counter] = altt;
        counter = counter + 1;
        finishClick3();
    }
}

/**	
   Clear the eating order array for 4 food items		
 */
function clearEatingOrderUser() {
    for (var i = 0; i < eatingOrderByUser.length; i++) {
        eatingOrderByUser[i] = "n";
    }
}

/**
 Clear the eating order array for 5 food items		
 */
function clearEatingOrderUser2() {
    for (var i = 0; i < eatingOrderByUser2.length; i++) {
        eatingOrderByUser2[i] = "n";
    }
}

/**	
 Clear the eating order array for 6 food items		
 */
function clearEatingOrderUser3() {
    for (var i = 0; i < eatingOrderByUser3.length; i++) {
        eatingOrderByUser3[i] = "n";
    }
}

/**	
    Update the level to contain more items.		
 */
function updateLevel() {
    document.getElementById('js_level').innerHTML = this.level;
}

/**	
    Game over page.		
 */
function over(flag){
	//win
    document.getElementById("js_end_flush").style.display = "block";
    if(flag) {
        document.getElementById("js_end_flush").getElementsByTagName("p")[0].innerHTML = "Good Job! You have completed <label>" + this.level + "</label>" + " level";
        this.level++;
        
        document.getElementById("js_end_flush").getElementsByTagName("a")[0].innerHTML = "Continue";
        document.getElementById("js_end_flush").getElementsByTagName("span")[0].className = "icon happy";
		document.getElementById("js_end_flush").getElementsByTagName("a")[1].style.display = "none";
    }
    else {
        //lose
        document.getElementById("js_end_flush").getElementsByTagName("p")[0].innerHTML = "Such a blowfish brain! you only completed <label>" + this.level + "</label> level!";
		
		document.getElementById('database').href = "/Members/Result.aspx?level=" + this.level;
		
        this.level = 1;
        if (addfifthfood) {
            deleteFoodElem('foodDisplay4');
            addfifthfood = false;
        }

        if (addsixthfood) {
            deleteFoodElem2('foodDisplay5');
            addsixthfood = false;
        }
        
       
        backToOriFoodCss(); //change the css to 4 food items
          
        document.getElementById("js_end_flush").getElementsByTagName("a")[0].innerHTML = "Replay";
        document.getElementById("js_end_flush").getElementsByTagName("span")[0].className = "icon";
		document.getElementById("js_end_flush").getElementsByTagName("a")[1].style.display = "block";
		document.getElementById("js_end_flush").getElementsByTagName("a")[1].innerHTML ="Submit Score";
		 
		
		
    }

    // change win to false
    win = false;
	
}

/**	
    Times up page.		
 */
function timeUp() {
    
    document.getElementById("js_end_flush").style.display = "block";
    document.getElementById("js_end_flush").getElementsByTagName("p")[0].innerHTML = "Time up! You only completed <label>" + this.level + "</label> level!";
	document.getElementById("js_end_flush").getElementsByTagName("a")[1].style.display = "block";
	document.getElementById("js_end_flush").getElementsByTagName("a")[1].innerHTML ="Submit Score"; //added for times up
	document.getElementById("js_end_flush").getElementsByTagName("a")[1].href = "/Members/Result.aspx?level=" + this.level; //add
	
	this.level = 1;
    if (addfifthfood) {
        deleteFoodElem('foodDisplay4');
        addfifthfood = false;
    }

    if (addsixthfood) {
        deleteFoodElem2('foodDisplay5');
        addsixthfood = false;
    }
    backToOriFoodCss(); //change the css to 4 food items
    document.getElementById("js_end_flush").getElementsByTagName("a")[0].innerHTML = "Replay";
    document.getElementById("js_end_flush").getElementsByTagName("span")[0].className = "icon";
    win = false;
}


/**	  
 *  Cheating prevention.		
 */
function noCheating() {
    document.getElementById('foodDisplay').style.display = "none";
    document.getElementById("js_end_flush").style.display = "block";
	document.getElementById("js_end_flush").getElementsByTagName("a")[1].style.display = "none";
    document.getElementById("js_end_flush").getElementsByTagName("p")[0].innerHTML = "No cheating!! Please click food items after display fades away!";
    this.level = 1;
    if (addfifthfood) {
        deleteFoodElem('foodDisplay4');
        addfifthfood = false;
    }

    if (addsixthfood) {
        deleteFoodElem2('foodDisplay5');
        addsixthfood = false;
    }
    backToOriFoodCss(); //change the css to 4 food items
    document.getElementById("js_end_flush").getElementsByTagName("a")[0].innerHTML = "Replay";
    document.getElementById("js_end_flush").getElementsByTagName("span")[0].className = "icon";
    win = false; 
    setTimeout(clearEasyTimer, 1500);
}

/**	
    Clear timer.		
 */
function clearEasyTimer() {
    clearInterval(easyTimer);
    easyTimer = null;
}

/**
    Replay button, replay the level.		
 */
function replay() {
    updateLevel();   
    
    //shuffle the pool (choosing imgs)
    shuffleImg();

    if (this.level <= 3) {
        randomFoodPlacement(imgs, this.level);
    } else if (this.level <= 7) {
        if (!addfifthfood) {
            addFoodDisplay(4);
            document.getElementById('food5').style.display = "block";
            addfifthfood = true;
        }
        randomFoodPlacement2(imgs, this.level);
    } else {
        if (!addsixthfood) {
            addFoodDisplay(5);
            document.getElementById('food6').style.display = "block";
            addsixthfood = true;
        }
        randomFoodPlacement3(imgs, this.level);
    }
}

/**
   shuffle the images in image pool
*/
function shuffleImg() {
    var arr = generateReamin(12);
     
    imgs[arr[0]].src = '/img/starfish1.gif';
    imgs[arr[1]].src = '/img/shrimp1.gif';
    imgs[arr[2]].src = '/img/squid1.gif';
    imgs[arr[3]].src = '/img/crab1.gif';
    imgs[arr[4]].src = '/img/mussel.png';
    imgs[arr[5]].src = '/img/peg.gif';
    imgs[arr[6]].src = '/img/clam.gif';
    imgs[arr[7]].src = '/img/Jellyfish.gif';
    imgs[arr[8]].src = '/img/Pfish.gif';
    imgs[arr[9]].src = '/img/seahorse.gif';
    imgs[arr[10]].src = '/img/squidd.gif';
    imgs[arr[11]].src = '/img/turtle.gif';

}

/**
  for testing purpose
*/
function testt() {
    var s1 = '/img/squidd.gif';
    var s2 = '/img/squidd.gif';

    if (s1.localeCompare(s2) != 0) {
        alert('false');
    } else {
        alert('true');
    }
    //shuffleImg();
    //addFoodDisplay(4);
    //addFoodDisplay(5);
    //randomFoodPlacement3(imgs, this.level);
    //generateFoodNumArr3(6);
    //randomFoodPlacement2(imgs, this.level);
    //generateOrderFood2(imgs);
    //alert("yeah finished!!")
}


