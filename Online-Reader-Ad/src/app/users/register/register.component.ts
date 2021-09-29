import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
    selector: 'user-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class UserRegisterComponent  implements OnInit {
    full_name = ''
    email = ''
    User_name = ''
    password = ''
    Confirm_password = ''

    constructor(private router : Router,
        private usersService:UsersService) { }

    ngOnInit() { }

    onRegister() {
        console.log("Inside Register");
        if(this.full_name.length == 0){
            alert('enter valid username')
        }else if(this.User_name.length == 0)
        {
            alert('enter valid UserName')
        }else if(this.email.length == 0){
            alert('enter valid email')
        }else if(this.password.length == 0){
            alert('enter valid password')
        }
        //else if(this.password != this.Confirm_password){
        //     alert('password not match')
        // }
        else{
            this.usersService.registerUser(this.full_name,this.User_name,this.email,this.password)
            .subscribe(response =>{
                console.log(response);
                if(response['status'] == 'Success'){
                    alert('register Successfully')
                    this.router.navigate(['/user-login'])
                }else{
                    alert('error')
                    console.log(response['error'])
                }
            })
        }

    }
}