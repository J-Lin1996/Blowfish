
//first check then move!!!!!
function outOfMap() {
    var fishDiv = document.getElementById('fatfish');
}


function moveLeft() {
    var fishDiv = document.getElementById('fatfish');
    fishDiv.style.left = parseInt(fishDiv.style.left) - 1 + "px"; 
}


//check whether it is out of map, return boolean