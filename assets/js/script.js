const choices = ["Rock", "Paper", "Scissors"];
const message = document.getElementById("statistics");
let totalPlayed = 0, rock = 0, paper = 0, scissors = 0;


// welcome message/alert  //
function welcomeAlert () {
    let person = prompt ("Please enter your name:");
    if (person != null) {
        document.getElementById("headingName").innerHTML =
          "Please " + person + ", choose wisely!";
      }
}


// game //

function submitAnswer() {


  const choice = document.querySelector("input[name='choice']:checked");

  if (choice) {
    let playerChoice = choice.value;
    let computerChoice = Math.floor(Math.random() * choices.length);

    document.getElementById("player-choice").textContent = playerChoice;

    document.querySelectorAll(".computer-choice").forEach(element => {
      element.textContent = choices[computerChoice];
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

    let result = checkWinner(choices[computerChoice], playerChoice);

    updateScores(result);

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
    const total = document.getElementById("total");
    const rockUsed = document.getElementById("rock-used");
    const paperUsed = document.getElementById("paper-used");
    const scissorsUsed = document.getElementById("scissors-used");
  
    let newScore;
    totalPlayed++;
  
    total.textContent = totalPlayed;
    rockUsed.textContent = rock;
    paperUsed.textContent = paper;
    scissorsUsed.textContent = scissors;
  
    if (result == "draw") {
      message.textContent = "It is a draw!";
    }
  
    if (result === "computer") {
      newScore = parseInt(computerScore.textContent) + 1;
      computerScore.textContent = newScore;
      message.textContent = "Computer won!";
    }
  
    if (result === "player") {
      newScore = parseInt(playerScore.textContent) + 1;
      playerScore.textContent = newScore;
      message.textContent = "You won!";
    }
  
  }