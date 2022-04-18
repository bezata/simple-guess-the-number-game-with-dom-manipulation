'use strict';
// Define random number//
let sayı = Math.trunc(Math.random() * 20) + 1;
//skor
let skor = 5;
//highscore//
let yuksekSkor = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (skor) {
  displayScore(skor);
};
// again button
document.querySelector('.again').addEventListener('click', function () {
  skor = 5;
  sayı = Math.trunc(Math.random() * 20) + 1;
  displayScore(skor);
  displayMessage('Guess the number...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
//check the number with dom manipulation
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // Check guess is number
  if (!guess) {
    displayMessage("İt's not a number🚫🚫");
    //if you win
  } else if (guess === sayı) {
    displayMessage('❤ Correct number!!');
    skor++;
    displayScore(skor);
    document.querySelector('.number').textContent = sayı;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // if guess higher
  } else if (guess > sayı) {
    if (skor > 0) {
      displayMessage('❤ Higher than number');
      skor--;
      displayScore(skor);
    } else {
      displayMessage('💣You lost the game!');
      document.querySelector('body').style.backgroundColor = '#DC143C';
    }
    //if guess lower
  } else if (guess < sayı) {
    if (skor > 0) {
      displayMessage('❤ Lower than number');
      skor--;
      displayScore(skor);
    } // you lost bro
    else {
      displayMessage('💣You lost the game!');
      document.querySelector('body').style.backgroundColor = '#DC143C';
    }
  }
  // setting highscore
  if (skor > yuksekSkor) {
    yuksekSkor = skor;
    document.querySelector('.highscore').textContent = yuksekSkor;
  }
});
