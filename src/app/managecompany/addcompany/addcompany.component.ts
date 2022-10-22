import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/managestock/stock.service';
import { SnackBarService } from 'src/app/snack-bar.service';
import { userCompanyData } from '../company.model';
import { CompanyService } from '../company.service';


@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {
  public addForm: FormGroup | any;
  private companyUserSubscription: any;
  public companyData: any;

  constructor(private route: Router,
              private companyService: CompanyService,
              private snackBar:SnackBarService) {

  }
  ngOnInit(): void {
    this.addformGroupMethod();
  }
  private addformGroupMethod() {
    this.addForm = new FormGroup({
      companyCode: new FormControl('', Validators.required),
      companyCeo: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      companyWebsite: new FormControl('', Validators.required),
      companyTurnover: new FormControl('', Validators.required),
      stockExchange: new FormControl('', Validators.required),

    })
  }

  public addCompany() {
    if (!this.addForm.valid) {
      this.snackBar.redSnackBar('Please provide all required fields','X')   
    }
    else {
       let companyData = new userCompanyData();
      companyData.companyCode = this.h.companyCode.value;
      companyData.companyCeo = this.h.companyCeo.value;
      companyData.stockExchange = this.h.stockExchange.value;
      companyData.companyName = this.h.companyName.value;
      companyData.companyWebsite = this.h.companyWebsite.value;
      companyData.companyTurnover = this.h.companyTurnover.value;

      this.companyUserSubscription = this.companyService.addCompany(companyData).subscribe((data:any) => { 
          if (data.success == true) { 
            this.snackBar.greenSnackBar(data.messages[0],'X')
            this.route.navigate(['/managecompany']);
          }else {   
            this.snackBar.redSnackBar(data.messages[0],'X')    
           }
            })
        }
  }

  public get h() {
    return this.addForm.controls
  }
  // stocks: any = [
  //   {
  //     full:1,
  //     short:"NSE"
  //   },
  //   {
  //     full:2,
  //     short:"BSE"
  //   }
  // ]
  ngOnDestroy(): void {
    this.companyUserSubscription?.unsubscribe();
  }
}






















// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router} from '@angular/router';
// import { ManagecompanyService } from '../managecompany.service';


// @Component({
//   selector: 'app-addcompany',
//   templateUrl: './addcompany.component.html',
//   styleUrls: ['./addcompany.component.css']
// })
// export class AddcompanyComponent implements OnInit {
//  public addForm: FormGroup|any;
//   constructor(private route: Router, private manageCompanyService:ManagecompanyService) { }

//   ngOnInit(): void {
//     this.addformGroupMethod();
//   }

//   private addformGroupMethod(){
//     this.addForm = new FormGroup({
//       companyCode:new FormControl('',Validators.required),
//       companyCeo:new FormControl('',Validators.required),
//       companyName:new FormControl('',Validators.required),
//       companyWebsite:new FormControl('',Validators.required),
//       companyTurnover:new FormControl('',Validators.required),
//       stockExchange:new FormControl('',Validators.required),

//     })
//   }
//   public get h (){
//     return this.addForm.controls
//   }
//   public addCompany(){
//     if(!this.addForm.valid){
//       return;
//     }
//     this.manageCompanyService.setNewCompanyInfo({
//       companyCode: this.h.companyCode.value,
//       companyCeo: this.h.companyCeo.value,
//       companyName: this.h.companyName.value,
//       companyWebsite: this.h.companyWebsite.value,
//       companyTurnover: this.h.companyTurnover.value,
//       stockExchange: this.h.stockExchange.value,
//     });
//     this.route.navigate(['/managecompany']);

//   }
// }








//18-10-22


// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { StockService } from 'src/app/managestock/stock.service';
// import { userCompanyData } from '../company.model';
// import { CompanyService } from '../company.service';


// @Component({
//   selector: 'app-addcompany',
//   templateUrl: './addcompany.component.html',
//   styleUrls: ['./addcompany.component.css']
// })
// export class AddcompanyComponent implements OnInit {
//   public addForm: FormGroup | any;
//   private companyUserSubscription: any;
//   public companyData: any;
//   constructor(private route: Router, private companyService: CompanyService, private stockService:StockService) {

//   }
//   ngOnInit(): void {
//     this.addformGroupMethod();
//   }
//   private addformGroupMethod() {
//     this.addForm = new FormGroup({
//       companyCode: new FormControl('', Validators.required),
//       companyCeo: new FormControl('', Validators.required),
//       companyName: new FormControl('', Validators.required),
//       companyWebsite: new FormControl('', Validators.required),
//       companyTurnover: new FormControl('', Validators.required),
//       stockExchange: new FormControl('', Validators.required),

//     })
//   }

//   inputobj = {
//     "companyCode": "",
//     "companyCeo": "",
//     "stockExchange": "",
//     "companyName": "",
//     "companyWebsite": "",
//     "companyTurnover": ""
//   };
//   companyobj = {
//     "companyName": "",
//   }

  

  

//   public addCompany(
//     companyCode: any, companyCeo: any, stockExchange: any,
//     companyName: any, companyWebsite: any, companyTurnover: any) {

//     if (!this.addForm.valid) {
//       alert('please submit valid details');
//     }
//     else {
//        let companyData = new userCompanyData();
//       companyData.companyCode = this.h.companyCode.value;
//       companyData.companyCeo = this.h.companyCeo.value;
//       companyData.stockExchange = this.h.stockExchange.value;
//       companyData.companyName = this.h.companyName.value;
//       companyData.companyWebsite = this.h.companyWebsite.value;
//       companyData.companyTurnover = this.h.companyTurnover.value;


//       this.companyUserSubscription = this.companyService.addCompany(companyData).subscribe((data:any) => { 
       
//           if (data.success == true) { 
//             this.companyService.saveData(this.inputobj);
//             this.route.navigate(['/managecompany']);
//           } else {   
//             alert(data.messages[0])       
//            }
//       })
   

//     this.inputobj = {
//       "companyCode": companyCode,
//       "companyCeo": companyCeo,
//       "stockExchange": stockExchange,
//       "companyName": companyName,
//       "companyWebsite": companyWebsite,
//       "companyTurnover": companyTurnover
//     };
    

//     this.companyobj={"companyName": companyName,};
//     this.stockService.saveStock(this.companyobj);

    
//     //     this.companyService.setNewCompanyInfo({
//     //   companyCode: this.h.companyCode.value,
//     //   companyCeo: this.h.companyCeo.value,
//     //   companyName: this.h.companyName.value,
//     //   companyWebsite: this.h.companyWebsite.value,
//     //   companyTurnover: this.h.companyTurnover.value,
//     //   stockExchange: this.h.stockExchange.value,
//     // });
//   }
//   }

//   public get h() {
//     return this.addForm.controls
//   }

//   ngOnDestroy(): void {
//     this.companyUserSubscription?.unsubscribe();
//   }
// }