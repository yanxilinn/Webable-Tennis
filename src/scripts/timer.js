var hiddenProperty = 'hidden' in document ? 'hidden' :    
    'webkitHidden' in document ? 'webkitHidden' :    
    'mozHidden' in document ? 'mozHidden' :    
    null;

var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');

var timer = function(){
    time=time+1;
    document.getElementById("time").innerHTML=time;
    localStorage.time=time;
}

var onVisibilityChange = function(){
    if (!document[hiddenProperty]) {    
        if(timing===null){
            timing = setInterval(timer,1000);
        }
        
    }else{
        if(timing!==null && gameOver === true){
            clearInterval(timing);
            timing=0;
        }   
    }
}

var time=0;

if(localStorage.time!==undefined){
    // time=parseInt(localStorage.time);
    localStorage.time = 0; 
}

var timing=setInterval(timer,1000);

document.addEventListener(visibilityChangeEvent, onVisibilityChange);
