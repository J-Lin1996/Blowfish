var eatingOrder = new Array(4);  //stored images here
var eatingOrderElem = new Array(4); //stored the order of eating elements

function randomFoodPlacement(foodImgs) {
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

    foodDisplay(eatingOrder);

}

function generateOrderFood(foodImgs) {
    var arr = generateFoodNumArr();
    eatingOrder[arr[0]] = foodImgs[1];
    eatingOrder[arr[1]] = foodImgs[2];
    eatingOrder[arr[2]] = foodImgs[3];
    eatingOrder[arr[3]] = foodImgs[4];

    //return eatingOrder;
}

function getEatingOrderElem() {
    return eatingOrderElem;
}