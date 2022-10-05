import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http'
import { Item } from '../models/item/Item';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class ItemService {
    
    private endpoint = 'http://localhost:8080/Item/'

    constructor(private client: HttpClient) { }

    addItem( item: Item): Observable<Item> {
        return this.client.post<Item>(this.endpoint, item)
    }

    updateItem( item: Item): Observable<Item> {
        return this.client.put<Item>(this.endpoint, item);
    }

    deleteItem(item: Item) {
        this.client.delete<Item>(this.endpoint, item);
        return HttpStatusCode.Ok;
    }

    getItemsById( id: number): Observable<Item[]> {
        return this.client.get<Item[]>(this.endpoint + 'search/' + id);
    }

    getItemByPrice( totalPrice: number): Observable<Item[]> {
        return this.client.get<Item[]>(this.endpoint + 'search/' + totalPrice);
    }

}