const mongoose = require('mongoose');

const CajaSchema = mongoose.Schema({
    montoApertura : {
        type: Number,
        required : true
    },
    estado : {
        type: String,
        required : true
    },
    montoTrabajo : {
        type: Number,
        required : true
    }
});

module.exports = mongoose.model('Cajas',CajaSchema)