import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { userLoginData } from './login.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  loginUrl: string = environment.gateWayUrl;
  constructor(private http: HttpClient) { }

  public loginSubmit(user: userLoginData): Observable<any> {
    return this.http.post(this.loginUrl + '/market/user/login', user);
  }
  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  
  GetToken(){
    return localStorage.getItem('token')||'';
  }

  removeToken(){
      localStorage.removeItem('token');
  }
  
  public menu = new BehaviorSubject(null);
  public getMenu = this.menu.asObservable();
  public setMenu(menu: any) {
    this.menu.next(menu);
  }
}










































//userlogin(_userloginData: any){
 // return  this.http.post(`${this.loginUrl}/login`,this.userloginData)
 // }




//  import { Injectable, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { userLoginData } from './login.model';




// @Injectable({
//   providedIn: 'root'
// })

// export class LoginService implements OnInit {
//   loginUrl: string = environment.loginUrl;
//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//   }

//   public userLoginDetails = [
//     { userId: 1, userName: "virat", password: 1234 },
//     { userId: 2, userName: "mahi", password: 1234 },
//     { userId: 3, userName: "rohit", password: 1234 },
//     { userId: 1, userName: "jaddu", password: 1234 },
//     { userId: 2, userName: "sky", password: 1234 },
//     { userId: 3, userName: "0", password: 0 }
//   ]


//   userlogin(userData: userLoginData): Observable<any> {
//     //return this.http.post(`&{this.loginUrl}/login`,userData)
//     const userDetail = this.userLoginDetails.filter(e => e.userName == userData?.userName && e.password == userData?.password);
//     return of(userDetail);
//   }
//   getUserDetails(userId: number): Observable<any> {
//     //return this.http.post(`&{this.loginUrl}/userDetail?userId=`+userId)
//     const userDetail = this.userLoginDetails.filter(e => e.userId == userId);
//     return of(userDetail);
//   }
//   getAllUserDetails(): Observable<any[]> {
//     //return this.http.post(`&{this.loginUrl}/AllUserDetails`);
//     return of(this.userLoginDetails);
//   }


//   private newUser = new BehaviorSubject<any>({
//     // userName : 'Thiraviya selvam',
//     // password :'1512'
//   });

//   setNewUserInfo(user: any) {
//     this.newUser.next(user);
//   }
//   getNewUserInfo() {
//     return this.newUser.asObservable();
//   }

//   public menu = new BehaviorSubject(null);
//   public getMenu = this.menu.asObservable();
//   public setMenu(menu: any) {
//     this.menu.next(menu);
//   }

// }







//15-10-22

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { userLoginData } from './login.model';

// @Injectable({
//   providedIn: 'root'
// })

// export class LoginService {
//   loginUrl: string = environment.gateWayUrl;
//     userValue: any;
//   constructor(private http: HttpClient) { }

//   public loginSubmit(user: userLoginData): Observable<any> {
//     return this.http.post(this.loginUrl + '/market/user/login', user);
//   }

//   private newUser = new BehaviorSubject<any>({
//     // userName : 'Thiraviya selvam',
//     // password :'1512'
//   });

//   public setNewUserInfo(user: any) {
//     this.newUser.next(user);
//   }
//   public getNewUserInfo() {
//     return this.newUser.asObservable();
//   }

//   public menu = new BehaviorSubject(null);
//   public getMenu = this.menu.asObservable();
//   public setMenu(menu: any) {
//     this.menu.next(menu);
//   }
// }




// 16-10-22  inter
// export class LoginService {
//   loginUrl: string = environment.gateWayUrl;
//   private userSubject: BehaviorSubject<userLoginData>;
//     public user: Observable<userLoginData>;
    
//   constructor(private http: HttpClient) { 
//     this.userSubject = new BehaviorSubject<userLoginData>(JSON.parse(localStorage.getItem('user')!));
//     this.user = this.userSubject.asObservable();
//   }
//   public get userValue(): userLoginData {
//     return this.userSubject.value;
// }
//   public loginSubmit(userData: userLoginData): Observable<any> {
//     return this.http.post(this.loginUrl + '/market/user/login', userData)
//     .pipe(map(user => {
//       // store user details and jwt token in local storage to keep user logged in between page refreshes
//       localStorage.setItem('user', JSON.stringify(user));
//       this.userSubject.next(user);
//       return user;
//   }));
//   }