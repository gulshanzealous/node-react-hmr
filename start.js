const mongoose =  require("mongoose")
const http = require("http")
import app from './app'
// require('dotenv').config({ path: 'variables.env' })
mongoose.connect('mongodb://admin:admin@ds227469.mlab.com:27469/node')
mongoose.connection.on("error",err=>{
    console.log(err)
})


const server = http.createServer(app)
let currentApp = app


server.listen(process.env.PORT || 8080, ()=>{
    console.log(`app running on port ${process.env.PORT} `)
})

if(module.hot){
    module.hot.accept('./app',()=>{
        server.removeListener('request',currentApp)
        server.on('request',app)
        currentApp = app
    })
}
