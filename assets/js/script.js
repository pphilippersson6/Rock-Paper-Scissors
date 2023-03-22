const choises = ["Rock", "Paper", "Scissors"];
const message = document.getElementById("statistics");
let totalPlayed = 0, rock = 0, paper = 0, scissors = 0;


// welcome message/alert  //
function welcomeAlert () {
    let person = prompt ("Please enter your name:");
    if (person != null) {
        document.getElementById("headingName").innerHTML =
          "Hello " + person + ". Choose wisely!";
      }
}



// game //

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