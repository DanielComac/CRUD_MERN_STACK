//Crear un modelo para el usuario
const express = require('express')
const router = express.Router()

//Importamos el modulo de mongoose y creamos el esquema
const mongoose = require('mongoose')
const eschema = mongoose.Schema

//Esquema para el usuario
////Este modelo define la estructura de datos que se almacenará en la base de datos.
const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

//Modelo para el usuario
const ModeloUsuario = mongoose.model('usuario', eschemausuario)
module.exports = router

//ruta de ejemplo
/*
router.get('/ejemplo', (req, res) => {
    res.end('Saludos')
})*/

//creamos ruta que nos permite agregar el usuario. Es post pq estamos recogiendo los datos del formulario
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    //metodo de mongoose que nos permite guardar en la base de datos
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})

//obtener todos los usuaarios (para mostrarlos en tabla)
router.get('/obtenerusuarios', (req, res) =>{
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//obtener data de usuario
router.post('/obtenerdatausuario', (req, res) =>{
// buscamos un usuario con el idusuario
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//hacer peticion de tipo post para actualizar usuario
router.post('/actualizausuario', (req, res) => {
   //encontrar un registro y actualizarlo / parámetros del usuario
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) => {
        if(!err){
            res.send('Usuario actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

//hacer peticion de tipo post para borrar usuario
router.post('/borrarusuario', (req, res) => {
     ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send('Usuario borrado correctamente')
        }else{
            res.send(err)
        }
     })
 })