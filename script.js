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

  switch (result) {
    case "win":
      humanScore++;
      console.log("You win!");
      break;
    case "lose":
      computerScore++;
      console.log("You lose!");
      break;
    case "tie":
      console.log("It's a tie!");
      break;
    default:
      break;
  }

  console.log(`The current score is player: ${humanScore} computer: ${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;