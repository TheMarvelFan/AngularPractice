import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  email: string = "";

  constructor(private router: Router, private loginService: LoginService) {
  }

  login() {
    if (this.loginService.login(this.username, this.password, this.email)) {
      // alert("Login successful");
      // this.router.navigate(["/rooms", "add"]);
      this.router.navigateByUrl("/rooms");
    }
  }
}
