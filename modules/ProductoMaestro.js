const mongoose = require('mongoose');

const ProductoMaestroSchema = mongoose.Schema({
    codigoProductoM : {
        type: String,
        required : true
    },
    descripcion : {
        type: String,
        required : true
    },
    puntoReorden : {
        type: Number,
        required : true
    },
    unidadMedida : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('ProductoMaestro',ProductoMaestroSchema)