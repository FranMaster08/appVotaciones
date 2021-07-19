const routes = require('express').Router();
const controller = require('../controller/notas.controller')
routes
    .get('/',controller.renderIndex )
    .get('/stats',controller.getStats)
    .post('/',controller.createVotaciones)   
    .post('/votar',controller.votar)
module.exports = routes