require('dotenv').config()
const app = require('./app')
app.listen(process.env.PORT||3000,
     () => console.log(`Listen in Port ${process.env.PORT||3000}`))