import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as toaster from 'toastr';
let CategoryListComponent = class CategoryListComponent {
    constructor(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
        this.getAllCAtegory();
    }
    ngOnInit() { }
    getAllCAtegory() {
        this.categoryService.getAllCategory().subscribe(response => {
            if (response['status'] == 'Success') {
                this.categories = response['data'];
            }
            else {
                console.log(response['error']);
            }
        });
    }
    onDelete(category_id) {
        this.categoryService.deleteCategory(category_id)
            .subscribe(response => {
            if (response['status'] == 'Success') {
                toaster.success('deleted successfully');
                this.getAllCAtegory();
                console.log('data');
            }
            else {
                toaster.error('error');
                console.log(response['error']);
            }
        });
    }
    onSelect(category_id) {
        this.router.navigate(['/category-edit' + '/' + category_id]);
    }
};
CategoryListComponent = tslib_1.__decorate([
    Component({
        selector: 'category',
        templateUrl: './category.list.component.html',
        styleUrls: ['./category.list.component.css']
    })
], CategoryListComponent);
export { CategoryListComponent };
//# sourceMappingURL=category.list.component.js.map