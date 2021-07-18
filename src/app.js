const express=require('express')
const path = require('path')
const app=express()
const nunjucks = require('nunjucks')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname,'./public')))
app.set('view engine')
app.use('/',require('./routes'))
nunjucks.configure(path.resolve(__dirname,'./view'),{
    autoescape:false,
    express:app
})

module.exports =app