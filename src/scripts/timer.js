// if the page is visible to users 
var hiddenProperty = 'hidden' in document ? 'hidden' : null;

var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');

var timer = function(){
    time=time+1;
    document.getElementById("time").innerHTML=time;
   
}

var time=0;
var timing=setInterval(timer,1000);


