
window.onload=function(){
    var boundaries=document.getElementsByClassName("boundary");




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

    



    

    document.getElementById("start").addEventListener("mouseenter", launchgame);


}