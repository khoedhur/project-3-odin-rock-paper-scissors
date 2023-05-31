// This function will return a randomized choice for the "computer" player, either rock, paper or scissors
function getComputerChoice() {
    // put the 3 options in an array
    const options = ["rock", "paper", "scissors"];
    // return a random choice from the array
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//This function will take the user's choice, then compare it to the computer's choice, then determine a winner or tie.
//function game(playerSelection, computerSelection) {
    // Ask for user input store it in variable
    // get computer choice
    // if player is rock and computer is paper OR if player is paper and computer is rock OR if player is scissors and computer is paper 
    // player wins

    // else if player is rock and computer is paper OR player is paper and computer is
//}

function playRound(playerSelection, computerSelection) {
    // if player is rock and computer is paper OR if player is paper and computer is rock OR if player is scissors and computer is paper 
    
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    if (player === "ROCK" && computer === "SCISSORS" ||
        player === "PAPER" &&  computer === "ROCK" ||
        player === "SCISSORS" && computer === "PAPER") {
            // player wins
            console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
            return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
}

const playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
