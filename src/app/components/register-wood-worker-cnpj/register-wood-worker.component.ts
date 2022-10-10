import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-wood-worker',
  templateUrl: './register-wood-worker.component.html',
  styleUrls: ['./register-wood-worker.component.scss']
})
export class RegisterWoodWorkerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
 nextStepIfRegister(){
  this.router.navigate(["registerWoodworkContact"])
 }

}
