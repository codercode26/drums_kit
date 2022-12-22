for(let i=0;i<13;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function alertt(){
        var curr=this.innerHTML;
        play(curr);
        })};
    
    function play(button){
        if(button==='Tom'){
            var audio=new Audio('tom-2.mp3');
            audio.play();
        }
        else if(button==='Crash'){
            var audio=new Audio('crash.mp3');
            audio.play();
    
        }
        else if(button==='Ride'){
            var audio=new Audio('tom-3.mp3');
            audio.play();
    
        }
        else if(button==='open-HH'){
            var audio=new Audio('tom-4.mp3');
            audio.play();
    
        }
        else if(button==='Close-HH'){
            var audio=new Audio('snare.mp3');
            audio.play();
    
        }
        else if(button==='Splash'){
            var audio=new Audio('kick-bass.mp3');
            audio.play();
    
        }
        else if(button==='Snare'){
            var audio=new Audio('snare.mp3');
            audio.play();
    
        }
        else if(button==='Kick'){
            var audio=new Audio('kick-bass.mp3');
            audio.play();
    
        }
        
    }