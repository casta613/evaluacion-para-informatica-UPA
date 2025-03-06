
import react, { useState } from "react"
import { reporte } from "../api/Fetch"

function Reporte(){

    const [data,setData] = useState([])

    async function  handle(e){
        const {name,value}=e.target
        
        if(value){
        const res= await reporte('http://localhost:3000/ejecutar_reporte/'+value)
                console.log(res)
                if(res.mensaje){
                    alert(res.mensaje)
                    
                }else{
                    setData(res)
                }
        }
    }

    function formatoFecha(fecha){

        const fechaSinHora = fecha.split('T')
        const [año, mes, dia] = fechaSinHora[0].split('-');
            
        return  `${dia}-${mes}-${año}`;
    }

    return (
    
    
    <div className='tabla'>
        <select  onChange={handle} >
        <option value="">Seleccione una opción</option>
        <option value="1">Todos los usuarios</option>
        <option value="2">Usuario creados hoy</option>
        <option value="3">Usuario creados ayer</option>
        <option value="4">Prueba</option>
      </select>

      <table border="1"  >
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {data.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.nombre}</td>
            <td>{formatoFecha(usuario.fecha)}</td>
            <td>{usuario.telefono}</td>
            <td>{usuario.correo}</td>
            <td>{usuario.titulo}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
    )

}

export default Reporte