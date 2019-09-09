var stream = document.querySelector('.gallery__stream');
var items = document.querySelectorAll('.gallery__item');
var checkbox = document.getElementById("checkboxFunc")

var anterior = document.querySelector('.gallery__prev');
var proxima = document.querySelector('.gallery__next');

var listen;
var listenn;

anterior.addEventListener("mouseover", listen = function() {
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.gallery__item');
});

proxima.addEventListener("mouseover", listenn = function() {
    stream.appendChild(items[0]);
    items = document.querySelectorAll('.gallery__item');
});

checkbox.addEventListener("click", function() {

  if(checkbox.checked == false){
    anterior.addEventListener("mouseover", listen = function() {
        stream.insertBefore(items[items.length - 1], items[0]);
        items = document.querySelectorAll('.gallery__item');
    });

    proxima.addEventListener("mouseover", listenn = function() {
        stream.appendChild(items[0]);
        items = document.querySelectorAll('.gallery__item');
    });

  }else if(checkbox.checked == true){

    anterior.removeEventListener("mouseover", listen);
   proxima.removeEventListener("mouseover", listenn);

  }else{}
});