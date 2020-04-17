const express = require('express');
const router = express.Router();
const MateriaPrima = require('../modules/MateriaPrima');

//get all the eventos
router.get('/', async (req,res) => {
    try {
        const materiasPrima = await MateriaPrima.find();
        res.json(materiasPrima);
    } catch (err) {
        res.json({message : err});
    }
});


//submit a evento
router.post('/', async (req,res) => {
    const materiaPrima = new MateriaPrima({
        codigoMateriaPrima: req.body.codigoMateriaPrima,
        descripcion: req.body.descripcion,
        nombreCorto: req.body.nombreCorto,
        marco: req.body.marco,
        anio: req.body.anio,
        placa: req.body.placa
    });
    try {
        const savedMateriaPrima = await materiaPrima.save();
        res.json(savedMateriaPrima);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:materiaPrimaId', async (req,res) => {
    try {
        const materiasPrima = await MateriaPrima.findById(req.params.materiaPrimaId)
        res.json(materiasPrima);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
router.delete('/:materiaPrimaId', async (req,res) => {
    try {        
        const removedMateriaPrima = await MateriaPrima.remove({_id : req.params.eventoId})        
        res.json(removedMateriaPrima);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:materiaPrimaId', async (req,res) => {
    try {        
        const updatedMateriaPrima = await MateriaPrima.updateOne(
            { _id: req.params.materiaPrimaId},
            { $set: { codigoMateriaPrima: req.body.codigoMateriaPrima} },
            { $set: { descripcion: req.body.descripcion} },
            { $set: { nombreCorto: req.body.nombreCorto} },
            { $set: { marco: req.body.marco} },
            { $set: { anio: req.body.anio} },
            { $set: { placa: req.body.placa} }
        );
        res.json(updatedMateriaPrima);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});

module.exports = router;
