const express = require('express');
const router = express.Router();
const Consecutivo = require('../modules/Consecutivo');

//get all the eventos
router.get('/', async (req,res) => {
    try {
        const consecutivos = await Consecutivo.find();
        res.json(consecutivos);
    } catch (err) {
        res.json({message : err});
    }
});


//submit a evento
router.post('/', async (req,res) => {
    const consecutivo = new Consecutivo({   
        tipoConsecutivo: req.body.tipoConsecutivo,
        descripcion: req.body.descripcion,
        valorConsecutivo: req.body.valorConsecutivo,
        prefijo: req.body.prefijo
    });
    try {
        const savedConsecutivo = await consecutivo.save();
        res.json(savedConsecutivo);
    } catch (err) {
        res.json({message : err});
    }
    
});
//getById
// router.get('/:consecutivoId', async (req,res) => {
//     try {
//         const consecutivos = await Consecutivo.findById(req.params.consecutivoId)
//         res.json(consecutivos);
//     } catch (err) {
//         res.json({message : err});
//     }
// });

router.get('/:tipoConsecutivo', async (req,res) => {
    try {
        const consecutivos = await Consecutivo.findOne({tipoConsecutivo:req.params.tipoConsecutivo})
        res.json(consecutivos);
    } catch (err) {
        res.json({message : err});
    }
});

//delete
router.delete('/:consecutivoId', async (req,res) => {
    try {        
        const removedConsecutivo = await Consecutivo.remove({_id : req.params.consecutivoId})        
        res.json(removedConsecutivo);
    } catch (err) {
        res.json({message : err});
    }
});
//patch
router.patch('/:consecutivoId', async (req,res) => {
    try {        
        const updatedConsecutivo = await Consecutivo.updateOne(
            { tipoConsecutivo: req.params.consecutivoId},            
            { $set: {   tipoConsecutivo: req.body.tipoConsecutivo,
                        descripcion: req.body.descripcion,
                        valorConsecutivo: req.body.valorConsecutivo,
                        prefijo: req.body.prefijo} },
        );
        res.json(updatedConsecutivo);
    } catch (err) {
        console.log(err);
        res.json({message : err});
    }
});

module.exports = router;
