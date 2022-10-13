import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Address } from '../models/address/Address';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class AddressService {

    private endpoint = 'http://localhost:8080/address/'
    
    constructor(private client: HttpClient) { }

    addAddress(address: Address): Observable<Address> {
        return this.client.post<Address>(this.endpoint, address);
    }

    updateAddress(address: Address, id: number){
        return this.client.put<Address>(this.endpoint + 'id/' + id ,address);
    }

   deleteAddress( address: Address, id: number){
       return this.client.delete<Address>(this.endpoint + 'id/' + id);
   }
   
    getAddressesById(id: number){
        return this.client.get<Address[]>(this.endpoint + 'id/' + id);
    }

    gAtaddressesByNeighborhood(neighborhood: string){
        return this.client.get<Address[]>(this.endpoint + 'id/' + neighborhood);
    }

}

