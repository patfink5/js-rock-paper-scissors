// Purpose: Script to play RPS in the console
// Date:    2023-07-01

//Create a function that plays  a single round of rps, by 
//having the pc print it's choice after the user writes 
//theirs, and then declares a winner.

const rps = ["rock", "paper", "scissors"];

//Computers Choice
function getComputerChoice() {

    let randomizer = Math.floor(Math.random() * rps.length);
    let computerChoice = rps[randomizer];
    return computerChoice;
};

let computerSelection = getComputerChoice();

//Players Choice
let playerSelection = window.prompt("Choose - rock, paper, scissors:", "rock");


//Single Round
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

 playRound(playerSelection, computerSelection);

//Alert
// function playerSelection () {
//     console.log("Let's play RPS! 1, 2, 3 ... Shoot!");
//     prompt("Choose - rock, paper, scissors:", "rock");
// }

