// * GLOBAL VARIABLES
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn")
const startScreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen")
const scoreDOM = document.querySelector("#score")
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")

let game;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  // console.log("iniciando juego")
  startScreen.style.display = "none"; // para el inicio del juego
  gameOverScreen.style.display = "none"; // esto para reiniciar el juego
  canvas.style.display = "block";


  // ... empezar nuestra logica de juego
  // nuestro juego será todo una nueva clase
  // vamos a crear un nuevo objeto de lo que será la clase Game
  game = new Game() // crear un juego
  // console.log(game) 
  
  game.gameLoop() // iniciar el loop del nuevo juego
}

// console.log(game)

const keyPress = (event) => {
  if (event.code === "Space") {
    // console.log("aprendo boton space")
    // como ejecutamos el metodo del pollo jumpPollo
    game.pollo.jumpPollo()
    // pongamosle un pin y lo solucionamos luego
  }
}

// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame)
restartBtn.addEventListener("click", startGame)

window.addEventListener("keydown", keyPress)


