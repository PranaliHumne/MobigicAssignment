const db = require('./db')
const utils = require('./utils')
const express = require('express')

const router = express.Router()

router.get('/',(request,response) =>{
    const connection = db.connect()
    const statement = `select books.*, categories.category_title from books, categories where books.category_id = categories.category_id`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
        console.log(error)
    })
})

router.get('/category/:id',(request,response) =>{
    const{id} = request.params
    const connection = db.connect()
    const statement = `select * from books where category_id = '${id}'`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})



module.exports = router