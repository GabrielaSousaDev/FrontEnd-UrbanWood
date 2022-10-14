import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  Back():void{
    this.router.navigate(["clientFurniture"])
  }
  Buy():void{
    this.router.navigate([""])
  }
}
