import { Component , OnInit} from '@angular/core';
import { Todo} from './components/todo/interfaces/todo.interface';
import { HttpClient} from '@angular/common/http';
@Component({
    selector: 'todo-app',
    template: `
    <div *ngIf="todoItem">
    <h3>Текущая задача!</h3>
    <todoItem [todoItem]="todoItem" (onChanged)="onChanged($event)"></todoItem>
    </div>
    <div *ngIf="!todoItem">
        <h3>Список дел!</h3>
        <todolist-app [todos]="todos" (onChanged)="onChanged($event)"></todolist-app>
    </div>
    `
})
export class TodoComponent implements OnInit { 
    todoItem?: Todo;
 
    constructor(private http: HttpClient){}
      
    ngOnInit(){
          
        this.http.get('http://localhost:3000/api/posts').subscribe((data:any) => console.log(data));
    }
    todos: Todo[] = 
    [
        { date: new Date(2021, 11, 1), title: "fix bag 1", task: "remove legacy code" },
        { date: new Date(2021, 11, 2), title: "fix bag 2", task: "add something code" },
        { date: new Date(2021, 11, 3), title: "fix bag 3", task: "add sum function" },
        { date: new Date(2021, 11, 4), title: "fix bag 4", task: "deploy fix code" }
    ];
    onChanged(item: Todo){
        this.todoItem = item
        
    }
}