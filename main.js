let computerScore = 0
let humanScore = 0
let humanChoice;


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const output = document.querySelector("#output");
const victorText = document.querySelector("#victorText");
const computerScoreText = document.querySelector("#computerScore");
const humanScoreText = document.querySelector("#humanScore");

output.style.border = "2px solid black";

//Event Listeners----------------------------------------------------------------------------------------------------------
rock.addEventListener("click", () => {
    humanChoice = "rock";
    playRound();
});

paper.addEventListener("click", () => {
    humanChoice = "paper";
    playRound();
});

scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    playRound();
});


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


function playRound() {
    let computerChoice = getComputerChoice()
    //Winning the game logic
    if (humanScore == 5 || computerScore == 5) {
        return;
    }
    
    //Regular game logic
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++
        victorText.textContent = 'You win! ' + humanChoice + ' beats ' + computerChoice;
        console.log(humanScore);
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++
        victorText.textContent = 'You win! ' + humanChoice + ' beats ' + computerChoice
        console.log(humanScore);

    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++
        victorText.textContent = 'You win! ' + humanChoice + ' beats ' + computerChoice
        console.log(humanScore);
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++
        victorText.textContent = 'You loose. ' + computerChoice + ' beats ' + humanChoice
        console.log(computerScore);
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++
        victorText.textContent = 'You loose. ' + computerChoice + ' beats ' + humanChoice
        console.log(computerScore);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++
        victorText.textContent = 'You loose. ' + computerChoice + ' beats ' + humanChoice
        console.log(computerScore);
    }
    else {
        victorText.textContent = 'It\'s a draw...'
        console.log('It\'s a draw...')
    }
    humanChoice = null;
    if (humanScore == 5 || computerScore == 5) {
        declareVictor();
        console.log('This worked');
        return;
    }

    updateScore();

}

function updateScore() {
    computerScoreText.textContent = 'Computer Score: ' + computerScore;
    humanScoreText.textContent = 'Your Score: ' + humanScore;
}

function declareVictor() {
    updateScore();
    if (computerScore == 5) {
        victorText.textContent = 'The computer won by getting to 5 points first!';
    }
    else if (humanScore == 5) {
        victorText.textContent = 'You won by getting to 5 points first!';
    }
}

function reset() {
    computerScore = 0;
    humanScore = 0;
    round = 1;
    updateScore();
}