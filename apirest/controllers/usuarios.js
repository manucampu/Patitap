'use strict'

var Usuario = require('../models/usuarios');

function pruebas (req, res){
    res.status(200).send({
        menssage: 'Esta es la ruta de prueba en mi api'
    });
}

// consulta por todos los usuarios en la base de datos
function getUsuarios(req, res){

    Usuario.find({}).exec((err, usuario) => {
    if(err){
        res.status(500).send({
            menssage: 'Error en el servidor'
        });
    }else{
        if(usuario){
            res.status(200).send({
                usuario
            });
        }else{
            res.status(404).send({
                menssage: 'No hay usuarios'
            });
        }
    }
});
}

//metodo para guardar
function saveUsuarios(req, res){

    var users = new Usuario();
    var params = req.body;

      users.nombre = params.nombre;
      users.login = params.login;
      users.password = params.password;
      users.email = params.email;
  
      users.save((err, usuariosStored) => {
        if(err){
          res.status(500).send({
            menssage : 'Error en el servidor'
          });
        }else{
          if(usuariosStored){
            res.status(200).send({
              users : usuariosStored
            });
          }else{
            res.status(200).send({
              menssage : 'No se ha guardado el usuario'
            });
  
          }
        }
      });
   
  }
  
  //Metodo para actualizar documento
  
  function updateUsuario(req, res){
  
    var usuarioId = req.params.id;
    var update = req.body;
  
    Usuario.findByIdAndUpdate(usuarioId, update, {new:true}, (err, usuarioUpdated) =>{
      if(err){
        res.status(500).send({
          menssage : 'Error en el servidor'
        });
      }else{
        if(usuarioUpdated){
          res.status(200).send({
            usuario : usuarioUpdated
          });
        }else{
          res.status(200).send({
            menssage : 'No hay usuario'
          });
  
        }
      }
  
    });
  
  }
  
  
  //Metodo para eliminar usuario
  
  function deleteUsuario(req, res){
  
    var usuarioId = req.params.id;
    console.log('usuario', usuarioId);
  
    Usuario.findByIdAndRemove(usuarioId, (err, usuarioRemoved) =>{
      if(err){
        res.status(500).send({
          menssage : 'Error en el servidor'
        });
      }else{
        if(usuarioRemoved){
          res.status(200).send({
            perdido : usuarioRemoved
          });
        }else{
          res.status(200).send({
            menssage : 'No hay usuario'
          });
        }
      }
    });
  
  }
    
  //Consulta por correo y contraseña
  function getIngreso(req, res){
  
    var users = new Usuario();
    var params = req.body;
  
    if(params.email && params.password){
      users.password = params.password;
      users.email = params.email;
  
        Usuario.find({'email': users.email, 'password': users.password}).exec((err, usuarioIngreso) => {
          if(err){
            res.status(500).send({
              menssage : 'Error en el servidor'
            });
          }else{
            if(usuarioIngreso){
              res.status(200).send({
                usuarioIngreso
              });
            }else{
              res.status(404).send({
                menssage : 'No hay usuarios'
              });
            }
          }
        });
  
    }else{
      res.status(200).send({
        menssage : 'El email y contraseña del usuario es obligatorio'
      });
    }
  }
  
  

    module.exports = {
      pruebas,
      getUsuarios,
      saveUsuarios,
      updateUsuario,
      deleteUsuario,
      getIngreso
    };
    