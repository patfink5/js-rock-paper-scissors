// Purpose: Script to play RPS in the console
// Date:    2023-07-01

//Create a function that plays  a single round of rps, by 
//having the pc print it's choice after the user writes 
//theirs, and then declares a winner.

// To DO: re-read functions page; re-write code to pull correctly

//Set Globals;

function getComputerChoice() {
    
    let intCompChoice;  //Create an random integer between 0 & 2;
    let charCompChoice;

    intCompChoice = Math.floor(Math.random() * 3);

    if (intCompChoice == 0) {
        charCompChoice = 'rock'
      } else if (intCompChoice == 1) {
        charCompChoice = 'paper'
      } else {
        charCompChoice = 'scissors'
      }

    return charCompChoice;
    
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! you both picked ${playerSelection}`;
     } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
     } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
     } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
     }
  }
   
  //let playerSelection = "rock";
  //let computerSelection = getComputerChoice();
  


  function game(){
    let playerChoice;

    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    
}