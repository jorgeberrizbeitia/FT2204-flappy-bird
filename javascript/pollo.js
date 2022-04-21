class Pollo {

  constructor() {
    // multiples propiedades del pollo
    this.x = 40; // posicion en eje X
    this.y = 40; // posicion en eje Y
    this.w = 50; // width - ancho
    this.h = 40; // height - alto
    this.img = new Image()
    this.img.src = "./images/flappy.png"
  }

  // metodos del pollo
  drawPollo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

}