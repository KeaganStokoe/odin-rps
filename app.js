let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors']
  console.log(choices[Math.floor(Math.random() * choices.length)])
  return choices[Math.floor(Math.random() * choices.length)]
}

function playRound() {
  let playerChoice = prompt('Enter your choice').toLowerCase()
  let computerChoice = getComputerChoice().toLowerCase()

  if (playerChoice === computerChoice) {
    return 'The result is a tie!'
  } else if (playerChoice === 'rock')
    if (computerChoice === 'scissors') {
      playerScore += 1
      return 'rock wins'
    } else {
      computerScore += 1
      return 'paper wins'
    }
  else if (playerChoice === 'paper')
    if (computerChoice === 'rock') {
      playerScore += 1
      return 'paper wins'
    } else {
      computerScore += 1
      return 'scissors wins'
    }
  else if (playerChoice === 'scissors')
    if (computerChoice === 'rock') {
      computerScore += 1
      return 'rock wins'
    } else {
      playerScore += 1
      return 'scissors wins'
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        let result = playRound()
        console.log(result)
    }

    if (playerScore > computerScore) {
        result = `You win! The score was ${playerScore} - ${computerScore}`
    } else if (playerScore < computerScore) {
        result = `You lose! The score was ${playerScore} - ${computerScore}`
    } else if (playerScore === computerScore) {
        result = `It's a tie!`
    }

    console.log(result)
}

game()