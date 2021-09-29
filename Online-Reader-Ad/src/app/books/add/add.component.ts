import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
//import { Router } from '@angular/router';
import * as toaster  from 'toastr'

@Component({
    selector: 'Add-books',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})

export class BookAddComponent implements OnInit {
    categories = []
    
    book_name = ''
    auther_name = ''
    category_id : number
    part  = 0
    publish_date = ''
    rating = 0
    status = ''
    descripation =''
    thumbnail: any
    bookFile: any

    bookID = 0

    constructor(private router: Router,
        private bookService:BookService,
        private activatedRoute: ActivatedRoute
        ) {
           
    }


    ngOnInit() { }

    onSelectFile(event) {
        console.log("Inside Sellect File")
        this.thumbnail = event.target.files[0]
        console.log(event.target.files[0]+this.thumbnail) 
        
      }    


    onSelectFile2(event) {
        console.log("Inside Select2 File")
        this.bookFile = event.target.files[0]  
        console.log(event.target.files[0]+this.bookFile) 
        
      }
      
        

    onAdd() {
        this.bookService
        .AddBooks(this.book_name,this.auther_name,this.category_id,this.part,this.publish_date ,this.rating,this.status,this.descripation,this.thumbnail)
        .subscribe(response =>{
            console.log(response['data']);
            if(response['status'] == 'Success'){
                //alert('register Successfully')
                toaster.success('added successfully')
                this.router.navigate(['/book-list'])
            }else{
                alert('error')
                console.log(response['error'])
                
            }
        })
   
    }
    onReset(){
        this.book_name = ''
        this.auther_name = ''
        this.category_id= this.categories[0].id
        this.part = 0
        this.rating = 0
        this.status  =  ''
        this.descripation =  ''
    }
    onCancel(){
        this.router.navigate(['/book-list'])

    }

   
}