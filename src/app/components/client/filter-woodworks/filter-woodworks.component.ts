import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filterWoodworks } from 'src/app/models/filterWoodworks';

@Component({
  selector: 'app-filter-woodworks',
  templateUrl: './filter-woodworks.component.html',
  styleUrls: ['./filter-woodworks.component.scss']
})
export class FilterWoodworksComponent implements OnInit {

  client: filterWoodworks =  {
    id: 0,
    woodworkName: '',
    cnpj: '',
    phoneNumber: 0,
    neighborhood: '',
    image: null
  }
    
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  Search():void{
    this.router.navigate(["foundWoodwork"])
  }
}
