import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private inject: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let loginService = this.inject.get(LoginService)
        let token = loginService.GetToken()
        let jwtToken = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + token
            }
        });
        return next.handle(jwtToken);
    }

}


























// import {Injectable} from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { LoginService } from './login/login.service';
// import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs';


// @Injectable()
// export class JwtInterceptor implements HttpInterceptor{
//     constructor(private loginService:LoginService){}

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const user = this.loginService.userValue;
//         const isLoggedIn = user && user.token;
//         const isGateWayUrl = req.url.startsWith(environment.gateWayUrl);
//         if (isLoggedIn && isGateWayUrl){
//             req = req.clone({
//                 setHeaders: { Authorization:`Bearer ${user.token}`}
//             });
//         }
//         return next.handle(req)
//     }

// }