import {CanMatchFn, Router} from '@angular/router';
import { LoginService } from '../login.service';
import { inject } from '@angular/core';

export const loginGuard: CanMatchFn = (route, segments) => {
  const loginService = inject(LoginService); // alternative to constructor injection
  const router = inject(Router);
  return loginService.isLoggedIn ? true : router.navigate(['/login']);
};

export const authGuard: CanMatchFn = (route, segments) => {
  const loginService = inject(LoginService);
  return loginService.isLoggedIn;
};
