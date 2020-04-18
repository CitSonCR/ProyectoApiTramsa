const mongoose = require('mongoose');

const VentaSchema = mongoose.Schema({
    numeroFactura : {
        type: String,
        required : true
    },
    clienteId : {
        type: String,
        required : true
    },
    fecha : {
        type: Date,
        default : Date.now
    },
    productos : {
        productoId : {type : String, required : true},
        cantidad : {type : Number, required : true}
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
    },
});

module.exports = mongoose.model('Ventas',VentaSchema)