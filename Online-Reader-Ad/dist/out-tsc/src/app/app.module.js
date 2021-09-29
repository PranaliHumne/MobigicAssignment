import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserRegisterComponent } from './users/register/register.component';
import { UsersService } from './users/users.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './users/login/login.component';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './books/list/book.list.component';
import { BookService } from './books/book.service';
import { BookAddComponent } from './books/add/add.component';
import { CategoryListComponent } from './category/list/category.list.component';
import { CategoryService } from './category/category.service';
import { CategoryAddComponent } from './category/add/category.add.component';
import { UserListComponent } from './users/list/user.list.component';
import { BookEditComponent } from './books/edit/book.edit.componet';
import { CategoryEditComponent } from './category/edit/category.edit.component';
const routes = [
    { path: '', component: UserLoginComponent },
    { path: 'user-login', component: UserLoginComponent },
    { path: 'user-register', component: UserRegisterComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'book-list', component: BookListComponent },
    { path: 'book-add', component: BookAddComponent },
    { path: 'book-edit/:id', component: BookEditComponent },
    { path: 'category-list', component: CategoryListComponent },
    { path: 'category-add', component: CategoryAddComponent },
    { path: 'category-edit/:id', component: CategoryEditComponent }
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            UserRegisterComponent,
            UserLoginComponent,
            UserListComponent,
            BookListComponent,
            BookAddComponent,
            BookEditComponent,
            CategoryListComponent,
            CategoryAddComponent,
            CategoryEditComponent,
        ],
        imports: [
            HttpClientModule,
            BrowserModule,
            FormsModule,
            RouterModule.forRoot(routes)
        ],
        providers: [
            UsersService,
            BookService,
            CategoryService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map