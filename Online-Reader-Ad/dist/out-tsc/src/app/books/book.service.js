import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let BookService = class BookService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:4000/books';
    }
    getAllBooks() {
        return this.http.get(this.url);
    }
    AddBooks(book_name, auther_name, category_id, part, publish_date, rating, status, descripation, file) {
        const body = new FormData();
        // body.append('bookFile',file1)
        body.append('thumbnail', file);
        body.append('book_name', book_name);
        body.append('auther_name', auther_name);
        body.append('part', '' + part);
        body.append('category_id', '' + category_id);
        body.append('publish_date', publish_date);
        body.append('rating', '' + rating);
        body.append('status', status);
        body.append('descripation', descripation);
        return this.http.post(this.url, body);
    }
    DeleteBooks(book_id) {
        return this.http.delete(this.url + '/' + book_id);
    }
    UpdateBooks(book_name, auther_name, category_id, part, publish_date, rating, status, descripation, book_id, file) {
        const body = new FormData();
        // body.append('bookFile',file1)
        body.append('thumbnail', file);
        body.append('book_name', book_name);
        body.append('auther_name', auther_name);
        body.append('part', '' + part);
        body.append('category_id', '' + category_id);
        body.append('publish_date', publish_date);
        body.append('rating', '' + rating);
        body.append('status', status);
        body.append('descripation', descripation);
        return this.http.put(this.url + '/' + book_id, body);
    }
    getBookDetails(book_id) {
        return this.http.get(this.url + '/details/' + book_id);
    }
    getBook(book_id) {
        return this.http.get(this.url + '/getbookId/' + book_id);
    }
};
BookService = tslib_1.__decorate([
    Injectable()
], BookService);
export { BookService };
//# sourceMappingURL=book.service.js.map