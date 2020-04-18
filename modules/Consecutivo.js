const mongoose = require('mongoose');

const ConsecutivoSchema = mongoose.Schema({
    codigoConsecutivo : {
        type: String,
        required : true
    },
    tipoConsecutivo : {
        type: String,
        required : true
    },
    descripcion : {
        type: String,
        required : true
    },
    valorConsecutivo : {
        type: String,
        required : true
    },
    prefijo : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Consecutivos',ConsecutivoSchema)