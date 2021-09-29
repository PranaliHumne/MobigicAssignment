import{Injectable} from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


    @Injectable()
export class UsersService implements CanActivate {

    url = 'http://localhost:4000/users'

    constructor(private http: HttpClient,
        private router:Router){} 

        canActivate(route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot) {
        // check if user is already logged in
      // if (sessionStorage['login_status'] == '1') {
        if (localStorage['login_status'] == '1') {
          return true
        }
        // if user is not logged yet, load the login page
    this.router.navigate(['/user-login'])
    return false
  }
    
    getAllUser(){
        return this.http.get(this.url)
    }


    loginUser(User_name:string, password: string){
        const body = {
            User_name: User_name,
            password : password 
        }
        return this.http.post(this.url + '/login',body)
    }

    registerUser(full_name: string, User_name: string, email: string,password: string) {
        const body = {
            full_name: full_name,
            User_name : User_name,
            email: email,
            password:password
        }
        return this.http.post(this.url + '/register',body)
    }

    DeleteUser(User_id : number){
        return this.http.delete(this.url+'/'+User_id)
    }
}