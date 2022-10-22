import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../managecompany/company.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StockService } from './stock.service';
import { DateAdapter,MAT_DATE_FORMATS,MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter} from '@angular/material-moment-adapter';
import { SnackBarService } from '../snack-bar.service';


export const MY_Formats = {
  display:{
    dateInput:'MM-DD-YYYY',
  }
};



@Component({
  selector: 'app-managestock',
  templateUrl: './managestock.component.html',
  styleUrls: ['./managestock.component.css'],
  providers: [
    { provide: DateAdapter, useClass:MomentDateAdapter, deps:[MAT_DATE_LOCALE]},
    { provide: MAT_DATE_FORMATS, useValue: MY_Formats }]
})
export class ManagestockComponent implements OnInit {
  public addCompany: any;
  public stockForm: FormGroup | any;
  stockprize: any;
  price: any;
  difference: any;
  minimum: any;
  maximum: any;
  average: any;
  alven:any;
  constructor(private companyService: CompanyService,
    private stockService: StockService,
    private snackBar:SnackBarService) { }




  ngOnInit(): void {
    this.addformGroupMethod();
    this.getCompany();

    // this.stockForm.setValue({
    //   minimum:this.difference ,
    //   maximum:this.difference  ,
    //   average:this.difference  ,
      
    // });



  }
  
  private addformGroupMethod() {
    this.stockForm = new FormGroup({
      companyCode: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
    })
    
  }

  getCompany() {
    this.companyService.searchCompany().subscribe(response => {
      this.addCompany = response.result;
      
    })
  }

  public get s() {
    return this.stockForm.controls
  }

  searchStocks(companyCode: any, startDate: any, endDate: any) {
    if(!this.stockForm.valid){
      this.snackBar.redSnackBar('Please provide all required fields', 'X')}
      else{
    this.stockService.searchStock(companyCode, startDate, endDate).subscribe((data) => {
      if (data.success == true){
        this.snackBar.greenSnackBar(data.messages[0],'X');
        this.price = data.result.stockDetails;
        if(this.price.length ==0 ){
          this.snackBar.greenSnackBar('No Data Available','X');
        }
        this.minimum =data.result.stockPriceDifference.minimum;
        this.maximum =data.result.stockPriceDifference.maximum;
        this.average =data.result.stockPriceDifference.average;
       } else{
        this.snackBar.redSnackBar(data.messages[0],'X');
       }
    });

  }}
}
