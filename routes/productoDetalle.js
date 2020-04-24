const express = require('express');
const router = express.Router();
const ProductoDetalle = require('../modules/ProductoDetalle');

//get all the eventos
router.get('/', async (req, res) => {
    try {
        const productosDetalle = await ProductoDetalle.find();
        res.json(productosDetalle);
    } catch (err) {
        res.json({ message: err });
    }
});


//submit a evento
router.post('/', async (req, res) => {
    const productoDetalle = new ProductoDetalle({
        codigoProductoD: req.body.codigoProductoD,
        materiaPrima: req.body.materiaPrima
    });
    try {
        const savedProductoDetalle = await productoDetalle.save();
        res.json(savedProductoDetalle);
    } catch (err) {
        res.json({ message: err });
    }

});
//getById
router.get('/:ProductoDetalleId', async (req, res) => {
    try {
        const productosDetalle = await ProductoDetalle.findById(req.params.ProductoDetalleId)
        res.json(productosDetalle);
    } catch (err) {
        res.json({ message: err });
    }
});
//delete
router.delete('/:ProductoDetalleId', async (req, res) => {
    try {
        const removedProductoDetalle = await ProductoDetalle.remove({ _id: req.params.eventoId })
        res.json(removedProductoDetalle);
    } catch (err) {
        res.json({ message: err });
    }
});
//patch
router.patch('/:ProductoDetalleId', async (req, res) => {
    try {
        const updatedProductoDetalle = await ProductoDetalle.updateOne(
            { _id: req.params.ProductoDetalleId },
            {
                $set: {
                    codigoProductoD: req.body.codigoProductoD,
                    materiaPrima: req.body.materiaPrima
                }
            }
        );
        res.json(updatedProductoDetalle);
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
});

module.exports = router;
