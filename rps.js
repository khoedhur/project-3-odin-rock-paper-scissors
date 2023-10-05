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
const conmputerScore = document.getElementById('computer-score');


/**
 * This function randomly selects the computer's choice
 * @returns a String with the computer's choice
 */
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}


function compareChoice(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = compareChoice.toUpperCase();

    
}


function showScore() {

}


function playRound() {

}


function game() {
    

}


game();
