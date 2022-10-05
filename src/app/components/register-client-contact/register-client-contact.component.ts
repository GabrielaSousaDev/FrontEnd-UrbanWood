import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client-contact',
  templateUrl: './register-client-contact.component.html',
  styleUrls: ['./register-client-contact.component.scss']
})
export class RegisterClientContactComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  Back():void{
    this.router.navigate(["request"])
  }
  Next():void{
    this.router.navigate(["request"])
  }


}
