const express = require('express');
const router = express.Router();
const Caja = require('../modules/Caja');

//get all the Roles
router.get('/', async (req,res) => {
    try {
        const caja = await Caja.find();
        res.json(caja);
    } catch (err) {
        res.json({message : err});
    }
});

//submit a rol
router.post('/', async (req,res) => {
    const caja = new Caja({
        montoApertura: req.body.montoApertura,
        estado: req.body.estado,
        montoTrabajo : req.body.montoTrabajo
    });
    try {
        const savedCaja = await caja.save();
        res.json(savedCaja);
    } catch (err) {
        res.json({message : err});
    }
    
});
//patch
router.patch('/:cajaId', async (req,res) => {
    try {        
        const updatedCaja = await Caja.updateOne(
            { _id: req.params.cajaId},
            { $set: { estado: req.body.estado,montoTrabajo:req.body.montoTrabajo} }
        );
        res.json(updatedCaja);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});


module.exports = router;
