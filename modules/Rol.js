const mongoose = require('mongoose');

const RolSchema = mongoose.Schema({
    codigoRol : {
        type: String,
        required : true
    },
    nombre : {
        type: String,
        required : true
    },
    rolDisponible : {
        type: String,
        required : true,
        default : 'Y'
    },
    rolAsignado : {
        type: String,
        required : true,
        default : 'Y'
    }
});

module.exports = mongoose.model('Roles',RolSchema)