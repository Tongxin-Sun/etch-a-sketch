let numSquares = 16
let red, green, blue
const container = document.getElementById("container")

function generateRandomColors() {
  red = Math.floor(Math.random() * 255)
  green = Math.floor(Math.random() * 255)
  blue = Math.floor(Math.random() * 255)
}

function generateDiv(sideLength) {
  const div = document.createElement('div')
  div.classList.add('square')
  div.style.width = `${sideLength}px`
  div.style.height = `${sideLength}px`
  generateRandomColors()
  div.addEventListener('mouseover', () => div.style.backgroundColor = `rgb(${red} ${green} ${blue})`)
  container.appendChild(div)
}

function drawGrid() {
  container.replaceChildren()
  const sideLength = 960 / numSquares
  for (let i = 0; i < numSquares * numSquares; i++) {
    generateDiv(sideLength)
  }
}

drawGrid()

function resetGrid() {
  do {
    numSquares = parseInt(prompt('How many squares per side for the new grid do you want? (Max 100)'))
  } while (numSquares > 100)
  drawGrid()
}

const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', resetGrid)