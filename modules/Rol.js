const mongoose = require('mongoose');

const RolSchema = mongoose.Schema({
    codigoRol : {
        type: String,
        required : true
    },
    nombreRol : {
        type: String,
        required : true
    },
    rolDisponible : {
        type: String,
        required : true
    },
    rolAsignado : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Roles',RolSchema)