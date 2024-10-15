const CHOICES = ["rock", "paper", "scissors"];
const WIN_COMBO = {
  "rock":"scissors",
  "paper":"rock",
  "scissors":"paper"
};

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors");
}

function getResult(humanChoice, computerChoice) {
  if (WIN_COMBO[humanChoice] === computerChoice) {
    return "win";
  } else if (WIN_COMBO[computerChoice] === humanChoice) {
    return "lose";
  } else {
    return "tie";
  }
}

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.id)
  })
})


function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  console.log("You have chosen", humanChoice);
  console.log("Computer has chosen", computerChoice);
  let result = getResult(humanChoice, computerChoice);

  if (humanScore === 5 || computerScore === 5) {
    document.querySelector("#gameWinner").textContent = ""
    computerScore = 0
    humanScore = 0
  }

  switch (result) {
    case "win":
      humanScore++;
      document.querySelector("#result").textContent = "You Win!!"
      break;
    case "lose":
      computerScore++;
      document.querySelector("#result").textContent = "You Lose!"
      break;
    case "tie":
      document.querySelector("#result").textContent = "It's a tie!"
      break;
    default:
      break;
  }

  document.querySelector("#score").textContent = `The current score is player: ${humanScore} computer: ${computerScore}`;
    if (humanScore === 5) {
      document.querySelector("#gameWinner").textContent = "You have won the game!!"
    } else if (computerScore === 5) {
      document.querySelector("#gameWinner").textContent = "Computer has won the game!!"
    }
}

let humanScore = 0;
let computerScore = 0;