const express = require('express');
const router = express.Router();
const TipoMateriaPrima = require('../modules/Evento');

//get all the tipo materia prima
router.get('/', async (req,res) => {
    try {
        const tmp = await TipoMateriaPrima.find();
        res.json(tmp);
    } catch (err) {
        res.json({message : err});
    }
});

/*
//submit a evento
router.post('/', async (req,res) => {
    const evento = new Evento({
        codigoEvento: req.body.codigoEvento,
        descripcion: req.body.descripcion
    });
    try {
        const savedEvento = await evento.save();
        res.json(savedEvento);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:eventoId', async (req,res) => {
    try {
        const eventos = await Evento.findById(req.params.eventoId)
        res.json(eventos);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
router.delete('/:eventoId', async (req,res) => {
    try {        
        const removedEvento = await Evento.remove({_id : req.params.eventoId})        
        res.json(removedEvento);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:eventoId', async (req,res) => {
    try {        
        const updatedEvento = await Evento.updateOne(
            { _id: req.params.eventoId},
            { $set: { descripcion: req.body.descripcion} }
        );
        res.json(updatedEvento);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});
*/
module.exports = router;
