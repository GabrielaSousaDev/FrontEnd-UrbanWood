import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Adress } from '../models/adress';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

    adressRefresh = new EventEmitter<string>()

    endPointAdress: string = 'http://localhost:8080/adress/'

    constructor(private http: HttpClient) {}

    addAdress(postData: Adress): Observable<Adress> {
        return this.http.post<Adress>(this.endPointAdress, postData);
      }
    
      //  GET  //
    
      getAdress(id: number): Observable<Adress> {
        return this.http.get<Adress>(this.endPointAdress + id);
      }
    
    
      //  PUT  //
    
      updateClient(postData: Adress): Observable<Adress> {
        return this.http.put<Adress>(this.endPointAdress, postData);
      }
    
      // DELETE //
      deleteClient(id: number): Observable<Adress> {
        return this.http.delete<Adress>(this.endPointAdress + id);




}
}