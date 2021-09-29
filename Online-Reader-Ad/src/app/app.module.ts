import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserRegisterComponent } from './users/register/register.component';
import { UsersService } from './users/users.service';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './users/login/login.component';
import { RouterModule, Route } from '@angular/router';
import { BookListComponent } from './books/list/book.list.component';
import { BookService } from './books/book.service';
import { BookAddComponent } from './books/add/add.component';









const routes: Route[] =
[
  {path:'', component: UserLoginComponent},
  {path: 'user-login', component: UserLoginComponent },
  {path: 'user-register', component: UserRegisterComponent},

  {path: 'book-list', component: BookListComponent, canActivate:[UsersService]},
  {path: 'book-add', component: BookAddComponent,canActivate:[UsersService]},  
  
]

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
   

    BookListComponent,
    BookAddComponent,

  ],
  imports:
  [
  HttpClientModule,
  BrowserModule,
  FormsModule,
  RouterModule.forRoot(routes)
  
  ],
  providers: [
    UsersService,
    BookService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
