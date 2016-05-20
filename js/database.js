/**
   this is the database javascript file for controlling the leader board. 
*/

var index = 0;  // the index of showing the rank

/*
   increase the ranking
* */
function increseIndex() {
    index++;
    document.getElementById('johnny').innerHTML = this.index;
    document.getElementById('johnny').id = "johnnySB";
}