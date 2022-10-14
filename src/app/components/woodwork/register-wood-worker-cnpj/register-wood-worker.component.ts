import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-wood-worker',
  templateUrl: './register-wood-worker.component.html',
  styleUrls: ['./register-wood-worker.component.scss']
})
export class RegisterWoodWorkerComponent implements OnInit {

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
