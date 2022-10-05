import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss']
})
export class SearchClientComponent implements OnInit {
  service: any;
 /* search: Search = { exampleFormControlInput1: "", exampleFormControlInput2: "", exampleFormControlInput3: "" }*/

  constructor() { }

  ngOnInit(): void {
  }
  searchClient(): void {
    /*this.service.addUser(this.search).subscribe(); */
   }
}
