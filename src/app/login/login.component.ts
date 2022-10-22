import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarService } from '../snack-bar.service';
import { userLoginData } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent  {
  public myimage: string = "assets/images/banana.jpg";
  public head: string = 'assets/images/stock.jpg';
  public hide_eye: boolean = true;
  public LoginForm : FormGroup |any
  private loginUserSubscription: any;
  public loginData: any;
  private responseData : any;
  // public isLoading = false;

  private loginFormGroupMethod(){
      this.LoginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      passWord: new FormControl('', Validators.required),
    })}

  constructor(private route: Router, private loginservice: LoginService, private snackBar:SnackBarService) {};

  ngOnInit(): void {
    this.loginFormGroupMethod();
  }
  public get f() {
    return this.LoginForm.controls;
  }

  public loginSubmit() {
    // this.isLoading = true;
    if (!this.LoginForm.valid) {
      this.snackBar.redSnackBar('Please provide valid user details','X')
    }
    else {
      let loginData = new userLoginData();
      loginData.userName = this.f.userName.value;
      loginData.passWord = this.f.passWord.value;

      this.loginUserSubscription = this.loginservice.loginSubmit(loginData).subscribe((data: any) => {
        // this.isLoading = false;
      if (data.success == true) { 
        this.responseData = data;
        localStorage.setItem('token', this.responseData.result.token);
        this.loginservice.setMenu(data);
        this.route.navigate(['/dashboard']); 
      } 
      else {   
        // this.isLoading = false;
        this.snackBar.redSnackBar(data.messages[0],'X')}
      })
    }
  }  
  
  ngOnDestroy(): void {
    this.loginUserSubscription?.unsubscribe();
  }
}




























//  import { Component, OnInit } from '@angular/core';
//   import { FormControl, FormGroup, Validators } from '@angular/forms';
//   import { Router } from '@angular/router';
//   import { userLoginData } from './login.model';
  
//   import { LoginService } from './login.service';
  
  
  
//   @Component({
//     selector: 'app-login',
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.css'],
  
//   })
  
  
//   export class LoginComponent implements OnInit {
//     public myimage: string = "assets/images/banana.jpg";
//     public head: string = 'assets/images/stock.jpg';
//     public hide_eye: boolean = true;
//     public LoginForm: FormGroup | any;
//     private loginUserSubscription: any;
    
  
//     constructor(private route: Router, private loginservice: LoginService) {
//     }
  
//     ngOnInit(): void {
//       this.loginformGroupMethod();
//     }
  
//     private loginformGroupMethod() {
//       this.LoginForm = new FormGroup({
//         userName: new FormControl('', Validators.required),
//         passWord: new FormControl('', Validators.required),
//       })
//     }
  
//     public get f() {
//       return this.LoginForm.controls;
//     }
  
//     public loginSubmit() {
//       if (!this.LoginForm.valid) {
//         alert('please submit valid details');
//       }
//       else {
//         let loginData = new userLoginData();
//         loginData.userName = this.f.userName.value;
//         loginData.passWord = this.f.passWord.value;
  
//         this.loginservice.setNewUserInfo({
//           userName: this.f.userName.value,
//           passWord: this.f.passWord.value,
//         });
  
//         this.loginUserSubscription = this.loginservice.userlogin(loginData).subscribe((data: any) => {
//           if (data.length == 0) {
//             alert('invalid username or passWord')
//           } else {      
//             localStorage.setItem('user', this.LoginForm.value);
//              this.loginservice.setMenu(data);
//              this.route.navigate(['/dashboard']);
//            }
//         })
//       }
// public loginSubmit() {
  //   this.user = this.LoginForm.value;
  //   this.loginservice.loginSubmit(this.user).subscribe((response: any) => {
  //       console.log(response);
  //       this.route.navigate(['/dashboard'])
  //     });

  // }  
//     }
//     ngOnDestroy(): void {
//       this.loginUserSubscription?.unsubscribe();
//     }
  
  
//   }














 // public loginSubmit() {
  //   if (!this.LoginForm.valid) {
  //     alert('please submit valid details');
  //   } else {
  // let loginData = new userLoginData();
  // loginData.userName = this.f.userName.value;
  // loginData.password = this.f.password.value;
  // this.loginData.push (this.LoginForm.value)}
  //else {
  //     localStorage.setItem('user', this.LoginForm.value)
  //     this.route.navigate(['/dashboard']);

  //     this.loginservice.setNewUserInfo({
  //       userName: this.userName,
  //       password: this.passWord,
  //     });
  //   }
  // }

  // import { Component, OnInit } from '@angular/core';
  // import { FormControl, FormGroup, Validators } from '@angular/forms';
  // import { Router } from '@angular/router';
  // import { userLoginData } from './login.model';
  
  // import { LoginService } from './login.service';
  
  
  
  // @Component({
  //   selector: 'app-login',
  //   templateUrl: './login.component.html',
  //   styleUrls: ['./login.component.css'],
  
  // })
  
  
  // export class LoginComponent implements OnInit {
  //   public myimage: string = "assets/images/banana.jpg";
  //   public head: string = 'assets/images/stock.jpg';
  //   public hide_eye: boolean = true;
  //   public LoginForm: FormGroup | any;
  //   private loginUserSubscription: any;
    
  
  //   constructor(private route: Router, private loginservice: LoginService) {
  //   }
  
  //   ngOnInit(): void {
  //     this.loginformGroupMethod();
  //   }
  
  //   private loginformGroupMethod() {
  //     this.LoginForm = new FormGroup({
  //       userName: new FormControl('', Validators.required),
  //       passWord: new FormControl('', Validators.required),
  //     })
  //   }
  
  //   public get f() {
  //     return this.LoginForm.controls;
  //   }
  
  //   public loginSubmit() {
  //     if (!this.LoginForm.valid) {
  //       alert('please submit valid details');
  //     }
  //     else {
  //       let loginData = new userLoginData();
  //       loginData.userName = this.f.userName.value;
  //       loginData.passWord = this.f.passWord.value;
  
  //       this.loginservice.setNewUserInfo({
  //         userName: this.f.userName.value,
  //         passWord: this.f.passWord.value,
  //       });
  
  //       this.loginUserSubscription = this.loginservice.userlogin(loginData).subscribe((data: any) => {
  //         if (data.length == 0) {
  //           alert('invalid username or passWord')
  //         } else {      
  //           localStorage.setItem('user', this.LoginForm.value);
  //            this.loginservice.setMenu(data);
  //            this.route.navigate(['/dashboard']);
  //          }
  //       })
  //     }
  
  //   }
  //   ngOnDestroy(): void {
  //     this.loginUserSubscription?.unsubscribe();
  //   }
  
  
  // }
  

















                                                                           
