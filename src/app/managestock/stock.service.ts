
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userStockData } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stockUrl: string = environment.gateWayUrl;

  constructor(private http:HttpClient) { }

  public addStock(user: userStockData): Observable<any> {
    return this.http.post(this.stockUrl + '/market/stock/add', user);
  }

 public searchStock(companyCode:any,startDate:any,endDate:any):Observable<any> {
    return this.http.get(this.stockUrl + '/market/stock/get/'+companyCode.value+ '/'+startDate.value+'/'+endDate.value)
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






// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class StockService {
//   stockUrl: string = environment.gateWayUrl;

//   constructor() { }
//   stockArray = [{
//     "companyName": "JeganFinance"
//   }];
//   getStock() {
//     return this.stockArray;
//   }
//   saveStock(stock: any) {
//     this.stockArray.push(stock)
//   }
// }