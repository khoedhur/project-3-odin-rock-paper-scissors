/**
 * This program is a rock, paper, scissors
 * The game is a best of 5 (5 rounds possible, stops if the player or computer scores 3 points)
 * The project's goal is to manipulate the DOM and use event listeners and handlers to play the game
 */


// constants
const rock = document.getElementById('rock-button');
const paper = document.getElementById('paper-button');
const scissors = document.getElementById('scissors-button');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');


/**
 * This function randomly selects the computer's choice
 * @returns a String with the computer's choice
 */
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}


function compareChoice(playerChoice, computerChoice) {
    let player = playerChoice.toUpperCase();
    let computer = computerChoice.toUpperCase();

    
}


function updateScore() {

}


function playRound(playerChoice, computerChoice) {

}


function game() {
    // FLOW OF THE GAME

    // 1. player clicks on button
    rock.addEventListener('click', function() {

    });

    paper.addEventListener('click', function() {

    });

    scissors.addEventListener('click', function() {

    });
    // 2. player choice is compared with computer choice
    // 3. result is reported back
    // 4. score is updated
    // 5. 1-4 is repeated until player or computer score is 5
    // winner is reported
}


game();
