import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as toaster from 'toastr';
let CategoryAddComponent = class CategoryAddComponent {
    constructor(router, categoryService) {
        this.router = router;
        this.categoryService = categoryService;
    }
    ngOnInit() { }
    onAdd() {
        console.log(this.category_title);
        this.categoryService.addCategory(this.category_title)
            .subscribe(response => {
            console.log(response);
            if (response['status'] == 'Success') {
                //alert('register Successfully')
                toaster.success('added successfully');
                this.router.navigate(['/category-list']);
            }
            else {
                alert('error');
                console.log(response['error']);
            }
        });
    }
};
CategoryAddComponent = tslib_1.__decorate([
    Component({
        selector: 'Category-add',
        templateUrl: './category.add.component.html',
        styleUrls: ['./category.add.component.css']
    })
], CategoryAddComponent);
export { CategoryAddComponent };
//# sourceMappingURL=category.add.component.js.map