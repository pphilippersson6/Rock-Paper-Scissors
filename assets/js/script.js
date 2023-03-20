const choises = ["Rock", "Paper", "Scissors"];
const message = document.getElementById("message");

function welcomeAlert () {
    let person = prompt ("Please enter your name:");
    if (person != null) {
        document.getElementById("demo").innerHTML =
          "Hello " + person + "! It's time to play!";
      }
}