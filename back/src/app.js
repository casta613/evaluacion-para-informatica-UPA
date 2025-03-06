const express = require('express')
const cors = require('cors')
const usuario = require('./modulos/usuario/rutas')

const app = express()

const puerto = 3000;

app.use(cors())
app.use(express.json())
app.use('/',usuario)

app.listen(puerto,()=>{
    console.log('api conectada al puerto',puerto)
})

module.exports = app