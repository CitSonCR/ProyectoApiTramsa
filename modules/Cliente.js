const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema({
    codigoCliente : {
        type: String,
        required : true
    },
    fechaIngreso : {
        type: String,
        required : true
    },
    cedulaIdentidad : {
        type: String,
        required : true
    },
    primerApellido : {
        type: String,
        required : true
    },
    segundoApellido : {
        type: String,
        required : true
    },
    nombre : {
        type: String,
        required : true
    },
    estado : {
        type: String,
        required : true
    },
    telefono : {
        type: Number,
        required : true
    },
    correo : {
        type: String,
        required : true
    },
    direccion : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Cliente',ClienteSchema)