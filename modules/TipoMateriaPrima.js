const mongoose = require('mongoose');

const TipoMateriaPrimaSchema = mongoose.Schema({
    codigoTMP : {
        type: String,
        required : true
    },
    descripcion : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('TipoMateriaPrima',TipoMateriaPrimaSchema)