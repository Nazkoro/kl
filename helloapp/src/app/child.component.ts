// import { Component, Input } from '@angular/core';
      
// @Component({
//     selector: 'child-comp',
//     template: ` <p>Имя пользователя: {{userName}}</p>
//                 <p>How Old {{userAge}}</p>`,
//     styles: [`h2, p {color:navy;}`]
// })
// export class ChildComponent { 
//     @Input() userName: string = '';
//     _userAge: number = 0

//     @Input()
//     set userAge(age:number) {
//         if(age<0)
//             this._userAge = 0;
//         else if(age>100)
//             this._userAge = 100
//         else
//             this._userAge = age

//     }
//     get userAge() { return this._userAge;}
// }

// import { Component, EventEmitter, Input, Output} from '@angular/core';
       
// @Component({
//     selector: 'child-comp',
//     template: `<button (click)="change(true)">+</button>
//                <button (click)="change(false)">-</button>`
// })
// export class ChildComponent{ 
     
//     @Output() onChanged = new EventEmitter<boolean>();
//     change(increased:any) {
//         this.onChanged.emit(increased);
//     }
// }


// import { Component, Input, Output, EventEmitter } from '@angular/core';
       
// @Component({
//     selector: 'child-comp',
//     template: `<input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />`
// })
// export class ChildComponent{ 
     
//     @Input() userName:string = "";
//     @Output() userNameChange = new EventEmitter<string>();
//     onNameChange(model: string){
         
//         this.userName = model;
//         this.userNameChange.emit(model);
//     }
//}
