import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { userRegisterData } from './register.model';
import { RegisterService } from './register.service';
import { SnackBarService } from '../snack-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public head: string = 'assets/images/stock.jpg'
  public hide_eye: boolean = true;
  public hide_eye1: boolean = true;
  public RegisterForm: FormGroup | any;
  public registerUserSubscription: any;
  public registerData: any;

  constructor(private formbuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private snackBar: SnackBarService) { }

  get g() {
    return this.RegisterForm.controls;
  }

  mustMatch(passWord: any, confirmpassWord: any) {
    return (formGroup: FormGroup) => {
      const passWordcontrol = formGroup.controls[passWord];
      const confirmpassWordcontrol = formGroup.controls[confirmpassWord];
      if (confirmpassWordcontrol.errors && !confirmpassWordcontrol.errors['mustMatch']) {
        return;
      }
      if (passWordcontrol.value !== confirmpassWordcontrol.value) {
        confirmpassWordcontrol.setErrors({ mustMatch: true });
      } else {
        confirmpassWordcontrol.setErrors(null);
      }
    }
  }

  ngOnInit(): void {
    this.registerformGroupMethod();
  }

  private registerformGroupMethod() {
    this.RegisterForm = this.formbuilder.group({
      userName: new FormControl('', Validators.required),
      passWord: new FormControl('', Validators.required),
      confirmpassWord: new FormControl('', Validators.required)
    }, {
      validators: this.mustMatch('passWord', 'confirmpassWord')
    })
  }

  public registerSubmit() {
    if (!this.RegisterForm.valid) {
      this.snackBar.redSnackBar('Please provide all required fields', 'X')
    }
    else {
      let registerData = new userRegisterData();
      registerData.userName = this.g.userName.value;
      registerData.passWord = this.g.passWord.value;

      this.registerUserSubscription = this.registerService.registerSubmit(registerData).subscribe((data: any) => {
        if (data.success == true) {
          this.router.navigate(['/login']);
          this.snackBar.greenSnackBar(data.messages[0], 'X');
        } else {
          this.snackBar.redSnackBar(data.messages[0], 'X');
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.registerUserSubscription?.unsubscribe();
  }


}
























// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { LoginService } from '../login/login.service';


// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   public head: string = 'assets/images/stock.jpg'
//   public hide_eye: boolean = true;
//   public RegisterForm!: FormGroup;
//   public loginsubscription: any;

//   constructor(private formbuilder: FormBuilder, private router: Router, private loginservice: LoginService) {

//   }

//   get g() {
//     return this.RegisterForm.controls;
//   }
//   mustMatch(passWord: any, confirmpassWord: any) {

//     return (formGroup: FormGroup) => {
//       const passWordcontrol = formGroup.controls[passWord];
//       const confirmpassWordcontrol = formGroup.controls[confirmpassWord];

//       if (confirmpassWordcontrol.errors && !confirmpassWordcontrol.errors['mustMatch']) {
//         return;
//       }
//       if (passWordcontrol.value !== confirmpassWordcontrol.value) {
//         confirmpassWordcontrol.setErrors({ mustMatch: true });
//       } else {
//         confirmpassWordcontrol.setErrors(null);
//       }
//     }
//   }
//   public registerSubmit() {
//     if (!this.RegisterForm.valid) {
//       return;
//     }
//     localStorage.setItem('user', this.RegisterForm.value);
//      this.loginsubscription = this.loginservice.setMenu(this.RegisterForm.value);
//     this.router.navigate(['/dashboard'])
//   }

//   ngOnInit(): void {
//     this.registerformGroupMethod();
//   }

//   private registerformGroupMethod() {
//     this.RegisterForm = this.formbuilder.group({
//       userName: new FormControl('', Validators.required),
//       passWord: new FormControl('', Validators.required),
//       confirmpassWord: new FormControl('', Validators.required)
//     }, {
//       validators: this.mustMatch('passWord', 'confirmpassWord')
//     })
//   }
//   ngOnDestroy(): void {
//     this.loginsubscription?.unsubscribe();
//   }


// }








// userName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
//       passWord: new FormControl('', Validators.compose([Validators.required, Validators.pattern(
//         '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,18}$'
//       )])),









