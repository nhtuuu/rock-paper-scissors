const option = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice();
const humanScorePara = document.getElementById("human");
const computerScorePara = document.getElementById("computer");
const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const endgameMsg = document.getElementById("endgameMsg");
const endgameModal = document.getElementById("endgameModal");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");
let humanScore = 0;
let computerScore = 0;

restartBtn.addEventListener("click", restartGame);

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
    ? (endgameMsg.textContent = "You won!")
    : (endgameMsg.textContent = "You lost...")
}

function openEndgameModal() {
    endgameModal.classList.add("active");
    overlay.classList.add("active");
  }

function game(e) {
    document.getElementById("result").innerHTML = "";
    let playerSelection = e.target.id;
    console.log(playerSelection);
    let computerSelection = getComputerChoice();
    if (playerSelection === "rock") {
        playerSign.textContent = "✊";
    } else if (playerSelection === "paper"){
        playerSign.textContent = "✋";
    } else {
        playerSign.textContent = "✌";
    }
    if (computerSelection === "rock") {
        computerSign.textContent = "✊";
    } else if (computerSelection === "paper"){
        computerSign.textContent = "✋";
    } else {
        computerSign.textContent = "✌";
    }
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

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    humanScorePara.textContent = "Human: 0";
    computerScorePara.textContent = "Computer: 0";
    endgameModal.classList.remove("active");
    overlay.classList.remove("active");
    
  }

const buttons = document.querySelectorAll(".buttonPlay");
buttons.forEach(button => button.addEventListener("click", game));
