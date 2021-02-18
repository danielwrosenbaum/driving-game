var $raceCar = document.querySelector('.race-car');

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
}

window.addEventListener('keydown', changeDirection);
