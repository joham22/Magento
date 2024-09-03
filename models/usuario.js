const mongoose = require('mongoose');

// Definir el esquema del usuario
const usuarioSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String
});

// Crear y exportar el modelo
module.exports = mongoose.model('Usuario', usuarioSchema);
