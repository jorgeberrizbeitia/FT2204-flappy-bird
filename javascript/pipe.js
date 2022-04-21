class Pipe {

  constructor(yParam, srcParam) {
    this.x = canvas.width; // posicion en eje X
    this.y = yParam; // posicion en eje Y
    this.w = 50; // width - ancho
    this.h = 180; // height - alto
    this.img = new Image()
    this.img.src = srcParam
    this.speed = 4;
  }

  drawPipe = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  movePipe = () => {
    this.x = this.x - this.speed;
  }


}