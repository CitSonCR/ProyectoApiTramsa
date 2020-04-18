const express = require('express');
const router = express.Router();
const Factura = require('../modules/Factura');

//get all the eventos
router.get('/', async (req,res) => {
    try {
        const facturas = await Factura.find();
        res.json(facturas);
    } catch (err) {
        res.json({message : err});
    }
});


//submit a evento
router.post('/', async (req,res) => {
    const factura = new Factura({
        codigoFactura: req.body.codigoFactura,
        fechaFactura: req.body.fechaFactura,
        cliente: req.body.cliente,
        producto: req.body.producto,
        cantidadProducto: req.body.cantidadProducto,
        descuento: req.body.descuento,
        impuesto: req.body.impuesto,
        total: req.body.total,
    });
    try {
        const savedFactura = await factura.save();
        res.json(savedFactura);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:FacturaId', async (req,res) => {
    try {
        const facturas = await Factura.findById(req.params.FacturaId)
        res.json(facturas);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
router.delete('/:FacturaId', async (req,res) => {
    try {        
        const removedFactura = await Factura.remove({_id : req.params.eventoId})        
        res.json(removedFactura);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:FacturaId', async (req,res) => {
    try {        
        const updatedFactura = await Factura.updateOne(
            { _id: req.params.FacturaId},
            { $set: { codigoFactura: req.body.codigoFactura} },
            { $set: { fechaFactura: req.body.fechaFactura} },
            { $set: { cliente: req.body.cliente} },
            { $set: { producto: req.body.producto} },
            { $set: { cantidadProducto: req.body.cantidadProducto} },
            { $set: { descuento: req.body.descuento} },
            { $set: { impuesto: req.body.impuesto} },
            { $set: { total: req.body.total} }
        );
        res.json(updatedFactura);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});

module.exports = router;
