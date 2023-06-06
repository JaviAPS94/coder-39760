const formLogin = document.getElementById("formLogin");
formLogin.addEventListener('submit', async e => {

  e.preventDefault()

  const datos = {
    email: formLogin[0].value,
    password: formLogin[1].value,
  }

  const respuesta = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  if(respuesta.status === 200) {
    console.log(document.cookie);
  } else {
    location.href = '/login.html'
  }
})