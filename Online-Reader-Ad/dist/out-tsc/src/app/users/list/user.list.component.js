import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as toaster from 'toastr';
let UserListComponent = class UserListComponent {
    constructor(router, usersService) {
        this.router = router;
        this.usersService = usersService;
        this.users = [];
        this.getUsers();
    }
    ngOnInit() { }
    getUsers() {
        this.usersService.getAllUser()
            .subscribe(response => {
            if (response['status'] == 'Success') {
                this.users = response['data'];
            }
            else {
                console.log(response['error']);
            }
        });
    }
    DeleteUser(User_id) {
        this.usersService.DeleteUser(User_id)
            .subscribe(response => {
            if (response['status'] == 'Success') {
                toaster.Success('Deleted Successfully');
            }
            else {
                console.log(response['error']);
                toaster.error('Error');
            }
        });
    }
};
UserListComponent = tslib_1.__decorate([
    Component({
        selector: 'users-list',
        templateUrl: 'user.list.component.html',
        styleUrls: ['user.list.component.css']
    })
], UserListComponent);
export { UserListComponent };
//# sourceMappingURL=user.list.component.js.map