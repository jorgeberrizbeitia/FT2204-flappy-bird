class Game {

  constructor() {
    // todas nuestras propiedades del juego son todos los elementos que estaran en nuestro
    this.bg = new Image(); // crear la propiedad
    this.bg.src = "./images/bg.png" // quizas lo modifiquemos luego
    this.pollo = new Pollo()
    this.pipeArr = [ new Pipe(0, "./images/obstacle_top.png"), new Pipe(375, "./images/obstacle_bottom.png") ]
    this.isGameOn = true;
    this.score = 0;
  }

  addNewPipes = () => {

    // condicionar cuando aparecen los nuevos pipes
    // let newPipe = new Pipe()
    // this.pipeArr.push(newPipe)
    // console.log(this.pipeArr[0])
    if (this.pipeArr[this.pipeArr.length - 1].x < 400) {
      // aparecer

      let randomPositionChange = Math.random() * - 90

      // este es el pipe de arriba
      let newPipe = new Pipe(randomPositionChange, "./images/obstacle_top.png")
      this.pipeArr.push(newPipe)

      // este es el pipe de abajo
      let newPipeDown = new Pipe(randomPositionChange + 375, "./images/obstacle_bottom.png")
      this.pipeArr.push(newPipeDown)
    }

    // IMPORTANTE, NO OLVIDARNOS DE REMOVER LOS PIPES
    // checkear cada pipe que haya llegado al inicio del canvas y entonces borrarlos
  }

  gameOverCollision = () => {
    // de cada pipe, checkear si colisiona con el pollo
    this.pipeArr.forEach((eachPipe) => {

      if (this.pollo.x < eachPipe.x + eachPipe.w &&
        this.pollo.x + this.pollo.w > eachPipe.x &&
        this.pollo.y < eachPipe.y + eachPipe.h &&
        this.pollo.h + this.pollo.y > eachPipe.y) {
        // collision detected!
        console.log("colisionando")
        // finalizar el juego
        // 1. el juego se detiene
        this.isGameOn = false;
        // 2. el canvas desaparece
        canvas.style.display = "none";
        // 3. la pantalla final aparece
        gameOverScreen.style.display = "flex";
      }
    })
    }

  // todos los metodos que regulan nuestro juego
  gameLoop = () => {
    // console.log("juego andando")

    // 1. borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 2. acciones o movimiento de los elementos
    // aqui invocaremos el metodo del pollito
    this.pollo.gravityPollo()
    this.addNewPipes() // invocar el metodo
    // CHECKEAR SI EL POLLITO ESTA COLISIONANDO CON CADA UNO DE LOS PIPES
    this.gameOverCollision()
    this.score = this.score + 1 / 60
    scoreDOM.innerText = Math.floor(this.score)

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
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop)
    }
  }
}