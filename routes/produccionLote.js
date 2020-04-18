const express = require('express');
const router = express.Router();
const ProduccionLote = require('../modules/ProduccionLote');

//get all the eventos
router.get('/', async (req,res) => {
    try {
        const produccionesLote = await ProduccionLote.find();
        res.json(produccionesLote);
    } catch (err) {
        res.json({message : err});
    }
});


//submit a evento
router.post('/', async (req,res) => {
    const produccionLote = new ProduccionLote({
        numeroProduccion: req.body.numeroProduccion,
        fechaProduccion: req.body.fechaProduccion,
        codigoProduccion: req.body.codigoProduccion,
        Producto: req.body.Producto,
        bodega: req.body.bodega,
        cantidadProducir: req.body.cantidadProducir,
        tiempo: req.body.tiempo
    });
    try {
        const savedProduccionLote = await produccionLote.save();
        res.json(savedProduccionLote);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:ProduccionLoteId', async (req,res) => {
    try {
        const produccionesLote = await ProduccionLote.findById(req.params.ProduccionLoteId)
        res.json(produccionesLote);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
router.delete('/:ProduccionLoteId', async (req,res) => {
    try {        
        const removedProduccionLote = await ProduccionLote.remove({_id : req.params.eventoId})        
        res.json(removedProduccionLote);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:ProduccionLoteId', async (req,res) => {
    try {        
        const updatedProduccionLote = await ProduccionLote.updateOne(
            { _id: req.params.ProduccionLoteId},
            { $set: { numeroProduccion: req.body.numeroProduccion} },
            { $set: { fechaProduccion: req.body.fechaProduccion} },
            { $set: { codigoProduccion: req.body.codigoProduccion} },
            { $set: { Producto: req.body.Producto} },
            { $set: { bodega: req.body.bodega} },
            { $set: { cantidadProducir: req.body.cantidadProducir} },
            { $set: { tiempo: req.body.tiempo} }
        );
        res.json(updatedProduccionLote);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});

module.exports = router;
