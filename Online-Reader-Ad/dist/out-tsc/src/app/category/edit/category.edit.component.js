import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as toastr from 'toastr';
let CategoryEditComponent = class CategoryEditComponent {
    constructor(router, categoryService, activatedRoute) {
        this.router = router;
        this.categoryService = categoryService;
        this.activatedRoute = activatedRoute;
        this.category_title = '';
        this.categoryId = 0;
        this.categoryId = this.activatedRoute.snapshot.params['id'];
        console.log(this.categoryId);
        if (this.categoryId) {
            this.categoryService
                .getCategoryDetails(this.categoryId)
                .subscribe(response => {
                if (response['status'] == 'Success') {
                    const category = response['data'];
                    this.category_title = category[0].category_title;
                }
            });
        }
    }
    ngOnInit() { }
    onUpdate() {
        this.categoryService.updateCategory(this.category_title, this.categoryId)
            .subscribe(response => {
            if (response['status'] == 'Success') {
                this.router.navigate(['/category-list']);
            }
            else {
                toastr.error(response['error']);
                console.log('error');
            }
        });
    }
    onReset() {
        this.categoryId = this.activatedRoute.snapshot.params['id'];
        console.log(this.categoryId);
        if (this.categoryId) {
            this.categoryService
                .getCategoryDetails(this.categoryId)
                .subscribe(response => {
                if (response['status'] == 'Success') {
                    const category = response['data'];
                    this.category_title = category[0].category_title;
                }
            });
        }
    }
    onCancel() {
        this.router.navigate(['/book-list']);
    }
};
CategoryEditComponent = tslib_1.__decorate([
    Component({
        selector: 'category-edit',
        templateUrl: './category.edit.component.html',
        styleUrls: ['./category.edit.component.css']
    })
], CategoryEditComponent);
export { CategoryEditComponent };
//# sourceMappingURL=category.edit.component.js.map