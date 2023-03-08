//Archivo para realizar la conexion
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

//Creamos constante para almacenar la conexion
const objetobd = mongoose.connection

//Objeto con que va a recibir el parametro "connected" para saber sis e conecto correctamente
//Despues de la , colocamos una funcion callback que nos va a regresar un mensaje para ver si se conectó
objetobd.on('connected', ()=>{console.log('Conexion correcta a MongoDB')})

//Funcion para por si hay algun error en la conexion
objetobd.on('error', ()=>{console.log('Error en la conexión a MongoDB')})

module.exports = mongoose //Exportamos la conexion para despues utilizarla
