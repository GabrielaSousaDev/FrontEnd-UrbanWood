import { Woodwork } from './../models/woodwork/Woodwork';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class WoodworkService {

    private endpoint ='http://localhost:8080/woodwork/'

    constructor (private client: HttpClient ) { }

    addWoodwork( woodwork: Woodwork): Observable<Woodwork> {
        return this.client.post<Woodwork>(this.endpoint, woodwork);
    }

    updateWoodwork( woodwork: Woodwork, id: number) {
        return this.client.put<Woodwork>(this.endpoint + 'id/' + id, woodwork);
    }

    deleteWoodwork( woodwork: Woodwork, id:number) {
        return this.client.delete<Woodwork>(this.endpoint + 'id/' + id);
    }

    // recuperar
    getWoodworksById( id: number): Observable<Woodwork[]> {
        return this.client.get<Woodwork[]>(this.endpoint + 'search/' + id);
    }

    getWoodworksByCnpj( cnpj: string): Observable<Woodwork[]> {
        return this.client.get<Woodwork[]>(this.endpoint + 'search/' + cnpj);
    }

    getWoodworksByName( name: string): Observable<Woodwork[]> {
        return this.client.get<Woodwork[]>(this.endpoint + 'search/' + name);
    }
    

/*
    Screen    |||
    Screen    |||
    Screen    vvv
*/ 
    getWoodworksC8ById( id: number): Observable<Woodwork[]> {
        return this.client.get<Woodwork[]>(this.endpoint + 'search/' + id);
    }

    getWoodworksC9ByCompanyName( companyName: string): Observable<Woodwork[]> {
        return this.client.get<Woodwork[]>(this.endpoint + 'search/' + companyName);
    }

    getWoodworksW8byId( id: number): Observable<Woodwork[]> {
        return this.client.get<Woodwork[]>(this.endpoint + 'search/' + id);
    }
    //recuperar
}