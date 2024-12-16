# Project related to DOM
# All Project Code
## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-xxjh4znd?file=4-GuessTheNumber%2Fchaiaurcode.js,index.html)

# Solution Code

## project 1 color_changer

```javascript
    const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function (event) {
        //console.log(event);
        console.log(event.target);
        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'white') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'purple') {
            body.style.backgroundColor = event.target.id
        }
    })
})
```

# Solution Code 
## project 2 BMI Calculator
```javascript
    const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function (event) {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 ||  isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 ||  isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
      const bmi = (weight / ((height*height)/10000)).toFixed(2)
      // show the result 
      results.innerHTML = `<span>${bmi}</span>`
    }
})
```

# Solution Code
## project 3 Digital Clock

```javascript
    const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date(); // Update the date object inside the function
  clock.innerHTML = date.toLocaleTimeString(); // Set the current time
}, 1000);
```

# Solution Code
## project 4 Guess The Number Game

```javascript
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
```