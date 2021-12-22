import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { HttpService }   from './http.service';

import { todoListModule }   from './components/todo/todoList/todoList.module';
import { todoItemModule }   from './components/todo/todoitem/toItem.module';

import { AppComponent }   from './app.component';
import { TodoComponent }   from './todo.component';
import { NotFoundComponent }   from './not-found.component';

const appRoutes: Routes =[
    { path: 'todos', component: TodoComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, HttpClientModule, FormsModule, todoListModule, todoItemModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent ,TodoComponent,NotFoundComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }