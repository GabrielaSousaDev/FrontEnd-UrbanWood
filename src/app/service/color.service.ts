import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Address } from '../models/color/Color';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class ColorService {

    private endpoint = 'http://localhost:8080/color/'

    constructor(private client: HttpClient) { }

    addColor ( color: Color) : Observable<Color> {
        return this.client.post<Color>(this.endpoint, color);
    }

    updateColor( color: Color): Observable<Color> {
        return this.client.put<Color>(this.endpoint, color);
    }

    deleteColor( color: Color): Observable<Color> {
        return this.client.delete<Color>(this.endpoint, color);
    }

    getColorsById(id: number) : Observable<Color[]> {
        return this.client.get<Colors[]>(this.endpoint + 'search/' + id);
    }

    getColorsByName(name: string) : Observable<Color[]> {
        return this.client.get<Colors[]>(this.endpoint + 'search/' + name);
    }

    getColorsByBrand(brand: string) : Observable<Color[]> {
        return this.client.get<Colors[]>(this.endpoint + 'search/' + brand);
    }
}