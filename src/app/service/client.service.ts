import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class ClientService {

    private endpoint = 'http://localhost:8080/client/'

    constructor(private client: HttpClient) { }

   /* addClient ( client: Client) : Observable<Client> {
        return this.client.post<Client>(this.endpoint, client);
    }

    updateClient( client: Client): Observable<Client> {
        return this.client.put<Client>(this.endpoint, client);
    }
    getClientsById(id: number): Observable<Client[]> {
        return this.client.get<Client[]>(this.endpoint + 'search/' + id);
    }

    getClientsByCpf(cpf: string): Observable<Client[]> {
        return this.client.get<Client[]>(this.endpoint + 'search/' + cpf);
    }

    getClientsByName(name: string): Observable<Client[]> {
        return this.client.get<Client[]>(this.endpoint + 'search/' + name);
    }

    getClientsW9ByName(name: string): Observable<Client[]> {
        return this.client.get<Client[]>(this.endpoint + 'search/' + name);
    }

    getClientsW10ById(id: number): Observable<Client[]> {
        return this.client.get<Client[]>(this.endpoint + 'search/' + id);
    }

    getClientsC13ById(id: number) : Observable<Client[]> {
        return this.client.get<Client[]>(this.endpoint + 'search/' + id);
    }*/

}