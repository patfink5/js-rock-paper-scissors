// Purpose: Script to play RPS in the console
// Date:    2023-07-01

//Create a function that plays  a single round of rps, by 
//having the pc print it's choice after the user writes 
//theirs, and then declares a winner.

const rps = ["rock", "paper", "scissors"];

//Computers Choice
let pc_selection = (function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * rps.length);
    let computerSelection = rps[computerChoice];
    return computerSelection;
})();

//Players Choice
let playerSelection = window.prompt("Choose - rock, paper, scissors:", "rock");
console.log(playerSelection);
console.log(pc_selection);

//Alert 






//Alert
// function playerSelection () {
//     console.log("Let's play RPS! 1, 2, 3 ... Shoot!");
//     prompt("Choose - rock, paper, scissors:", "rock");
// }

