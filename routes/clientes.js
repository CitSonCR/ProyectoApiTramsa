const express = require('express');
const router = express.Router();
const Cliente = require('../modules/Cliente');

//get all the eventos
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (err) {
        res.json({ message: err });
    }
});


//submit a evento
router.post('/', async (req, res) => {
    const cliente = new Cliente({
        codigoCliente: req.body.codigoCliente,
        fechaIngreso: req.body.fechaIngreso,
        cedulaIdentidad: req.body.cedulaIdentidad,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        nombre: req.body.nombre,
        estado: req.body.estado,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion,
    });
    try {
        const savedCliente = await cliente.save();
        res.json(savedCliente);
    } catch (err) {
        res.json({ message: err });
    }

});
//getById
router.get('/:ClienteId', async (req, res) => {
    try {
        const clientes = await Cliente.findById(req.params.ClienteId)
        res.json(clientes);
    } catch (err) {
        res.json({ message: err });
    }
});
//delete
router.delete('/:ClienteId', async (req, res) => {
    try {
        const removedCliente = await Cliente.remove({ _id: req.params.eventoId })
        res.json(removedCliente);
    } catch (err) {
        res.json({ message: err });
    }
});
//patch
router.patch('/:ClienteId', async (req, res) => {
    try {
        const updatedCliente = await Cliente.updateOne(
            { _id: req.params.ClienteId },
            { $set: { codigoCliente: req.body.codigoCliente, fechaIngreso: req.body.fechaIngreso, cedulaIdentidad: req.body.cedulaIdentidad, primerApellido: req.body.primerApellido, segundoApellido: req.body.segundoApellido, nombre: req.body.nombre, estado: req.body.estado, telefono: req.body.telefono, correo: req.body.correo, direccion: req.body.direccion } }
        );
        res.json(updatedCliente);
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
});

module.exports = router;
