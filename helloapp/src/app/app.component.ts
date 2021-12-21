
import { Component } from '@angular/core';
     
// @Component({
//     selector: 'my-app',
//     template: `<label>Введите имя:</label>
//                  <input [(ngModel)]="name" placeholder="name">
//                  <h1>Добро пожаловать {{name}}!</h1>`
// })

  
@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>Маршрутизация в Angular 13</h1>
                    <router-outlet></router-outlet>
                </div>`
})

export class AppComponent { }
//====================================================================
// import { Component } from '@angular/core';
      
// @Component({
//     selector: 'my-app',
//     template: `<p>Привет {{name}}</p>
//                 <input type="text" [(ngModel)]="name" /> <br><br>
//                 <input type="text" [(ngModel)]="name" />`
// })
// export class AppComponent { 
//     name:string="Tom";
// }
//====================================================================
// import { Component } from '@angular/core';
      
// @Component({
//     selector: 'my-app',
//     template: `<p>Количество кликов {{count}}</p>
//                 <button (click)="increase()">Click++</button>
//                 <button (click)="dec()">Click--</button>
//                 <p>Привет {{name}}</p>
//                 <input type="text" [(ngModel)]="name" /> <br><br>
//                 <input type="text" [(ngModel)]="name" />
//                 `
// })
// export class AppComponent { 
//     count: number=0;
//     name: string="Bob";
//     increase() : void {
//         this.count++;
//     }
//     dec() : void {
//         this.count--;
//     }
// }
//=================================================================
// import { Component} from '@angular/core';
        
// @Component({
//     selector: 'my-app',
//     template: `<div [class.isredbox]="isRed"></div>
//             <div [class.isredbox]="!isRed"></div>
//             <input type="checkbox" [(ngModel)]="isRed" />`,
//     styles: [`
//         div {width:50px; height:50px; border:1px solid blue}
//          .isredbox{background-color:red;}
//     `]
// })
// export class AppComponent{ 
      
//     isRed = false;
// }


// import { Component} from '@angular/core';
        
// @Component({
//     selector: 'my-app',
//     template: `<div [class]="red"></div>`,
//     styles: [`
//         div {width:50px; height:50px; border:1px solid #ccc}
//          .isredbox{background-color:red;}
//     `]
// })
// export class AppComponent{ 
      
//     red = "isredbox"
// }

// import { Component} from '@angular/core';
        
// @Component({
//     selector: 'my-app',
//     template: `<div [style.backgroundColor]="isRed? 'red' : 'green'"></div>
//     <div [style.background-color]="!isRed ? 'red' : 'green'"></div>
//     <input type="checkbox" [(ngModel)]="isRed" />`,
//     styles: [`
//         div {width:50px; height:50px; border:1px solid #ccc}
//     `]
// })
// export class AppComponent{ 
      
//     isRed = false;
// }

//======================
// import { Component } from '@angular/core';
      
// @Component({
//     selector: 'my-app',
//     template: `<child-comp [userName]="name" [userAge]="age"></child-comp>
//                 <input type="text" [(ngModel)]="name" />
//                 <input type="number" [(ngModel)]="age" />
//                 `,
//     styles: [`h2, p {color:yellow;}`]
// })
// export class AppComponent { 
//     name:string="Tom";
//     age:number = 25;
// }
//=========================================

// import { Component } from '@angular/core';
       
// @Component({
//     selector: 'my-app',
//     template: `<h2>Количество кликов: {{clicks}}</h2>
//               <child-comp (onChanged)="onChanged($event)"></child-comp>`
// })
// export class AppComponent { 
     
//     clicks:number = 0;
//     onChanged(increased:any){
//         increased==true?this.clicks++:this.clicks--;
//     }
// }

// import { Component} from '@angular/core';
       
// @Component({
//     selector: 'my-app',
//     template: `<child-comp [(userName)]="name"></child-comp>
//                 <div>Выбранное имя: {{name}}</div>`
// })
// export class AppComponent { 
 
//     name: string = "";
// }

