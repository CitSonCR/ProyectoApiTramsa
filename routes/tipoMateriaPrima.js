const express = require('express');
const router = express.Router();
const TipoMateriaPrima = require('../modules/TipoMateriaPrima');

//get all the tipo materia prima
router.get('/', async (req,res) => {
    try {
        const tmp = await TipoMateriaPrima.find();
        res.json(tmp);
    } catch (err) {
        res.json({message : err});
    }
});

//submit a evento
router.post('/', async (req,res) => {
    const tmp = new TipoMateriaPrima({

        codigoTMP : req.body.codigoTMP,
        descripcion : req.body.descripcion
    });
    try {
        const savedTipoMateriaPrima = await tmp.save();
        res.json(savedTipoMateriaPrima);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:tipoMateriaPrimaId', async (req,res) => {
    try {
        const tipoMateriaPrimas = await TipoMateriaPrima.findById(req.params.tipoMateriaPrimaId)
        res.json(tipoMateriaPrimas);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
router.delete('/:tipoMateriaPrimaId', async (req,res) => {
    try {        
        const removedTipoMateriaPrima = await TipoMateriaPrima.remove({_id : req.params.tipoMateriaPrimaId})        
        res.json(removedTipoMateriaPrima);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:tipoMateriaPrimaId', async (req,res) => {
    try {        
        const updatedTipoMateriaPrima = await TipoMateriaPrima.updateOne(
            { _id: req.params.tipoMateriaPrimaId},
            { $set: { descripcion: req.body.descripcion} }
        );
        res.json(updatedTipoMateriaPrima);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});

module.exports = router;
