const mongoose = require('mongoose');

const BitacoraErrorSchema = mongoose.Schema({
    codigoError : {
        type: String,
        required : true
    },
    numero : {
        type: Number,
        required : true
    },
    fechaHora : {
        type: String,
        required : true
    },
    descripcion : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('BitacoraError',BitacoraErrorSchema)