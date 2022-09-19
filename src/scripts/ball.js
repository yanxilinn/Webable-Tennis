// const { ContextExclusionPlugin } = require("webpack");
var canvas = document.getElementById('canvas'); 
var ctx = canvas.getContext('2d');

var ball = {
    x: 100,
    y: 100,
    xSpeed: -2,
    ySpeed: -2
};

ball.draw = function(){
    ctx.beginPatch();
    ctx.arc(this.x, this.y, 10, 0, Math.PI*2, false);
    ctx.fill();
};

ball.move = function(){
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed; 
};

setInterval(function(){
    ctx.clearRect(0, 0, 400, 400);
    ball.draw();
    ball.move();
    ctx.strokeRect(0,0,400,400);
},30);


