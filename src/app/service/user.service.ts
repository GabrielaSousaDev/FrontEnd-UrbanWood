import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  setUser(user: any){
    localStorage.setItem('user', JSON.stringify(user))
  }
  getUser(): any{
    return localStorage.getItem('user')
  }

  login(userLogin: any): Observable<Login>{
    return this.http.post<Login>('http://localhost:8080/', userLogin);
  }
}
