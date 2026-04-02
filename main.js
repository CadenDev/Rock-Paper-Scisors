let computerScore = 0
let humanScore = 0

playGame()


//Functions-----------------------------------------------------------------------------------------------------------------

function getComputerChoice() {
    let random = Math.random()
    if (random <= 0.333) {
        return 'rock'
    }
    else if (random <= 0.666) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

function getHumanChoice() {
    return prompt('Rock, Paper, or Scissors')
}

function playRound() {
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice().toLowerCase()

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++
        console.log('You win! ' + humanChoice + ' beats ' + computerChoice)
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++
        console.log('You win! ' + humanChoice + ' beats ' + computerChoice)

    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++
        console.log('You win! ' + humanChoice + ' beats ' + computerChoice)
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++
        console.log('You loose. ' + computerChoice + ' beats ' + humanChoice)
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++
        console.log('You loose. ' + computerChoice + ' beats ' + humanChoice)
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++
        console.log('You loose. ' + computerChoice + ' beats ' + humanChoice)
    }
    else {
        console.log('It\'s a draw...')
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}