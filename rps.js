// TODO: KEEP TRACK OF WHO WINS AFTER 5 ROUNDS (BEST OF 3 TECHNICALLY)
// TODO: FIX RETURN VALUE OF PLAYROUND() TO A SCORE?

// TODO: CALCULATE WINNER BASED ON NUMBERS OF WINS
//       if player wins, return 1
//       if player loses, return -1
//       variable with final score, should be >= 1 or 

/**
 * Randomly selects rock, paper, or scissors from an array that will be the computer's choice 
 * @returns {String} The computer's choice of either rock, paper, or scissors
 */
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}


/**
 * This function will prompt the user to input 'rock', 'paper', or 'scissors'
 * It will convert it to lowercase
 * If the user did input a correct option, it will re-prompt the user until they do
 * @returns The player's choice of either rock, paper, scissors
 */
function getPlayerChoice() {
    let playerChoice;
    let isTyping = true;
    while (isTyping) {
        playerChoice = prompt("Rock, Paper, or Scissors").toLocaleLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            break;
        } else {
            console.log("Invalid input!");
        }
    }
    return playerChoice;
}


/**
 * Will determine a winner, loser, or tie based on the player's and computer's choice
 * @param   {String} playerSelection     The choice of the player which is rock, paper, or scissors
 * @param   {String} computerSelection   The choice of the computer which is rock, paper, or scissors
 * @returns {String}                     Whether the player wins, loses, or ties to the computer
 */
function playRound() {
    // Get player and computer choice
    let player = getPlayerChoice();
    let computer = getComputerChoice();
    
    //DELETE LATER
    console.log(player);
    console.log(computer);

    // compare player and computer choices
    // tie
    // player rock vs computer scissors 

}   


/**
 * 
 * @returns Whether the player won or lost the game after 5 rounds
 */
function game() {
    // intro Message
    console.log("This is rock, paper, scissors game against a computer \n");
    console.log("A winner wll be determined after five rounds.");

   /*  for (let i = 0; i < 5; i++) {
        playRound();
    }   
    return; */
    playRound();
}



game();
