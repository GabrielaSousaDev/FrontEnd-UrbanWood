import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-wood-worker',
  templateUrl: './register-wood-worker.component.html',
  styleUrls: ['./register-wood-worker.component.scss']
})
export class RegisterWoodWorkerComponent implements OnInit {
  service: any;

  constructor() { }

  ngOnInit(): void {
  }
 /**  next(): void {
    this.service.addUser(this.register).subscribe(); 
   }*/

}
