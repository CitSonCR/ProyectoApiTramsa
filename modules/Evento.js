const mongoose = require('mongoose');

const EventoSchema = mongoose.Schema({
    codigoEvento : {
        type: String,
        required : true
    },
    descripcion : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Eventos',EventoSchema)