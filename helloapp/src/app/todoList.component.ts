import { Component, EventEmitter, Input, Output} from '@angular/core';
  
@Component({
    selector: 'todolist-app',
    template: `<h3>todoList app</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Дата
                            назваеие
                            описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let item of todos">
                        <button (click)="change(item)">
                        <td>{{item.date | date}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.task}}</td>
                        </button>
                        

                        </tr>
                    </tbody>
                </table>
    `
})
export class TodoListComponent { 
    @Input() todos
    @Output() onChanged = new EventEmitter<any>();
    change(item:any) {
        this.onChanged.emit(item);
    }

}