/**
   level 1 - 15:  4 food Items, 2000m
   level 16 - 30: 5 food Items, 1500m
   level 31 - ??: 6 food Items, 1500m
*/

var foodNumArray = new Array(4);  //this is for  level 1 - 15
var foodNumArray2 = new Array(5)  //this is for level 16 - 30
var foodNumArray3 = new Array(6); // this is for level 31 - ??

var remainNumArray = new Array(12); // gnerate random number from 1 - 12


/**
  this is for resetting the food num array.
*/
function clearFoodNumArr() {
    foodNumArray[0] = 100;
    foodNumArray[1] = 100;
    foodNumArray[2] = 100;
    foodNumArray[3] = 100;
}

/**	
 * this is for resetting the food number array		
 * @param numFood the number of food needed to be cleared		
 */
function clearFoodNumArr2(numFood) {
    for (var i = 0; i < numFood; i++) {
        foodNumArray2[i] = 100;
    }
}

/**		
 * this is for resetting the food number array		
 * @param numFood the number of food needed to be cleared		
 */
function clearFoodNumArr3(numFood) {
    for (var i = 0; i < numFood; i++) {
        foodNumArray3[i] = 100;
    }
}

/**
  clear the number of remaining food
*/
function clearRemain(num) {
    for (var i = 0; i < num; i++) {
        remainNumArray[i] = 100;          
    }
}

function foodDisplay(foodOrderImgArr, level) {
    document.getElementById('foodDisplay0').src = foodOrderImgArr[0].src;
    document.getElementById('foodDisplay1').src = foodOrderImgArr[1].src;
    document.getElementById('foodDisplay2').src = foodOrderImgArr[2].src;
    document.getElementById('foodDisplay3').src = foodOrderImgArr[3].src;
    document.getElementById('foodDisplay').style.display = "block";
    stopTimer();
    document.getElementById("js_life").style.width = 200 + "px";
	
	// if the level is less 10 the food display will fade away in 3 sec		
    // if the level is between 11 and 30 the food display will fade away in 2 sec		
    // if the level is more than 30 the food display will fade away in 1 sec
    if (level <= 10) {
        setTimeout(foodDisplayFade, 3000);
    } else if (level <= 30) {
        setTimeout(foodDisplayFade, 2000);
    } else {
        setTimeout(foodDisplayFade, 1000);
    } 
	
}

			
/**		
 * This function is for controlling the food display in index page (5 food items)		
 * @param foodOrderImgArr the array of images		
 * @param level the level of this game		
 */
function foodDisplay2(foodOrderImgArr, level) {
    document.getElementById('foodDisplay0').src = foodOrderImgArr[0].src;
    document.getElementById('foodDisplay1').src = foodOrderImgArr[1].src;
    document.getElementById('foodDisplay2').src = foodOrderImgArr[2].src;
    document.getElementById('foodDisplay3').src = foodOrderImgArr[3].src;
    document.getElementById('foodDisplay4').src = foodOrderImgArr[4].src;
    document.getElementById('foodDisplay').style.display = "block";
    stopTimer();
    document.getElementById("js_life").style.width = 200 + "px";

    if (level <= 10) {
        setTimeout(foodDisplayFade, 3000);
    } else if (level <= 30) {
        setTimeout(foodDisplayFade, 2000);
    } else {
        setTimeout(foodDisplayFade, 1000);
    }
}

/**		
 * This function is for controlling the food display in index page (6 food items)		
 * @param foodOrderImgArr the array of images		
 * @param level the level of this game		
 */
function foodDisplay3(foodOrderImgArr, level) {
    document.getElementById('foodDisplay0').src = foodOrderImgArr[0].src;
    document.getElementById('foodDisplay1').src = foodOrderImgArr[1].src;
    document.getElementById('foodDisplay2').src = foodOrderImgArr[2].src;
    document.getElementById('foodDisplay3').src = foodOrderImgArr[3].src;
    document.getElementById('foodDisplay4').src = foodOrderImgArr[4].src;
    document.getElementById('foodDisplay5').src = foodOrderImgArr[5].src;
    document.getElementById('foodDisplay').style.display = "block";
    stopTimer();
    document.getElementById("js_life").style.width = 200 + "px";


    if (level <= 10) {
        setTimeout(foodDisplayFade, 3000);
    } else if (level <= 30) {
        setTimeout(foodDisplayFade, 2000);
    } else {
        setTimeout(foodDisplayFade, 1000);
    }
	
}

/**		
 * fade away the food display		
 */
function foodDisplayFade() {
    document.getElementById('foodDisplay').style.display = "none";
    /*start the timer*/
    startEasyTimer();
}

/**		
 * comparing the eating order clicked by user and the original eating order		
 * @param userArr eating order clicked by user		
 * @param correctArr the correct eating order		
 * @returns {boolean} whether the two array is the same		
 */
function comparing(userArr, correctArr) {
    for (var i = 0; i < correctArr.length; i++) {
        if (userArr[i].localeCompare(correctArr[i].alt) != 0) {
            return false;
        }
    }
    return true;
}

/**		
 * for blow fish animation		
 */
function moveLeft() {
    var fishDiv = document.getElementById('fatfish');
    fishDiv.style.left = parseInt(fishDiv.style.left) - 1 + "px"; 
}

/**
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
    
    /**show the foodnumarray for testing*/
    //for (var i = 0; i < foodNumArray.length; i++) {
    //    alert(foodNumArray[i]);
    //}
    return foodNumArray;
}

/**		
 this is the main function for generating numbers for 5 food items.		
 */
function generateFoodNumArr2(numFood) {
    clearFoodNumArr2(numFood);
    var count = 0;
    while (true) {
        if (count == 5) {
            break;
        }
        var randx = parseInt(Math.floor(Math.random() * 5));
        if (isRepeatedNum2(randx)) {
            continue;
        }
        foodNumArray2[count] = randx;
        count++;
    }

    return foodNumArray2;
}

/**		
 this is the main function for generating numbers for 6 food items.		
 */
function generateFoodNumArr3(numFood) {
    clearFoodNumArr3(numFood);
    var count = 0;
    while (true) {
        if (count == 6) {
            break;
        }
        var randx = parseInt(Math.floor(Math.random() * 6));
        if (isRepeatedNum3(randx)) {
            continue;
        }
        foodNumArray3[count] = randx;
        count++;
    }
    

    return foodNumArray3;
}

/**
  generate the food items trail number array
*/
function generateReamin(num) {
    clearRemain(num);
    var count = 0;
    while (true) {
        if (count == 12) {
            break;
        }
        var randx = parseInt(Math.floor(Math.random() * 12)) + 1;  //generate number from 1 - 12
        if (isRepeateNumRe(randx)) {
            continue;
        }
        remainNumArray[count] = randx;
        count++;
    }


    return remainNumArray;

}

/**
 *checking the repeat number for 4 food items		
 * @param num the number		
 * @returns {boolean} whether the number is repeated in the array	
*/
function isRepeatedNum(num) {
    for (var i = 0; i < foodNumArray.length; i++) {
        if (num == foodNumArray[i]) {
            return true;
        }
    }
    return false;
}

/**		
 * checking the repeat number for 5 food items		
 * @param num the number		
 * @returns {boolean} whether the number is repeated in the array		
 */
function isRepeatedNum2(num) {
    for (var i = 0; i < foodNumArray2.length; i++) {
        if (num == foodNumArray2[i]) {
            return true;
        }
    }
    return false;
}

/**		
 * checking the repeat number for 6 food items		
 * @param num the number		
 * @returns {boolean} whether the number is repeated in the array		
 */
function isRepeatedNum3(num) {
    for (var i = 0; i < foodNumArray3.length; i++) {
        if (num == foodNumArray3[i]) {
            return true;
        }
    }
    return false;
}

/**		
 * checking the repeat number for remaining food items		
 * @param num the number		
 * @returns {boolean} whether the number is repeated in the array		
 */
function isRepeateNumRe(num) {
    for (var i = 0; i < remainNumArray.length; i++) {
        if (num == remainNumArray[i]) {
            return true;
        }
    }
    return false;
}

/**
  add an new food item
  @param num the number to be added to the food display
*/
function addFoodDisplay(num) {
    var imgDis = document.createElement('img');
    imgDis.style.height = "50px";
    imgDis.style.width = "50px";
    imgDis.style.float = "left";
    imgDis.id = "foodDisplay" + num;
    imgDis.src = "";
    //imgDis.style.border = "1px solid #dc00ff";
    if (num == 4) {
        document.getElementById('foodDisplay').style.width = "273px";
        document.getElementById('foodDisplay').style.left = "16%";
    } else {
        document.getElementById('foodDisplay').style.width = "320px";
        document.getElementById('foodDisplay').style.left = "10%";
    }
    
    document.getElementById('foodDisplay').appendChild(imgDis);
}

/**		
 * using css to modify the original food display		
 */
function backToOriFoodCss() {
    document.getElementById('foodDisplay').style.width = "210px";
    document.getElementById('foodDisplay').style.left = "26%";
}

/**		
 * delete the 5th food item 		
 * @param id the id of the food element 		
 */
function deleteFoodElem(id) {
    var idObject = document.getElementById(id);
    if (idObject != null) {
        idObject.parentNode.removeChild(idObject);
    }
    document.getElementById('food5').style.display = "none";
}

/**		
 * delete the 6th food item		
 * @param id the id of the food element		
 */
function deleteFoodElem2(id) {
    var idObject = document.getElementById(id);
    if (idObject != null) {
        idObject.parentNode.removeChild(idObject);
    }
    document.getElementById('food6').style.display = "none";
}

