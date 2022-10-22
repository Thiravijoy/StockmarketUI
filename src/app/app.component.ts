
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'stockmarket';
  public head: string = 'assets/images/stock.jpg'
  public loginSubscription: any;
  public isLoggedIn: boolean = false;

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
    this.loginSubscription = this.loginService.getMenu.subscribe((data: any) => {
      if (data !== null && data !== undefined) {
        this.isLoggedIn = true;
      }
    });
  }

  logout() {
    this.loginService.removeToken();
    this.isLoggedIn = false
    this.route.navigate(['/login'])
  }
  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }
}








































// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { LoginService } from './login/login.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit, OnDestroy {
//   title = 'stockmarket';
//   public head: string = 'assets/images/stock.jpg'
//   public loginSubscription: any;
//   public isLoggedIn: boolean = false;

//   constructor(private loginService: LoginService) {

//   }

//   ngOnInit(): void {
//     this.loginSubscription = this.loginService.getMenu.subscribe((data: any) => {
//       if (data !== null && data !== undefined) {
//         this.isLoggedIn = true;
//       }
//     });
//   }
//   ngOnDestroy(): void {
//     this.loginSubscription?.unsubscribe();
//   }
// }






