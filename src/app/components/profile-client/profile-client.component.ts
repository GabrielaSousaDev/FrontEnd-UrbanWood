import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.scss']
})
export class ProfileClientComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  EditProfile():void{
    this.router.navigate(["request"])
  }

}
