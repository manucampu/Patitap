'use strict'

var Perdido = require('../models/perdidos');

// consulta por todos los Perdidos en la base de datos
function getPerdidos(req, res){

    Perdido.find({ estado:true }).exec((err, perdido) => {
    if(err){
        res.status(500).send({
            menssage: 'Error en el servidor'
        });
    }else{
        if(perdido){
            res.status(200).send({
                perdido
            });
        }else{
            res.status(404).send({
                menssage: 'No hay animales Perdidos'
            });
        }
    }
});
}

function getUltiPerdidos(req, res){

  Perdido.find({ estado:true }).sort({_id:-1}).limit(3).exec((err, perdido) => {
  if(err){
      res.status(500).send({
          menssage: 'Error en el servidor'
      });
  }else{
      if(perdido){
          res.status(200).send({
              perdido
          });
      }else{
          res.status(404).send({
              menssage: 'No hay animales Perdidos'
          });
      }
  }
});
}

function getEncontrados(req, res){
Perdido.find({ estado:false }).exec((err, perdido) => {
  if(err){
      res.status(500).send({
          menssage: 'Error en el servidor'
      });
  }else{
      if(perdido){
          res.status(200).send({
              perdido
          });
      }else{
          res.status(404).send({
              menssage: 'No hay animales Perdidos'
          });
      }
  }
});
}

//metodo para guardar
function savePerdidos(req, res){

    var losts = new Perdido();
    var params = req.body;

    losts.nombre = params.nombre;
    losts.tipo = params.tipo;
    losts.raza = params.raza;
    losts.lugar = params.lugar;
    losts.sexo = params.sexo;
    losts.estado = true;
  
    losts.save((err, perdidosStored) => {
        if(err){
          res.status(500).send({
            menssage : 'Error en el servidor'
          });
        }else{
          if(perdidosStored){
            res.status(200).send({
              losts : perdidosStored
            });
          }else{
            res.status(200).send({
              menssage : 'No se ha guardado'
            });
  
          }
        }
      });
   
  }
  
  // ACTUALIZAR ESTADO
  function actualizarEstado(req, res){
  
    var perdidoId = req.params.id;
    var update = req.body;
  
    Perdido.findByIdAndUpdate(perdidoId, update, {new:true}, (err, perdidoUpdated) =>{
      if(err){
        res.status(500).send({
          menssage : 'Error en el servidor'
        });
      }else{
        if(perdidoUpdated){
          res.status(200).send({
            usuario : perdidoUpdated
          });
        }else{
          res.status(200).send({
            menssage : 'No se encuentra'
          });
  
        }
      }
  
    });
  
  }
  
  // Metodo eliminar perdido
  function deletePerdido(req, res){
  
    var perdidoId = req.params.id;
    console.log('perdido', perdidoId);
  
    Perdido.findByIdAndRemove(perdidoId, (err, perdidoRemoved) =>{
      if(err){
        res.status(500).send({
          menssage : 'Error en el servidor'
        });
      }else{
        if(perdidoRemoved){
          res.status(200).send({
            usuario : perdidoRemoved
          });
        }else{
          res.status(200).send({
            menssage : 'No se encuentra'
          });
        }
      }
    });
  
  }
    module.exports = {
      getPerdidos,
      getEncontrados,
      savePerdidos,
      actualizarEstado,
      deletePerdido,
      getUltiPerdidos
    };
    