import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import * as toaster  from 'toastr'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'list-books',
    templateUrl: './book.list.component.html',
    styleUrls: ['./book.list.component.css']
})

export class BookListComponent implements OnInit {
    books = []
    route :ActivatedRoute
    bookId = 0
    
    constructor(private router : Router,
        private bookService:BookService,
        private activatedRoute: ActivatedRoute) { 
       this.onAddBook()
       this.route = activatedRoute
    }

    
    ngOnInit() { 
        this.onAddBook()
    }

    onAddBook(){
        this.bookService.getAllBooks()
       .subscribe(response =>{
           if(response['status']=='Success')
           {
               this.books = response['data']
           }
           else
           {
               console.log(response['error'])
           }
        
       })
    }

    onDelete(book_id:number){
        this.bookService.DeleteBooks(book_id)
        .subscribe(response =>{
            if(response['status'] == 'Success')
           {   
            toaster.error('deleted successfully')
            this.onAddBook()
           }
           else
           {
              toaster.error('error')
              console.log(response['error'])
           }
        })
    }

    onSelect(book_id:number){
        this.router.navigate(['/book-edit'+'/'+book_id])
    }

    onSelect1(book_id:number){
        this.router.navigate(['/book-detail'+'/'+book_id])
    }

    
}