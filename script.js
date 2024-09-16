'use strict';

// Generates a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Alterado para 'let'
let score = 20;
let highscore = 0;

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Checks if no number was entered
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!'; // Displays a warning for no input

    // Checks if the player guessed the correct number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!'; // Displays a success message
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // If the guess is higher than the secret number
  } else if (guess > secretNumber) {
    // If the score is still greater than 1, decrease the score and continue the game
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!'; // Hint: the guess is too high
      score--; // Decrease the score by 1
      document.querySelector('.score').textContent = score; // Update the score display

      // If the score reaches 0, the player loses the game
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!'; // Display the losing message
      document.querySelector('.score').textContent = 0; // Set the score to 0, preventing negative values
    }

    // If the guess is lower than the secret number
  } else if (guess < secretNumber) {
    // If the score is still greater than 1, decrease the score and continue the game
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!'; // Hint: the guess is too low
      score--; // Decrease the score by 1
      document.querySelector('.score').textContent = score; // Update the score display

      // If the score reaches 0, the player loses the game
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!'; // Display the losing message
      document.querySelector('.score').textContent = 0; // Set the score to 0, preventing negative values
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20; // Corrigir para resetar o score adequadamente.
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Agora funciona porque usamos 'let'

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
