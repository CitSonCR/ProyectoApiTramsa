const mongoose = require('mongoose');

const RolSchema = mongoose.Schema({
    codigoRol : {
        type: String,
        required : true
    },
    nombre : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Roles',RolSchema)