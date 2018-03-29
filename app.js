const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const mongoStore = require('connect-mongo')(session)
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const promisify = require('es6-promisify')
const flash = require('connect-flash')
const expressValidator = require('express-validator')
// const routes = require('./routes/index')
const helpers = require('./helpers')
// const errorHandlers = require('./handlers/errorHandlers')
const publicPath = path.join(__dirname,"../client","build")
console.log(publicPath)
// /home/gulshan/nodejs/client/build
// /home/gulshan/nodejs/shopper/client/build

const app = express()
app.use(bodyParser.json())

if(process.env.NODE_ENV==="production"){
    console.log('NOW IN PRODUCTION') 
    app.use(express.static(publicPath))
}


app.get("/api",(req,res)=>{
    res.json({ "msg":"node and express" })
})

app.get('*',(req, res) => {
    res.sendFile(path.join(publicPath + "/index.html"))
})


export default app