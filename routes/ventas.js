const express = require('express');
const router = express.Router();
const Venta = require('../modules/Ventas');

//get all the posts
router.get('/', async (req,res) => {
    try {
        const ventas = await Venta.find();
        res.json(ventas);
    } catch (err) {
        res.json({message : err});
    }
});

//submit a post
router.post('/', async (req,res) => {
    const ventas = new Venta({
        numeroFactura : req.body.numeroFactura,
        clienteId : req.body.clienteId,
        fecha : req.body.fecha,
        productos : req.body.productos,
        descuento : req.body.descuento,
        impuesto : req.body.impuesto,
        total : req.body.total

    });
    console.log(ventas)
    try {
        const savedVenta = await ventas.save();
        res.json(savedVenta);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:postId', async (req,res) => {
    try {
        const ventas = await Venta.findById(req.params.postId)
        res.json(ventas);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
/*router.delete('/:postId', async (req,res) => {
    try {        
        const removedPost = await Post.remove({_id : req.params.postId})        
        res.json(removedPost);
    } catch (err) {
        res.json({message : err});
    }
});*/
//patch
/*router.patch('/:postId', async (req,res) => {
    try {        
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId},
            { $set: { title: req.body.title} }
        );
        res.json(updatedPost);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});
*/
module.exports = router;
