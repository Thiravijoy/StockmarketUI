import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from './register/register.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ManagecompanyModule } from './managecompany/managecompany.module';
import { AddcompanyModule } from './managecompany/addcompany/addcompany.module';
import { CompanyService } from './managecompany/company.service';
import { AddstockModule } from './managestock/addstock/addstock.module';
import { ManagestockModule } from './managestock/managestock.module';
import { RegisterService } from './register/register.service';
import { StockService } from './managestock/stock.service';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { SnackBarService } from './snack-bar.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './managecompany/mat-confirm-dialog/mat-confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MatConfirmDialogComponent
  ],

  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RegisterModule,
    DashboardModule,
    ManagecompanyModule,
    AddcompanyModule,
    ManagestockModule,
    AddstockModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    
    
    
  ],

  providers: [LoginService, CompanyService, RegisterService, StockService, SnackBarService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

