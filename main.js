var $raceCar = document.querySelector('.race-car');
var carLeft = 0;
var carTop = 0;
function changeDirection(event) {

  if (event.key === 'ArrowUp') {
    $raceCar.className = 'race-car up';
  } else if (event.key === 'ArrowDown') {
    $raceCar.className = 'race-car down';
  } else if (event.key === 'ArrowLeft') {
    $raceCar.className = 'race-car left';
  } else if (event.key === 'ArrowRight') {
    $raceCar.className = 'race-car right';
  }
  if (event.keyCode === 32) {
    setInterval(goButton, 16);
  }
}

function goButton(event) {
  // if (event.keyCode === 32) {
  if ($raceCar.className === 'race-car right') {
    carLeft += 5;
    $raceCar.style.left = carLeft + 'px';
    if (carLeft >= 900) {
      carLeft -= 5;
    }
  } else if ($raceCar.className === 'race-car left') {
    carLeft -= 5;
    $raceCar.style.left = carLeft + 'px';
    if (carLeft <= 0) {
      carLeft += 5;
    }
  } else if ($raceCar.className === 'race-car down') {
    carTop += 5;
    $raceCar.style.top = carTop + 'px';
    if (carTop >= 640) {
      carTop -= 5;
    }
  } else if ($raceCar.className === 'race-car up') {
    carTop -= 5;
    $raceCar.style.top = carTop + 'px';
    if (carTop <= 0) {
      carTop += 5;
    }
  }
  // }
}
// var raceTimer = setInterval(goButton, 16);
window.addEventListener('keydown', changeDirection);
window.addEventListener('keydown', goButton);
