import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-wood-workerpassword',
  templateUrl: './register-wood-workerpassword.component.html',
  styleUrls: ['./register-wood-workerpassword.component.scss']
})
export class RegisterWoodWorkerpasswordComponent implements OnInit {

  /*register: Register = { exampleFormControlInput1 = "", exampleFormControlInput2 = "" }*/

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back(): void {
    this.router.navigate(["registerWoodworkContact"])   
   }
   next(): void {
    this.router.navigate(["registerWoodworkAddress"])   
   }

}
