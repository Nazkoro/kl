import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo} from '../interfaces/todo.interface';
@Component({
    selector: 'todoItem',
    template: `
    <table class="table table-striped">
    <thead>
        <tr>
            <th>Дата</th>
            <th>назваеие</th>
            <th>описание</th>
        </tr>
    </thead>
    <tbody>
  
        <tr>
            <td>{{todoItem.date | date}}</td>
            <td>{{todoItem.title}}</td>
            <td>{{todoItem.task}}</td>   
       </tr>
       <button (click)="change(todoItem)">Back</button>
    </tbody>
    </table>

    `
})
export class TodoItemComponent { 
    @Input() todoItem
    @Output() onChanged = new EventEmitter<any>();
    change(todoItem:any) {
        todoItem = undefined;
        this.onChanged.emit(todoItem);
    }
}

