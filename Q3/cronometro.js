var iniciar = document.querySelector("#iniciar");
var parar = document.querySelector("#parar");
var tempo = document.getElementById("temp").value;
tempo = parseInt(tempo);
var cont;

iniciar.onclick = function() {
    cont = setInterval(function() { inicio() }, 1000);
}

function inicio() {
    tempo = eval(tempo + 1);
    document.getElementById("temp").value = tempo;
  }

parar.onclick = function() {
    clearInterval(cont);
}

