const mongoose = require('mongoose');

const ProduccionLoteSchema = mongoose.Schema({
    numeroProduccion : {
        type: String,
        required : true
    },
    fechaProduccion : {
        type: String,
        required : true
    },
    codigoProduccion : {
        type: String,
        required : true
    },
    producto : {
        type: String,
        required : true
    },
    bodega : {
        type: String,
        required : true
    },
    cantidadProducir : {
        type: Number,
        required : true
    },
    tiempo : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('ProduccionLote',ProduccionLoteSchema)