class Game {

  constructor() {
    // todas nuestras propiedades del juego son todos los elementos que estaran en nuestro
    this.bg = new Image(); // crear la propiedad
    this.bg.src = "./images/bg.png" // quizas lo modifiquemos luego
    this.pollo = new Pollo()
  
    this.pipeArr = [ new Pipe() ]
  }

  addNewPipes = () => {

    // condicionar cuando aparecen los nuevos pipes
    // let newPipe = new Pipe()
    // this.pipeArr.push(newPipe)
    console.log(this.pipeArr[0])
    if (this.pipeArr[this.pipeArr.length - 1].x < 400) {
      // aparecer
      let newPipe = new Pipe()
      this.pipeArr.push(newPipe)
    }

  }

  // todos los metodos que regulan nuestro juego
  gameLoop = () => {
    console.log("juego andando")

    // 1. borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 2. acciones o movimiento de los elementos
    // aqui invocaremos el metodo del pollito
    this.pollo.gravityPollo()
    this.addNewPipes() // invocar el metodo

    // this.pipeArr.movePipe()
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.movePipe()
    })

    // 3. dibujar los elementos
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
    this.pollo.drawPollo()

    // this.pipeArr.drawPipe() // ya no dibujamos un solo pipe sino todos los de un array
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe()
    })

    // 4. control y recursion
    requestAnimationFrame(this.gameLoop)
  }
}