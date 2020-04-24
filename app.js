const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

//IMPORT ROUTES
const postsRoute = require('./routes/posts');
const eventosRoute = require('./routes/eventos');
const rolesRoute = require('./routes/roles');
const pedidosRoute = require('./routes/pedidos');
const ventasRoute = require('./routes/ventas');
const bodegasRoute = require('./routes/bodegas');
const consecutivosRoute = require('./routes/consecutivos');
const camionesRoute = require('./routes/camiones');
const tipoMateriaPrimaRoute = require('./routes/tipoMateriaPrima');
const materiaPrimaRoute = require('./routes/materiaPrima');
const productoMaestroRoute = require('./routes/productoMaestro');
const productoDetalleRoute = require('./routes/productoDetalle');
const proovedoresRoute = require('./routes/proovedores');
const clientesRoute = require('./routes/clientes');
const procesoMaestroRoute = require('./routes/procesoMaestro');
const procesoDetalleRoute = require('./routes/procesoDetalle');
const produccionLoteRoute = require('./routes/produccionLote');
const facturasRoute = require('./routes/facturas');
const usuariosRoute = require('./routes/usuarios');
const bitacorasRoute = require('./routes/bitacoras');
const pedidoPendienteRoute = require('./routes/pedidoPendiente');
const bitacoraErrorRoute = require('./routes/bitacoraError');


//MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use('/posts',postsRoute);
app.use('/eventos',eventosRoute);
app.use('/roles',rolesRoute);
app.use('/pedidos',pedidosRoute);
app.use('/ventas',ventasRoute);
//app.use('/tipoMateriaPrimas',tipoMateriaPrimasRoute);
app.use('/bodegas',bodegasRoute);
app.use('/consecutivos',consecutivosRoute);
app.use('/camiones',camionesRoute);
app.use('/tipoMateriaPrima',tipoMateriaPrimaRoute);
app.use('/materiaPrima',materiaPrimaRoute);
app.use('/productoMaestro',productoMaestroRoute);
app.use('/productoDetalle',productoDetalleRoute);
app.use('/proovedores',proovedoresRoute);
app.use('/clientes',clientesRoute);
app.use('/procesoMaestro',procesoMaestroRoute);
app.use('/procesoDetalle',procesoDetalleRoute);
app.use('/produccionLote',produccionLoteRoute);
app.use('/facturas',facturasRoute);
app.use('/usuarios',usuariosRoute);
app.use('/bitacoras',bitacorasRoute);
app.use('/pedidoPendiente',pedidoPendienteRoute);
app.use('/bitacoraError',bitacoraErrorRoute);


//ROUTES
app.get('/',(req,res) => {
    res.send('HOME')
});

//CONNECT DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true,useUnifiedTopology: true }, 
    () => console.log('Connected! ' + mongoose.connection.readyState)
);

//LISTENING

app.listen(5000);