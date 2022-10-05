import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-wood-worker-adress',
  templateUrl: './register-wood-worker-adress.component.html',
  styleUrls: ['./register-wood-worker-adress.component.scss']
})
export class RegisterWoodWorkerAdressComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back(): void {
    this.router.navigate(["registerWoodworkPassword"])   
  }
   next(): void {
    this.router.navigate([""])
  }
  
}
