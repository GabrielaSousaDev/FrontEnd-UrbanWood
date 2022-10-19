import { ClientService } from './../../../service/client.service';
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
    streetName: "",
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

  constructor(
    private router: Router,
    private clientService: ClientService
    ) { }

  ngOnInit(): void {
  }

  addTab(n: number) {
    if (this.currentTab >= 0 && this.currentTab <= 3)
      this.currentTab = this.currentTab + n;
      
      console.log(this.currentTab);
      
  }

  doRegister(){
    this.clientService.addClient(this.client).subscribe((data: any) => {
      this.client = data
      console.log(this.client)
    });
  }
  
}
