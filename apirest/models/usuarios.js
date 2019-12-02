'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UsuariosSchema = Schema({
    nombre: String,
    login: String,
    password: String,
    email: String,
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);