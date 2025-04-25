let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const randomNumber = Math.random();
  
    if (randomNumber < 0.33) {
      return "rock";
    } else if (randomNumber < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  console.log("Computer picked:", getComputerChoice());



  function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:");
    return choice.toLowerCase();
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
  
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  function playGame() {
    
    humanScore = 0;
    computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      console.log(`Round ${round}:`);
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      console.log(`Scoreboard after Round ${round}: You: ${humanScore}, Computer: ${computerScore}`);
      console.log("------------------------------");
    }
  
    
    if (humanScore > computerScore) {
      console.log("🏆 You win the game! Congratulations!");
    } else if (humanScore < computerScore) {
      console.log("🤖 You lost the game! Better luck next time.");
    } else {
      console.log("🤝 It's a tie!");
    }
  }
  
  

  playGame();

  
