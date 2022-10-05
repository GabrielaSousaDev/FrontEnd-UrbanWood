import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  service: any;

  constructor() { }

  ngOnInit(): void {
  }
 /** previous(): void {
    this.service.addUser(this.list).subscribe(); 
   }
  next(): void {
    this.service.addUser(this.list).subscribe(); 
   } */

}
