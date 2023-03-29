const choices = ["Rock", "Paper", "Scissors"];
const message = document.getElementById("whoWins");
let totalPlayed = 0;
let rock = 0;
let paper = 0;
let scissors = 0;



// welcome message/alert  //
function welcomeAlert() {
  let person = prompt("Welcome to Rock, Paper, Scissors. What's your name?");
  if (person != null) {
    document.getElementById("headingName").innerHTML =
      "Welcome " + person + ", choose your move!";
  }
}

let submit = document.getElementById("btnSubmit")
submit.addEventListener("click", submitAnswer)

// game //
function submitAnswer() {
  const choice = document.querySelector("input[name='choice']:checked");
  console.log(choice)
  if (choice) {
    let playerChoice = choice.value;
    let computerNumber = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[computerNumber]

    document.getElementById("player-choice").textContent = playerChoice;

    document.querySelectorAll(".computer-choice").forEach(element => {
      element.textContent = computerChoice;
    });

    switch (playerChoice) {
      case "Rock":
        rock++;
        break;
      case "Paper":
        paper++;
        break;
      case "Scissors":
        scissors++;
        break;
      default:
        break;
    }

    let winner = checkWinner(computerChoice, playerChoice);
    updateScores(winner)
  }
}

// game-result //

function checkWinner(compChoice, playerChoice) {
  let result;
  if (compChoice === playerChoice) {
    result = "draw";
  } else if (compChoice == "Rock" && playerChoice == "Scissors" ||
    compChoice == "Scissors" && playerChoice == "Paper" ||
    compChoice == "Paper" && playerChoice == "Rock") {

    result = "computer"
  } else {
    result = "player";
  }


  return result;
}

function updateScores(result) {
  const playerScore = document.getElementById("player-score");
  const computerScore = document.getElementById("computer-score");
  const drawScore = document.getElementById("draw-score")
  const total = document.getElementById("total");
  


  let newScore;
  totalPlayed++;

  total.textContent = totalPlayed;


  if (result === "draw") {
    newScore = parseInt(drawScore.textContent) + 1;
    drawScore.textContent = newScore;
    message.textContent = "It is a tie!";
    message.classList.remove("you-win","you-lose");
  }

  if (result === "computer") {
    newScore = parseInt(computerScore.textContent) + 1;
    computerScore.textContent = newScore;
    message.textContent = "Computer wins!";
    message.classList.add("you-lose");
    message.classList.remove("you-win");
    
  }

  if (result === "player") {
    newScore = parseInt(playerScore.textContent) + 1;
    playerScore.textContent = newScore;
    message.textContent = "You win!";
    message.classList.add("you-win");
    message.classList.remove("you-lose");
  }

}
