let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors']
  console.log("Computer choice - ", choices[Math.floor(Math.random() * choices.length)])
  return choices[Math.floor(Math.random() * choices.length)]
}

let playerChoice = ''
let gameResult = ''

function setPlayerChoice(choice) {
  playerChoice = choice
}

function setResult(result) {
  gameResult = result
  resultBox.innerHTML = `You chose ${playerChoice}. ${gameResult}!`;
}

let rockButton = document.createElement('button')
rockButton.innerHTML = 'Rock'
rockButton.addEventListener('click', function () {
  setPlayerChoice('rock')
  playRound(playerChoice)
})

let paperButton = document.createElement('button')
paperButton.innerHTML = 'Paper'
paperButton.addEventListener('click', function () {
  setPlayerChoice('paper')
  playRound(playerChoice)
})

let scissorsButton = document.createElement('button')
scissorsButton.innerHTML = 'Scissors'
scissorsButton.addEventListener('click', function () {
  setPlayerChoice('scissors')
  playRound(playerChoice)
})

let resultBox = document.createElement('h3')
resultBox.innerHTML = ""

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(resultBox)

function playRound(playerChoice) {
  let computerChoice = getComputerChoice().toLowerCase()

  if (playerChoice === computerChoice) {
    setResult('The result is a tie!')
  } else if (playerChoice === 'rock')
    if (computerChoice === 'scissors') {
      playerScore += 1
      setResult('Rock wins')
    } else {
      computerScore += 1
      setResult('Paper wins')
    }
  else if (playerChoice === 'paper')
    if (computerChoice === 'rock') {
      playerScore += 1
      setResult('Paper wins')
    } else {
      computerScore += 1
      setResult('Scissors wins')
    }
  else if (playerChoice === 'scissors')
    if (computerChoice === 'rock') {
      computerScore += 1
      setResult('Rock wins')
    } else {
      playerScore += 1
      setResult('Scissors wins')
    }
}

function game() {
  if (playerScore > computerScore) {
    result = `You win! The score was ${playerScore} - ${computerScore}`
  } else if (playerScore < computerScore) {
    result = `You lose! The score was ${playerScore} - ${computerScore}`
  } else if (playerScore === computerScore) {
    result = `It's a tie!`
  }

  console.log(result)
}
