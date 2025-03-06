const express = require('express')
const router = express.Router()
const controlador = require('./controlador')

router.post('/guardar_usuario',controlador.guardar)
router.get('/ejecutar_reporte/:reporte',controlador.reportes)

module.exports = router