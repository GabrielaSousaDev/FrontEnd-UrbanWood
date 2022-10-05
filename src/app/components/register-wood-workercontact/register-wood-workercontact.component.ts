import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-wood-workercontact',
  templateUrl: './register-wood-workercontact.component.html',
  styleUrls: ['./register-wood-workercontact.component.scss']
})
export class RegisterWoodWorkercontactComponent implements OnInit {
  
 /**  register: Register = { exampleFormControlInput1 = "", exampleFormControlInput2 = "", exampleFormControlInput3 = "" }*/
  service: any;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back(): void {
    this.router.navigate(["registerWoodwork"])   
  }
   next(): void {
    this.router.navigate(["registerWoodworkPassword"])
  }
}
