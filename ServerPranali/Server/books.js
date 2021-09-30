const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'thumbnails/'})


var storage = multer.diskStorage({
    destination: function (req,file,cb) {
        if(file.mimetype === 'image/jpeg'){
            cb(null,'img')
        }else if(file.mimetype === 'application/pdf')
        {
            cb(null,'book')
        }else
        {
            console.log(file.mimetype)
            cb({error:'Mime type not Supported'})
        }
        
    }
})

var upload1 = multer({ storage: storage })

var upload1 = multer({storage});

const router = express.Router()

router.get('/',(request,response) =>{
    const connection = db.connect()
    const statement = `select * from books`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.post('/',upload.any(),(request,response) =>{
    const{book_name,auther_name,category_id,part,publish_date,rating,status,descripation} = request.body
        const thumbnail = request.files[0].filename
        const bookFile = request.files[1].filename
        console.log(bookFile)
        console.log(request.files)
        const connection = db.connect()
        const statement = `insert into  books(book_name,auther_name,category_id,part,publish_date,rating,status,descripation,thumbnail,bookFile) values('${book_name}','${auther_name}','${category_id}',${part},'${publish_date}',${rating},'${status}','${descripation}','${thumbnail}','${bookFile}')`
        console.log(statement)
        connection.query(statement,(error,data)=>{
            connection.end()
             response.send(utils.createResult(error,data))
             console.log(error)
         })   
        
})


router.delete('/:id',(request,response)=>{
    const {id} = request.params
    const connection = db.connect()

    const statement = `delete from books where book_id = ${id}`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))
        console.log(error)
    })
})

router.get('/details/:id',(request,response)=>{
    const{id} = request.params
    const connection = db.connect()
    const statement = `select books.*, categories.category_title from books, categories where books.category_id = categories.category_id and book_id = ${id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        console.log(statement)
        response.send(utils.createResult(error,data))
        console.log(error)
    })
})


router.get('/category/:id',(request,response) =>{
    const{id} = request.params
    const connection = db.connect()
    const statement = `select * from books where category_id = ${id}`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))
        console.log(error)
    })
    })

    router.put('/:id',upload.any(),(request,response) =>{
    const{id} = request.params
    const{book_name,auther_name,category_id,part,publish_date,
        rating,status,descripation} = request.body
        console.log(request.body)
        const thumbnail = request.files[0].filename
        const bookFile = request.files[1].filename
        const connection = db.connect()
    const statement = `update books set book_name = '${book_name}', auther_name = '${auther_name}',category_id = '${category_id}',part = ${part},publish_date = '${publish_date}',rating = ${rating},status = '${status}',descripation = '${descripation}',thumbnail= '${thumbnail}',bookFile = '${bookFile}' where book_id = ${id}`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))
        console.log(error)
    })
})          
router.get('/comments/:id',(request,response) =>{
    const{id} = request.params
    const connection = db.connect()
    const statement = `select books.*,comments.book_id from comments where comments.book_id  = ${id}`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))
        console.log(error)
    })

})
router.post('/search',(request,response) =>{
    const{book_name} = request.body
    const connection = db.connect()
    const statement = `select * from books where book_name like '%${book_name}%'`
    connection.query(statement,(error,data) =>{
        connection.end()
        console.log(statement)
        response.send(utils.createResult(error,data))

    })
    
})




// router.post("/book",upload1.array('myPdf'),(request,response)=>{
//     //var filename=request.body.files;
//     var filename="";
//     request.files.forEach(element => {
//     filename = filename + " " + element.filename
//     });
//     response.send(filename)
// })


module.exports = router

  //         const thumbnail = request.files[0]
     //         const bookFile = request.files[1]
     //     console.log("Add in thumbnail")
     //    // const thumbnail = request.files[0]  //         const thumbnail = request.files[0]
     //         const bookFile = request.files[1]
     //     console.log("Add in thumbnail")
     //    // const thumbnail = request.files[0]
     // console.log(thumbnail)    