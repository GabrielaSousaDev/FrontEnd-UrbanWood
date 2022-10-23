import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  holder: any = {
  email: "",
  password: ""
}
  flag: boolean = false;

  constructor(private router: Router,
              private service: UserService) {
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
    this.service.login(this.holder).subscribe(res => {
      let userAutenticado = res
      
      this.service.setUser([userAutenticado])
      this.router.navigate(['home/' + res.id])
    })
  }
  loginFailure() {
    this.flag = false;
  }
}
