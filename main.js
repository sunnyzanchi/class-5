const buttons = document.querySelectorAll('button')
const playerSelectionDiv = document.querySelector('#player-selection')
const cpuSelectionDiv = document.querySelector('#cpu-selection')
const playerContainer = document.querySelector('#player-container')

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', () => {
    const selection = button.id
    playGame(selection)
  })
})

// TODO: can we make a tracker for the player and CPU
// to keep track of who has won how many games?
const playGame = (playerSelection) => {
  const cpuSelection = getCpuSelection()
  const winner = determineWinner(playerSelection, cpuSelection)
  playerSelectionDiv.innerHTML = emojiFromId(playerSelection)
  cpuSelectionDiv.innerHTML = emojiFromId(cpuSelection)

  if (winner === 'tie') {
    playerContainer.style.background = 'goldenrod'
    cpuSelectionDiv.style.background = 'goldenrod'
  }

  if (winner === 'cpu') {
    playerContainer.style.background = 'salmon'
    cpuSelectionDiv.style.background = 'aquamarine'
  }

  if (winner === 'player') {
    playerContainer.style.background = 'aquamarine'
    cpuSelectionDiv.style.background = 'salmon'
  }
}

const getCpuSelection = () => {
  const selections = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * selections.length)
  return selections[randomIndex]
}

// returns 'tie', 'player', or 'cpu'
// TODO: can we make this more elegant?
const determineWinner = (playerSelection, cpuSelection) => {
  switch (playerSelection) {
    case 'rock':
      switch (cpuSelection) {
        case 'rock':
          return 'tie'
        case 'paper':
          return 'cpu'
        case 'scissors':
          return 'player'
      }
    case 'paper':
      switch (cpuSelection) {
        case 'rock':
          return 'player'
        case 'paper':
          return 'tie'
        case 'scissors':
          return 'cpu'
      }
    case 'scissors':
      switch (cpuSelection) {
        case 'rock':
          return 'cpu'
        case 'paper':
          return 'player'
        case 'scissors':
          return 'tie'
      }
  }
}

const emojiFromId = (id) => {
  // this is not particularly fault-tolerant — passing an invalid id here would return `undefined`.
  return {
    rock: '🗿',
    scissors: '✂️',
    paper: '📄',
  }[id]
}
