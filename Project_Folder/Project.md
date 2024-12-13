# Project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-beggne?file=2-BMICalculator%2Fchaiaurcode.js)

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
