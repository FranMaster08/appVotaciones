const routes=require('express').Router()
routes.use('/notes',require('./notas.routes'))
module.exports =routes