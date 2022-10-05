import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-wood-workercontact',
  templateUrl: './register-wood-workercontact.component.html',
  styleUrls: ['./register-wood-workercontact.component.scss']
})
export class RegisterWoodWorkercontactComponent implements OnInit {
  
 /**  register: Register = { exampleFormControlInput1 = "", exampleFormControlInput2 = "", exampleFormControlInput3 = "" }*/
  service: any;

  constructor() { }

  ngOnInit(): void {
  }
  back(): void {
    /**this.service.addUser(this.register).subscribe(); */
   }
   next(): void {
    /**this.service.addUser(this.register).subscribe(); */
   }
}
