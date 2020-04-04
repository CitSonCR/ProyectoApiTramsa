const express = require('express');
const router = express.Router();
const Rol = require('../modules/Rol');

//get all the Roles
router.get('/', async (req,res) => {
    try {
        const roles = await Rol.find();
        res.json(roles);
    } catch (err) {
        res.json({message : err});
    }
});

//submit a rol
router.post('/', async (req,res) => {
    const roles = new Rol({
        codigoRol: req.body.codigoRol,
        nombre: req.body.nombre
    });
    try {
        const savedRol = await roles.save();
        res.json(savedRol);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
router.get('/:rolId', async (req,res) => {
    try {
        const roles = await Rol.findOne({ codigoRol: req.params.rolId})
        res.json(roles);
    } catch (err) {
        res.json({message : err});
    }
});
//delete
router.delete('/:rolId', async (req,res) => {
    try {        
        const removedRol = await Rol.findOneAndRemove({codigoRol : req.params.rolId})        
        res.json(removedRol);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:rolId', async (req,res) => {
    try {        
        const updatedRol = await Rol.updateOne(
            { codigoRol: req.params.rolId},
            { $set: { nombre: req.body.nombre} }
        );
        res.json(updatedRol);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});

module.exports = router;
