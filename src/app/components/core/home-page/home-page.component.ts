import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  email: string = "";
  password: string = "";
  flag: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  signAsWoodWorker(): void {
    this.router.navigate(["registerWoodworker"])
  }

  signAsClient(): void {
    this.router.navigate(["registerClient"])
  }

  login(): void {
    if (this.email === "ubanwood@entra21.com.br" && this.password === "123456") {
      this.flag = false;
    } else if (this.email != "ubanwood@entra21.com.br" && this.password != "123456") {
      this.flag = true;
    }
  }

  loginFailure() {
    this.flag = false;
  }
}
