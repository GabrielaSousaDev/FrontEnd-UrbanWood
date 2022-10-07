import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client-adress',
  templateUrl: './register-client-adress.component.html',
  styleUrls: ['./register-client-adress.component.scss']
})
export class RegisterClientAdressComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  Back():void{
    this.router.navigate(["registerClientPassword"])
  }
  Done():void{
    this.router.navigate(["profileClient"])
  }

}
