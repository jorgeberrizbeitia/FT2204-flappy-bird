class Game {

  constructor() {
    // todas nuestras propiedades del juego son todos los elementos que estaran en nuestro
    this.bg = new Image(); // crear la propiedad
    this.bg.src = "./images/bg.png" // quizas lo modifiquemos luego
    this.pollo = new Pollo()
  }

  // todos los metodos que regulan nuestro juego
  gameLoop = () => {
    console.log("juego andando")

    // 1. borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 2. acciones o movimiento de los elementos
    // aqui invocaremos el metodo del pollito
    this.pollo.gravityPollo()

    // 3. dibujar los elementos
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
    this.pollo.drawPollo()
    

    // 4. control y recursion
    requestAnimationFrame(this.gameLoop)
  }
}