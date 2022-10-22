import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcompanyComponent } from './addcompany.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [AddcompanyComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatSelectModule
  ]
})
export class AddcompanyModule { }
