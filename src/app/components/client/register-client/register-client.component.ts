import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  currentTab: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addTab(n: number) {
    if (this.currentTab >= 0 && this.currentTab <= 3)
      this.currentTab = this.currentTab + n;

    console.log(this.currentTab);
  }
  
}
