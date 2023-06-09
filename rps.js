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
function playRound() {
    console.log("This is rock, paper, scissors game against a computer \n");
    console.log("A winner wll be determined after five rounds.");

    // FIX LOGIC ERROR: if there is a tie, the game should re-prompt the user again, and keep playing until there is a winner
    // while the user has not put in a valid input (rock paper scissors)
    // or if the user and computer has tied
    let isTyping = true;
    while (isTyping) {
        // Get a new computer choice every time
        let computerSelection = getComputerChoice();
        //keep prompting the user until they enter rock, paper, or scissors
        let computer = computerSelection.toLocaleLowerCase();
        let playerSelection = prompt("Please type 'rock', 'paper', or 'scissors`");
        //convert to lowercase to cover caps
        let player = playerSelection.toLocaleLowerCase();
        // if player enters valid response
        if (player === "rock" || player === "paper" || player === "scissors") {
            console.log(player);
            console.log(computer);

            if (player === "rock" && computer === "scissors" ||
                player === "paper" &&  computer === "rock" ||
                player === "scissors" && computer === "paper") {
                    return alert(`You win! ${playerSelection} beats ${computerSelection}!`);
            } else if (player === "rock" && computer === "" ||
                       player === "PAPER" &&  computer === "SCISSORS" ||
                       player === "SCISSORS" && computer === "ROCK") {
                    return alert(`You lose! ${playerSelection} loses to ${computerSelection}!`);
            }
        } 
        else {
            console.log("Invalid input! Please make sure you type a valid response!");
        }
        // if the computer and player both have the same pick
        if (player === computer) {
            console.log(`You and the computer both picked ${playerSelection}! No winner!`);
        }
    }

    
}


/**
 * 
 * @returns Whether the player won or lost the game after 5 rounds
 */
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }   
    return;
}

// TODO: KEEP TRACK OF WHO WINS AFTER 5 ROUNDS (BEST OF 3 TECHNICALLY)

game();
