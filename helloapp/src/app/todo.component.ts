import { Component} from '@angular/core';
  
@Component({
    selector: 'todo-app',
    template: `<h3>todo app</h3>
    <todolist-app [todos]="todos" (onChanged)="onChanged($event)"></todolist-app>
    <h2>todoIem: {{todo}}</h2>
    `
})
export class TodoComponent { 
    todo = {}
    todos = 
    [
        { date: new Date(2021, 11, 1), title: "fix bag 1", task: "remove legacy code" },
        { date: new Date(2021, 11, 2), title: "fix bag 2", task: "add something code" },
        { date: new Date(2021, 11, 3), title: "fix bag 3", task: "add sum function" },
        { date: new Date(2021, 11, 4), title: "fix bag 4", task: "deploy fix code" }
    ];
    onChanged(item:any){
        this.todo = item
        console.log(item);
        console.log(this.todo);
        
    }
}