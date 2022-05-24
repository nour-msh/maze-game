
window.onload=function(){




    var boundaries=document.getElementsByClassName("boundary");
    reset();
    var status= document.getElementById("status").innerHTML;
    var score=0;
    win();
    var timer;
    var element= document.getElementById("timer");






    function launchgame(){
        for (let i=0; i<boundaries.length; i++){
           boundaries[i].addEventListener("mouseenter", lose);
        }
        var ms=0;
        timer=setInterval(() =>{
            element.innerHTML=" Live Timer 00:00:"+ms;
            ms++;},100)

    }


    function lose(){
        for (let i=0; i<boundaries.length; i++){
            boundaries[i].classList.add("youlose");
            document.getElementById("status").innerHTML="You Lost!";
        } 
            score-=10;
            document.getElementById("test").innerHTML="SCORE: "+ score;
            clearInterval(timer);


    }

    function reset(){
        document.getElementById("start").addEventListener("mouseenter", resetColor);
        }



    function resetColor(){
        for (let i=0; i<boundaries.length; i++){
            boundaries[i].classList.remove("youlose");
            document.getElementById("status").innerHTML=status;
        }
    }


    function win(){
        document.getElementById("end").addEventListener("mouseenter",won)
    }



    function won(){
        document.getElementById("status").innerHTML="You Won!";
        score+=5;
        document.getElementById("test").innerHTML="SCORE: "+ score ;
        clearInterval(timer);

    }

    

    

    document.getElementById("start").addEventListener("mouseenter", launchgame);


}