const mongoose = require('mongoose');

// Definir el esquema del contacto
const contactoSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    mensaje: String
});

// Crear y exportar el modelo
module.exports = mongoose.model('Contacto', contactoSchema);
