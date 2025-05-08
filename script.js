let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
  }
  

  function playRound(humanChoice, computerChoice) {
    let message = "";
  
    if (humanChoice === computerChoice) {
      message = `🤝 It's a tie! You both chose ${humanChoice}.`;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      message = `✅ Nice! ${humanChoice} beats ${computerChoice}. You win this round.`;
    } else {
      computerScore++;
      message = `❌ Oops! ${computerChoice} beats ${humanChoice}. You lost this round.`;
    }
  
 
    resultsDiv.textContent = message;
  
 
    scoreDiv.textContent = `📊 Score — You: ${humanScore} | Computer: ${computerScore}`;
  
    if (humanScore === 5 || computerScore === 5) {
      const finalMessage =
        humanScore === 5
          ? "🏆 Game Over: You conquered the machine!"
          : "💻 Game Over: The computer outplayed you this time.";
      resultsDiv.textContent += ` ${finalMessage}`;
      disableButtons();
    }
  }

  function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }
  

 ["rock", "paper", "scissors"].forEach(choice => {
  document.getElementById(choice).addEventListener("click", () => handleClick(choice));
});

 function handleClick(playerSelection) {
   const computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection);
 }
  
 const restartButton = document.getElementById("restart");

function disableButtons() {
  ["rock", "paper", "scissors"].forEach(id => document.getElementById(id).disabled = true);
  restartButton.style.display = "inline";
}

restartButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  scoreDiv.textContent = "";
  resultsDiv.textContent = "";
  ["rock", "paper", "scissors"].forEach(id => {
    const btn = document.getElementById(id);
    btn.disabled = false;
  });
  restartButton.style.display = "none";
});

