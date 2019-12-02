'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/patitapp', {useMongoClient: true})
.then(() => {
    console.log('La conexion con Mongo se ha realizado correctamente');
    app.listen(port, ()=> {
        console.log('El servidor esta ejecutandose en el puerto: 3800');
    })
})
.catch(err => console.log(err));