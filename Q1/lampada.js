const lamp = document.querySelector("#lampada")
lamp.src = "l1.jpg";

function ligarLampada(){
    lamp.src = "l2.jpg";   
}

function apagarLampada(){
    lamp.src = "l1.jpg";   
}