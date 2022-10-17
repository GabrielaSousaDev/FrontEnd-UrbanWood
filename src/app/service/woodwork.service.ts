import { allWoodwork } from './../models/allWoodwork';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WoodworkService {

  woodworkRefresh = new EventEmitter<string>()

  endPointClient: string = 'http://localhost:8080/woodwork/'

  constructor(private http: HttpClient) {}

  //  POST  //

  addWoodwork(postData: allWoodwork): Observable<allWoodwork> {
    return this.http.post<allWoodwork>(this.endPointClient, postData);
  }

  //  GET  //

  getWoodwork(id: number): Observable<allWoodwork> {
    return this.http.get<allWoodwork>(this.endPointClient + id);
  }

  //  PUT  //

  updateWoodwork(postData: number): Observable<allWoodwork> {
    return this.http.put<allWoodwork>(this.endPointClient, postData);
  }

  // DELETE //
  
  deleteWoodowork(id: number): Observable<allWoodwork> {
    return this.http.delete<allWoodwork>(this.endPointClient + id);
  }

}