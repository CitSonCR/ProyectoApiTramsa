const express = require('express');
const router = express.Router();
const Bitacora = require('../modules/Bitacora');

//get all the eventos
router.get('/', async (req,res) => {
    try {
        const bitacoras = await Bitacora.find();
        res.json(bitacoras);
    } catch (err) {
        res.json({message : err});
    }
});


//submit a evento
router.post('/', async (req,res) => {
    const bitacora = new Bitacora({
        codigoBitacora: req.body.codigoBitacora,
        user: req.body.user,
        fechaHora: req.body.fechaHora,
        codigoRegistro: req.body.codigoRegistro,
        descripcion: req.body.descripcion
    });
    try {
        const savedBitacora = await bitacora.save();
        res.json(savedBitacora);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:BitacoraId', async (req,res) => {
    try {
        const bitacoras = await Bitacora.findById(req.params.BitacoraId)
        res.json(bitacoras);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
router.delete('/:BitacoraId', async (req,res) => {
    try {        
        const removedBitacora = await Bitacora.remove({_id : req.params.eventoId})        
        res.json(removedBitacora);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:BitacoraId', async (req,res) => {
    try {        
        const updatedBitacora = await Bitacora.updateOne(
            { _id: req.params.BitacoraId},
            { $set: { codigoBitacora: req.body.codigoBitacora, user: req.body.user, fechaHora: req.body.fechaHora, codigoRegistro: req.body.codigoRegistro, descripcion: req.body.descripcion} }
        );
        res.json(updatedBitacora);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});

module.exports = router;
