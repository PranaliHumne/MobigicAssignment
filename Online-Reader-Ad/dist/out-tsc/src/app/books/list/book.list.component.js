import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as toaster from 'toastr';
let BookListComponent = class BookListComponent {
    constructor(router, bookService, activatedRoute) {
        this.router = router;
        this.bookService = bookService;
        this.activatedRoute = activatedRoute;
        this.books = [];
        this.bookId = 0;
        this.onAddBook();
        this.route = activatedRoute;
    }
    ngOnInit() {
    }
    onAddBook() {
        this.bookService.getAllBooks()
            .subscribe(response => {
            if (response['status'] == 'Success') {
                this.books = response['data'];
            }
            else {
                console.log(response['error']);
            }
        });
    }
    onDelete(book_id) {
        this.bookService.DeleteBooks(book_id)
            .subscribe(response => {
            if (response['status'] == 'Success') {
                toaster.error('deleted successfully');
                this.onAddBook();
            }
            else {
                toaster.error('error');
                console.log(response['error']);
            }
        });
    }
    onSelect(book_id) {
        this.router.navigate(['/book-edit' + '/' + book_id]);
    }
};
BookListComponent = tslib_1.__decorate([
    Component({
        selector: 'list-books',
        templateUrl: './book.list.component.html',
        styleUrls: ['./book.list.component.css']
    })
], BookListComponent);
export { BookListComponent };
//# sourceMappingURL=book.list.component.js.map