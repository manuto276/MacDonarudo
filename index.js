#!/usr/bin/env node

const dotenv = require('dotenv')
dotenv.config({path: './.env'})

const express = require('express') 
const mongoose = require('mongoose') 
const bodyParser = require('body-parser') 
const path = require('path') 
const expressSession = require('express-session')
const passport = require('passport')
const expressFlash = require('express-flash')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const orderRouter = require('./routes/orderRouter')
const productRouter = require('./routes/productRouter')



// this function is from passport-config.js

async function main() {
    console.log(`Connecting to database ...`);
    await mongoose.connect('mongodb://localhost:27017/mac_donarudo_db', {useNewUrlParser: true})
    console.log(`Connection to database successful.`);
    const app = express() 

    const port = 3001
    const host = 'localhost'
    // http://localhost:3000 from the react debug client,
    // http://localhost:3001 from the express-serverd client
    const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001', 'http://172.104.250.206:3001']

    app.use(cors({origin: allowedOrigins, credentials: true}))

    /*app.use(function(req, res, next) {
        res.header('Content-Type', 'application/json;charset=UTF-8')
        res.header('Access-Control-Allow-Credentials', true)
        res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept'
        )
        next()
    });*/

    // to parse application/json
    app.use(bodyParser.json())  
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(cookieParser())

    app.use(express.static(path.join(__dirname, 'build'))) 

    app.use(expressSession({resave: false, saveUninitialized: false, secret: process.env.SESSION_SECRET}))
    app.use(expressFlash())
    // initialize passport
    app.use(passport.initialize())
    // initialize passport's sessions
    app.use(passport.session())

    app.use('/api/', userRouter)
    app.use('/api/', orderRouter)
    app.use('/api/', productRouter)

    // get * must be at the bottom, otherwise every url will be served the website
    app.get('*',(req, res, next) => {
        console.log(`GET from ${req.ip}`) 
        res.sendFile(path.join(__dirname,'build','index.html')) 
    }) 

    app.listen(port, host, () => {
        console.log(`App listening on http://${host}:${port}/ ...`)
    }) 
}

main() 