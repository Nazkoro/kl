import { Component , OnInit} from '@angular/core';
import { Todo} from './components/todo/interfaces/todo.interface';
import { HttpService} from './http.service';
import { HttpClient} from '@angular/common/http';
import {User} from './user';

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
        <form id="post-form" method="post" action="/add-post">
            <div >
            <label>Post Title
                <input type="text" class="form-control" name="title" [(ngModel)]="user.title">
            </label>
            <br>
            <label>Author
                <input type="text" class="form-control" name="author" [(ngModel)]="user.author">
            </label>
            </div>
            <div class="form-text">
            <label>Post Text
                <textarea name="text" [(ngModel)]="user.text"></textarea>
            </label>
            </div>
            <div class="form-button">
                <button class="btn btn-default" (click)="submit(user)">Отправить</button>
            </div>
        </form>
    <div>{{this.httpService.errorMessage}}</div>
        <div *ngIf="done">
        <div>Получено от сервера:</div>
        <div>Имя: {{receivedUser.name}}</div>
        <div>Возраст: {{receivedUser.age}}</div>
    </div>

    `
})
export class TodoComponent  { 
    todoItem?: Todo;

     users: User[]=[];
     error:any;




     user: User = new User("", "",""); // данные вводимого пользователя
     receivedUser: User | undefined; // полученный пользователь
     done: boolean = false;
     
    constructor(public httpService: HttpService){}
    
       

    // implements OnInit
//     <ul>
//     <li *ngFor="let user of users">
//     <p>title: {{user?.title}}</p>
//     <p>author: {{user?.author}}</p>
//     <p>text: {{user?.text}}</p>
//     </li>
// </ul>

    // ngOnInit(){
          
    //     this.httpService.getUsers().subscribe((data: any) => this.users=data);
    // }
 
    // constructor(private http: HttpClient){}
    // ngOnInit(){
          
    //     this.http.get('http://localhost:3000/api/posts').subscribe((data:any) => this.users=data);
    // }
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
    submit(user: User){
        this.httpService.postData(user)
                .subscribe(
                    (data: any) => {console.log(data)},
                    error => console.log(error)
                );
    }
}