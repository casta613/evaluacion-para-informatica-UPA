const bd = require('../../bd/mysql')

const guardar = (req, res) => {
    console.log(req.body)
    try {

        if (!/^([a-zA-Z]+)$/.test(req.body.nombre)) {
            return res.status(400).send({ mensaje: "Parametro nombre solo acepta letras" })
        }
        if (!/^([0-9]+)$/.test(req.body.telefono)) {
            return res.status(400).send({ mensaje: "Parametro telefono solo acepta numero" })
        }
        if (!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(req.body.fechaNacimiento)) {
            return res.status(400).send({ mensaje: "El formato de parametro fechaNacimiento debe ser dd-mm-yyyy" })
        }
        if (!/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/.test(req.body.correo)) {
            return res.status(400).send({ mensaje: "Parametro correo no contiene un correo valido" })
        } if (req.body.edad < 18) {
            return res.status(400).send({ mensaje: "El usuario no es mayor de edad" })
        }

        const fechaTexto = req.body.fechaNacimiento;
        const [dia, mes, año] = fechaTexto.split('-');
        const fecha = new Date(`${año}-${mes}-${dia}`);
        const usuario = {

            nombre: req.body.nombre,
            telefono: req.body.telefono,
            correo: req.body.correo,
            fecha: fecha,
            EstadoUsuarioId: 1,
            creacion: new Date()

        }


        const response = bd.guardar(usuario).then((items) => {
            res.status(200).json({usuarioId:items.insertId})
        }).catch((err) => {
            res.status(500).send(err)
        })

    } catch (err) {
        return res.status(500).send(err)
    }
}

const reportes = (req, res) => {
    console.log(req.params.reporte)
    const { reporte } = req.params;
    try {

        if (!reporte) {
            return res.status(400).send({ mensaje: "Parametro reporte es requerido" })
        }

        if (reporte == 1) {
            const response = bd.reporteUsuario().then((items) => {
                res.status(200).json(items)
            }).catch((err) => {
                res.status(500).send(err)
            })
        }
        else if (reporte == 3) {
            const response = bd.reporteUsuarioCreadoAyer().then((items) => {
                res.status(200).json(items)
            }).catch((err) => {
                res.status(500).send(err)
            })
        }
        else if (reporte == 2) {
            const response = bd.reporteUsuarioCreadoHoy().then((items) => {
                res.status(200).json(items)
            }).catch((err) => {
                res.status(500).send(err)
            })
        } else {
            res.status(200).send({
                mensaje: 'reporte no encontrado'
            })
        }



    } catch (err) {
        return res.status(500).send(err)
    }
}

module.exports = { guardar, reportes }