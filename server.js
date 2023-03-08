// Importamos el modulo de express y creamos una app
const express = require('express')
const app = express()

//importar conexion mongoDB
const archivoBD = require('./conexion') //ubicacion de la conexion

//importacion del archivo usuario.js de la carpeta rutas
const rutausuario = require('./rutas/usuario')

//importacion de body-parser para poder obtener la informacion de los campos del formulario (configuracion del body-parser)
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

//Funcion para comprobar que el servidor funciona correctamente
app.get('/', (req, res) => {
    res.send('Bienvenido')
})

//Configurar server basico
//comando "nodemon server.js" para activar el servidor en el puerto indicado
app.listen(5000, function(){ //5000 (puerto)
    console.log('El servidor está corriendo correctamente')
})