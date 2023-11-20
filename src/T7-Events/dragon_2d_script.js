let originX = null;
let originY = null;
let offsetX = 0;
let offsetY = 0;
let dragStarted = false;

let moving_speed = 1; // Delta for key pressing
const limitToScreen = 1; // Bound the dragon image to stay within the window borders
const windowWidth = document.body.clientWidth;
const windowHeight = document.body.clientHeight;

function onDragStart(event) {
  originX = event.clientX;
  originY = event.clientY;
  dragStarted = true;
  event.currentTarget.setPointerCapture(event.pointerId);
}

function onDragMove(event) {
  if (!dragStarted) {
    return;
  }
  event.preventDefault();
  const dragonW = dragon.width;
  const dragonH = dragon.height;

  const deltaX = event.clientX - originX;
  const deltaY = event.clientY - originY;
  const translateX = offsetX + deltaX;
  const translateY = offsetY + deltaY;

  if (limitToScreen) {
    if (translateX + dragonW >= windowWidth)
      translateX = windowWidth - dragonW;
    if (translateX < 0)
      translateX = 0;

    if (translateY + dragonH >= windowHeight)
      translateY = windowHeight - dragonH;
    if (translateY < 0)
      translateY = 0;
  }


  event.currentTarget.style.transform = 'translate(' +
    translateX + 'px, ' + translateY + 'px)';
}

function onDragEnd(event) {
  dragStarted = false;
  offsetX += event.clientX - originX;
  offsetY += event.clientY - originY;
}

function onKeyDown(event) {
  const dragonW = dragon.width;
  const dragonH = dragon.height;

  if (event.key === 'ArrowRight') {
    offsetX += moving_speed;
  } else if (event.key === 'ArrowLeft') {
    offsetX -= moving_speed;
  } else if (event.key === 'ArrowUp') {
    offsetY -= moving_speed;
  } else if (event.key === 'ArrowDown') {
    offsetY += moving_speed;
  } else if (event.key === 'a') {
    moving_speed += 10;
  } else if (event.key === 's') {
    moving_speed -= 10;
  }

  if (limitToScreen) {
    if (offsetX + dragonW >= windowWidth)
      offsetX = windowWidth - dragonW;
    if (offsetX < 0)
      offsetX = 0;


    if (offsetY + dragonH >= windowHeight)
      offsetY = windowHeight - dragonH;
    if (offsetY < 0)
      offsetY = 0;
  }

  dragon.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
}

const dragon = document.querySelector('img');
dragon.addEventListener('pointerdown', onDragStart);
dragon.addEventListener('pointerup', onDragEnd);
dragon.addEventListener('pointermove', onDragMove);
document.addEventListener('keydown', onKeyDown);