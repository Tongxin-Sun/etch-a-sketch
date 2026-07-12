let numSquares = 16
const container = document.getElementById("container")

const generateRandomColor = () => Math.floor(Math.random() * 255)

function renderSquare(event) {
  const div = event.currentTarget
  const intensity = parseInt(div.dataset.colorIntensity) + 1
  div.dataset.colorIntensity = intensity.toString()
  const opacity = Math.min(intensity / 10, 1)
  const { r, g, b } = JSON.parse(div.dataset.color)
  div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`
}

function generateDiv(sideLength) {
  const div = document.createElement('div')
  div.dataset.colorIntensity = '0'
  const r = generateRandomColor(), g = generateRandomColor(), b = generateRandomColor()
  div.dataset.color = JSON.stringify({ r, g, b })
  div.style.width = `${sideLength}px`
  div.style.height = `${sideLength}px`
  div.addEventListener('mouseover', renderSquare)
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