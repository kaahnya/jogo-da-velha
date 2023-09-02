window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

var player = "X";

var playerX = 0; var pointX = 1;

var playerO = 0; var pointO = 1;

function pointOne() {
    if(playerX>11){
        reset(), document.getElementById("pointX").innerHTML = (pointX +=1)
         
     }else{
         document.getElementById("playerX").innerHTML = (playerX +=1)
     }
} 

function pointOner() {
    if(playerO>11){
        reset(), document.getElementById("pointO").innerHTML = (pointO +=1)
         
     }else{
         document.getElementById("playerO").innerHTML = (playerO +=1)
     }
} 


function jogada(id) {
    var button = document.getElementById(id);
    button.innerHTML = player;

    if (player === "X") { 
        player = "O";
    } else {
        player = "X";
    }
}

function reset() {
    playerX = 0;
    document.getElementById("playerX").innerHTML = playerX ;
}

function resetr() {
    playerO = 0;
    document.getElementById("playerO").innerHTML = playerO ;
}

function resetGame() {
    for (let i = 1; i <= 9; i++) {
        const button = document.getElementById(i.toString());
        button.innerHTML = "";
    }
}