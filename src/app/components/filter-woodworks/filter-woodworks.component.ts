import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-woodworks',
  templateUrl: './filter-woodworks.component.html',
  styleUrls: ['./filter-woodworks.component.scss']
})
export class FilterWoodworksComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  Search():void{
    this.router.navigate(["foundWoodwork"])
  }
}
