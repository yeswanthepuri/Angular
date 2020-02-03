import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  exports:[    
    CommonModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule, 
    BsDatepickerModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
