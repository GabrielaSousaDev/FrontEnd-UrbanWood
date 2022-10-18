import { WoodworkService } from './../../../service/woodwork.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allWoodwork } from 'src/app/models/allWoodwork';

@Component({
  selector: 'app-register-wood-worker',
  templateUrl: './register-wood-worker.component.html',
  styleUrls: ['./register-wood-worker.component.scss']
})
export class RegisterWoodWorkerComponent implements OnInit {

  woodwork: allWoodwork = {
    idWoodwork: 0,
    companyName: "",
    cnpj: "",
    description: "",
    nameStreet: "",
    number: 0,
    complement: "",
    neighborhood: "",
    city: "",
    cep: "",
    socialNetwork: "",
    email: "",
    phone: "",
    login: "",
    password: ""
  }

  currentTab: number = 0;

  constructor(private router: Router,
              private woodworkService: WoodworkService) { }

  ngOnInit(): void {
  }

  addTab(n: number) {
    if (this.currentTab >= 0 && this.currentTab <= 3)
      this.currentTab = this.currentTab + n;

    console.log(this.currentTab);
  }

  doRegister(){
    this.woodworkService.addWoodwork(this.woodwork).subscribe((data: any) => {
      this.woodwork = data
      console.log(this.woodwork)
    });
  }

}
