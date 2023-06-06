const formRegister = document.getElementById("formRegister");
formRegister.addEventListener('submit', async e => {

  e.preventDefault()

  const datos = {
    name: formRegister[0].value,
    email: formRegister[1].value,
    password: formRegister[2].value,
  }
  console.log("DATOS");
  console.log(datos);

  const respuesta = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  const content = await respuesta.json();

  console.log(content);

  const { access_token } = content;

  if (access_token) {
    localStorage.setItem("access_token", access_token);
    location.href = '/'
  } else {
    location.href = '/register.html'
  }
})