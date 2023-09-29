/**
 * This is a console-based rock, paper, scissors game against a computer
 * The game is a best of 5 (5 rounds possible, stops if the player or computer scores 3 points)
 * The project's goal is to manipulate the DOM and use Event Listeners to play the game
 */


/**
 * Randomly selects rock, paper, or scissors from an array that will be the computer's choice
 * @returns The computer's randomly selected choice of either rock, paper, or scissors
 */
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}


/**
 * Prompts the user to input 'rock', 'paper', or 'scissors'
 * It will convert it to lowercase
 * If the user did not input a valid option, it will re-prompt the user until they do
 * @returns The player's choice of either rock, paper, scissors
 */
function getPlayerChoice() {

    // let isTyping = true;
    // while (isTyping) {
    //     playerChoice = prompt("Rock, Paper, or Scissors?: ").toLocaleLowerCase();
    //     if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    //         break;
    //     } else {
    //         console.log("Invalid input!");
    //     }
    // }
}


/**
 * Checks if the player and computer have the same choice
 * if there is a tie, will prompt the user to input again and get a new choice from the computer to compare until the answer is different
 * @param {String} playerSelection      The players choice of rock, paper, or scissors
 * @param {String} computerSelection    The computer's randomly selected choice of rock, paper, or scissors
 * @returns an array of the final non-tie player and computer choice to be deconstructed in the playRound function
 */
function checkTie(playerSelection, computerSelection) {
    isTie = true;
    while (isTie) {
        if (playerSelection !== computerSelection) {
            console.log(`Player picked ${playerSelection}, computer picked ${computerSelection}`);
            isTie = false;
        } else {
            console.log(`Player picked ${playerSelection}, computer picked ${computerSelection}`);
            console.log("Tie! please input again...");
            playerSelection = getPlayerChoice();
            computerSelection = getComputerChoice();
        }
    }
    return [playerSelection, computerSelection];
}


/**
 * Compares the player and computer's computer choice and determine a winner
 * @param {*} playerSelection   Player's choice rock, paper, or scissors
 * @param {*} computerSelection Computer's choice rock, paper, or scissors
 * @returns 1 if player won or -1 if computer won (used to keep score which is calculated by the playRound function)
 */
function compareChoice(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = compareChoice.toUpperCase();

    if (player === "ROCK" && computer === "SCISSORS") {
        console.log("Player won");
        return 1;
    } else if (player === "PAPER" && computer === "ROCK") {
        console.log("Player won");
        return 1;
    } else if (player === "SCISSORS" && computer === "PAPER") {
        console.log("Player won");
        return 1;
    } else {
        console.log("Computer won!");
        return -1;
    }
}


/**
 * Will determine a winner, loser, or tie based on the player's and computer's choice for 1 round
 * @param   {String} playerSelection     The choice of the player which is rock, paper, or scissors
 * @param   {String} computerSelection   The choice of the computer's randomly selected choice rock, paper, or scissors
 * @returns {String}                     Whether the player wins, loses, or ties to the computer
 */
function playRound(playerSelection, computerSelection) {

    let finalChoices = checkTie(playerSelection, computerSelection);

    const playerFinal = finalChoices[0];
    const computerFinal = finalChoices[1];

    let winner = compareChoice(playerFinal, computerFinal);
    
    return winner;
}


/**
 * This is the main function that runs the playRound function 5 times and calculates a winner based on the final score
 * It will stop if wither
 * @returns Whether the player won or lost the game after 5 rounds
 */
function game() {

    alert("This is a Rock, Paper, Scissors game against a computer");
    alert("This game can be up to 5 rounds.");

    let playerChoice;
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            alert(button.id);
            playerChoice = button.id;
        });
    });

    return playerChoice;
        // ORIGINAL CODE
    // let finalScore = 0;
    // for (let i = 0; i < 5; i++) {
    //         finalScore += playRound(getPlayerChoice(), getComputerChoice());
    //         if (finalScore === 3 || finalScore === -3) {
    //             console.log(finalScore);
    //             console.log("other player has no way of winning!");
    //             break;
    //         }
    //         console.log(finalScore);
    // }
    // console.log(`The final score is: ${finalScore}`);
    // if (finalScore >= 1) {
    //     return console.log("Player wins!");
    // } else if (finalScore <= -1) {
    //     return console.log("Computer wins!");
    // } else {
    //     return console.log("Oops! Something went wrong");
    // }
}


game();
