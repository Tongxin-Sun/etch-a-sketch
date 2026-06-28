const container = document.getElementById("container")

function generateDiv() {
  const div = document.createElement('div')
  div.classList.add('square')
  container.appendChild(div)
}

for (let i = 0; i < 16 * 16; i++) {
  generateDiv()
}