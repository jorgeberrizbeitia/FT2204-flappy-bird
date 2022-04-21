class Pollo {

  constructor() {
    // todas las propiedades del pollo, posicion, tamaño, imagen, etc...
    this.x = 40; // posicion en eje X
    this.y = 40; // posicion en eje Y
    this.w = 50; // width - ancho
    this.h = 40; // height - alto
    this.img = new Image()
    this.img.src = "./images/flappy.png"
    this.speed = 2;
    this.jumpSpeed = 30;
  }

  // metodos del pollo

  // metodo para dibujar el pollo en el canvas
  drawPollo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  // metodo para hacer que el pollo se mueva hacia abajo
  gravityPollo = () => {
    this.y = this.y + this.speed
  }

  // subir la posicion del pollito en x cantidad
  jumpPollo = () => {
    this.y = this.y - this.jumpSpeed
  }

}