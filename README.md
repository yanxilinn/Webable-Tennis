## Welcome to Webable-Tennis 🎾

Play Here 👉 https://yanxilinn.github.io/Webable-Tennis/


This is a light webpage-tennis-game. 
A small ball will jump on the field, what you have to do is to control your panel, catch the opponent's ball and switch to a tricky angle to fight back. 




## Functionality & MVPs 

🎾 2-Player-Mode Controls
- Left player: - To move up, use "w"
               - To move down, use "s"
- Right player: - To move up, use up arrow
                - To move down, use down arrow
            
🏆 Score
- There will be a scorer. Any of user lost one hit, another user will add one point. There are 3 rounds, when all rounds end, the game stop. 


##

![image](https://user-images.githubusercontent.com/44556484/191766354-723b0d0c-1d2d-41c7-8492-26f184cec8e6.png)



![gif](https://user-images.githubusercontent.com/44556484/191767821-27a2ff05-c209-49d3-9843-027715ec9d59.gif)





🎵 User can mute or unmute background music using the music button, music will autoplay when you open the page

👥 User can move mouse up and down, use up and down arrow or "W" and "S" in the keyboard

⌚️ Timer will autostart when you open the page


## Technologies, Libraries, APIs

This project will be implemented with the following technologies:
- the Canvas API to render the game board 
- Webpack to bundle and transpile the source JavaScript code
- the jQuery to complete the keyboard interaction




## Code Snippets

```javascript
   $("body").keydown(function(event){
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

document.addEventListener('keydown', (e) => {
    if (e.key === ' '){
        play();
    }
})

```
Use jQuery binds event listener to complete keyboard interaction.


```javascript
ball.checkCanvas = function(){
    if ((this.x == 5) && (this.y >= (panelLeft.y) && this.y <= (panelLeft.y + 100))) {
        this.xSpeed = -this.xSpeed;
    }
 
    if ((this.x == 1000 ) && (this.y >= (panelRight.y) && this.y <= (panelRight.y +100))) {
        this.xSpeed = -this.xSpeed;
    }
    if((this.y <= 0 || this.y >= 600) && (this.x > 0 || this.x < 1000)) {
        this.ySpeed = -this.ySpeed;
    }

    if(this.x< 0 && rightScore < 5){
        rightScore += 1;
        this.x = 500;
        this.y = 300; 
        this.xSpeed = -1 ;
        this.ySpeed = -2 ;  
    }
    if(this.x> 1000 && leftScore < 5){
        leftScore += 1;
        this.x = 500;
        this.y = 300; 
        this.xSpeed = -1 ;
        this.ySpeed = -2 ; 
    }
    if(rightScore === 5){
        round += 1; 
        winner += 1;
        if (round == 4 && winner > 0){alert("Right Player Win!!!");round = 1; }
        this.x = 500;
        this.y = 300; 
        rightScore = 0;
        leftScore = 0; 
        this.xSpeed = -1,
        this.ySpeed = -2;  
    }

    if(leftScore === 5){
        round += 1; 
        winner -=1; 
        if (round == 4 && winner < 0){alert("Left Player Win!!!");round = 1; }
        this.x = 500;
        this.y = 300; 
        rightScore = 0;
        leftScore = 0;
        this.xSpeed = -1,
        this.ySpeed = -2;
    }
};
```
Determine the wins or loses based on the coordinates on Canvas.