const {Router} = require('express');
const rutas = Router();
const user_routes = require('./users');

//cargamos rutas
rutas.use('/users', user_routes);


module.exports = rutas;