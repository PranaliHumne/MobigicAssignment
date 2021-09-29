import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserRegisterComponent = class UserRegisterComponent {
    constructor(router, usersService) {
        this.router = router;
        this.usersService = usersService;
        this.full_name = '';
        this.email = '';
        this.User_name = '';
        this.password = '';
        this.Confirm_password = '';
    }
    ngOnInit() { }
    onRegister() {
        console.log("Inside Register");
        if (this.full_name.length == 0) {
            alert('enter valid username');
        }
        else if (this.User_name.length == 0) {
            alert('enter valid UserName');
        }
        else if (this.email.length == 0) {
            alert('enter valid email');
        }
        else if (this.password.length == 0) {
            alert('enter valid password');
        }
        //else if(this.password != this.Confirm_password){
        //     alert('password not match')
        // }
        else {
            this.usersService.registerUser(this.full_name, this.User_name, this.email, this.password)
                .subscribe(response => {
                console.log(response);
                if (response['status'] == 'Success') {
                    alert('register Successfully');
                    this.router.navigate(['/user-login']);
                }
                else {
                    alert('error');
                    console.log(response['error']);
                }
            });
        }
    }
};
UserRegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'user-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], UserRegisterComponent);
export { UserRegisterComponent };
//# sourceMappingURL=register.component.js.map