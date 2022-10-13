import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-wood-work-full',
  templateUrl: './profile-wood-work-full.component.html',
  styleUrls: ['./profile-wood-work-full.component.scss']
})
export class ProfileWoodWorkFullComponent implements OnInit {
  service: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  confirmProfile(): void {
    this.router.navigate([""])   
   }

}
