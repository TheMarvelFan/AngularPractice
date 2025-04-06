import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  isAdmin: boolean = false;

  constructor() {

  }

  login (username: string, password: string, email: string): boolean {
    if (username === "admin" && password === "admin" && email === "admin@mail.com") {
      // this.router.navigateByUrl("/rooms/add");
      this.isLoggedIn = true;
      this.isAdmin = true;
    } else if (username === "user" && password === "user" && email === "user@mail.com") {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}
