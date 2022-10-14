import { allClient } from './../../../models/allClient';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  client: allClient = {
    idClient: 0,
    firstName: "",
    lastName: "",
    cpfClient: "",
    nameStreet: "",
    number: 0,
    complement: "",
    neighborhood: "",
    city: "",
    cep: "",
    socialNetwork: "",
    email: "",
    phone: "",
    password: ""
  }

  currentTab: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addTab(n: number) {
    if (this.currentTab >= 0 && this.currentTab <= 3)
      this.currentTab = this.currentTab + n;
  }
  
}
