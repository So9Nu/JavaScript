/*
create a game where you start with any random game number.
ask the user to keep guessing the game number until the user 
enters correct value.
*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const num = 20;

function askGuess() {
  rl.question("Guess the number: ", (input) => {
    let guess = parseInt(input);

    if (guess === num) {
      console.log("Congratulations, you entered the right number!");
      rl.close();
    } else {
      console.log("You entered the wrong number. Guess again!");
      askGuess();
    }
  });
}

askGuess();