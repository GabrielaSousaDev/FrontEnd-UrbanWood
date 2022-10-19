import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Furniture } from 'src/app/models/furniture';

@Component({
  selector: 'app-client-furniture',
  templateUrl: './client-furniture.component.html',
  styleUrls: ['./client-furniture.component.css']
})
export class ClientFurnitureComponent implements OnInit {

  client: Furniture= {
    idFurniture: 0,
    name: '',
    price: 0,
    description: '',
    SizeFurniture: '',
    environment: '',
    color: '',
    image: '',
    id_woodwork: 0
  }

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
