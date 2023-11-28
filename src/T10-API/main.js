// https://random-data-api.com/documentation
// example of use https://random-data-api.com/api/v2/users?size=2&is_xml=true

const TYPES = [
  { title: 'Users', path: 'users', icon: 'users' },
  { title: 'Addresses', path: 'addresses', icon: 'address' },
  { title: 'Banks', path: 'banks', icon: 'bank' },
  { title: 'Credit Cards', path: 'credit_cards', icon: 'credit-card' },
];

let TYPE = '';


document.getElementById('submit-button').addEventListener('click', () => {
  let size = document.getElementById('request-size').value;

  console.log(TYPE + " - " + size);

  if (!size) submit(TYPE, 1);
  else submit(TYPE, size);

});



function submit(type, size) {
  fetch(`https://random-data-api.com/api/v2/${type}?size=${size}`)
    .then((response) => response.json(), (error) => console.log('error on first promise: ' + error))
    .then((data) => displayResponse(JSON.stringify(data, null, 2)),
      (error) => { console.log('error on second promise: ' + error) });
}

function changeIcon(event) {
  let nodes = event?.currentTarget?.children;
  let isSelected = event?.currentTarget?.classList.value.includes('selectedChoice');

  if (nodes.length && !isSelected)
    nodes[0].src.includes('-dark') ?
      nodes[0].src = nodes[0].src.replace('-dark', '') :
      nodes[0].src = nodes[0].src.replace('.svg', '-dark.svg');
}

function displaySize(event) {

  // get all div and img with attribute id that starts with choice or icon
  let choices = document.querySelectorAll('div[id^=choice]');
  let icons = document.querySelectorAll('img[id^=icon]');
  let nodes = event?.currentTarget?.children;

  if (!event || !event.currentTarget) return null;

  // Clear selected style from all choices
  choices.forEach((choice, idx) => {
    choice.classList.remove('selectedChoice');
    icons[idx].src = icons[idx].src.replace(/(-dark)*(\.svg)+/, '.svg')
  });

  if (!event.currentTarget.classList.value.includes('selectedChoice'))
    event.currentTarget.classList.add('selectedChoice');

  if (nodes.length)
    nodes[0].src = nodes[0].src.replace(/(-dark)*(\.svg)+/, '-dark.svg');


  // Display input for size of request
  let input = document.getElementById('request-size-area');
  input.classList.remove('hidden');

  let idx = parseInt(event.currentTarget.id.replace(/(choice-)*(\d+)(.*)/, '$2'));
  TYPE = TYPES[idx].path;
}

function displayResponse(response) {
  document.getElementById('responseArea').textContent = response;
}

function ChoiceComponent(type, idx) {
  let choice = document.createElement('div');
  let icon = document.createElement('img');
  let label = document.createElement('span');
  label.textContent = type.title;
  icon.src = `./assets/${type.icon}.svg`;


  choice.appendChild(icon);
  choice.appendChild(label);
  choice.classList.add('choice');

  icon.setAttribute("id", 'icon-' + idx);
  choice.setAttribute("id", 'choice-' + idx);

  choice.addEventListener('mouseenter', changeIcon);
  choice.addEventListener('mouseleave', changeIcon);
  choice.addEventListener('click', displaySize);

  return choice;
}

TYPES.forEach((type, idx) => {
  document.querySelector('.choices').appendChild(ChoiceComponent(type, idx));
});