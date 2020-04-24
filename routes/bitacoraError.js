const express = require('express');
const router = express.Router();
const BitacoraError = require('../modules/BitacoraError');

//get all the eventos
router.get('/', async (req,res) => {
    try {
        const bitacoraErrores = await BitacoraError.find();
        res.json(bitacoraErrores);
    } catch (err) {
        res.json({message : err});
    }
});


//submit a evento
router.post('/', async (req,res) => {
    const bitacoraError = new BitacoraError({
        codigoError: req.body.codigoError,
        numero: req.body.numero,
        fechaHora: req.body.fechaHora,
        descripcion: req.body.descripcion
    });
    try {
        const savedBitacoraError = await bitacoraError.save();
        res.json(savedBitacoraError);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:BitacoraErrorId', async (req,res) => {
    try {
        const bitacoraErrores = await BitacoraError.findById(req.params.BitacoraErrorId)
        res.json(bitacoraErrores);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
router.delete('/:BitacoraErrorId', async (req,res) => {
    try {        
        const removedBitacoraError = await BitacoraError.remove({_id : req.params.eventoId})        
        res.json(removedBitacoraError);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:BitacoraErrorId', async (req,res) => {
    try {        
        const updatedBitacoraError = await BitacoraError.updateOne(
            { _id: req.params.BitacoraErrorId},
            { $set: { codigoError: req.body.codigoError, numero: req.body.numero, fechaHora: req.body.fechaHora, descripcion: req.body.descripcion} }
        );
        res.json(updatedBitacoraError);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});

module.exports = router;
