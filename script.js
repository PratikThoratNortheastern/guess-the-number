"use strict";

// Generating random numbers between 1-20

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

// Handling Click Events.
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // No guess
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number Entered.';
    displayMessage("⛔ No Number Entered.");
    // When guess is correct
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number 🎊';
    displayMessage(alert("Correct Number 🎊"));
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high 📈' : 'Too Low 📉';
      guess > secretNumber
        ? displayMessage("Too high 📈")
        : displayMessage("Too Low 📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Loose 😞';
      displayMessage("You Loose 😞");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Reseting the game

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
