const mongoose = require('mongoose');

const ParametroGeneralSchema = mongoose.Schema({
    nombreCompania : {
        type: String,
        required : true
    },
    telefono : {
        type: String,
        required : true
    },
    cedulaJuridica : {
        type: String,
        required : true
    },
    mensajeSaludo : {
        type: String,
        required : true
    },
    direccion : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('ParametrosGenerales',ParametroGeneralSchema)