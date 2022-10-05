import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Address } from '../models/livingArea/LivingArea';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class LivingAreaService {

    private endpoint = 'http://localhost:8080/livingArea/'

    constructor(private client: HttpClient) { }

    addLivingArea( livingArea: LivingArea): Observable<LivingArea> {
        return this.client.post<LivingArea>(this.endpoint, livingArea)
    }

    updateLivingArea( livingArea: LivingArea): Observable<LivingArea> {
        return this.client.put<LivingArea>(this.endpoint, livingArea);
    }

    deleteLivingArea( livingArea: LivingArea): Observable<LivingArea> {
        return this.client.delete<LivingArea>(this.endpoint, livingArea);
    }

    getLivingAreasById( id: number): Observable<LivingArea[]> {
        return this.client.get<LivingAreas[]>(this.endpoint + 'search/' + id);
    }

    getLivingAreaByName( name: string): Observable<LivingArea[]> {
        return this.client.get<LivingAreas[]>(this.endpoint + 'search/' + name);
    }

/*        
      Screen    |||
      Screen    |||
      Screen    vvv
*/

    getLivingAreaC16ByName( name: string): Observable<LivingArea[]> {
        return this.client.get<LivingAreas[]>(this.endpoint + 'search/' + name);
    }
}