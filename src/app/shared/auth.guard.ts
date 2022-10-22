import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    if (this.loginService.IsLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"])
      return false;
    }
  }
}
