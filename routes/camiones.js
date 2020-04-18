const express = require('express');
const router = express.Router();
const Camion = require('../modules/Camion');

//get all the eventos
router.get('/', async (req,res) => {
    try {
        const camiones = await Camion.find();
        res.json(camiones);
    } catch (err) {
        res.json({message : err});
    }
});


//submit a evento
router.post('/', async (req,res) => {
    const camion = new Camion({
        codigoCamion: req.body.codigoCamion,
        descripcion: req.body.descripcion,
        nombreCorto: req.body.nombreCorto,
        marco: req.body.marco,
        anio: req.body.anio,
        placa: req.body.placa
    });
    try {
        const savedCamion = await camion.save();
        res.json(savedCamion);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:camionId', async (req,res) => {
    try {
        const camiones = await Camion.findById(req.params.camionId)
        res.json(camiones);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
router.delete('/:camionId', async (req,res) => {
    try {        
        const removedCamion = await Camion.remove({_id : req.params.eventoId})        
        res.json(removedCamion);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:camionId', async (req,res) => {
    try {        
        const updatedCamion = await Camion.updateOne(
            { _id: req.params.camionId},
            { $set: { codigoCamion: req.body.codigoCamion} },
            { $set: { descripcion: req.body.descripcion} },
            { $set: { nombreCorto: req.body.nombreCorto} },
            { $set: { marco: req.body.marco} },
            { $set: { anio: req.body.anio} },
            { $set: { placa: req.body.placa} }
        );
        res.json(updatedCamion);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});

module.exports = router;
