import { Component, OnInit } from '@angular/core';
import { searchRequest } from 'src/app/models/searchRequest';

@Component({
  selector: 'app-search-request',
  templateUrl: './search-request.component.html',
  styleUrls: ['./search-request.component.scss']
})
export class SearchRequestComponent implements OnInit {

  woodwork: searchRequest = {
    id: 0,
    firstName: '',
    startDate: '',
    endDate: '',
    phone: '',
    status: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
