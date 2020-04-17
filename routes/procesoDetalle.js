const express = require('express');
const router = express.Router();
const ProcesoDetalle = require('../modules/ProcesoDetalle');

//get all the eventos
router.get('/', async (req,res) => {
    try {
        const procesosDetalle = await ProcesoDetalle.find();
        res.json(procesosDetalle);
    } catch (err) {
        res.json({message : err});
    }
});


//submit a evento
router.post('/', async (req,res) => {
    const procesoDetalle = new ProcesoDetalle({
        codigoProcesoD: req.body.codigoProcesoD,
        codigoOrdenPedido: req.body.codigoOrdenPedido,
        codigoMateriaPrima: req.body.codigoMateriaPrima,
        materiaPrima: req.body.materiaPrima,
        cantidad: req.body.cantidad,
        estado: req.body.estado
    });
    try {
        const savedProcesoDetalle = await procesoDetalle.save();
        res.json(savedProcesoDetalle);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:ProcesoDetalleId', async (req,res) => {
    try {
        const procesosDetalle = await ProcesoDetalle.findById(req.params.ProcesoDetalleId)
        res.json(procesosDetalle);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
router.delete('/:ProcesoDetalleId', async (req,res) => {
    try {        
        const removedProcesoDetalle = await ProcesoDetalle.remove({_id : req.params.eventoId})        
        res.json(removedProcesoDetalle);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:ProcesoDetalleId', async (req,res) => {
    try {        
        const updatedProcesoDetalle = await ProcesoDetalle.updateOne(
            { _id: req.params.ProcesoDetalleId},
            { $set: { codigoProcesoDetalle: req.body.codigoProcesoDetalle} },
            { $set: { codigoOrdenPedido: req.body.codigoOrdenPedido} },
            { $set: { codigoMateriaPrima: req.body.codigoMateriaPrima} },
            { $set: { materiaPrima: req.body.materiaPrima} },
            { $set: { cantidad: req.body.cantidad} },
            { $set: { estado: req.body.estado} }
        );
        res.json(updatedProcesoDetalle);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});

module.exports = router;
