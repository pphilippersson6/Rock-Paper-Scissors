const choises = ["Rock", "Paper", "Scissors"];
const message = document.getElementById("message");

function welcomeAlert () {
    let person = prompt ("Please enter your name:");
    if (person != null) {
        document.getElementById("demo").innerHTML =
          "Hello " + person + "! It's time to play!";
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