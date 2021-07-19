const routes=require('express').Router()
routes.use('/notes',require('./notas.routes'))
routes.use('/api',require('./notas.routes'))
module.exports =routes