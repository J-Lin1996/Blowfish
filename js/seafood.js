var eatingOrder = new Array(4);  //stored images here
var eatingOrderElem = new Array(4); //stored the order of eating elements

var eatingOrder2 = new Array(5);
var eatingOrderElem2 = new Array(5);

function randomFoodPlacement(foodImgs, level) {
    var foodNum = generateFoodNumArr(); //get the foodNum array
    //var foodPosition = $("#food-" + foodNum[0]);  //get the img element on which the food will be placed

    document.getElementById("js_end_flush").style.display = "none";

    generateOrderFood(foodImgs);
    document.getElementById('fatfish').style.display = "block";
    clearCounter();
    //var foodPosition = document.getElementById('food-' + foodNum[0]);
    //foodPosition.src = foodImgs[2].src;
    document.getElementById('food-' + foodNum[0]).src = eatingOrder[0].src;
    document.getElementById('food-' + foodNum[0]).alt = "a";
    eatingOrderElem[0] = document.getElementById('food-' + foodNum[0]);

    document.getElementById('food-' + foodNum[1]).src = eatingOrder[1].src;
    document.getElementById('food-' + foodNum[1]).alt = "b";
    eatingOrderElem[1] = document.getElementById('food-' + foodNum[1]);

    document.getElementById('food-' + foodNum[2]).src = eatingOrder[2].src;
    document.getElementById('food-' + foodNum[2]).alt = "c";
    eatingOrderElem[2] = document.getElementById('food-' + foodNum[2]);

    document.getElementById('food-' + foodNum[3]).src = eatingOrder[3].src;
    document.getElementById('food-' + foodNum[3]).alt = "d";
    eatingOrderElem[3] = document.getElementById('food-' + foodNum[3]);

    /*
       call this method in wfn.js
    */
    foodDisplay(eatingOrder, level);

}

function randomFoodPlacement2(foodImgs, level) {
    var foodNum = generateFoodNumArr2(5);  //get the foodNum array
 
    document.getElementById("js_end_flush").style.display = "none";

    generateOrderFood2(foodImgs);
    document.getElementById('fatfish').style.display = "block";
    clearCounter();   //clear the counter to 0
    
    document.getElementById('food-' + foodNum[0]).src = eatingOrder2[0].src;
    document.getElementById('food-' + foodNum[0]).alt = "a";
    eatingOrderElem2[0] = document.getElementById('food-' + foodNum[0]);

    document.getElementById('food-' + foodNum[1]).src = eatingOrder2[1].src;
    document.getElementById('food-' + foodNum[1]).alt = "b";
    eatingOrderElem2[1] = document.getElementById('food-' + foodNum[1]);

    document.getElementById('food-' + foodNum[2]).src = eatingOrder2[2].src;
    document.getElementById('food-' + foodNum[2]).alt = "c";
    eatingOrderElem2[2] = document.getElementById('food-' + foodNum[2]);

    document.getElementById('food-' + foodNum[3]).src = eatingOrder2[3].src;
    document.getElementById('food-' + foodNum[3]).alt = "d";
    eatingOrderElem2[3] = document.getElementById('food-' + foodNum[3]);

    document.getElementById('food-' + foodNum[4]).src = eatingOrder2[4].src;
    document.getElementById('food-' + foodNum[4]).alt = "d";
    eatingOrderElem2[4] = document.getElementById('food-' + foodNum[4]);

    /*
       call this method in wfn.js
    */
    foodDisplay2(eatingOrder2, level);

}

function generateOrderFood(foodImgs) {
    var arr = generateFoodNumArr();
    eatingOrder[arr[0]] = foodImgs[1];
    eatingOrder[arr[1]] = foodImgs[2];
    eatingOrder[arr[2]] = foodImgs[3];
    eatingOrder[arr[3]] = foodImgs[4];

    //return eatingOrder;
}

function generateOrderFood2(foodImgs) {
    var arr = generateFoodNumArr2(5);
    eatingOrder2[arr[0]] = foodImgs[1];
    eatingOrder2[arr[1]] = foodImgs[2];
    eatingOrder2[arr[2]] = foodImgs[3];
    eatingOrder2[arr[3]] = foodImgs[4];
    eatingOrder2[arr[4]] = foodImgs[5];

    //for (var i = 0; i < eatingOrder2.length; i++) {
    //    alert(eatingOrder2[i]);
    //}

    //return eatingOrder;
}

function getEatingOrderElem() {
    return eatingOrderElem;
}

function getEatingOrderElem2() {
    return eatingOrderElem2;
}


