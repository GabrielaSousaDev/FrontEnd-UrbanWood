import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  ContactRefresh = new EventEmitter<string>()

  endPointContact: string = 'http://localhost:8080/client/'

  constructor(private http: HttpClient) {}

  //POST//
  
  addContact(postData: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.endPointContact, postData);
  }
  //  GET  //

  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(this.endPointContact + id);
  }


  //  PUT  //

  updateClient(postData: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.endPointContact, postData);
  }

  // DELETE //
  deleteClient(id: number): Observable<Contact> {
    return this.http.delete<Contact>(this.endPointContact + id);
  }
}