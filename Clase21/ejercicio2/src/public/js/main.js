(async () => {
    try {
      const respuesta = await fetch('/api/auth/current', {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
  
      if (respuesta.status != 200) {
        return location.href = '/login.html'
      }
  
      const data = await respuesta.json();
  
      const dataToHtml = `<p>Nombre: ${data.payload.name} Correo: ${data.payload.email}</p>`
  
      document.querySelector('main').innerHTML = dataToHtml
  
    } catch (error) {
      document.querySelector('main').innerHTML = error
    }
  })()
  
  function logout() {
    localStorage.removeItem('access_token');
    location.href = '/login.html'
  }