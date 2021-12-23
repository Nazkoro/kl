// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {User} from './user';
// import {Observable, throwError} from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

// @Injectable({providedIn: 'root'})
// export class HttpService {
//     errorMessage: String = "";
//     constructor(private http: HttpClient){ }

//     getData() {
//         return this.http.get('http://localhost:3000/api/posts')
//     }
// }

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class HttpService {
  errorMessage: String = "";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get("http://localhost:3000/api/posts").pipe(
      map((data: any) => {
        let usersList = data;

        return usersList.map(function (user: any): User {
          return new User(user.title, user.author, user.text);
        });
      }),
      catchError((err) => {
        console.log(err);
        this.errorMessage = err.message;
        return [];
      })
    );
  }
  postData(user: any): Observable<void> {
    // const body = {title: user.title,author: user.author,text: user.text};
    console.log(1111)
    console.log( user)
    return this.http.post<void>("http://localhost:3000/api/post", user);
  }
}
