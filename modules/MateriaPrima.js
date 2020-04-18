const mongoose = require('mongoose');

const MateriaPrimaSchema = mongoose.Schema({
    codigoMP : {
        type: String,
        required : true
    },
    nombre : {
        type: String,
        required : true
    },
    cantidadExistente : {
        type: Number,
        required : true
    },
    unidadMedida : {
        type: String,
        required : true
    }
});
module.exports = mongoose.model('MateriaPrima',MateriaPrimaSchema)