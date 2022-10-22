import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import {MatDialog} from '@angular/material/dialog';
import { CompanyService } from '../managecompany/company.service';

@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
public head: string = 'assets/images/stock.jpg'
public loginUserSubscription: any;
public updateUserInfo: any;
public isLoggedIn = false;
public addCompany: any;

constructor(private loginservice:LoginService,public dialog: MatDialog,private companyService:CompanyService) { }
                                                                  
ngOnInit(): void {
  this.getCompany()
}
getCompany(){ 
  this.companyService.searchCompany().subscribe(response =>{
  this.addCompany=response.result;  
});
}
ngOnDestroy(): void {
  this.loginUserSubscription?.unsubscribe();
  }
}

                                                        
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                // import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../login/login.service';
// import {MatDialog} from '@angular/material/dialog';



// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })

// export class DashboardComponent implements OnInit {
//  public head: string = 'assets/images/stock.jpg'
//  public loginUserSubscription: any;
//  public updateUserInfo: any;
//  public isLoggedIn = false;

// constructor(private loginservice:LoginService,public dialog: MatDialog) { }
   
// ngOnInit(): void {
//     this.loginUserSubscription = this.loginservice.getNewUserInfo().subscribe(info => {
//           this.updateUserInfo = info;
//   });
// }
  
// getCurrentUser(): void{ 
//   this.dialog.open(PopupComponent);   
//  }
//    ngOnDestroy(): void {
//    this.loginUserSubscription?.unsubscribe();
//   }
// }


// //popup component.ts  starts
// @Component({
//   selector: 'popup.component',
//   templateUrl: 'popup.component.html',
// })
// export class PopupComponent {
// public updateUserInfo: any;
// public loginUserSubscription: any;

// constructor(private loginservice:LoginService) { }
 
//  ngOnInit(): void {
//    this.loginUserSubscription = this.loginservice.getNewUserInfo().subscribe(info => {
//          this.updateUserInfo = info;
//  });
// }

//  ngOnDestroy(): void {
//   this.loginUserSubscription?.unsubscribe();
//  }
// }
// //popup component.ts  Ends
























// ngOnInit(): void {
//   // this.loginUserSubscription = this.loginservice.getNewUserInfo().subscribe(info => {
//   //   this.updateUserInfo = info;
//   // })
// }

 // ngOnDestroy(): void {
  //   // this.loginUserSubscription?.unsubscribe();
  // }

    
//  public updateUserInfo: any;
//  private loginUserSubscription: any;




                                                                