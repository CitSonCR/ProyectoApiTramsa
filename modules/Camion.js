const mongoose = require('mongoose');

const CamionSchema = mongoose.Schema({
    codigoCamion : {
        type: String,
        required : true
    },
    descripcion : {
        type: String,
        required : true
    },
    nombreCorto : {
        type: String,
        required : true
    },
    marca : {
        type: String,
        required : true
    },
    year : {
        type: Number,
        required : true
    },
    placa : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Camiones',CamionSchema)