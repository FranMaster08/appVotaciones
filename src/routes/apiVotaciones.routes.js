const routes = require('express').Router();
const controller = require('../controller/notas.controller')
routes
    .get('/votaciones',controller.getVotaciones )

module.exports = routes