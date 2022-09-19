var canvas = document.getElementById('canvas'); 
var net = canvas.getContext('2d');
net.strokeRect(150,0,1,150);
net.fillStyle="#ffffff";

var block_left = canvas.getContext('2d');
block_left.strokeRect(2,75,2,20);

var block_right = canvas.getContext('2d');
block_right.strokeRect(296, 75,2,20);

var ball=canvas.getContext("2d");
ball.beginPath();
ball.arc(50,50,2,0,2*Math.PI);
ball.fillStyle="white";
ball.fill();
ball.stroke();



// const canvas = document.getElementById('canvas'); 
// const ctx = canvas.getContext('2d');
// const width = 800;
// const height = 600; 


// // net.fill();

// const blockHeight = 50;
// const blockWidth = 10;
// const blockDiff = 25;
// let playerMoved = false;
// let blockContact = false; 

// let ballX = 250;
// let ballY = 350;
// const ballRadius = 5;

// // let speedY, speedX, trajectorX, computerSpeed;

// function renderCanvas(){
//     // canvas
//     ctx.fillStyle = "white";
//     ctx.fillRect(150,0,2,150);
//     // block 
//     ctx.fillStyle = "white";
//     ctx.fillRect(2, 70, blockWidth, blockHeight);//left block
//     ctx.fillRect(145, 70, blockWidth, blockHeight);//left block
//     ctx.beginPath(); //set center line 
//     ctx.setLineDash([4]);
//     ctx.strokeStyle = "white"; 
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.arc(ballX, ballY, ballRadius, 2*Math.PI);
//     ctx.fillStyle = "white";
//     ctx.fill();

// }


// function setupCanvas(){
//     canvas.width = width
//     canvas.height = height
//     renderCanvas();
// }




// var block_left = canvas.getContext('2d');
// block_left.fillStyle="white";
// block_left.fillRect(2,75,5,20);

// var block_right = canvas.getContext('2d');
// block_right.fillStyle="white";
// block_right.fillRect(292,75,5,20);

// var ball=canvas.getContext("2d");
// ball.fillStyle="white"
// ball.beginPath();
// ball.arc(95,50,4,0,2*Math.PI);
// ball.closePath();
// ball.fill(); 



