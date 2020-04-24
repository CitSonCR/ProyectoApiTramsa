const express = require('express');
const router = express.Router();
const Usuario = require('../modules/Usuario');

//get all the eventos
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (err) {
        res.json({ message: err });
    }
});


//submit a evento
router.post('/', async (req, res) => {
    const usuario = new Usuario({
        codigoUsuario: req.body.codigoUsuario,
        email: req.body.email,
        user: req.body.user,
        nombre: req.body.nombre,
        rol: req.body.rol,
        password: req.body.password,
        estado: req.body.estado
    });
    try {
        const savedUsuario = await usuario.save();
        res.json(savedUsuario);
    } catch (err) {
        res.json({ message: err });
    }

});
//getById
router.get('/:UsuarioId', async (req, res) => {
    try {
        const usuarios = await Usuario.findById(req.params.UsuarioId)
        res.json(usuarios);
    } catch (err) {
        res.json({ message: err });
    }
});
//delete
router.delete('/:UsuarioId', async (req, res) => {
    try {
        const removedUsuario = await Usuario.remove({ _id: req.params.eventoId })
        res.json(removedUsuario);
    } catch (err) {
        res.json({ message: err });
    }
});
//patch
router.patch('/:UsuarioId', async (req, res) => {
    try {
        const updatedUsuario = await Usuario.updateOne(
            { _id: req.params.UsuarioId },
            {
                $set: {
                    codigoUsuario: req.body.codigoUsuario,
                    email: req.body.email,
                    user: req.body.user,
                    nombre: req.body.nombre,
                    rol: req.body.rol,
                    password: req.body.password,
                    estado: req.body.estado
                }
            }
        );
        res.json(updatedUsuario);
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
});

module.exports = router;
