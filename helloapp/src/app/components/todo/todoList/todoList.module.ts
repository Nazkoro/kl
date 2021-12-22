import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { TodoListComponent }   from './todoList.component';

// import { ChildComponent} from './child.component'

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [  TodoListComponent],
    exports: [ TodoListComponent] 
})
export class todoListModule { }