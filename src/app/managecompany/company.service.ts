import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userCompanyData } from './company.model';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companyUrl: string = environment.gateWayUrl;
  constructor(private http: HttpClient) { }

  public addCompany(user: userCompanyData): Observable<any> {
    return this.http.post(this.companyUrl + '/market/company/register', user);
  }
  public searchCompany(): Observable<any> {
    return this.http.get(this.companyUrl + '/market/company/getall')
  }
  public deleteCompany(companyCode: any) {
    return this.http.delete(this.companyUrl + '/market/company/delete/' + companyCode)
  }

}





















// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject} from 'rxjs';
// import { environment } from 'src/environments/environment';


// @Injectable({
//   providedIn: 'root'
// })
// export class ManagecompanyService {
//   loginUrl: string = environment.loginUrl;
//   constructor( private http:HttpClient) { }

//   private newCompany = new BehaviorSubject<any>({
//     // userName : 'Thiraviya selvam',
//     // password :'1512'
//   });

//   setNewCompanyInfo(company: any) {
//     this.newCompany.next(company);
//   }
//   getNewCompanyInfo() {
//     return this.newCompany.asObservable();
//   }
// }








//18-10-22

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { userCompanyData } from './company.model';


// @Injectable({
//   providedIn: 'root'
// })
// export class CompanyService {
//   companyUrl: string = environment.gateWayUrl;
//   constructor( private http:HttpClient) { }

//   listarray=[{
//     "companyCode":"",
//     "companyCeo":"",
//     "stockExchange":"",
//     "companyName":"",
//     "companyWebsite":"",
//     "companyTurnover":""
// }];

// public addCompany(user: userCompanyData): Observable<any> {
//   return this.http.post(this.companyUrl + '/market/company/register', user);
// }

// getData(){
//   return this.listarray;
// }
// saveData(input:any){
//   this.listarray.push(input);  
// }