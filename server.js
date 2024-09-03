// Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear una aplicación Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/mi_tienda')
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.log('Error de conexión a MongoDB:', err));

// Modelos
const Usuario = require('./models/usuario');
const Contacto = require('./models/contacto');

// Rutas
app.post('/register', async (req, res) => {
    const { nombre, email, password } = req.body;
    try {
        const usuario = new Usuario({ nombre, email, password });
        await usuario.save();
        res.status(201).send('Usuario registrado');
    } catch (err) {
        res.status(400).send('Error al registrar usuario');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ email, password });
        if (usuario) {
            res.status(200).send('Usuario autenticado');
        } else {
            res.status(401).send('Credenciales incorrectas');
        }
    } catch (err) {
        res.status(400).send('Error al autenticar usuario');
    }
});

app.post('/contacto', async (req, res) => {
    const { nombre, email, mensaje } = req.body;
    try {
        const contacto = new Contacto({ nombre, email, mensaje });
        await contacto.save();
        res.status(201).send('Mensaje enviado');
    } catch (err) {
        res.status(400).send('Error al enviar mensaje');
    }
});

// Servir archivos estáticos
app.use(express.static('views'));

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
