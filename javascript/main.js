// * GLOBAL VARIABLES
console.log("probando")
const startBtn = document.querySelector("#start-btn");
const startScreen = document.querySelector("#splash-screen");
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")



// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  console.log("iniciando juego")
  startScreen.style.display = "none";
  canvas.style.display = "block";

  // ... empezar nuestra logica de juego
  // nuestro juego será todo una nueva clase
  // vamos a crear un nuevo objeto de lo que será la clase Game
  let game = new Game()
  game.gameLoop()
}





// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame)





