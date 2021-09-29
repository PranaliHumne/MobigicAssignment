import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
let UsersService = class UsersService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'http://localhost:4000/users';
    }
    canActivate(route, state) {
        // check if user is already logged in
        // if (sessionStorage['login_status'] == '1') {
        if (localStorage['login_status'] == '1') {
            return true;
        }
        // if user is not logged yet, load the login page
        this.router.navigate(['/user-login']);
        return false;
    }
    getAllUser() {
        return this.http.get(this.url);
    }
    loginUser(User_name, password) {
        const body = {
            User_name: User_name,
            password: password
        };
        return this.http.post(this.url + '/login', body);
    }
    registerUser(full_name, User_name, email, password) {
        const body = {
            full_name: full_name,
            User_name: User_name,
            email: email,
            password: password
        };
        return this.http.post(this.url + '/register', body);
    }
    DeleteUser(User_id) {
        return this.http.delete(this.url + '/' + User_id);
    }
};
UsersService = tslib_1.__decorate([
    Injectable()
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map