import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:4000/categories';
    }
    getAllCategory() {
        return this.http.get(this.url);
    }
    addCategory(category_title) {
        const body = {
            category_title: category_title
        };
        return this.http.post(this.url, body);
    }
    deleteCategory(category_id) {
        return this.http.delete(this.url + '/' + category_id);
    }
    getCategoryDetails(category_id) {
        return this.http.get(this.url + '/details/' + category_id);
    }
    updateCategory(category_title, category_id) {
        const body = {
            category_title: category_title
        };
        return this.http.put(this.url + '/' + category_id, body);
    }
};
CategoryService = tslib_1.__decorate([
    Injectable()
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.service.js.map