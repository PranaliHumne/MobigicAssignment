const db = require('./db')
const utils = require('./utils')
const express = require('express')

const router = express.Router()

// router.get('/:User_id',(request,response)=>{   
//     const{User_id} = request.params 
//     const connection = db.connect()
//     const statement = `SELECT User_id AS user,library_id AS lib  FROM  users JOIN  library  ON users.User_id = library.library_id`
//     connection.query(statement,(error,data) =>{
//         connection.end()
//         response.send(utils.createResult(error,data))
//         console.log(error)
//     })
// })

router.get('/',(request,response)=>{
    const connection = db.connect() 
    const statement = `select * from library`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.get('/:id',(request,response)=>{
    const{id} = request.params
    const connection = db.connect()
    const statement = `select library.*, books.book_name,books.auther_name,books.part,books.publish_date,books.descripation,books.status,books.rating,books.thumbnail,books.bookFile,books.likes from library, books where library.book_id = books.book_id and library.User_id = ${id}`
    connection.query(statement,(error,data)=>{

        
        connection.end()
        response.send(utils.createResult(error,data))
        console.log(error)
    })
})

router.delete('/:library_id',(request,response) =>{
    const{library_id} = request.params
    const connection = db.connect()
    console.log(request.body)

    const statement = `delete from library where library_id = ${library_id}`
    connection.query(statement,(error,data) =>{
        connection.end()
        console.log(statement)
        response.send(utils.createResult(error,data))
        console.log(error)
    }) 
})

router.post('/user/:id',(request,response) =>{
    const{id} = request.params
    const{User_id} = request.body
    const connection = db.connect()

    const statement = `select * from library where book_id = ${id} and User_id = ${User_id}`
    connection.query(statement,(error,library) =>{
        //console.log(data)
        console.log(statement)
        if(library.length == 0){
            const statement = `insert into library(book_id,User_id) values('${id}','${User_id}')`
            connection.query(statement,(error,data) =>{
                connection.end()

                response.send(utils.createResult(error,data))
            })
        }
        else{
            connection.end();
            response.send(utils.createResult(error,library))
        }
    })
})



module.exports = router