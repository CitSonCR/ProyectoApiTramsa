const express = require('express');
const router = express.Router();
const PedidoPendiente = require('../modules/PedidoPendiente');

//get all the eventos
router.get('/', async (req, res) => {
    try {
        const pedidosPendiente = await PedidoPendiente.find();
        res.json(pedidosPendiente);
    } catch (err) {
        res.json({ message: err });
    }
});


//submit a evento
router.post('/', async (req, res) => {
    const pedidoPendiente = new PedidoPendiente({
        codigoPedidoP: req.body.codigoPedidoP,
        numero: req.body.numero,
        fechaHora: req.body.fechaHora,
        proovedor: req.body.proovedor,
        camion: req.body.camion,
        monto: req.body.monto
    });
    try {
        const savedPedidoPendiente = await pedidoPendiente.save();
        res.json(savedPedidoPendiente);
    } catch (err) {
        res.json({ message: err });
    }

});
//getById
router.get('/:PedidoPendienteId', async (req, res) => {
    try {
        const pedidosPendiente = await PedidoPendiente.findById(req.params.PedidoPendienteId)
        res.json(pedidosPendiente);
    } catch (err) {
        res.json({ message: err });
    }
});
//delete
router.delete('/:PedidoPendienteId', async (req, res) => {
    try {
        const removedPedidoPendiente = await PedidoPendiente.remove({ _id: req.params.eventoId })
        res.json(removedPedidoPendiente);
    } catch (err) {
        res.json({ message: err });
    }
});
//patch
router.patch('/:PedidoPendienteId', async (req, res) => {
    try {
        const updatedPedidoPendiente = await PedidoPendiente.updateOne(
            { _id: req.params.PedidoPendienteId },
            {
                $set: {
                    codigoPedidoP: req.body.codigoPedidoP,
                    numero: req.body.numero,
                    fechaHora: req.body.fechaHora,
                    proovedor: req.body.proovedor,
                    camion: req.body.camion,
                    monto: req.body.monto
                }
            }
        );
        res.json(updatedPedidoPendiente);
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
});

module.exports = router;
