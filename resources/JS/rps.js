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
const round = document.getElementById('round-result');
const winner = document.getElementById('winner');
const restart = document.getElementById('restart-button');

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


restart.addEventListener('click', () => {
    window.location.reload();
})


/**
 * This function randomly selects the computer's choice
 * @returns a String with the computer's choice
 */
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}


/**
 * This function is called when a button is clicked
 * It checks if the player and computer picked the same option
 * if not, then it determines who wins and displays the winner of the round and increments the score
 * When someone reaches 5, it announces the winner
 */
function playRound(playerChoice, computerChoice) {
    // 2. check if tie
    if (playerChoice === computerChoice) {
        round.textContent = 'Tie!';
        
    }

    // 3. determine winner of the round
    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
            round.textContent = 'Player wins this round!';
            if (playerScore < 5) {
                playerScore++;
            }
            // update score on webpage
            playerScoreDisplay.textContent = playerScore;
    }
    
    if ((computerChoice === 'rock' && playerChoice === 'scissors') ||
        (computerChoice === 'paper' && playerChoice === 'rock') ||
        (computerChoice === 'scissors' && playerChoice === 'paper')) {
            round.textContent = 'Computer wins this round!';
            if (computerScore < 5) {
                computerScore++;
            }
            computerScoreDisplay.textContent = computerScore;
    }
    
    // 4. if player or computer gets to 5 points, report winner
    // disables buttons when player or computer reaches 5
    if (playerScore === 5) {
        winner.textContent = "Player Wins!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    else if (computerScore === 5) {
        winner.textContent = "Computer Wins!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}
