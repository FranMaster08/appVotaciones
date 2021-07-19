const routes=require('express').Router()
routes.use('/notes',require('./notas.routes'))
routes.use('/api',require('./apiVotaciones.routes'))
module.exports =routes