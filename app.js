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

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use('/posts',postsRoute);
app.use('/eventos',eventosRoute);
app.use('/roles',rolesRoute);

//ROUTES
app.get('/',(req,res) => {
    res.send('HOME')
});

//CONNECT DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => console.log('Connected! ' + mongoose.connection.readyState)
);

//LISTENING

app.listen(5000);