import { allClient } from './../models/allClient';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientRefresh = new EventEmitter<string>()

  endPointClient: string = 'http://localhost:8080/client/'

  constructor(private http: HttpClient) {}

  //  POST  //

  addClient(postData: allClient): Observable<allClient> {
    return this.http.post<allClient>(this.endPointClient, postData);
  }

  //  GET  //

  

  //  PUT  //


}
