import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class BookService{
    url = 'http://localhost:4000/books'

    constructor(private http: HttpClient) {}

    getAllBooks(){
        return this.http.get(this.url)
    }

    AddBooks(book_name : string,auther_name : string,category_id:number,part : number,publish_date : string ,rating : number,status : string,descripation : string, file1 :  any){
           
        const body = new FormData()
            body.append('thumbnail',file1)
            body.append('book_name',book_name)
            body.append('auther_name',auther_name)
            body.append('part',''+part) 
            body.append('category_id', ''+3)
            body.append('publish_date',publish_date)
            body.append('rating',''+rating)
            body.append('status',status)
            body.append('descripation',descripation)
            
            return this.http.post(this.url,body)
    }

    DeleteBooks(book_id : number){
        return this.http.delete(this.url+'/'+book_id)
    }

    UpdateBooks(book_name : string,auther_name : string,category_id:number,
        part : number,publish_date : string ,rating : number,status : string,
        descripation : string,book_id:number,file:any,file1:any)
        {
            const body = new FormData()
             body.append('bookFile',file1)
             body.append('thumbnail', file)
             body.append('book_name',book_name)
             body.append('auther_name',auther_name)
             body.append('part',''+part)
             body.append('category_id', ''+category_id)
             body.append('publish_date',publish_date)
             body.append('rating',''+rating)
             body.append('status',status)
             body.append('descripation',descripation)
            return this.http.put(this.url+'/'+book_id,body)

    }

    getBookDetails(book_id : number){
        return this.http.get(this.url+'/details/'+book_id)
    }
    getBook(book_id:number){
        return this.http.get(this.url+'/getbookId/'+book_id)
    }


    
}