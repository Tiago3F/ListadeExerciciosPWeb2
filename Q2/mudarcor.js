const fundo = document.querySelector("body");
const pegarInput = document.querySelector("#cor");



function mudarCor(){
    fundo.style.backgroundColor = "#"+pegarInput.value;
}
