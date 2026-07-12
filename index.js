let numSquares = 16
const container = document.getElementById("container")

function generateDiv(sideLength) {
  const div = document.createElement('div')
  div.classList.add('square')
  div.style.width = `${sideLength}px`
  div.style.height = `${sideLength}px`
  div.addEventListener('mouseover', () => div.classList.add('color'))
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