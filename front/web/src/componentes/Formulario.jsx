import { useEffect,useState } from 'react'
import {Guardar} from '../api/Fetch'
import { useNavigate } from 'react-router-dom'

function Formulario(){

    const navigate = useNavigate()

    const [usuario,setUsuario]=useState({
        nombre:'',
        fechaNacimiento:'',
        telefono:'',
        correo:'',
        edad:''
    })

    const [edad,setEdad]=useState(0)

    function calcularEdad(value){
        const fechaActual = new Date()
        const fechaIngresada = new Date(value)
        const restaFecha = fechaActual - fechaIngresada
        const anios =Math.floor(restaFecha / (1000 * 60 * 60 * 24 * 365.25));
        return anios;
    }

    function handle(e){
        const {name,value}=e.target
        if(name === 'fechaNacimiento'){
            console.log(value)
            const edadCalculada =calcularEdad(value)
            const [año, mes, dia] = value.split('-');
            const fecha = `${dia}-${mes}-${año}`;
            console.log(fecha)

            setEdad(edadCalculada)
            setUsuario((usuario)=>({
                ...usuario,
                edad:edadCalculada,[name]:fecha
            }))

          
        }else{
            console.log(value)

        setUsuario((usuario)=>({
            ...usuario,
            [name]:value
        }))
    }
    }

    async function enviar(e){
        e.preventDefault()
        console.log(usuario)
        const res= await Guardar('http://localhost:3000/guardar_usuario/',usuario)
        console.log(res.usuarioId)
        if(res.mensaje){
            alert(res.mensaje)
        }else{
            alert('usuario creado con el id '+res.usuarioId)
            navigate('/')
        }
    }



    return(
        <>
            <form onSubmit={enviar} className='form'>
                <label htmlFor="nombre">Nombre de Usuario</label>
                <input type="text" id="nombre" name="nombre" pattern="[A-Za-z]+" title="El campo solo debe contener letras"  required onChange={handle}/>
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                <input type="date" id="fechaNacimiento" name="fechaNacimiento"  required onChange={handle}/>
                <label htmlFor="telefono">Número de Teléfono</label>
                <input type="text" id="telefono" name="telefono" pattern='[0-9]+' title="El campo solo debe contener numeros" required onChange={handle}/>
                <label htmlFor="correo">Correo Electrónico</label>
                <input type="email" id="correo" name="correo" required onChange={handle} />
                <label htmlFor="edad">Edad</label>
                <input type="number" id="edad" name="edad" disabled value={edad} />
                <input type="submit" />
            </form>

        </>
    )
}

export default Formulario