import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import * as toastr from 'toastr';
let UserLoginComponent = class UserLoginComponent {
    constructor(activatedRoute, router, userService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
        this.User_name = '';
        this.password = '';
        this.componentToLaunch = 'book-list';
        console.log(activatedRoute.snapshot.queryParams);
        this.componentToLaunch = activatedRoute.snapshot.queryParams['screen'];
    }
    ngOnInit() { }
    onLogin() {
        if (this.User_name.length == 0) {
            alert('enter valid password');
        }
        else if (this.password.length == 0) {
            alert('enter valid password');
        }
        else {
            console.log(this.password, this.User_name);
            this.userService
                .loginUser(this.User_name, this.password)
                .subscribe(response => {
                console.log(response);
                if (response['status'] == 'Success') {
                    //alert('authenticated')
                    toastr.success("Authenticated");
                    localStorage['login_status'] = '1';
                    localStorage['User_name'] = response['data']['User_name'];
                    localStorage['User_id'] = response['data']['User_id'];
                    console.log(response['data']);
                    this.router.navigate(['/book-list']);
                }
                else {
                    alert('please  enter valid  UserName and Password');
                    console.log(response['error']);
                }
            });
        }
    }
};
UserLoginComponent = tslib_1.__decorate([
    Component({
        selector: 'user-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], UserLoginComponent);
export { UserLoginComponent };
//# sourceMappingURL=login.component.js.map