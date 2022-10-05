import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {  } from '../models/item/Item';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class ImageService {
    
    private endpoint = 'http://localhost:8080/image/'

    constructor(private client: HttpClient) { }

    uploadImage ( picByte : ByteLengthChunk) : Observable<Image> {
        return this.client.post<Image>(this.endpoint, Image);
    }

    getImageById(id: number): Observable<Image[]> {
        return this.client.get<Image[]>(this.endpoint + 'search/' + id);
    }

    getImageByName(name: string): Observable<Image[]> {
        return this.client.get<Images[]>(this.endpoint + 'search/' + id);
    }
}