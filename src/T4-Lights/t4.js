let nmbClicks = 0;
const section = document.querySelector('section');
const counter = document.querySelector('div.counter');
const wire = document.querySelector('div.wire');
const base = document.querySelector('div.base');
const span = document.querySelector('span');
const light_off = document.querySelector('img#off');
const light_on = document.querySelector('img#on');

const btnOnClick = (event) => {
  event.currentTarget.removeEventListener('click', btnOnClick);
  nmbClicks++;

  const lights = [light_off, light_on];
  lights[nmbClicks % 2].addEventListener('click', btnOnClick);

  if (nmbClicks % 2 === 0) {
    light_off.classList.remove('hidden');
    light_on.classList.add('hidden');
    light_on.classList.remove("glow");

    counter.classList.remove('light');
    counter.classList.add('dark');

    wire.classList.remove('dark');
    wire.classList.add('light');

    base.classList.remove('dark');
    base.classList.add('light');

    section.classList.remove('light');
    section.classList.add('dark');
  } else {
    light_off.classList.add('hidden');
    light_on.classList.remove('hidden');
    light_on.classList.add("glow");

    counter.classList.remove('dark');
    counter.classList.add('light');

    wire.classList.remove('light');
    wire.classList.add('dark');

    base.classList.remove('light');
    base.classList.add('dark');

    section.classList.remove('dark');
    section.classList.add('light');
  }

  span.textContent = nmbClicks;
}


light_off.addEventListener('click', btnOnClick);