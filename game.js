
window.onload=function(){
    var boundaries=document.getElementsByClassName("boundary");
    reset();
    var status= document.getElementById("status").innerHTML;





    function launchgame(){
        for (let i=0; i<boundaries.length; i++){
           boundaries[i].addEventListener("mouseenter", lose);
        }
    }


    function lose(){
        for (let i=0; i<boundaries.length; i++){
            boundaries[i].classList.add("youlose");
            document.getElementById("status").innerHTML="You Lost!";
        } 
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


    
    



    

    document.getElementById("start").addEventListener("mouseenter", launchgame);


}