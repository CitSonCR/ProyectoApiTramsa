const mongoose = require('mongoose');

const PedidoPendienteSchema = mongoose.Schema({
    codigoPedidoP : {
        type: String,
        required : true
    },
    numero : {
        type: String,
        required : true
    },
    fechaHora : {
        type: String,
        required : true
    },
    proovedor : {
        type: String,
        required : true
    },
    camion : {
        type: String,
        required : true
    },
    monto : {
        type: Number,
        required : true
    }
});

module.exports = mongoose.model('PedidoPendientes',PedidoPendienteSchema)