import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/managecompany/company.service';
import { SnackBarService } from 'src/app/snack-bar.service';
import { userStockData } from '../stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {
  public stockForm: FormGroup | any;
  private stockUserSubscription: any;
  public stcokData: any;
  public addCompany: any;

  constructor(private route: Router,
    private stockService: StockService,
    private companyService: CompanyService,
    private snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.addformGroupMethod(),
      this.getCompany()
  }
  private addformGroupMethod() {
    this.stockForm = new FormGroup({
      companyCode: new FormControl('', Validators.required),
      stockPrice: new FormControl('', Validators.required),
    })
  }
  public get i() {
    return this.stockForm.controls
  }
  public addStock() {
    if (!this.stockForm.valid) {
      this.snackBar.redSnackBar('Please provide all required fields', 'X')
    }
    else {
      let stockData = new userStockData();
      stockData.companyCode = this.i.companyCode.value;
      stockData.stockPrice = this.i.stockPrice.value;

      this.stockUserSubscription = this.stockService.addStock(stockData).subscribe((data: any) => {
        if (data.success == true) {
          this.snackBar.greenSnackBar(data.messages[0], 'X')
          this.route.navigate(['/managestock']);
        } else {
          this.snackBar.redSnackBar(data.messages[0], 'X')
        }
      })
    }
  }
  getCompany() {
    this.companyService.searchCompany().subscribe(response => {
      this.addCompany = response.result;
    })
  }
  ngOnDestroy(): void {
    this.stockUserSubscription?.unsubscribe();
  }
}
















// public searchStock(data:any){
//   //   data = {
//   //   "companyCode": "",
//   //   "StartDate":"",
//   //   "EndDate":"",

//   // }
//     return this.http.get(this.stockUrl + '/market/stock/get/' +data.companyCode+ '/' +data.StartDate+ '/' +data.EndDate)
//   }