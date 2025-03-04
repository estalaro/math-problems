// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the number
console.log("Guess the number!");

// Read the user's input
const userInput = prompt("Enter your guess: ");

// Check if the user's input is equal to the random number
if (userInput === randomNumber) {
  console.log("You are correct! The number was " + randomNumber);
} else {
  console.log("Sorry, you are incorrect. The number was " + randomNumber);
}
