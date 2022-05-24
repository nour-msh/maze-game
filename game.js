
window.onload=function(){



// Assigning variables
    var boundaries=document.getElementsByClassName("boundary");
    reset();
    var status= document.getElementById("status").innerHTML;
    var score=0;
    win();
    var timer;
    var element= document.getElementById("timer");




//Upon launching game,if cursor hovers over boundaries-->Lose

    function launchgame(){
        for (let i=0; i<boundaries.length; i++){
           boundaries[i].addEventListener("mouseenter", lose);
        }

        //Setting a live timer
        var ms=0;
        timer=setInterval(() =>{
            element.innerHTML=" Live Timer 00:00:"+ms;
            ms++;},100)

    }

// If user loses, change boundaries color to red and remove 10 from score
    function lose(){
        for (let i=0; i<boundaries.length; i++){
            boundaries[i].classList.add("youlose");
            document.getElementById("status").innerHTML="You Lost!";
        } 
            score-=10;
            document.getElementById("test").innerHTML="SCORE: "+ score;

            // Stopping timer if user loses
            clearInterval(timer);


    }
// Resetting boundaries' color if cursor hovers over start box
    function reset(){
        document.getElementById("start").addEventListener("mouseenter", resetColor);
        }



    function resetColor(){
        for (let i=0; i<boundaries.length; i++){
            boundaries[i].classList.remove("youlose");
            document.getElementById("status").innerHTML=status;
        }
    }

// If user hovers over E--> wins 
    function win(){
        document.getElementById("end").addEventListener("mouseenter",won)
    }


// If user wins--> show You Won and add 5 to score
    function won(){
        document.getElementById("status").innerHTML="You Won!";
        score+=5;
        document.getElementById("test").innerHTML="SCORE: "+ score ;
        clearInterval(timer);

    }

    

    
// Launching game if cursor hovers over start box
    document.getElementById("start").addEventListener("mouseenter", launchgame);


}