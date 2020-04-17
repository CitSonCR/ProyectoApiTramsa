const mongoose = require('mongoose');

const ProductoDetalleSchema = mongoose.Schema({
    codigoProductoD : {
        type: String,
        required : true
    },
    materiaPrima : {
        type: Number,
        required : true
    }
});

module.exports = mongoose.model('ProductoDetalle',ProductoDetalleSchema)