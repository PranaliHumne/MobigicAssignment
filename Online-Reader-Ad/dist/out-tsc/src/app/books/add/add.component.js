import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import * as toaster from 'toastr';
let BookAddComponent = class BookAddComponent {
    constructor(router, bookService, categoryService, activatedRoute) {
        this.router = router;
        this.bookService = bookService;
        this.categoryService = categoryService;
        this.activatedRoute = activatedRoute;
        this.categories = [];
        this.book_name = '';
        this.auther_name = '';
        this.part = 0;
        this.publish_date = '';
        this.rating = 0;
        this.status = '';
        this.descripation = '';
        // bookFile: any
        this.bookID = 0;
        this.categoryService.getAllCategory()
            .subscribe(response => {
            if (response['status'] == 'Success') {
                this.categories = response['data'];
                console.log(response['data']);
                this.category_id = this.categories[0].id;
                console.log(response['data']);
            }
            else {
                console.log(response['error']);
            }
        });
    }
    ngOnInit() { }
    onSelectFile(event) {
        this.thumbnail = event.target.files[0];
    }
    onAdd() {
        this.bookService
            .AddBooks(this.book_name, this.auther_name, this.category_id, this.part, this.publish_date, this.rating, this.status, this.descripation, this.thumbnail)
            .subscribe(response => {
            console.log(response['data']);
            if (response['status'] == 'Success') {
                //alert('register Successfully')
                toaster.success('added successfully');
                this.router.navigate(['/book-list']);
            }
            else {
                alert('error');
                console.log(response['error']);
            }
        });
    }
    onReset() {
        this.book_name = '';
        this.auther_name = '';
        this.category_id = this.categories[0].id;
        this.part = 0;
        this.rating = 0;
        this.status = '';
        this.descripation = '';
    }
    onCancel() {
        this.router.navigate(['/book-list']);
    }
};
BookAddComponent = tslib_1.__decorate([
    Component({
        selector: 'Add-books',
        templateUrl: './add.component.html',
        styleUrls: ['./add.component.css']
    })
], BookAddComponent);
export { BookAddComponent };
//# sourceMappingURL=add.component.js.map