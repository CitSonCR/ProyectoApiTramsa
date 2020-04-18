const express = require('express');
const router = express.Router();
const Bodega = require('../modules/Bodega');

//get all the eventos
router.get('/', async (req,res) => {
    try {
        const bodegas = await Bodega.find();
        res.json(bodegas);
    } catch (err) {
        res.json({message : err});
    }
});


//submit a evento
router.post('/', async (req,res) => {
    const bodega = new Bodega({
        codigoBodega: req.body.codigoBodega,
        nombre: req.body.nombre,
        nombreCorto: req.body.nombreCorto,
        alias: req.body.alias,
        ubicacion: req.body.ubicacion,
        unidadMedida: req.body.unidadMedida,
        tipoBodega: req.body.tipoBodega,
        espacioBodega: req.body.espacioBodega
    });
    try {
        const savedBodega = await bodega.save();
        res.json(savedBodega);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:bodegaId', async (req,res) => {
    try {
        const bodegas = await Bodega.findById(req.params.bodegaId)
        res.json(bodegas);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
router.delete('/:bodegaId', async (req,res) => {
    try {        
        const removedBodega = await Bodega.remove({_id : req.params.eventoId})        
        res.json(removedBodega);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:bodegaId', async (req,res) => {
    try {        
        const updatedBodega = await Bodega.updateOne(
            { _id: req.params.bodegaId},
            { $set: { codigoBodega: req.body.codigoBodega} },
            { $set: { nombre: req.body.nombre} },
            { $set: { nombreCorto: req.body.nombreCorto} },
            { $set: { alias: req.body.alias} },
            { $set: { ubicacion: req.body.ubicacion} },
            { $set: { unidadMedida: req.body.unidadMedida} },
            { $set: { tipoBodega: req.body.tipoBodega} },
            { $set: { espacioBodega: req.body.espacioBodega} }
        );
        res.json(updatedBodega);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});

module.exports = router;
