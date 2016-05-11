var foodNumArray = new Array(4);


function clearFoodNumArr() {
    foodNumArray[0] = 100;
    foodNumArray[1] = 100;
    foodNumArray[2] = 100;
    foodNumArray[3] = 100;
}

function foodDisplay(foodOrderImgArr) {
    document.getElementById('foodDisplay0').src = foodOrderImgArr[0].src;
    document.getElementById('foodDisplay1').src = foodOrderImgArr[1].src;
    document.getElementById('foodDisplay2').src = foodOrderImgArr[2].src;
    document.getElementById('foodDisplay3').src = foodOrderImgArr[3].src;
    document.getElementById('foodDisplay').style.display = "block";
    setTimeout(foodDisplayFade, 1500);
}

function foodDisplayFade() {
    document.getElementById('foodDisplay').style.display = "none";
}

function comparing(userArr, correctArr) {
    for (var i = 0; i < correctArr.length; i++) {
        if (userArr[i].localeCompare(correctArr[i].alt) != 0) {
            return false;
        }
    }
    return true;
}

//first check then move!!!!!
function outOfMap() {
    var fishDiv = document.getElementById('fatfish');
}


function moveLeft() {
    var fishDiv = document.getElementById('fatfish');
    fishDiv.style.left = parseInt(fishDiv.style.left) - 1 + "px"; 
}

/*
   this is the main function for generating food.
*/
function generateFoodNumArr() {
    clearFoodNumArr();
    var count = 0;
    while (true) {
        if (count == 4) {
            break;
        }
        var randx = parseInt(Math.floor(Math.random() * 4));
        if (isRepeatedNum(randx)) {
            continue;
        }
        foodNumArray[count] = randx;
        count++;
    }
    
    /*show the foodnumarray for testing*/
    //for (var i = 0; i < foodNumArray.length; i++) {
    //    alert(foodNumArray[i]);
    //}
    return foodNumArray;
}

function isRepeatedNum(num) {
    for (var i = 0; i < foodNumArray.length; i++) {
        if (num == foodNumArray[i]) {
            return true;
        }
    }
    return false;
}


//check whether it is out of map, return boolean