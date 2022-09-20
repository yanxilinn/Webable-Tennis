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
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, Math.PI*2, false);
    ctx.fill();
};

ball.move = function(){
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed; 
};

ball.checkCanvas = function(){
    if(this.x <0 || this.x >100)
    this.xSpeed =-this.xSpeed;
    if(this.y<0 || this.y >100)
    this.ySpeed =-this.ySpeed;
};

setInterval(function(){
    ctx.clearRect(0, 0, 300, 150);
    ball.draw();
    ball.move();
    ctx.strokeRect(0,0,300,150);
},3);




