const mysql = require('mysql2')

const parametroConexion = {
    host:"localhost",
    user:"root",
    password:"root",
    database:"evaluacion_eduardo_castaneda"
}

const conexion = mysql.createConnection(parametroConexion)

conexion.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('db conectada')
    }
})

conexion.on('error',(err)=>{
    if(err){
        console.log(err)
    }
})

const guardar = (reques)=>{
    return new Promise((resolve,reject)=>{
        conexion.query("insert into usuario set ?",reques,(err,result)=>{
            if(err){
                return reject(err)
            }else{
                console.log(result)

                return resolve(result)
            }
        })
    })
}
const reporteUsuario =()=>{
    console.log('aaaaaa')

    return new Promise((resolve,reject)=>{
        conexion.query("select * from usuario u inner join estadousuario e on e.id = u.EstadoUsuarioId",(err,result)=>{
            if(err){
                return reject(err)
            }else{
                console.log(result)
                return resolve(result)
            }
        })
    })
}
const reporteUsuarioCreadoAyer =()=>{

    return new Promise((resolve,reject)=>{
        conexion.query("select * from usuario u inner join estadousuario e on e.id = u.EstadoUsuarioId where creacion = CURDATE() - interval 1 day",(err,result)=>{
            if(err){
                return reject(err)
            }else{
                console.log(result)
                return resolve(result)
            }
        })
    })
}
const reporteUsuarioCreadoHoy =()=>{

    return new Promise((resolve,reject)=>{
        conexion.query("select * from usuario u inner join estadousuario e on e.id = u.EstadoUsuarioId where creacion = CURDATE()",(err,result)=>{
            if(err){
                return reject(err)
            }else{
                console.log(result)
                return resolve(result)
            }
        })
    })
}

module.exports={guardar,reporteUsuario,reporteUsuarioCreadoAyer,reporteUsuarioCreadoHoy}