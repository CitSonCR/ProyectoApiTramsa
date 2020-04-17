const mongoose = require('mongoose');

const BodegaSchema = mongoose.Schema({
    codigoBodega : {
        type: String,
        required : true
    },
    nombre : {
        type: String,
        required : true
    },
    nombreCorto : {
        type: String,
        required : true
    },
    alias : {
        type: String,
        required : true
    },
    ubicacion : {
        type: String,
        required : true
    },
    unidadMedida : {
        type: String,
        required : true
    },
    tipoBodega : {
        type: String,
        required : true
    },
    espacioBodega : {
        type: Number,
        required : true
    }
});

module.exports = mongoose.model('Bodegas',BodegaSchema)