function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];

    let computerChoice = Math.floor(Math.random() * rps.length);
    console.log(computerChoice, rps[computerChoice]);
}

getComputerChoice();



