import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SnackBarService } from '../snack-bar.service';
import { CompanyService } from './company.service';
import { DialogService } from './mat-confirm-dialog/dialog.service';

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css']
})
export class ManagecompanyComponent implements OnInit {
  public searchCompany:any;
  public companyUrl: string = environment.gateWayUrl;
  public sivas: any;
  
  constructor(private companyService :CompanyService,
              private snackBar:SnackBarService,
              private dialogService:DialogService) { }

  ngOnInit(): void {
   this.getCompany();
  }
  getCompany(){ 
    this.companyService.searchCompany().subscribe(response =>{
     this.searchCompany=response.result;
     if (response.totalRecords == 0) {
      this.snackBar.redSnackBar('No records available!','X');
      }

     
    //  let siva = response.result.stockExchange;
    //   if(response.result.stockExchange = 1){
    //      this.sivas = "NSE"
    //   }else{
    //      this.sivas = "BSE"
    //   };
      
  }) 
  }
  deleteCompany(companyCode:any){
  

  this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
  .afterClosed().subscribe(res =>{
    if(res){
      this.companyService.deleteCompany(companyCode).subscribe((data: any) => {
        // this.isLoading = false;
        if (data.success == true) {
          this.snackBar.greenSnackBar(data.messages[0], 'X');
          this.getCompany();
        }
      })
    }
  })
}

  ngOnDestroy(): void {
   }
}


























// import { Component, OnInit } from '@angular/core';
// import { ManagecompanyService } from './managecompany.service';

// @Component({
//   selector: 'app-managecompany',
//   templateUrl: './managecompany.component.html',
//   styleUrls: ['./managecompany.component.css']
// })
// export class ManagecompanyComponent implements OnInit {
//  public updateUserInfo: any;
//  public addCompanySubscription: any;
  

//   constructor(private manageCompanyService:ManagecompanyService) { }

//   ngOnInit(): void {
//     this.addCompanySubscription = this.manageCompanyService.getNewCompanyInfo().subscribe((info:any) => {
//       this.updateUserInfo = info;
// });
//   }
//   ngOnDestroy(): void {
//     this.addCompanySubscription?.unsubscribe();
//    }
// }
