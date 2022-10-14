import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-wood-worker',
  templateUrl: './register-wood-worker.component.html',
  styleUrls: ['./register-wood-worker.component.scss']
})
export class RegisterWoodWorkerComponent implements OnInit {

  currentTab: number = 0;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Back():void{
    this.router.navigate([""])
  }
  Next():void{
    this.router.navigate(["registerClientContact"])
  }
 nextStepIfRegister(){
  this.router.navigate(["registerWoodworkContact"])
 }

}
