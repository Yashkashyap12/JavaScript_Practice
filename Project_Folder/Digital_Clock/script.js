const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date(); // Update the date object inside the function
  clock.innerHTML = date.toLocaleTimeString(); // Set the current time
}, 1000);
