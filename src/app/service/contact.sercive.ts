import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Address } from '../models/contact/Contact';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class contact {

    private endpoint = 'http://localhost:8080/contact/'

    constructor(private client: HttpClient) { }

    addContact ( contact: Contact) : Observable<Contact> {
        return this.client.post<Contact>(this.endpoint, contact);
    }

    updateContact( contact: Contact): Observable<Contact> {
        return this.client.put<Contact>(this.endpoint, contact);
    }

    deleteContatc( contact: Contact): Observable<Contact> {
        return this.client.delete<Contact>(this.endpoint, contact);
    }

    getContactsById( id: number): Observable<Contact[]> {
        return this.client.get<Contacts[]>(this.endpoint + 'search/' + id);
    }

    getContactsByEmail( email: string): Observable<Contact[]> {
        return this.client.get<Contacts[]>(this.endpoint + 'search/' + id);
    }

    getContactsByPhoneNumber(phoneNumber: string) : Observable<Contact[]> {
        return this.client.get<Contacts[]>(this.endpoint + 'search/' + phoneNumber);
    }

}
