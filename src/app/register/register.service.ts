import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userRegisterData } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl: string = environment.gateWayUrl;
  constructor(private http: HttpClient) { }

  public registerSubmit(user: userRegisterData): Observable<any> {
    return this.http.post(this.registerUrl + '/market/user/register', user);
  }

}

