const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre : {
        type: String,
        required : true
    },
    rol : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    user : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    estado : {
        type: String,
        required : true,
        default:"A"
    }
});

module.exports = mongoose.model('Usuarios',UsuarioSchema)