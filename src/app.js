'use strict';

//configuração da aplicação

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect('mongodb://diego:diego@ds036967.mlab.com:36967/nodestr');

//Carrega as rotas
const indexRoute = require('./routes/index.route');
const productRoute = require('./routes/product.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/', indexRoute);
app.use('/products', productRoute);

//exporto a aplicação
module.exports = app;