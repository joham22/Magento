// contacto.js: Maneja el formulario de contacto

document.addEventListener('DOMContentLoaded', () => {
    // Manejar el envío del formulario de contacto
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            try {
                const response = await fetch('http://localhost:3000/contacto', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nombre, email, mensaje })
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
