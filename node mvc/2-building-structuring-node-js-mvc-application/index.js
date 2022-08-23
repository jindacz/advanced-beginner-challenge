const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const session = require("express-session");
dotenv.config()
const passport = require("express-session")
const {loginCheck} = require("./auth/passport")
loginCheck(passport)

// MongoDB connection
const database = process.env.MONGOLAB_URI
mongoose.connect(database, 
    {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('e don connect'))
    .catch(err => console.log(err))


app.set('view engine', 'ejs')
// routes
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: 'oneboy',
    saveUninitialized: true,
    resave: true
}))

app.use(passport.initialize())
app.use(passport.session())
app.use('/', require('./routes/login'));


const PORT = process.env.PORT || 4111
app.listen(PORT, console.log("SERVER don start for port:" + PORT))

