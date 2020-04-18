const mongoose = require('mongoose');

const BitacoraSchema = mongoose.Schema({
    codigoBitacora : {
        type: String,
        required : true
    },
    user : {
        type: String,
        required : true
    },
    fechaHora : {
        type: String,
        required : true
    },
    codigoRegistro : {
        type: String,
        required : true
    },
    descripcion : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Bitacoras',BitacoraSchema)