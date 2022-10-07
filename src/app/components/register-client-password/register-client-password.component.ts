import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client-password',
  templateUrl: './register-client-password.component.html',
  styleUrls: ['./register-client-password.component.scss']
})
export class RegisterClientPasswordComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  Back():void{
    this.router.navigate(["registerClientContact"])
  }
  Next():void{
    this.router.navigate(["registerClientAdress"])
  }


}
