const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./users')
const bookRouter = require('./books')
const libraryRouter = require('./library')
const addBookRouter = require('./addBook')
const userHomePg = require('./user_HomePg')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())
app.use(express.static('thumbnails'));
app.use(express.static('profilePhoto'));
app.use('/users',userRouter)
app.use('/books',bookRouter)
app.use('/library',libraryRouter)
app.use('/user_home', userHomePg)


app.listen( 4000,'0.0.0.0',()=>{
    console.log('server started on 4000........')
})