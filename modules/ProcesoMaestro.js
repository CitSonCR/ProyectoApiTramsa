const mongoose = require('mongoose');

const ProcesoMaestroSchema = mongoose.Schema({
    codigoProcesoM : {
        type: String,
        required : true
    },
    ordenPedido : {
        type: String,
        required : true
    },
    fechaOrden : {
        type: String,
        required : true
    },
    proovedor : {
        type: Number,
        required : true
    },
    comprobante : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('ProcesoMaestro',ProcesoMaestroSchema)