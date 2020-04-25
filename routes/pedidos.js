const express = require('express');
const router = express.Router();
const Pedido = require('../modules/Pedidos');

//get all the pedidos
router.get('/', async (req,res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (err) {
        res.json({message : err});
    }
});

//submit a post
router.post('/', async (req,res) => {
    const pedidos = new Pedido({

        codigoPedido : req.body.codigoPedido,
        fecha : req.body.fecha,
        proveedorId : req.body.proveedorId,
        codigoMateriaPrima : req.body.codigoMateriaPrima,
        nombreMateriaPrima : req.body.nombreMateriaPrima,
        cantidadMateriaPrima : req.body.cantidadMateriaPrima,
        estado : req.body.estado
        

    });
    try {
        const savedPedido = await pedidos.save();
        res.json(savedPedido);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:postId', async (req,res) => {
    try {
        const pedidos = await Pedido.findById(req.params.postId)
        res.json(pedidos);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
/*router.delete('/:postId', async (req,res) => {
    try {        
        const removedPost = await Pedido.remove({_id : req.params.postId})        
        res.json(removedPost);
    } catch (err) {
        res.json({message : err});
    }
});*/
//patch
/*router.patch('/:postId', async (req,res) => {
    try {        
        const updatedPost = await Pedido.updateOne(
            { _id: req.params.postId},
            { $set: { title: req.body.title} }
        );
        res.json(updatedPost);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});*/

module.exports = router;
