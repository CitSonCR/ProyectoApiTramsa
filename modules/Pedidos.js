const mongoose = require('mongoose');

const PedidoSchema = mongoose.Schema({
    codigoPedido : {
        type: String,
        required : true
    },
    proveedorId : {
        type: String,
        required : true
    },
    fecha : {
        type: Date,
        default : Date.now
    },
    estado : {
        type: String,
        required : true
    },
    codigoMateriaPrima : {
        type: String,
        required : true
    },
    nombreMateriaPrima : {
        type: String,
        required : true
    },
    cantidadMateriaPrima : {
        type: Number,
        required : true
    }


});

module.exports = mongoose.model('Pedidos',PedidoSchema)