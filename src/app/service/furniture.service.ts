import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Furniture } from '../models/furniture/Furniture';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class FurnitureService {

    private endpoint = 'http://localhost:8080/furniture/'

    constructor(private client: HttpClient) { }

    addFurniture ( furniture: Furniture) : Observable<Furniture> {
        return this.client.post<Furniture>(this.endpoint, furniture);
    }

    updateFurniture( furniture: Furniture): Observable<Furniture> {
        return this.client.put<Furniture>(this.endpoint, furniture);
    }

    deleteFurniture( furniture: Furniture): Observable<Furniture> {
        return this.client.delete<Furniture>(this.endpoint, furniture);
    }

    getFurnituresById(id: number): Observable<Furniture[]> {
        return this.client.get<Furniture[]>(this.endpoint + 'search/' + id);
    }

    getFurnituresByName(name: string): Observable<Furniture[]> {
        return this.client.get<Furniture[]>(this.endpoint + 'search/' + name);
    }

    getFurnituresByPrice(price: number): Observable<Furniture[]> {
        return this.client.get<Furniture[]>(this.endpoint + 'search/' + price);
    }

    getFurnituresC14ById(id: number): Observable<Furniture[]> {
        return this.client.get<Furniture[]>(this.endpoint + 'search/' + id);
    }

    getFurnituresC15ByName(name: string): Observable<Furniture[]>  {
        return this.client.get<Furniture[]>(this.endpoint + 'search/' + name)
    }
}