const galeria = function(){
let that = this;


this.stream = document.querySelector('.gallery__stream');
this.items = document.querySelectorAll('.gallery__item');

this.anterior = document.querySelector('.gallery__prev');
this.proximo = document.querySelector('.gallery__next');

this.prev = function () {
  that.stream.appendChild(that.items[0]);
  that.items = document.querySelectorAll('.gallery__item')
}

this.next = function (){
  that.stream.insertBefore(that.items[that.items.length - 1], that.items[0]);
  that.items = document.querySelectorAll('.gallery__item')
}

}

const galeriaTrabalho = new galeria();

galeriaTrabalho.anterior.addEventListener('click', galeriaTrabalho.prev);
galeriaTrabalho.proximo.addEventListener('click', galeriaTrabalho.next);