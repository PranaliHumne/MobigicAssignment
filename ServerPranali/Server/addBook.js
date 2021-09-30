// const db = require('./db')
// const utils = require('./utils')
// const express = require('express')
// const multer = require('multer')
// var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])


// const router = express.Router()


// router.post('/',cpUpload,f)

// module.exports = router

// router.post('/',upload.any,(request,response) =>{
//     const{book_name,auther_name,category_id,part,publish_date,rating,status,descripation} = request.body
//         const thumbnail = request.file.filename
//         const bookfile = request.file.filename
//         const connection = db.connect()
//         const statement = `insert into  books(book_name,auther_name,category_id,part,publish_date,rating,status,descripation,thumbnail,bookFile) values('${book_name}','${auther_name}','${category_id}',${part},'${publish_date}',${rating},'${status}','${descripation}','${thumbnail}','${bookfile}')`
//         console.log(statement)  
        
//         connection.query(statement,(error,data)=>{
//             connection.end()
//             response.send(utils.createResult(error,data))
//             console.log(error)
//         })
// })
