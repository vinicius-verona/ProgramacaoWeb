let nmbClicks = 0;
const section = document.querySelector('section');
const counter = document.querySelector('div.counter');
const wire = document.querySelector('div.wire');
const span = document.querySelector('span');
const light = document.querySelector('img');

const btnOnClick = () => {
  nmbClicks++;

  if (nmbClicks % 2 === 0) {
    light.src = './img/light-off.svg';
    counter.classList.remove('light');
    counter.classList.add('dark');

    wire.classList.remove('dark');
    wire.classList.add('light');

    section.classList.remove('light');
    section.classList.add('dark');
    light.classList.remove("glow");
  } else {
    light.src = './img/light-on.svg';
    light.classList.add("glow");

    counter.classList.remove('dark');
    counter.classList.add('light');

    wire.classList.remove('light');
    wire.classList.add('dark');

    section.classList.remove('dark');
    section.classList.add('light');
  }

  span.textContent = nmbClicks;
}


light.addEventListener('click', btnOnClick);