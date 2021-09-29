const db = require("./db")
const utils = require('./utils')
const express = require('express')
const cryptoJs = require('crypto-js')

const router = express.Router()

router.get('/',(request,response)=>{
    const connection = db.connect()
    const statement = `select * from users`
    connection.query(statement,(error,data)=>{
        connection.end()
        const users = []
        for(let index = 0; index < data.length; index++)
        {
            const user = data[index]
            users.push({
                User_id: user['User_id'],
                User_name: user['User_name'],
                email: user['email'],
                full_name : user['full_name'],
                thumbnail : user['thumbnail']
            })
        }
        response.send(utils.createResult(error,users))
    })
})

router.post('/register',(request,response)=>{
    const{full_name,User_name,email,password} = request.body 
    const encryptedPassword = ''+cryptoJs.MD5(password)
    const connection = db.connect()

    const statement = `select * from users where email = '${email}'`
    console.log(statement)
    connection.query(statement,(error,users)=>{
        if(users.length == 0){
            const statement = `insert into users(full_name,User_name,email,password) values('${full_name}','${User_name}','${email}','${encryptedPassword}')`
            connection.query(statement,(error,data)=>{
                connection.end()
                console.log(statement)
                console.log(error);
                response.send(utils.createResult(error,data))
            })
        }
        else{
            //console.log(error);
            connection.end()
            response.send(utils.createResult('email exits, please use another email',null))
        }
    })
})

module.exports = router