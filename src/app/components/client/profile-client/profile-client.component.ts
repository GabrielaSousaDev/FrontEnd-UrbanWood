import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { profileClient } from 'src/app/models/profileClient';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.scss']
})
export class ProfileClientComponent implements OnInit {

  client: profileClient = {
    id: 0,
    name: '',
    cpf: '',
    lastName: ''
  }

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  EditProfile():void{
    this.router.navigate(["profileClientFull"])
  }

}
