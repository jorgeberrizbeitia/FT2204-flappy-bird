class Pipe {

  constructor() {
    this.x = canvas.width; // posicion en eje X
    this.y = 0; // posicion en eje Y
    this.w = 50; // width - ancho
    this.h = 80; // height - alto
    this.img = new Image()
    this.img.src = "./images/obstacle_top.png"
    this.speed = 4;
  }

  drawPipe = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  movePipe = () => {
    this.x = this.x - this.speed;
  }


}