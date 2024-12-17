// Generate a Random Background Color Changer

const randomColor = function () {
    const hex = '0123456789ABCDEF'; // these are the hex value
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeColor, 1000);
    }
    function changeColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  