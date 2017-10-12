//thinks of a random number. allows user to input 7 guesses and resets
var name = prompt("Please enter your name.");
var num = parseInt(Math.random() * 100);
var rightValue = false;
console.log(num);
function count() {
  var counter = 0;
  return function () {
    if (counter >= 7 || rightValue == true) {
      counter = 0;
      rightValue = false;
    } else {
      return counter += 1;
    }
  }
}
//accepts user's guess
var addcount = count();
function guess(){
  var value = document.getElementById("userInput").value;
  if (value > num) {
    document.getElementById("outputText").innerHTML = "Too high! Guess again!";
  }
  else if (value < num) {
    document.getElementById("outputText").innerHTML = "Too low! Guess again!"
  }
  else if (value == num) {
    document.getElementById("outputText").innerHTML = "You win, " + name + "! I'm thinking of a new number now.";
    num = parseInt(Math.random() * 100);
    rightValue = true;
    console.log(num);
  }
  else {
    document.getElementById("outputText").innerHTML = "Invalid input."
    document.getElementById("userInput").value = "";
  }
  if (addcount() == 7 && value != num) {
    document.getElementById("outputText").innerHTML = "Too many guesses. You lose, " + name + "! I'm thinking of a new number now.";
    num = parseInt(Math.random() * 100);
    console.log(num);

  }
}
