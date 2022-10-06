import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-wood-worker',
  templateUrl: './register-wood-worker.component.html',
  styleUrls: ['./register-wood-worker.component.scss']
})
export class RegisterWoodWorkerComponent implements OnInit {
  service: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  next():void{
    this.router.navigate(["registerWoodworkContact"])
  }
 /**  next(): void {
    this.service.addUser(this.register).subscribe(); 
   }*/

}
