const images = document.querySelectorAll('img');
const element = document.createElement('h1');
element.textContent = `There are ${images.length} images on this page.`;
element.style.color = 'white';
element.style.textAlign = 'center';
element.style.backgroundColor = 'black';

document.body.insertBefore(element, document.body.firstChild);

images.forEach(image => {
  const width = image.clientWidth;
  const height = image.clientHeight;
  image.src = chrome.runtime.getURL('images/lost.gif');
  image.width = width;
  image.height = height;
});