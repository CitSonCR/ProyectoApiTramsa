const mongoose = require('mongoose');

const FacturaSchema = mongoose.Schema({
    codigoFactura : {
        type: String,
        required : true
    },
    fechaFactura : {
        type: String,
        required : true
    },
    cliente : {
        type: String,
        required : true
    },
    producto : {
        type: String,
        required : true
    },
    cantidadProducto : {
        type: Number,
        required : true
    },
    descuento : {
        type: Number,
        required : true
    },
    impuesto : {
        type: Number,
        required : true
    },
    total : {
        type: Number,
        required : true
    }
});

module.exports = mongoose.model('Facturas',FacturaSchema)