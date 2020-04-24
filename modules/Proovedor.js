const mongoose = require('mongoose');

const ProovedorSchema = mongoose.Schema({
    codigoProovedor : {
        type: String,
        required : true
    },
    cedula : {
        type: String,
        required : true
    },
    nombre : {
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
    contacto : {
        type: String,
        required : true
    },
    telContacto : {
        type: Number,
        required : true
    },
    direccion : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Proovedores',ProovedorSchema)