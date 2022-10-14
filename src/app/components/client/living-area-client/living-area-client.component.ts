import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-living-area-client',
  templateUrl: './living-area-client.component.html',
  styleUrls: ['./living-area-client.component.css']
})
export class LivingAreaClientComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
