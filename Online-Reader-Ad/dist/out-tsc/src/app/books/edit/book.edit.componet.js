import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as toastr from 'toastr';
let BookEditComponent = class BookEditComponent {
    constructor(router, categoryService, bookService, activatedRoute) {
        this.router = router;
        this.categoryService = categoryService;
        this.bookService = bookService;
        this.activatedRoute = activatedRoute;
        this.categories = [];
        this.book_name = '';
        this.auther_name = '';
        this.part = 0;
        this.publish_date = '';
        this.rating = 0;
        this.status = '';
        this.descripation = '';
        this.bookId = 0;
        this.categoryService.getAllCategory()
            .subscribe(response => {
            if (response['status'] == 'Success') {
                this.categories = response['data'];
                this.category_id = this.categories[0].id;
            }
            else {
                console.log(response['error']);
            }
        });
        this.bookId = this.activatedRoute.snapshot.params['id'];
        console.log(this.bookId);
        if (this.bookId) {
            this.bookService
                .getBookDetails(this.bookId)
                .subscribe(response => {
                if (response['status'] == 'Success') {
                    const book = response['data'];
                    console.log(book);
                    this.book_name = book[0].book_name;
                    this.auther_name = book[0].auther_name;
                    this.category_id = book[0].category_id;
                    this.part = book[0].part;
                    this.publish_date = book[0].publish_date;
                    this.rating = book[0].rating;
                    this.status = book[0].status;
                    this.descripation = book[0].descripation;
                    this.thumbnail = book[0].thubmnail;
                }
            });
        }
    }
    ngOnInit() { }
    onFileChange(event) {
        this.thumbnail = event.target.files[0];
    }
    onUpdate() {
        this.bookService.UpdateBooks(this.book_name, this.auther_name, this.category_id, this.part, this.publish_date, this.rating, this.status, this.descripation, this.bookId, this.thumbnail)
            .subscribe(response => {
            if (response['status'] == 'Success') {
                this.router.navigate(['/book-list']);
            }
            else {
                toastr.error(response['error']);
                console.log('error');
            }
        });
    }
    onReset() {
        this.bookId = this.activatedRoute.snapshot.params['id'];
        console.log(this.bookId);
        if (this.bookId) {
            this.bookService
                .getBookDetails(this.bookId)
                .subscribe(response => {
                if (response['status'] == 'Success') {
                    const book = response['data'];
                    console.log(book);
                    this.book_name = book[0].book_name;
                    this.auther_name = book[0].auther_name;
                    this.category_id = book[0].category_id;
                    this.part = book[0].part;
                    this.publish_date = book[0].publish_date;
                    this.rating = book[0].rating;
                    this.status = book[0].status;
                    this.descripation = book[0].descripation;
                    this.thumbnail = book[0].thubmnail;
                }
            });
        }
    }
    onCancel() {
        this.router.navigate(['/book-list']);
    }
};
BookEditComponent = tslib_1.__decorate([
    Component({
        selector: 'book-edit',
        templateUrl: 'book.edit.component.html',
        styleUrls: ['book.edit.component.css']
    })
], BookEditComponent);
export { BookEditComponent };
//# sourceMappingURL=book.edit.componet.js.map