const express = require('express');
const router = express.Router();
const ProductoMaestro = require('../modules/ProductoMaestro');

//get all the eventos
router.get('/', async (req, res) => {
    try {
        const productosMaestro = await ProductoMaestro.find();
        res.json(productosMaestro);
    } catch (err) {
        res.json({ message: err });
    }
});


//submit a evento
router.post('/', async (req, res) => {
    const productoMaestro = new ProductoMaestro({
        codigoProductoM: req.body.codigoProductoM,
        descripcion: req.body.descripcion,
        puntoReorden: req.body.puntoReorden,
        unidadMedida: req.body.unidadMedida
    });
    try {
        const savedProductoMaestro = await productoMaestro.save();
        res.json(savedProductoMaestro);
    } catch (err) {
        res.json({ message: err });
    }

});
//getById
router.get('/:ProductoMaestroId', async (req, res) => {
    try {
        const productosMaestro = await ProductoMaestro.findById(req.params.ProductoMaestroId)
        res.json(productosMaestro);
    } catch (err) {
        res.json({ message: err });
    }
});
//delete
router.delete('/:ProductoMaestroId', async (req, res) => {
    try {
        const removedProductoMaestro = await ProductoMaestro.remove({ _id: req.params.eventoId })
        res.json(removedProductoMaestro);
    } catch (err) {
        res.json({ message: err });
    }
});
//patch
router.patch('/:ProductoMaestroId', async (req, res) => {
    try {
        const updatedProductoMaestro = await ProductoMaestro.updateOne(
            { _id: req.params.ProductoMaestroId },
            {
                $set: {
                    codigoProductoM: req.body.codigoProductoM,
                    descripcion: req.body.descripcion,
                    puntoReorden: req.body.puntoReorden,
                    unidadMedida: req.body.unidadMedida
                }
            }
        );
        res.json(updatedProductoMaestro);
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
});

module.exports = router;
