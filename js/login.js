// login.js: Maneja el formulario de login

document.addEventListener('DOMContentLoaded', () => {
  // Manejar el envío del formulario de login
  const form = document.querySelector('form');
  if (form) {
      form.addEventListener('submit', async (event) => {
          event.preventDefault();
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          try {
              const response = await fetch('http://localhost:3000/login', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ email, password })
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
