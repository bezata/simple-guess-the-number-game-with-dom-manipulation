'use strict';
// Define random number//
let sayı = Math.trunc(Math.random() * 20) + 1;
//score
let skor = 5;
//highscore//
let yuksekSkor = 0;
// again button
document.querySelector('.again').addEventListener('click', function () {
  skor = 5;
  sayı = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = skor;
  document.querySelector('.message').textContent = 'Guess the numberr...';
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
    console.log('İts not a number🚫🚫');
    //if you win
  } else if (guess === sayı) {
    document.querySelector('.message').textContent = '❤ Correct number!!';
    skor++;
    document.querySelector('.score').textContent = skor;
    document.querySelector('.number').textContent = sayı;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // if guess higher
  } else if (guess > sayı) {
    if (skor > 0) {
      document.querySelector('.message').textContent = '❤ Higher than number';
      skor--;
      document.querySelector('.score').textContent = skor;
    } else {
      document.querySelector('.message').textContent = '💣You lost the game!';
      document.querySelector('body').style.backgroundColor = '#DC143C';
    }
    //if guess lower
  } else if (guess < sayı) {
    if (skor > 0) {
      document.querySelector('.message').textContent = '❤ Lower than number';
      skor--;
      document.querySelector('.score').textContent = skor;
    } // you lost bro
    else {
      document.querySelector('.message').textContent = '💣You lost the game!';
      document.querySelector('body').style.backgroundColor = '#DC143C';
    }
  }
  // setting highscore
  if (skor > yuksekSkor) {
    yuksekSkor = skor;
    document.querySelector('.highscore').textContent = yuksekSkor;
  }
});
