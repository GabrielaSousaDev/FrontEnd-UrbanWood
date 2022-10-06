import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-wood-work',
  templateUrl: './profile-wood-work.component.html',
  styleUrls: ['./profile-wood-work.component.scss']
})
export class ProfileWoodWorkComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  editProfile(): void {
    this.router.navigate(["profileWoodworkFull"])
  }
 /* profile: Profile = { exampleFormControlInput1: "", exampleFormControlInput2: "" };  
  service: any;

  constructor() { }

  
  editProfile(): void {
    this.service.addUser(this.profile).subscribe(); 
   }*/

}

