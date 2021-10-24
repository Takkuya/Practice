// Disclaimer: this version was created by my friend Paulo Henrique de Souza(https://github.com/PSouza-10) to show me an alternative way to complete the exercise

let score = {
  player: 0,
  computer: 0,
}

const options = ['rock', 'paper', 'scissors']

const matches = {
  rock: {
    paper: 'loss',
    scissors: 'win',
    rock: 'draw',
  },
  paper: {
    paper: 'draw',
    scissors: 'loss',
    rock: 'win',
  },
  scissors: {
    paper: 'win',
    scissors: 'draw',
    rock: 'loss',
  },
}
function generateRandomNumber() {
  return options[Math.floor(Math.random() * 3)]
}

function computePlay(playerOption, computerOption) {
  return matches[playerOption][computerOption]
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = generateRandomNumber()
    const playerSelection = options[1]

    const playResult = computePlay(playerSelection, computerSelection)

    switch (playResult) {
      case 'loss':
        score.computer += 1
        console.log('You loss')
        break
      case 'win':
        score.player += 1
        console.log('You won')
        break
      case 'draw':
        console.log("It's a draw")
        break
      default:
        break
    }
  }
  console.log(`Computer score: ${score.computer}`)
  console.log(`Your score: ${score.player}`)
}

game()
