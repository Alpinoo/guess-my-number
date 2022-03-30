/*
Guess my Number

# Game logic

- IF SCORE <0
    - message → You lost
- IF SCORE >0
    - If guess < number → “too low”,
        - decrease score,
        - background red
    - If guess > number → “too high”,
        - decrease score
        - background red
    - If equal → “you win”,
        - dont decrease score,
        - save it to highscore,
        - background green,
        - width to 30rem,
        - show number
    - If !guess → not a number, background red
    - If number >20 or number < 1
        - message → enter between 1 and  20
- Pressed again button
    - width to 15 rem
    - display question mark
    - background gray
*/
let score = 20;
let highscore = 0;
let secretNumber = Number(Math.trunc(Math.random() * 20));

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (score < 1) {
    document.querySelector('.score').textContent = 0;
    displayMessage('😖 You lost 😖');
  } else if (score > 0) {
    if (guess > secretNumber) {
      displayMessage('📈 Too high! 📈');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      displayMessage('📉 Too low! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (guess === secretNumber) {
      displayMessage('🎊 You win 🎊');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;

        document.querySelector('.highscore').textContent = highscore;
      }
      score = 1;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Number(Math.trunc(Math.random() * 20));
  score = 20;
  document.querySelector('.score').textContent = score;
});
