const express = require('express');
const router = express.Router();
const Proovedor = require('../modules/Proovedor');

//get all the eventos
router.get('/', async (req, res) => {
    try {
        const proovedores = await Proovedor.find();
        res.json(proovedores);
    } catch (err) {
        res.json({ message: err });
    }
});


//submit a evento
router.post('/', async (req, res) => {
    const proovedor = new Proovedor({
        codigoProovedor: req.body.codigoProovedor,
        cedula: req.body.cedula,
        nombreProovedor: req.body.nombreProovedor,
        telefono: req.body.telefono,
        correo: req.body.correo,
        contacto: req.body.contacto,
        telefonoContacto: req.body.telefonoContacto,
        direccion: req.body.direccion
    });
    try {
        const savedProovedor = await proovedor.save();
        res.json(savedProovedor);
    } catch (err) {
        res.json({ message: err });
    }

});
//getById
router.get('/:ProovedorId', async (req, res) => {
    try {
        const proovedores = await Proovedor.findById(req.params.ProovedorId)
        res.json(proovedores);
    } catch (err) {
        res.json({ message: err });
    }
});
//delete
router.delete('/:ProovedorId', async (req, res) => {
    try {
        const removedProovedor = await Proovedor.remove({ _id: req.params.eventoId })
        res.json(removedProovedor);
    } catch (err) {
        res.json({ message: err });
    }
});
//patch
router.patch('/:ProovedorId', async (req, res) => {
    try {
        const updatedProovedor = await Proovedor.updateOne(
            { _id: req.params.ProovedorId },
            {
                $set: {
                    codigoProovedor: req.body.codigoProovedor,
                    nombreProovedor: req.body.nombreProovedor,
                    telefono: req.body.telefono,
                    correo: req.body.correo,
                    contacto: req.body.contacto,
                    telefonoContacto: req.body.telefonoContacto,
                    direccion: req.body.direccion
                }
            }
        );
        res.json(updatedProovedor);
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
});

module.exports = router;
