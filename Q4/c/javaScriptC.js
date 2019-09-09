var stream = document.querySelector('.gallery__stream');
var items = document.querySelectorAll('.gallery__item');

var anterior = document.querySelector('.gallery__prev');
var proxima = document.querySelector('.gallery__next');

anterior.addEventListener("click", function() {
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.gallery__item');
  });

proxima.addEventListener("click", function() {
    stream.appendChild(items[0]);
    items = document.querySelectorAll('.gallery__item');
});