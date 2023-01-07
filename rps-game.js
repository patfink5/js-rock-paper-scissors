// Purpose: Script to play RPS in the console
// Date:    2023-07-01

//Create a function that plays  a single round of rps, by 
//having the pc print it's choice after the user writes 
//theirs, and then declares a winner.

const rps = ["rock", "paper", "scissors"];

//Computer Choice
function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * rps.length);
    let computerSelection = rps[computerChoice];
    console.log(computerSelection);
}


//Player Choice
function playerSelection () {
    console.log("Let's play RPS! 1, 2, 3 ... Shoot!");
    prompt("Choose - rock, paper, scissors:", "rock");
}

//Alert
// function playerSelection () {
//     console.log("Let's play RPS! 1, 2, 3 ... Shoot!");
//     prompt("Choose - rock, paper, scissors:", "rock");
// }


//Play Game
function playRound () {
    playerSelection ();
    getComputerChoice();
    console.log(computerSelection);


}

playRound();

