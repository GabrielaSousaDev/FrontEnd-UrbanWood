import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { searchClient } from 'src/app/models/searchClient';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss']
})
export class SearchClientComponent implements OnInit {

  woodwork: searchClient = {
    id: 0,
    cpfClient: '',
    phone: '',
    firstName: ''
  }

  service: any;
 /* search: Search = { exampleFormControlInput1: "", exampleFormControlInput2: "", exampleFormControlInput3: "" }*/

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  searchClient():void{
    this.router.navigate(["listRequest"])
  }
}
