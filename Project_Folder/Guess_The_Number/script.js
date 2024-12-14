let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`please entered a valid number`);
  } else if (guess < 1) {
    alert('please entered a number more than one');
  } else if (guess > 100) {
    alert('please entered a number less than hundred');
  } else {
    prevguess.push(guess);
    if (numguess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guess the right number`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`The number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`The number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} ||  `;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(endgame) {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playgame = false;
  newGame();
}

function newGame(newgame) {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (event) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playgame = true;
  });
}
