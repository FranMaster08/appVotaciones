const routes = require('express').Router();
const controller = require('../controller/notas.controller')
routes
    .get('/',controller.getVotaciones )
    .post('/',controller.createVotaciones)   
module.exports = routes