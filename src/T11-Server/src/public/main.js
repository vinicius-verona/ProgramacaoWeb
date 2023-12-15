let lowercase = document.querySelector("#LowerCase")
let uppercase = document.querySelector("#UpperCase")
let input = document.querySelector("#Input")


async function transformtext(text, isuppercase) {

  let response = await fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: text, isuppercase: isuppercase })
  });

  if (response.status == 200) {
    response = await response.json();
    let responseArea = document.querySelector('.response');
    responseArea.innerHTML = '';
    let alteredText = document.createElement('p');
    alteredText.textContent = response.text;
    alteredText.classList.add('responseText');
    responseArea.appendChild(alteredText);
  }

}


lowercase.addEventListener('click', () => {
  transformtext(input.value, false)
})

uppercase.addEventListener('click', () => {
  transformtext(input.value, true)
})