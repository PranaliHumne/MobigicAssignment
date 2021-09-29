import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
//import { Router } from '@angular/router';
import * as toastr from 'toastr'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'user-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class UserLoginComponent implements OnInit {
    User_name = ''
    password = ''
    componentToLaunch = 'book-list'
    rememberme = false


    constructor( private activatedRoute: ActivatedRoute,
        private router: Router,
        private userService: UsersService) { 
            console.log(activatedRoute.snapshot.queryParams)
             this.componentToLaunch = activatedRoute.snapshot.queryParams['screen']
        }

    ngOnInit() { }

    onLogin(){
        if(this.User_name.length == 0){
            alert('enter valid password')
        }else if(this.password.length == 0){
            alert('enter valid password')
        }else{
            console.log(this.password,this.User_name)
            this.userService
            .loginUser(this.User_name,this.password)
            .subscribe(response =>{
                console.log(response)
                if(response['status'] == 'Success'){
                    //alert('authenticated')
                    toastr.success('authenticated')

                    if (this.rememberme) {
                        sessionStorage['login_status'] = '1'
                    }
                    localStorage['login_status'] = '1'

                    localStorage['User_name'] = response['data']['User_name']
                    localStorage['User_id'] = response['data']['User_id']
                    console.log(response['data'])
                    this.router.navigate(['/book-list'])
                }else{
                    alert('please  enter valid  UserName and Password')
                    console.log(response['error'])
                }
            })
        }

        
    }
}