import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { TodoItemComponent }   from './toItem.component';

// import { ChildComponent} from './child.component'

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [  TodoItemComponent],
    exports: [ TodoItemComponent] 
})
export class todoItemModule { }