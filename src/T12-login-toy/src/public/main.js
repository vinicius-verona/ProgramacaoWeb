const login = async (event) => {
  event.preventDefault();

  const usr = document.getElementById('user').value;
  const pwd = document.getElementById('pwd').value;

  const result = await (await fetch('/api/login', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: usr, pwd: pwd })
  })).json();

  const status = result.status;

  const msg = document.querySelector('div.' + status.toLowerCase());

  msg.classList.remove('hidden');
  new Promise(() => {
    setTimeout(() => msg.classList.add('hidden'), 5000);
  });

}

const register = async (event) => {
  event.preventDefault();

  const usr = document.getElementById('user').value;
  const pwd = document.getElementById('pwd').value;

  const result = await (await fetch('/api/register', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: usr, pwd: pwd })
  })).json();

  const status = result.status;

  const msg = document.querySelector('div.' + status.toLowerCase());

  msg.classList.remove('hidden');
  new Promise(() => {
    setTimeout(() => msg.classList.add('hidden'), 5000);
  });

}

document.getElementById("bttn-Login").addEventListener("click", login, false);
document.getElementById("bttn-Cadastro").addEventListener("click", register, false);