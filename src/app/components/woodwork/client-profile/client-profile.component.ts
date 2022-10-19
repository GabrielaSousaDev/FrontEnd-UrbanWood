import { Component, OnInit } from '@angular/core';
import { clientProfile } from 'src/app/models/clientProfile';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  woodwork: clientProfile = {
    id: 0,
    name: '',
    lastName: '',
    cpfClient: '',
    street: '',
    number: 0,
    complement: '',
    neighborhood: '',
    city: '',
    cep: '',
    email: '',
    phone: '',
    socialNetwork: ''
  }

  constructor() { }


  ngOnInit(): void {
  }

}
