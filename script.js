const option = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice();
const endgameModal = document.getElementById('endgameModal');
const overlay = document.getElementById('overlay');
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
        return ("Computer also took " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()) + "!" + " Draw! Let's play again."; 
    }
}

function finalMessage() {
    return (humanScore > computerScore)
    ? alert("You won!")
    : alert("You lost!");
}

function openEndgameModal() {
    endgameModal.classList.add('active');
    overlay.classList.add('active');
  }

function game(e) {
    document.getElementById("result").innerHTML = "";
    let playerSelection = e.target.innerText;
    console.log(playerSelection);
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection); 
    console.log(result);
    const para = document.createElement("p");
    const content = document.createTextNode(result);
    para.appendChild(content);
    const displayResult = document.getElementById("result");
    displayResult.appendChild(para);
    document.getElementById("human").innerText = "Human: " + humanScore;
    document.getElementById("computer").innerText = "Computer: " + computerScore;
    if (humanScore === 5 || computerScore === 5) {
        openEndgameModal();
        finalMessage();
        } 
}

const buttons = document.querySelectorAll(".buttonPlay");
buttons.forEach(button => button.addEventListener("click", game));
