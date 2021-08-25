'use strict';
//Creating a random number
let score = 20;
let secretNumber = Math.trunc(Math.random() * score + 1);
let highScore = 0;
// document.querySelector('.number').textContent=secretNumber;

//Display Message
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  //If user does not input any value
  if (!guessedNumber) {
    displayMessage('No number found!👀');
  }
  //If user guesses correctly
  else if (guessedNumber === secretNumber) {
    displayMessage('You win!🎉✨');
    document.querySelector('.number').textContent = 'Hallelujah!🌹';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').style.fontSize = 'xx-large';
    //for HighScore
    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guessedNumber < 0) {
    displayMessage('Guess Positive Number bruh -_-');
  }
  //If user guesses wrong number
  else if (guessedNumber !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(
        guessedNumber > secretNumber
          ? 'Number too high!🤔'
          : 'Number too low!😓'
      );
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('You lost the game!🥺');
      document.querySelector('.number').textContent = 'Loser!💀';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '25rem';
      document.querySelector('.number').style.fontSize = 'xx-large';
    }
  }

  // //If guessed number is higher than correct number
  // else if(guessedNumber>secretNumber){
  //     if(score>1){
  //         score--;
  //         document.querySelector('.score').textContent =score;
  //         document.querySelector('.message').textContent = 'Number too high!🚩';
  //     }
  //     else{
  //         document.querySelector('.score').textContent = 0;
  //         document.querySelector('.message').textContent = 'You lost the game!🚩';
  //         document.querySelector('.number').textContent = 'Loser!🤑';
  //         document.querySelector('body').style.backgroundColor='red';
  //         document.querySelector('.number').style.width='25rem';
  //         document.querySelector('.number').style.fontSize='xx-large';
  //     }
  // }
  // //If guessed number is lower than correct number
  // else if(guessedNumber<secretNumber){
  //     if(score>1){
  //         score--;
  //         document.querySelector('.score').textContent =score;
  //         document.querySelector('.message').textContent = 'Number too low!🚩';
  //     }
  //     else{
  //         document.querySelector('.score').textContent = 0;
  //         document.querySelector('.message').textContent = 'You lost the game!🚩';
  //         document.querySelector('.number').textContent = 'Loser!🤑';
  //         document.querySelector('body').style.backgroundColor='red';
  //         document.querySelector('.number').style.width='25rem';
  //         document.querySelector('.number').style.fontSize='xx-large';
  //     }
  // }
  //if user enters negative number
});

//Again Button
document.querySelector('.again').addEventListener('click', function () {
  //restoring values
  score = 20;
  secretNumber = Math.trunc(Math.random() * score + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //restoring css styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
