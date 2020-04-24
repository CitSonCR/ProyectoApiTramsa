const express = require('express');
const router = express.Router();
const ProcesoMaestro = require('../modules/ProcesoMaestro');

//get all the eventos
router.get('/', async (req, res) => {
    try {
        const procesosMaestro = await ProcesoMaestro.find();
        res.json(procesosMaestro);
    } catch (err) {
        res.json({ message: err });
    }
});


//submit a evento
router.post('/', async (req, res) => {
    const procesoMaestro = new ProcesoMaestro({
        codigoProcesoM: req.body.codigoProcesoM,
        ordenPedido: req.body.ordenPedido,
        fechaOrden: req.body.fechaOrden,
        proovedor: req.body.proovedor,
        comprobante: req.body.comprobante
    });
    try {
        const savedProcesoMaestro = await procesoMaestro.save();
        res.json(savedProcesoMaestro);
    } catch (err) {
        res.json({ message: err });
    }

});
//getById
router.get('/:ProcesoMaestroId', async (req, res) => {
    try {
        const procesosMaestro = await ProcesoMaestro.findById(req.params.ProcesoMaestroId)
        res.json(procesosMaestro);
    } catch (err) {
        res.json({ message: err });
    }
});
//delete
router.delete('/:ProcesoMaestroId', async (req, res) => {
    try {
        const removedProcesoMaestro = await ProcesoMaestro.remove({ _id: req.params.eventoId })
        res.json(removedProcesoMaestro);
    } catch (err) {
        res.json({ message: err });
    }
});
//patch
router.patch('/:ProcesoMaestroId', async (req, res) => {
    try {
        const updatedProcesoMaestro = await ProcesoMaestro.updateOne(
            { _id: req.params.ProcesoMaestroId },
            {
                $set: {
                    codigoProcesoMaestro: req.body.codigoProcesoMaestro,
                    ordenPedido: req.body.ordenPedido,
                    proovedor: req.body.proovedor,
                    comprobante: req.body.comprobante
                }
            }
        );
        res.json(updatedProcesoMaestro);
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
});

module.exports = router;
