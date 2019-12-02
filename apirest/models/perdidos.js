'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PerdidosSchema = Schema({
    nombre: String,
    tipo: String,
    raza: String,
    lugar: String,
    sexo: String,
    estado: Boolean
});

module.exports = mongoose.model('Perdidos', PerdidosSchema);