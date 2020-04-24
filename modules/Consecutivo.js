const mongoose = require('mongoose');

const ConsecutivoSchema = mongoose.Schema({
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
        required : true,
        default:'Y'
    }
});

module.exports = mongoose.model('Consecutivos',ConsecutivoSchema)