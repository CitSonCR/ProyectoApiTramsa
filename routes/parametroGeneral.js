const express = require('express');
const router = express.Router();
const ParametroGeneral = require('../modules/ParametroGeneral');

//get all the eventos
router.get('/', async (req,res) => {
    try {
        const parametrosGenerales = await ParametroGeneral.find();
        res.json(parametrosGenerales);
    } catch (err) {
        res.json({message : err});
    }
});


//submit a evento
router.post('/', async (req,res) => {
    const parametroGeneral = new ParametroGeneral({
        nombreCompania: req.body.nombreCompania,
        telefono: req.body.telefono,
        cedulaJuridica: req.body.cedulaJuridica,
        mensajeSaludo: req.body.mensajeSaludo,
        direccion: req.body.direccion
    });
    try {
        const savedParametroGeneral = await parametroGeneral.save();
        res.json(savedParametroGeneral);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:ParametroGeneralId', async (req,res) => {
    try {
        const parametrosGenerales = await ParametroGeneral.findById(req.params.ParametroGeneralId)
        res.json(parametrosGenerales);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
router.delete('/:ParametroGeneralId', async (req,res) => {
    try {        
        const removedParametroGeneral = await ParametroGeneral.remove({_id : req.params.eventoId})        
        res.json(removedParametroGeneral);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:ParametroGeneralId', async (req,res) => {
    try {        
        const updatedParametroGeneral = await ParametroGeneral.updateOne(
            { _id: req.params.ParametroGeneralId},
            { $set: { nombreCompania: req.body.nombreCompania, telefono: req.body.telefono, cedulaJuridica: req.body.cedulaJuridica, mensajeSaludo: req.body.mensajeSaludo, direccion: req.body.direccion } }
        );
        res.json(updatedParametroGeneral);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});

module.exports = router;
