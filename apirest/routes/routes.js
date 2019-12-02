'use strict'

var express = require('express');
var UsuariosController = require('../controllers/usuarios');
var PerdidosController = require('../controllers/perdidos');
var api = express.Router();

// usuarios
api.get('/pruebas', UsuariosController.pruebas);
api.get('/usuario', UsuariosController.getUsuarios);
api.post('/users', UsuariosController.saveUsuarios); // guardar usuarios
api.put('/usuario/:id', UsuariosController.updateUsuario); //actualizar usuario
api.delete('/usuario/:id', UsuariosController.deleteUsuario); // eliminar usuario
api.post('/usuarioIngreso', UsuariosController.getIngreso); // para ingreso con email y password

//Perdidos
api.get('/perdidos', PerdidosController.getPerdidos);
api.get('/encontrados', PerdidosController.getEncontrados);
api.post('/perdido', PerdidosController.savePerdidos); // guardar perdido
api.put('/perdido/:id', PerdidosController.actualizarEstado); //actualizar perdido
api.delete('/perdido/:id', PerdidosController.deletePerdido); // eliminar perdido
api.get('/ultimos', PerdidosController.getUltiPerdidos); //ultimos perdidos
module.exports = api;