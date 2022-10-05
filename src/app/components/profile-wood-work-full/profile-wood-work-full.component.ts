import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-wood-work-full',
  templateUrl: './profile-wood-work-full.component.html',
  styleUrls: ['./profile-wood-work-full.component.scss']
})
export class ProfileWoodWorkFullComponent implements OnInit {
  service: any;

  constructor() { }

  ngOnInit(): void {
  }
  confirm(): void {
   /* this.service.addUser(this.profile).subscribe(); */
   }

}
