import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { TodoComponent }   from './todo.component';
import { TodoListComponent }   from './todoList.component';
import { NotFoundComponent }   from './not-found.component';
// import { ChildComponent} from './child.component'
const appRoutes: Routes =[
    
    { path: 'todos', component: TodoComponent},
    { path: 'todoList', component: TodoListComponent},
    { path: '**', component: NotFoundComponent }
];
@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent ,TodoComponent, TodoListComponent, NotFoundComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }