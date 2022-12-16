const option = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    return option[i];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore += 1;
        return "You Lose! Paper beats Rock.";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        humanScore += 1;
        return "You Win! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        humanScore += 1;
        return "You Win! Paper beats Rock.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore += 1;
        return "You Lose! Scissors beats Paper.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore += 1;
        return "You Lose! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        humanScore += 1;
        return "You Win! Scissors beats Paper.";
    } else {
        return (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()) + " Draw! Let's play again."; 
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your weapon?");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection); 
        console.log(result);
    }
}

function finalScore() {
    if (humanScore > computerScore) {
    console.log("You win!");
    } else if (humanScore < computerScore) {
    console.log("You lose!");
    } else {
    console.log("It's a tie!");
    } 
}
