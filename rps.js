/**
 * Randomly selects rock, paper, or scissors from an array that will be the computer's choice 
 * @returns {String} The computer's choice which is rock, paper, or scissors
 */
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

/**
 * Will determine a winner, loser, or tie based on the player's and computer's choice
 * @param   {String} playerSelection     The choice of the player which is rock, paper, or scissors
 * @param   {String} computerSelection   The choice of the computer which is rock, paper, or scissors
 * @returns {String}                     Whether the player wins, loses, or ties to the computer
 */
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    if (player === computer) {
        return "You tied!";
    }
    else if (player === "ROCK" && computer === "SCISSORS" ||
            player === "PAPER" &&  computer === "ROCK" ||
            player === "SCISSORS" && computer === "PAPER") {
                return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else if (player === "ROCK" && computer === "PAPER" ||
            player === "PAPER" &&  computer === "SCISSORS" ||
            player === "SCISSORS" && computer === "ROCK") {
                return `You lose! ${playerSelection} loses to ${computerSelection}!`;
    }
}

const playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
