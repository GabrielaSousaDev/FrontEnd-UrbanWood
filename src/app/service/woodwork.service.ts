import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Address } from '../models/woodwork/Woodwork';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class WoodworkService {

    private endpoint = private endpoint = 'http://localhost:8080/woodwork/'

    constructor (private client: HttpClient ) { }

    addWoodwork( woodwork: Woodwork): Observable<Woodwork> {
        return this.client.post<Woodwork>(this.endpoint, woodwork);
    }

    updateWoodwork( woodwork: Woodwork): Observable<Woodwork> {
        return this.client.put<Woodwork>(this.endpoint, woodwork);
    }

    deleteWoodwork( woodwork: Woodwork): Observable<Woodwork> {
        return this.client.delete<Woodwork>(this.endpoint, woodwork);
    }

    getWoodworksById( id: number): Observable<Woodwork[]> {
        return this.client.get<Woodworks[]>(this.endpoint, id);
    }

    getWoodworksByCnpj( cnpj: string): Observable<Woodwork[]> {
        return this.client.get<Woodworks[]>(this.endpoint, cnpj);
    }

    getWoodworksByName( name: string): Observable<Woodwork[]> {
        return this.client.get<Woodworks[]>(this.endpoint, name);
    }

/*
    Screen    |||
    Screen    |||
    Screen    vvv
*/ 
    getWoodworksC8ById( id: number): Observable<Woodwork[]> {
        return this.client.get<Woodworks[]>(this.endpoint, id);
    }

    getWoodworksC9ByCompanyName( companyName: string): Observable<Woodwork[]> {
        return this.client.get<Woodworks[]>(this.endpoint, companyName);
    }

    getWoodworksW8byId( id: number): Observable<Woodwork[]> {
        return this.client.get<Woodworks[]>(this.endpoint, id);
    }
}