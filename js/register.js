// register.js: Maneja el formulario de registro

document.addEventListener('DOMContentLoaded', () => {
  // Manejar el envío del formulario de registro
  const form = document.querySelector('form');
  if (form) {
      form.addEventListener('submit', async (event) => {
          event.preventDefault();
          const nombre = document.getElementById('nombre').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          try {
              const response = await fetch('http://localhost:3000/register', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ nombre, email, password })
              });
              const result = await response.text();
              alert(result);
          } catch (error) {
              console.error('Error:', error);
              alert('Error al enviar la solicitud');
          }
      });
  }
});
