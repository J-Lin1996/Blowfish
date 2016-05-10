var Fish = function (x, y, panelInfo) {
    this.x = x;
    this.y = y;
    this.pinfo = panelInfo; //the information window of the game
    this.life = 10; //blood
    this.init();  //initialize
};

Fish.prototype