const mongoose = require('mongoose');

const ProcesoDetalleSchema = mongoose.Schema({
    codigoProcesoD : {
        type: String,
        required : true
    },
    codigoOrdenPedido : {
        type: String,
        required : true
    },
    codigoMateriaPrima : {
        type: String,
        required : true
    },
    materiaPrima : {
        type: String,
        required : true
    },
    cantidad : {
        type: Number,
        required : true
    },
    estado : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('ProcesoDetalle',ProcesoDetalleSchema)