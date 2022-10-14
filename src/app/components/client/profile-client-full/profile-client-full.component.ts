import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-client-full',
  templateUrl: './profile-client-full.component.html',
  styleUrls: ['./profile-client-full.component.scss']
})
export class ProfileClientFullComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  Confirm():void{
    this.router.navigate(["filterWoodworks"])
  }
}
