import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-woodwork-description',
  templateUrl: './woodwork-description.component.html',
  styleUrls: ['./woodwork-description.component.css']
})
export class WoodworkDescriptionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Request():void{
    this.router.navigate(["livingAreaClient"])
  }
  Back():void{
    this.router.navigate(["foundWoodwork"])
  }

}
