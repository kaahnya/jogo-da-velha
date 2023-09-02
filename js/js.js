window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

var player = "X";

function jogada(id) {
    var button = document.getElementById(id);
    button.innerHTML = player;

    if (player === "X") { 
        player = "O";
    } else {
        player = "X";
    }
}
