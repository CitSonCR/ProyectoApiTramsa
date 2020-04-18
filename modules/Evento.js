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

const ParametroGeneralSchema = mongoose.Schema({
    codigoEvento : {
        type: String,
        required : true
    },
    nombreCompania : {
        type: String,
        required : true
    },
    telefono : {
        type: Number,
        required : true
    },
    cedulaJuridica : {
        type: String,
        required : true
    },
    mensajeSaludo : {
        type: String,
        required : true
    },
    direccion : {
        type: String,
        required : true
    }
});

const ConsecutivoSchema = mongoose.Schema({
    codigoConsecutivo : {
        type: String,
        required : true
    },
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
        required : true
    }
});

const BodegaSchema = mongoose.Schema({
    codigoBodega : {
        type: String,
        required : true
    },
    nombre : {
        type: String,
        required : true
    },
    nombreCorto : {
        type: String,
        required : true
    },
    alias : {
        type: String,
        required : true
    },
    ubicacion : {
        type: String,
        required : true
    },
    unidadMedida : {
        type: String,
        required : true
    },
    tipoBodega : {
        type: String,
        required : true
    },
    espacioBodega : {
        type: Number,
        required : true
    }
});

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
    marco : {
        type: String,
        required : true
    },
    anio : {
        type: Number,
        required : true
    },
    placa : {
        type: String,
        required : true
    }
});

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

const MateriaPrimaSchema = mongoose.Schema({
    codigoMP : {
        type: String,
        required : true
    },
    nombre : {
        type: String,
        required : true
    },
    cantidadExistente : {
        type: Number,
        required : true
    },
    unidadMedida : {
        type: String,
        required : true
    }
});

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

const ProductoDetalleSchema = mongoose.Schema({
    codigoProductoD : {
        type: String,
        required : true
    },
    materiaPrima : {
        type: Number,
        required : true
    }
});

const ProovedorSchema = mongoose.Schema({
    codigoProovedor : {
        type: String,
        required : true
    },
    cedula : {
        type: String,
        required : true
    },
    nombreProovedor : {
        type: String,
        required : true
    },
    telefono : {
        type: Number,
        required : true
    },
    correo : {
        type: String,
        required : true
    },
    contacto : {
        type: String,
        required : true
    },
    telefonoContacto : {
        type: Number,
        required : true
    },
    direccion : {
        type: String,
        required : true
    }
});

const ClienteSchema = mongoose.Schema({
    codigoCliente : {
        type: String,
        required : true
    },
    fechaIngreso : {
        type: String,
        required : true
    },
    cedulaIdentidad : {
        type: String,
        required : true
    },
    primerApellido : {
        type: String,
        required : true
    },
    segundoApellido : {
        type: String,
        required : true
    },
    nombre : {
        type: String,
        required : true
    },
    estado : {
        type: String,
        required : true
    },
    telefono : {
        type: Number,
        required : true
    },
    correo : {
        type: String,
        required : true
    },
    direccion : {
        type: String,
        required : true
    }
});

const ProcesoMaestroSchema = mongoose.Schema({
    codigoProcesoM : {
        type: String,
        required : true
    },
    ordenPedido : {
        type: String,
        required : true
    },
    fechaOrden : {
        type: String,
        required : true
    },
    proovedor : {
        type: Number,
        required : true
    },
    comprobante : {
        type: String,
        required : true
    }
});

const ProcesoDetalleSchema = mongoose.Schema({
    codigoProcesoD : {
        type: String,
        required : true
    },
    codigoOrdenPedido : {
        type: String,
        required : true
    },
    codigoMateriaPrima : {
        type: String,
        required : true
    },
    materiaPrima : {
        type: String,
        required : true
    },
    cantidad : {
        type: Number,
        required : true
    },
    estado : {
        type: String,
        required : true
    }
});

const ProduccionLoteSchema = mongoose.Schema({
    numeroProduccion : {
        type: String,
        required : true
    },
    fechaProduccion : {
        type: String,
        required : true
    },
    codigoProduccion : {
        type: String,
        required : true
    },
    Producto : {
        type: String,
        required : true
    },
    bodega : {
        type: String,
        required : true
    },
    cantidadProducir : {
        type: Number,
        required : true
    },
    tiempo : {
        type: String,
        required : true
    }
});

const FacturaSchema = mongoose.Schema({
    codigoFactura : {
        type: String,
        required : true
    },
    fechaFactura : {
        type: String,
        required : true
    },
    cliente : {
        type: String,
        required : true
    },
    producto : {
        type: String,
        required : true
    },
    cantidadProducto : {
        type: Number,
        required : true
    },
    descuento : {
        type: Number,
        required : true
    },
    impuesto : {
        type: Number,
        required : true
    },
    total : {
        type: Number,
        required : true
    }
});

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

const UsuarioSchema = mongoose.Schema({
    codigoUsuario : {
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
    nombre : {
        type: String,
        required : true
    },
    rol : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    estado : {
        type: String,
        required : true
    }
});

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

const PedidoPendienteSchema = mongoose.Schema({
    codigoPedidoP : {
        type: String,
        required : true
    },
    numero : {
        type: String,
        required : true
    },
    fechaHora : {
        type: String,
        required : true
    },
    proovedor : {
        type: String,
        required : true
    },
    camion : {
        type: String,
        required : true
    },
    monto : {
        type: Number,
        required : true
    }
});

const BitacoraErrorSchema = mongoose.Schema({
    codigoError : {
        type: String,
        required : true
    },
    numero : {
        type: Number,
        required : true
    },
    fechaHora : {
        type: String,
        required : true
    },
    descripcion : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Eventos',EventoSchema)
// module.exports = mongoose.model('Eventos',ParametroGeneralSchema)
// module.exports = mongoose.model('Consecutivos',ConsecutivoSchema)
// module.exports = mongoose.model('Bodegas',BodegaSchema)
// module.exports = mongoose.model('Camiones',CamionSchema)
module.exports = mongoose.model('TipoMateriaPrima',TipoMateriaPrimaSchema)
// module.exports = mongoose.model('Eventos',MateriaPrimaSchema)
// module.exports = mongoose.model('Eventos',ProductoMaestroSchema)
// module.exports = mongoose.model('Eventos',ProductoDetalleSchema)
// module.exports = mongoose.model('Eventos',ProovedorSchema)
// module.exports = mongoose.model('Eventos',ClienteSchema)
// module.exports = mongoose.model('Eventos',ProcesoMaestroSchema)
// module.exports = mongoose.model('Eventos',ProcesoMaestroSchema)
// module.exports = mongoose.model('Eventos',ProcesoDetalleSchema)
// module.exports = mongoose.model('Eventos',ProduccionLoteSchema)
// module.exports = mongoose.model('Eventos',FacturaSchema)
// module.exports = mongoose.model('Eventos',EventoSchema)
// module.exports = mongoose.model('Eventos',RolSchema)
// module.exports = mongoose.model('Eventos',UsuarioSchema)
// module.exports = mongoose.model('Eventos',BitacoraSchema)
// module.exports = mongoose.model('Eventos',PedidoPendienteSchema)
// module.exports = mongoose.model('Eventos',BitacoraErrorSchema)