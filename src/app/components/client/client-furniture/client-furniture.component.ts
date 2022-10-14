import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-furniture',
  templateUrl: './client-furniture.component.html',
  styleUrls: ['./client-furniture.component.css']
})
export class ClientFurnitureComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Somar():void{
    this.router.navigate([""])
  }
  Adicionar():void{
    this.router.navigate(["request"])
  }

}
