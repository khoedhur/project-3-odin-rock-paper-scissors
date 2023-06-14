// TODO: The return of the computer is not updating leading to wrong winner logic

/**
 * Randomly selects rock, paper, or scissors from an array that will be the computer's choice 
 * @returns {String} The computer's randomly selected choice of either rock, paper, or scissors
 */
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}


/**
 * Prompts the user to input 'rock', 'paper', or 'scissors'
 * It will convert it to lowercase
 * If the user did not input a correct option, it will re-prompt the user until they do
 * @returns The player's choice of either rock, paper, scissors
 */
function getPlayerChoice() {
    let playerChoice;
    let isTyping = true;
    while (isTyping) {
        playerChoice = prompt("Rock, Paper, or Scissors?: ").toLocaleLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            break;
        } else {
            console.log("Invalid input!");
        }
    }
    return playerChoice;
}


/**
 * Checks if the player and computer have the same choice
 * if there is a tie, will prompt the user and get a new choice from the computer
 * @param {String} playerSelection      The players choice of rock, paper, or scissors
 * @param {String} computerSelection    The computer's randomly selected choice of rock, paper, or scissors
 * @returns nothing
 */
function checkTie(playerSelection, computerSelection) {
    isTie = true;
    while (isTie) {
        if (playerSelection !== computerSelection) {
            console.log(`Player picked ${playerSelection}, computer picked ${computerSelection}`);   
            break;
        } else {
            console.log("Tie! please input again...");
            playerSelection = getPlayerChoice();
            computerSelection = getComputerChoice();
        }
    }
    return;
}


/**
 * Compares the player versus the computer 
 * @param {*} playerSelection 
 * @param {*} computerSelection 
 * @returns 1 if player won or -1 if computer won
 */
function compareChoice(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player won");
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player won");
        return 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Player won");
        return 1;
    } else {
        console.log("Computer won!");
        return -1;
    }
}


/**
 * Will determine a winner, loser, or tie based on the player's and computer's choice
 * @param   {String} playerSelection     The choice of the player which is rock, paper, or scissors
 * @param   {String} computerSelection   The choice of the computer's randomly selected choice rock, paper, or scissors
 * @returns {String}                     Whether the player wins, loses, or ties to the computer
 */
function playRound(playerSelection, computerSelection) {
    //DELETE LATER
    console.log(playerSelection);
    console.log(computerSelection);

    // first check for tie between player and computer
    // invalid inputs should be handled already
    checkTie(playerSelection, computerSelection);

    //DELETE LATER
    console.log(playerSelection);
    console.log(computerSelection);

    let winner = compareChoice(playerSelection, computerSelection);
    
    return winner; 
}


/**
 * 
 * @returns Whether the player won or lost the game after 5 rounds
 */
function game() {
    // intro Message
    console.log("This is a Rock, Paper, Scissors game against a computer");
    console.log("A winner wll be determined after five rounds.");
    let finalScore = 0;
    for (let i = 0; i < 5; i++) {
            finalScore += playRound(getPlayerChoice(), getComputerChoice());
            console.log(finalScore)
    }   
    
    console.log(`The final score is: ${finalScore}`);

    if (finalScore >= 1) {
        return console.log("Player is da winner");
    } else if (finalScore <= -1) {
        return console.log("Computer is winner");
    } else {
        return console.log("something went wrong");
    }
}


game();
