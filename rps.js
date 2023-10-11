/**
 * This program is a rock, paper, scissors
 * The game is a best of 5 (5 rounds possible, stops if the player or computer scores 3 points)
 * The project's goal is to manipulate the DOM and use event listeners and handlers to play the game
 */


// constants
const rock = document.getElementById('rock-button');
const paper = document.getElementById('paper-button');
const scissors = document.getElementById('scissors-button');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
// const scoreboard = document.querySelector('#scoreboard');
const round = document.getElementById('round-result');
const winner = document.getElementById('winner');

// keep track of score
let playerScore = 0;
let computerScore = 0;


// FLOW OF THE GAME
// 1. player clicks on button
rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});


/**
 * This function randomly selects the computer's choice
 * @returns a String with the computer's choice
 */
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {
    


    // 2. check if tie
    if (playerChoice === computerChoice) {
        round.textContent = 'Tie!';
        
    }

    // 3. determine winnter
    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
            round.textContent = 'Player wins this round!';
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
    }


    if ((computerChoice === 'rock' && playerChoice === 'scissors') ||
        (computerChoice === 'paper' && playerChoice === 'rock') ||
        (computerChoice === 'scissors' && playerChoice === 'paper')) {
            round.textContent = 'Computer wins this round!';
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
    }
    
    
    // if one wins, return report
// result is reported back
// score is updated
// 1-4 is repeated until player or computer score is 5
// winner is reported
}
