import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { profileClientFull } from 'src/app/models/profileClientFull';

@Component({
  selector: 'app-profile-client-full',
  templateUrl: './profile-client-full.component.html',
  styleUrls: ['./profile-client-full.component.scss']
})
export class ProfileClientFullComponent implements OnInit {

  client: profileClientFull = {
    name: '',
    lastName: '',
    cpfClient: '',
    streetName: '',
    number: 0,
    complement: '',
    neighborhood: '',
    city: '',
    cep: '',
    email: '',
    phone: '',
    socialNetwork: ''
  }

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  Confirm():void{
    this.router.navigate(["filterWoodworks"])
  }
}
