import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Address } from '../models/order/Order';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class OrderService {

    private endpoint = 'http://localhost:8080/order/'

    constructor(private client: HttpClient ) { }

    addOrder( order: Order): Observable<Order> {
        return this.client.post<Order>(this.endpoint, order)
    }

    updateOrder( order: Order): Observable<Order> {
        return this.client.put<Order>(this.endpoint, order);
    }

    deleteOrder( order: Order): Observable<Order> {
        return this.client.delete<Order>(this.endpoint, order);
    }

    getOrdersById( id: number): Observable<Order[]> {
        return this.client.get<Orders[]>(this.endpoint + 'search/' + id);
    }

    getOrdersByInitialDate(initialDate: Date): Observable<Order[]> {
        return this.client.get<Orders[]>(this.endpoint + 'serach/' + initialDate);
    }

/*
      Screen    |||
      Screen    |||
      Screen    vvv
*/

    getOrdersW12ByInitialDate( initalDate: Date): Observable<Order[]> {
        return this.client.get<Orders[]>(this.endpoint + 'search/' + initalDate);
    }

    getOrdersC13ByInitialDate( id: number): Observable<Order[]> {
        return this.client.get<Orders[]>(this.endpoint + 'search/' + id);
    }
}