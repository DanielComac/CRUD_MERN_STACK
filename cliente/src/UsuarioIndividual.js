import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

//recibir el objeto usuario que creamos en el archivo ListaUsuarios
function UsuarioIndividual({usuario}){

    const navegar = useNavigate()
    //funcion para borrar usuario
    function borrarusuario(idusuario) {
        axios.post('/api/usuario/borrarusuario', {idusuario: idusuario}).then(res => {
            console.log(res.data)
            alert(res.data)
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        //Crear lista de los registros
        <div className='container'>
            <div className='row'>

                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario.idusuario}</li>
                        <li className='list-group-item'>{usuario.nombre}</li>
                        <li className='list-group-item'>{usuario.email}</li>
                        <li className='list-group-item'>{usuario.telefono}</li>
                    </ul>

                    {/* boton en etiquta de link para enviarnos a la ruta de editar */}
                    {/* "${usuario.idusuario}" parametro que vamos a mandar para poder editar */}
                    <Link to={`/editarusuario/${usuario.idusuario}`}><li className='btn btn-success'>Editar</li></Link>
                    &nbsp; 
                    <button className='btn btn-danger' onClick={()=>{borrarusuario(usuario.idusuario)}}>Borrar</button>
                    <hr className='mt-4'></hr>
                </div>
                
            </div>
        </div>
    )
}

export default UsuarioIndividual;