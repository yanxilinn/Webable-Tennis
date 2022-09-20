var canvas = document.getElementById("canvas"); 
var ctx = canvas.getContext("2d");

var ball = {
    x: 100,
    y: 100,
    xSpeed: -2,
    ySpeed: -2
};

ball.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI*2, false);
    ctx.fill();
};

ball.move = function(){
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed; 
};

ball.checkCanvas = function(){
    if(this.x < 0 || this.x >1000)
    this.xSpeed = -this.xSpeed;
    if(this.y<0 || this.y >600)
    this.ySpeed = -this.ySpeed;
};

setInterval(function(){
    ctx.clearRect(0, 0, 1000, 600);
    net.draw();
    ball.draw();
    panelLeft.draw();
    panelRight.draw();
    ball.move();
    ball.checkCanvas();
    ctx.strokeRect(0,0,1000,600);
},3);

var panelLeft = {
    x: 10,
    y: 200,
    xSzie: 10,
    ySize: 80
};

var panelRight = {
    x: 980,
    y: 200,
    xSzie: 10,
    ySize: 80
};

var net = {
    x: 500,
    y: 0,
    xSzie: 3,
    ySize: 600
};

panelLeft.draw = function(){
    ctx.fillRect(this.x, this.y, this.xSzie, this.ySize);
};

panelRight.draw = function(){
    ctx.fillRect(this.x, this.y, this.xSzie, this.ySize);
};

net.draw = function(){
    ctx.fillRect(this.x, this.y, this.xSzie, this.ySize);
};



