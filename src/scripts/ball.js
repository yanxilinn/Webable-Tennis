var canvas = document.getElementById("canvas"); 
var ctx = canvas.getContext("2d");

var ball = {
    x: 500,
    y: 300,
    xSpeed: -1,
    ySpeed: -2
};

ball.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, 16, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
};

ball.move = function(){
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed; 
};

ball.checkCanvas = function(){
    // if(this.x < 0 || this.x >1000)
    // this.xSpeed = -this.xSpeed;
    // if(this.y<0 || this.y >600)
    // this.ySpeed = -this.ySpeed;
    if ((this.x >= 990 || this.x <= 10) && (this.y >= (panelLeft.y) && this.y <= (panelLeft.y + 100))) {
        this.xSpeed = -this.xSpeed;
    }
    // console.log(panelRight.y)
    if ((this.x >= 990 || this.x <= 10) && (this.y >= (panelRight.y) && this.y <= (panelRight.y + 100))) {
        this.xSpeed = -this.xSpeed;
    }
    if((this.y <= 0 || this.y >= 600) && (this.x > 0 || this.x < 1000)) {
        this.ySpeed = -this.ySpeed;
        // this.xSpeed = -this.xSpeed;
    }
    if(this.x < 0 || this.x > 1000){
        alert("Game over!");
        this.x = 500;
        this.y = 300; 
    }
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
},5);

var panelLeft = {
    x: 0,
    y: 300,
    xSzie: 10,
    ySize: 100
};

var panelRight = {
    x: 990,
    y: 300,
    xSzie: 10,
    ySize: 100
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

$("body").keydown(function(event){
    console.log(event.keyCode);
    if (event.keyCode === 87)
    {
        panelLeft.y = panelLeft.y-80;
        if(panelLeft.y<0)
        panelLeft.y=0;
    }
    if (event.keyCode == 83)
    {
        panelLeft.y = panelLeft.y +80;
        if(panelLeft.y > 600-panelLeft.ySize)
        panelLeft.y = 600-panelLeft.ySize;
    }
    if (event.keyCode == 38)
    {
        panelRight.y = panelRight.y-80;
        if(panelRight.y<0)
        panelRight.y=0;
    }
    if (event.keyCode == 40)
    {
        panelRight.y = panelRight.y +80;
        if(panelRight.y > 600-panelRight.ySize)
        panelRight.y = 600-panelRight.ySize;
    }
}); 





