import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Next():void{
    this.router.navigate(["registerClientContact"])
  }

}
